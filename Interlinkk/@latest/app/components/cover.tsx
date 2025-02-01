"use client";

import { motion } from "framer-motion";

export function Cover() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('./e1.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <motion.h1
        className="relative text-5xl font-serif text-white border-4 border-none px-6 py-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Our Programs
      </motion.h1>
    </section>
  );
}
