import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Building2 } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const inputClasses = "w-full p-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400";
  const labelClasses = "block text-gray-300 font-medium mb-1 transition-colors duration-300 group-hover:text-blue-400";

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black text-white">
      {/* Header */}
      <motion.section
        className="relative overflow-hidden py-24 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
        <div className="relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl mt-6 max-w-2xl mx-auto text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question or want to work together? We'd love to hear from you.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information */}
      <section className="py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          { icon: <Phone className="w-8 h-8" />, title: "Phone", details: ["+91 9600600105", "9500501661"] },
          { icon: <Mail className="w-8 h-8" />, title: "Email", details: ["yogarajsg@gmail.com","sptechnologies2012@gmail.com"] },
          { icon: <MapPin className="w-8 h-8" />, title: "Location", details: ["No-8/713,IndiraNagar,Saram,Tindivanam(tk) Villupuram (DT).Pincode-604307 "] },
          { icon: <Building2 className="w-8 h-8" />, title: "GST", details: ["33AGBPY7200R2ZX"] },
        ].map(({ icon, title, details }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <SpotlightCard className="h-full p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700"  spotlightColor="rgba(0, 229, 255, 0.2)"  >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">{title}</h3>
                {details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {detail}
                  </p>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <SpotlightCard className="h-full p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700"  spotlightColor="rgba(0, 229, 255, 0.2)"  >
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone", type: "tel" },
                { label: "Subject", name: "subject", type: "text" },
              ].map(({ label, name, type }) => (
                <div key={name} className="group">
                  <label className={labelClasses}>{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder={`Enter your ${label.toLowerCase()}...`}
                    required
                  />
                </div>
              ))}

              <div className="group">
                <label className={labelClasses}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  rows={5}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <AnimatePresence>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center text-green-400 bg-green-400/10 p-4 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent successfully!
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-5 w-5 mr-2" /> Send Message
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </SpotlightCard>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
      
        >
          <SpotlightCard className="h-full p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700"  spotlightColor="rgba(0, 229, 255, 0.2)"  >
            <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-6">
              Find Us
            </h3>
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.472194517117!2d79.649876!3d12.234344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fd4e2e0c4f9b%3A0x9b8e7e03a9998cfd!2sNo-8%2F713%2C%20Indira%20Nagar%2C%20Saram%2C%20Tindivanam%2C%20Villupuram%2C%20Tamil%20Nadu%20604307!5e0!3m2!1sen!2sin!4v1710832928101"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </SpotlightCard>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;