"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Page() {
  const certificates = [
    {
      title: "Coil Coater License",
      image: "/certification/certificate1.jpg", // Path to image
      url: "/certification/certificate1.pdf",   // Path to PDF
    },
    {
      title: "Emirates Quality Mark - Alumill",
      image: "/certification/qualityalumill.jpg", // Path to image
      url: "/certification/qualityalumill.pdf",   // Path to PDF
    },
    {
      title: "ISO - Alumill",
      image: "/certification/isoalumill.jpg", // Path to image
      url: "/certification/isoalumill.pdf",   // Path to PDF
    },
    {
      title: "Emirates Quality Mark - Classic",
      image: "/certification/qualityclassic.jpg", // Path to image
      url: "/certification/qualityclassic.pdf",   // Path to PDF
    },
    {
      title: "Coil Coater License",
      image: "/certification/certificate1.jpg", // Path to image
      url: "/certification/certificate1.pdf",   // Path to PDF
    },
    {
      title: "Emirates Quality Mark - Alumill",
      image: "/certification/qualityalumill.jpg", // Path to image
      url: "/certification/qualityalumill.pdf",   // Path to PDF
    },
    {
      title: "ISO - Alumill",
      image: "/certification/isoalumill.jpg", // Path to image
      url: "/certification/isoalumill.pdf",   // Path to PDF
    },
    {
      title: "Emirates Quality Mark - Classic",
      image: "/certification/qualityclassic.jpg", // Path to image
      url: "/certification/qualityclassic.pdf",   // Path to PDF
    },
  ];

  // State to handle the modal visibility and the currently selected certificate
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Function to close the modal
  const closeModal = () => {
    setSelectedCertificate(null);
  };

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
              <span className="text-4xl md:text-7xl block">CERTIFICATIONS</span>
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Certificates Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-10 lg:px-20 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-64 object-cover rounded-md cursor-pointer mb-6"
                onClick={() => setSelectedCertificate(certificate)} // Open modal with selected certificate
              />
              <h3 className="text-xl font-semibold">{certificate.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section - Display certificate details */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Fade-in/fade-out transition
        >
          <motion.div
            className="bg-white p-8 rounded-lg relative max-w-lg w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.5 }} // Zoom transition for the modal
          >
            <button
              className="absolute top-2 right-2 text-xl text-gray-500"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="text-center">
              <motion.img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto mb-4 rounded-md"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.5 }} // Zoom-in/out for the image
              />
              <h2 className="text-xl font-semibold mb-4">{selectedCertificate.title}</h2>
              <a
                href={selectedCertificate.url}
                download
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}

export default Page;

