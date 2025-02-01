"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button"; 

export function IWC() {
  return (
    <section className="flex items-center justify-center bg-gray-50">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-stretch h-full w-full"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Column 1: Image - Tampil di atas pada mobile, di kanan pada desktop */}
        <div className="w-full h-full order-1 lg:order-2">
          <img
            src="./e3.png"
            alt="Interthinkgen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column 2: Text - Tampil di bawah pada mobile, di kiri pada desktop */}
        <div className="flex flex-col justify-center h-full text-[#b68529f1] p-10 bg-white space-y-6 order-2 lg:order-1">
          <h2 className="text-4xl font-serif text-left">
            Interlinkgen Writing Competition (IWC)
          </h2>
          <p className="text-lg leading-relaxed text-left">
            Essay and/or article writing competition open for youths aged 18-35 years old in Indonesia 
            to elaborate on innovative ideas or critical thinking regarding the topic, which relates to 
            the interlinkage between entrepreneurship and STI as well as sustainable development.
          </p>

          {/* Register Here Button */}
          <div className="mt-4">
            <Button
              onClick={() => (window.location.href = "/soon")}
              className="bg-[#b68529f1] text-white hover:bg-[#a07420] transition duration-300 px-6 py-2 rounded-lg"
            >
              Register Here
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
