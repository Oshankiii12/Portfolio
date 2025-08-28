import { motion } from "motion/react";
import { Particles } from "../components/Particles";

const Resume = () => {
  return (
    <section id="resume" className="relative flex items-center c-space section-spacing overflow-hidden">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="relative w-full p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left Column: Resume Preview with Animation */}
          <div className="flex justify-center w-full lg:w-4/5 group">
            <div className="relative p-3 rounded-lg shadow-xl bg-neutral-800 transition-all duration-300 group-hover:bg-neutral-700 group-hover:scale-105">
              <img 
                src="/assets/resume.png" 
                alt="Resume Preview" 
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Column: Content and Download Button with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left space-y-8"
          >
            <h2 className="text-heading">Explore My Resume</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto lg:mx-0">
             My resume offers a comprehensive look into my professional background, showcasing
             the skills, experiences, and academic milestones that shape who I am as a professional. 
             It’s a snapshot of my growth, capabilities, and passion for continuous learning.
            </p>
            <a
              href="/assets/oshanki-priya-resume.pdf"
              download="oshanki-priya-resume.pdf"
              className="px-8 py-3 text-lg font-bold rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;