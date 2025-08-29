"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { education } from "../constants";

const Education = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="education" className="relative c-space mt-24" ref={containerRef}>
      <h2 className="text-heading">My Academic Journey</h2>

      <div className="relative mt-28" ref={ref}>
        {/* Center vertical line with BASE + GLOW */}
        <div
          style={{ height: height + "px" }}
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[2px]
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
                     from-transparent via-neutral-300 to-transparent
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Glowy scrolling overlay */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] 
                       bg-gradient-to-t from-fuchsia-500 via-pink-400/50 to-transparent 
                       rounded-full"
          />
        </div>

        <ul className="space-y-30">
          {education.map((item, idx) => {
            const imageOnRight = idx % 2 === 0;
            return (
              <li
                key={idx}
                className={`relative grid items-center grid-cols-1 gap-10 lg:grid-cols-2 ${
                  idx === 0 ? "mt-20" : ""
                }`}
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
        <h3 className="text-xl font-semibold text-white">{degree}</h3>
        <p className="text-lg text-neutral-200">{institution}</p>
        <p className="mt-1 text-sm text-neutral-400">{duration}</p>

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

/* ---------- Illustration with Glow ---------- */
function Illustration({ images = [], alt = "" }) {
  const mainSrc = images[0];
  return (
    <div className="relative flex justify-center lg:justify-center">
      <div
        className="relative overflow-hidden rounded-full shadow-2xl ring-2 ring-white/20 w-72 h-72 lg:w-80 lg:h-80 transition-transform duration-300 hover:scale-105"
        style={{ boxShadow: "0 0 50px rgba(169, 169, 169, 0.6)" }}
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