import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navigation({ onClick }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
      {links.map((link) => (
        <li key={link.id} className="relative group">
          <a
            href={`#${link.id}`}
            onClick={onClick}
            className="text-base md:text-md font-medium tracking-wide text-neutral-300 hover:text-white transition-colors duration-300"
          >
            {link.label}
          </a>
          {/* Gradient underline with more distance */}
          <span className="absolute left-0 bottom-[-6px] h-0.5 w-0 bg-gradient-to-r from-purple-400 to-lavender-400 transition-all duration-300 group-hover:w-full rounded" />
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 z-30 transition-colors duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Brand with circular gradient outline */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 text-neutral-300 hover:text-white transition-colors duration-300"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[0.5px] bg-gradient-to-r from-purple-400 via-lavender-400 to-pink-400">
              <div className="flex items-center justify-center w-full h-full rounded-full bg-primary">
                <span className="text-xs sm:text-sm font-medium text-white">OP</span>
              </div>
            </div>
            <span className="text-base sm:text-lg font-medium">Oshanki Priya</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-5 h-5"
              alt="toggle"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-y-0 left-0 w-2/3 bg-primary/95 backdrop-blur-xl sm:hidden shadow-lg"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="p-4 sm:p-6">
              <a
                href="#home"
                className="flex items-center gap-2 sm:gap-3 text-neutral-300 hover:text-white transition-colors duration-300"
              >
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[0.5px] bg-gradient-to-r from-purple-400 via-lavender-400 to-pink-400">
                  <div className="flex items-center justify-center w-full h-full rounded-full bg-primary">
                    <span className="text-xs sm:text-sm font-medium text-white">OP</span>
                  </div>
                </div>
                <span className="text-base sm:text-lg font-medium">Oshanki Priya</span>
              </a>
              <nav className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <Navigation onClick={() => setIsOpen(false)} />
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
