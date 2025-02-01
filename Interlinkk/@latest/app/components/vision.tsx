"use client";

import { motion } from "framer-motion";

export function Vision() {
  return (
    <section className="flex items-center justify-center bg-gray-50">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-stretch h-full w-full"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Column 1: Image */}
        <div className="w-full h-full">
          <img
            src="./a4.png"
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Column 2: Text - Full Height */}
        <div className="flex flex-col justify-center h-full text-[#056878] p-10 bg-white">
          <h2 className="text-4xl font-serif mb-10 text-left">Vision</h2>
          <p className="text-lg leading-relaxed text-left">
            1. To promote the interlinkage of social entrepreneurship with science and technology to drive inclusive innovation for sustainable development through advocacy and capacity building programs.
          </p>
          <p className="text-lg leading-relaxed text-left mt-5">
            2. Bridging gap by empowering social entrepreneurship, science, and technology to drive inclusive innovation and sustainable development through advocacy and capacity building.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
