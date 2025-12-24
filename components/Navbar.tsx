import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'contact' | 'expertise') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-navy-100 py-2 md:py-3 shadow-sm' : 'bg-white border-transparent py-2 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-1 sm:gap-2">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center group focus:outline-none shrink-0"
          >
            <ShieldCheck className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 text-navy-900 mr-1 md:mr-2 group-hover:text-navy-700 transition-colors" />
            <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-navy-900 uppercase group-hover:text-navy-700 transition-colors whitespace-nowrap">
              Tony Clarke
            </span>
          </button>
          
          <div className="flex items-center space-x-1 md:space-x-4">
            <button
               onClick={() => scrollToSection('about')}
               className="hidden md:block px-3 py-2 text-xs font-bold text-navy-700 hover:text-navy-900 uppercase tracking-wider transition-colors"
            >
              About
            </button>
            <button
               onClick={() => scrollToSection('services')}
               className="hidden md:block px-3 py-2 text-xs font-bold text-navy-700 hover:text-navy-900 uppercase tracking-wider transition-colors"
            >
              Services
            </button>
            <button
               onClick={() => onNavigate('expertise')}
               className="hidden lg:block px-3 py-2 text-xs font-bold text-navy-700 hover:text-navy-900 uppercase tracking-wider transition-colors"
            >
              Tony's History
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="ml-2 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 text-[9px] sm:text-xs md:text-sm font-black text-white bg-navy-900 hover:bg-navy-800 transition-colors uppercase tracking-widest border-2 border-transparent cursor-pointer whitespace-nowrap"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;