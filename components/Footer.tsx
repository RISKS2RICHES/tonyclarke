import React from 'react';
import { Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 py-4 md:py-8 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center gap-2">
        
        <div className="text-left">
          <p className="text-sm md:text-lg font-black text-white uppercase tracking-widest">TONY CLARKE</p>
          <p className="text-navy-300 text-[10px] md:text-xs font-bold mt-0.5 md:mt-1 uppercase">Security & Intelligence</p>
        </div>

        <div className="flex items-center text-navy-400 text-[10px] md:text-xs font-bold uppercase tracking-widest shrink-0">
          <Copyright className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
          <span>2025 Tony Clarke</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;