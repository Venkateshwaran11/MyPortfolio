import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Dynamic Form Builder',
      description: 'A sophisticated drag-and-drop tool for creating complex forms dynamically. Built with a focus on usability and flexible data structures.',
      link: 'https://formbuilder-flax.vercel.app/',
      tags: ['Angular', 'Material Design', 'TypeScript', 'JSON Schema'],
      features: [
        'Interactive Drag & Drop Interface',
        'Real-time Form Preview',
        'JSON-based configuration exports',
        'Public response collection support',
        'Support for 10+ field types'
      ]
    }
  ];

  return (
    <section id="projects" className="section bg-slate-900/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Personal Projects</h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl overflow-hidden border-white/5 hover:border-indigo-500/30 transition-all group flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-500/10 to-sky-500/10 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                   <Layout size={80} className="text-indigo-400 opacity-20 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 text-slate-400 hover:bg-indigo-500 hover:text-white transition-all"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <p className="text-slate-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {project.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map((tag, ti) => (
                      <span 
                        key={ti} 
                        className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
