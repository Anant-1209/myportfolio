import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-24 bg-slate-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Technical Arsenal</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300"
            >
              <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-10 border-b-2 border-emerald-500/50 pb-4 inline-block shadow-[0_4px_10px_-5px_rgba(16,185,129,0.5)]">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-bold transition-all hover:bg-emerald-600 hover:text-white hover:border-emerald-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
