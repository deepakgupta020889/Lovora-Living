import React from 'react';

export const Booking: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-light-bg dark:bg-luxury-dim relative overflow-hidden transition-colors duration-500">
      {/* Decorative large circle background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white dark:bg-white/5 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-100 transition-opacity"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Form */}
          <div>
            <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase mb-2 block font-bold">Online Booking</span>
            <h2 className="text-4xl font-serif text-gray-900 dark:text-white mb-6 transition-colors">Book A Consultation</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-10 transition-colors">
              Booking request +01-123-123456 or fill out the order form below.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-300 dark:border-white/10 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-luxury-gold transition-colors text-sm" />
                </div>
                <div className="group">
                  <input type="text" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-300 dark:border-white/10 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-luxury-gold transition-colors text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                   <select className="w-full bg-transparent border-b border-gray-300 dark:border-white/10 py-3 text-gray-500 dark:text-gray-300 focus:outline-none focus:border-luxury-gold transition-colors text-sm appearance-none">
                     <option className="bg-white dark:bg-luxury-dark text-gray-900 dark:text-white">1 Person (Consultation)</option>
                     <option className="bg-white dark:bg-luxury-dark text-gray-900 dark:text-white">2 People</option>
                     <option className="bg-white dark:bg-luxury-dark text-gray-900 dark:text-white">Enterprise Team</option>
                   </select>
                </div>
                <div className="group">
                  <input type="text" placeholder="DD-MM-YYYY" className="w-full bg-transparent border-b border-gray-300 dark:border-white/10 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-luxury-gold transition-colors text-sm" />
                </div>
              </div>
              <div className="group">
                <textarea placeholder="Special Request" rows={3} className="w-full bg-transparent border-b border-gray-300 dark:border-white/10 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-luxury-gold transition-colors text-sm resize-none"></textarea>
              </div>

              <button type="button" className="w-full border border-gray-900 dark:border-white/20 py-4 text-xs font-bold tracking-widest uppercase text-gray-900 dark:text-white hover:bg-luxury-gold hover:text-white dark:hover:text-luxury-dark hover:border-luxury-gold transition-all duration-300">
                Book a Meeting
              </button>
            </form>
          </div>

          {/* Designer Profile / Image */}
          <div className="relative">
             <div className="rounded-t-[200px] overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" alt="Interior Preview" className="w-full h-[600px] object-cover opacity-80 dark:opacity-60 transition-opacity" />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-luxury-dim transition-colors"></div>
             </div>

             {/* Overlaid Profile Card */}
             <div className="absolute -bottom-10 left-0 md:-left-12 bg-white dark:bg-luxury-dark p-8 max-w-sm border border-gray-200 dark:border-white/10 shadow-2xl transition-colors">
               <span className="text-luxury-gold text-[10px] tracking-widest uppercase">Meet The Visionary</span>
               <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-2 mb-4 transition-colors">Mater Designer Lorenzo</h3>
               <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-6 transition-colors">
                 A fine art interior master crafting exquisite spaces with precision, passion, creativity, and elegance.
               </p>
               <button className="text-[10px] border border-gray-300 dark:border-white/20 px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase tracking-widest">
                 Meet Our Team
               </button>
               
               {/* Circular Image Overlay */}
               <div className="absolute -top-16 right-4 w-24 h-32 rounded-full border-4 border-white dark:border-luxury-dark overflow-hidden transition-colors">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" alt="Lorenzo" className="w-full h-full object-cover" />
               </div>
               
               {/* Experience Badge */}
               <div className="absolute bottom-4 -right-6 bg-light-bg dark:bg-luxury-dim rounded-full w-12 h-12 border border-luxury-gold flex items-center justify-center flex-col text-[8px] text-luxury-gold leading-none shadow-lg transition-colors">
                 <span className="text-sm font-bold text-gray-900 dark:text-white transition-colors">25+</span>
                 <span>Years</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};