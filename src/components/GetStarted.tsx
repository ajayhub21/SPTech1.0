import React from "react";
import { ArrowRight } from "lucide-react";

const GetStarted = ({ text = "Get Started Today", onClick }) => {
  return (
    <div className="mt-20 text-center">
      <button
        onClick={onClick}
        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        {text}
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
      <p className="mt-4 text-gray-600">Questions? Contact our team for a free consultation</p>
    </div>
  );
};

export default GetStarted;
