"use client";
import { motion } from "framer-motion";

const pricingData = [
  {
    id: "basic",
    title: "Basic",
    price: "250",
    features: [
      "1-2 hours of shooting",
      "10 edited photos",
      "1 short vertical video",
      "Studio or single outdoor",
      "Location",
    ],
    isDark: false,
  },
  {
    id: "standart",
    title: "Standart",
    price: "500",
    tag: "Most Booked",
    features: [
      "Up to 4 hours of shooting",
      "25 edited photos",
      "2 video (up to 1 minute each)",
      "Location scouting included",
      "Short-form edit for social media",
    ],
    isDark: true,
  },
  {
    id: "premium",
    title: "Premium",
    price: "700",
    features: [
      "Full-day production",
      "50 edited photos",
      "3 video: corporate, commercial, reels",
      "Lighting & equipment included",
      "Visual style consulting",
    ],
    isDark: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-[#f4f4f4] py-24 px-6 md:px-12 lg:px-24 text-black"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 block">
            (03) — Investment
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.1]">
            Transparent pricing. <br />
            <span className="italic font-normal font-serif">
              Bespoke production.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-black/5 overflow-hidden">
          {pricingData.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 md:p-12 flex flex-col justify-between min-h-[500px] border-b lg:border-b-0 lg:border-r last:border-r-0 border-black/5 ${
                pkg.isDark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
                    {pkg.title}
                  </span>
                  {pkg.tag && (
                    <span className="text-[8px] uppercase tracking-widest border border-white/30 px-2 py-1 rounded-full">
                      {pkg.tag}
                    </span>
                  )}
                </div>

                <div className="mb-12 flex items-start">
                  <span className="text-sm mt-2 mr-1 opacity-60">$</span>
                  <span className="text-6xl md:text-7xl font-light tracking-tighter">
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-16">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-[11px] md:text-[12px] uppercase tracking-widest flex items-start opacity-80"
                    >
                      <span className="mr-3">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div
                  className={`w-full h-[1px] mb-8 ${pkg.isDark ? "bg-white/20" : "bg-black/10"}`}
                />
                <button className="group flex justify-between items-center w-full text-[10px] uppercase tracking-[0.4em] font-bold">
                  <span>Book Now</span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gray-400">
            All packages can be customized — reach out for a tailored quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
