"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 px-6 md:px-12 lg:px-24 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 text-center lg:text-left">
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gray-500 order-1">
            {currentYear} Alex Mazur
          </div>

          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gray-500 order-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            Los Angeles — California
          </div>

          <div className="flex gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gray-500 order-3">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <span>—</span>
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <span>—</span>
            <a href="#" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
