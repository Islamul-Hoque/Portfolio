import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand - Left */}
        <div className="text-center md:text-left">
          <h2 className="text-indigo-400 font-bold text-xl mb-3">
            Islamul Hoque
          </h2>
          <p className="text-sm text-gray-400">
            Turning ideas into interactive web solutions with MERN & polished
            UI/UX
          </p>
        </div>

        {/* Quick Links - Center */}
        <div className="text-center">
          <h4 className="font-semibold text-indigo-300 mb-3">Quick Links</h4>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <a href="#about" className="hover:text-indigo-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-indigo-400">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media - Right */}
        <div className="text-center">
          <h4 className="font-semibold text-indigo-300 mb-3">Follow Me</h4>
          <div className="flex justify-center gap-4 text-xl">
            <a
              href="https://github.com/Islamul-Hoque"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-3 rounded-full text-white 
                 hover:bg-indigo-500 hover:scale-110 hover:shadow-lg 
                 transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/Islamul-Hoque"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-3 rounded-full text-white 
                 hover:bg-indigo-500 hover:scale-110 hover:shadow-lg 
                 transition-transform duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/ISLAMUL.HOQUE.ISHFAK.OFFICIAL"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-3 rounded-full text-white 
                 hover:bg-indigo-500 hover:scale-110 hover:shadow-lg 
                 transition-transform duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Islamul Hoque. All rights reserved.
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;