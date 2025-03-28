// components/PlanetsBackground.tsx
import { useEffect, useRef, useState } from 'react';

interface Planet {
  id: number;
  x: number;
  y: number;
  size: number;
  color1: string;
  color2: string;
  speed: number;
  hasRings: boolean;
  ringColor: string;
  ringAngle: number;
  moons: Moon[];
  glowColor: string;
  glowSize: number;
  craters?: {
    count: number;
    color: string;
  };
  clouds?: {
    enabled: boolean;
    color: string;
    coverage: number;
  };
}

interface Moon {
  size: number;
  distance: number;
  color: string;
  orbitSpeed: number;
  orbitPosition: number;
}

const PlanetsBackground: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize planets based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
        
        // Generate random planets
        const numberOfPlanets = Math.min(5, Math.max(3, Math.floor(clientWidth / 400)));
        generatePlanets(numberOfPlanets, clientWidth, clientHeight);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate random planets
  const generatePlanets = (count: number, width: number, height: number) => {
    const newPlanets: Planet[] = [];
    
    const planetColors = [
      ['#ff9d00', '#ff4000'], // Mars-like
      ['#a6cee3', '#1f78b4'], // Neptune-like
      ['#b2df8a', '#33a02c'], // Alien green
      ['#ffeda0', '#feb24c'], // Saturn-like
      ['#f768a1', '#7a0177'], // Exotic pink
      ['#9ecae1', '#3182bd'], // Ice planet
      ['#bcbddc', '#756bb1'], // Purple gas giant
      ['#74c476', '#238b45']  // Emerald planet
    ];

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 100 + 50; // Planet size between 50-150px
      const x = Math.random() * (width - size);
      const y = Math.random() * (height - size);
      
      // Random colors from our planet palette
      const colorIndex = Math.floor(Math.random() * planetColors.length);
      const [color1, color2] = planetColors[colorIndex];
      
      // Chance of having rings
      const hasRings = Math.random() > 0.6;
      
      // Number of moons (0-3)
      const numberOfMoons = Math.floor(Math.random() * 4);
      const moons: Moon[] = [];
      
      for (let j = 0; j < numberOfMoons; j++) {
        moons.push({
          size: Math.random() * 10 + 5,
          distance: size / 2 + 20 + Math.random() * 30,
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
          orbitSpeed: Math.random() * 0.02 + 0.01,
          orbitPosition: Math.random() * Math.PI * 2,
        });
      }
      
      // Some planets have craters
      const hasCraters = Math.random() > 0.7;
      
      // Some planets have clouds
      const hasClouds = Math.random() > 0.5;
      
      newPlanets.push({
        id: i,
        x,
        y,
        size,
        color1,
        color2,
        speed: Math.random() * 0.5 + 0.1, // Parallax speed modifier
        hasRings,
        ringColor: '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'),
        ringAngle: Math.random() * 45,
        moons,
        glowColor: color1,
        glowSize: Math.random() * 20 + 10,
        ...(hasCraters && {
          craters: {
            count: Math.floor(Math.random() * 10 + 5),
            color: 'rgba(0, 0, 0, 0.2)',
          }
        }),
        ...(hasClouds && {
          clouds: {
            enabled: true,
            color: 'rgba(255, 255, 255, 0.7)',
            coverage: Math.random() * 0.5 + 0.2,
          }
        }),
      });
    }
    
    setPlanets(newPlanets);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {planets.map(planet => (
            <radialGradient
              key={`gradient-${planet.id}`}
              id={`planet-gradient-${planet.id}`}
              cx="50%"
              cy="50%"
              r="50%"
              fx="25%"
              fy="25%"
            >
              <stop offset="0%" stopColor={planet.color1} />
              <stop offset="100%" stopColor={planet.color2} />
            </radialGradient>
          ))}
          
          {/* Filter for the glow effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {planets.map(planet => {
          // Calculate position based on scroll
          const posY = planet.y - scrollY * planet.speed;
          const wrappedPosY = ((posY % dimensions.height) + dimensions.height) % dimensions.height;
          
          // Update moon positions based on time
          const updatedMoons = planet.moons.map(moon => {
            const time = Date.now() * moon.orbitSpeed;
            const orbitPosition = moon.orbitPosition + time;
            return { ...moon, orbitPosition };
          });
          
          return (
            <g key={planet.id} transform={`translate(${planet.x}, ${wrappedPosY})`}>
              {/* Planet glow */}
              <circle
                cx={planet.size / 2}
                cy={planet.size / 2}
                r={planet.size / 2 + planet.glowSize}
                fill={`url(#planet-gradient-${planet.id})`}
                opacity="0.15"
                filter="url(#glow)"
              />
              
              {/* Planet body */}
              <circle
                cx={planet.size / 2}
                cy={planet.size / 2}
                r={planet.size / 2}
                fill={`url(#planet-gradient-${planet.id})`}
                opacity="0.3"
              />
              
              {/* Rings if the planet has them */}
              {planet.hasRings && (
                <ellipse
                  cx={planet.size / 2}
                  cy={planet.size / 2}
                  rx={planet.size * 0.8}
                  ry={planet.size * 0.2}
                  fill="none"
                  stroke={planet.ringColor}
                  strokeWidth={planet.size / 20}
                  opacity={0.7}
                  transform={`rotate(${planet.ringAngle}, ${planet.size / 2}, ${planet.size / 2})`}
                />
              )}
              
              {/* Moons orbiting the planet */}
              {updatedMoons.map((moon, idx) => {
                const moonX = planet.size / 2 + Math.cos(moon.orbitPosition) * moon.distance;
                const moonY = planet.size / 2 + Math.sin(moon.orbitPosition) * moon.distance;
                
                return (
                  <g key={`moon-${planet.id}-${idx}`}>
                    {/* Moon orbit (faint circle) */}
                    <circle
                      cx={planet.size / 2}
                      cy={planet.size / 2}
                      r={moon.distance}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeDasharray="1 6"
                    />
                    
                    {/* Moon body */}
                    <circle
                      cx={moonX}
                      cy={moonY}
                      r={moon.size}
                      fill={moon.color}
                    />
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PlanetsBackground;