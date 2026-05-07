import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-light-bg dark:bg-luxury-dim relative transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase font-bold">Reviews</span>
        <h2 className="text-4xl font-serif text-gray-900 dark:text-white mt-4 mb-12 transition-colors">Happy Testimonials</h2>

        <div className="max-w-3xl mx-auto">
          <Quote className="text-luxury-gold/30 mx-auto w-12 h-12 mb-8" />
          <p className="text-xl md:text-2xl font-serif italic text-gray-800 dark:text-gray-300 mb-10 leading-relaxed transition-colors">
            "An unforgettable transformation! Every room feels like a masterpiece, and the ambiance is simply perfect. From the first sketch to the last cushion, every moment was pure creative bliss."
          </p>
          
          <div className="flex flex-col items-center">
            <div className="flex -space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-white dark:border-luxury-dark overflow-hidden bg-stone-200 dark:bg-stone-800">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Client 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-luxury-gold overflow-hidden z-10 -mt-2 bg-stone-200 dark:bg-stone-800">
                 <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Client 2" className="w-full h-full object-cover" />
              </div>
               <div className="w-12 h-12 rounded-full border-2 border-white dark:border-luxury-dark overflow-hidden bg-stone-200 dark:bg-stone-800">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Client 3" className="w-full h-full object-cover" />
              </div>
            </div>
            <h4 className="text-luxury-gold text-xs font-bold tracking-widest uppercase mb-1">Stephen Care</h4>
            <div className="text-[10px] text-gray-500 dark:text-gray-500 flex items-center gap-4 transition-colors">
               <span>25k+ Happy Customers</span>
               <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></span>
               <span>4.9/5 Rated on Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};