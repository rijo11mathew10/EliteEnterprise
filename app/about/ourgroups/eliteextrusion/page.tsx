"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { WobbleCardDemo } from "@/components/ourgroups/OurProducts";

const productData = [
  {
    imageSrc: "/ourgroups/eliteextrusion/product1.jpg",
    title: "MILL FINISH PROFILES",
  },
  {
    imageSrc: "/ourgroups/eliteextrusion/product2.jpg",
    title: "ANODIZED PROFILES",
  },
  {
    imageSrc: "/ourgroups/eliteextrusion/product3.jpg",
    title: "POWDER COATED PROFILES",
  },
  {
    imageSrc: "/ourgroups/eliteextrusion/product4.jpg",
    title: "WOOD FINISH PROFILES",
  },
];
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
              <span className="text-4xl md:text-7xl block">ELITE</span>
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
                  RELIABILITY - OUR <br /> HALLMARK
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                We seek to provide excellent products that exceed Aluminum is a
                widely used metal for countless applications in the nowadays
                society. Strength, light-weight, corrosion resistance, thermal
                conductive, durability, no-toxic, recycling are just a few of
                the several advantages of this metal. Two of the most common
                compounds are alum, such as potassium aluminum sulfate and
                aluminum oxide. About 8% of the earth's crust is composed of
                aluminum.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Elite Extrusion has one-of-a-kind aluminium extrusion
                manufacturing facility located in Ras Al Khaimah (U.A.E.) The
                plant covers an area of over 50,000 sqm with extrusion presses
                fully PLC controlled and 100 meters long runout press table for
                natural cooling.
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
                  "url('/ourgroups/eliteextrusion/elitebuilding.jpg')", // Replace with your image path
                backgroundSize: "cover", // Ensures the image completely fills the div
                backgroundPosition: "center", // Centers the image in the div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
              }}
            >
              <Image
                src={"/ourgroups/eliteextrusion/eliteextrusionlogo.png"}
                width={200}
                height={200}
                alt="United Logo"
                className="shadow-lg border-8 border-[#E8D858] absolute top-0 transform -translate-y-1/2"
              />
            </motion.div>
          </motion.div>

          {/* Full-Width Section */}
          <motion.div
            className="max-w-7xl mx-auto px-4 md:px-6 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              Elite Extrusion has one-of-a-kind aluminium extrusion
              manufacturing facility located in Ras Al Khaimah (U.A.E.) The
              plant covers an area of over 50,000 sqm with extrusion presses
              fully PLC controlled and 100 meters long runout press table for
              natural cooling.
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              Anodizing line, with pre & post-treatment, can reach an annual
              capacity of 7.500 MT for a standard application between 12 μm and
              16 μm. It can reach 25 μm on demand.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/eliteextrusion/elitevideo.mp4"
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
          ELABORATE FACILITIES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          Elite Extrusion aims to provide comprehensive solutions for the
          growing needs of the discerning architectural & non-architectural
          end-use customers. The generation next presses are engineered to
          extrude 24.000 MT per annum, and a modern tooling division set-up to
          manufacture high quality extrusion dies. Moreover, Elite Extrusion is
          pleased to support the protected design of world-wide known glazing
          systems brands, to highlight the top-quality service that we can
          provide.
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
              WOOD FINISH <br />
              PROCESS
            </h2>
            <p className="text-lg text-[#484848] leading-8">
              The wood finish lines from Elite Extrusion reproduce wood effects
              and special textures on aluminium profiles. These plants allow the
              company to produce high-quality aluminium systems with a sleek
              wood finish that are both elegant and durable. The end products
              are apt for doors, windows, and kitchen cabinets, and they are
              available in a variety of shades and tones.
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
                src="/ourgroups/eliteextrusion/woodfinish.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/eliteextrusion/woodfinish2.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="grid grid-cols-12 items-center p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          {/* Image Column */}
          <motion.div
            className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="flex flex-col gap-4">
              <Image
                src="/ourgroups/eliteextrusion/largescale.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858] relative translate-x-14"
              />
              <Image
                src="/ourgroups/eliteextrusion/largescale2.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858] relative translate-x-14"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-r-8 pl-6 md:pl-20 p-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold mb-8">
              LARGE SCALE OF OPERATIONS
            </h2>
            <p className="text-lg text-[#484848] leading-8">
              Massive stockpiles of Aluminium alloy logs are systematically
              stored to cater to projects of any scale. Our system is flexible
              enough to handle demands from a small architectural challenge to a
              world-class one.
            </p>
          </motion.div>
        </motion.div>

        {/* Third Section */}
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
              ADVANCED POWDER COATING MACHINES
            </h2>
            <p className="text-lg text-[#484848] leading-8">
              A high-capacity vertical powder coating machine is installed at
              Elite Extrusion. The production capacity is 14,400 MT per annum.
              The advanced machine swiftly coats the extrusions to perfection.
              Their usage means fewer operators and more output compared to
              horizontal plants. This is one of the highlights of the powder
              coating plants here.
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
                src="/ourgroups/eliteextrusion/advancedpowder.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/eliteextrusion/advancedpowder2.jpg"
                alt=""
                width={350}
                height={100}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Fourth Section */}
        <motion.div
          className="grid grid-cols-12 items-center p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          {/* Image Column */}
          <motion.div
            className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="flex flex-col gap-4">
              <Image
                src="/ourgroups/eliteextrusion/anodizingto.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858] relative translate-x-14"
              />
              <Image
                src="/ourgroups/eliteextrusion/anodizingto2.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858] relative translate-x-14"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-r-8 pl-6 md:pl-20 p-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold mb-8">
              ANODIZING TO PERFECTION
            </h2>
            <p className="text-lg text-[#484848] leading-8">
              Aluminium oxide is hard, durable, and weather resistant. Anodizing
              is an electrochemical process that forms a protective coating of
              Aluminium oxide on the surface of Aluminium. The coating is
              offered in silver, gold, and bronze finishes.
            </p>
            <ul className="text-lg text-[#484848] leading-8 list-disc pl-5">
              <li>Generally less expensive</li>
              <li>Longer life; low maintenance</li>
              <li>Unaffected by sunlight</li>
            </ul>
            <p className="text-lg text-[#484848] leading-8">
              The unit is certified with Qualanod and has an annual production
              capacity of 7,200 MT.
            </p>
          </motion.div>
        </motion.div>
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
