import React from 'react';
import { TimelineItem } from '../types';

const timeline: TimelineItem[] = [
  {
    year: "Current",
    title: "Strategic Security Advisor",
    organization: "Independent Consultancy",
    description: "Currently working with numerous companies and organisations as a security advisor. Leading high-level strategic security projects across the UK and UAE."
  },
  {
    year: "2013-2015",
    title: "Operation Joseph",
    organization: "Private Investigation",
    description: "Exposed major corruption within Met Police Westminster Licensing Team, leading to historic convictions."
  },
  {
    year: "2009-2014",
    title: "Strategic Advisor",
    organization: "SIA & Home Office",
    description: "Panel member appointing SIA Chairperson. Advised Home Office on Vulnerable Women safety. Advised Malaysian Govt."
  },
  {
    year: "Post-Police",
    title: "Private Detective",
    organization: "Independent",
    description: "Specialized in licensed trade fraud. Prosecuted managers for large-scale theft. Provided CP for celebrities."
  },
  {
    year: "1980s",
    title: "Detective Constable",
    organization: "New Scotland Yard",
    description: "First black male detective in Criminal Intelligence Surveillance Unit. High-risk covert operations against organized crime."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="pt-12 pb-2 md:py-12 bg-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 border-b-2 border-navy-200 pb-4">
          <h2 className="text-navy-900 text-3xl font-black uppercase tracking-tight">Professional History</h2>
        </div>

        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-5 bg-white border border-navy-100 hover:border-navy-300 transition-colors">
              <div className="md:w-1/5">
                <span className="text-navy-900 font-black text-lg block">{item.year}</span>
                <span className="text-navy-500 font-bold text-xs uppercase tracking-wider">{item.organization}</span>
              </div>
              <div className="md:w-4/5">
                <h4 className="text-lg font-bold text-navy-900 mb-1">{item.title}</h4>
                <p className="text-sm text-navy-700 font-semibold leading-relaxed">
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