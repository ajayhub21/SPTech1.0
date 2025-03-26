




import React from "react";
import { motion } from "framer-motion";

// Importing images
import recallIndiaLogo from "../assets/logos/recall.png";
import crownWorldwideLogo from "../assets/logos/Crown-logo.jpg";
import doteLogo from "../assets/logos/DOTE.png";
import tataCapitalLogo from "../assets/logos/Tata_Capital.jpg";
import nissanRenaultLogo from "../assets/logos/nissan.jpg";
import lnvTechnologyLogo from "../assets/logos/LNI.webp";
// import revaluationLogo from "../assets/logos/revaluation.png";
import bsnlLogo from "../assets/logos/BSNL.webp";
import hdfcLogo from "../assets/logos/hdfc.jpg";
import luminaLogo from "../assets/logos/lumina.png";
import gsmMaplesLogo from "../assets/logos/Maples.jpg";
// import firstMathLogo from "../assets/logos/first-math.png";
// import originLogo from "../assets/logos/origin.png";
import apolloLogo from "../assets/logos/apolo.png";
import ramachandraLogo from "../assets/logos/ramachandra.png";
import datamaticsLogo from "../assets/logos/datamatics.webp";
import expressAvenueLogo from "../assets/logos/EA.jpg";
// import bigDataLogo from "../assets/logos/big-data.png";
import vjTechnologiesLogo from "../assets/logos/vjtechnology.jpg";

const clients = [
  { name: "RECALL INDIA Information Management Pvt Ltd, Chennai", logo: recallIndiaLogo },
  { name: "Crown World Wide", logo: crownWorldwideLogo },
  { name: "DIRECTORATE OF TECHNICAL EDUCATION (DOTE)", logo: doteLogo },
  { name: "Tata Capital Finance India Pvt Ltd", logo: tataCapitalLogo },
  { name: "Nissan Renault Financial Services India Pvt Ltd", logo: nissanRenaultLogo },
  { name: "LNV Technology", logo: lnvTechnologyLogo },
  // { name: "REVALUATION 12TH EXAM PAPER", logo: revaluationLogo },
  { name: "BSNL Application Form, Cuddalore", logo: bsnlLogo },
  { name: "HDFC File Board Processing", logo: hdfcLogo },
  { name: "Lumina Data Matics", logo: luminaLogo },
  { name: "GSM Maples", logo: gsmMaplesLogo },
  // { name: "First Math BPO Pvt Ltd", logo: firstMathLogo },
  // { name: "Origin-sub vendor", logo: originLogo },
  { name: "Apollo Hospital Medical Records", logo: apolloLogo },
  { name: "Ramachandra Medical College Records", logo: ramachandraLogo },
  { name: "Datamatics Global Services Ltd", logo: datamaticsLogo },
  { name: "Express Avenue", logo: expressAvenueLogo },
  // { name: "Big Data Imaging", logo: bigDataLogo },
  { name: "VJ Technologies", logo: vjTechnologiesLogo },
];

const AboutClient: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-12 animate-fade-in">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white/10 rounded-lg p-4 shadow-md hover:bg-white/20 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 object-contain mb-2 mx-auto"
              />
              <span className="text-white">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutClient;






