import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-navy-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-navy-900 text-sm font-black tracking-widest uppercase mb-2 border-b-4 border-navy-900 inline-block pb-1">The Professional</h2>
        </div>

        <div className="space-y-6 text-navy-800 font-medium">
          <p className="text-lg md:text-xl font-bold leading-relaxed">
            Tony Clarke’s career is defined by resilience and professional excellence. Joining the Metropolitan Police Service, he was the first black officer assigned to Harlesden Police Station. His operational effectiveness led to early promotion and assignment to the elite Criminal Intelligence Surveillance Unit at New Scotland Yard—becoming the first black male detective in its history.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div>
              <h3 className="text-navy-900 font-black uppercase mb-3 text-sm tracking-wide">Surveillance Expertise</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Trained by Police and Army instructors, Tony mastered covert surveillance techniques. His assignments ranged from tracking Provisional IRA agents to apprehending armed robbers. He operated with iron discipline in high-stakes environments, describing this era as requiring absolute vigilance.
              </p>
            </div>
            <div>
              <h3 className="text-navy-900 font-black uppercase mb-3 text-sm tracking-wide">Strategic Impact</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Transitioning to the private sector, Tony applied his rigorous training to expose corruption in the night-time economy and advise on global security policy. He has advised the Malaysian Government, the UK Home Office, and major financial institutions on risk mitigation and legislation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;