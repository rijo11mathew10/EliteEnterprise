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
  bulletPoints: string[];
  location: string;
  type: string;
}

function Page() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null); // Use Job type for selectedJob
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobOpenings: Job[] = [  // Explicitly define jobOpenings as an array of Job objects
    {
      title: "Frontend Developer",
      paragraph: "We are looking for a talented frontend developer to join our team. You'll work closely with the product and design teams to create beautiful, responsive user interfaces.",
      bulletPoints: [
        "Develop responsive user interfaces.",
        "Work closely with design and product teams.",
        "Optimize components for maximum performance.",
        "Write clean, scalable, and reusable code.",
      ],
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      paragraph: "Join our backend team to develop scalable applications. You'll work with cutting-edge technologies to build and maintain APIs and databases.",
      bulletPoints: [
        "Develop and maintain scalable APIs.",
        "Work with databases to ensure high availability.",
        "Implement security and data protection measures.",
        "Collaborate with frontend developers for seamless integration.",
      ],
      location: "New York",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      paragraph: "We need a creative UI/UX designer to enhance our user experience. The ideal candidate will work on improving the visual elements and the overall experience of our product.",
      bulletPoints: [
        "Design intuitive and beautiful user interfaces.",
        "Conduct user research and usability testing.",
        "Create prototypes and high-fidelity mockups.",
        "Collaborate with developers to ensure accurate implementation.",
      ],
      location: "Los Angeles",
      type: "Part-time",
    },
  ];

  // Explicitly define the type of 'job' parameter in openModal function
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
              {/* Elite */}
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
            className="bg-white rounded-lg p-8 max-w-3xl w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-2xl font-semibold text-[#023D68] mb-4">{selectedJob.title}</h4>
            <p className="text-gray-700 mb-4">{selectedJob.paragraph}</p>
            <ul className="text-gray-700 mb-4">
              {selectedJob.bulletPoints.map((point, index) => (
                <li key={index} className="list-disc pl-5">{point}</li>
              ))}
            </ul>
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
