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
              <span className="text-4xl md:text-7xl block">
                COILS AND SHEETS
              </span>
              {/* Extrusion LLC */}
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="mx-4 md:mx-40 max-w-7xl mb-16"><br></br>
      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
        Alumill Tech Gulf LLC is one of the foremost industrial leaders in top
        quality aluminum flat-rolled products, color coated coils and sheets.
        The factory is one of the largest in all aluminum industry in the Middle
        East and currently the only producer of continuous casting & Cold
        rolling Mill in the United Arab Emirates
      </motion.p>
      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
        Allmill Tech Gulf manufacturing plant operates out of a wide-spread
        campus of over 55,000 square meters in the industrial area of Ras Al
        Khaimah (U.A.E.).{" "}
      </motion.p>

      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
        The integrated cast house provides continuous production for subsequent
        rolling mill process of coils, based on the advanced technology of
        Presezzi SpA (Italy). The state-of-the-art line is fully equipped lab
        for end-to-end testing solutions of materials.{" "}
      </motion.p>
      {/* <motion.ul
        className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      >
        <li>ALLOYS AA 6063, 6061, 6082 </li>
        <li>TEMPER T4, T6 </li>
      </motion.ul> */}
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
                  CAST COILS
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                We offer high quality Cold Rolled Pure aluminium ingots are
                melted in the furnace, alloyed and analysed to ensure that the
                correct composition is achieved. The alloy is created and
                transferred to the holding furnace for direct casting.{" "}

              </motion.p>
             
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                In the Cast House the hot metal is continuously casted and
                solidified in the shape of coil form. Subsequently trimmed in
                the caster machine with on line edge milling for the next
                multi-stage rolling mill.{" "}
              </motion.p>
              <br></br>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Fields of Applications:{" "}
                
              </motion.p>
              <br></br>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Roofing & Claddings, Rolling shutters, Facade & Awnings,
                Interior ceilings, Transportation Vehicles etc.{" "}
              </motion.p>
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
                  src="/coilsandsheets/coil1.png"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/coilsandsheets/coil2.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/coilsandsheets/coil4.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/coilsandsheets/coil3.jpg"
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
                src="/coilsandsheets/sheet1.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/coilsandsheets/sheet2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/coilsandsheets/sheet3.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              {/* <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              /> */}
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
                COLD ROLLED <br />
                COILS AND SHEETS
              </h2>
            </motion.div>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              We offer high quality Cold Rolled coils are processed in the
              rolling mill to reach the thickness as per customer’s specific
              requirement.{" "}
            </motion.p>

            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              The reversible rolling mill is equipped with automatic gauge
              measuring unit on each side to have a precise control on
              thicknesses and minimum tolerances. Further treatment in the
              annealing furnace is processed to achieve the required
              temper-strength.{" "}
            </motion.p>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              Tension Levelling - Cut to Length Line - Slitting Line - Embossing
              Line{" "}
            </motion.p>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              The tension levelling line aim to test and improve the flatness of
              the material prior to coating or cut to length for final output of
              coils and sheets. The slitting line for side trimmings and exact
              required size for mill finish or coated coils.{" "}
            </motion.p>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              Alumill Tech can process an additional step to emboss the
              aluminium surface in mill finish or coated coils & sheets.{" "}
            </motion.p>
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
                  COLOR COATED <br />
                  COILS
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                We offer high quality Cold Rolled The coil coating process it is
                a high-volume operation that produces a perfect finish based on
                a liquid application of the common resins such as Polyester (PE)
                and Polyvinylidene fluoride (PVDF). The process involves
                uncoiling, chemical pre-treatment, application of primer & top
                coating and recoiling.{" "}
              </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Fields of Applications:{" "}
              </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Roofing & Claddings, Rolling shutters, Facade & Awnings,
                Interior ceilings, Transportation Vehicles etc.{" "}
              </motion.p>
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
                  src="/coilsandsheets/colorcoated1.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/coilsandsheets/colorcoated2.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/coilsandsheets/colorcoated4.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />

                <Image
                  src="/coilsandsheets/colorcoated3.jpg"
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
                  STANDARD <br />
                  PACKING
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Aluminium coils export standard sea worthy wooden pallet eye to
                wall (Horizontal Type){" "}
              </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Aluminium coils export standard sea worthy wooden pallet eye to
                sky (Vertical Type){" "}
              </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Aluminium sheets export standard sea worthy wooden pallet with
                interleaving paper in between{" "}
              </motion.p>
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
                  src="/coilsandsheets/packingcoil1.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/coilsandsheets/packingsheet1.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/coilsandsheets/packingcoil4.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />

                <Image
                  src="/coilsandsheets/packingcoil3.jpg"
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

      <Footer />
    </div>
  );
}

export default page;
