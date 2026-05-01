"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import ImageGrid from "../components/ImageGrid";
import Info from "../components/Info";
import Footer from "../components/Footer";
import MobileTaskbar from "../components/MobileTaskbar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-col min-h-screen pb-3 bg-[#000000] text-neutral-400" style={{ fontFamily: '"Menlo", "Monaco", monospace' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {activeTab === "info" ? <Info /> : <ImageGrid activeTab={activeTab} />}
      </main>

      <Footer />
      {activeTab !== "info" && <MobileTaskbar />}
    </div>
  );
}