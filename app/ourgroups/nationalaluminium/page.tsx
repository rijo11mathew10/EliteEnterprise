"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { WobbleCardDemo } from "@/components/ourgroups/OurProducts";

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
  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[450px] flex items-center justify-center mb-16"
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
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              National
              <br />
              Aluminium Extrusion LLC
            </h1>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto  max-w-7xl">
        <div>
          <div className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center">
            {/* Text Column */}
            <div className="col-span-7">
              <div className="flex gap-3 mb-12">
                <hr className="w-2 h-24 bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                  REPUTATION - <br />
                  OUR PRIDE
                </h2>
              </div>
              <p className="text-[#484848] mb-8">
                We seek to provide excellent products that exceed Aluminum is a
                widely used metal for countless applications in the nowadays
                society. Strength, light-weight, corrosion resistance, thermal
                conductive, durability, no-toxic, recycling are just a few of
                the several advantages of this metal. Two of the most common
                compounds are alum, such as potassium aluminum sulfate and
                aluminum oxide. About 8% of the earth's crust is composed of
                aluminum.
              </p>
              <p className="text-[#484848] mb-8">
                The facility spread across an area of 50,000 square meters in
                which extrusion presses of 7” and 8” are assembled to extrude
                18,000 MT per annum. Additional units include a modern die
                correction station, ageing oven and ancillary equipment and the
                office building for the management, sales and administration
                staff.
              </p>
              <p className="text-[#484848]">
                The Company is recognized as one of the most effective partner
                for customer service that is consistent with on-time delivery of
                quality products. Large quantity of aluminium extruded profiles
                can be supplied even at short notice tanks to the organized
                workflow which is a distinctive sign.
              </p>
            </div>

            {/* Logo Column */}
            <div
              className="col-span-5 border-5 border-[#E8D858] relative"
              style={{ height: "400px" }}
            >
              <div className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 flex items-center">
                <Image
                  src={"/ourgroups/nationalaluminium/nationalaluminium.png"}
                  width={300}
                  height={300}
                  alt=""
                  className="shadow-lg border-8 border-[#E8D858]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*banner*/}
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/banner.jpg')", // Replace with your image
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
        }}
      >
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
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative text-white text-left text-4xl md:text-6xl font-bold z-10"
        >
          IMPRESSIVE INFRASTRUCTURE{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-base md:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          At National Aluminium we take pride in constantly working hard to
          optimize our manufacturing capacity which recognizes the needs of our
          customers and stakeholders. The modern facility places us at a
          distinctive advantage.
        </motion.p>
      </div>

     <div>
        
     </div>

      <div className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center">
        {/* Left Column */}
        <div className="col-span-4 bg-[#023D68] p-6 text-white relative">
          <div className="flex flex-col gap-4">
            <Image
              src={"/ourgroups/eliteextrusion/largescale.jpg"}
              alt=""
              width={350}
              height={180}
              className="shadow-lg border-3 border-[#E8D858] relative translate-x-14" // Overlaps to the right
            />
            <Image
              src={"/ourgroups/eliteextrusion/largescale2.jpg"}
              alt=""
              width={350}
              height={180}
              className="shadow-lg border-3 border-[#E8D858] relative translate-x-14" // Overlaps to the right
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-8 border-[#E8D858] border-1 border-r-8 pl-20">
          <h2 className="text-6xl text-[#023D68] font-bold mb-8">
            LARGE SCALE OF OPERATIONS
          </h2>
          <p className="text-[#484848] leading-8">
            Massive stockpiles of Aluminium alloy logs are systematically stored
            to cater to projects of any scale. Our system is flexible enough to
            handle demands from a small architectural challenge to a world-class
            one.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center">
        {/* Larger Column */}
        <div className="col-span-8 border-[#E8D858] border-1 border-l-8 p-6">
          <h2 className="text-6xl text-[#023D68] font-bold mb-8">
            ADVANCED POWDER COATING MACHINES
          </h2>
          <p className="text-[#484848] leading-8">
            A high capacity vertical powder coating machine is installed at
            Elite Extrusion. The production capacity is 14,400 MT per annum. The
            advanced machine swiftly coats the extrusions to perfection. Their
            usage means few operators and more output compared to horizontal
            plants. This is one of the highlights of the powder coating plants
            here.
          </p>
        </div>

        {/* Smaller Column */}
        <div className="col-span-4 bg-[#023D68] p-6 text-white">
          <div className="flex flex-col gap-4">
            <Image
              src={"/ourgroups/eliteextrusion/advancedpowder.jpg"}
              alt=""
              width={350}
              height={180}
              className=" shadow-lg -ml-10 border-3 border-[#E8D858]"
            />
            <Image
              src={"/ourgroups/eliteextrusion/advancedpowder2.jpg"}
              alt=""
              width={350}
              height={100}
              className=" shadow-lg -ml-10 border-3 border-[#E8D858]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center">
        {/* Left Column */}
        <div className="col-span-4 bg-[#023D68] p-6 text-white relative">
          <div className="flex flex-col gap-4">
            <Image
              src={"/ourgroups/eliteextrusion/anodizingto.jpg"}
              alt=""
              width={350}
              height={180}
              className="shadow-lg border-3 border-[#E8D858] relative translate-x-14" // Overlaps to the right
            />
            <Image
              src={"/ourgroups/eliteextrusion/anodizingto2.jpg"}
              alt=""
              width={350}
              height={180}
              className="shadow-lg border-3 border-[#E8D858] relative translate-x-14" // Overlaps to the right
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-8 border-[#E8D858] border-1 border-r-8 pl-20">
          <h2 className="text-6xl text-[#023D68] font-bold mb-8">
            ANODIZING TO PERFECTION{" "}
          </h2>
          <p className="text-[#484848] leading-8">
            Aluminium oxide is hard, durable and weather resistant. Anodizing is
            an electrochemical process that forms a protective coating of
            Aluminium oxide on the surface of Aluminium. The coating is offered
            in silver, gold and bronze finishes.
          </p>
          <p className="text-[#484848] leading-8">
            This process is only appropriate on certain Aluminium alloys. Some
            of the advantages of anodizing include:
          </p>
          <ul className="text-[#484848] leading-8">
            <li>- Generally less expensive</li>
            <li>- Longer life; low maintenance</li>
            <li>- Unaffected by sunlight</li>
          </ul>
          <p className="text-[#484848] leading-8">
            The unit is certified with Qualanod, and has an annual production
            capacity of 7,200 MT.
          </p>
        </div>
      </div>

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
