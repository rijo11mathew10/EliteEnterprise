"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const data = [
  {
    title: "ALUMINUM BILLETS / LOGS",
    content: [{ company: "DUBAI ALUMINIUM" }],
  },
  {
    title: "POWDER",
    content: [{ company: "JOTUN POWDER COATING" }],
  },
  {
    title: "LPG GAS",
    content: [{ company: "INTEGRATED GAS SUPPLIES" }],
  },
  {
    title: "DIES & TOOLS",
    content: [
      { company: "EROGA - UK" },
      { company: "SERVICE ALUMINIUM - UK" },
      { company: "ALUTOOL - UK" },
      { company: "ADEX - NETHERLANDS" },
      { company: "COMPESS - ITALY" },
      { company: "ALMAX MORIE - ITALY" },
    ],
  },
  {
    title: "CHEMICALS",
    content: [
      { company: "SURTEC MIDDLE EAST LLC" },
      { company: "BDH MIDDLE EAST LLC" },
      { company: "NEILCHEM TRADING  LLC" },
      { company: "FALCON CHEMICALS  LLC" },
    ],
  },
  {
    title: "PACKING MATERIAL",
    content: [{ company: "EASY PACK CONVERTING INDUSTRIES" }],
  },
  {
    title: "POLYMIDE INSULATING STRIP",
    content: [{ company: "TECHNOFORM BAUTEX - ITALY" }],
  },
  {
    title: "EPDM CASKET",
    content: [{ company: "TECHNO SEAL - KSA" }],
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
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-6 left-6 h-1 w-[45%] bg-[#E8D858] z-0 pointer-events-none"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="relative z-0 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
            <h1 className="text-white font-semibold">
              <span className="text-4xl md:text-7xl block">OUR SUPPLIERS</span>
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Mapping over data with staggered animations */}
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="relative z-0 px-4 grid grid-cols-1 sm:grid-cols-[30%70%] mx-4 sm:mx-16 lg:mx-32 mt-10 mb-4 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: index * 0.2 }}
        >
          {/* Left Section (Title Bar) */}
          <motion.div
            className="bg-[linear-gradient(113.64deg,_#E8D858_-35.03%,_#FFF8BF_100%)] p-4 border-r-0 sm:border-r-8 border-r-[#E8D858] items-center text-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1.5,
              delay: index * 0.3,
            }}
          >
            <h1 className="text-[#023D68] text-xl sm:text-2xl">{item.title}</h1>
          </motion.div>

          {/* Right Section (Company List) */}
          <motion.div
            className="border-2 border-[#E8D858] p-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1.5,
              delay: index * 0.3 + 0.3,
            }}
          >
            {item.content.map((contentItem, idx) => (
              <p
                key={idx}
                className="text-[#023D68] text-lg sm:text-2xl font-bold"
              >
                {contentItem.company}
              </p>
            ))}
          </motion.div>
        </motion.div>
      ))}

      <Footer />
    </div>
  );
}

export default page;
