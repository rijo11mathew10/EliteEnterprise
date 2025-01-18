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
              <span className="text-4xl md:text-7xl block">FABRICATIONS</span>
              {/* Extrusion LLC */}
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="w-full px-4 py-6">
        <br></br>
        <motion.p
          className="text-[#484848] mb-6 text-justify md:pr-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          We manufacture and offer a complementary product that is much more
          than an additional component. Our wide array of standard & customized
          architectural sealing gaskets is designed to withstand the extreme
          climatic conditions to add a further functional accessory to the
          aluminium production and complete its vast range.{" "}
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
                  ALUMINIUM <br />
                  FABRICATION
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                The Fabrication division it is specialized in design,
                engineering, manufacturing, and installation of all kinds of
                architectural aluminum and metal works. The division is involved
                in a workflow with the extrusion sister companies to operate in
                straight-chain afterward the aluminum & rubber profiles
                manufacturing, and so offer the benefit of their knowledge and
                experience in the aluminum & glass along with the accessories’
                industry.{" "}
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Our commitment to technical excellence has led us to invest in
                machinery, shaping utensils, designing unit and whole
                infrastructure, enabling us to offer comprehensive engineering
                designs, quality craftsmanship to configure customers’ orders.{" "}
              </motion.p>
            </div>
            <motion.div
              className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              <div className="flex flex-col gap-4">
                <Image
                  src="/ourgroups/fabrications/fabrication3.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/ourgroups/fabrications/fabrication4.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div>
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center gap-8"
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
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/ourgroups/fabrications/sphere1.jpeg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/fabrications/sphere-of-operation-2.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/fabrications/sphere3.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/fabrications/sphere4.jpg"
                alt=""
                width={350}
                height={180}
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
                SPHERE OF <br />
                OPERATIONS
              </h2>
            </motion.div>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              Irrespective of the scale of the project the fabrication division
              of Elite Group of Companies work on par with the clientele to
              evaluate the project requirements and bespoke the aluminium
              solution and related metal needs. Area of specification are:{" "}
            </motion.p>
            <motion.ul
              className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              <li>
                Turnkey projects of complete aluminium and related metal works,
                with project management until handing over to clients or end
                users.
              </li>
              <li>
                Clients and Designers’ consultancy, project-wise, to
                architectural address according to specifications and client
                requirements.
              </li>
              <li>
                Contracting & subcontracting for design, engineering,
                procurement, fabrication, supply, and installation of all kinds
                of architectural and non-architectural aluminium works.
              </li>
            </motion.ul>
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
                  SYSTEMS
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                The Division is licensed for fabrication and installation of the
                modern glazing systems engineered by Elite Group:{" "}
              </motion.p>
              <motion.ul
                className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                <li>
                  THERMOS 110® and THERMOS 120® sliding series (thermal break).
                </li>
                <li>ECO 500® casement and sliding series (thermal break).</li>
                <li>
                  Elegant 65® & Elegant 50® Structural Glazing System (thermal
                  break).
                </li>
                <li>
                  AL-WIN 80® casement series and AL-WIN 105® sliding series
                  (non-thermal break).
                </li>
              </motion.ul>
            </div>
            <motion.div
              className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/ourgroups/fabrications/system1.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/ourgroups/fabrications/system2.jpeg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/ourgroups/fabrications/system3.jpeg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />

                <Image
                  src="/ourgroups/fabrications/system4.jpg"
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
                  SERVICES
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                We offer a complete service from the initial concept to project
                completion, following our sequential methodology:
                <br />
                Consultancy → Shop drawings → Materials take-off → Material
                submittal → Works program → Procurement → Fabrication → Quality
                control → Supply → Installation → Testing → Handover.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
