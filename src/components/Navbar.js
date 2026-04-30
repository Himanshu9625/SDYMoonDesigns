import Image from "next/image";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
      {/* Mobile Hamburger */}
      <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-2 focus:outline-none">
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
    </header>
  );
}
