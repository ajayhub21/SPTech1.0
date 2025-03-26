import React from "react";
import { motion } from "framer-motion";

import { AboutStory } from "../components/AboutStory";
import { AboutHero } from "../components/AboutHero";
import AboutMission from "../components/AboutMission";
import AboutClient from "../components/AboutClient";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <AboutHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <AboutStory />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <AboutMission />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <AboutClient />
      </motion.div>
    </div>
  );
};

export default AboutUs;
