"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
              <span className="text-4xl md:text-7xl block">JORDAN</span>
              {/* Extrusion LLC */}
              <span className="text-2xl md:text-4xl text-white text-opacity-70 block  font-medium">
                ALUMINIUM EXTRUSION
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
                  INNOVATION - OUR <br />
                  PASSION
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Jordan Aluminium is located about 80 kms from Amman, the capital
                of Jordan, and spread across an area of 15,000 square meters.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                It also houses a powder coating plant, with a production
                capacity of 12,000 MT per annum and an anodizing plant of 4,000
                MT per annum which is scheduled to commence soon. We are also
                planning to set up a wood finish division too. Our plant is also
                equipped with the latest automated packing unit.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                The plant houses the most modern state of the art extrusion
                presses, engineered to extrude high quality aluminium profiles
                with an annual capacity of 20,000 MT. It includes a modern die
                correction station, ageing oven and other ancillary equipments.
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
                backgroundImage: "url('/ourgroups/jordan/JORDAN.jpg')", // Replace with your image path
                backgroundSize: "cover", // Ensures the image completely fills the div
                backgroundPosition: "center", // Centers the image in the div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
              }}
            >
              <Image
                src={"/ourgroups/jordan/jordanlogo.png"}
                width={200}
                height={200}
                alt="United Logo"
                className="shadow-lg border-8 border-[#E8D858] absolute top-0 transform -translate-y-1/2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/jordan/jordan.mp4"
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
          TOP NOTCH MACHINERY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          The additional facilities that Jordan Aluminium offers include modern
          Die Correction Stations, ageing oven and ancillary equipment. It also
          houses a powder coating plant, with a production capacity of 12,000 MT
          per annum and an anodizing plant of 4,000 MT per annum.
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
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-l-8 p-16"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold mb-8">
              OUR SIGNATURE TOUCH
            </h2>
            <p className="text-lg text-[#484848] leading-8 mb-4">
              Every company is distinguished by its machinery. The new plant is
              being set up and production will commence shortly to meet the
              growing demands of the region.
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
                src="/ourgroups/jordan/jordan-machine2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/jordan/jordan-machine3.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
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
