"use client";

import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <>
      {/* Section 1: Fullscreen Image */}
      <section className="lg:h-screen w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="./a2.png"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Section 2: Text Section */}
      <section className="bg-white px-10 py-10 lg:py-20 lg:mt-50 flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-serif mt-2 lg:mt-10 text-[#056878] text-center"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-lg font-normal text-[#056878] text-center"
          >
            In today’s modern era, technology continues to advance at an
            unprecedented pace, shaping the way people interact, work, and
            build businesses. This rapid development has opened endless
            opportunities for young entrepreneurs to create innovative solutions
            that address real-world challenges. With access to cutting-edge
            tools and digital platforms, today’s youth are not only able to
            start their own ventures but also drive meaningful change through
            creativity and innovation. The fusion of technology and
            entrepreneurship empowers young minds to think beyond traditional
            boundaries, fostering a new generation of leaders who are ready to
            revolutionize industries and contribute to a more dynamic and
            sustainable future. By empowering the entrepreneurial spirit, young
            innovators can bridge the gap between technology, inclusivity, and
            sustainability, ensuring that innovation benefits all and leaves no
            one behind. This holistic approach paves the way for a world where
            entrepreneurship serves as a driving force for sustainable
            development, making positive, long-lasting impacts on both
            communities and global progress.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}