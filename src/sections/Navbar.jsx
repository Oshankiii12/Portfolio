import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-link" onClick={onClick}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link" onClick={onClick}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="#work" className="nav-link" onClick={onClick}>
          Work
        </a>
      </li>
      <li className="nav-li">
        <a href="#education" className="nav-link" onClick={onClick}>
          Education
        </a>
      </li>
      <li className="nav-li">
        <a href="#resume" className="nav-link" onClick={onClick}>
          Resume
        </a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link" onClick={onClick}>
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            className="text-xl font-medium transition-colors text-neutral-400 hover:text-white"
          >
            Oshanki Priya
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
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
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.4 }}
        >
          <nav className="pb-5">
            <Navigation onClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
