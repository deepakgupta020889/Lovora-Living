import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { DownloadFab } from './components/DownloadFab';

function App() {
  // Initialize theme based on system preference or default to dark
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-luxury-dark font-sans selection:bg-luxury-gold selection:text-luxury-dark transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Booking /> 
      <Testimonials />
      <Blog />
      <Footer />
      <DownloadFab />
    </div>
  );
}

export default App;