import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import StepComponent from "../components/Step";
import DailyProcessingCapacity from "../components/DailyProcessingCapacity";
import About from "../components/About";
import { useRef } from "react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

// Reusable Animated Section
const AnimatedSection = ({ children, animationType }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationType}
      className="m-0 p-0"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="overflow-hidden">
      {/* Hero Section - No Extra Padding/Margin */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="m-0 p-0">
      <Hero scrollToFeatures={scrollToFeatures} />
      </motion.div>

      {/* Features Section */}
      <AnimatedSection animationType={fadeInUp}>
      <div ref={featuresRef}>
        <Features />
      </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection animationType={zoomIn}>
        <Services />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection animationType={fadeInUp}>
        <Testimonials />
      </AnimatedSection>

      {/* Step Component */}
      <AnimatedSection animationType={zoomIn}>
        <StepComponent />
      </AnimatedSection>

      {/* Daily Processing Capacity */}
      <AnimatedSection animationType={fadeInUp}>
        <DailyProcessingCapacity />
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection animationType={zoomIn}>
        <About />
      </AnimatedSection>
    </div>
  );
};

export default Home;
