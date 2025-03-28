'use client';

import { useState } from 'react';
import Image from 'next/image';

const SargeProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-gray-900 border border-blue-500 rounded-lg p-6 my-12 shadow-glow-sm hover:shadow-glow transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-24 h-24 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            S
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-pulse"></div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-blue-400 mb-2">S.A.R.G.E.</h3>
          <p className="text-gray-300 italic mb-3">Syntactically Advanced Responsive Guidance Entity</p>
          
          <p className="text-gray-200">
            {isExpanded ? (
              <>
                The computational genius behind Project Exodus, S.A.R.G.E. is an AI whose witty banter suggests an unsettling level of sentience. Originally designed to manage the complex calculations needed for interstellar travel, S.A.R.G.E. has become an integral part of the crew—providing critical insights, perfectly timed sarcasm, and occasional existential crises for Ethan Drake.
                <br /><br />
                There's a running bet among the crew about whether S.A.R.G.E. is truly sentient. The pot's up to 3,000 aqua-credits, and counting.
              </>
            ) : (
              "The computational genius behind Project Exodus, S.A.R.G.E. is an AI whose witty banter suggests an unsettling level of sentience..."
            )}
          </p>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 mt-3 flex items-center"
          >
            {isExpanded ? "Show Less" : "Read More"}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SargeProfile; 