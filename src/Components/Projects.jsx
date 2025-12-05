import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
  {
    name: "EcoTrack",
    tag: "MERN",
    image: "https://i.ibb.co.com/mrxRKKX3/Pharande-Spaces-Blog-Image-2.jpg",
    description:
      "Community platform for eco-conscious individuals to explore sustainability challenges and track impact.",
    live: "https://eco-track.vercel.app",
    code: "https://github.com/ishfak/eco-track-client",
  },
  {
    name: "GameHub",
    tag: "React",
    image: "https://i.ibb.co.com/mrxRKKX3/Pharande-Spaces-Blog-Image-2.jpg",
    description:
      "Interactive online game library to discover, explore, and support game developers.",
    live: "https://gamehub.vercel.app",
    code: "https://github.com/ishfak/gamehub-client",
  },
  {
    name: "Footwear Zone",
    tag: "Next.js",
    image: "https://i.ibb.co.com/mrxRKKX3/Pharande-Spaces-Blog-Image-2.jpg",
    description:
      "Modern e-commerce website for footwear enthusiasts with Firebase auth and admin dashboard.",
    live: "https://footwear-zone.vercel.app",
    code: "https://github.com/ishfak/footwear-zone-client",
  },
];

const fadeCard = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 30,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.tag === filter);

  const filters = ["All", "React", "Next.js", "MERN"];

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white min-h-screen px-8 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6"
        >
          Featured Projects
        </motion.h2>
        <p className="text-gray-300 mb-10">
          Filter by technology stack to explore my best work
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {filters.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full font-medium transition duration-200 ${
                filter === tag
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-indigo-600 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
  key={project.name}
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.3)" }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    type: "spring",
    bounce: 0.3,
  }}
  viewport={{ once: false, amount: 0.3 }}
  className="bg-gray-800 rounded-lg overflow-hidden relative"
>
  {/* Image + Tag */}
  <div className="relative">
    <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
    <span className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full shadow">
      {project.tag}
    </span>
  </div>

  {/* Content */}
  <div className="p-6">
    <h3 className="text-xl font-semibold text-indigo-300 mb-2">{project.name}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex gap-4">
      <a href={project.live} target="_blank" rel="noreferrer"
         className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded transition duration-200">
        Live Demo
      </a>
      <a href={project.code} target="_blank" rel="noreferrer"
         className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-200">
        Code
      </a>
    </div>
  </div>
</motion.div>

            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
