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
              <span className="text-4xl md:text-7xl block">THERMOSET</span>
              {/* Extrusion LLC */}
              <span className="text-2xl md:text-4xl text-white text-opacity-70 block  font-medium">
                MIDDLE EAST LLC
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
                  EXPERTISE - <br></br> OUR STRENGTH
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Thermoset Middle East LLC is an ISO 9001 certified manufacturer
                of premium quality EPDM Rubber gaskets for architectural,
                construction and industrial applications. The facility is
                located in Dubai Investment Park to produce an extensive range
                of rubber gaskets & profiles that offer long-time performance.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Thermoset Middle East is part of the Elite Group of Companies to
                add a further functional accessory to the aluminium production
                and complete its vast range.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                We manufacture and offer a complementary product that is much
                more than an additional component. Our wide array of customized
                architectural sealing gaskets is designed to withstand the
                extreme climatic conditions in the Middle East.
              </motion.p>
            </div>

            {/* Logo Column */}
            <motion.div
              className="col-span-12 md:col-span-5 border-4 border-[#E8D858] relative h-64 md:h-96 flex justify-center items-center overflow-visible"
              initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src={"/ourgroups/thermoset/image.png"}
                width={200}
                height={200}
                alt=""
                className="shadow-lg border-8 border-[#E8D858] absolute lg:-top-36"
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
            <motion.h1
              className="relative text-[#023D68] text-xl md:text-2xl lg:text-3xl font-bold z-10 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              ALUMIL PRODUCTION PROCESS
            </motion.h1>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              The manufacturing facility at Thermoset Middle East boast a Cold
              Feed Extrusion with LCM Vulcanization (Liquid Cure Medium) Line
              from Germany. It creates Peroxide Cure EPDM profiles that offer
              better compression set performance at higher temperatures and
              provide stability for building and industrial applications.
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              Quality consistency is maintained for all our rubber compound
              properties as we strictly comply with German Standard (DIN-7863)
              for the manufacture of elastomer gaskets for use in windows and
              facade construction.
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              Dimensions are maintained as per BS 3734 and gaskets are
              compatible with silicone sealants. Our polymer compound can also
              be formulated to meet various other standards like ASTM
              C-864, BS-4255 or as per the project requirements.
            </motion.p>
            <motion.h4
              className="relative text-[#023D68] text-m md:text-l lg:text-xl font-bold z-10 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              Only LCM lines can make products which can comply with all needs
              of DIN 7863
            </motion.h4>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              The line is equipped with Sprinkler Unit for curing delicate
              shapes as well. This line is pollution free & therefore clean &
              environmentally friendly.
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              Thermoset’s line is equipped with sprinkler unit for curing
              delicate shapes as well.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/thermoset/thermostat.mp4"
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
          SUITABLE FOR EXTREME <br></br>WEATHER CONDITIONS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          The unit houses an ultra-modern EPDM Rubber Extrusion Plant from
          Germany. It is fully automated with a modern die making & correction
          unit. Especially significant are its architectural sealing gaskets,
          which are made to withstand extreme weather conditions.
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
              DIE <br></br>
              FABRICATION UNIT
            </h2>
            <p className="text-lg text-[#484848] leading-8 mb-4">
              Our full-fledged design and development facility can fabricate an
              assortment of dies in-house as we have installed state-of-the-art
              machinery. With the aid of these high-speed processing machines,
              our team of talented designers can effortlessly deliver
              cost-efficient custom seals and gaskets to meet your exact
              requirements at the shortest possible time.
            </p>
            <p className="text-lg text-[#484848] leading-8 mb-2 ">
              Die Fabrication machines installed are:
            </p>
            <ul className="text-lg text-[#484848] leading-8 list-disc pl-5">
              <li>CNC Wire Cut Machine</li>
              <li>Precision Turning & Drilling Machines</li>
              <li>Other Conventional Machines</li>
            </ul>
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
                src="/ourgroups/thermoset/woodfinish1.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/thermoset/woodfinish2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-8  pl-6  p-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68]  mb-8">
            DESIGN CENTRE AND <br></br>
            DESIGN PROTECTION
          </h2>
          <p className="text-lg text-[#484848] leading-8 mb-2">
            The hi-tech Design Centre is equipped to innovate & develop reliable
            and best performing gaskets. We have the required capacity and
            competency to manufacture polymer gaskets in any shape or form as
            per your varied industry-related requirements.
          </p>
          <p className="text-lg text-[#484848] leading-8 mb-2">
            Design inputs for any enquiry include:
          </p>
          <ul className="text-lg text-[#484848] leading-8 list-disc pl-5 mb-2">
            <li>Hand Sketch of gasket/profile</li>
            <li>Auto Cad Drawing</li>
            <li>Assembly Drawing of the Window / Door / CW / etc.</li>
            <li>Cut pieces of the Window / Door / CW / etc.</li>
            <li>Image of Cross Section of the Profile in any form</li>
          </ul>
          <p className="text-lg text-[#484848] leading-8 mb-6">
            The custom-made profile will not be disclosed or sold to any other
            customers, as these are created exclusively for our clients.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
