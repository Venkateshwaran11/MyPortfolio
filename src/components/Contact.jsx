import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const GithubIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Contact = () => {
  const contactInfo = [
    { 
      icon: <Mail className="text-rose-400" />, 
      label: 'Email', 
      value: 'venkateshwaran867@gmail.com',
      href: 'mailto:venkateshwaran867@gmail.com'
    },
    { 
      icon: <Phone className="text-emerald-400" />, 
      label: 'Phone', 
      value: '8680012326',
      href: 'tel:8680012326'
    },
    { 
      icon: <LinkedinIcon className="text-blue-400" />, 
      label: 'LinkedIn', 
      value: 'venkateshwaran-m-a338811b6',
      href: 'https://www.linkedin.com/in/venkateshwaran-m-a338811b6/'
    }
  ];

  return (
    <section id="contact" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Let's connect!</h3>
              <p className="text-slate-400 text-lg">
                I am open to exploring new opportunities and collaborating on exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>
              
              <div className="space-y-6 pt-4">
                {contactInfo.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 glass rounded-2xl border-white/5 hover:border-indigo-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-slate-200 font-semibold text-lg">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Simple Contact Form Shell */}
            <div className="glass p-8 rounded-3xl border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -z-10" />
               <form className="space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                   <input 
                    type="text" 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors"
                    placeholder="Your Name"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                   <input 
                    type="email" 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors"
                    placeholder="Your Email"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                   <textarea 
                    rows="4"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors resize-none"
                    placeholder="Your Message"
                   />
                 </div>
                 <button className="btn-primary w-full py-4 flex items-center justify-center gap-2 group">
                   Send Message
                   <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
               </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
