'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';

// SVG component for robot/AI background elements
const RobotElement = ({ className, size = 40 }: { className: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M18 7H6C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H18C19.1046 17 20 16.1046 20 15V9C20 7.89543 19.1046 7 18 7Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M14 21V17H10V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor"/>
    <circle cx="15.5" cy="11.5" r="1.5" fill="currentColor"/>
    <rect x="7" y="14" width="10" height="1" rx="0.5" fill="currentColor"/>
  </svg>
);

// Circuit line component
const CircuitLine = ({ className }: { className: string }) => (
  <div className={`${className} absolute bg-cyan-500 opacity-20`}></div>
);

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Optional: Add some animation to the robot elements
    const interval = setInterval(() => {
      const robots = document.querySelectorAll('.robot-element');
      robots.forEach(robot => {
        const opacity = parseFloat(getComputedStyle(robot).opacity);
        robot.setAttribute('style', `opacity: ${opacity < 0.8 ? opacity + 0.1 : 0.2}`);
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <Head>
        <title>About the Author | Project Exodus</title>
        <meta name="description" content="About C.D. Totten, author of the Project Exodus series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Circuit Elements */}
      <CircuitLine className="h-px w-1/3 top-20 left-0" />
      <CircuitLine className="h-px w-1/4 top-40 right-0" />
      <CircuitLine className="w-px h-1/3 top-0 left-1/4" />
      <CircuitLine className="w-px h-1/4 bottom-0 right-1/3" />
      <CircuitLine className="h-px w-1/2 bottom-60 left-1/4" />
      
      {/* Robot/AI Elements scattered in background */}
      <RobotElement className="robot-element absolute top-20 right-10 text-cyan-500 opacity-20" size={60} />
      <RobotElement className="robot-element absolute bottom-40 left-20 text-purple-500 opacity-30" size={50} />
      <RobotElement className="robot-element absolute top-1/3 left-10 text-blue-500 opacity-20" size={40} />
      <RobotElement className="robot-element absolute bottom-20 right-1/4 text-teal-500 opacity-30" size={70} />
      <RobotElement className="robot-element absolute top-1/2 right-1/5 text-indigo-500 opacity-20" size={45} />

      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            PROJECT EXODUS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          <h2 className="text-2xl mt-4 text-cyan-300 font-light">MEET THE CREATOR</h2>
        </header>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 mb-12 shadow-lg shadow-cyan-900/20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-cyan-500/50 shadow-lg shadow-cyan-900/30">
                {/* Replace with actual author image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-6xl text-cyan-500">C.D.</span>
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-900/80 to-transparent h-1/4"></div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">C.D. Totten</h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  C.D. Totten discovered storytelling as the perfect escape from algebra class—because finding "x" pales in comparison to slaying dragons and unraveling intergalactic conspiracies. After being "politely asked to leave" Neverland for excessive sarcasm, Totten decided to immortalize adventures in print instead.
                </p>
                <p>
                  Armed with nothing but a fountain pen (not a quill, despite rumors) and an unhealthy relationship with caffeine that keeps local baristas concerned, Totten transforms the mundane into the magnificent through stories that blur the line between reality and imagination.
                </p>
                <p>
                  The idea for this particular tale arrived during one of those legendary 3 a.m. sessions when the cat demanded attention and the coffee had gone cold. It began as a simple question: "What if the most ordinary person stumbled into something extraordinarily impossible?" The answer evolved into this story—crafted in the wee hours between feline interruptions and caffeine refills.
                </p>
                <p>
                  When not battling the formidable forces of writer's block or hunting for inspiration in the bottom of a coffee mug, Totten can be found tripping over invisible objects, losing staring contests to the aforementioned cat, and making readers chuckle, tear up, and—most dangerously—think at odd hours.
                </p>
                <p className="italic text-cyan-400">
                  Consider yourself warned: this journey might just be more unpredictable than a rollercoaster. But then again, aren't the best stories always a little surprising?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg shadow-cyan-900/10 flex flex-col items-center text-center">
            <div className="text-cyan-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-cyan-300">The Series</h3>
            <p className="text-gray-400">Embark on an interstellar journey that challenges the very fabric of reality itself.</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg shadow-cyan-900/10 flex flex-col items-center text-center">
            <div className="text-cyan-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-cyan-300">Events</h3>
            <p className="text-gray-400">Join C.D. Totten at upcoming readings, signings, and conventions.</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg shadow-cyan-900/10 flex flex-col items-center text-center">
            <div className="text-cyan-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-cyan-300">Contact</h3>
            <p className="text-gray-400">Get in touch with C.D. Totten for inquiries, interviews, or just to say hello.</p>
          </div>
        </div>
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <div className="mb-4 flex justify-center space-x-4">
            <a href="#" className="text-cyan-500 hover:text-cyan-400 transition">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-cyan-500 hover:text-cyan-400 transition">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-cyan-500 hover:text-cyan-400 transition">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          <p>© {new Date().getFullYear()} C.D. Totten. All rights reserved.</p>
          <p className="mt-1">Project Exodus is a work of fiction. Any resemblance to actual interstellar expeditions is purely coincidental.</p>
        </footer>
      </div>
    </div>
  );
}