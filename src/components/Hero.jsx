import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowRight, MapPin } from 'lucide-react';

const Hero = ({ data, scrollTo }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative bg-[#0b0f1a]">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/[0.03] skew-x-[-20deg] origin-top" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 max-w-4xl"
        >
          <div className="space-y-4">
            <p className="text-emerald-500 font-bold tracking-[0.4em] uppercase text-[10px]">{data.role}</p>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tightest leading-[1.1] uppercase">
              ANANT KUMAR <br />
              <span className="text-emerald-500 underline decoration-emerald-500/10 underline-offset-8">SAHU.</span>
            </h1>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
               <MapPin size={14} className="text-emerald-500" />
               {data.location}
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            Currently at <span className="text-white font-bold tracking-widest uppercase">Worldline Global Services</span>. Engineering high-performance <span className="text-emerald-400">AI-driven systems</span> and full-stack digital solutions.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
             <button 
               onClick={() => scrollTo('projects')}
               className="group flex items-center gap-2 px-10 py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-emerald-600/20"
             >
               View Works
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </button>

             <button 
               onClick={() => window.open('/resume.pdf', '_blank')}
               className="flex items-center gap-2 px-10 py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-black uppercase tracking-widest text-[10px] transition-all"
             >
               <FileText size={18} />
               Resume.pdf
             </button>
          </div>

          <div className="flex gap-8 pt-8 text-slate-500">
            {[
              { icon: <Github size={24} />, link: data.contact.github },
              { icon: <Linkedin size={24} />, link: data.contact.linkedin },
              { icon: <Mail size={24} />, link: `mailto:${data.contact.email}` }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-emerald-500 transition-all hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Floating Code Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-6 bottom-10 hidden xl:block w-80"
        >
           <div className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 shadow-3xl">
              <div className="space-y-4">
                <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="font-mono text-[11px] text-slate-500 space-y-1">
                   <p><span className="text-emerald-500">const</span> engineer = {'{'}</p>
                   <p className="pl-4">name: <span className="text-yellow-400">'Anant Kumar Sahu'</span>,</p>
                   <p className="pl-4">company: <span className="text-yellow-400">'Worldline'</span>,</p>
                   <p className="pl-4">motto: <span className="text-yellow-400">'Intelligence'</span></p>
                   <p>{'}'}</p>
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
