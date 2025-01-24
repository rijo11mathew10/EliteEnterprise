"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { WobbleCardDemo } from "@/components/ourgroups/OurProducts";
import CustomSection from "@/components/CustomSection";

function page() {
  const productData = [
    {
      imageSrc: "/ourgroups/nationalaluminium/product1.jpg",
      title: "MILL FINISH PROFILES",
    },
    {
      imageSrc: "/ourgroups/nationalaluminium/product2.jpg",
      title: "ANODIZED PROFILES",
    },
    {
      imageSrc: "/ourgroups/nationalaluminium/product3.jpg",
      title: "POWDER COATED PROFILES",
    },
    {
      imageSrc: "/ourgroups/nationalaluminium/product4.jpg",
      title: "WOOD FINISH PROFILES",
    },
  ];
  const sections = [
    { title: "Extrusion", value: "18,000", unit: "Metric Tone" },
    { title: "Powder Coating", value: "12,000", unit: "Metric Tone" },
    { title: "Anodizing", value: "4,000", unit: "Metric Tone" },
  ];

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
          className="relative z-0 text-center px-4 flex justify-center items-center h-screen"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
            <h1 className="text-white font-semibold">
              {/* Elite */}
              <span className="text-4xl md:text-7xl block">NATIONAL</span>
              {/* Extrusion LLC */}
              <span className="text-2xl md:text-4xl text-white text-opacity-70 block font-medium">
                ALUMINIUM EXTRUSION LLC
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
                  REPUTATION - <br />
                  OUR PRIDE
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
                aluminum oxide. About 8% of the earth&#39;s crust is composed of
                aluminum.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                The facility spread across an area of 50,000 square meters in
                which extrusion presses of 7” and 8” are assembled to extrude
                18,000 MT per annum. Additional units include a modern die
                correction station, ageing oven and ancillary equipment and the
                office building for the management, sales and administration
                staff.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                The Company is recognized as one of the most effective partner
                for customer service that is consistent with on-time delivery of
                quality products. Large quantity of aluminium extruded profiles
                can be supplied even at short notice tanks to the organized
                workflow which is a distinctive sign.
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
                  "url('/ourgroups/nationalaluminium/nalexco.jpg')", // Replace with your image path
                backgroundSize: "cover", // Ensures the image completely fills the div
                backgroundPosition: "right", // Centers the image in the div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
              }}
            >
              <Image
                src={"/ourgroups/nationalaluminium/nationalaluminium.png"}
                width={200}
                height={200}
                alt=""
                className=" hidden sm:block shadow-lg border-8 border-[#E8D858] absolute lg:-top-36"
              />
            </motion.div>
          </motion.div>

          {/* Full-Width Section */}
        </div>
      </div>
      <div className="hidden sm:block">
        <CustomSection sections={sections} />
      </div>
      {/*banner*/}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/nationalaluminium/nalexco.mp4"
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
          IMPRESSIVE INFRASTRUCTURE{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          At National Aluminium we take pride in constantly working hard to
          optimize our manufacturing capacity which recognizes the needs of our
          customers and stakeholders. The modern facility places us at a
          distinctive advantage.
        </motion.p>
      </div>
      <div className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center">
        {/* Larger Column */}
        <motion.div
          className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-l-8 pl-6 pr-6 md:pr-10 py-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl text-[#023D68] font-bold mb-8 md:mb-12">
            WORLD-CLASS INFRASTRUCTURE
          </h2>
          <p className="text-[#484848] leading-6 md:leading-8 mb-8 md:mb-16 text-justify lg:pr-6">
            The Company operates out of a sprawling campus area of 50,000 square
            metres with modern extrusion presses to supply bespoke aluminium
            profiles to quality-conscious customers. This includes PLC
            controlled extrusion presses of 7” and 8” container size, assembled
            to extrude 18,000 MT of top quality extrusions per annum.
          </p>

          <Image
            src={"/ourgroups/nationalaluminium/nationalimage.jpg"}
            alt=""
            width={400}
            height={80}
            className="w-full mb-8 md:mb-16 h-40 object-cover lg:pr-6"
          />

          <h2 className="text-4xl md:text-5xl text-[#023D68] font-bold mb-8 md:mb-12">
            VERTICAL POWDER COATING PLANTS
          </h2>
          <p className="text-[#484848] leading-6 md:leading-8 text-justify lg:pr-6">
            Nalexco boasts a European state-of-the-art vertical powder coating
            line. The customized unit has a capacity of 12,000 MT per year to
            offer finishes in all RAL colours. Equipment includes a full-scale
            chemical laboratory to monitor the coating process, pre-treatment,
            chemicals and the cleansing of the aluminium profiles.
          </p>
        </motion.div>

        {/* Smaller Column */}
        <div className="col-span-12 md:col-span-4 bg-[#023D68] p-6 text-white md:block hidden">
          <div className="flex flex-col gap-4">
            {["imagegrid1", "imagegrid2", "imagegrid3", "imagegrid4"].map(
              (img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="shadow-lg border-3 border-[#E8D858] -ml-14"
                >
                  <Image
                    src={`/ourgroups/nationalaluminium/${img}.jpg`}
                    alt=""
                    width={350}
                    height={180}
                    className="w-full"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
      ;
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
