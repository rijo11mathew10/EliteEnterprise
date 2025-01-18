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
              <span className="text-4xl md:text-7xl block">COLOR COATINGS</span>
              {/* Extrusion LLC */}
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="ml-40 mr-40 max-w-7xl mb-16"></div>

      <div className="col-span-12 md:col-span-7">
        <motion.div
          className="flex gap-3 mb-8 ml-20"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <hr className="w-2 h-8 md:h-12 bg-[#E8D858] border-none" />
          <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
            SPECIFICATIONS
          </h2>
        </motion.div>
      </div>
      <div className="mx-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <motion.div
          className="mx-4 p-4 border-b-4 mb-8 border-[#E8D858] shadow-md rounded-lg bg-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <h3 className="text-lg font-bold text-[#023D68] mb-2">ALLOYS AA</h3>
          <p className="text-sm text-[#484848]">
            1050, 1060, 1070, 1100, 3003, 3004, 3005, 3103, 3105, 5005, 8011
          </p>
        </motion.div>
        <motion.div
          className="mx-4 p-4 border-b-4 mb-8 border-[#E8D858] shadow-md rounded-lg bg-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <h3 className="text-lg font-bold text-[#023D68] mb-2">TEMPER</h3>
          <p className="text-sm text-[#484848]">
            H44, H45, H48(as per customer requirement)
          </p>
        </motion.div>
        <motion.div
          className="mx-4 p-4 border-b-4 mb-8 border-[#E8D858] shadow-md rounded-lg bg-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <h3 className="text-lg font-bold text-[#023D68] mb-2">COIL WEIGHT</h3>
          <p className="text-sm text-[#484848]">1 to 4.5 MT </p>
        </motion.div>
        <motion.div
          className="mx-4 p-4 border-b-4 mb-8 border-[#E8D858] shadow-md rounded-lg bg-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <h3 className="text-lg font-bold text-[#023D68] mb-2">
            COATING TYPE
          </h3>
          <p className="text-sm text-[#484848]">PVDF, PE & Service Coat</p>
        </motion.div>
        <motion.div
          className="mx-4 p-4 border-b-4 mb-8 border-[#E8D858] shadow-md rounded-lg bg-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <h3 className="text-lg font-bold text-[#023D68] mb-2">
            Thickness Range
          </h3>
          <p className="text-sm text-[#484848]">0.35 – 1.20 mm</p>
        </motion.div>
        <motion.div
          className="mx-4 p-4 border-b-4 mb-8 border-[#E8D858] shadow-md rounded-lg bg-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <h3 className="text-lg font-bold text-[#023D68] mb-2">Width Range</h3>
          <p className="text-sm text-[#484848]">150 - 1260 mm</p>
        </motion.div>
      </div>

      <div className="col-span-12 md:col-span-7">
        <motion.div
          className="flex gap-3 mb-8 ml-20"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <hr className="w-2 h-8 md:h-12 bg-[#E8D858] border-none" />
          <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
            COLOR COATING
          </h2>
        </motion.div>
      </div>
      <div className=" max-w-7xl ml-20 mr-20 mb-16">
        <motion.p
          className="text-[#484848] mb-6 text-justify md:pr-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          The coil coating process it is a high-volume operation that produces a
          perfect finish based on a liquid application of the common resins such
          as Polyester (PE) and Polyvinylidene fluoride (PVDF). Liquid coating
          is well known to have a higher performance for gloss, resistance and
          uniformity of area coverage.{" "}
        </motion.p>
        <motion.p
          className="text-[#484848] mb-6 text-justify md:pr-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          The aluminum substrate gets degreased and chemically pre-treated.
          Application of primer coating and top coating takes place along with
          ancillary treatments. The typical paint system requirements took into
          consideration are formability, scratch-resistance, appearance and
          weather ability.{" "}
        </motion.p>
        <motion.p
          className="text-[#484848]  text-justify md:pr-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          LRV (light Reflective Value) and SRI (Solar Reflective Index) are top
          coating colors tested by DCL.{" "}
        </motion.p>
      </div>

      <motion.ul
        className="text-[#484848] text-justify md:pr-7 list-disc pl-5 ml-20 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      >
        <li>Uncoiling</li>
        <li>Drying</li>
        <li>Top coating</li>
        <li>Side Trimming</li>
        <li>Roll Forming</li>
        <li>Chemical Pre-treatment</li>
        <li>Primer coating</li>
        <li>Curing Oven</li>
        <li>Recoiling</li>
        <li>Packing</li>
      </motion.ul>

      <div className="col-span-12 md:col-span-7">
        <motion.div
          className="flex gap-3 mb-8 ml-20 mr-20"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <hr className="w-2 h-8 md:h-12 bg-[#E8D858] border-none" />
          <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
            COLOR COATING GALLERY
          </h2>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 justify-items-center">
          <Image
            src="/ourgroups/colorcoating/color1.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
          <Image
            src="/ourgroups/colorcoating/color2.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
          <Image
            src="/ourgroups/colorcoating/color3.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
          <Image
            src="/ourgroups/colorcoating/color4.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
          <Image
            src="/ourgroups/colorcoating/color5.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
          <Image
            src="/ourgroups/colorcoating/color6.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
          <Image
            src="/ourgroups/colorcoating/color7.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
          <Image
            src="/ourgroups/colorcoating/color8.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
          <Image
            src="/ourgroups/colorcoating/color9.jpg"
            alt=""
            width={350}
            height={180}
            className="shadow-lg border-3 border-[#E8D858]"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
