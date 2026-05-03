import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ scrollTo, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', id: 'about' },
    { name: 'Exp', id: 'experience' },
    { name: 'Works', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certs', id: 'certifications' },
    { name: 'Awards', id: 'achievements' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b0f1a]/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo & Photo */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => scrollTo('home')}
        >
           <div className="w-10 h-10 rounded-full border-2 border-emerald-500 p-0.5 overflow-hidden group-hover:scale-110 transition-transform">
              <img src="./profile.jpeg" alt="Anant" className="w-full h-full object-cover rounded-full" />
           </div>
           <span className="text-xl font-bold text-white uppercase tracking-tighter">
             Anant<span className="text-emerald-500">.</span>
           </span>
        </div>
        
        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-emerald-400 ${activeSection === link.id ? 'text-emerald-400' : 'text-slate-400'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-emerald-600/20"
          >
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button 
          className="lg:hidden text-slate-400 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[72px] bg-[#0b0f1a] border-b border-slate-800 lg:hidden z-40 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {links.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => { scrollTo(link.id); setIsMenuOpen(false); }}
                  className={`text-xs font-bold uppercase tracking-widest text-left ${activeSection === link.id ? 'text-emerald-500' : 'text-slate-400'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => { scrollTo('contact'); setIsMenuOpen(false); }}
                className="w-full py-3 rounded-lg bg-emerald-600 text-white font-black uppercase text-[10px] tracking-widest shadow-lg shadow-emerald-600/20"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
