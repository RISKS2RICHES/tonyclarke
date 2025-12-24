import React, { useState } from 'react';
import { Award, BookOpen, Star, Briefcase, Network, Shield } from 'lucide-react';

const Leadership: React.FC = () => {
  // Image handling for Tony
  const [tonyImageSrc, setTonyImageSrc] = useState('https://i.postimg.cc/cKvPYhF5/tony.jpg');
  const [tonyRetryCount, setTonyRetryCount] = useState(0);

  const handleTonyImageError = () => {
    if (tonyRetryCount === 0) {
      setTonyImageSrc('https://i.postimg.cc/cKvPYhF5/image.jpg');
      setTonyRetryCount(1);
    } else {
      setTonyImageSrc('https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800');
    }
  };

  return (
    <section id="leadership" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-navy-900 text-xs font-black tracking-widest uppercase mb-2">Expert Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-black text-navy-900 uppercase tracking-tight mb-4">
            Strategic Command
          </h3>
          <p className="text-navy-600 text-sm md:text-base font-medium">
            Decades of operational command, intelligence strategy, and high-level government advisory.
          </p>
        </div>

        <div className="flex justify-center">
          
          {/* Tony Clarke Profile */}
          <div className="bg-white border border-navy-100 hover:border-navy-200 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 max-w-4xl w-full">
             <div className="flex flex-col sm:flex-row gap-8 items-start">
               {/* Image Column */}
               <div className="shrink-0 relative mx-auto sm:mx-0">
                 <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden border-2 border-navy-900 shadow-md relative z-10">
                   <img 
                    src={tonyImageSrc}
                    onError={handleTonyImageError}
                    alt="Tony Clarke" 
                    className="w-full h-full object-cover object-top transition-all duration-500 grayscale hover:grayscale-0"
                   />
                 </div>
                 <div className="absolute -bottom-3 -right-3 z-20 bg-navy-900 text-white p-2 rounded-full shadow-lg border-2 border-white">
                    <Star className="w-4 h-4" />
                 </div>
               </div>
               
               {/* Text Column */}
               <div className="flex-grow text-center sm:text-left">
                 <h3 className="text-2xl md:text-3xl font-black text-navy-900 uppercase leading-none mb-1">Tony Clarke</h3>
                 <p className="text-navy-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Independent Strategic Security Specialist</p>
                 <p className="text-navy-700 text-sm md:text-base font-medium leading-relaxed mb-6">
                   Former New Scotland Yard Criminal Intelligence Surveillance Unit. A key contributor to UK private security regulation and government legislation.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <div className="bg-navy-50 px-4 py-3 rounded-md border-l-2 border-navy-900">
                     <p className="text-xs font-bold text-navy-900 uppercase flex items-center justify-center sm:justify-start">
                       <Award className="w-4 h-4 mr-2" /> First Black Detective (CISU)
                     </p>
                   </div>
                   <div className="bg-navy-50 px-4 py-3 rounded-md border-l-2 border-navy-900">
                     <p className="text-xs font-bold text-navy-900 uppercase flex items-center justify-center sm:justify-start">
                       <Briefcase className="w-4 h-4 mr-2" /> Former Home Office Adviser
                     </p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

        </div>

        {/* Organizational Structure */}
        <div className="mt-10 md:mt-16">
          <div className="bg-navy-900 text-white p-6 md:p-8 rounded-lg shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Network className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                <div>
                   <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight flex items-center">
                     <Network className="w-5 h-5 md:w-6 md:h-6 text-navy-300 mr-3" />
                     Specialist Network
                   </h3>
                   <p className="text-navy-200 text-xs md:text-sm font-medium mt-2 max-w-2xl">
                     We leverage a vetted network of renowned experts, ensuring best-in-class delivery for every project.
                   </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                 <div className="bg-navy-800/50 p-4 rounded border border-navy-700 backdrop-blur-sm">
                   <span className="block font-bold uppercase text-[9px] tracking-widest mb-1 text-navy-400">Core</span>
                   <span className="block font-bold text-white text-xs md:text-sm">Strategic Directors</span>
                 </div>
                 <div className="bg-navy-800/50 p-4 rounded border border-navy-700 backdrop-blur-sm">
                   <span className="block font-bold uppercase text-[9px] tracking-widest mb-1 text-navy-400">Network</span>
                   <span className="block font-bold text-white text-xs md:text-sm">Ex-Detectives</span>
                 </div>
                 <div className="bg-navy-800/50 p-4 rounded border border-navy-700 backdrop-blur-sm">
                   <span className="block font-bold uppercase text-[9px] tracking-widest mb-1 text-navy-400">Support</span>
                   <span className="block font-bold text-white text-xs md:text-sm">Forensic Experts</span>
                 </div>
                 <div className="bg-navy-800/50 p-4 rounded border border-navy-700 backdrop-blur-sm">
                   <span className="block font-bold uppercase text-[9px] tracking-widest mb-1 text-navy-400">Operational</span>
                   <span className="block font-bold text-white text-xs md:text-sm">Investigations/ Security consultancy</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;