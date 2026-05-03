import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{children}</h2>
      <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
    </motion.div>
  );
};

export default SectionTitle;
