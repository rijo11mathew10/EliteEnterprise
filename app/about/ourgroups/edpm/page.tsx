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
              <span className="text-4xl md:text-7xl block">
                EPDM RUBBER PRODUCTS
              </span>
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
        <br />
        <motion.p
          className="text-[#484848] mb-6 text-justify"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          We manufacture and offer a complementary product that is much more
          than an additional component. Our wide array of standard & customized
          architectural sealing gaskets is designed to withstand the extreme
          climatic conditions to add a further functional accessory to the
          aluminium production and complete its vast range.
        </motion.p>
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
                  EDPM RUBBER <br />
                  PROFILES
                </h2>
              </motion.div>
              <motion.p
                className="  text-[#484848] mb-6 text-justify md:pr-7 "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Thermoset Middle East in-house capabilities include a fully
                equipped Rubber Extrusion line with an output capacity of 10.000
                metric tons per year to serve the market. Cold Feed Extrusion
                Line with LCM Vulcanization (Liquid Cure Medium) is able to
                create quality Peroxide Cure EPDM Profiles that offer better
                compression set performance at higher temperatures, providing
                stability for building and industrial applications.{" "}
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Only LCM lines can make products which can comply with all needs
                of DIN 7863.{" "}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Range Section */}
      <div className="mx-auto max-w-7xl mb-16 px-6">
        <motion.div
          className="grid grid-cols-12 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Image Column */}
          <motion.div
            className="col-span-12 md:col-span-5 bg-[#023D68] p-6 text-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/ourgroups/epdm/epdm1.jpg"
                alt="EPDM Rubber"
                width={270}
                height={270}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/epdm/epdm2.jpg"
                alt="EPDM Rubber"
                width={270}
                height={270}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/epdm/epdm6.jpg"
                alt="EPDM Rubber"
                width={270}
                height={270}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/epdm/epdm4.jpg"
                alt="EPDM Rubber"
                width={270}
                height={270}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/epdm/epdm5.jpg"
                alt="EPDM Rubber"
                width={270}
                height={270}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/epdm/epdm7.jpg"
                alt="EPDM Rubber"
                width={270}
                height={270}
                className="shadow-lg border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="col-span-12 md:col-span-7">
            <motion.div
              className="flex gap-3 mb-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              <hr className="w-2 h-16 md:h-24 bg-[#E8D858] border-none" />
              <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                RANGE OF <br />
                PRODUCTS
              </h2>
            </motion.div>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              All our premier EPDM gaskets and polymer products are engineered
              to deliver optimal performance and meet the harsh environmental
              and tough operational conditions.
            </motion.p>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              Product range includes the following:
            </motion.p>
            <motion.ul
              className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              <li>EPDM, Neoprene, Silicone, Rubber dense/solid profiles</li>
              <li>Fire Rated EPDM rubber gasket as per standard EN 455 45-2</li>
              <li>Silicone compatible EPDM rubber gaskets.</li>
              <li>
                Rubber setting blocks, expansion joint and moulded corner,
                vulcanized frame gasket.
              </li>
              <li>Rubber sponge profiles.</li>
              <li>
                Rubber Fenders & Other Rubber Extruded & co-extruded items.
              </li>
              <li>Rubber Sheets/water proofing membrane.</li>
            </motion.ul>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              Hardness Grade Available:
            </motion.p>
            <motion.ul
              className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              <li>50±5 Shore A</li>
              <li>60±5 Shore A</li>
              <li>70±5 Shore A</li>
              <li>80±5 Shore A</li>
              <li>Customized</li>
            </motion.ul>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              Color Available:
            </motion.p>
            <motion.ul
              className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              <li>Black</li>
              <li>Grey, Beige or special colours on prior request</li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl mb-16">
        <div className="mx-auto max-w-7xl mb-16 p-6">
          {/* Applications Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 items-start">
            {/* Title Section */}
            <div className="col-span-12">
              <div className="flex gap-3 items-center mb-6">
                <hr className="w-2 h-16 bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68]">
                  APPLICATIONS
                </h2>
              </div>
            </div>

            {/* Description Section */}
            <div className="col-span-12 md:col-span-6">
              <p className="text-[#484848] mb-4">
                We are highly specialized in sealing protection for products
                such as extruded aluminium section & glazing systems.
              </p>
              <p className="text-[#484848] font-semibold">
                Industrial Applications
              </p>
              <ul className="list-disc pl-5 mt-2 text-[#484848]">
                <li>Sealing and gasket</li>
                <li>Cushioning</li>
                <li>Damping vibrations</li>
              </ul>
            </div>

            {/* Different Sphere of Application */}
            <motion.div className="col-span-12 md:col-span-6">
              <motion.p className="text-[#484848] font-semibold">
                Below are different sphere of application:
              </motion.p>
              <motion.ul className="list-disc pl-5 mt-2 text-[#484848]">
                <li>Aluminium & Glass / Wood / PVC: Window Systems</li>
                <li>Thermal Break & Conventional Systems</li>
                <li>Curtain Walls</li>
                <li>Structural Glazing</li>
                <li>Sliding Windows</li>
                <li>Casement Windows</li>
                <li>Tilt & Turn Windows</li>
                <li>Doors</li>
                <li>Facades</li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
      {/* EPDM Technology Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Text Column */}
          <div className="col-span-12">
            <motion.ul
              className="text-[#484848] text-justify list-disc pl-5 pr-2 sm:pr-6 md:pr-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              <li>
                EPDM is a polymer of ethylene, propylene and a small percentage
                of non-conjugated diene.
              </li>
              <li>
                EPDM compounds usually contain carbon black, zinc oxide,
                antioxidants, processing aids, petroleum-based plasticizers and
                curing ingredients.
              </li>
              <li>
                EPDM provides resistance to weathering, heat, ozone, and extreme
                temperature variations.
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
