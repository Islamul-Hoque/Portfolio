// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed w-full bg-gray-900 text-white shadow-md z-50">
//       <div className=" mx-auto px-4 flex justify-between items-center h-16">
//         {/* Logo */}
//         <div className="text-xl font-bold text-indigo-400">
//           Islamul Hoque
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 font-medium">
//           <li><a href="#about" className="hover:text-indigo-400">About</a></li>
//           <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
//           <li><a href="#education" className="hover:text-indigo-400">Education</a></li>
//           <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
//           <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <span className="text-2xl">✖</span>
//           ) : (
//             <span className="text-2xl">☰</span>
//           )}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <ul className="md:hidden bg-gray-800 flex flex-col items-center gap-4 py-4">
//           <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
//           <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
//           <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
//           <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-900 text-white shadow-sm px-4 md:px-14">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
          <li><a href="#education" className="hover:text-indigo-400">Education</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        
      </ul>
    </div>
    <a className="md:text-xl font-bold text-indigo-400">Islamul Hoque</a>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
     
            <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
          <li><a href="#education" className="hover:text-indigo-400">Education</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
    
    </ul>
  </div>

</div>
  );
};

export default Navbar;