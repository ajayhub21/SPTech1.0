import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TiltedCard from "./TiltedCard";
import kotak12printer from "../assets/images/kotak12printer.jpg";

interface HeroProps {
  scrollToFeatures: () => void;
}

export const Hero = ({ scrollToFeatures }: HeroProps) => {
  return (
    <motion.div className="relative min-h-screen flex flex-col justify-between bg-gray-900 overflow-hidden">
      {/* Floating Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Transform Your Documents<br />
            Into Digital Assets
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto sm:mx-0">
            Established in 2012, SP Technologies provides high-quality 
            and efficient document scanning services tailored to customers' needs.
          </p>
        </div>

        {/* Right Side - Tilted Card with Custom Image */}
        <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <TiltedCard
            imageSrc={kotak12printer}
            altText="Scanning Process"
            
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
           
          />
        </motion.div>
      </div>

      {/* Enhanced Scroll Button */}
      <motion.button
        onClick={scrollToFeatures}
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 shadow-lg backdrop-blur-md"
        initial={{ y: 10 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll Down"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.button>
      <div className="absolute top-10 left-10 h-24 w-24 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
      <div className="absolute bottom-10 right-10 h-32 w-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
    </motion.div>
  );
};
