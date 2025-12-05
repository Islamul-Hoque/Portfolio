import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Framer Motion variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="bg-gray-900 text-white min-h-screen flex items-center px-8 md:px-16 py-20"
    >
      <div className=" mx-auto text-center">
        {/* Centered Title */}
        <motion.h2
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // animate every time in view
          className="text-3xl md:text-4xl font-bold text-indigo-400 mb-10"
        >
          About Me
        </motion.h2>

        {/* Animated Content */}
        <motion.p
  variants={textVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
>
I am Islamul Hoque, a passionate MERN Stack Developer. My journey in web development started with curiosity, and now I specialize in building scalable, responsive, and visually engaging websites.

</motion.p>

<motion.p
  variants={textVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
>
  I especially enjoy working with React, Node.js, Express, and MongoDB.
  I also have a strong interest in UI/UX design because I want every
  user experience to be smooth, modern, and engaging.
</motion.p>

<motion.p
  variants={textVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="text-lg md:text-xl text-gray-300 leading-relaxed"
>
  Beyond coding, I enjoy exploring design trends and experimenting with
  interactive features that make applications stand out.
</motion.p>


      </div>
    </section>
  );
};

export default About;
