"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const updateCount = () => {
      const isDesktop = window.innerWidth >= 768;
      setVisibleCount((prev) => (isDesktop && prev < 6 ? 6 : prev));
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const handleLoadMore = () => {
    const increment = window.innerWidth < 768 ? 3 : 6;
    setVisibleCount((prev) => prev + increment);
  };

  const goToNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev !== null && prev < portfolioData.length - 1 ? prev + 1 : prev,
    );
  }, []);

  const goToPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : prev,
    );
  }, []);

  const visibleItems = portfolioData.slice(0, visibleCount);

  return (
    <section
      id="work"
      className="bg-white text-black py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-[1440px] mx-auto mb-16 md:mb-24">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 block">
          (02) — Select Work
        </span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight">
          A cured index <br />
          <span className="italic font-normal">of recent frames</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-[1440px] mx-auto">
        {visibleItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex justify-between items-end px-1">
              <span className="text-[10px] uppercase tracking-widest font-medium">
                {item.title}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                {item.category} — {item.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < portfolioData.length && (
        <div className="flex justify-center mt-20 md:mt-32">
          <button
            onClick={handleLoadMore}
            className="text-[11px] uppercase tracking-[0.4em] border-b border-black pb-2 hover:opacity-50 transition-all"
          >
            Load More
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
            onClick={() => setSelectedImageIndex(null)}
          >
            <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center text-white z-[210]">
              <div className="text-[10px] tracking-widest uppercase">
                {String(selectedImageIndex + 1).padStart(2, "0")} /{" "}
                {String(portfolioData.length).padStart(2, "0")}
              </div>
              <button className="text-[10px] uppercase tracking-widest border-b border-white pb-1">
                Close
              </button>
            </div>

            <button
              onClick={goToPrev}
              className={`absolute left-4 md:left-10 z-[220] p-4 text-white transition-opacity ${selectedImageIndex === 0 ? "opacity-10 pointer-events-none" : "opacity-50 hover:opacity-100"}`}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="relative w-[90vw] h-[75vh] md:h-[85vh]">
              <Image
                src={portfolioData[selectedImageIndex].src}
                alt="Full size"
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={goToNext}
              className={`absolute right-4 md:right-10 z-[220] p-4 text-white transition-opacity ${selectedImageIndex === portfolioData.length - 1 ? "opacity-10 pointer-events-none" : "opacity-50 hover:opacity-100"}`}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-10 w-full text-center text-white px-6">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-60">
                {portfolioData[selectedImageIndex].title} —{" "}
                {portfolioData[selectedImageIndex].category} —{" "}
                {portfolioData[selectedImageIndex].year}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
