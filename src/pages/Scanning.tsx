import React from "react";
import { motion } from "framer-motion";
import { ScanningHero } from "../components/ScanningHero";
import { ScannerDocument } from "../components/ScannerDocument";
import { ScanningSpecial } from "../components/ScanningSpecial";
import ScanningProcess from "../components/ScanningProcess";

const Scanning: React.FC = () => {  // ✅ Fixed: Added component definition
  return (
    <div className="bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ScanningHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ScannerDocument />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ScanningSpecial />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ScanningProcess />
      </motion.div>
    </div>
  );
};

export default Scanning;  // ✅ Fixed: Ensured default export is correct
