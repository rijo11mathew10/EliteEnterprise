"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";
import Woodfinish from "@/components/services/Woodfinish";
import LargeScale from "@/components/services/LargeScale";
import AdvancedPower from "@/components/services/AdvancedPower";
import AnodizingTo from "@/components/services/AnodizingTo";

function page() {
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
              Elite
              <br />
              Extrusion LLC
            </h1>
          </div>
        </motion.div>
      </div>
      <Woodfinish />

      <LargeScale/>
      <AdvancedPower/>
      <AnodizingTo/>

      <Footer />
    </div>
  );
}

export default page;
