"use client";

import { motion } from "framer-motion";

export function Motto() {
  return (
    <section className="flex flex-col items-center justify-center min-h-full px-6 py-12 bg-[#056878] text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-serif text-white mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Motto
        </motion.h2>

        <motion.p
          className="text-xl font-extralight text-white max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          Empowering Entrepreneurial Spirit to Bridge Innovation & Inclusivity for Sustainable Development
        </motion.p>
      </motion.div>
    </section>
  );
}
