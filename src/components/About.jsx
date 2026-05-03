import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Profile Overview</SectionTitle>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Software Engineer focused on building <span className="text-emerald-500">Intelligent & Scalable Systems</span>.
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              {data.bio}
            </p>
            
            <div className="flex flex-wrap gap-8 pt-4">
               <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">8.59</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Overall CGPA</p>
               </div>
               <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">2025</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Graduation Year</p>
               </div>
               <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">07+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Certifications</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
             <div className="p-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-start gap-4 mb-8">
                   <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <GraduationCap size={32} />
                   </div>
                   <div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Academic Foundation</h4>
                      <p className="text-xl font-bold text-white tracking-tighter uppercase leading-tight">Nitte Meenakshi Institute Of Technology</p>
                   </div>
                </div>
                
                <div className="space-y-6 pt-6 border-t border-slate-800/50">
                   <div>
                      <p className="text-sm font-bold text-emerald-500 uppercase tracking-wider">Bachelor of Engineering</p>
                      <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-widest">Information Science & Engineering • {data.education.period}</p>
                   </div>
                   
                   <div className="p-4 rounded-xl bg-black/40 border border-slate-800 flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Academic Standing</span>
                      <span className="text-xl font-black text-white">8.59 <span className="text-[10px] text-zinc-600">/ 10</span></span>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
