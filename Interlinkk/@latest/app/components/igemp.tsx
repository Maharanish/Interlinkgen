"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button"; // Import shadcn Button

export function IGEMP() {
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
            src="./e4.png"
            alt="Interthinkgen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column 2: Text - Full Height */}
        <div className="flex flex-col justify-center h-full text-white p-10 bg-[#b68529f1] space-y-6">
          <h2 className="text-4xl font-serif text-left">
            Interlinkgen Global Entrepreneurship Mentoring Program (IGEMP)
          </h2>
          <p className="text-lg leading-relaxed text-left">
            International mentoring program featuring workshops with notable mentors and speakers from 
            various sectors—companies, government, think tanks, and more—to share knowledge and opportunities. 
            Participants will complete a business proposal assignment to earn an official certificate.
          </p>

          {/* Register Here Button */}
          <div className="mt-4">
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/soon")}
              className="border-white text-white hover:bg-white hover:text-[#b68529f1] transition duration-300 px-6 py-2 rounded-lg"
            >
              Register Here
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
