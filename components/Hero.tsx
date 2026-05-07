import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2670&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2670&auto=format&fit=crop"  
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
      <div className="text-center mb-10 z-10">
        <p className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-4 font-bold">Est. 2024</p>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 dark:text-white mb-2 leading-tight transition-colors">
          Redefining <br />
          <span className="italic text-luxury-gold">Elegant</span> Living
        </h1>
        <p className="text-gray-600 dark:text-slate-400 text-sm mt-4 tracking-wide max-w-lg mx-auto transition-colors">
          A taste of perfection in every room - classic luxury with a modern twist.
        </p>
      </div>

      {/* Pill Container */}
      <div className="relative w-full max-w-6xl h-[60vh] md:h-[70vh] rounded-[40px] md:rounded-[100px] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group bg-gray-100 dark:bg-black transition-colors">
        
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10" /> {/* Overlay */}
            <img 
              src={slide} 
              alt={`Interior Design ${index + 1}`} 
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}

        {/* Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/40 dark:border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-luxury-dark transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/40 dark:border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-luxury-dark transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* Circular Sticker */}
        <div className="absolute -bottom-8 -right-8 md:bottom-10 md:right-10 z-20 hidden md:flex">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-luxury-gold/30 bg-white/10 dark:bg-luxury-dark/80 backdrop-blur-md flex items-center justify-center animate-spin-slow shadow-lg">
            <svg className="w-full h-full p-2 text-luxury-gold" viewBox="0 0 100 100">
               <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
               <text className="text-[10px] uppercase tracking-widest fill-current">
                 <textPath href="#curve">
                   Book Consultation • View Portfolio •
                 </textPath>
               </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl text-white">→</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Info of Hero */}
      <div className="w-full max-w-6xl mt-6 flex justify-between items-end text-[10px] md:text-xs text-luxury-gold tracking-widest uppercase border-t border-gray-200 dark:border-white/5 pt-6 transition-colors">
         <div>Visit Us: Design District, London 9578, UK</div>
         <div>Open: Mon - Fri: 9:00 AM to 6:00 PM</div>
      </div>
    </section>
  );
};