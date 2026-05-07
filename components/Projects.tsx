import React from 'react';
import { Project } from '../types';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const projects: (Project & { description: string })[] = [
  { 
    id: 1, 
    title: "The Obsidian Loft", 
    category: "Modern", 
    image: "https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=2674&auto=format&fit=crop",
    description: "A masterclass in monochromatic textures, featuring raw concrete walls softened by plush charcoal velvet."
  },
  { 
    id: 2, 
    title: "Velvet & Gold Lounge", 
    category: "Art Deco", 
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2670&auto=format&fit=crop",
    description: "An homage to the roaring twenties, combining geometric gold accents with deep navy hues."
  },
  { 
    id: 3, 
    title: "Serenity Spa", 
    category: "Minimalist", 
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop",
    description: "Stripped back to essentials, this space emphasizes natural light, organic materials, and breathing room."
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-luxury-dark transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase font-bold">Popular Styles</span>
          <h2 className="text-4xl font-serif text-gray-900 dark:text-white mt-4 transition-colors">Signature Spaces</h2>
        </div>

        <div className="relative">
          {/* Controls (Visual only for this demo) */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 dark:text-white/50 hover:text-luxury-gold dark:hover:text-luxury-gold hidden md:block transition-colors">
            <ChevronLeft size={32} />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 dark:text-white/50 hover:text-luxury-gold dark:hover:text-luxury-gold hidden md:block transition-colors">
             <ChevronRight size={32} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group text-center">
                <div className="relative overflow-hidden rounded-t-[150px] aspect-[3/4] mb-6 border-b-2 border-luxury-gold bg-gray-100 dark:bg-luxury-dim transition-colors">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">View Project</span>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-2 transition-colors">{project.title}</h3>
                <p className="text-xs text-luxury-gold uppercase tracking-widest">{project.category}</p>
                <p className="text-xs text-gray-600 dark:text-gray-500 mt-2 px-4 leading-relaxed line-clamp-2 transition-colors">
                   {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};