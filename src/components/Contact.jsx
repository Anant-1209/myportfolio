import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
          I'm currently working as a Graduate Engineer at Worldline. Feel free to connect for technical discussions, cloud insights, or professional networking.
        </p>
        
        <div className="max-w-md mx-auto mb-12">
          <motion.a 
            whileHover={{ y: -5 }}
            href={`mailto:${data.contact.email}`} 
            className="group p-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500 transition-all duration-300 block"
          >
            <div className="w-12 h-12 mx-auto bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Professional Email</h3>
            <p className="text-slate-400 font-medium group-hover:text-emerald-400 transition-colors">{data.contact.email}</p>
          </motion.a>
        </div>

        <button 
           onClick={() => window.open(`mailto:${data.contact.email}`)}
           className="px-10 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-xl shadow-emerald-600/20 flex items-center gap-3 mx-auto"
        >
          <Send size={18} />
          Send a Message
        </button>
      </div>
    </section>
  );
};

export default Contact;
