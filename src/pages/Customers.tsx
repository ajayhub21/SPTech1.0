import React from 'react';
import { motion } from 'framer-motion';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import StepComponent from '../components/Step';
import DailyProcessingCapacity from '../components/DailyProcessingCapacity';
import About from '../components/About';

const Customers = () => {
  return (
    <div>
      

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Features />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Services />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Testimonials />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <StepComponent />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <DailyProcessingCapacity />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <About />
      </motion.div>
    </div>
  );
};

export default Customers;
