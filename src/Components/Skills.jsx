import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    color: "bg-indigo-500",
    skills: [
      { name: "HTML5", percent: 95 },
      { name: "CSS3", percent: 90 },
      { name: "Tailwind CSS", percent: 88 },
      { name: "JavaScript (ES6+)", percent: 85 },
      { name: "React.js", percent: 85 },
      { name: "Next.js", percent: 75 },
      { name: "Framer Motion", percent: 80 },
    ],
  },
  {
    category: "Backend",
    color: "bg-green-500",
    skills: [
      { name: "Node.js", percent: 80 },
      { name: "Express.js", percent: 78 },
      { name: "MongoDB", percent: 82 },
      { name: "REST API", percent: 80 },
      { name: "Firebase Auth", percent: 75 },
      { name: "JWT", percent: 70 },
    ],
  },
  {
    category: "Tools",
    color: "bg-pink-500",
    skills: [
      { name: "Git", percent: 85 },
      { name: "GitHub", percent: 85 },
      { name: "Vercel", percent: 80 },
      { name: "Netlify", percent: 78 },
      { name: "Cloudflare", percent: 70 },
    ],
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-900 text-white min-h-screen px-8 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-indigo-400 mb-12"
        >
          My Skills
        </motion.h2>
        <p className="text-gray-300 mb-10">
          {/* Technologies and tools I use to build modern web applications */}
          My toolkit for building responsive, interactive, and scalable web applications
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gray-800 p-6 rounded-xl shadow"
            >
              {/* Centered Category Title */}
              <h3 className="text-xl font-semibold text-indigo-300 mb-6 text-center">
                {group.category}
              </h3>

              {group.skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.percent}%</span>
                  </div>
                  {/* Colored Progress Bar */}
                  <div className="relative w-full h-2 bg-gray-700 rounded">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1 }}
                      className={`h-2 rounded ${group.color}`}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
