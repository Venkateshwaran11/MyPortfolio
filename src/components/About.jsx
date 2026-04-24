import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Languages } from 'lucide-react';
import profileImg from '../assets/profile-new.png';
import { calculateExperience, START_DATE } from '../utils/experience';

const About = () => {
  const details = [
    { icon: <MapPin size={20} />, label: 'Location', value: 'Somaiyanur, Coimbatore' },
    { icon: <Calendar size={20} />, label: 'DOB', value: '19/10/2000' },
    { icon: <Languages size={20} />, label: 'Languages', value: 'Tamil, English' },
    { icon: <User size={20} />, label: 'Experience', value: calculateExperience(START_DATE) },
  ];

  return (
    <section id="about" className="section bg-slate-950/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass p-4 border-indigo-500/20">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-indigo-600/20 to-sky-600/20 flex items-center justify-center border border-white/5">
                   <img src={profileImg} alt="Venkateshwaran M" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Decorative background circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-indigo-500/10 blur-[100px] rounded-full" />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Professional Summary</h3>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                A motivated Frontend Developer with 4 years of experience in Angular-based web applications, 
                with working knowledge of Node.js for full-stack development. Passionate about building 
                reliable, maintainable, and high-quality software.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {details.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-slate-200 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 glass rounded-xl border-l-4 border-l-indigo-500">
                 <p className="text-slate-300 italic">
                   "Eager to adapt and learn domain-specific knowledge based on project requirements. 
                   Open to exploring opportunities in the frontend domain."
                 </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
