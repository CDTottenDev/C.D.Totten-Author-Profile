'use client';

// pages/books.tsx
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ParallaxStars from '../components/parallaxstars';
import BookShowcase from '../components/bookshowcase';

// Book Types to filter
type BookCategory = 'all' | 'scifi' | 'children';

export default function Books() {
  const [activeCategory, setActiveCategory] = useState<BookCategory>('all');
  
  const filterBooks = (category: BookCategory) => {
    setActiveCategory(category);
  };
  
  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden">
      <Head>
        <title>Books by C.D. Totten | Science Fiction and Children's Author</title>
        <meta name="description" content="Explore books by C.D. Totten, including the Project Exodus series and Dreamland Adventures children's books." />
      </Head>
      
      <ParallaxStars />
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-16 relative">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Books by C.D. Totten
            </h1>
            
            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => filterBooks('all')}
                  className={`px-6 py-3 text-sm font-medium rounded-l-lg border ${
                    activeCategory === 'all'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                  }`}
                >
                  All Books
                </button>
                <button
                  onClick={() => filterBooks('scifi')}
                  className={`px-6 py-3 text-sm font-medium border-t border-b border-r ${
                    activeCategory === 'scifi'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                  }`}
                >
                  Science Fiction
                </button>
                <button
                  onClick={() => filterBooks('children')}
                  className={`px-6 py-3 text-sm font-medium rounded-r-lg border-t border-b border-r ${
                    activeCategory === 'children'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                  }`}
                >
                  Children's Books
                </button>
              </div>
            </div>
            
            {/* Science Fiction Books Section */}
            {(activeCategory === 'all' || activeCategory === 'scifi') && (
              <div className="mb-20">
                <h2 className="text-3xl font-bold mb-10 text-blue-400">
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
                    { name: "Amazon", url: "https://amazon.com" },
                  ]}
                />
                
                <div className="mt-16 text-center">
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
            )}
            
            {/* Children's Books Section */}
            {(activeCategory === 'all' || activeCategory === 'children') && (
              <div>
                <h2 className="text-3xl font-bold mb-10 text-blue-400">
                  Dreamland Adventures Series
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                  {/* Dreamland Adventures Vol 1 */}
                  <ChildrensBook
                    title="Dreamland Adventures Vol. 1"
                    coverImage="/images/dream book 1.jpg"
                    series="Dreamland Adventures"
                    book="Volume 1"
                    releaseDate="2023"
                    description="Join Billy and Luna as they embark on magical adventures in the fantastical Dreamland. These bedtime stories are designed to inspire imagination and wonder in young readers while teaching valuable life lessons."
                    amazonLink="https://www.amazon.com/Dreamland-Adventures-Vol-1-Bedtime-Stories/dp/B0C5YMLZ6C"
                  />
                  
                  {/* Dreamland Adventures Vol 2 */}
                  <ChildrensBook
                    title="Dreamland Adventures Vol. 2"
                    coverImage="/images/dream book 2.jpg"
                    series="Dreamland Adventures"
                    book="Volume 2"
                    releaseDate="2023"
                    description="The adventure continues with Billy and Luna as they encounter new friends and explore more magical places in Dreamland. Each story combines fun with gentle lessons about friendship, courage, and kindness."
                    amazonLink="https://www.amazon.com/Dreamland-Adventures-Vol-2-Bedtime-Stories/dp/B0C64259CQ"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {/* Dreamland Adventures Vol 3 */}
                  <ChildrensBook
                    title="Dreamland Adventures Vol. 3"
                    coverImage="/images/dream book 3.jpg"
                    series="Dreamland Adventures"
                    book="Volume 3"
                    releaseDate="2023"
                    description="Billy and Luna's adventures reach new heights as they explore the Cloud Kingdom and the mysterious Underwater City. These charming stories will delight children while encouraging them to be brave, kind, and creative."
                    amazonLink="https://www.amazon.com/Dreamland-Adventures-Vol-3-Bedtime-Stories/dp/B0C6C315TP"
                  />
                  
                  {/* Dreamland Adventures Vol 4 */}
                  <ChildrensBook
                    title="Dreamland Adventures Vol. 4"
                    coverImage="/images/dream book 4.jpg"
                    series="Dreamland Adventures"
                    book="Volume 4"
                    releaseDate="2023"
                    description="The latest collection of Dreamland stories finds Billy and Luna learning about the importance of teamwork, honesty, and caring for others as they visit the Rainbow Forest and the Starlight Valley."
                    amazonLink="https://www.amazon.com/Dreamland-Adventures-Vol-4-Bedtime-Stories/dp/B0C63J2XKL"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

interface ChildrensBookProps {
  title: string;
  coverImage: string;
  series: string;
  book: string;
  releaseDate: string;
  description: string;
  amazonLink: string;
}

const ChildrensBook: React.FC<ChildrensBookProps> = ({
  title,
  coverImage,
  series,
  book,
  releaseDate,
  description,
  amazonLink
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-glow-sm">
      <div className="flex flex-col md:flex-row p-6 h-full">
        <div 
          className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0 mb-6 md:mb-0 md:mr-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`relative h-full w-full overflow-hidden rounded-lg transition-all duration-500 transform ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}>
            <Image
              src={coverImage}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500"
            />
          </div>
        </div>
        
        <div className="flex flex-col flex-1">
          <div>
            <div className="text-sm font-semibold text-purple-400 mb-1">
              {series} · {book} · {releaseDate}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-300 mb-6 text-sm">{description}</p>
          </div>
          
          <div className="mt-auto">
            <a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 
                text-white font-bold py-2 px-4 rounded-md transition-all duration-300 hover:shadow-glow-sm"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};