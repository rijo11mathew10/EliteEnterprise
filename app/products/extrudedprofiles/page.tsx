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
            <h1 className="text-white text-4xl md:text-6xl font-semibold">
              EXTRUDED PROFILES{" "}
            </h1>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="col-span-12 md:col-span-8 p-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
        <p className="text-lg text-[#484848] leading-8">
          Elite Group of Companies through the Extrusion subsidiaries deploy 7
          extrusion lines offering a wide array of premium, innovative products
          for any architectural and non-architectural applications.
        </p>
        <p>
          We process mill finish profiles, powder coated profiles (vertical &
          horizontal lines), wood coated profiles and anodized profiles.
        </p>
        <ul>
          The 6xxx series are the ones most selected for extrusion applications:
          <li>- ALLOYS AA 6063, 6061, 6082</li>
          <li>- TEMPER T4, T6</li>
        </ul>
      </motion.div>
      <div className="mx-auto">
        <motion.div
          className="grid grid-cols-12 items-center p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          {/* Text Column */}
          <motion.div
            className="col-span-12 md:col-span-7 p-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="flex gap-8 mb-8">
              <hr className="w-2 h-16 md:h-24 bg-[#E8D858] border-none" />
              <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                MILL FINISH <br /> PROFILES
              </h2>
            </div>

            <p className="text-lg text-[#484848] leading-8 mb-6">
              Windows & doors (casement, sliding & hinged version), full glazing
              systems, curtain walls, cladding & roofing, shop fronts louvers &
              grills, handrails & balustrades, kitchen profiles, furniture &
              partitions. So as HVAC scope, piping & ducting, sign board,
              scaffolding sections among others.
            </p>
            <p className="text-lg text-[#484848] leading-8 mb-6">
              In addition we offer all the most common section like squared &
              round bars, equal & unequal angles, rectangular & squared tubes
              with different design, dimensions and thicknesses.
            </p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="hidden md:col-span-5 md:block bg-[#023D68] p-6 text-white relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            {/* First Row of Images */}
            <div className="absolute flex gap-4 -top-12 -left-36">
              <Image
                src="/products/extrudedprofiles/millfinish1.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/products/extrudedprofiles/millfinish2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
            </div>

            {/* Second Row of Images */}
            <div className="flex gap-4 mt-24 relative">
              <Image
                src="/products/extrudedprofiles/millfinish3.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-20 border-3 border-[#E8D858]"
                style={{ transform: "translateX(-50%)" }}
              />
              <Image
                src="/products/extrudedprofiles/millfinish4.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-20 border-3 border-[#E8D858]"
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
