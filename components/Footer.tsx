import React from 'react';
import { Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 py-8 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-lg font-black text-white uppercase tracking-widest">TONY CLARKE</p>
          <p className="text-navy-300 text-xs font-bold mt-1 uppercase">Security & Intelligence</p>
        </div>

        <div className="flex items-center text-navy-400 text-xs font-bold uppercase tracking-widest">
          <Copyright className="h-4 w-4 mr-2" />
          <span>2025 Tony Clarke</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;