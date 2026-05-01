"use client";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-black py-20 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
            <Image
              src="/alex-about.jpg"
              alt="Alex Mazur"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-8 md:mb-12">
              (01) — About
            </span>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-10 md:mb-16">
              Alex Mazur
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="text-[14px] md:text-[14px] leading-relaxed font-light text-gray-800">
                <p className="mb-6">
                  Alex Mazur is a photographer and visual storyteller with over
                  a decade of experience in creating imagery that goes beyond
                  the surface. His work is defined by intention — every frame is
                  carefully composed, every detail serving a purpose.
                </p>
                <p>
                  Rather than simply capturing moments, Alex builds atmosphere,
                  emotion, and narrative within each shot. His style combines
                  cinematic aesthetics with a natural sense of authenticity.
                </p>
              </div>
              <div className="text-[14px] md:text-[14px] leading-relaxed font-light text-gray-800">
                <p className="mb-6">
                  Over the years, he has worked across a wide range of projects
                  — from dynamic shoots in Los Angeles to complex productions in
                  remote locations — constantly adapting, experimenting, and
                  refining his visual language.
                </p>
                <p>
                  Today, Alex continues to evolve creatively, pushing boundaries
                  and exploring new ways to tell stories through imagery. He is
                  also the founder of COSMOZOO, a creative studio focused on
                  full-scale visual production.
                </p>
              </div>
            </div>

            <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl md:text-5xl font-light mb-2">
                    10+
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400">
                    Years
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-light mb-2">
                    200+
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-light mb-2">
                    100%
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400">
                    Dedication
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
