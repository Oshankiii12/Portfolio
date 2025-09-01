import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroText = () => {

  const words = ["Secure", "Modern", "Scalable"];

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left bg-clip-text">

      {/* Desktop View */}
      <div className="hidden md:flex flex-col c-space space-y-7">
        <motion.span
          className="uppercase tracking-widest text-white/70 text-xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Hi, I’m Oshanki
        </motion.span>

        <div className="flex flex-col items-start">
          <motion.h1
            className="text-6xl font-bold leading-[1.07] tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I build software that’s
          </motion.h1>


          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>


          <motion.p
            className="text-2xl text-neutral-300 leading-relaxed max-w-2xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Designing and delivering dependable, future-ready products.
          </motion.p>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center space-y-6 px-5">
        <motion.span
          className="uppercase tracking-widest text-white/70 text-[11px]"
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Hi, I’m Oshanki
        </motion.span>

        <motion.h1
          className="text-4xl font-bold leading-tight text-balance"
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          I build software that’s
        </motion.h1>


        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            words={words}
            className="font-bold text-white text-7xl"
          />
        </motion.div>


        <motion.p
          className="text-lg text-neutral-300 leading-relaxed text-center max-w-sm"
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Designing and delivering dependable, future-ready products.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;