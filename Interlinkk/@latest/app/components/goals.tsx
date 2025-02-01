"use client";

import { motion } from "framer-motion";

export function Goals() {
  return (
    <section className=" px-10 py-10 lg:px-20 lg:py-20 flex items-center justify-center bg-gray-50">
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
            src="./hp1.jpg"
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column 2: Text - Full Height */}
        <div className="flex flex-col justify-center h-full bg-[#b68529f1] text-white p-10">
          <h2 className="text-3xl font-serif mb-4 text-center">Our Vision</h2>
          <p className="text-lg mb-4 font-extralight">
            1. To promote the interlinkage of social entrepreneurship with
            science and technology to drive inclusive innovation for
            sustainable development through advocacy and capacity building
            programs.
          </p>
          <p className="text-lg font-extralight">
            2. Bridging gap by empowering social entrepreneurship, science, and
            technology to drive inclusive innovation and sustainable
            development through advocacy and capacity building.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
