import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-400">
          Ishfak Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 flex flex-col items-center gap-4 py-4">
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
