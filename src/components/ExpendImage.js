"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExpendImage({ images, currentIndex, onClose, onChangeIndex }) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when image changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  if (!images || images.length === 0 || currentIndex < 0 || currentIndex >= images.length) {
    return null;
  }

  const currentImage = images[currentIndex];

  const handlePrev = (e) => {
    e?.stopPropagation();
    onChangeIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    onChangeIndex((currentIndex + 1) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 md:p-3 text-white bg-black/50 hover:bg-white/20 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-8 z-50 p-3 md:p-4 text-white bg-black/50 hover:bg-white/20 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-8 z-50 p-3 md:p-4 text-white bg-black/50 hover:bg-white/20 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Image Container */}
      <motion.div
        key={currentImage.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
      >
        {currentImage.src ? (
          <>
            {isLoading && (() => {
              let w = 1, h = 1;
              if (currentImage.ratio === "aspect-video") { w = 16; h = 9; }
              else if (currentImage.ratio === "aspect-[16/23]") { w = 16; h = 23; }
              
              return (
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <svg
                    viewBox={`0 0 ${w} ${h}`}
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <rect width="100%" height="100%" fill="#262626" className="animate-pulse" />
                  </svg>
                </div>
              );
            })()}
            <Image
              src={currentImage.src}
              alt={currentImage.category || "Expanded image"}
              fill
              className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              sizes="100vw"
              priority
              onLoad={() => setIsLoading(false)}
            />
          </>
        ) : (
          <div className="text-white text-xl font-mono">
            IMG {currentImage.id}
          </div>
        )}
      </motion.div>
      
      {/* Counter */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/80 font-mono text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}
