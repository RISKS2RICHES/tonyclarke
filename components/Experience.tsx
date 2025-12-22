import React from 'react';
import { TimelineItem } from '../types';

const timeline: TimelineItem[] = [
  {
    year: "Current",
    title: "Strategic Security Specialist",
    organization: "Independent Specialist",
    description: "Leading high-level strategic security projects globally."
  },
  {
    year: "2013-2015",
    title: "Operation Joseph",
    organization: "Private Investigation",
    description: "Exposed major corruption within Met Police Westminster Licensing Team, leading to historic convictions."
  },
  {
    year: "2009-2014",
    title: "Strategic Adviser",
    organization: "SIA & Home Office",
    description: "Panel member appointing SIA Chairperson. Advised Home Office on Vulnerable Women safety."
  },
  {
    year: "Post-Police",
    title: "Private Detective",
    organization: "Independent",
    description: "Specialised in licensed trade fraud. Prosecuted managers for large-scale theft. Provided CP for celebrities."
  },
  {
    year: "1980s",
    title: "Detective Constable",
    organization: "New Scotland Yard",
    description: "First black male detective in Criminal Intelligence Surveillance Unit. High-risk covert operations."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="pt-8 pb-8 md:py-12 bg-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-10 border-b-2 border-navy-200 pb-3 md:pb-4">
          <h2 className="text-navy-900 text-2xl md:text-3xl font-black uppercase tracking-tight">Professional History</h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-4 p-4 md:p-5 bg-white border border-navy-100 hover:border-navy-300 transition-colors">
              <div className="md:w-1/5 flex flex-row md:flex-col justify-between md:justify-start items-baseline">
                <span className="text-navy-900 font-black text-base md:text-lg block">{item.year}</span>
                <span className="text-navy-500 font-bold text-[10px] md:text-xs uppercase tracking-wider">{item.organization}</span>
              </div>
              <div className="md:w-4/5">
                <h4 className="text-base md:text-lg font-bold text-navy-900 mb-1">{item.title}</h4>
                <p className="text-xs md:text-sm text-navy-700 font-semibold leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;