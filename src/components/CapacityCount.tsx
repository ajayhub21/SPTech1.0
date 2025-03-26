import React from "react";
import { FileText, BarChart } from "lucide-react";
import CountUp from "./CountUp";

const CapacityCount: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Processing Capacity</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <FileText className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              <CountUp
                from={0}
                to={100000}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
              />
            </h3>
            <p className="text-xl font-semibold text-blue-600 mb-4">Answer Sheets Per Day</p>
            <p className="text-gray-700">Booklet Scanning & Data Extraction</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <BarChart className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              <CountUp
                from={0}
                to={500000}
                separator=","
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
            </h3>
            <p className="text-xl font-semibold text-blue-600 mb-4">Documents Per Day</p>
            <p className="text-gray-700">Variable Data Processing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapacityCount;
