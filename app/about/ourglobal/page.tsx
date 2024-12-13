"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

function page() {
  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[450px] flex items-center justify-center mb-16 overflow-hidden"
        style={{
          backgroundImage: "url('/banner.jpg')", // Replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Banner Animated Elements */}
        <motion.div
          className="absolute top-6 right-6 h-1 w-[45%] bg-[#E8D858]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-6 left-6 h-1 w-[45%] bg-[#E8D858]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        ></motion.div>

        {/* Banner Text */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-8 px-16 rounded w-[600px] mx-auto text-center">
            <h1 className="text-white font-semibold">
              {/* Elite */}
              <span className="text-2xl md:text-4xl block">OUR GLOBAL MARKETS</span>
              {/* Extrusion LLC */}
              
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl mb-16">
        <div>
        <motion.div
            className="max-w-7xl mx-auto px-4 md:px-6 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              We seek to provide excellent products that exceed Aluminum is a widely used metal for countless applications in the nowadays society. Strength, light-weight, corrosion resistance, thermal conductive, durability, no-toxic, recycling are just a few of the several advantages of this metal. Two of the most common compounds are alum, such as potassium aluminum sulfate and aluminum oxide. About 8% of the earth's crust is composed of aluminum.
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              Elite Group of Companies is one of the leading names in the aluminum industry in our region. Due to the overall production and the global offer we believe to be quite distinctive in the related industry. Being able to establish itself as a benchmark in this sector, Elite Group was able to develop our operations in a very less time, both nationally and internationally. We are currently touching the MENA region, including India considered the fifth largest producer of aluminum in the world.

            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
In order to reach the Asiatic South-East market, Elex Aluminum Products Pvt. Ltd. was established and situated in the city of Coimbatore (India). Based in the area of 59,800 sq. ft. the production unit is equipped with latest machines and has team of experienced professionals. The manufacturing unit consists of three presses (two 4” presses with the production capacity of 300 kg’s per hour and one 5” press with the production capacity of 550 kg’s per hour).
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
With the addition of Elex Aluminum, Elite Group reached an overall production which is one of the highest in all the MENA region and South-Asia, and ready to serve the overseas markets.            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
We seek to provide excellent products that exceed customer expectations. We aim to achieve our goals through the dedication of our staff and support of our suppliers, which will empower and strengthen our leading position in the market. This shall certainly lead to continuous growth for the benefit of our society, at large.
 </motion.p>
          </motion.div>

          
        </div>
      </div>
    

      <Footer />
    </div>
  );
}

export default page;
