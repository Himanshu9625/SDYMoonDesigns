"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ExpendImage from "./ExpendImage";

export default function ImageGrid({ activeTab }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Centralized image data so you can easily update categories and sources
  const imageData = {
    1: { category: "logos", src: "/Images/Logos/logo1.png" },
    2: { category: "logos", src: "/Images/Logos/logo4.png" },
    3: { category: "app", src: "/Images/App/app2.png" },
    4: { category: "website", src: "/Images/Website/website3.png" },
    5: { category: "website", src: "/Images/Website/website2.png" },
    6: { category: "logo", src: "/Images/Logos/logo5.png" },
    7: { category: "app", src: "/Images/App/app1.png" },
    8: { category: "logo", src: "/Images/Logos/logo6.png" },
    9: { category: "logo", src: "/Images/Logos/logo2.png" },
    10: { category: "website", src: "/Images/Website/website4.png" },
    11: { category: "posters", src: "/Images/Posters/poster5.png" },
    12: { category: "website", src: "/Images/Website/website5.png" },
    13: { category: "posters", src: "/Images/Posters/poster1.png" },
    14: { category: "posters", src: "/Images/Posters/poster4.png" },
    15: { category: "posters", src: "/Images/Posters/poster2.png" },
    16: { category: "website", src: "/Images/Website/website1.png" },
    17: { category: "logos", src: "/Images/Logos/logo7.png" },
    18: { category: "logos", src: "/Images/Logos/logo8.png" },
  };
  // We use perfectly calculated aspect ratios so the columns
  // sum to the exact same total height mathematically.
  // Square = 1W
  // Landscape (16:9) = 0.5625W
  // Portrait (16:23) = 1.4375W
  
  // Desktop layout (3 columns, 6 items each, total height = 5.125W + 5 gaps)
  const desktopCol1 = [
    { id: 1, ratio: "aspect-square" }, // 1W
    { id: 4, ratio: "aspect-video" },  // 0.5625W
    { id: 7, ratio: "aspect-square" }, // 1W
    { id: 10, ratio: "aspect-video" }, // 0.5625W
    { id: 13, ratio: "aspect-square" },// 1W
    { id: 16, ratio: "aspect-square" },// 1W
  ]; 

  const desktopCol2 = [
    { id: 2, ratio: "aspect-square" }, // 1W
    { id: 5, ratio: "aspect-video" },  // 0.5625W
    { id: 8, ratio: "aspect-square" }, // 1W
    { id: 11, ratio: "aspect-video" }, // 0.5625W
    { id: 14, ratio: "aspect-[16/23]" },// 1.4375W
    { id: 17, ratio: "aspect-video" }, // 0.5625W
  ];

  const desktopCol3 = [
    { id: 3, ratio: "aspect-[16/23]" }, // 1.4375W
    { id: 6, ratio: "aspect-video" },  // 0.5625W
    { id: 9, ratio: "aspect-square" }, // 1W
    { id: 12, ratio: "aspect-video" }, // 0.5625W
    { id: 15, ratio: "aspect-square" },// 1W
    { id: 18, ratio: "aspect-video" }, // 0.5625W
  ]; 

  // Mobile layout (1 column)
  const mobileItems = [
    { id: 1, ratio: "aspect-square" },
    { id: 2, ratio: "aspect-square" },
    { id: 3, ratio: "aspect-[16/23]" },
    { id: 4, ratio: "aspect-video" },
    { id: 5, ratio: "aspect-video" },
    { id: 6, ratio: "aspect-video" },
    { id: 7, ratio: "aspect-square" },
    { id: 8, ratio: "aspect-square" },
    { id: 9, ratio: "aspect-square" },
    { id: 10, ratio: "aspect-video" },
    { id: 11, ratio: "aspect-video" },
    { id: 12, ratio: "aspect-video" },
    { id: 13, ratio: "aspect-square" },
    { id: 14, ratio: "aspect-[16/23]" },
    { id: 15, ratio: "aspect-square" },
    { id: 16, ratio: "aspect-square" },
    { id: 17, ratio: "aspect-video" },
    { id: 18, ratio: "aspect-video" },
  ];

  const mapData = (col) => col.map(item => ({
    ...item,
    ...(imageData[item.id] || { category: "other", src: "" })
  }));

  const filterItems = (items) => {
    const mapped = mapData(items);
    if (!activeTab || activeTab === "all" || activeTab === "info") return mapped;
    return mapped.filter(item => item.category === activeTab);
  };

  const allFilteredItems = filterItems(mobileItems);

  const handleImageClick = (img) => {
    const index = allFilteredItems.findIndex((item) => item.id === img.id);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  const renderItem = (img) => (
    <motion.div 
      key={img.id} 
      layout
      onClick={() => handleImageClick(img)}
      className={`w-full ${img.ratio} relative overflow-hidden group rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center cursor-pointer`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {img.src ? (
        <Image 
          src={img.src} 
          alt={`${img.category} image`} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized={true}
          priority={img.id <= 6}
        />
      ) : (
        <div className="opacity-20 text-xs font-mono">
          IMG {img.id} ({img.category})
        </div>
      )}
      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
    </motion.div>
  );

  return (
    <main className="px-4 md:px-8 mt-16 md:mt-14">
      {/* Desktop Grid (Hidden on Mobile) */}
      <div className="hidden md:grid grid-cols-3 gap-2 items-start">
        <div className="flex flex-col gap-2">
          {filterItems(desktopCol1).map(renderItem)}
        </div>
        <div className="flex flex-col gap-2">
          {filterItems(desktopCol2).map(renderItem)}
        </div>
        <div className="flex flex-col gap-2">
          {filterItems(desktopCol3).map(renderItem)}
        </div>
      </div>

      {/* Mobile Grid (Hidden on Desktop) */}
      <div className="flex md:hidden flex-col gap-1 items-start">
        {filterItems(mobileItems).map(renderItem)}
      </div>

      {/* Expand Image Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <ExpendImage 
            images={allFilteredItems}
            currentIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onChangeIndex={setSelectedIndex}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
