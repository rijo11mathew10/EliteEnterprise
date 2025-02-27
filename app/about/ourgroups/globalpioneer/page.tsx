"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import { WobbleCards } from "@/components/ourgroups/globalpioneer/WobbleSection";

const productData1 = [
  {
    imageSrc: "/ourgroups/globalpioneer/railing_one.jpg",
    title: "Railing",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/railing_two.jpg",
    title: "Railing",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/railing_three.jpg",
    title: "Railing",
  },
];
const productData2 = [
  {
    imageSrc: "/ourgroups/globalpioneer/systems1.jpg",
    title: "Systems",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/systems2.jpg",
    title: "Systems",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/systems3.jpg",
    title: "Systems",
  },
];
const productData3 = [
  {
    imageSrc: "/ourgroups/globalpioneer/samples1.jpg",
    title: "Samples",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/samples2.jpg",
    title: "Samples",
  },
];

const column1 = [
  {
    list: "- Curtain Wall systems",
  },
  {
    list: "- Unitised Curtain Wall Systems",
  },
  {
    list: "- Frameless facades / spider systems",
  },
  {
    list: "- Aluminium doors/ windows / fronts",
  },
  {
    list: "- Security and decorative claustras",
  },
  {
    list: "- 2 & 4 sides structural glazing",
  },
];

const column2 = [
  {
    list: "- Metal claddings and composite panels",
  },
  {
    list: "- Aluminium Pergolas",
  },
  {
    list: "- Aluminium and stainless steel handrails and balustrades",
  },
  {
    list: "- Roof domes and sky lights",
  },
  {
    list: "- Thermal & non-thermal break systems",
  },
  {
    list: "- Rolling shutters",
  },
];

function page() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }} // Smooth fade-in with a vertical motion
    >
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
              <span className="text-4xl md:text-7xl block">GLOBAL PIONEER</span>
              {/* Extrusion LLC */}
              <span className="text-2xl md:text-4xl text-white text-opacity-70 block  font-medium">
                ALUMINIUM INDUSTRIES LLC
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
                  EXPERTISE - <br></br>
                  OUR STRENGTH{" "}
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Global Pioneer Aluminium Industries LLC it’s a specialized
                company in designing, engineering, fabrication, supply and
                installation of aluminium works and advanced curtain walling
                systems.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Established since 1976 as pioneer in the aluminium industries in
                the region, since 2004 is member of Elite Group of Companies for
                which can be considered the in-house fabrication division of the
                group.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Based in Ajman, U.A.E., in a 26.000 square feet area we
                guarantee clients’ assistance and undertaking of turnkey
                projects, complying with the specifications, designs and the
                best of quality aluminium fabrication and related metal works.
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
                  "url('/ourgroups/globalpioneer/globalcompany.jpg')", // Replace with your image path
                backgroundSize: "cover", // Ensures the image completely fills the div
                backgroundPosition: "center", // Centers the image in the div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
              }}
            >
              <Image
                src={"/ourgroups/globalpioneer/image.png"}
                width={200}
                height={200}
                alt="United Logo"
                className="hidden sm:block shadow-lg border-8 border-[#E8D858] absolute top-0 transform -translate-y-1/2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/globalpioneer/global.mp4"
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
          className="relative text-white text-xl md:text-2xl lg:text-4xl font-bold z-10 px-2 mb-3"
        >
          EXELLENCE IN OPERATION & SERVICE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4 mb-3"
        >
          Global Pioneer is involved in a workflow with the extrusion sister
          companies to operate in straight-chain afterwards the aluminium and
          rubber profiles manufacturing, and so offer the benefit of their
          knowledge and experience in the aluminium & glass along with the
          accessories industry. Hence the company is entitled to manage project
          in different emirates and so offer our specialization under a single
          license.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative text-white text-xl md:text-2xl lg:text-4xl font-bold z-10 px-4 mb-3"
        >
          MACHINERIES & IMPECCABLE WORKMANSHIP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4 mb-3"
        >
          Our commitment to technical excellence has led us to invest in
          machineries, shaping utensils, designing unit and whole
          infrastructure, enabling us to offer comprehensive engineering
          designs, quality craftsmanship to configure customers’ orders in
          advance.
        </motion.p>
      </div>
      <div className="mx-auto max-w-7xl">
        {/* First Section */}
        <motion.div
          className="grid grid-cols-12 items-center p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          {/* Text Column */}
          <motion.div
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-l-8 p-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold mb-8">
              FINISHING TOUCHES
            </h2>
            <p className="text-lg text-[#484848] leading-8">
              For the manufacturing of aluminium profiles we use a number of
              modern equipments. Quality control procedures are carried out
              throughout the fabrication and installation processes and are as
              per the Company’s quality plans, set by the management. A copy of
              the quality plan shall be submitted to the client or consultant
              upon request.
            </p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="flex flex-col gap-4">
              <Image
                src="/ourgroups/globalpioneer/globalpioneer3.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/globalpioneer/globalpioneer2.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div>
        <div className="flex gap-3 mb-8 mx-8 sm:mx-16 md:mx-32 mt-10 p-4 sm:p-6 md:p-8">
          <hr className="w-2 h-12 md:h-16 bg-[#E8D858] border-none" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#023D68] leading-tight">
            PRODUCTS RANGE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-8 sm:mx-16 md:mx-36 p-4 sm:p-6 md:p-8 border-2 sm:border-3 border-yellow-300 rounded-lg">
          <div>
            {column1.map((items, index) => (
              <ul key={index} className="mb-2">
                <li className="text-sm sm:text-base">{items.list}</li>
              </ul>
            ))}
          </div>

          <div>
            {column2.map((items, index) => (
              <ul key={index} className="mb-2">
                <li className="text-sm sm:text-base">{items.list}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <WobbleCards heading="Railing" cards={productData1} />
      <WobbleCards heading="Systems" cards={productData2} />

      <WobbleCards heading="Samples" cards={productData3} />
                      <motion.div
                        className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center gap-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      >
                        {/* Text Column */}
                        <div className="col-span-12 md:col-span-7 mt-12 md:mt-20">
                          <motion.div
                            className="flex gap-3 mb-8"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.0 }}
                          >
                            <hr className="w-2 h-16 md:h-16 bg-[#E8D858] border-none" />
                            <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                              LOCATION
                            </h2>
                          </motion.div>
            
                          <motion.p
                            className="text-[#484848] mb-6 text-justify md:pr-7"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.0 }}
                          >
                            Address: <a href="https://maps.app.goo.gl/6fnULATWBUdEUENA8?g_st=it" target="_blank" className="text-blue-500 hover:underline">9FFC+W3 - Ajman Industrial 2 - Ajman</a><br></br>
                            Hours: 08:00 AM - 5:00 PM <br></br>
                          Phone: 06 743 2020
                          </motion.p>
                        </div>
            
                        {/* Logo Column */}
                        <motion.a
                          href="https://maps.app.goo.gl/6fnULATWBUdEUENA8?g_st=it"
                          target="_blank"
                          className="col-span-12 md:col-span-5 border-4 border-[#E8D858] relative h-100 md:h-96 flex justify-center items-center overflow-visible"
                          initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
                          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          style={{
                            backgroundImage:
                              "url('/locationglobal.jpg')", // Replace with your image path
                            backgroundSize: "cover", // Ensures the image completely fills the div
                            backgroundPosition: "center", // Centers the image in the div
                            backgroundRepeat: "no-repeat", // Prevents the image from repeating
                          }}
                        >
                        </motion.a>
                      </motion.div>
      <Footer />
    </motion.div>
  );
}

export default page;

