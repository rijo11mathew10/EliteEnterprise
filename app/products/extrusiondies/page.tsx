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
              EXTRUSION DIES{" "}
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
          Specialized in manufacturing of high quality extrusion dies and
          tooling. Equipped with latest CNC Wire Cut Machinery, Precision Lathes
          & Grinding Machines and other Convectional Machines with fully
          automated State of the art design unit with latest software.
        </p>
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
                ALUMINIUM
                <br /> EXTRUSION DIES
              </h2>
            </div>

            <p className="text-lg text-[#484848] leading-8 mb-6">
              Specializes in manufacturing of extrusion dies and tooling, houses
              a modern tool room capable of manufacturing high quality extrusion
              dies. It is equipped with latest CNC wire cut machinery, precision
              lathes & grinding machines and other convectional machines with
              fully equipped and automated state of the art design unit with
              latest software.
            </p>
            <p className="text-lg text-[#484848] leading-8 mb-6">
              This division has an annual production capacity of 3,600 Dies and
              caters to the urgent needs of the sister companies thereby
              increasing the service levels to incomparable limits.
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="col-span-12 md:col-span-5 p-6 grid grid-cols-2 gap-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div>
              <Image
                src="/products/extrusiondies/dies1.jpg"
                alt="Image 1"
                width={200}
                height={200}
                className="rounded-md shadow-lg"
              />
              <Image
                src="/products/extrusiondies/dies2.jpg"
                alt="Image 2"
                width={200}
                height={200}
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="bg-[#023D68]">
              <Image
                src="/products/extrusiondies/dies3.jpg"
                alt="Image 3"
                width={200}
                height={200}
                className="rounded-md shadow-lg"
              />
              <Image
                src="/products/extrusiondies/dies4.jpg"
                alt="Image 4"
                width={200}
                height={200}
                className="rounded-md shadow-lg"
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
