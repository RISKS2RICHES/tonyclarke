import React from 'react';
import { 
  Calendar, Search, GraduationCap, UserCheck, ShieldAlert, 
  Briefcase, Moon, Lock, BarChart, FileText, Map, Gavel, Siren 
} from 'lucide-react';

const Services: React.FC = () => {
  const servicesList = [
    {
      title: "Event Management",
      headline: "Expert Strategy & Delivery",
      icon: Calendar,
      points: [
        "Advice on event strategies & delivery",
        "Training and risk analysis",
        "Senior operational roles",
        "Cost-effective goal maximisation",
        "International sporting events track record"
      ]
    },
    {
      title: "Investigative Support",
      headline: "Forensic & Criminal",
      icon: Search,
      points: [
        "Forensic and crime scene investigations",
        "Civil and criminal investigations",
        "Supplementing existing teams",
        "Ex-Metropolitan Police expertise",
        "Covert operations capability"
      ]
    },
    {
      title: "Training",
      headline: "Accredited Professional",
      icon: GraduationCap,
      points: [
        "Accredited/certificated programs",
        "Conflict management & Physical intervention",
        "Security personnel & stewards training",
        "City & Guilds qualified instruction",
        "Expert witness-level instruction"
      ]
    },
    {
      title: "Close Protection",
      headline: "Unparalleled Protection",
      icon: UserCheck,
      points: [
        "Celebrity & dignitary protection",
        "Footballer & family protection",
        "International and domestic capability",
        "Discreet, professional service",
        "Proven track record"
      ]
    },
    {
      title: "Security Services",
      headline: "Solutions Across Sectors",
      icon: ShieldAlert,
      points: [
        "Airport security (landside/airside)",
        "Embassy & Financial institutions",
        "Stadium, Concert, and Event security",
        "Night club and bar security",
        "Tailored solutions"
      ]
    },
    {
      title: "Consultancy",
      headline: "Strategic & Counter-Terrorism",
      icon: Briefcase,
      points: [
        "Asset protection strategies",
        "Building security assessments",
        "Personnel safety programs",
        "Counter-terrorism initiatives",
        "Chartered Security Professional expertise"
      ]
    },
    {
      title: "Safer Spaces",
      headline: "Night-Time Economy",
      icon: Moon,
      points: [
        "Staff training & Public awareness",
        "Reducing alcohol violence & harassment",
        "Combating drug/spiking issues",
        "Partnerships: Police, authorities, business",
        "Home Office advisory expertise"
      ]
    },
    {
      title: "Insider Threat",
      headline: "Internal Risk Protection",
      icon: Lock,
      points: [
        "Identify internal individual risks",
        "Address privileged access threats",
        "Protect sensitive information",
        "Maintain systems integrity",
        "Proactive threat prevention"
      ]
    },
    {
      title: "Risk & Resilience",
      headline: "Strategic Management",
      icon: BarChart,
      points: [
        "Navigate Reputation/Financial/Data risks",
        "Planning for disruption",
        "Design bespoke approaches",
        "Balance skills & technologies",
        "Ongoing support"
      ]
    },
    {
      title: "Terrorism Bill",
      headline: "Protection of Premises",
      icon: FileText,
      points: [
        "'Martyn's Law' compliance",
        "PG Qual in CT Risk Management",
        "Risk assessment strategies",
        "Tiered approach implementation",
        "Preparedness programs"
      ]
    },
    {
      title: "Night Mayor",
      headline: "Revitalising Cities",
      icon: Map,
      points: [
        "Nightlife Taskforce",
        "Night-time Enterprise Zones",
        "Create 24-hour cities",
        "Support for business/workers",
        "Develop vibrant culture"
      ]
    },
    {
      title: "Private Prosecutions",
      headline: "Criminal Prosecution",
      icon: Gavel,
      points: [
        "Initiate private prosecutions",
        "Comprehensive evidence gathering",
        "Legal partner review",
        "Trial through courts",
        "Professional standards"
      ]
    },
    {
      title: "Incident Mgmt",
      headline: "METHANE Protocol",
      icon: Siren,
      points: [
        "Professional Emergency Response",
        "Major Incident identification",
        "Qualified commander experience",
        "Coordination of 800+ officers",
        "Critical & firearms command"
      ]
    }
  ];

  return (
    <section id="services" className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-navy-900 text-xs font-black tracking-widest uppercase mb-2">Our Expertise</h2>
          <h3 className="text-2xl md:text-4xl font-black text-navy-900 uppercase tracking-tighter">Comprehensive Services</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {servicesList.map((service, index) => {
            const isLast = index === servicesList.length - 1;
            
            return (
              <div 
                key={index}
                className={`group bg-white border border-navy-100 p-4 hover:border-navy-900 transition-all duration-300 hover:shadow-md flex flex-col ${
                  isLast ? 'sm:col-span-2 lg:col-span-3 items-center text-center py-6 md:py-8' : ''
                }`}
              >
                <div className={`flex items-center mb-3 ${isLast ? 'flex-col mb-6' : ''}`}>
                  <div className="p-2 bg-navy-50 group-hover:bg-navy-900 transition-colors duration-300">
                    <service.icon className="h-5 w-5 text-navy-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className={isLast ? 'mt-3 ml-0' : 'ml-3'}>
                    <h4 className="text-sm md:text-base font-black text-navy-900 uppercase leading-none">{service.title}</h4>
                    <p className="text-[10px] font-bold text-navy-500 uppercase mt-0.5">{service.headline}</p>
                  </div>
                </div>
                
                <ul className={`${isLast ? 'flex flex-wrap justify-center gap-x-6 gap-y-3' : 'space-y-1.5 flex-grow'}`}>
                  {service.points.map((point, i) => (
                    <li key={i} className={`text-[11px] md:text-xs text-navy-700 font-medium flex ${isLast ? 'items-center bg-navy-50 px-3 py-1.5 rounded-full border border-navy-100' : 'items-start'}`}>
                      <span className={`${isLast ? 'hidden' : 'mr-1.5 text-navy-300'}`}>•</span>
                      {isLast && <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mr-2"></span>}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;