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
  initial={{ opacity: 0, y: 10 }}  // Reduced y value
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 3, ease: "easeOut" }}
>
  <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
    <h1 className="text-white font-semibold">
      <span className="text-4xl md:text-7xl block">ALUMIL</span>
      <span className="text-2xl md:text-4xl text-white text-opacity-70 block font-medium">
        TECH GULF LLC
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
    viewport={{ once: true, amount: 0.3 }}  // Adjust the amount for triggering animation earlier
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
          EXPERTISE<br></br>OUR STRENGTH{" "}
        </h2>
      </motion.div>
      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
        Alumill Tech Gulf LLC is one of the foremost industrial leaders
        in top quality aluminum flat-rolled products, color coated coils
        and sheets. The manufacturing plant operates out of a
        wide-spread campus of over 55,000 square meters in the
        industrial area of Ras Al Khaimah (U.A.E.).
      </motion.p>
      <motion.p
        className="text-[#484848] text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      >
        The integrated Cast House provides continuous production of Cast
        Coils suitable for subsequent Cold Rolling Mill process, based
        on the advanced technology of Presezzi SpA (Italy). The
        state-of-the-art line is fully equipped lab for end-to-end
        testing solutions of materials.
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
        backgroundImage: "url('/ourgroups/alumiltech/ALUMILL.jpg')", // Replace with your image path
        backgroundSize: "cover", // Ensures the image completely fills the div
        backgroundPosition: "center", // Centers the image in the div
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <Image
        src={"/ourgroups/alumiltech/image.png"}
        width={200}
        height={200}
        alt="United Logo"
        className="shadow-lg border-8 border-[#E8D858] absolute top-0 transform -translate-y-1/2"
      />
    </motion.div>
  </motion.div>
</div>

        <div className="flex flex-col mx-auto pl-6">
          <motion.h2
            className="text-3xl font-semibold text-[#023D68] mb-8"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            ALUMILL PRODUCTION PROCESS
          </motion.h2>
          <motion.h3
            className="text-2xl font-semibold text-[#023D68] mb-4"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            - Colour Coating Line
          </motion.h3>
          <motion.p
            className="text-[#484848] text-justify mb-3 leading-8 pr-5"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            The coil coating process is the most efficient means of coating aluminum. It is a continuous, high-volume process that produces a consistent product. The aluminum substrate gets degreased, chemically pre-treated and coated. Typical paint system requirements are formability, scratch-resistance, appearance and weather ability.
          </motion.p>
          <motion.h3
            className="text-2xl font-bold text-[#023D68] mb-4 "
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            - Cast House
          </motion.h3>
          <motion.p
            className="text-[#484848] text-justify mb-3 leading-8 pr-5"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            In the cast house continuous casting and rolling process is adopted
            in which hot metal, after being continuously cast as cast coil form.
            In melting furnace alloyed preparation is taken place and there
            after hot metal is transferred to the holding furnace, then
            degassing and filtration is taking place.
          </motion.p>
          <motion.h3
            className="text-2xl font-bold text-[#023D68] mb-4"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            - Cold Rolling Mill
          </motion.h3>
          <motion.p
            className="text-[#484848] text-justify mb-3 leading-8 pr-5"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Cast coils are then processed in the cold rolling mill to customer’s
            required thickness and further treated in the annealing furnace to
            achieve the required temper and strength. The cold rolling mill
            machine is equipped with reversible automatic gauge control (AGC)
            and able to produce the closest tolerance required meeting the
            stringent worldwide standards.
          </motion.p>
          <motion.h3
            className="text-2xl font-bold text-[#023D68] mb-4"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            - Finishing lines, Tension Leveling & Cut-to-length
          </motion.h3>
          <motion.ul
            className="text-[#484848] mb-3 leading-8 pr-5"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Cold Rolled Coils are processed in the Finishing Department for
            further process as per customer’s requirement as:
            <li>- Tension leveling to improve the flatness prior to coating</li>
            <li>- Cut-to-length for final coil and sheet production</li>
            <li>- Side trimming for coils</li>
            <li>- Roll forming for roofing products</li>
            <li>- Embossing line for stucco finishing</li>
          </motion.ul>
          <motion.h3
            className="text-2xl font-bold text-[#023D68] mb-4 "
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            - Melting and Holding Furnaces
          </motion.h3>
          <motion.p
            className="text-[#484848] text-justify mb-3 leading-8 pr-5"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Pure aluminum ingots are melted and alloyed with other elements by
            means of master alloy such as iron, silicon, manganese and
            magnesium. The material is analyzed and adjusted to ensure that the
            correct composition is achieved. This is then transferred to the
            holding furnace for direct casting.
          </motion.p>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/alumiltech/alumilltech.mp4"
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
          IMPRESSIVE PRODUCTION FACILITY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          The aluminium rolling mill and coating line division is also suitably
          supported by in house laboratory facilities and end-to-end material
          tests at all levels. The plant has an ultra modern state of the art
          machinery meeting the requirements of industrial and aluminum
          architecture segments with an uncompromising quality of the products.
          Its high tech machinery has a production capacity of 25,000 MT per
          annum.
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
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-l-8 p-24"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold ">
              PERFECT <br></br>COMPOSITION
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
                src="/ourgroups/alumiltech/alumill2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/alumiltech/alumill1.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="grid grid-cols-12 items-center p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          {/* Image Column */}
          <motion.div
            className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="flex flex-col gap-4">
              <Image
                src="/ourgroups/alumiltech/alumill9.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858] relative translate-x-14"
              />
              <Image
                src="/ourgroups/alumiltech/alumill8.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858] relative translate-x-14"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-r-8 pl-6 md:pl-20 p-24"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold ">
              CONTINUOUS <br></br>CASTER
            </h2>
          </motion.div>
        </motion.div>

        {/* Third Section */}
        <motion.div
          className="grid grid-cols-12 items-center p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          {/* Text Column */}
          <motion.div
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-l-8 p-24"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold ">
              SURFACE COATING <br></br>LINE{" "}
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
                src="/ourgroups/alumiltech/alumill4.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/alumiltech/alumill5.png"
                alt=""
                width={350}
                height={100}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Fourth Section */}
        <motion.div
          className="grid grid-cols-12 items-center p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          {/* Image Column */}
          <motion.div
            className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="flex flex-col gap-4">
              <Image
                src="/ourgroups/alumiltech/alumill6.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858] relative translate-x-14"
              />
              <Image
                src="/ourgroups/alumiltech/alumill7.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858] relative translate-x-14"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-r-8 pl-6 md:pl-20 p-24"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold">
              CUSTOMISED <br></br> FINISH
            </h2>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
