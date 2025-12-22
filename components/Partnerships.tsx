import React, { useState } from 'react';

interface Partner {
  name: string;
  type: string;
  logo?: string;
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [imgError, setImgError] = useState(false);

  // If we have a logo and it hasn't failed to load, show the image
  if (partner.logo && !imgError) {
    return (
      <div className="bg-white border border-navy-100 p-4 h-28 w-48 flex flex-col items-center justify-center rounded-sm transition-all duration-300 group-hover:border-navy-900 group-hover:shadow-md relative overflow-hidden group">
        <div className="flex-grow flex items-center justify-center w-full pb-2">
          <img 
            src={partner.logo} 
            alt={`${partner.name} logo`}
            onError={() => setImgError(true)}
            className="max-h-12 max-w-[85%] object-contain transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-110"
          />
        </div>
        
        {/* 'FORMER' text at bottom */}
        <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none">
             <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">FORMER</span>
        </div>

        {/* Tooltip hint on hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy-900/90 text-white text-[9px] py-1 px-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-center uppercase tracking-widest font-bold z-10">
          {partner.type}
        </div>
      </div>
    );
  }

  // Fallback to text version if no logo or error
  return (
    <div className="bg-navy-50 border border-navy-100 p-4 h-28 w-48 flex flex-col items-center justify-center rounded-sm transition-all duration-300 group-hover:border-navy-900 group-hover:shadow-md relative">
      <div className="text-center flex-grow flex flex-col justify-center pb-3">
        <span className="block text-navy-900 font-black text-sm uppercase leading-tight">
          {partner.name}
        </span>
        <span className="block text-[10px] text-navy-500 font-bold uppercase tracking-wider mt-1 border-t border-navy-200 pt-1">
          {partner.type}
        </span>
      </div>
      <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none">
          <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">FORMER</span>
      </div>
    </div>
  );
};

const Partnerships: React.FC = () => {
  const partners: Partner[] = [
    { 
      name: "Home Office", 
      type: "Government Adviser", 
      logo: "https://postimg.cc/fSbwDqsd/55a0d88d" 
    },
    { 
      name: "Security Industry Authority", 
      type: "Key Contributor", 
      logo: "https://postimg.cc/9wXfzFdw/d19ec5fd" 
    },
    { 
      name: "City of London Police", 
      type: "Project Griffin", 
      // User provided a link identical to BSI, so we retain the correct high-res official logo here
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/City_of_London_Police_logo.svg/1200px-City_of_London_Police_logo.svg.png" 
    },
    { 
      name: "Metropolitan Police", 
      type: "Former Detective", 
      logo: "https://postimg.cc/CBh0srz7/bdbc7fd3" 
    },
    { 
      name: "BSI", 
      type: "Committee Member", 
      logo: "https://postimg.cc/ZvLyDMcn/26bfce45" 
    },
    { 
      name: "Watford Council", 
      type: "Security Partner", 
      logo: "https://postimg.cc/94jwC2nq/844b1705" 
    },
    { 
      name: "City & Guilds", 
      type: "Accredited Trainer", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/City_%26_Guilds_logo.svg/512px-City_%26_Guilds_logo.svg.png" 
    },
    { 
      name: "BSIA", 
      type: "Founding Chairman",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/British_Security_Industry_Association_logo.png"
    },
    { 
      name: "Malaysian Government", 
      type: "Legislative Adviser", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/512px-Coat_of_arms_of_Malaysia.svg.png" 
    },
    { 
      name: "Greene King", 
      type: "Security Consultant", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Greene_King_logo.svg/512px-Greene_King_logo.svg.png" 
    },
    { 
      name: "Stonegate Group", 
      type: "Security Consultant",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/22/Stonegate_Pub_Company_logo.svg"
    },
    { 
      name: "Mitchells & Butlers", 
      type: "Security Consultant", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Mitchells_%26_Butlers_logo.svg/512px-Mitchells_%26_Butlers_logo.svg.png" 
    },
    { 
      name: "Belfast City Council", 
      type: "Adviser", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Belfast_City_Council_logo.svg/512px-Belfast_City_Council_logo.svg.png" 
    },
    { 
      name: "Scottish & Newcastle", 
      type: "Consultant",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Scottish_%26_Newcastle_logo.svg/512px-Scottish_%26_Newcastle_logo.svg.png"
    },
    { 
      name: "Candor FM", 
      type: "Specialist",
    }, 
    {
      name: "Spirit Pub Company",
      type: "Security Consultant",
    },
    {
      name: "London Drug Policy",
      type: "Endorsed",
    }
  ];

  // Duplicate the array to ensure seamless infinite scrolling
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-navy-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-navy-900 text-xs font-black tracking-widest uppercase mb-2">
          Professional Affiliations & Partnerships
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-navy-900 uppercase tracking-tight">
          Trusted By Leading Organisations
        </h3>
        <p className="mt-3 max-w-2xl mx-auto text-navy-600 text-sm font-medium">
          Over 40 years of partnerships with government bodies, law enforcement, and industry leaders across security and hospitality sectors.
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-scroll">
          {allPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="flex-shrink-0 mx-4 group cursor-default"
            >
              <PartnerLogo partner={partner} />
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-bold text-navy-400 uppercase tracking-widest">
           <span className="flex items-center"><span className="w-1.5 h-1.5 bg-navy-300 rounded-full mr-2"></span>Home Office Recognised</span>
           <span className="flex items-center"><span className="w-1.5 h-1.5 bg-navy-300 rounded-full mr-2"></span>SIA Approved Trainer</span>
           <span className="flex items-center"><span className="w-1.5 h-1.5 bg-navy-300 rounded-full mr-2"></span>BSI Standards Committee</span>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;