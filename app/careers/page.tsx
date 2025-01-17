"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Forms from "@/components/careers/Forms";

// Define the Job type
interface Job {
  title: string;
  paragraph: string;
  description: string;
  description1: string;
  bulletPoints: string[];
  location: string;
  roles: string;
  bulletPoints1: string[];
  purpose: string;
  type: string;
}

function Page() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null); // Use Job type for selectedJob
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobOpenings: Job[] = [  // Explicitly define jobOpenings as an array of Job objects
    {
      title: "Finance Manager",
      paragraph: "Qualification/ Prerequisite:",
      description: "",
      bulletPoints: [
        "MCom/MBA Finance/CA",
        "Min 5 years’ experience in extrusion companies or similar industries",
      ],
      purpose: "Job Purpose:",
      description1: "To lead finance department and support all other departments for smooth operation of the company.",
      roles: "Roles, Responsibilities and Authorities:",
      bulletPoints1: [
        "Leading finance team to provide vital financial information to ensure smooth running of the organisation. Implementation of ERP Systems and co-ordination for system improvements in accounting and reporting system along with internal controls.",
        "Preparation of all Reports like Inventory related Report, MIS and Cash Flow & Daily Bank Position to Internal and External Auditors.",
        "Monthly Billet Details preparation for pricing and billet delivery on daily basis, including uploading of billet requirement details in EGA portal.",
        "Coordination with Banking concern person for related documents submission and required details.",
        "Coordination with Internal & External Auditors and Banker for time-to-time reports and submission.",
        "Signature of all finance related documents and vouchers",
      ],
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Die Corrector",
      paragraph: "Qualification/ Prerequisite:",
      description: "",
      bulletPoints: [
        "High school diploma or equivalent technical certifications.",
        "5+ years of experience in aluminium extrusion or die manufacturing.",
        "Strong knowledge of extrusion techniques and die design.",
        "Ability to work with multiple departments and deliver concise findings and recommendations.",
        "Physical ability to lift and handle heavy die components.",
      ],
      purpose: "",
      description1: "",
      roles: "Roles, Responsibilities and Authorities:",
      bulletPoints1: [
        "Inspect, analyze, and correct flaws in extrusion dies.",
        "Evaluate die designs to ensure adherence to quality standards.",
        "Resolve extrusion issues impacting die performance.",
        "Collaborate with extrusion press operators and quality inspectors to improve die functionality.",
        "Conduct quality tests on extruded profiles to meet client requirements.",
        "Maintain expertise in die handling, storage, and performance monitoring.",
        "Adhere to all safety protocols and practices.",
      ],
      location: "Remote",
      type: "Full-time",
    },
  ];

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
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
              <span className="text-4xl md:text-7xl block">CAREERS</span>
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
            Submit your CV and you shall be approached if your profile meets our
            requirements.
          </p>
        </div>

        {/* Form Section (Submit Button) */}
        <Forms />

        {/* Job Openings Section */}
        <div className="mx-8 sm:mx-16 md:mx-32 mb-8 mt-10">
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#023D68] mb-5">
            Current Job Openings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
                onClick={() => openModal(job)}
              >
                <h4 className="text-xl font-semibold text-[#023D68] mb-2">{job.title}</h4>
                <p className="text-gray-700 mb-4">{job.paragraph}</p>
                <ul className="text-gray-700 mb-4">
                  {job.bulletPoints.slice(0, 3).map((point, idx) => (
                    <li key={idx} className="list-disc pl-5">{point}</li>
                  ))}
                  {job.bulletPoints.length > 3 && (
                    <li className="text-blue-500 cursor-pointer mt-2">...more details</li>
                  )}
                </ul>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Job Details */}
      {isModalOpen && selectedJob && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-2xl font-semibold text-[#023D68] mb-4">{selectedJob.title}</h4>
            <p className="text-gray-700 mb-4">{selectedJob.paragraph}</p>
            <p className="text-gray-700 mb-4">{selectedJob.description1}</p>

            {/* Display Bullet Points */}
            <ul className="text-gray-700 mb-4">
              {selectedJob.bulletPoints.map((point, index) => (
                <li key={index} className="list-disc pl-5">{point}</li>
              ))}
            </ul>

            {/* Display Job Purpose */}
            <p className="text-gray-700 mb-4">{selectedJob.purpose}</p>

            {/* Display Roles, Responsibilities, and Authorities */}
            <h5 className="text-xl font-semibold text-[#023D68] mb-4">{selectedJob.roles}</h5>
            <ul className="text-gray-700 mb-4">
              {selectedJob.bulletPoints1.map((point, index) => (
                <li key={index} className="list-disc pl-5">{point}</li>
              ))}
            </ul>

            {/* Display Job Location and Type */}
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>{selectedJob.location}</span>
              <span>{selectedJob.type}</span>
            </div>

            <button
              className="bg-[#023D68] text-white py-2 px-6 rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}

export default Page;
