import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center bg-slate-950">
        <div className="container">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Venkateshwaran M. Built with React & Passion.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://www.linkedin.com/in/venkateshwaran-m-a338811b6/" target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href="mailto:venkateshwaran867@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
