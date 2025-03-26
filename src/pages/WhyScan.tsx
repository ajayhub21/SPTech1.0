import React from 'react';
import { motion } from 'framer-motion';
import { WhyScanHero } from '../components/WhyScanHero';
import { WhyScanBenifits } from '../components/WhyScanBenifits';
import  WhyScanSuccess  from '../components/WhyScanSuccess';


const Home = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <WhyScanHero />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <WhyScanBenifits />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <WhyScanSuccess />
      </motion.div>

    
    </div>
  );
};

export default Home;
