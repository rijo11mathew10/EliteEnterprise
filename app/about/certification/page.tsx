"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";



    


function page() {


    const certificates = [
        {
          title: "Certificate 1",
          image: "path/to/image1.jpg", // Path to the image for Certificate 1
          url: "path/to/certificate1.pdf",
        },
        {
          title: "Certificate 2",
          image: "path/to/image2.jpg", // Path to the image for Certificate 2
          url: "path/to/certificate2.pdf",
        },
        {
          title: "Certificate 3",
          image: "path/to/image3.jpg", // Path to the image for Certificate 3
          url: "path/to/certificate3.pdf",
        },
        {
          title: "Certificate 4",
          image: "path/to/image4.jpg", // Path to the image for Certificate 4
          url: "path/to/certificate4.pdf",
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
              {/* Elite */}
              <span className="text-4xl md:text-7xl block">CERTIFICATIONS
              </span>
              {/* Extrusion LLC */}
            </h1>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-10 lg:px-20 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-40 object-cover rounded-md cursor-pointer mb-4"
              onClick={() => {
                const link = document.createElement("a");
                link.href = certificate.url;
                link.download = certificate.url.split("/").pop();
                link.click();
              }}
            />
          </div>
        ))}
      </div>
    </div>
     
      <Footer />
    </div>
  );
}

export default page;
