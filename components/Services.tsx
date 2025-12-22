import React from 'react';
import { Eye, Shield, Gavel, Users, GraduationCap, Building2 } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Covert Surveillance",
    description: "Expert intelligence gathering utilizing Police/Army techniques. Proven track record in uncovering theft, fraud, and criminal activities.",
    icon: Eye
  },
  {
    title: "Government Advisory",
    description: "Former Strategic advisor to the Home Office and international bodies on security legislation, licensing, and regulation.",
    icon: Building2
  },
  {
    title: "Security Consultancy",
    description: "Risk mitigation, 'Protect Duty' compliance, and business licensing for major corporate entities.",
    icon: Shield
  },
  {
    title: "Fraud Investigation",
    description: "Routing out corruption in licensed trade and finance. Investigations into mortgage fraud and large-scale theft.",
    icon: Gavel
  },
  {
    title: "Close Protection",
    description: "Personal security for high-profile figures (Sade, Courtney Love). Delivery of accredited CP courses.",
    icon: Users
  },
  {
    title: "Training & Standards",
    description: "SIA Trainer/Assessor. Development of British Standards (BS10200, BS7960) and industry qualifications.",
    icon: GraduationCap
  }
];

const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-10 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10 border-b-2 border-navy-100 pb-3 md:pb-4">
          <h2 className="text-navy-900 text-2xl md:text-3xl font-black uppercase tracking-tight">Core Competencies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-5 md:p-6 bg-white border-2 border-navy-100 hover:border-navy-900 transition-colors duration-200"
            >
              <div className="mb-3 md:mb-4 flex items-center">
                <service.icon className="h-4 w-4 md:h-5 md:w-5 text-navy-900 mr-3" />
                <h4 className="text-base md:text-lg font-extrabold text-navy-900 uppercase tracking-tight">{service.title}</h4>
              </div>
              <p className="text-navy-700 text-xs md:text-sm font-semibold leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;