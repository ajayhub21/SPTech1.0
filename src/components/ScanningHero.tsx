import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScanningHero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".Scanner-Document-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-blue-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Hero Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Unlock the Power of Your Documents
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 drop-shadow-md max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover the wide range of documents we can digitize for your business. 
          From <span className="text-blue-400">invoices</span> and 
          <span className="text-blue-400"> contracts</span> to 
          <span className="text-blue-400"> medical records</span> and 
          <span className="text-blue-400"> blueprints</span>, we handle it all with precision and care.
        </motion.p>

        {/* Decorative Divider */}
        <motion.div
          className="mt-6 mb-8 h-1 w-20 mx-auto bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 1 }}
        ></motion.div>

        {/* Additional Info */}
        <motion.p
          className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Simplify your workflow and enhance document accessibility with our 
          cutting-edge scanning solutions. Ensure your documents are always 
          secure, searchable, and easy to manage.
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          onClick={scrollToNextSection}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300 text-lg font-medium"
          whileHover={{ scale: 1.05 }}
        >
          Explore What We Can Scan
        </motion.button>

        {/* Scroll Down Indicator */}
        <motion.div
          className="flex justify-center mt-12 cursor-pointer"
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
         
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </div>
  );
};
