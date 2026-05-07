import React from 'react';
import { ServiceItem } from '../types';

const residentialServices: ServiceItem[] = [
  { title: "Full Home Renovation", description: "Comprehensive overhaul of your living space, from blueprints to finishing touches." },
  { title: "Luxury Kitchen Design", description: "Custom cabinetry, marble countertops, and ergonomic layouts designed for gathering." },
  { title: "Master Suite Styling", description: "Creating a personal sanctuary with bespoke furniture and premium textiles." },
  { title: "Living Room Curating", description: "Selecting the perfect blend of art, textiles, and furniture pieces to create a welcoming atmosphere." },
];

const commercialServices: ServiceItem[] = [
  { title: "Corporate Office Layouts", description: "Optimizing productivity through ergonomic and aesthetic workspace design." },
  { title: "Boutique Retail Design", description: "Customer-centric flows with high-impact visual merchandising zones." },
  { title: "Hospitality Interiors", description: "Atmospheric design for hotels, restaurants, and lounges that creates unforgettable experiences." },
  { title: "Lobby & Reception", description: "Making a lasting first impression with grand entryways and statement lighting." },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-light-bg dark:bg-luxury-dim border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase font-bold">Our Services</span>
          <h2 className="text-4xl font-serif text-gray-900 dark:text-white mt-4 transition-colors">Design Expertise</h2>
        </div>

        {/* Residential */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="relative h-[400px] lg:h-auto bg-stone-200 dark:bg-black rounded-tr-[100px] overflow-hidden transition-colors">
             <img 
               src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop" 
               alt="Residential Luxury Living Room" 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-4 right-4 bg-luxury-gold text-white dark:text-luxury-dark px-3 py-1 text-xs font-bold uppercase shadow-lg">New</div>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-8 border-l-2 border-luxury-gold pl-4 transition-colors">Private Spaces</h3>
            <h4 className="text-3xl font-serif text-gray-800 dark:text-white mb-6 transition-colors">Residential Design</h4>
            <div className="space-y-8">
              {residentialServices.map((service, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="flex items-center gap-4 mb-2">
                     <div className="w-2 h-2 rounded-full bg-luxury-gold group-hover:scale-150 transition-transform"></div>
                     <h5 className="text-lg font-serif text-gray-700 dark:text-gray-200 group-hover:text-luxury-gold transition-colors">{service.title}</h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pl-6 border-l border-gray-300 dark:border-white/5 ml-1 transition-colors">{service.description}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-block mt-8 text-xs text-luxury-gold uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">Explore Residential Design →</a>
          </div>
        </div>

        {/* Commercial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-8 border-l-2 border-luxury-gold pl-4 transition-colors">Business & Hospitality</h3>
            <h4 className="text-3xl font-serif text-gray-800 dark:text-white mb-6 transition-colors">Commercial Spaces</h4>
            <div className="space-y-8">
              {commercialServices.map((service, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="flex items-center gap-4 mb-2">
                     <div className="w-2 h-2 rounded-full bg-luxury-gold group-hover:scale-150 transition-transform"></div>
                     <h5 className="text-lg font-serif text-gray-700 dark:text-gray-200 group-hover:text-luxury-gold transition-colors">{service.title}</h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pl-6 border-l border-gray-300 dark:border-white/5 ml-1 transition-colors">{service.description}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-block mt-8 text-xs text-luxury-gold uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">Explore Commercial Spaces →</a>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-auto bg-stone-200 dark:bg-black rounded-tl-[100px] overflow-hidden transition-colors">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
               alt="Commercial Dark Lobby" 
               className="w-full h-full object-cover"
             />
             <div className="absolute top-4 left-4 bg-luxury-gold text-white dark:text-luxury-dark px-3 py-1 text-xs font-bold uppercase shadow-lg">New</div>
          </div>
        </div>
      </div>
    </section>
  );
};