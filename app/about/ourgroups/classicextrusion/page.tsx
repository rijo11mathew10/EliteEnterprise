"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { WobbleCardDemo } from "@/components/ourgroups/OurProducts";
import CustomSection from "@/components/CustomSection";

const productData = [
  {
    imageSrc: "/ourgroups/classicextrusion/mill-finish.png",
    title: "MILL FINISH PROFILES",
  },
  {
    imageSrc: "/ourgroups/classicextrusion/gold-finish.png",
    title: "ANODIZED PROFILES",
  },
  {
    imageSrc: "/ourgroups/classicextrusion/powder-coated.png",
    title: "POWDER COATED PROFILES",
  },
  {
    imageSrc: "/ourgroups/classicextrusion/anodized.png",
    title: "WOOD FINISH PROFILES",
  },
];

const sections = [{ title: "EXTRUSION", value: "13,000", unit: "Metric Tone" }];
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
              <span className="text-4xl md:text-7xl block">CLASSIC</span>
              {/* Extrusion LLC */}
              <span className="text-2xl md:text-4xl text-white text-opacity-70 block  font-medium">
                EXTRUSION LLC
              </span>
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl mb-16">
        <div>
          {/* Top Section */}
          <motion.div
            className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center gap-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Text Column */}
            <div className="col-span-12 md:col-span-7">
              <motion.div
                className="flex gap-3 mb-8"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                <hr className="w-2 h-16 md:h-24 bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                  COMPETENCY - <br></br>
                  OUR ASSET{" "}
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Classic Extrusion LLC (Extrusion division) is one of the first
                extrusion plants IN U.A.E. and all the gulf region, and part of
                Elite Group of Companies since 2006.
              </motion.p>
              <motion.p
                className="text-[#484848] mb-6  text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Classic Extrusion LLC is ISO 9001:2008 certified company, with
                an annual capacity of 13,200 MT of high quality extrusions which
                contains two extrusion presses of 6” and 7”, with the latest
                material handling systems. The additional facilities include a
                most modern die correcting facility, ageing oven and all other
                ancillary equipment.
              </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Classic Extrusion LLC manufactures all types of architectural
                profiles for glazing, curtain walls, facades, louver, shop
                fronts and the first company in Elite group to offer a certified
                thermal broken systems for windows (ECO 500®) in sliding &
                casement version, and structural curtain wall system (Elegant
                65®).
              </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                At the same time non-architectural profiles are daily produced
                for sector such as scaffolding, advertisement, kitchen cabinet,
                insulation along with common and standard profiles. We also
                boast of being the licensed suppliers for Vistawall and Smart
                systems across the region.
              </motion.p>
            </div>

            {/* Logo Column */}
            <motion.div
              className="col-span-12 md:col-span-5 border-4 border-[#E8D858] relative h-64 md:h-96 flex justify-center items-center overflow-visible"
              initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                backgroundImage:
                  "url('/ourgroups/classicextrusion/CLASSSIC.jpg')", // Replace with your image path
                backgroundSize: "cover", // Ensures the image completely fills the div
                backgroundPosition: "center", // Centers the image in the div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
              }}
            >
              <Image
                src={"/ourgroups/classicextrusion/logo.png"}
                width={200}
                height={200}
                alt="United Logo"
                className=" shadow-lg border-8 border-[#E8D858] absolute top-0 transform -translate-y-1/2 "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <CustomSection sections={sections} />

      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/classicextrusion/classic.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* Color Grading Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, rgba(2, 61, 104, 0.84) 0%, rgba(119, 140, 96, 0.8) 76.47%, rgba(232, 216, 88, 0.54) 100%)`,
          }}
        ></div>

        {/* Animated Text Content */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative text-white text-2xl md:text-4xl lg:text-6xl font-bold z-10 px-4"
        >
          IMPRESSIVE INFRASTRUCTURE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          At National Aluminium we take pride in constantly working hard to
          optimize our manufacturing capacity which recognizes the needs of our
          customers and stakeholders. The modern facility places us at a
          distinctive advantage.
        </motion.p>
      </div>

      <WobbleCardDemo
        heading="OUR PRODUCTS"
        description="Lending a distinct visual appeal we provide aluminium profiles for several applications such as windows & doors (casement, sliding & hinged version), curtain walls, louvers & grills, handrails & balustrades, kitchen profiles, air conditioning, sign board, scaffolding sections, furniture and partition sections among others. In addition all the most common section like squared & round bars, equal & unequal angles, rectangular & squared tubes with different design, dimensions and thicknesses."
        listItems={[
          "- The standard alloys offered include AA 6063, AA 6061 & AA 6082",
          "- The tempers include T4 & T6",
        ]}
        cards={productData}
      />

      <Footer />
    </div>
  );
}

export default page;
