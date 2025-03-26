import React from 'react';
import { motion } from 'framer-motion';

import ServicesCore from '../components/ServicesCore';
import ServicesValue from '../components/ServicesValue';
import ServicesAddition from '../components/ServicesAddition';
import ServicesHero from '../components/ServicesHero';




const Services = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ServicesHero/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ServicesCore />
      </motion.div>

    
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <ServicesValue />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <ServicesAddition/>
      </motion.div>

    </div>
  );
};

export default Services;
