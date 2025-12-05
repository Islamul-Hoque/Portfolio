import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Kishoreganj University",
    year: "2021 - 2025",
    details:
      "Focused on software development, web technologies, and database systems. Built multiple projects using MERN stack.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Kishoreganj College",
    year: "2018 - 2020",
    details:
      "Studied core science subjects including Physics, Chemistry, and Mathematics. Developed strong analytical foundation.",
  },
  {
    degree: "Secondary School Certificate (SSC) - Science",
    institution: "Kishoreganj High School",
    year: "2016 - 2018",
    details:
      "Completed secondary education with focus on science group subjects. Built early interest in programming.",
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
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-indigo-400 mb-12"
        >
          Education
        </motion.h2>

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
