"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

function Page() {
  const sectionData = [
    {
      heading: "ELITE EXTRUSION",
      cards: [
        {
          date: "Brochure",
          title: "Elite Extrusion LLC is undoubtedly among the GCC leaders for aluminium extrusions......",
          pdf: "/ourgroups/pdf/brochureelite.pdf",
        },
        {
          date: "Credit Application",
          title: "Credit Application Form",
          pdf: "/ourgroups/pdf/creditformelite.pdf",
        },
        {
          date: "Thermal Break",
          title: "Thermos 110",
          pdf: "/ourgroups/pdf/thermal.pdf",
        },
        {
          date: "General Catalogue",
          title: "Elite Extrusion LLC, setup in the sprawling 60,000 square meter campus, is the Most....",
          pdf: "/ourgroups/pdf/catalogue.pdf",
        },
      ],
    },
    {
      heading: "CLASSIC EXTRUSION",
      cards: [
        {
          date: "ECO 500 Thermal Break",
          title: "Sliding",
          pdf: "/ourgroups/pdf/sliding.pdf",
        },
        {
          date: "ECO 500 Thermal Break",
          title: "Casement",
          pdf: "/ourgroups/pdf/casement.pdf",
        },
        {
          date: "Elegant 65",
          title: "Curtain Wall",
          pdf: "/ourgroups/pdf/curtainwall.pdf",
        },
        {
          date: "Credit Application",
          title: "Credit Application Form",
          pdf: "/ourgroups/pdf/creditclassic.pdf",
        },
        {
          date: "General Catalogue",
          title: "We are oriented to fulfill our obligation to customers most expeditiously and diligently...",
          pdf: "/ourgroups/pdf/catalogueclassic.pdf",
        },
      ],
    },
    {
      heading: "NATIONAL ALUMINUM EXTRUSION (NALEXCO)",
      cards: [
        {
          date: "Brochure",
          title: "National Aluminium Extrusion Co. LLC (NALEXCO) is one of the leading companies for extrusion.......",
          pdf: "/ourgroups/pdf/brochurenalexco.pdf",
        },
        {
          date: "Credit Application",
          title: "Credit Application Form",
          pdf: "/ourgroups/pdf/formnalexco.pdf",
        },
        {
          date: "General Catalogue",
          title: "2024",
          pdf: "/ourgroups/pdf/cataloguenalexco.pdf",
        },
      ],
    },
    {
      heading: "ALUMILL TECH GULF",
      cards: [
        {
          date: "Brochure",
          title: "Alumill Tech Gulf LLC is one of the foremost industrial leaders in top quality aluminium flat......",
          pdf: "/ourgroups/pdf/brochurealumill.pdf",
        },
        {
          date: "Credit Application",
          title: "Credit Application Form",
          pdf: "/ourgroups/pdf/formalumill.pdf",
        },
      ],
    },
    {
      heading: "THERMOSET MIDDLE EAST",
      cards: [
        {
          date: "Brochure",
          title: "Thermoset Middle East LLC is an ISO 9001:2008 certified manufacturer of premium quality.....",
          pdf: "/ourgroups/pdf/brochurethermo.pdf",
        },
        {
          date: "General Catalogue",
          title: "EPDM Rubber profiles",
          pdf: "/ourgroups/pdf/cataloguethermo.pdf",
        },
        {
          date: "Credit Application",
          title: "Credit Application Form",
          pdf: "/ourgroups/pdf/formthermo.pdf",
        },
      ],
    },
    {
      heading: "GLOBAL PIONEER ALUMINUM INDUSTRIES",
      cards: [
        {
          date: "Brochure",
          title: "Global Pioneer Aluminium Industries LLC it’s a specialized company in designing, engineering, fabrication.....",
          pdf: "/ourgroups/pdf/brochuregp.pdf",
        },
        {
          date: "Global Air Brochure",
          title: "Prefered for Air vents",
          pdf: "/ourgroups/pdf/brochuregpair.pdf",
        },
        {
          date: "Global Air Diffusers",
          title: "Linear Slot",
          pdf: "/ourgroups/pdf/brochuregpairdif.pdf",
        },
        {
          date: "Global Air Ceiling",
          title: "Diffusers & Perforate",
          pdf: "/ourgroups/pdf/brochuregpairdiffper.pdf",
        },
        {
          date: "Global Air Exhaust",
          title: "Exhaust & Air Louvers",
          pdf: "/ourgroups/pdf/brochuregpexhaust.pdf",
        },
        {
          date: "Global Air Grilles and Registers",
          title: "Grilles and Registers",
          pdf: "/ourgroups/pdf/brochuregpgrills.pdf",
        },
        {
          date: "Global Air Linear Grilles",
          title: "Grilles and Registers",
          pdf: "/ourgroups/pdf/brochuregplingrills.pdf",
        },
        {
          date: "Global Air Diffusers",
          title: "Circular Ceiling",
          pdf: "/ourgroups/pdf/brochuregpcircular.pdf",
        },
        
      ],
    },
    {
      heading: "UNITED POWDER COATING",
      cards: [
        {
          date: "Brochure",
          title: "United Powder Coating (UPC) is the Elite Group subsidiary specialized in powder coating.....",
          pdf: "/ourgroups/pdf/brochureupc.pdf",
        },
      ],
    },
    {
      heading: "ELITE GROUP OF COMPANIES",
      cards: [
        {
          date: "Elite Group Pre-Qualification Document",
          title: "Innovation and leadership are two terms usually associated with Elite Group of Companies....",
          pdf: "/ourgroups/pdf/qualification.pdf",
        },
        {
          date: "Elite Group General Catalogue",
          title: "In a span of seven years Elite Group of Companies has grown from being a single company...",
          pdf: "/ourgroups/pdf/general.pdf",
        },
      ],
    },
    {
      heading: "GLAZETECH",
      cards: [
        {
          date: "Alwin 80 Casement",
          title: "",
          pdf: "/ourgroups/pdf/80case.pdf",
        },
        {
          date: "Alwin 105 Sliding",
          title: "",
          pdf: "/ourgroups/pdf/105.pdf",
        },
        {
          date: "Eco 500 TB Casement",
          title: "",
          pdf: "/ourgroups/pdf/500tb.pdf",
        },
        {
          date: "Eco 500 TB Sliding",
          title: "",
          pdf: "/ourgroups/pdf/500tbs.pdf",
        },
        {
          date: "Lift and Slide Catalogue",
          title: "",
          pdf: "/ourgroups/pdf/lsc.pdf",
        },
        {
          date: "Slim Slide Catalogue",
          title: "",
          pdf: "/ourgroups/pdf/ssc.pdf",
        },
        {
          date: "Thermo 110 TB",
          title: "",
          pdf: "/ourgroups/pdf/110tb.pdf",
        },
        {
          date: "Elegant Curtain Wall",
          title: "",
          pdf: "/ourgroups/pdf/ecw.pdf",
        },
      ],
    },
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
          className="relative z-0 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
            <h1 className="text-white font-semibold">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block">DOWNLOADS</span>
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Render All Sections with Unique Titles and PDFs */}
      {sectionData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <motion.div
            className="flex gap-3 mb-8 mt-8 ml-8 sm:ml-16 md:ml-32"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <hr className="w-2 h-8 md:h-12 bg-[#E8D858] border-none" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023D68] leading-tight">
              {section.heading}
            </h2>
          </motion.div>

          <div className="mx-4 sm:mx-8 md:mx-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {section.cards.map((card, cardIndex) => (
              <motion.div
                key={cardIndex}
                className="mx-4 p-4 border-b-4 mb-8 border-[#E8D858] shadow-md rounded-lg bg-white"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                <h3 className="text-lg font-bold text-[#023D68] mb-2">{card.date}</h3>
                <p className="text-sm text-[#484848] mb-4">{card.title}</p>
                <a
                  href={card.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#023D68] font-bold text-sm hover:text-[#E8D858]"
                >
                  View & Download PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default Page;
