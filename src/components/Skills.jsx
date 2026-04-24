import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Radio, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-indigo-400" />,
      skills: ['Angular (14+)', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS']
    },
    {
      title: 'Backend',
      icon: <Terminal className="text-sky-400" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs']
    },
    {
      title: 'Database',
      icon: <Database className="text-emerald-400" />,
      skills: ['MongoDB', 'CouchDB', 'SQL']
    },
    {
      title: 'Tools & Platforms',
      icon: <Radio className="text-amber-400" />,
      skills: ['Git', 'GitHub', 'GitLab']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, si) => (
                    <span 
                      key={si} 
                      className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-medium border border-white/5 group-hover:border-indigo-500/20 group-hover:text-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
