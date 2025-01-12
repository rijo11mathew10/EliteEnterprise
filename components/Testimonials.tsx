"use client";
import { motion } from "framer-motion"; // Import Framer Motion
import React from "react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer

const Testimonial = () => {
  // Use Intersection Observer
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="px-6 mt-10 md:px-16 lg:px-24 bg-white">
      {/* Blue Background Section */}
      <div
        ref={ref} // Attach the ref to the section
        className="relative bg-[#023D68] text-white py-16 px-8"
      >
        {/* Decorative Lines */}
        <div className="absolute top-4 right-0 w-1/2 h-1 bg-[#E8D858]"></div>
        <div className="absolute bottom-4 left-0 w-1/2 h-1 bg-[#E8D858]"></div>

        {/* Big Quote Symbol with Animation */}
        <motion.div
          className="absolute -top-10 left-6 sm:left-8 lg:left-12 text-[#E8D858] text-[10rem] md:text-[15rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Animate when in view
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          &ldquo;
        </motion.div>

        {/* Content with Animations */}
        <motion.div
          className="relative flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 30 }} // Start from below
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          <motion.h2
            className="text-xl font-semibold"
            initial={{ opacity: 0, x: -50 }} // Slide from left
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            Mr. Zacharia
          </motion.h2>
          <motion.p
            className="text-sm font-light"
            initial={{ opacity: 0, x: -50 }} // Slide from left
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          >
            Manager | National Cont. & Industrial Co. (Aluminium Branch)
          </motion.p>
          <motion.p
            className="text-sm font-medium max-w-2xl"
            initial={{ opacity: 0, y: 30 }} // Start below
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            Elite Group have provided us with an excellent service and we are
            impressed at how easy it is to communicate with them resulting in a
            first class job.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
