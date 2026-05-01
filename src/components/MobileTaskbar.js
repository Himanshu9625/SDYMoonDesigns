"use client";

import { useState, useEffect, useRef } from "react";


const icons = [
  { label: "Instagram", href: "https://www.instagram.com/sdymoondesign?utm_source=qr", src: "/Images/Icons/InstagramIcon.svg" },
  { label: "Threads",   href: "https://www.threads.com/@sdymoondesign?hl=en",          src: "/Images/Icons/ThreadsIcon.svg" },
  { label: "X",         href: "https://x.com/sdymoondesign?s=21",                      src: "/Images/Icons/XIcon.svg" },
  { label: "Behance",   href: "https://www.behance.net/sdymoondesign",                  src: "/Images/Icons/BehanceIcon.svg" },
];

export default function MobileTaskbar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 10);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-4 left-0 right-0 flex justify-center z-50 md:hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        className="flex items-center gap-5 px-6 py-3 rounded-full"
        style={{
          background: "rgba(0,0,0,0.70)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          boxShadow:
            "0 0 0 0.5px rgba(255,255,255,0.18) inset, 0 1px 0 0 rgba(255,255,255,0.22) inset, 0 8px 32px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)",
          border: "0.5px solid rgba(255,255,255,0.14)",
        }}
      >
        {icons.map(({ label, href, src }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="opacity-85 hover:opacity-100 active:scale-90 transition-all duration-150"
          >
            <img src={src} alt={label} className="w-7 h-7" />
          </a>
        ))}
      </div>
    </div>
  );
}
