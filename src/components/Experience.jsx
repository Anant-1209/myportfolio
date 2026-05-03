import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-24 bg-slate-900/10">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>Work Experience</SectionTitle>

        <div className="space-y-12">
          {data.experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 border-l border-slate-800 pb-12 last:pb-0"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0b0f1a] border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-500 transition-colors">{job.role}</h3>
                <span className="text-xs font-bold text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  {job.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-6 text-emerald-500 font-bold uppercase tracking-widest text-[10px]">
                <Briefcase size={14} />
                <span>{job.company}</span>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                {job.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
