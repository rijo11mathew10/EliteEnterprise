"use client";
import React from "react";
import { motion } from "framer-motion";

const Companies = () => {
  // Array of image URLs
  const companyImages = [
    "/company1.png",
    "/company2.png",
    "/company3.png",
    "/company4.png",
    "/company5.png",
    "/company6.png",
    "/company7.png",
  ];

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60 },
    },
  };

  return (
    <div className="h-auto bg-white flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#023D68] mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ELITE GROUP OF COMPANIES
      </motion.h2>

      {/* Company Logos */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {companyImages.map((image, index) => (
          <motion.div
            key={index}
            className="w-[100px] h-[80px] md:w-[140px] md:h-[110px] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={image}
              alt={`Company ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Companies;
