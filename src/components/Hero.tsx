import { useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TiltedCard from "./TiltedCard";
import kotak12printer from "../assets/images/kotak12printer.jpg";

interface HeroProps {
  scrollToFeatures: () => void;
}

export const Hero = ({ scrollToFeatures }: HeroProps) => {
  const floatingParticles = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
      })),
    []
  );

  return (
    <motion.div className="relative min-h-screen flex flex-col justify-between bg-gray-900 overflow-hidden">
      {/* Floating Particles */}
      <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {floatingParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{ top: particle.top, left: particle.left }}
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Transform Your Documents<br />
            Into Digital Assets
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Established in 2012, SP Technologies provides high-quality and efficient document scanning services tailored
            to customers' needs.
          </p>
        </div>

        {/* Right Side - Tilted Card with Custom Image */}
        <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <TiltedCard
            imageSrc={kotak12printer}
            altText="Scanning Process"
            containerHeight="260px"
            containerWidth="260px"
            imageHeight="260px"
            imageWidth="260px"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Enhanced Scroll Button for Mobile */}
      <motion.button
        onClick={scrollToFeatures}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 shadow-lg backdrop-blur-md"
        initial={{ y: 10 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to Features Section"
      >
        <ChevronDown className="text-white w-10 h-10 sm:w-12 sm:h-12" />
      </motion.button>

      {/* Background Gradient Effects */}
      <div className="absolute top-10 left-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-48 lg:w-48 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 h-24 w-24 sm:h-32 sm:w-32 lg:h-56 lg:w-56 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
    </motion.div>
  );
};