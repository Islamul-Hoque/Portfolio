// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const allProjects = [
//   {
//     name: "EduConnect ",
//     tag: "MERN",
//     image: "https://i.ibb.co.com/Fb1b7nhs/e-Tuition-BD2.png",
//     description:
//       "MERN-based tuition system with role-based access, secure auth, Stripe payments, and sleek dashboards for managing students, tutors & admins",
//     live: "https://edu-connect-e1d7e.web.app/",
//     code: "https://github.com/Islamul-Hoque/Edu-Connect-client",
//   },
//   {
//     name: "TravelEase",
//     tag: "MERN",
//     image: "https://i.ibb.co.com/nsCN6MjY/project-view.png",
//     description:
//       "A responsive MERN‐based car rental application enabling users to explore vehicles, manage bookings, and customize themes across devices.",
//     live: "https://travelease-4bacc.web.app",
//     code: "https://github.com/Islamul-Hoque/Travel-Ease-Client",
//   },
//   {
//     name: "GreenNest",
//     tag: "React",
//     image: "https://i.ibb.co.com/dJxWfhTW/gn.png",
//     description:
//       "GreenNest is a sleek single-page MERN application for plant lovers to explore, buy, and care for indoor plants with secure authentication and a modern responsive UI.",
//     live: "https://green-nest-83896.web.app",
//     code: "https://github.com/Islamul-Hoque/GreenNest",
//   },
//   {
//     name: "NextShop",
//     tag: "Next.js",
//     image: "https://i.ibb.co.com/Wv4dDspW/Next.png",
//     description:
//       "A full‐stack e‐commerce platform designed for dynamic product browsing and secure seller management.",
//     live: "https://next-shop-1aqj.vercel.app",
//     code: "https://github.com/Islamul-Hoque/Next-Shop",
//   },
// ];

// const Projects = () => {
//   const [filter, setFilter] = useState("All");

//   const filteredProjects =
//     filter === "All" ? allProjects : allProjects.filter((project) => project.tag === filter);

//   const filters = ["All", "React", "Next.js", "MERN"];

//   return (
//     <section
//       id="projects"
//       className="bg-gray-900 text-white min-h-screen px-8 md:px-16 py-20"
//     >
//       <div className=" mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6"
//         >
//           {/* Featured Projects */}
//           My Projects
//         </motion.h2>
//         <p className="text-gray-300 mb-10">
//           Filter by technology stack to explore my best work
//         </p>

//         {/* Filter Buttons */}
//         <div className="flex justify-center gap-4 flex-wrap mb-12">
//           {filters.map((tag) => (
//             <button
//               key={tag}
//               onClick={() => setFilter(tag)}
//               className={`px-4 py-2 rounded-full font-medium transition duration-200 ${
//                 filter === tag
//                   ? "bg-indigo-500 text-white"
//                   : "bg-gray-700 text-gray-300 hover:bg-indigo-600 hover:text-white"
//               }`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>

//         {/* Project Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <AnimatePresence>
//             {filteredProjects.map((project) => (
//               <motion.div
//                 key={project.name}
//                 initial={{ opacity: 0, y: 60, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 whileHover={{
//                   scale: 1.03,
//                   boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeOut",
//                   type: "spring",
//                   bounce: 0.3,
//                 }}
//                 viewport={{ once: false, amount: 0.3 }}
//                 className="bg-gray-800 rounded-lg overflow-hidden relative flex flex-col"
//               >
//                 {/* Image + Tag */}
//                 <div className="relative">
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-40 object-cover"
//                   />
//                   <span className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full shadow">
//                     {project.tag}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 flex flex-col h-full">
//                   <h3 className="text-xl font-semibold text-indigo-300 mb-2">
//                     {project.name}
//                   </h3>
//                   <p className="text-gray-300 mb-4 flex-grow">
//                     {project.description}
//                   </p>
//                   <div className="flex gap-4 mt-auto">
//                     <a
//                       href={project.code}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-200"
//                     >
//                       <FaGithub /> Code
//                     </a>
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex-1 flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded transition duration-200"
//                     >
//                       <FaExternalLinkAlt /> Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>


//       </div>
//     </section>
//   );
// };

