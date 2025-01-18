"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";
import { GlareCard } from "@/components/glare-card";

function Page() {
  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[550px] flex items-center justify-center mb-16 overflow-hidden"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <motion.div
          className="absolute top-[120px] right-6 h-1 w-[45%] bg-[#E8D858] z-0 pointer-events-none"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-6 left-6 h-1 w-[45%] bg-[#E8D858] z-0 pointer-events-none"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="relative z-0 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
            <h1 className="text-white text-4xl md:text-6xl font-semibold">
              OUR PROJECTS
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px md:px-10 mb-28 ml-20 ">
        {Array.from({ length: 8 }).map((_, index) => (
          <GlareCard
            key={index}
            className="flex flex-col items-center justify-center  rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative w-full h-[300px] mb-4">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
                src={`/project${index + 1}.jpg`} // Replace with your image URL
                alt={`Project ${index + 1}`}
              />
            </div>
            <div className="text-left px-2 mb-4">
              <h3 className="text-lg text-white font-semibold ">
                Sultan Group of Investment
              </h3>
              <p className="text-sm text-white mt-2">
                Fabricator: Alfa Metal, Consultant: Port Saeed Engg.
              </p>
            </div>
          </GlareCard>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Page;
