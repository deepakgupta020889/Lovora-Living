import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const instagramImages = [
  "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=300&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=300&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=300&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=300&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=300&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=300&auto=format&fit=crop" 
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-luxury-dark pt-20 pb-10 border-t border-gray-200 dark:border-white/5 text-gray-600 dark:text-slate-400 text-xs transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center">
                 <span className="text-luxury-gold font-serif italic font-bold text-xs">N</span>
              </div>
              <span className="text-gray-900 dark:text-white font-serif text-lg tracking-widest uppercase transition-colors">Novara</span>
            </div>
            <p className="leading-relaxed opacity-80">
              Crafting timeless elegance for modern living spaces. Award-winning interior design studio based in London.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 border border-gray-300 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-white dark:hover:text-luxury-dark hover:border-luxury-gold transition-colors"><Facebook size={14} /></a>
              <a href="#" className="w-8 h-8 border border-gray-300 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-white dark:hover:text-luxury-dark hover:border-luxury-gold transition-colors"><Twitter size={14} /></a>
              <a href="#" className="w-8 h-8 border border-gray-300 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-white dark:hover:text-luxury-dark hover:border-luxury-gold transition-colors"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 border border-gray-300 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-white dark:hover:text-luxury-dark hover:border-luxury-gold transition-colors"><Linkedin size={14} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-6 transition-colors">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-luxury-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-luxury-gold transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-luxury-gold transition-colors">Our Blog</a></li>
              <li><a href="#contact" className="hover:text-luxury-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-6 transition-colors">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4"><span className="text-luxury-gold uppercase w-12">Address:</span> Design District, London 9578, UK</li>
              <li className="flex gap-4"><span className="text-luxury-gold uppercase w-12">Phone:</span> +01 123 456 7890</li>
              <li className="flex gap-4"><span className="text-luxury-gold uppercase w-12">Email:</span> hello@novara.com</li>
              <li className="flex gap-4"><span className="text-luxury-gold uppercase w-12">Open:</span> Mon - Fri: 9am - 6pm</li>
            </ul>
          </div>

          {/* Instagram Feed */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-6 transition-colors">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((src, i) => (
                <div key={i} className="aspect-square bg-gray-300 dark:bg-slate-800 overflow-hidden cursor-pointer group">
                   <img src={src} alt={`Insta ${i}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Novara Living. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 border border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:text-white dark:hover:text-luxury-dark transition-colors rounded-full"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};