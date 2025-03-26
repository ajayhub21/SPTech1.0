import React from "react";
import { Printer } from "lucide-react";

const CapacityEquipment: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Scanning Equipment</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We own and operate 32 units of high-performance scanners from industry-leading manufacturers.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-8 justify-center">
            <div className="flex items-center bg-blue-100 p-4 rounded-full">
              <Printer className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 ml-4">Scanner Fleet</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Kodak Scanners */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-blue-800">Kodak Scanners</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Kodak I3400 - High-volume production scanner</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Kodak I2620 - Departmental scanner</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                Our Kodak scanners offer exceptional image quality, reliable paper handling, and high-speed scanning capabilities for various document types.
              </p>
            </div>

            {/* Fujitsu Scanners */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-blue-800">Fujitsu Scanners</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Fujitsu fi-7160 - Workgroup scanner</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Fujitsu fi-6130Z - Compact desktop scanner</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                Our Fujitsu scanners provide reliable performance, excellent paper handling, and advanced image processing features for high-quality document digitization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapacityEquipment;
