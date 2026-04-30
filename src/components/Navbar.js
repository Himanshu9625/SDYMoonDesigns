import Image from "next/image";
import { useState } from "react";

export default function Navbar({ activeTab, setActiveTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
      {/* Mobile Hamburger */}
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-2 focus:outline-none"
      >
        <span className="block w-6 h-[1px] bg-neutral-400"></span>
        <span className="block w-6 h-[1px] bg-neutral-400"></span>
      </button>

      {/* Logo */}
      <div className="md:flex-1 flex justify-center md:justify-start flex-1">
        <button onClick={() => setActiveTab("all")} className="focus:outline-none">
          <Image src="/BrandLogo.svg" alt="Brand Logo" width={100} height={40} className="h-8 w-auto transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer" priority />
        </button>
      </div>

      {/* Empty div for mobile center alignment balancing */}
      <div className="md:hidden w-8"></div>

      {/* Desktop Navigation */}
      <nav 
        className="hidden md:flex space-x-6 text-[12px] tracking-widest uppercase text-neutral-400" 
        style={{ fontFamily: '"Menlo", "Monaco", monospace' }}
      >
        <button onClick={() => setActiveTab("posters")} className={`relative group hover:text-white transition-colors pb-1 ${activeTab === "posters" ? "text-white" : ""}`}>
          Posters
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left ${activeTab === "posters" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </button>
        <button onClick={() => setActiveTab("logos")} className={`relative group hover:text-white transition-colors pb-1 ${activeTab === "logos" ? "text-white" : ""}`}>
          Logos
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left ${activeTab === "logos" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </button>
        <button onClick={() => setActiveTab("website")} className={`relative group hover:text-white transition-colors pb-1 ${activeTab === "website" ? "text-white" : ""}`}>
          Website
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left ${activeTab === "website" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </button>
        <button onClick={() => setActiveTab("app")} className={`relative group hover:text-white transition-colors pb-1 ${activeTab === "app" ? "text-white" : ""}`}>
          App
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left ${activeTab === "app" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </button>
        <button onClick={() => setActiveTab("info")} className={`relative group hover:text-white transition-colors pb-1 ${activeTab === "info" ? "text-white" : ""}`}>
          Info
          <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left ${activeTab === "info" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col pt-4 px-4 md:hidden">
            <div className="flex items-center mt-[6px] relative h-10">
              {/* Close Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-start focus:outline-none z-20"
              >
                <svg className="w-8 h-8 text-neutral-400 font-light hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Centered Logo */}
              <div className="absolute left-1/2 -translate-x-1/2 flex justify-center z-10">
                <button 
                  onClick={() => {
                    setActiveTab("all");
                    setIsMobileMenuOpen(false);
                  }}
                  className="focus:outline-none"
                >
                  <Image src="/BrandLogo.svg" alt="Brand Logo" width={100} height={40} className="h-8 w-auto transition-transform duration-300 active:scale-95 cursor-pointer" priority />
                </button>
              </div>
            </div>
            
            <nav 
              className="flex-1 flex flex-col items-center justify-center text-xl tracking-[0.15em] text-neutral-400"
              style={{ fontFamily: '"Menlo", "Monaco", monospace' }}
            >
              <div className="flex flex-col items-center space-y-8 mb-16">
                {['posters', 'logos', 'website', 'app'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`transition-colors hover:text-white uppercase ${activeTab === tab ? "text-white" : ""}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex flex-col items-center space-y-6">
                <button 
                  onClick={() => {
                    setActiveTab("info");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`transition-colors hover:text-white uppercase flex items-center gap-2 ${activeTab === "info" ? "text-white" : ""}`}
                >
                  INFO
                  <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </nav>
        </div>
      )}
    </header>
  );
}
