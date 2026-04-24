import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'ChainSys Software Exports Pvt Ltd',
      role: 'Software Engineer - Angular Developer',
      period: 'February, 2022 - Present',
      description: 'Working on low-code and no-code platforms to streamline application development.',
      projects: [
        {
          name: 'Smart App Builder (No Code Platform)',
          details: [
            'Developed and maintained Angular-based UI components for a no-code application builder.',
            'Implemented dynamic HTML form generation using JSON schemas, reducing manual effort by 40%.',
            'Integrated payment gateways including PayPal, Stripe, and Razorpay.',
            'Enhanced user role and privilege management with CRUD access controls.',
            'Contributed to Angular version upgrades for better performance and security.'
          ]
        },
        {
          name: 'MSRTC',
          details: [
            'Built dynamic and responsive dashboards with filters, charts, and real-time updates.',
            'Designed a customization framework where base code changes did not impact existing customizations.',
            'Involved in customization features within a low-code platform to support flexible business requirements.'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-slate-950/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>

          <div className="mt-16 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-indigo-500/30">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-indigo-400 font-medium text-lg">
                      <Briefcase size={18} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-sm font-semibold h-fit w-fit">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-slate-400 text-lg mb-8 max-w-3xl">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {exp.projects.map((project, pidx) => (
                    <motion.div 
                      key={pidx}
                      whileHover={{ y: -5 }}
                      className="glass p-6 rounded-xl border-white/5 hover:border-indigo-500/30 transition-all duration-300"
                    >
                      <h4 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {project.name}
                      </h4>
                      <ul className="space-y-3">
                        {project.details.map((detail, di) => (
                          <li key={di} className="text-slate-400 text-sm flex gap-3">
                            <span className="text-indigo-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
