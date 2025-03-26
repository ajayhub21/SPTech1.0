import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default ContactPage;
