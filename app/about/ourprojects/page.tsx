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
        className="relative bg-cover bg-center h-[450px] flex items-center justify-center mb-16"
        style={{
          backgroundImage: "url('/banner.jpg')", // Replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Banner Animated Elements */}
        <motion.div
          className="absolute top-6 right-6 h-1 w-[45%] bg-[#E8D858]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-6 left-6 h-1 w-[45%] bg-[#E8D858]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        ></motion.div>

        {/* Banner Text */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Our Projects
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px md:px-10 mb-">
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
            <div className="text-center">
              <h3 className="text-lg font-semibold">Project {index + 1}</h3>
              <p className="text-sm text-gray-600 mt-2">
                A brief description of Project {index + 1}. Add more details
                here.
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
