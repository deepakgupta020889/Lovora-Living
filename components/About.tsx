import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-luxury-dark relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase mb-4 block font-bold">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white leading-tight transition-colors">
            Enjoy Every Moment with <br />
            <span className="text-gray-500 dark:text-slate-500 italic">Timeless</span> Design, <span className="text-luxury-gold">Modern</span> Living
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-8">
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed font-light transition-colors">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
            </p>
            <div className="flex gap-4">
              <div className="w-32 h-40 rounded-t-full overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-slate-900">
                 <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop" alt="Gold Texture Detail" className="w-full h-full object-cover" />
              </div>
              <div className="w-32 h-40 rounded-t-full overflow-hidden border border-gray-200 dark:border-white/10 mt-8 bg-gray-100 dark:bg-slate-900">
                 <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" alt="Velvet Chair Detail" className="w-full h-full object-cover" />
              </div>
            </div>
            <button className="px-8 py-3 border border-gray-800 dark:border-white/20 text-gray-900 dark:text-white text-xs tracking-widest uppercase hover:bg-luxury-gold hover:border-luxury-gold hover:text-white dark:hover:text-luxury-dark transition-all">
              Read More
            </button>
          </div>

          {/* Right Image Composition */}
          <div className="relative">
            <div className="relative z-10 bg-gray-100 dark:bg-black">
               <img 
                 src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2000&auto=format&fit=crop" 
                 alt="Main Interior Dark Luxury" 
                 className="w-full h-[500px] object-cover rounded-sm shadow-2xl dark:grayscale-[20%] transition-all"
               />
            </div>
            {/* Overlapping Circle */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border-4 border-white dark:border-luxury-dark overflow-hidden z-20 shadow-2xl hidden md:block bg-gray-100 dark:bg-black transition-colors">
               <img 
                 src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1000&auto=format&fit=crop" 
                 alt="Detail Dark Room" 
                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
               />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-luxury-gold/30 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};