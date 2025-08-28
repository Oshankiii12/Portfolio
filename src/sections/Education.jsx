import { motion } from "motion/react";
import { education } from "../constants";

const Education = () => {
  return (
    <section id="education" className="relative c-space mt-22">
      <h2 className="text-heading">My Academic Journey</h2>

      <div className="relative mt-28">
        {/* Center vertical line with glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-fuchsia-500/70 to-transparent animate-pulseGlow" />
        </div>

        <ul className="space-y-30">
          {education.map((item, idx) => {
            const imageOnRight = idx % 2 === 0;
            return (
              <li
                key={idx}
                className={`relative grid items-center grid-cols-1 gap-10 lg:grid-cols-2 ${idx === 0 ? "mt-20" : ""}`}
              >
                {/* Number badge */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-10">
                  <div className="flex items-center justify-center w-14 h-14 text-primary text-xl font-bold rounded-full border border-white/20 bg-neutral-200 shadow-xl">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                {imageOnRight ? (
                  <>
                    <Content {...item} side="left" />
                    <Illustration images={item.images} alt={item.institution} side="right" />
                  </>
                ) : (
                  <>
                    <Illustration images={item.images} alt={item.institution} side="left" />
                    <Content {...item} side="right" />
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

/* ---------- Content card ---------- */
function Content({ degree, institution, duration, details = [], side }) {
  // offset from center line
  const padClass = side === "right" ? "lg:pr-20" : "lg:pl-10";
  const justify = side === "right" ? "lg:justify-start" : "lg:justify-end";

  return (
    <div className={`relative flex ${justify} ${padClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl p-6 border rounded-2xl bg-primary/70 border-white/20 backdrop-blur-lg shadow-xl"
      >
        {/* Header */}
        <h3 className="text-xl font-semibold text-white">{degree}</h3>
        <p className="text-lg text-neutral-200">{institution}</p>
        <p className="mt-1 text-sm text-neutral-400">{duration}</p>

        {/* Bullet points */}
        {!!details.length && (
          <ul className="mt-3 space-y-2 list-disc list-outside pl-6 text-neutral-200 text-base">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

/* ---------- Illustration with Single Silver Glow ---------- */
function Illustration({ images = [], alt = "" }) {
  const mainSrc = images[0];

  return (
    <div className="relative flex justify-center lg:justify-center">
      <div 
        className="relative overflow-hidden rounded-full shadow-2xl ring-2 ring-white/20 w-72 h-72 lg:w-80 lg:h-80 transition-transform duration-300 hover:scale-105"
        style={{ boxShadow: '0 0 50px rgba(169, 169, 169, 0.6)' }}
      >
        {mainSrc && (
          <img
            src={mainSrc}
            alt={alt}
            className="object-cover w-full h-full"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}
      </div>
    </div>
  );
}

export default Education;