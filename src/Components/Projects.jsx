import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const allProjects = [
  {
    name: "TravelEase",
    tag: "MERN",
    image: "https://i.ibb.co.com/nsCN6MjY/project-view.png",
    description:
      "A responsive MERN‐based car rental application enabling users to explore vehicles, manage bookings, and customize themes across devices.",
    live: "https://travelease-4bacc.web.app/",
    code: "https://github.com/Islamul-Hoque/Travel-Ease-Client",
  },
  {
    name: "GreenNest",
    tag: "React",
    image: "https://i.ibb.co.com/dJxWfhTW/gn.png",
    description:
      "GreenNest is a sleek single-page MERN application for plant lovers to explore, buy, and care for indoor plants with secure authentication and a modern responsive UI.",
    live: "https://green-nest-83896.web.app",
    code: "https://github.com/Islamul-Hoque/GreenNest",
  },
  {
    name: "NextShop",
    tag: "Next.js",
    image: "https://i.ibb.co.com/Wv4dDspW/Next.png",
    description:
      "A full‐stack e‐commerce platform designed for dynamic product browsing and secure seller management.",
    live: "https://next-shop-1aqj.vercel.app",
    code: "https://github.com/Islamul-Hoque/Next-Shop",
  },
];

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
          {/* Featured Projects */}
          My Projects
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
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  type: "spring",
                  bounce: 0.3,
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-gray-800 rounded-lg overflow-hidden relative flex flex-col"
              >
                {/* Image + Tag */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full shadow">
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-200"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded transition duration-200"
                    >
                      <FaExternalLinkAlt /> Live Demo
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
