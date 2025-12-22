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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-navy-100 py-3 shadow-sm' : 'bg-white border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center group focus:outline-none"
          >
            <ShieldCheck className="h-7 w-7 text-navy-900 mr-2 group-hover:text-navy-700 transition-colors" />
            <span className="text-xl font-extrabold tracking-tight text-navy-900 uppercase group-hover:text-navy-700 transition-colors">
              Tony Clarke
            </span>
          </button>
          
          <div className="flex items-center space-x-6">
            <button
               onClick={() => onNavigate('expertise')}
               className="hidden md:block text-sm font-bold text-navy-700 hover:text-navy-900 uppercase tracking-wider transition-colors"
            >
              Expertise
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-6 py-2 text-sm font-black text-white bg-navy-900 hover:bg-navy-800 transition-colors uppercase tracking-widest border-2 border-transparent cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;