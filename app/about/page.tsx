"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { FocusCards } from "@/components/FocusCards";

function AboutPage() {
  const cards = [
    {
      title: "Sultan Group 1",
      src: "/project1.jpg",
    },
    {
      title: "Sultan Group 2",
      src: "/project2.jpg",
    },
    {
      title: "Sultan Group 3",
      src: "/project3.jpg",
    },
    {
      title: "Sultan Group 4",
      src: "/project4.jpg",
    },
    {
      title: "Sultan Group 5",
      src: "/project5.jpg",
    },
    {
      title: "Sultan Group 6",
      src: "/project6.jpg",
    },
    {
      title: "Sultan Group 7",
      src: "/project7.jpg",
    },
    {
      title: "Sultan Group 8",
      src: "/project8.jpg",
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
            <h1 className="text-white text-4xl md:text-6xl font-semibold">
              ABOUT OUR COMPANY
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Section Below the Banner */}
      <div className="bg-white py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-start gap-8 relative">
        {/* Vertical Yellow Line */}
        <div className="relative flex-shrink-0">
          <motion.div
            className="h-full w-[4px] bg-[#E8D858]"
            viewport={{ once: true }}
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          ></motion.div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-6 flex items-start gap-6"
          >
            <hr className="w-2 h-20 bg-[#E8D858] border-none" />

            <h2 className="text-3xl md:text-4xl font-semibold text-[#023D68] leading-tight">
              WHO WE ARE AND
              <br />
              WHAT WE DO
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-gray-700 text-base w-5/6 md:text-lg mb-8"
          >
            Leadership & Innovation are two terms usually associated with Elite
            Group of Companies. Driven by passion and dedication, we provide a
            complete range of products, solutions and systems under one name, to
            be the ideal aluminum partner.
          </motion.p>

          {/* List */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-gray-700 text-base md:text-lg leading-snug"
          >
            We produce and offer simultaneously:
            <li>- Aluminum extruded profiles & systems</li>
            <li>- Aluminum flat-rolled products (coils & sheets)</li>
            <li>- EPDM rubber profiles as complementary products</li>
            <li>
              - Coating services (powder coating, wood coating, anodizing and
              coil coating)
            </li>
            <li>- Three dies-shop units</li>
            <li>- In-house division for dies manufacturing</li>
            <li>- In-house division for aluminum fabrication</li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-6 flex flex-col gap-8 mt-14"
          >
            {/* Yellow Vertical Line and Heading */}
            <div className="flex items-start gap-6">
              <hr className="w-3 h-0 lg:h-20 bg-[#E8D858] border-none" />
              <h2 className="text-3xl md:text-3xl font-bold text-[#023D68] leading-tight">
                This Whole Set Of Products And Services Make Elite Group Of
                Companies The Only Global Aluminum Player In Our Region.
              </h2>
            </div>

            {/* Paragraphs */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-gray-700 text-base md:text-lg"
            >
              An ISO 9001 quality certified organization, our group has been at
              the apex of providing a vast array of commendable services.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-gray-700 text-base md:text-lg"
            >
              The subsidiaries are currently under process for the latest
              version ISO 9001:2015, keen to upgrade the quality standards, be
              more efficient and again improve the customer satisfaction from a
              multiple management system such as Elite.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-gray-700 text-base md:text-lg mb-6"
            >
              “QUALICOAT”, “QUALANOD” and “EMIRATES QUALITY MARK” represent
              further proof of our quality and services.
            </motion.p>
          </motion.div>
        </div>

        {/* Logo */}
        <motion.div
          className="absolute -top-20 right-0 md:-top-30 max-w-[180px] md:max-w-[200px] lg:max-w-[250px]" // Adjust for responsive sizing
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src="/aboutuslogo.png"
            alt="Company Logo"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Video Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/alumiltech/About_Company.mp4"
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
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative text-white text-4xl md:text-6xl font-bold z-10"
        >
          DELIVERING RESULTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-base md:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
          Elite Group of Companies is committed to delivering exceptional
          results through unparalleled innovation, leadership, and collaboration
          across industries.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          className="relative text-white text-3xl md:text-4xl font-bold mt-12 z-10"
        >
          CONGLOMERATE
        </motion.h2>
      </div>

      {/* Logo Section */}
      {/* Logo Section */}
      <div className="relative z-20 flex justify-center items-center gap-4 flex-wrap px-4 mb-10">
        {[
          "/company1.png",
          "/company2.png",
          "/company3.png",
          "/company4.png",
          "/company5.png",
          "/company6.png",
          "/company7.png",
        ].map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              delay: 0.2 + index * 0.1,
              ease: "easeOut",
            }}
            className="flex justify-center items-center bg-white shadow-lg rounded-lg p-2 w-20 h-14 sm:w-28 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex-1 mx-auto mb-20">
        {/* Heading for Major Projects */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mb-6 flex items-start gap-6 ml-10"
        >
          <hr className="w-2 h-10 bg-[#E8D858] border-none" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#023D68] leading-tight">
            MAJOR PROJECTS
          </h2>
        </motion.div>

        {/* Horizontal Scrollable Projects */}
        <FocusCards cards={cards} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
