import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts: BlogPost[] = [
  { id: 1, day: "18", date: "April 18, 2024", title: "Biophilic Design: Nature enters the luxury home", category: "Trends", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, day: "25", date: "April 25, 2024", title: "The Return of Art Deco in Modern Penthouses", category: "History", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2000&auto=format&fit=crop" },
  { id: 3, day: "28", date: "April 28, 2024", title: "Sculpting with Light: A Guide to Atmospherics", category: "Tips", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2670&auto=format&fit=crop" },
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-luxury-dark transition-colors duration-500 border-t border-gray-200 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
             <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase font-bold">The Journal</span>
             <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mt-4 transition-colors">Latest Design <br/> Insights</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors pb-2 border-b border-gray-300 dark:border-white/10 hover:border-luxury-gold">
            View All Articles <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Post - Takes up 7 columns */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative overflow-hidden w-full h-[400px] md:h-[500px] mb-8">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
               <img 
                 src={posts[0].image} 
                 alt={posts[0].title} 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute top-6 left-6 z-20 bg-white dark:bg-luxury-dim px-4 py-2 text-xs font-bold uppercase tracking-widest text-luxury-gold shadow-lg">
                 {posts[0].category}
               </div>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
               <span className="flex items-center gap-2"><Calendar size={12} className="text-luxury-gold"/> {posts[0].date}</span>
               <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
               <span className="flex items-center gap-2"><Clock size={12} className="text-luxury-gold"/> 5 Min Read</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-luxury-gold transition-colors">
              {posts[0].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2">
              Discover how integrating natural elements into luxury interiors creates a harmonious balance between opulence and organic beauty. We explore the latest trends in biophilic architectural design.
            </p>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white border-b-2 border-luxury-gold pb-1 group-hover:text-luxury-gold transition-colors">
              Read Article
            </span>
          </div>

          {/* Sidebar List - Takes up 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="flex gap-6 group cursor-pointer border-b border-gray-100 dark:border-white/5 pb-8 last:border-0">
                <div className="w-1/3 h-28 md:h-32 overflow-hidden relative">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                <div className="w-2/3 flex flex-col justify-center">
                   <div className="text-[10px] text-luxury-gold uppercase tracking-widest mb-2 font-bold">
                     {post.category}
                   </div>
                   <h4 className="text-xl font-serif text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-luxury-gold transition-colors">
                     {post.title}
                   </h4>
                   <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                     {post.date}
                   </div>
                </div>
              </div>
            ))}
            
            {/* Promo / Newsletter Box */}
            <div className="bg-gray-100 dark:bg-luxury-dim p-8 text-center mt-auto border border-gray-200 dark:border-white/5">
               <h5 className="font-serif text-xl text-gray-900 dark:text-white mb-2">Subscribe to our Newsletter</h5>
               <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">Get the latest design trends delivered to your inbox.</p>
               <div className="relative">
                 <input type="email" placeholder="Email Address" className="w-full bg-white dark:bg-luxury-dark border border-gray-200 dark:border-white/10 py-3 px-4 text-xs focus:outline-none focus:border-luxury-gold transition-colors dark:text-white"/>
                 <button className="absolute right-0 top-0 h-full px-4 text-luxury-gold hover:text-gray-900 dark:hover:text-white transition-colors">
                   <ArrowRight size={16} />
                 </button>
               </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:hidden text-center">
          <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-900 dark:text-white border-b border-gray-300 pb-1">
             View All Articles <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
