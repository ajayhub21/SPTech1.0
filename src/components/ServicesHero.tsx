import React from "react";
import { motion } from "framer-motion";

const ServicesHero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".core-services-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-gray-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Your Documents with Our Advanced Solutions
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience seamless document management with our comprehensive scanning and conversion services.
        </motion.p>
        <motion.button
          onClick={scrollToNextSection}
          className="px-8 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Explore Our Services
        </motion.button>
      </div>
    </section>
  );
};

export default ServicesHero;
