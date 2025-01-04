"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";
import Forms from "@/components/careers/Forms";

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
                CONTACT & ADDRESS
              </span>
            </h1>
          </div>
        </motion.div>
      </div>

      <div>
        <div className="flex flex-col gap-3 mb-8 mx-8 sm:mx-16 md:mx-32 mt-10 p-4 sm:p-6 md:p-8">
          <div className="flex gap-2">
            <hr className="w-2 h-12 md:h-16 bg-[#E8D858] border-none" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#023D68] leading-tight">
              WORK AT ELITE{" "}
            </h2>
          </div>

          <p className="text-[#484848] text-3xl font-light mb-5">
            Elite always search for talented people to join our industry leading
            team.
          </p>
          <p className="text-[#484848]">
            Submit your CV and you shall be approched if your profile meet our
            requirement.
          </p>
        </div>
      </div>
      <Forms />
      <Footer />
    </div>
  );
}

export default page;
