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
        className="relative bg-cover bg-center h-[350px] md:h-[550px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <motion.div
          className="absolute top-[60px] right-6 h-1 w-[45%] bg-[#E8D858] z-0 pointer-events-none"
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
            <h1 className="text-white font-semibold text-4xl md:text-7xl">
              COLOR COATINGS
            </h1>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-16">
        <br></br>
        <motion.div
          className="flex gap-3 mb-8"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "ALLOYS AA", content: "1050, 1060, 1070, 1100, 3003, 3004, 3005, 3103, 3105, 5005, 8011" },
            { title: "TEMPER", content: "H44, H45, H48 (as per customer requirement)" },
            { title: "COIL WEIGHT", content: "1 to 4.5 MT" },
            { title: "COATING TYPE", content: "PVDF, PE & Service Coat" },
            { title: "Thickness Range", content: "0.35 – 1.20 mm" },
            { title: "Width Range", content: "150 - 1260 mm" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="mx-4 p-4 border-b-4 mb-8 border-[#E8D858] shadow-md rounded-lg bg-white"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              <h3 className="text-lg font-bold text-[#023D68] mb-2">{item.title}</h3>
              <p className="text-sm text-[#484848]">{item.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex gap-3 mb-8"
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

        <div className="max-w-7xl mx-auto mb-16">
          <motion.p
            className="text-[#484848] mb-6 text-justify md:pr-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            The coil coating process is a high-volume operation that produces a
            perfect finish based on a liquid application of the common resins such
            as Polyester (PE) and Polyvinylidene fluoride (PVDF). Liquid coating
            is well known for its higher performance in gloss, resistance, and
            uniformity of area coverage.
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
            ancillary treatments. The typical paint system requirements include
            formability, scratch-resistance, appearance, and weatherability.
          </motion.p>
          <motion.p
            className="text-[#484848] text-justify md:pr-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            LRV (Light Reflective Value) and SRI (Solar Reflective Index) are top
            coating colors tested by DCL.
          </motion.p>
        </div>

        <motion.ul
          className="text-[#484848] text-justify md:pr-7 list-disc pl-5 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        >
          {[
            "Uncoiling",
            "Drying",
            "Top coating",
            "Side Trimming",
            "Roll Forming",
            "Chemical Pre-treatment",
            "Primer coating",
            "Curing Oven",
            "Recoiling",
            "Packing"
          ].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </motion.ul>

        <motion.div
          className="flex gap-3 mb-8"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            "/ourgroups/colorcoating/color1.jpg",
            "/ourgroups/colorcoating/color2.jpg",
            "/ourgroups/colorcoating/color3.jpg",
            "/ourgroups/colorcoating/color4.jpg",
            "/ourgroups/colorcoating/color5.jpg",
            "/ourgroups/colorcoating/color6.jpg",
            "/ourgroups/colorcoating/color7.jpg",
            "/ourgroups/colorcoating/color8.jpg",
            "/ourgroups/colorcoating/color9.jpg"
          ].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Color Coating Image ${idx + 1}`}
              width={350}
              height={180}
              className="shadow-lg border-3 border-[#E8D858]"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
