import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import SpLogo from "../assets/logos/SpLogo.webp";// Import the image

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/SPTech1.0" },
    { name: "Aboutus", path: "/SPTech1.0/about" },
    { name: "Services", path: "/SPTech1.0/services" },
    { name: "What We Scan", path: "/SPTech1.0/what-we-scan" },
    { name: "Why Scanning", path: "/SPTech1.0/why-scanning" },
    { name: "Customers", path: "/SPTech1.0/customers" },
    { name: "Capacity", path: "/SPTech1.0/capacity" },
    { name: "Contact", path: "/SPTech1.0/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={SpLogo} alt="SP Technologies Logo" className="h-8 w-8" />
            <span
              className={`ml-2 text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              SP Technology
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`transition-colors duration-300 relative group ${
                  isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-blue-200"
                }`}
              >
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`} />
            ) : (
              <Menu className={`transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden flex flex-col items-center pt-24`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center space-y-6 text-white text-lg">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-6 text-xl font-medium hover:text-blue-400 transition-colors duration-300"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
 