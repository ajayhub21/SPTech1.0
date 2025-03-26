import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight
} from "lucide-react";

const CapacityProject: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-in">
          Ready to Start Your Scanning Project?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-200 animate-fade-in delay-200">
          Contact us today to discuss your document scanning needs and learn how our high-capacity scanning capabilities can benefit your organization.
        </p>
        <button
           onClick={() => navigate("/SPTech1.0/contact")}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-colors inline-flex items-center"
            aria-label="Get started with our document scanning services"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
      </div>
    </section>
  );
};

export default CapacityProject;
