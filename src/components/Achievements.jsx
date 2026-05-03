import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, ExternalLink } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Achievements = ({ data }) => {
  return (
    <section id="achievements" className="py-24 bg-slate-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Key Achievements</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.achievements.map((ach, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative flex items-start gap-6 p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform flex-shrink-0">
                <Trophy size={28} />
              </div>
              <div className="space-y-3 flex-grow">
                <div className="flex justify-between items-start gap-4">
                  <h4 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-emerald-500 transition-colors">
                    {ach.name}
                  </h4>
                  {ach.link && (
                    <a 
                      href={ach.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-500 hover:text-emerald-500 transition-colors"
                      title="View Certificate"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                  {ach.desc}
                </p>
                {ach.link && (
                   <div className="pt-2">
                      <a 
                        href={ach.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 hover:text-white transition-colors"
                      >
                        Verification Link
                      </a>
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative Tagline */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full border border-slate-800 bg-slate-900/50 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
             <Sparkles size={14} className="text-emerald-500" />
             Consistently pushing limits of digital excellence
             <Sparkles size={14} className="text-emerald-500" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
