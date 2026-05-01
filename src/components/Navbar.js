import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ activeTab, setActiveTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-2 md:px-8 md:py-4 bg-black/90 backdrop-blur-sm">
        {/* Mobile Hamburger → X (in-place, never moves) */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden relative flex justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="absolute block w-6 h-[1px] bg-neutral-400"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="absolute block w-6 h-[1px] bg-neutral-400"
          />
        </button>

        {/* Logo */}
        <div className="md:flex-1 flex justify-center md:justify-start flex-1">
          <button
            onClick={() => { setActiveTab("all"); setIsMobileMenuOpen(false); }}
            className="focus:outline-none"
          >
            <Image
              src="/BrandLogo.svg"
              alt="Brand Logo"
              width={100}
              height={40}
              className="h-8 w-auto transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
              priority
            />
          </button>
        </div>

        {/* Spacer so logo stays centered on mobile */}
        <div className="md:hidden w-8" />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-6 text-[12px] tracking-widest uppercase text-neutral-400"
          style={{ fontFamily: '"Menlo", "Monaco", monospace' }}
        >
          {["posters", "logos", "website", "app", "info"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative group hover:text-white transition-colors pb-1 ${activeTab === tab ? "text-white" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left ${activeTab === tab ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </button>
          ))}
        </nav>
      </header>

      {/* Mobile menu — separate layer behind the sticky header (z-30 < z-40) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-30 bg-black flex flex-col items-center justify-center md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.07 }}
              className="flex flex-col items-center space-y-8 text-xl tracking-[0.15em] text-neutral-400"
              style={{ fontFamily: '"Menlo", "Monaco", monospace' }}
            >
              {["posters", "logos", "website", "app"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setIsMobileMenuOpen(false); }}
                  className={`uppercase transition-colors hover:text-white ${activeTab === tab ? "text-white" : ""}`}
                >
                  {tab}
                </button>
              ))}

              <button
                onClick={() => { setActiveTab("info"); setIsMobileMenuOpen(false); }}
                className={`uppercase flex items-center gap-2 transition-colors hover:text-white mt-4 ${activeTab === "info" ? "text-white" : ""}`}
              >
                INFO
                <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
