import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Calendar } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Certifications = ({ data }) => {
  return (
    <section id="certifications" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Technical Certifications</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-8">
                 <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <ShieldCheck size={24} />
                 </div>
                 {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 text-slate-500 hover:text-emerald-500 transition-colors"
                      title="View Certificate"
                    >
                      <ExternalLink size={18} />
                    </a>
                 )}
              </div>

              <div className="space-y-4 flex-grow">
                 <h4 className="text-sm font-black uppercase tracking-wider text-white group-hover:text-emerald-500 transition-colors">
                    {cert.name}
                 </h4>
                 <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
                       <Calendar size={12} className="text-emerald-500/50" />
                       {cert.date}
                    </div>
                 </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/50">
                 <a 
                   href={cert.link} 
                   target="_blank" 
                   rel="noreferrer" 
                   className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 hover:text-white transition-colors"
                 >
                   Verify Credential
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
