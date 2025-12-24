import React from 'react';
import { Users, Globe, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 md:py-16 bg-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-navy-900 text-xs font-black tracking-widest uppercase mb-2">The Consultancy</h2>
          <h3 className="text-2xl md:text-4xl font-black text-navy-900 uppercase tracking-tighter mb-4">
            45 Years of <br className="hidden md:block" />Excellence
          </h3>
          <p className="max-w-3xl mx-auto text-navy-700 text-sm md:text-lg font-medium leading-relaxed">
            Tony Clarke brings over four decades of experience in high-level law enforcement and the private security sector. From leading significant policing responses to shaping the UK national security legislation, he provides unparalleled insight into public safety and investigations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
          <div className="bg-white p-6 border-t-4 border-navy-900 shadow-sm">
            <Users className="w-8 h-8 text-navy-900 mb-3" />
            <h4 className="text-lg font-black text-navy-900 uppercase mb-2">Public & Private Synergy</h4>
            <p className="text-navy-700 text-xs md:text-sm leading-relaxed">
              We possess unique insights from multiple perspectives, bridging the gap between regulatory bodies and operational reality.
            </p>
          </div>

          <div className="bg-white p-6 border-t-4 border-navy-900 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-navy-900 mb-3" />
            <h4 className="text-lg font-black text-navy-900 uppercase mb-2">Strategic Reform</h4>
            <p className="text-navy-700 text-xs md:text-sm leading-relaxed">
              Contributing significantly to public safety strategies and capacity-building programs that enhance protection nationally.
            </p>
          </div>

          <div className="bg-white p-6 border-t-4 border-navy-900 shadow-sm">
            <Globe className="w-8 h-8 text-navy-900 mb-3" />
            <h4 className="text-lg font-black text-navy-900 uppercase mb-2">International Reach</h4>
            <p className="text-navy-700 text-xs md:text-sm leading-relaxed">
              Available to provide expertise globally. We understand diverse stakeholders and deliver security solutions across borders.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;