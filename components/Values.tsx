import React from 'react';
import { Heart, Shield, Award, Users, Eye, Lock, Zap } from 'lucide-react';

const Values: React.FC = () => {
  return (
    <section id="values" className="bg-navy-50">
      
      {/* Vision */}
      <div className="bg-navy-900 py-10 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="text-navy-300 font-black tracking-[0.2em] uppercase text-xs mb-3 block">Our Vision</span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight uppercase tracking-tight">
            "To make the world a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">safer and more secure</span> place by being the most innovative and solution-oriented security consultancy."
          </h2>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-white py-10 md:py-16 border-b border-navy-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-navy-900 font-black tracking-[0.2em] uppercase text-xs mb-3 block">Our Mission</span>
          <p className="text-lg md:text-2xl font-bold text-navy-800 leading-relaxed">
            "We provide <span className="text-navy-900 underline decoration-2 decoration-navy-200">unparalleled consultancy</span> and innovative solutions to serve, secure, and care for our portfolio businesses."
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight mb-3">Our Core Values</h3>
          <p className="max-w-xl mx-auto text-navy-600 text-sm font-medium">
            Our staff drives our business’s success. Our culture drives our staff’s success. Our values drive our culture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 border border-navy-100 shadow-sm">
            <Heart className="w-6 h-6 text-navy-900 mb-2" />
            <h4 className="font-black text-navy-900 uppercase mb-1 text-sm">Integrity</h4>
            <p className="text-xs text-navy-600">Operating with honesty, transparency, and strong moral principles.</p>
          </div>
          <div className="bg-white p-5 border border-navy-100 shadow-sm">
            <Users className="w-6 h-6 text-navy-900 mb-2" />
            <h4 className="font-black text-navy-900 uppercase mb-1 text-sm">Respect</h4>
            <p className="text-xs text-navy-600">Valuing all individuals and perspectives with dignity.</p>
          </div>
          <div className="bg-white p-5 border border-navy-100 shadow-sm">
            <Shield className="w-6 h-6 text-navy-900 mb-2" />
            <h4 className="font-black text-navy-900 uppercase mb-1 text-sm">Safety</h4>
            <p className="text-xs text-navy-600">Prioritising wellbeing through proactive risk management.</p>
          </div>
          <div className="bg-white p-5 border border-navy-100 shadow-sm">
            <Lock className="w-6 h-6 text-navy-900 mb-2" />
            <h4 className="font-black text-navy-900 uppercase mb-1 text-sm">Security & Service</h4>
            <p className="text-xs text-navy-600">Excellence in protection with a client-focused approach.</p>
          </div>
          <div className="bg-white p-5 border border-navy-100 shadow-sm">
            <Award className="w-6 h-6 text-navy-900 mb-2" />
            <h4 className="font-black text-navy-900 uppercase mb-1 text-sm">Excellence</h4>
            <p className="text-xs text-navy-600">Highest standards and continuous improvement.</p>
          </div>
          <div className="bg-white p-5 border border-navy-100 shadow-sm">
            <Zap className="w-6 h-6 text-navy-900 mb-2" />
            <h4 className="font-black text-navy-900 uppercase mb-1 text-sm">Innovation</h4>
            <p className="text-xs text-navy-600">Creative collaboration and solution-oriented thinking.</p>
          </div>
          <div className="bg-white p-5 border border-navy-100 shadow-sm sm:col-span-2 lg:col-span-3 lg:w-1/3 lg:mx-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center">
            <Eye className="w-6 h-6 text-navy-900 mb-2" />
            <h4 className="font-black text-navy-900 uppercase mb-1 text-sm">Transparency</h4>
            <p className="text-xs text-navy-600">Operating with openness and honest assessments.</p>
          </div>
        </div>
      </div>

      {/* Purpose */}
      <div className="bg-navy-900 text-white py-10 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-navy-300 font-black tracking-[0.2em] uppercase text-xs mb-4 block">Our Purpose</span>
          <p className="text-base md:text-lg font-medium leading-relaxed">
            "We are here for you, serving and safeguarding customers, communities, and people around the world. We go beyond mere profit; we seek to encompass a broader sense of our mission, vision, and values. We strive to create value, meet needs, foster innovation, and operate ethically."
          </p>
        </div>
      </div>

    </section>
  );
};

export default Values;