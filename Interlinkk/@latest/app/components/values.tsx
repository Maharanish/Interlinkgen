"use client";

import { motion } from "framer-motion";

export function Values() {
  return (
    <section className="flex items-center justify-center bg-gray-50">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-stretch h-full w-full"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Column 2: Text - Full Height */}
        <div className="flex flex-col justify-center h-full text-white p-10 bg-[#b68529f1]">
          <h2 className="text-4xl font-serif mb-10 text-center">Key Values</h2>

          {/* Key Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-15">
            {/* Science */}
            <div className="flex flex-col items-center space-y-5">
              <img src="./p5.png" alt="Innovative" className="max-w-[80px] h-auto object-contain" />
              <p className=" font-medium">Science</p>
            </div>

            {/* Technology */}
            <div className="flex flex-col items-center space-y-5">
              <img src="./p3.png" alt="Innovative" className="max-w-[80px] h-auto object-contain"/>
              <p className="font-medium">Technology</p>
            </div>

            {/* Entrepreneurial */}
            <div className="flex flex-col items-center space-y-5">
              <img src="./p4.png" alt="entre" className="max-w-[80px] h-auto object-contain"/>
              <p className="font-medium">Entrepreneurial</p>
            </div>

            {/* Innovative */}
            <div className="flex flex-col items-center space-y-5">
              <img src="./p6.png" alt="Innovative" className="max-w-[80px] h-auto object-contain"/>
              <p className="font-medium">Innovative</p>
            </div>
          </div>
        </div>

        {/* Column 1: Image */}
        <div className="w-full h-full">
          <img
            src="./hp3.jpg"
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
