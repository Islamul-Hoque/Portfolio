import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gray-900 text-white min-h-screen flex items-center px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hi, I'm Ishfak
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
            MERN Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I build scalable web applications with clean UI/UX and modern technologies.
          </p>

          {/* Resume Button + Social Icons */}
          <div className="flex items-center gap-6 mt-6">
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1VFQ8OPB9Ht8ods-cUFKx3bBOihQ-4gvY/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              download
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition duration-200"
            >
              <FaDownload /> Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 text-2xl">
              <a href="https://github.com/ishfak" target="_blank" rel="noreferrer" className="hover:text-indigo-400">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ishfak" target="_blank" rel="noreferrer" className="hover:text-indigo-400">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/ishfak" target="_blank" rel="noreferrer" className="hover:text-indigo-400">
                <FaTwitter />
              </a>
              <a href="https://facebook.com/ishfak" target="_blank" rel="noreferrer" className="hover:text-indigo-400">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profile}
            alt="Profile"
            className="w-64 h-64 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
