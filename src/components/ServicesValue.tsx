import React from "react";
import { FileCode, FileImage, FileCog, FileText, Database } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";  // ✅ Import SpotlightCard

const valueAddedServices = [
  { icon: FileCode, title: "OCR Conversion", description: "Editable text from scanned documents." },
  { icon: FileImage, title: "CAD Conversion", description: "Transform paper drawings into CAD files." },
  { icon: FileCog, title: "PDF Conversion", description: "Standardize documents into PDF format." },
  { icon: FileText, title: "PDF to Word", description: "Convert PDFs into editable Word files." },
  { icon: Database, title: "Data Conversion", description: "Efficient data management solutions." },
];

const ServicesValue: React.FC = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Value-Added Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {valueAddedServices.map((service, index) => (
            <SpotlightCard
              key={index}
              className="hover:scale-105 transition-transform duration-300"
              spotlightColor="rgba(0, 229, 255, 0.2)"  // 🌟 Custom spotlight color
            >
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <service.icon className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesValue;
