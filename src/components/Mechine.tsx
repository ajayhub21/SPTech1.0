import { useState } from "react";
import Fujitsu7160 from "../assets/images/Fujitsu-fi-7160.webp";
import Fujitsu6120z from "../assets/images/Fujitsu-fi-6130z.webp";
import Kodak12620 from "../assets/images/KODAK-I2620.webp";
import Kotak14600 from "../assets/images/Kotak-14600.webp";

const Mechine = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Image Data Array
  const images = [
    { src: Fujitsu7160, name: "Fujitsu fi-7160" },
    { src: Fujitsu6120z, name: "Fujitsu fi-6130z" },
    { src: Kodak12620, name: "KODAK i2620" },
    { src: Kotak14600, name: "Kodak 14600" }
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-gray-900 to-black p-6">
      {/* Title */}
      <h1 className="text-white text-3xl font-bold mb-6 text-center">Scanner Gallery</h1>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => setHoveredImage(img.name)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-48 md:h-56 object-contain bg-gray-800 p-4 rounded-lg transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            {hoveredImage === img.name && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
                {img.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mechine;
