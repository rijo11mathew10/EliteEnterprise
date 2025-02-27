"use client";
import CustomSection from "@/components/CustomSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

import Image from "next/image";

function page() {
  const sections = [{ title: "Dies", value: "1,800", unit: "Metric Tone" }];
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
              <span className="text-4xl md:text-7xl block">NASHAT</span>
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
                className="overflow-visible flex gap-3 mb-8"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                <hr className="w-2 h-16 md:h-32 bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                  MODERN <br />
                  EQUIPMENT - OUR <br />
                  SUPPORT
                </h2>
              </motion.div>

              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Using high quality extrusion dies is a hallmark of Elite Group
                of Companies. Located in Ras Al Khaimah, Nashat Metal
                Engineering LLC is a division of this group which specializes in
                the manufacturing of top notch extrusion dies and tools.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                It is equipped with latest CNC wire cut machinery, precision
                lathes & grinding machines and other convectional machines with
                fully equipped and automated state of the art design unit with
                latest softwares.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                This division has an annual production capacity of 3,600 Dies
                and caters to the urgent needs of the sister companies thereby
                increasing the service levels to uncomparable limits.
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
                backgroundImage: "url('/ourgroups/nashat/NASHAT.jpg')", // Replace with your image path
                backgroundSize: "cover", // Ensures the image completely fills the div
                backgroundPosition: "center", // Centers the image in the div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
              }}
            >
              <Image
                src={"/ourgroups/nashat/image.png"}
                width={200}
                height={200}
                alt="United Logo"
                className=" hidden sm:block shadow-lg border-8 border-[#E8D858] absolute top-0 transform -translate-y-1/2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="hidden sm:block">
        <CustomSection sections={sections} />
      </div>
      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/nashat/nashat.mp4"
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
          STATE OF THE ART MACHINERY{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          It houses a modern tool room capable of manufacturing high quality
          extrusion dies. Quality machinery, bolstered by innovation and a fully
          equipped design unit makes all the difference. This is how Nashat
          Metal Engineering LLC distinguishes itself from the rest.
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
            <h2 className="text-5xl md:text7xl text-[#023D68] font-bold mb-8">
              SERVICE LEVELS TO INCOMPARABLE LIMITS.
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
            <div className="flex flex-col gap-4">
              <Image
                src="/ourgroups/nashat/dies.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/nashat/dies1.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
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
                                  Address: <a href="https://maps.app.goo.gl/sQwyB5xXktcs2saV6?g_st=it" target="_blank" className="text-blue-500 hover:underline">MQ3H+4RJ - Al Jazeera Al Hamra Industrial - Ras Al Khaimah</a><br></br>
                                  Hours: 08:00 AM - 5:00 PM <br></br>
                                  Phone: 07 228 2780 
                                </motion.p>
                              </div>
                  
                              {/* Logo Column */}
                              <motion.a
                                href="https://maps.app.goo.gl/sQwyB5xXktcs2saV6?g_st=it"
                                target="_blank"
                                className="col-span-12 md:col-span-5 border-4 border-[#E8D858] relative h-100 md:h-96 flex justify-center items-center overflow-visible"
                                initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
                                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                style={{
                                  backgroundImage:
                                    "url('/locationnashat.jpg')", // Replace with your image path
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
