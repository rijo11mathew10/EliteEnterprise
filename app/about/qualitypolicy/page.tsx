"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

function Page() {
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
                QUALITY POLICY &amp; ASSURANCE
              </span>
              {/* Extrusion LLC */}
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-start justify-center px-4 md:px-10 lg:px-20">
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-4 mt-12 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          QUALITY POLICY
        </motion.h1>
        <motion.p
          className="text-[#484848] mb-6 text-left md:pr-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          Elite Group of Companies will endeavor to be customer-focused in its
          entire activity chain and achieve total &quot;Q&quot; in all-round delivery
          encompassing but not restricted to:
        </motion.p>
        <motion.ul
          className="text-[#484848] text-left md:pr-7 list-disc pl-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        >
          <li>
            Providing technical support service on a continuing basis to the
            Customers.
          </li>
          <li>
            Building and maintaining constructive partnerships with the Customers,
            Suppliers, and Associates.
          </li>
          <li>
            Continually improving the overall competency of the employees via
            training.
          </li>
          <li>Enhancing the value of investment of the stakeholders.</li>
          <li>
            Complying with applicable statutory and regulatory requirements as a
            service to the community.
          </li>
          <li>
            Strengthening the Quality Management System on a continual basis.
          </li>
        </motion.ul>
      </div>

      <div className="flex flex-col items-start justify-center px-4 md:px-10 lg:px-20">
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-4 mt-12 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          QUALITY ASSURANCE
        </motion.h1>
        <motion.p
          className="text-[#484848] mb-6 text-left md:pr-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          At Elite Group of Companies, we practice a strict Quality Control
          Procedure &amp; Methods. The Quality Assurance System is certified to ISO
          9001: 2000.
        </motion.p>
        <motion.ul
          className="text-[#484848] text-left md:pr-7 list-disc pl-5 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        >
          <li>
            The Quality Assurance &amp; Control Department is managed by a Manager under
            whom there are Q.C Supervisor &amp; Quality Controller Inspectors. The team
            ensures that all required tests &amp; checks are carried out.
          </li>
          <li>
            The normal &amp; routine inspections are carried out for:
            <ul className="list-disc pl-8 mt-2">
              <li>Dimensional Checks</li>
              <li>Deviation or Flatness, Sharpness, Angularity, etc.</li>
              <li>Visual - Surface Inspection</li>
              <li>Hardness Check</li>
            </ul>
          </li>
          <li>
            There is a system which adequately controls the reports at every check
            point and thereby maintains traceability at all points of manufacture.
          </li>
          <li>
            For powder coating &amp; anodizing jobs, the company is equipped with a
            modern full-scale laboratory and all in-line and panel tests as per
            Qualicoat / Qualanod are conducted. The companys coating is approved by
            M/s Jotun for both PE-F, PE-SDF coatings.
          </li>
        </motion.ul>
      </div>

      <Footer />
    </div>
  );
}
export default Page;
