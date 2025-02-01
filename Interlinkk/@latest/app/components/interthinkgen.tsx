"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button"; 

export function Interthinkgen() {
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
            src="./e2.png"
            alt="Interthinkgen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column 2: Text - Full Height */}
        <div className="flex flex-col justify-center h-full text-white p-10 bg-[#b68529f1] space-y-6">
          <h2 className="text-4xl font-serif text-left">Interthinkgen</h2>
          <p className="text-lg leading-relaxed text-left">
            News feed program featuring updates, opinions, best practices, and issue analysis 
            on entrepreneurship and system technology information through social media and 
            the Interlinkgen website. To inspire and deepen understanding for aspiring entrepreneurs.
          </p>

          {/* See More Button */}
          <div className="mt-4">
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/soon")}
              className="border-2 border-white text-white hover:bg-white hover:text-[#b68529f1] transition duration-300"
            >
              See More
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
