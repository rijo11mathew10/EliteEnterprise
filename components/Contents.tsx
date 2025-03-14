"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function Contents() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasStarted, setHasStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  // Automatically switch between mission and vision tabs every 5 seconds
  useEffect(() => {
    const tabSwitcher = setInterval(() => {
      setActiveTab((prevTab) => (prevTab === "mission" ? "vision" : "mission"));
    }, 5000); // Switch tab every 5 seconds

    return () => clearInterval(tabSwitcher); // Cleanup interval when component unmounts
  }, []);

  // Start count when in view
  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView, hasStarted]);

  return (
    <div>
      {/* First Section */}
      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-start">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="p-6 md:p-8 lg:px-12 lg:py-16 flex flex-col justify-start"
        >
          <div className="mx-auto max-w-lg">
            <div className="flex items-start gap-6 mb-6">
              <hr className="w-2 h-28 bg-[#E8D858] border-none" />
              <h2 className="text-5xl font-semibold text-[#023D68] md:text-6xl leading-snug">
                EMPOWERING <br /> ALUMINIUM
              </h2>
            </div>
            <p className="text-black text-sm leading-relaxed md:text-base text-left">
              In a span of a decade, Elite Group of Companies has grown from
              being a single company to a conglomerate with businesses dealing
              with architectural and industrial applications. The secret of our
              success lies in our ability to complement and support an
              ever-growing demand for aluminium to cater to regional needs. Each
              day we create new standards of quality and service in the
              industry. We continue to work towards setting up a benchmark of
              quality and make Elite Group a brand name synonymous with
              architectural and industrial aluminium products globally.
            </p>
          </div>
        </motion.div>

        {/* Separator HR */}
        <hr className="my-8 border-gray-300 mx-auto w-3/4 sm:hidden" />

        {/* Images and Video Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          ref={ref}
          className="p-6 md:p-8 lg:px-12 lg:py-16 flex flex-col items-center"
        >
          <div className="border border-gray-300 rounded-md p-4 w-full max-w-xl">
            {/* Images Row */}
            <div className="flex items-center justify-center gap-4 mb-4">
              {/* Image 1 */}
              <div className="flex-1 min-w-[100px] max-w-[140px]">
                <img
                  src="/Headingempowering.png"
                  alt="Empowering Aluminium"
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
              {/* Vertical Line */}
              <hr className="h-auto border-l-2 border-gray-300" />
              {/* Image 2 */}
              <div className="flex-1 min-w-[120px] max-w-[160px]">
                <img
                  src="/thebig5.gif"
                  alt="The Big 5 Event"
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
            </div>
            {/* Video Section */}
            <div className="w-full max-w-lg border-t border-gray-300 mt-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-md mt-4"
                src="/logo-anim.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-full overflow-hidden">
        <div className="mx-auto grid sm:grid-cols-[1fr_2fr] items-stretch max-w-7xl">
          {/* Left Section: Tabs */}
          <div className="flex flex-col bg-white p-6 h-full">
            <div className="flex items-center space-x-4 h-full">
              {/* Vertical Line */}
              <hr className="hidden sm:block w-2 h-full bg-[#E8D858] border-none" />
              {/* Tabs */}
              <div className="flex flex-col w-full space-y-6">
                <motion.button
                  className={`text-lg sm:text-xl lg:text-2xl font-bold py-6 px-6 ${
                    activeTab === "mission"
                      ? "bg-[#EDEDEC] text-[#023D68]"
                      : "bg-white text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("mission")}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  OUR MISSION
                </motion.button>
                <motion.button
                  className={`text-lg sm:text-xl lg:text-2xl font-bold py-6 px-6 ${
                    activeTab === "vision"
                      ? "bg-[#EDEDEC] text-[#023D68]"
                      : "bg-white text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("vision")}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  OUR VISION
                </motion.button>
              </div>
            </div>
          </div>

          {/* Right Section: Content */}
          <motion.div
            className="bg-[#E8D858] p-6 md:p-8 lg:px-12 lg:py-16 flex items-center justify-center text-[#023D68] h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mission or Vision Content */}
            {activeTab === "mission" && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-center sm:text-left"
              >
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  OUR MISSION <br />
                  To complement and support the ever-growing demand for
                  aluminium architecture and design internationally, with
                  special emphasis on the national needs. To continuously invest
                  in infrastructure and technical expertise and be a leader in
                  the industry creating new standards of quality and service to
                  enhance overall growth.
                </p>
              </motion.div>
            )}
            {activeTab === "vision" && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-center sm:text-left"
              >
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  OUR VISION <br />
                  To complement and support the ever-growing demand for
                  aluminium architecture and design internationally, with
                  special emphasis on the national needs. To continuously invest
                  in infrastructure and technical expertise and be a leader in
                  the industry creating new standards of quality and service to
                  enhance overall growth.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Third Section */}
      <section className="px-6 md:px-16 lg:px-24 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative bg-cover bg-center h-96"
          style={{ backgroundImage: 'url("/backgroundbanner.jpg")' }}
        >
          <div className="absolute bottom-0 left-0 w-[100%] md:w-[75%] bg-[#E8D858] py-6 px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: 10, label: "BRANCHES ACROSS UAE" },
                { value: 1500, label: "EMPLOYEES" },
                { value: 500, label: "PROJECTS" },
                { value: 2000, label: "SATISFIED CLIENTS" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: idx * 0.2 }}
                  className="flex flex-col items-center text-[#023D68]"
                >
                  <div
                    className={`text-6xl font-semibold ${
                      hasStarted ? "visible" : "invisible"
                    } fade-in min-w-[80px]`}
                  >
                    {hasStarted && (
                      <CountUp
                        start={0}
                        end={item.value}
                        duration={5}
                        separator=","
                      />
                    )}
                  </div>
                  <p className="text-base font-semibold mt-1 text-center">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contents;
