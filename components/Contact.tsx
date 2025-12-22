import React from 'react';
import { Mail, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: 'home' | 'contact') => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-navy-50 border-t border-navy-200 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center text-navy-900 font-black uppercase tracking-widest text-xs hover:text-navy-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-navy-900 text-sm font-black tracking-widest uppercase mb-2">Communications</h2>
          <h3 className="text-4xl md:text-5xl font-black text-navy-900 uppercase tracking-tighter">
            Get In Touch
          </h3>
          <p className="mt-4 text-navy-700 font-bold max-w-2xl mx-auto">
            Discretion and professionalism are guaranteed. Use the secure form below or contact directly via the channels provided.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Actions */}
          <div className="space-y-6 reveal-on-scroll">
            <div className="bg-white p-8 border-2 border-navy-100 shadow-lg">
              <h4 className="text-xl font-black text-navy-900 uppercase mb-8 border-b-2 border-navy-50 pb-4">Direct Channels</h4>
              
              <div className="space-y-5">
                <a 
                  href="https://wa.me/447000000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 px-6 uppercase tracking-widest transition-all shadow-sm hover:shadow-md border-2 border-transparent"
                >
                  <Phone className="mr-3 h-5 w-5 fill-current" />
                  Contact via WhatsApp
                </a>

                <a 
                  href="mailto:tony@tonyclarke.london"
                  className="group flex items-center justify-center w-full bg-navy-900 hover:bg-navy-800 text-white font-black py-4 px-6 uppercase tracking-widest transition-all shadow-sm hover:shadow-md border-2 border-transparent"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Contact via Email
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-100 text-center">
                <p className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-2">Direct Email Address</p>
                <a href="mailto:tony@tonyclarke.london" className="text-lg font-black text-navy-900 hover:text-navy-700 transition-colors">
                  tony@tonyclarke.london
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 border-2 border-navy-900 shadow-xl relative reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h4 className="text-xl font-black text-navy-900 uppercase mb-6">Secure Enquiry Form</h4>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-black text-navy-900 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-navy-50 border-2 border-transparent focus:border-navy-900 px-4 py-3 text-navy-900 font-bold focus:outline-none transition-colors placeholder-navy-300"
                  placeholder="ENTER FULL NAME"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-black text-navy-900 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-navy-50 border-2 border-transparent focus:border-navy-900 px-4 py-3 text-navy-900 font-bold focus:outline-none transition-colors placeholder-navy-300"
                  placeholder="ENTER EMAIL ADDRESS"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-black text-navy-900 uppercase mb-1">Enquiry Details</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-navy-50 border-2 border-transparent focus:border-navy-900 px-4 py-3 text-navy-900 font-bold focus:outline-none transition-colors placeholder-navy-300"
                  placeholder="PLEASE DESCRIBE YOUR ENQUIRY..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-navy-900 text-white font-black py-4 px-6 uppercase tracking-widest hover:bg-navy-800 transition-colors flex items-center justify-center text-sm group"
              >
                Transmit Enquiry
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;