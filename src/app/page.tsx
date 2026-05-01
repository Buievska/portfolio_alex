import PhotoGridBackground from "@/components/PhotoGridBackground";
import Header from "@/components/Header";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <Header />

      <section className="relative min-h-screen w-full flex flex-col items-start bg-black overflow-hidden pt-32 md:pt-40 pb-10">
        <div className="absolute inset-0 z-0 opacity-40">
          <PhotoGridBackground />
        </div>

        <div className="relative z-20 w-full px-6 md:px-12 flex flex-col items-start text-left">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/50 mb-6 md:mb-8">
            Los Angeles
          </span>

          <h1 className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-light tracking-tighter leading-[0.9] text-white mb-6 md:mb-8">
            Light, form, <br />
            <span className="italic">presence.</span>
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-[300px] md:max-w-md mb-10 md:mb-12 leading-relaxed font-light">
            Editorial and commercial photography for brands that refuse to look
            like everyone else.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14">
            <button className="group flex items-center gap-10 border border-white/40 px-10 py-5 hover:bg-white hover:text-black transition-all duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white group-hover:text-black">
                View Work
              </span>
              <span className="text-xl text-white group-hover:text-black group-hover:translate-x-2 transition-all duration-500">
                →
              </span>
            </button>

            <button className="text-[10px] uppercase tracking-[0.3em] text-white font-semibold hover:opacity-70 transition-all">
              Get in touch
            </button>
          </div>
        </div>
      </section>
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
