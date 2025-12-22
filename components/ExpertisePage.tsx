import React from 'react';
import { Shield, Lock, Scale, Globe, Star, Award, Briefcase, FileText, ArrowLeft } from 'lucide-react';

interface ExpertisePageProps {
  onNavigate: (page: 'home' | 'contact') => void;
}

const ExpertisePage: React.FC<ExpertisePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-navy-900 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center text-navy-300 hover:text-white transition-colors mb-8 text-sm font-black uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Return Home
          </button>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            A Legacy of <span className="text-navy-300">Intelligence</span>
          </h1>
          <p className="text-xl text-navy-200 max-w-3xl font-medium leading-relaxed">
            From the elite Criminal Intelligence Surveillance Unit at New Scotland Yard to advising Governments and exposing historic corruption.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* The Met Police Era */}
        <section className="bg-white border-2 border-navy-100 shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-navy-900 mr-4" />
            <h2 className="text-2xl md:text-3xl font-black text-navy-900 uppercase tracking-tight">The Scotland Yard Era</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-navy-700 mb-6 font-medium leading-relaxed">
                Tony’s career began at <strong>MPS Hendon Training School</strong>, leading to his assignment at Harlesden Police Station as the first black Police Officer in a predominantly black neighbourhood. His resilience and humour allowed him to operate effectively on North London's toughest estates.
              </p>
              <p className="text-navy-700 font-medium leading-relaxed">
                Recognised for his effectiveness, he earned an early promotion to Detective Constable and was assigned to the <strong>Criminal Intelligence Surveillance Unit ("The Professionals")</strong> at New Scotland Yard. He was the first black male detective ever assigned to this elite unit.
              </p>
            </div>
            <div className="bg-navy-50 p-6 border border-navy-100">
              <h3 className="text-navy-900 font-black uppercase text-sm tracking-widest mb-4 border-b border-navy-200 pb-2">Covert Operations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-navy-900 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm text-navy-800 font-bold">Counter-Terrorism & Organized Crime</p>
                </li>
                <li className="pl-5 text-sm text-navy-600">
                  Tasks ranged from tailing suspected Provisional IRA agents to donning camouflage to watch isolated houses used by armed robbers.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-navy-900 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm text-navy-800 font-bold">High-Risk Environment</p>
                </li>
                <li className="pl-5 text-sm text-navy-600">
                  Operated in environments where colleagues, such as DC John Fordham (Brinks Mat investigation), paid the ultimate price.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Private Sector & Commercial Intelligence */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-navy-900 uppercase tracking-tight mb-8 pl-4 border-l-8 border-navy-900">
            Commercial Intelligence & Investigations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-navy-900 text-white p-8">
              <Scale className="w-10 h-10 mb-6 text-navy-300" />
              <h3 className="text-xl font-black uppercase mb-4">Operation Joseph</h3>
              <p className="text-navy-200 text-sm leading-relaxed mb-4">
                Exposed the biggest Metropolitan Police corruption in history. Tony uncovered preferential treatment in the Westminster Licensing Team, leading to the conviction of Sergeant Frank Partridge.
              </p>
              <a href="https://www.buzzfeed.com/heidiblake/these-soho-cops-are-suspected-of-taking-bribes" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest border-b border-white hover:text-navy-300 transition-colors">
                Read Case Study
              </a>
            </div>

            <div className="bg-white border-2 border-navy-100 p-8 hover:border-navy-900 transition-colors">
              <Briefcase className="w-10 h-10 mb-6 text-navy-900" />
              <h3 className="text-xl font-black uppercase mb-4 text-navy-900">Corporate Fraud</h3>
              <p className="text-navy-700 text-sm leading-relaxed mb-4">
                <strong>The "Long Island Iced Tea" Case:</strong> Successfully prosecuted a manager in Covent Garden for stealing £250,000 from the unit.
              </p>
              <p className="text-navy-700 text-sm leading-relaxed">
                Specialist in rooting out corruption where managers buy in their own stock. 100% success rate in converting difficult pubs into family venues.
              </p>
            </div>

            <div className="bg-white border-2 border-navy-100 p-8 hover:border-navy-900 transition-colors">
              <Lock className="w-10 h-10 mb-6 text-navy-900" />
              <h3 className="text-xl font-black uppercase mb-4 text-navy-900">Close Protection</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Provided personal Close Protection for high-profile figures including <strong>Sade</strong> (on tour) and <strong>Courtney Love</strong>.
              </p>
              <p className="text-navy-700 text-sm leading-relaxed mt-4">
                 Developed and delivered accredited Close Protection (CP) courses for the industry.
              </p>
            </div>

          </div>
        </section>

        {/* Government & Policy Timeline */}
        <section className="bg-navy-50 py-12 px-4 md:px-12 border-y border-navy-200 mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <Globe className="w-12 h-12 text-navy-900 mb-6" />
              <h2 className="text-3xl font-black text-navy-900 uppercase tracking-tight mb-4">
                Government Advisory & Policy
              </h2>
              <p className="text-navy-700 font-medium leading-relaxed">
                Tony is a respected figure in the Security Industry, maintaining dialogue with regulators and Her Majesty’s Government. He has shaped the standards (BS10200) that define modern private investigation.
              </p>
            </div>
            
            <div className="md:w-2/3 border-l-2 border-navy-200 pl-8 space-y-10">
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 bg-navy-900 rounded-full border-4 border-navy-50"></span>
                <span className="text-xs font-black text-navy-400 uppercase tracking-wider block mb-1">2013 - Home Office</span>
                <h4 className="text-lg font-black text-navy-900 uppercase">SIA Chairperson Selection</h4>
                <p className="text-navy-700 text-sm mt-2">
                  The only industry member asked by the Home Office to sit on the selection panel to appoint the Chairperson of the Security Industry Authority (Elizabeth France).
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 bg-navy-900 rounded-full border-4 border-navy-50"></span>
                <span className="text-xs font-black text-navy-400 uppercase tracking-wider block mb-1">2012 - British Standards</span>
                <h4 className="text-lg font-black text-navy-900 uppercase">Leveson Inquiry Response (BS10200)</h4>
                <p className="text-navy-700 text-sm mt-2">
                  Invited to the BSI committee to develop standards for Private Investigators in response to the News International Phone Hacking Scandal.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 bg-navy-900 rounded-full border-4 border-navy-50"></span>
                <span className="text-xs font-black text-navy-400 uppercase tracking-wider block mb-1">2010 - Policy Forum</span>
                <h4 className="text-lg font-black text-navy-900 uppercase">Vulnerable Women & Fake IDs</h4>
                <p className="text-navy-700 text-sm mt-2">
                  Worked with the Home Office to develop training for protecting vulnerable women in the night-time economy and advised on Fake ID usage by minors.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 bg-navy-900 rounded-full border-4 border-navy-50"></span>
                <span className="text-xs font-black text-navy-400 uppercase tracking-wider block mb-1">International</span>
                <h4 className="text-lg font-black text-navy-900 uppercase">Malaysian Government</h4>
                <p className="text-navy-700 text-sm mt-2">
                  Advised and assisted the Government of Malaysia on legislation to regulate their Security Industry, starting in Kuala Lumpur.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Qualifications Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b-2 border-navy-100 pb-4">
            <h2 className="text-2xl font-black text-navy-900 uppercase tracking-tight">Accreditations & Media</h2>
            <Award className="w-6 h-6 text-navy-900" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-navy-200 p-6 text-center hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-navy-900 mx-auto mb-3" />
              <h4 className="font-bold text-navy-900 text-sm uppercase">SIA Trainer</h4>
              <p className="text-xs text-navy-500 mt-1">Conflict Management & Physical Intervention</p>
            </div>
            <div className="bg-white border border-navy-200 p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="w-8 h-8 text-navy-900 mx-auto mb-3" />
              <h4 className="font-bold text-navy-900 text-sm uppercase">Project Griffin</h4>
              <p className="text-xs text-navy-500 mt-1">Counter-Terrorism Initiative</p>
            </div>
            <div className="bg-white border border-navy-200 p-6 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-navy-900 mx-auto mb-3" />
              <h4 className="font-bold text-navy-900 text-sm uppercase">Expert Witness</h4>
              <p className="text-xs text-navy-500 mt-1">Night-time Economy & Security</p>
            </div>
            <div className="bg-white border border-navy-200 p-6 text-center hover:shadow-lg transition-shadow">
              <Briefcase className="w-8 h-8 text-navy-900 mx-auto mb-3" />
              <h4 className="font-bold text-navy-900 text-sm uppercase">Film Cameo</h4>
              <p className="text-xs text-navy-500 mt-1">"London Boulevard" with Colin Farrell</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-navy-900 p-12 text-center rounded-none shadow-2xl mb-20">
            <h2 className="text-3xl text-white font-black uppercase tracking-tight mb-6">
              Secure The Expertise
            </h2>
            <p className="text-navy-200 mb-8 max-w-2xl mx-auto font-medium">
              Tony Clarke brings decades of high-level intelligence, strategic risk management, and operational security experience to your organization.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-navy-900 px-8 py-4 font-black uppercase tracking-widest hover:bg-navy-50 transition-colors"
            >
              Initiate Consultation
            </button>
        </div>

      </div>
    </div>
  );
};

export default ExpertisePage;