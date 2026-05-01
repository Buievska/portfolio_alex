"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[150] flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-md py-4 md:py-6"
            : "bg-transparent py-8 md:py-10"
        }`}
      >
        <Link
          href="/"
          className="font-bold tracking-[0.1em] text-[12px] md:text-sm uppercase z-[160] text-white mix-blend-difference"
        >
          Alex Mazur
        </Link>

        <nav className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.3em]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors mix-blend-difference"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="#inquire"
            className="hidden lg:block text-[10px] uppercase tracking-[0.3em] border-b border-white pb-1 text-white mix-blend-difference"
          >
            Inquire
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-2 p-2 z-[160] relative"
          >
            <motion.div
              animate={
                isOpen
                  ? { rotate: 45, y: 4.5, backgroundColor: "#fff" }
                  : { rotate: 0, y: 0, backgroundColor: "#fff" }
              }
              className="w-8 h-[1px]"
            />
            <motion.div
              animate={
                isOpen
                  ? { rotate: -45, y: -4.5, backgroundColor: "#fff" }
                  : { rotate: 0, y: 0, backgroundColor: "#fff" }
              }
              className="w-8 h-[1px]"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[140] bg-black flex flex-col justify-center items-center gap-8 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-3xl font-light uppercase tracking-[0.2em] hover:italic"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12"
            >
              <Link
                href="#inquire"
                onClick={() => setIsOpen(false)}
                className="text-white/50 text-[10px] uppercase tracking-[0.4em] border-b border-white/20 pb-2"
              >
                Start a project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
