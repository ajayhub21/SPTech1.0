import React from "react";

const CapacityAssurance: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our commitment to quality at every stage of the scanning process.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <p className="text-gray-700 mb-8 text-center text-lg">
            At SP Technologies, we maintain rigorous quality control processes to ensure that every document we scan meets the highest standards. Our quality assurance measures include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pre-Scanning Quality Checks */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-blue-800">Pre-Scanning Quality Checks</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1"></span>
                  <span>Document preparation and inspection</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1"></span>
                  <span>Scanner calibration and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1"></span>
                  <span>Test scans for optimal settings</span>
                </li>
              </ul>
            </div>

            {/* Post-Scanning Quality Checks */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-blue-800">Post-Scanning Quality Checks</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1"></span>
                  <span>Image quality verification</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1"></span>
                  <span>OCR accuracy validation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1"></span>
                  <span>Document completeness check</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-1"></span>
                  <span>Final review by quality assurance team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapacityAssurance;