// export default Projects;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
 import { FaGithub, } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const allProjects = [
  {
    name: "EduConnect",
    tag: "MERN",
    image: "https://i.ibb.co.com/Fb1b7nhs/e-Tuition-BD2.png",
    description: "MERN-based tuition system with role-based access, secure auth, Stripe payments, and sleek dashboards.",
    detailsDescription: "EduConnect is a MERN stack tuition management platform designed to streamline student–tutor coordination and provide admins with full system oversight. It offers three distinct role‑based dashboards — Student, Tutor, and Admin — each tailored with secure authentication, payment integration, and analytics features to ensure a scalable and user‑friendly experience.",
    live: "https://edu-connect-e1d7e.web.app",
    code: "https://github.com/Islamul-Hoque/Edu-Connect-client",
    features: ["Firebase Authentication with JWT‐based role access", "Stripe payment integration with revenue tracking", "Analytics dashboards with Recharts visualization", "Real‑time feedback system using SweetAlert2 & Toast"],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "TravelEase",
    tag: "MERN",
    image: "https://i.ibb.co.com/nsCN6MjY/project-view.png",
    description:
      "Responsive MERN car rental app enabling users to explore vehicles, manage bookings, and customize themes.",
    detailsDescription: " ",
    live: "https://travelease-4bacc.web.app",
    code: "https://github.com/Islamul-Hoque/Travel-Ease-Client",
    features: ["Explore vehicles using advanced search, filtering, and sorting features", "Booking management system powered by MongoDB backend", "Dark/Light theme toggle"],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "GreenNest",
    tag: "React",
    image: "https://i.ibb.co.com/dJxWfhTW/gn.png",
    description:"Single-page MERN app for plant lovers to explore, buy, and care for indoor plants with secure auth.",
    detailsDescription: " ",
    live: "https://green-nest-83896.web.app",
    code: "https://github.com/Islamul-Hoque/GreenNest",
    features: ["Plant catalog exploration through search, filters, and sorting", "Firebase Authentication with Email/Password & Google Sign‑In", "Book expert consultations"],
    stack: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    name: "NextShop",
    tag: "Next.js",
    image: "https://i.ibb.co.com/Wv4dDspW/Next.png",
    description: "Full-stack e-commerce platform for dynamic product browsing and secure seller management.",
    detailsDescription: " ",
    live: "https://next-shop-1aqj.vercel.app",
    code: "https://github.com/Islamul-Hoque/Next-Shop",
    features: ["Product exploration through categories and search filters", "Authenticated users can manage products with full CRUD functionality", "Firebase Authentication with Email/Password & Google Sign‑In"],
    stack: ["Next.js", "Node.js", "Express", "MongoDB" ],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter((project) => project.tag === filter);

  const filters = ["All", "React", "Next.js", "MERN"];

  return (
    <section id="projects" className="bg-gray-900 text-white min-h-screen px-8 md:px-16 py-20">
      <div className="mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6"
        >
          My Projects
        </motion.h2>
        <p className="text-gray-300 mb-10">Filter by technology stack to explore my best work</p>

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
                transition={{ duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3 }}
                className="bg-gray-800 rounded-lg overflow-hidden relative flex flex-col"
              >
                <div className="relative">
                  <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full shadow">
                    {project.tag}
                  </span>
                </div>

                <div className="p-4 md:p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex gap-2 mt-auto flex-wrap">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
   className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-2 md:px-3 py-2 rounded transition duration-200"
                    >
                      <FaExternalLinkAlt />
                       Live Demo
                    </a>
                   

<button
  onClick={() => setSelectedProject(project)}
  className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-2 md:px-3 py-2 rounded transition duration-200"
>
  <FaEye /> View Details
</button>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-gray-700 bg-opacity-70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-800 text-white rounded-lg p-8  w-[85%] md:w-[60%] relative text-left"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
        {/* <p className="mb-4">{selectedProject.detailsDescription}</p> */}
        <p className="mb-4">{selectedProject.description}</p>

        <h4 className="text-indigo-400 font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          {selectedProject.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <h4 className="text-indigo-400 font-semibold mb-2">Tech Stack:</h4>
        <p className="text-gray-300 mb-4">
          {selectedProject.stack?.join(", ")}
        </p>

        {/* Buttons with Icons */}
        <div className="flex gap-4">
          <a
            href={selectedProject.code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            <FaGithub /> Code
          </a>
          <a
            href={selectedProject.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>

<button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
  <IoCloseCircle size={24} />
</button>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>





      </div>
    </section>
  );
};

export default Projects;
