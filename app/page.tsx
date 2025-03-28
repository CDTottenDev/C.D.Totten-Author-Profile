'use client';

// pages/index.tsx
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import Header from './components/header';
import Footer from './components/footer';
import BookShowcase from './components/bookshowcase';
import ParallaxStars from './components/parallaxstars';
import NewsletterSignup from './components/newslettersignup';
import SargeNarration from './components/SargeNarration';
import PlanetsBackground from './components/planetsbackground';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState<'home' | 'author' | 'books' | 'newsletter'>('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine which section is in view for SARGE narration
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sectionsOffsets = {
        home: 0,
        author: document.querySelector('section:nth-of-type(2)')?.offsetTop || 0,
        books: document.querySelector('#books')?.offsetTop || 0,
        newsletter: document.querySelector('section:nth-of-type(4)')?.offsetTop || 0
      };
      
      if (scrollPosition >= sectionsOffsets.newsletter) {
        setCurrentSection('newsletter');
      } else if (scrollPosition >= sectionsOffsets.books) {
        setCurrentSection('books');
      } else if (scrollPosition >= sectionsOffsets.author) {
        setCurrentSection('author');
      } else {
        setCurrentSection('home');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden">
      <PlanetsBackground />
      <Head>
        <title>C.D. Totten | Science Fiction Author</title>
        <meta name="description" content="Official website of C.D. Totten, author of the Project Exodus series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ParallaxStars />
      <Header />
      
      <SargeNarration section={currentSection} />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage: 'url("/images/space-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)'
            }}
          />
          
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))'
            }}
          />
          
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              style={{ 
                transform: `translateY(${scrollY * 0.2}px)`,
                textShadow: '0 0 20px rgba(101, 116, 205, 0.8)'
              }}
            >
              C.D. TOTTEN
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              Exploring the future of humanity among the stars
            </p>
            <div
              className="inline-block"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <Link 
                href="#books"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 
                text-white font-bold py-3 px-8 rounded-full inline-block 
                transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                Discover the Books
              </Link>
            </div>
          </div>
        </section>
        
        {/* Author Introduction */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-glow">
                  <Image
                    src="/images/personal-image.jpg"
                    alt="C.D. Totten"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">About the Author</h2>
                <p className="text-lg mb-6">
                  C.D. Totten is a hard science fiction author fascinated by humanity's potential future among the stars. 
                  With a background in astronomy and a passion for scientific accuracy, Totten weaves compelling 
                  narratives that explore the intersection of advanced technology, cosmic discovery, and the enduring 
                  human spirit.
                </p>
                <p className="text-lg">
                  The "Project Exodus" series represents Totten's vision of humanity's first serious attempts to 
                  establish a presence beyond our solar system, combining rigorous scientific concepts with 
                  captivating character-driven stories.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                  >
                    <span>Read More</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="h-full w-full" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.3) 0%, rgba(0, 0, 0, 0) 70%)' }}></div>
          </div>
        </section>
        
        {/* Featured Book */}
        <section id="books" className="py-20 relative">
          <div 
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: 'url("/images/stars-bg.jpg")',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Project Exodus Series
            </h2>
            
            <BookShowcase 
              title="Project Exodus: The Drake Equation" 
              coverImage="/images/p.e.drake equation book cover.jpg"
              series="Project Exodus"
              book="Book 1"
              releaseDate="2023"
              description="Seven centuries after an alien invasion drove humanity underwater, a daring team led by the charismatic Ethan Drake builds humanity's first spaceship since humanities relocation into the sea. Aided by S.A.R.G.E., an AI whose witty banter suggests an unsettling level of sentience, this eclectic crew of brilliant scientists and tough security personnel tackle impossible challenges with ingenuity and humor. As they prepare for the Pioneer's historic launch—a moment of worldwide celebration—Project Exodus becomes more than a mission; it's humanity's audacious bid to reclaim the stars and a testament to resilience against all odds."
              buyLinks={[
                { name: "Amazon", url: "https://www.amazon.com/Project-Exodus-Equation-military-science-ebook/dp/B0C9FXY983/ref=sr_1_3?crid=1HOFQ85XEHZO9&dib=eyJ2IjoiMSJ9.UwCIhN17qHMPSmhIjFGB44ApuZ7edNNhJgJEUrKhJbh9NNGxFfE3dQ3v-GMx2ES9ZoB-wgsgfZ-VN_kgo-ISKMoaaPQC-xnrUbFJn8xfIG8Ed0TTxf9NL24Z9IGSuLsht0Pbl_fh_tu9gIOF7eAbe0Q5r_xCcA5xv28Ni0wm1VA.noR2spG_fjwuvWw5PjRbtUbX-WvPInNH7w7x6Hhx2YQ&dib_tag=se&keywords=c.d.+totten&qid=1743174644&s=books&sprefix=c.d.+totten%2Cstripbooks%2C90&sr=1-3" },
              ]}
            />
            
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-6">Coming Soon in the Project Exodus Series</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-blue-600 hover:border-blue-400 transition-all hover:shadow-glow-sm">
                  <h4 className="text-xl font-bold mb-3 text-blue-400">Project Exodus: First Contact</h4>
                  <p className="text-gray-300">Book 2 in the thrilling series - Expected Q4 2025</p>
                </div>
                <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-blue-600 hover:border-blue-400 transition-all hover:shadow-glow-sm">
                  <h4 className="text-xl font-bold mb-3 text-blue-400">Project Exodus: The Fermi Paradox</h4>
                  <p className="text-gray-300">Book 3 in the thrilling series - Expected 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-20 relative">
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(23, 49, 88, 0.6), rgba(0,0,0,0.9))'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}