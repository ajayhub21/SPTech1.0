import React from "react";
import { motion } from "framer-motion";
import { CapacityHero } from "../components/CapacityHero";
import CapacityOverview from "../components/CapacityOverview";
import CapacityCount from "../components/CapacityCount";
import CapacityEquipment from "../components/CapacityEquipment";
import CapacityAssurance from "../components/CapacityAssurance";
import CapacityProject from "../components/CapacityProject";
import Mechine from "../components/Mechine";

const Capacity: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <CapacityHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <CapacityOverview/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <CapacityCount />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <CapacityEquipment />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <CapacityAssurance />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <CapacityProject/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Mechine/>
      </motion.div>
    </div>
  );
};

export default Capacity;
