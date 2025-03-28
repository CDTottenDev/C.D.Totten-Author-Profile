// components/BookShowcase.tsx
import Image from 'next/image';
import { useState } from 'react';

interface BuyLink {
  name: string;
  url: string;
}

interface BookShowcaseProps {
  title: string;
  coverImage: string;
  series: string;
  book: string;
  releaseDate: string;
  description: string;
  buyLinks: BuyLink[];
}

const BookShowcase: React.FC<BookShowcaseProps> = ({
  title,
  coverImage,
  series,
  book,
  releaseDate,
  description,
  buyLinks
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
      <div 
        className="relative w-64 lg:w-80 shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative h-96 lg:h-[480px] overflow-hidden rounded-lg shadow-2xl transition-all duration-500 transform ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        >
          <Image
            src={coverImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500"
          />
          
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-500 ${
              isHovered ? 'opacity-70' : 'opacity-40'
            }`}
          ></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-500">
            <div 
              className="text-sm font-semibold text-blue-400 mb-1 border border-blue-400 rounded-full px-3 py-1 inline-block"
            >
              {series}
            </div>
            <div className="text-xs text-gray-300">{book} · {releaseDate}</div>
          </div>
        </div>
        
        <div 
          className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg transform transition-transform duration-500"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
      
      <div className="lg:flex-1">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg mb-6 text-gray-300">{description}</p>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-blue-400">Available At</h4>
          <div className="flex flex-wrap gap-3">
            {buyLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-gray-200 py-2 px-4 rounded-md transition-colors flex items-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShowcase;