"use client";

import { motion } from "framer-motion";

export function Mission() {
  return (
    <section className="flex flex-col items-center justify-center min-h-full px-10 lg:px-6 py-12 bg-[#056878] text-center">
      <motion.h1
        className="text-4xl font-serif text-white mb-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Mission
      </motion.h1>

      <div className="space-y-6 max-w-3xl">
        {/* 1. Promoting Digital Literacy */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-2xl text-left font-semibold text-white mb-2">
            1. Promoting Digital Literacy
          </h2>
          <p className="text-lg text-left font-extralight text-white">
            Providing critical information on the intersection of social entrepreneurship, 
            science, and technology to inspire youth and aspiring entrepreneurs in creating 
            sustainable solutions and making informed decisions.
          </p>
        </motion.div>

        {/* 2. Facilitating Knowledge Exchange */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="text-2xl text-left  font-semibold text-white mb-2">
            2. Facilitating Knowledge Exchange
          </h2>
          <p className="text-lg text-left  font-extralight text-white">
            Fostering intergenerational and cross-country dialogue among youths, 
            business practitioners, and experts to share insights regarding socio-economic 
            challenges, while promoting multidisciplinary collaboration between diverse stakeholders.
          </p>
        </motion.div>

        {/* 3. Strengthening Grassroots Entrepreneurship */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <h2 className="text-2xl text-left  font-semibold text-white mb-2">
            3. Strengthening Grassroots Entrepreneurship
          </h2>
          <p className="text-lg  text-left  font-extralight text-white">
            Empowering local communities by combining traditional wisdom with the capacity 
            to understand and utilize modern tools, fostering inclusive and community-driven entrepreneurship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
