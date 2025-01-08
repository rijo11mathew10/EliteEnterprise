"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

function page() {
  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[550px] flex items-center justify-center overflow-hidden"
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
            <h1 className="text-white font-semibold">
              {/* Elite */}
              <span className="text-4xl md:text-7xl block">DOWNLOADS</span>
              {/* Extrusion LLC */}
            </h1>
          </div>
        </motion.div>
      </div>
      <motion.div
          className="flex gap-3 mb-8 mt-8 ml-32"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <hr className="w-2 h-8 md:h-12 bg-[#E8D858] border-none" />
          <h2 className="text-3xl  md:text-5xl font-semibold text-[#023D68] leading-tight">
VIDEO GALLERY          </h2>
        </motion.div>


        <div className="mx-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <motion.div
    className="border-b-4 border-[#E8D858] shadow-md rounded-lg bg-white overflow-hidden cursor-pointer"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2.0 }}
    onClick={() => window.open('https://example.com', '_blank')} // Link opens in a new tab
  >
    {/* Image */}
    <div className="w-full">
      <Image
        src="/ourgroups/extrusionprofiles/youtube.png"
        alt="Card Image"
        width={398}
        height={224}
        className="w-full h-auto"
      />
    </div>

    {/* Text */}
    <p className="text-sm text-[#484848] p-4">
    Elite Group at BIG 5 2017 Exhibition - Dubai (U.A.E.)    
    </p>
  </motion.div>
  <motion.div
    className="border-b-4 border-[#E8D858] shadow-md rounded-lg bg-white overflow-hidden cursor-pointer"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2.0 }}
    onClick={() => window.open('https://example.com', '_blank')} // Link opens in a new tab
  >
    {/* Image */}
    <div className="w-full">
      <Image
        src="/ourgroups/extrusionprofiles/youtube.png"
        alt="Card Image"
        width={398}
        height={224}
        className="w-full h-auto"
      />
    </div>

    {/* Text */}
    <p className="text-sm text-[#484848] p-4">
    Elite Group at BIG 5 2017 Exhibition - Dubai (U.A.E.)    
    </p>
  </motion.div>
  <motion.div
    className="border-b-4 border-[#E8D858] shadow-md rounded-lg bg-white overflow-hidden cursor-pointer"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2.0 }}
    onClick={() => window.open('https://example.com', '_blank')} // Link opens in a new tab
  >
    {/* Image */}
    <div className="w-full">
      <Image
        src="/ourgroups/extrusionprofiles/youtube.png"
        alt="Card Image"
        width={398}
        height={224}
        className="w-full h-auto"
      />
    </div>

    {/* Text */}
    <p className="text-sm text-[#484848] p-4">
    Elite Group at BIG 5 2017 Exhibition - Dubai (U.A.E.)    
    </p>
  </motion.div>
  <motion.div
    className="border-b-4 border-[#E8D858] shadow-md rounded-lg bg-white overflow-hidden cursor-pointer"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2.0 }}
    onClick={() => window.open('https://example.com', '_blank')} // Link opens in a new tab
  >
    {/* Image */}
    <div className="w-full">
      <Image
        src="/ourgroups/extrusionprofiles/youtube.png"
        alt="Card Image"
        width={398}
        height={224}
        className="w-full h-auto"
      />
    </div>

    {/* Text */}
    <p className="text-sm text-[#484848] p-4">
    Elite Group at BIG 5 2017 Exhibition - Dubai (U.A.E.)    
    </p>
  </motion.div>
</div>

        <Footer />
    </div>
  );
}

export default page;
