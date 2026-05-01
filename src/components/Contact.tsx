"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-12 block">
          (04) — Contact
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1] mb-8">
              Let`s create <br />
              <span className="italic font-serif">something rare.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-sm mb-16 leading-relaxed">
              Have an idea for a shoot? I`d love to hear about it. I usually get
              back within a day.
            </p>

            <div className="space-y-0">
              {[
                { label: "Email", value: "alexmazur@gmail.com" },
                { label: "Phone", value: "+ 1 (916) 298 0084" },
                { label: "Instagram", value: "@alex.mazur__" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group border-b border-white/10 py-8 flex justify-between items-center transition-colors hover:border-white/30"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    {item.label}
                  </span>
                  <span className="text-xs md:text-sm tracking-widest">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <form className="space-y-12">
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 block mb-2">
                  Tell me about the project
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                className="mt-12 border border-white/20 px-10 py-5 flex justify-between items-center w-full md:w-fit gap-12 group transition-all"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
                  Send Inquiry
                </span>
                <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
