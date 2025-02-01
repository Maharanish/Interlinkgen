"use client"

import { motion } from "framer-motion"

export function Introduction() {
  return (
    <>
    <section
      className="h-[60vh] lg:h-screen flex items-center justify-center lg:justify-end bg-gray-50 lg:px-4 lg:py-20"
      style={{
        backgroundImage:
          "url(/hp4.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
          className="w-screen h-full flex lg:mt-15 mt-10 mb-10 items-center justify-center lg:max-w-xl lg:mr-10"
          style={{
            backgroundColor: "rgba(5, 104, 120, 0.8)",
          }}
        >
          <div className="p-6 md:p-8 rounded-lg overflow-hidden">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-serif tracking-wider text-white text-center"
            >
              Interlinkgen
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-2xl font-extralight md:text-3xl text-white max-w-2xl mt-6 text-center mx-auto"
            >
              Empowering Entrepreneurial Spirit to Bridge Innovation & Inclusivity for Sustainable Development
            </motion.p>
          </div>
        </div>
      </section>

      <section
        className="min-h-full flex items-center justify-center p-8 g:px-10 lg:py-10"
        style={{
          backgroundImage: "url(/hp6.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-full min-h-full text-center px-5 py-10 space-y-4 lg:space-y-8 lg:p-30 rounded-xs"
          style={{
            backgroundColor: "#34777B",
          }}
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-4xl md:text-4xl font-serif text-white"
          >
            Who We Are?
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-white font-extralight"
          >
            Here at Interlinkgen, we believe that fostering innovation starts with nurturing entrepreneurial minds. Since our founding on the 5th of January, we have been committed to empowering students and young professionals through initiatives that raise digital awareness, promoting a deeper understanding of the intersection between entrepreneurship, science, and technology. By encouraging knowledge transfer through intergenerational and cross-country dialogues and embracing grassroots wisdom alongside traditional practices, we aim to inspire inclusive innovation that balances historical values with future-forward visions.
          </motion.p>
        </motion.div>
      </section>
      </>
  )
}

