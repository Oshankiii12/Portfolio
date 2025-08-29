import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Particles } from "../components/Particles";

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle back button
  useEffect(() => {
    const handlePopState = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      window.history.pushState({ modal: true }, ""); // push new state
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen]);

  return (
    <section
      id="resume"
      className="relative flex items-center c-space overflow-hidden mt-60"
    >
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={120}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Container */}
      <div className="relative w-8/9 max-w-6xl p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="grid items-center grid-cols-1 gap-14 lg:grid-cols-2">
          
          {/* Left Column: Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center w-full lg:w-[95%] group cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative p-4 rounded-lg shadow-xl bg-neutral-800 transition-all duration-300 group-hover:bg-neutral-700 group-hover:scale-105">
              <img
                src="/assets/resume.png"
                alt="Oshanki Priya Resume Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right Column: Content + Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left space-y-12 px-4 lg:px-8"
          >
            {/* Heading (White) */}
            <h2 className="text-4xl font-extrabold text-white">
              Explore My Resume
            </h2>

            {/* Divider Line (White) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-24 h-1 bg-white rounded-full"
            />

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-300 text-base lg:text-lg leading-relaxed max-w-lg"
            >
              My resume provides a structured overview of my professional
              background, highlighting key skills, experiences, and academic
              milestones. It reflects my growth, capabilities, and dedication to
              continuous learning and excellence.
            </motion.p>

            {/* Download Button with Glow Hover */}
            <motion.a
              href="/assets/oshanki-priya-resume.pdf"
              download="oshanki-priya-resume.pdf"
              whileHover={{
                scale: 1.05,
                //boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-lg font-medium rounded-xl cursor-pointer bg-radial from-lavender to-royal hover:opacity-90 transition"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal for Resume Preview */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsOpen(false)} // close when clicking background
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <img
              src="/assets/resume.png"
              alt="Oshanki Priya Full Resume"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
