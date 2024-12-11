"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { WobbleCardDemo } from "@/components/ourgroups/OurProducts";

const productData = [
  {
    imageSrc: "/ourgroups/united/powdercoating1.jpg",
    title: "Powder Coating",
  },
  {
    imageSrc: "/ourgroups/united/powdercoating2.jpg",
    title: "Powder Coating",
  },
  {
    imageSrc: "/ourgroups/united/powdercoating3.jpg",
    title: "Powder Coating",
  },
];
function page() {
  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[450px] flex items-center justify-center mb-16 overflow-hidden"
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
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-8 px-16 rounded w-[600px] mx-auto text-center">
            <h1 className="text-white font-semibold">
              {/* Elite */}
              <span className="text-4xl md:text-7xl block">UNITED</span>
              {/* Extrusion LLC */}
              <span className="text-2xl md:text-4xl text-white text-opacity-70 block  font-medium">
                POWDER COATING FZC
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
                <hr className="w-2 h-32 md:h-36  bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                  CUSTOMER <br />
                  SATISFACTION-
                  <br /> OUR OBSESSION
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                United Powder Coating FZC is located at Al Hamariyah Free Zone,
                Sharjah. The company is engaged in powder coating of
                architectural aluminium profiles. The unit is a stickler for
                quality. The latest horizontal powder coating plant is set up at
                the facility, and supports an annual capacity of 6,000 MT. and
                prides itself on customer satisfaction. aluminum.
              </motion.p>
            </div>

            {/* Logo Column */}
            <motion.div
              className="col-span-12 md:col-span-5 border-4 border-[#E8D858] relative h-64 md:h-96 flex justify-center items-center overflow-visible "
              initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src={"/ourgroups/united/logo.png"}
                width={200}
                height={200}
                alt=""
                className="shadow-lg border-8 border-[#E8D858] absolute lg:-top-36"
              />
            </motion.div>
          </motion.div>

          {/* Full-Width Section */}
          <motion.div
            className="flex gap-3 p-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <hr className="w-2 h-16 md:h-24 bg-[#E8D858] border-none" />
            <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight mb-3">
              FACILITATING <br />
              SUCCESS
            </h2>
          </motion.div>
          <motion.p
            className="text-[#484848] mb-6 text-justify p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            This facility at United Powder Coating handles surface finishing by
            powder coating of architectural aluminium profiles in all RAL
            colours and special finishes.
          </motion.p>
        </div>
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
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-l-8 p-16"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold mb-8">
              HORIZONTAL POWDER COATING MACHINE
            </h2>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="flex flex-col gap-4 pt-64">
              <Image
                src="/ourgroups/united/gridimage.png"
                alt="Grid Image"
                width={600} /* Explicitly define width */
                height={300} /* Explicitly define height */
                className="shadow-lg -ml-16 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <WobbleCardDemo
        heading="OUR PRODUCTS"
        description="Powder Coating of the following products"
        listItems={[
          "- Architectural profiles",
          "- Industrial Products",
          "- Scaffoldings and formwork",
          "- Special customised finishes",
        ]}
        cards={productData}
      />

      <Footer />
    </div>
  );
}

export default page;
