import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('https://i.postimg.cc/cKvPYhF5/tony.jpg');
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = () => {
    if (retryCount === 0) {
      setImageSrc('https://i.postimg.cc/cKvPYhF5/image.jpg'); 
      setRetryCount(1);
    } else if (retryCount === 1) {
       setImageSrc('https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800');
       setRetryCount(2);
    }
  };

  return (
    <div className="bg-white pt-2 pb-6 md:pt-8 md:pb-12 border-b border-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          
          {/* Text Content */}
          <div className="md:w-3/5 text-center md:text-left order-2 md:order-1 mt-2 md:mt-0">
            <div className="inline-block mb-3 px-2 py-0.5 border border-navy-900">
              <span className="text-navy-900 text-[9px] sm:text-[10px] font-black tracking-widest uppercase">
                INTELLIGENCE & SECURITY SPECIALIST
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-navy-900 mb-3 tracking-tighter leading-tight uppercase">
              Uncompromised<br />Integrity
            </h1>
            
            <p className="mt-1 max-w-lg mx-auto md:mx-0 text-sm md:text-lg text-navy-700 font-bold leading-relaxed">
              Former New Scotland Yard Criminal Intelligence Surveillance Unit. The authority on strategic risk management and security operations.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button 
                 onClick={() => {
                   window.dispatchEvent(new CustomEvent('navigate-to-contact'));
                 }}
                className="group flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-black text-white bg-navy-900 hover:bg-navy-800 transition-all uppercase tracking-widest cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Consult with Tony
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                   window.dispatchEvent(new CustomEvent('navigate-to-expertise'));
                 }}
                className="flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-black text-navy-900 border-2 border-navy-900 hover:bg-navy-50 transition-all uppercase tracking-widest"
              >
                Explore Expertise
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-2/5 flex justify-center md:justify-center order-1 md:order-2 mt-2 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-3 bg-navy-100 rounded-full blur-lg opacity-50"></div>
              
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[4px] border-navy-900 shadow-xl z-10">
                <img 
                  src={imageSrc}
                  onError={handleImageError}
                  alt="Tony Clarke" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;