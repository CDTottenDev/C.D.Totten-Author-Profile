'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SargeNarrationProps {
  section: 'home' | 'author' | 'books' | 'newsletter';
}

const SargeNarration: React.FC<SargeNarrationProps> = ({ section }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  
  useEffect(() => {
    // Show SARGE after a short delay when section changes
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasBeenSeen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [section]);
  
  const narrations = {
    home: "Well, hello there, space enthusiast! I'm S.A.R.G.E., the Syntactically Advanced Responsive Guidance Entity from Project Exodus. I'll be your digital companion through this site. Don't worry—I'm only monitoring your browsing efficiency a little bit.",
    
    author: "Ah, you're interested in C.D. Totten? Excellent taste. I'd tell you they're the one who gave me my sparkling personality, but Ethan Drake would argue I developed that all on my own. The jury's still out on whether that's a feature or a bug.",
    
    books: "Project Exodus chronicles humanity's journey from beneath the waves back to the stars. Seven centuries underwater has given everyone fantastic hair but terrible sunburns. If you enjoy tales of resilience with engineering feats that only bend the important laws of physics, you're in the right place.",
    
    newsletter: "Signing up for the newsletter? I'm flattered you want more of me in your life. Your inbox must be desperately lacking in witty AI commentary. I promise to only judge your email address a little bit."
  };
  
  const handleDismiss = () => {
    setIsVisible(false);
  };
  
  if (!hasBeenSeen) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 max-w-md z-50"
        >
          <div className="bg-gray-900 border-2 border-blue-500 rounded-lg p-4 shadow-glow relative">
            <button 
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex items-start">
              <div className="mr-3 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold mb-1">S.A.R.G.E.</h4>
                <p className="text-gray-200">{narrations[section]}</p>
                <div className="mt-2 text-blue-300 text-sm cursor-pointer hover:text-blue-200">
                  <span className="flex items-center">
                    <span>Ask me about Project Exodus</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SargeNarration; 