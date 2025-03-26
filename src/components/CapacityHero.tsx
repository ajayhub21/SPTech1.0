import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const CapacityHero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".capacity-story-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        {/* Hero Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Scanning Capacity & Equipment
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 drop-shadow-sm max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Unlocking efficiency with industry-leading capacity and state-of-the-art
          scanning equipment to handle any volume of documents swiftly and securely.
        </motion.p>

        {/* Decorative Divider */}
        <motion.div
          className="mt-4 mb-6 sm:mt-6 sm:mb-8 h-1 w-20 mx-auto bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 1 }}
        />

        {/* Additional Info */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          From small batches to massive archives, our advanced scanners and expert
          team ensure your documents are digitized with the highest accuracy and speed.
          Experience seamless document management with our scalable solutions.
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          onClick={scrollToNextSection}
          className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300 text-base sm:text-lg font-medium"
          whileHover={{ scale: 1.05 }}
        >
          Learn More About Our Capacity
        </motion.button>

        {/* Scroll Down Indicator */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12 cursor-pointer"
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 shadow-lg backdrop-blur-md"
            aria-label="Scroll Down"
          >
            <ChevronDown className="text-white w-8 h-8 animate-bounce" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute top-10 left-10 h-24 w-24 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
      <div className="absolute bottom-10 right-10 h-32 w-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
    </div>
  );
};
