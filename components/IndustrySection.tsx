"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const IndustrySection = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has been triggered
  const isInView = useInView(ref);

  if (isInView && !hasAnimated) {
    setHasAnimated(true); // Mark as animated once it comes into view
  }

  return (
    <div className="px-6 md:px-16 lg:px-24 bg-white">
      {/* Section Heading with Animation */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#023D68] text-center">
          WE HOLD AN UNPARALLELED POSITION IN THE EXTRUSION INDUSTRY
        </h2>
      </motion.div>

      {/* Row of Content Boxes */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* First Box with Animation */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-6 border-2 border-[#E8D858] p-6 flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Image with Animation */}
          <motion.div
            className="w-full sm:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/Nashat.jpg"
              alt="Person 1"
              className="w-full h-auto object-cover rounded"
            />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col flex-1 space-y-4">
            {/* Name and Button */}
            <div className="flex flex-col justify-start items-start gap-3">
              <motion.h3
                className="text-lg md:text-xl font-semibold text-[#535353]"
                initial={{ opacity: 0, x: -30 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Mr. Nashat F.Sahawneh
              </motion.h3>
              <p className="text-sm md:text-base font-light text-gray-600 mb-3">
                (Chairman)
              </p>
              
            </div>

            {/* Paragraph */}
            <motion.p
              className="text-sm md:text-base text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              We welcome projects of all sizes and we are committed to
              delivering the highest level of value and service to our clients
              because we strongly believe that today’s projects are tomorrow’s
              legacy.
            </motion.p>
          </div>
        </motion.div>

        {/* Second Box with Animation */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-6 border-2 border-[#E8D858] p-6 flex-1"
          initial={{ opacity: 0, x: 30 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Image with Animation */}
          <motion.div
            className="w-full sm:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/hari.jpg"
              alt="Person 2"
              className="w-full h-auto object-cover rounded"
            />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col flex-1 space-y-4">
            {/* Name and Button */}
            <div className="flex flex-col justify-start items-start gap-3">
              <motion.h3
                className="text-lg md:text-xl font-semibold text-[#535353]"
                initial={{ opacity: 0, x: 30 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Mr. Hari Kumar
              </motion.h3>
              <p className="text-sm md:text-base font-light text-gray-600">
                (Managing Director)
              </p>
              
            </div>

            {/* Paragraph */}
            <motion.p
              className="text-sm md:text-base text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              We aim to provide our clients with complete aluminium
              architectural solutions under one roof, keeping in mind the
              assurance of quality and timely delivery. We remain committed to
              support the industry, regionally and globally.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustrySection;
