import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { calculateExperience, START_DATE } from '../utils/experience';
import profileImg from '../assets/profile-new.png';

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden">
      <div className="glow-mesh" />
      
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto text-left lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-6 border border-indigo-500/20"
            >
              Frontend Developer & Angular Expert
            </motion.span>
            
            <h1 className="hero-title mb-6 leading-tight text-white">
              Crafting Digital <span className="text-indigo-500">Experiences</span> with Precision
            </h1>
            
            <p className="hero-subtitle mb-10 max-w-2xl text-slate-400 text-lg">
              Hi, I'm <span className="text-white font-semibold text-xl">Venkateshwaran M</span>. 
              A motivated Frontend Developer with {calculateExperience(START_DATE)} of experience specialized in building 
              high-performance web applications using Angular and Node.js.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#experience"
                className="btn-primary flex items-center justify-center gap-2 group text-lg"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-lg border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800/30 transition-all text-lg font-medium text-center"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* New Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[4/5] w-[350px] overflow-hidden rounded-2xl border border-white/10 glass shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Venkateshwaran M" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-4 glass rounded-xl border border-indigo-500/20 shadow-xl"
              >
                <div className="text-indigo-400 font-bold text-xl leading-none">4+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-tighter">Years Exp.</div>
              </motion.div>
            </div>
            
            {/* Decorative back-glow */}
            <div className="absolute -z-10 w-full h-full bg-indigo-500/10 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
