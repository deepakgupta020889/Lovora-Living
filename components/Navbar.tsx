import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/95 dark:bg-luxury-dark/95 border-gray-200 dark:border-white/10 py-4 shadow-lg backdrop-blur-sm' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-luxury-gold flex items-center justify-center bg-white dark:bg-transparent transition-colors">
             <span className="text-luxury-gold font-serif italic font-bold">N</span>
          </div>
          <span className="text-gray-900 dark:text-white font-serif text-xl tracking-widest uppercase transition-colors">Novara</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs tracking-[0.2em] text-gray-600 dark:text-slate-300 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors uppercase font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA & Theme Toggle & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a href="#contact" className="hidden md:block px-6 py-2 bg-luxury-gold text-white dark:text-luxury-dark text-xs font-bold tracking-widest uppercase hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-luxury-dark transition-colors duration-300">
            Book Consultation
          </a>
          
          <button 
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-luxury-dark border-t border-gray-200 dark:border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm tracking-widest text-gray-800 dark:text-slate-300 hover:text-luxury-gold uppercase py-2 border-b border-gray-100 dark:border-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};