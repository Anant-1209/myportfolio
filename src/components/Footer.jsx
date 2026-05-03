import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="py-16 bg-[#0b0f1a] border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">
          Anant<span className="text-blue-500">.</span>
        </h2>
        
        <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
           <a href={data.contact.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
           <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
           <a href={`mailto:${data.contact.email}`} className="hover:text-white transition-colors">Contact</a>
        </div>

        <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest pt-8 border-t border-slate-900">
          © {new Date().getFullYear()} {data.name.toUpperCase()} / ENGINEERED FOR PERFORMANCE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
