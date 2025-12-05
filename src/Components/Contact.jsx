import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaReply,
  FaRegCommentDots,
} from "react-icons/fa";

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white min-h-screen px-8 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-indigo-400 text-center mb-6"
        >
          Get In Touch
        </motion.h2>
        <p className="text-gray-300 text-center mb-10">
          Let’s turn ideas into interactive web experiences — I’m open to MERN
          stack opportunities.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gray-800 p-8 rounded-lg shadow space-y-6"
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">
              Contact Info
            </h3>

            {/* Email */}
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500 p-2 rounded-full text-white text-lg mt-1">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-1">Email</p>
                <p className="text-gray-400">islamulhoque2006@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500 p-2 rounded-full text-white text-lg mt-1">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-1">Phone</p>
                <p className="text-gray-400">+8801761830425</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500 p-2 rounded-full text-white text-lg mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-1">Address</p>
                <p className="text-gray-400">Chittagong City, Bangladesh</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500 p-2 rounded-full text-white text-lg mt-1">
                <FaRegCommentDots />
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-1">Response Time</p>
                <p className="text-gray-400">Usually within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gray-800 p-8 rounded-lg shadow space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Enter message"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded transition duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
