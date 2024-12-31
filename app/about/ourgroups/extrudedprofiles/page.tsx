"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import { WobbleCards } from "@/components/ourgroups/globalpioneer/WobbleSection";

const productData1 = [
  {
    imageSrc: "/ourgroups/globalpioneer/railing_one.png",
    title: "Railing",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/railing_two.png",
    title: "Railing",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/railing_three.png",
    title: "Railing",
  },
];
const productData2 = [
  {
    imageSrc: "/ourgroups/globalpioneer/systems1.jpg",
    title: "Systems",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/systems2.jpg",
    title: "Systems",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/systems3.jpg",
    title: "Systems",
  },
];
const productData3 = [
  {
    imageSrc: "/ourgroups/globalpioneer/samples1.jpg",
    title: "Samples",
  },
  {
    imageSrc: "/ourgroups/globalpioneer/samples2.jpg",
    title: "Samples",
  },
];

const column1 = [
  {
    list: "- Curtain Wall systems",
  },
  {
    list: "- Unitised Curtain Wall Systems",
  },
  {
    list: "- Frameless facades / spider systems",
  },
  {
    list: "- Aluminium doors/ windows / fronts",
  },
  {
    list: "- Security and decorative claustras",
  },
  {
    list: "- 2 & 4 sides structural glazing",
  },
];

const column2 = [
  {
    list: "- Metal claddings and composite panels",
  },
  {
    list: "- Aluminium Pergolas",
  },
  {
    list: "- Aluminium and stainless steel handrails and balustrades",
  },
  {
    list: "- Roof domes and sky lights",
  },
  {
    list: "- Thermal & non-thermal break systems",
  },
  {
    list: "- Rolling shutters",
  },
];



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
              <span className="text-4xl md:text-7xl block">EXTRUDED PROFILES</span>
              {/* Extrusion LLC */}

            </h1>
          </div>
        </motion.div>
      </div>
      <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
          Elite Group of Companies through the Extrusion subsidiaries deploy 7 extrusion lines offering a wide array of premium, innovative products for any architectural and non-architectural applications.            
          </motion.p>
          <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >

          We process mill finish profiles, powder coated profiles (vertical & horizontal lines), wood coated profiles and anodized profiles          </motion.p>

          <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >

