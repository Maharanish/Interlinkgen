"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = ["/a1.png", "/hp2.jpg", "/a3.png"];
const intervalTime = 5000; // 5 detik per slide

export function PicSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[60vh] lg:h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Slide"
        className="w-full h-full object-cover absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Indikator */}
      <div className="absolute bottom-2 lg:bottom-6 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full border border-white transition-all ${
              currentIndex === index ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
