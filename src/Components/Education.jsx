import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Kishoreganj University",
    year: "2025 - 2029",
    details:
      "Focused on software development, web technologies, and database systems. Built multiple projects using MERN stack.",
  },
  {
    degree: "Complete Web Development Course",
    institution: "Programming Hero",
    year: "Jul 2024 - Dec 2024",
    details:
      "Comprehensive web development training covering HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and modern web technologies.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gray-900 text-white min-h-screen px-8 md:px-16 py-20"
    >
      <div className=" mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8"
        >
          Education & Certification
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-200 mb-12"
        >
          My academic background and professional training
        </motion.p>

        {/* Education Timeline */}
        <div className="space-y-8 text-left">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-200 mb-1">{edu.institution}</p>
              <p className="text-gray-400 mb-3">{edu.year}</p>
              <p className="text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