The 6xxx series are the ones most selected for extrusion applications: </motion.p>             
      <motion.ul
                className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
        
                <li>
                ALLOYS AA 6063, 6061, 6082                </li>
                <li>
                TEMPER T4, T6                </li>
                </motion.ul>
      
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
                MILL FINISH <br />
                PROFILES
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
              Windows & doors (casement, sliding & hinged version), full glazing systems, curtain walls, cladding & roofing, shop fronts louvers & grills, handrails & balustrades, kitchen profiles, furniture & partitions. So as HVAC scope, piping & ducting, sign board, scaffolding sections among others.                </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >

              In addition we offer all the most common section like squared & round bars, equal & unequal angles, rectangular & squared tubes with different design, dimensions and thicknesses.                </motion.p>
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
                src="/ourgroups/globalpioneer/globalpioneer3.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
                            <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
                            <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
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
          src="/ourgroups/globalpioneer/globalpioneer3.png"
          alt=""
          width={350}
          height={180}
          className="shadow-lg border-3 border-[#E8D858]"
        />
        <Image
          src="/ourgroups/globalpioneer/globalpioneer2.png"
          alt=""
          width={350}
          height={180}
          className="shadow-lg border-3 border-[#E8D858]"
        />
        <Image
          src="/ourgroups/globalpioneer/globalpioneer2.png"
          alt=""
          width={350}
          height={180}
          className="shadow-lg border-3 border-[#E8D858]"
        />
        <Image
          src="/ourgroups/globalpioneer/globalpioneer2.png"
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
        POWDER COATED  <br />
        PROFILES
        </h2>
      </motion.div>
      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
      The extrusion is “QUALICOAT” certified for high quality Powder Coated Aluminium Profiles, coating with vertical & horizontal high capacity European plants.      </motion.p>
        
      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
      Powder coating is a type of coating that is applied as a free-flowing, dry powder. The coating is typically applied electrostatically and is then cured under heat to allow it to flow and form a “skin”. The powder may be a thermoplastic or a thermoset polymer and it is usually used to create a hard finish that is tougher than conventional paint. It prevents from high corrosion in acidic and alkaline environments.        </motion.p>
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
                WOOD COATED <br />
                PROFILES
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
              The wood effect finishing is a film coating process offer a perfect integration with the aluminum properties and offering a natural appearance of wood. The products have stable quality, appealing appearance and therefore a higher value of decoration.                </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
              The wood pattern coating can be cured and transferred to the surface of aluminum profile under a temperature of 200 degree Celsius and reach a usual thickness of 60 μm.              </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
              The wood effect can be applied to any profile for exterior and interior design such as window profiles or kitchen cabinet.              </motion.p>


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
                src="/ourgroups/globalpioneer/globalpioneer3.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
                <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />

                <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
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
          src="/ourgroups/globalpioneer/globalpioneer3.png"
          alt=""
          width={350}
          height={180}
          className="shadow-lg border-3 border-[#E8D858]"
        />
        <Image
          src="/ourgroups/globalpioneer/globalpioneer2.png"
          alt=""
          width={350}
          height={180}
          className="shadow-lg border-3 border-[#E8D858]"
        />
        <Image
          src="/ourgroups/globalpioneer/globalpioneer2.png"
          alt=""
          width={350}
          height={180}
          className="shadow-lg border-3 border-[#E8D858]"
        />
        <Image
          src="/ourgroups/globalpioneer/globalpioneer2.png"
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
        ANODIZED 
 <br />
        PROFILES
        </h2>
      </motion.div>
      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
      The extrusion is “QUALICOAT” certified for high quality Powder Coated Aluminium Profiles, coating with vertical & horizontal high capacity European plants.       </motion.p>
        
      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
      The aluminum profiles serves as the anode, so the electrolyte releases oxygen ions on the profile’ surface. The oxygen simultaneously react with the aluminum surface to form a hard oxide film. The full process includes pre-treatment and post-treatment and is called anodizing because the part to be treated forms the anode electrode of an electrical circuit.      </motion.p>

      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
      Anodizing increases resistance to corrosion, offer aesthetic touch and provides better adhesion for paint primers and glues than bare metal.      </motion.p>
    </div>
  </motion.div>
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
                THERMAL BREAK <br />
                PROFILES
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
              We extrude aluminum sections suitable for further crimping for thermal break profiles & systems. In architecture and building construction a thermal break is an element of low thermal conductivity placed in an assembly to reduce or prevent the flow of thermal energy between conductive materials               </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
              Subsequently aluminum windows and doors separating the frame into two separate interior and exterior pieces joined with a less conductive material reduces temperature transfer. Thermal breaks are made of hardy, rigid, low thermal conductive polyamide or polyurethane which is mechanically locked in aluminum window framing. Moreover thermal breaks can have the added benefit of reducing sound transmittance by dampening vibration.               </motion.p>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
            We have incorporated certified glazing systems:              
            </motion.p>
            <motion.ul
                className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
        
                <li>
                THERMOS 110® and THERMOS 120® sliding series, thermal break.              </li>
                <li>
                ECO 500 ® casement and sliding series, thermal break.              </li>
                <li>Elegant 65® & Elegant 50® Structural Glazing System, thermal break.</li>
                <li>AL-WIN 80® casement series and AL-WIN 105® sliding series, no-thermal break.</li>

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
                src="/ourgroups/globalpioneer/globalpioneer3.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
                <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />

                <Image
                src="/ourgroups/globalpioneer/globalpioneer2.png"
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
          CONSULTANCY
          </h2>

          
        </motion.div>
        <motion.p
  className="text-[#484848] mb-6 text-justify md:pr-7"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 2.0 }}
>
  Elite Group would be glad to provide technical & commercial support to identify the suitable aluminium solution, suggest the right profile section with minimum size for Project feasibility:

</motion.p>
<motion.ul
                className="text-[#484848] text-justify md:pr-7 list-disc pl-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
        
        <li>Review of the architectural designs, project specifications, and all associated reference documentation</li>
  <li>Shop Drawings</li>
  <li>Wind Loads Calculations</li>
  <li>Thermal Analysis</li>
  <li>Structural Calculation</li>
  <li>Die Drawings</li>
  <li>Fabrication Drawings</li>
  <li>M.T.O (Material Take Off)</li>
  <li>As-Built Drawings</li>
                </motion.ul>

      </div>
    </motion.div>
  </div>

 


      <Footer />
    </div>
  );
}

export default page;
