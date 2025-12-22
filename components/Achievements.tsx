import React from 'react';
import { Award, FileCheck, Globe, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="impact" className="py-8 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 border-b-2 border-navy-100 pb-2 md:pb-3">
          <h2 className="text-navy-900 text-2xl md:text-3xl font-black uppercase tracking-tight">Key Impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-white border-2 border-navy-900 p-4 md:p-5">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-base md:text-lg font-black text-navy-900 uppercase">Operation Joseph</h4>
              <Star className="w-5 h-5 text-navy-900" />
            </div>
            <p className="text-navy-800 text-xs font-bold mb-1">
              "Biggest Met Corruption in History"
            </p>
            <p className="text-navy-600 text-xs font-medium leading-relaxed">
              Investigated and exposed preferential treatment within the Metropolitan Police Westminster Licensing Team, resulting in convictions.
            </p>
          </div>

          <div className="bg-white border-2 border-navy-900 p-4 md:p-5">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-base md:text-lg font-black text-navy-900 uppercase">Global Regulation</h4>
              <Globe className="w-5 h-5 text-navy-900" />
            </div>
            <p className="text-navy-800 text-xs font-bold mb-1">
              International Influence
            </p>
            <p className="text-navy-600 text-xs font-medium leading-relaxed">
              Partnered with Malaysian Government on security legislation. Worked with UK Home Office to select SIA Chairperson and develop BS10200.
            </p>
          </div>

          <div className="bg-white border-2 border-navy-900 p-4 md:p-5">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-base md:text-lg font-black text-navy-900 uppercase">Commercial ROI</h4>
              <FileCheck className="w-5 h-5 text-navy-900" />
            </div>
            <p className="text-navy-800 text-xs font-bold mb-1">
              Proven Success
            </p>
            <p className="text-navy-600 text-xs font-medium leading-relaxed">
              100% success rate in converting difficult pubs. Successfully prosecuted a manager for £250,000 theft.
            </p>
          </div>

          <div className="bg-white border-2 border-navy-900 p-4 md:p-5">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-base md:text-lg font-black text-navy-900 uppercase">High Profile</h4>
              <Award className="w-5 h-5 text-navy-900" />
            </div>
            <p className="text-navy-800 text-xs font-bold mb-1">
              Media & Culture
            </p>
            <p className="text-navy-600 text-xs font-medium leading-relaxed">
              Appeared in "London Boulevard". Provided Close Protection for Courtney Love and Sade. Endorsed by London Drug Policy Forum.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;