import React from 'react';
import { Mail, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: 'home' | 'contact') => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <section id="contact" className="py-10 md:py-16 bg-navy-50 border-t border-navy-200 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6 md:mb-8">
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center text-navy-900 font-black uppercase tracking-widest text-xs hover:text-navy-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-navy-900 text-[10px] md:text-xs font-black tracking-widest uppercase mb-1">Communications</h2>
          <h3 className="text-2xl md:text-4xl font-black text-navy-900 uppercase tracking-tighter">
            Get In Touch
          </h3>
          <p className="mt-2 text-navy-700 font-bold max-w-xl mx-auto text-xs md:text-sm">
            Discretion and professionalism guaranteed. Contact our senior consultants directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          
          {/* Direct Contacts */}
          <div className="space-y-4">
            
            {/* Tony */}
            <div className="bg-white p-5 border-l-4 border-navy-900 shadow-sm">
              <h4 className="text-lg font-black text-navy-900 uppercase mb-0.5">Tony Clarke</h4>
              <p className="text-[10px] font-bold text-navy-500 uppercase tracking-wider mb-3">Security Specialist</p>
              <div className="space-y-2">
                <a href="mailto:tony@tonyclarke.london" className="flex items-center text-navy-700 hover:text-navy-900 font-bold transition-colors text-xs md:text-sm">
                  <Mail className="w-4 h-4 mr-2 text-navy-400" />
                  tony@tonyclarke.london
                </a>
                <a href="tel:+447920014100" className="flex items-center text-navy-700 hover:text-navy-900 font-bold transition-colors text-xs md:text-sm">
                  <Phone className="w-4 h-4 mr-2 text-navy-400" />
                  +44 7920 014 100
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/447920014100" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-3 px-4 uppercase tracking-widest transition-all shadow-sm hover:shadow-md border-2 border-transparent text-xs md:text-sm mt-2"
            >
              <Phone className="mr-2 h-4 w-4 fill-current" />
              Quick Connect via WhatsApp
            </a>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-5 md:p-6 border-2 border-navy-900 shadow-lg relative">
            <h4 className="text-base md:text-lg font-black text-navy-900 uppercase mb-4">Secure Enquiry Form</h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-[9px] font-black text-navy-900 uppercase mb-0.5">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-navy-50 border-2 border-transparent focus:border-navy-900 px-3 py-2 text-navy-900 font-bold focus:outline-none transition-colors placeholder-navy-300 text-xs"
                  placeholder="ENTER FULL NAME"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[9px] font-black text-navy-900 uppercase mb-0.5">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-navy-50 border-2 border-transparent focus:border-navy-900 px-3 py-2 text-navy-900 font-bold focus:outline-none transition-colors placeholder-navy-300 text-xs"
                  placeholder="ENTER EMAIL ADDRESS"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[9px] font-black text-navy-900 uppercase mb-0.5">Enquiry Details</label>
                <textarea 
                  id="message" 
                  rows={3} 
                  className="w-full bg-navy-50 border-2 border-transparent focus:border-navy-900 px-3 py-2 text-navy-900 font-bold focus:outline-none transition-colors placeholder-navy-300 text-xs"
                  placeholder="PLEASE DESCRIBE YOUR ENQUIRY..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-navy-900 text-white font-black py-3 px-4 uppercase tracking-widest hover:bg-navy-800 transition-colors flex items-center justify-center text-xs group"
              >
                Transmit Enquiry
                <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;