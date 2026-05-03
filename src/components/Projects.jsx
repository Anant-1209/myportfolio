import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Featured Projects</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 rounded-xl bg-slate-800 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <Folder size={24} />
                </div>
                <div className="flex gap-6 text-slate-500">
                   <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                     <Github size={20} />
                   </a>
                   <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                     <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Live</span>
                     <ExternalLink size={20} />
                   </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-500 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-colors">
                    {t}
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

export default Projects;
