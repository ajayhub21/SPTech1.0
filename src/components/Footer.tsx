import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import SpLogo from "../assets/logos/SpLogo.webp"; // Ensure correct import

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-8 lg:space-y-0">
          {/* Logo and Contact Information */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <img src={SpLogo} alt="SP Technologies Logo" className="h-14 w-14" />
              <h1 className="text-2xl lg:text-3xl font-extrabold text-white">SP Technologies</h1>
            </div>
            <p className="text-sm mt-4 max-w-sm mx-auto lg:mx-0 text-gray-400">
              No: 4 NSK Nagar, RP Road, Hasthinapuram, Chrompet, Chennai-44
              <br />
              <strong>Mobile:</strong> 9600600105
            </p>
          </div>

          {/* Footer Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* Company Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4 text-white">Company</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/Sp-Tech/services" className="hover:text-blue-400 transition">Services</a>
                </li>
                <li>
                  <a href="/Sp-Tech/about" className="hover:text-blue-400 transition">About Us</a>
                </li>
              </ul>
            </div>

            {/* Resource Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4 text-white">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/SPTech/Blog" className="hover:text-blue-400 transition">Blogs & Case Studies</a>
                </li>
                <li>
                  <a href="/SPTech/FAQ" className="hover:text-blue-400 transition">FAQs</a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4 text-white">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/SPTech/Privacy" className="hover:text-blue-400 transition">Privacy</a>
                </li>
                <li>
                  <a href="/SPTech/Terms" className="hover:text-blue-400 transition">Terms</a>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition">Contact</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-700 hover:bg-blue-500 transition">
              <FaFacebookF className="text-white" size={18} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-700 hover:bg-pink-500 transition">
              <FaInstagram className="text-white" size={18} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-700 hover:bg-red-500 transition">
              <FaYoutube className="text-white" size={18} />
            </a>
          </div>

          <div className="text-sm text-gray-400 mt-6 md:mt-0">
            © 2025 SP Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

