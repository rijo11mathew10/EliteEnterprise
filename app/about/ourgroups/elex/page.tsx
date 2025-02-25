"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

import Image from "next/image";

function page() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }} // Smooth fade-in with a vertical motion
    >
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
              <span className="text-4xl md:text-7xl block">ELEX</span>
              {/* Extrusion LLC */}
              <span className="text-2xl md:text-4xl text-white text-opacity-70 block  font-medium">
                ALUMINUM PRODUCTS PVT LTD
              </span>
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl mb-16">
        <div>
          {/* Top Section */}
          <motion.div
            className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center gap-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Text Column */}
            <div className="col-span-12 md:col-span-7">
              <motion.div
                className="flex gap-3 mb-8"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: "some" }} // Adjust viewport to trigger animation when the element is visible at least partially
                transition={{ duration: 2.0 }}
              >
                <hr className="w-2 h-16 md:h-14 bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                  ABOUT US
                </h2>
              </motion.div>

              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
We are today benchmarked for fast delivery, promptness in our responses in the whole extrusion
fraternity. For us customer service is not a doctrine, but a philosophy of doing business.
While we have been continuously upgrading our technologies and equipment to ensure consistent product
quality, our team of dedicated & seasoned professionals ensure that the processes are controlled & service
threshold are ever improved.
              </motion.p>

              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
This catalogue is only a broad guideline to our customers, giving information of dies readily available
with us. We are continuously enhancing our die library & hence we welcome your most valuable inquiry
for new sections.
              </motion.p>
            </div>

            {/* Logo Column */}
            <motion.div
              className="col-span-12 md:col-span-5 border-4 border-[#E8D858] relative h-64 md:h-96 flex justify-center items-center overflow-visible"
              initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                backgroundImage: "url('/elexal.jpg')", // Replace with your image path
                backgroundSize: "cover", // Ensures the image completely fills the div
                backgroundPosition: "center", // Centers the image in the div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
              }}
            >
              <Image
                src={"/elex.jpg"}
                width={200}
                height={200}
                alt=""
                className="hidden sm:block shadow-lg border-8 border-[#E8D858] absolute lg:-top-36"
              />
            </motion.div>
          </motion.div>

          {/* Full-Width Section */}
          <motion.div
            className="max-w-7xl mx-auto px-4 md:px-6 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="relative text-[#023D68] text-xl md:text-2xl lg:text-3xl font-bold z-10 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              CAPACITY
            </motion.h1>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
Elex Aluminum has an annual capacity of 4000 metric tons under one roof with two hydraulic extrusion
presses of 750, and 1,000 tons which are controlled by Micro - processor based technology and
programmable logic control (PLC) system.
            </motion.p>
            
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
We have a fully integrated plant with a Billet casting and Die correction facility, our in -house foundry
furnace with a capacity of 4 metric tons.
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >

            </motion.p>
            <motion.h4
              className="relative text-[#023D68] text-m md:text-l lg:text-xl font-bold z-10 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
Maximum Profile Size
            </motion.h4>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
150mm for Solid sections, Across Diagonal
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
140mm for Hollow sections, Across Diagonal
            </motion.p>
            <motion.h1
              className="relative text-[#023D68] text-m md:text-l lg:text-xl font-bold z-10 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
QUALITY
            </motion.h1>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
With time, the name Elex Aluminum has become synonymous with quality and reliability in the industry.
Today, the brand frequently commands prices at a premium compared to its competitors. 
            </motion.p>
            <motion.p
              className="text-[#484848] mb-4 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
Quality and Service being our management commitments, we wish to continue with our past success and ensure the
highest standards.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="hidden sm:block">
      </div>

      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/ourgroups/thermoset/thermostat.mp4"
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
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative text-white text-2xl md:text-4xl lg:text-6xl font-bold z-10 px-4"
        >
          PROCESS <br></br>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="relative text-white text-sm md:text-base lg:text-lg mt-4 z-10 max-w-[800px] px-4"
        >
Extrusion is a process of shaping material of various different aluminium alloys into specific shapes as
per the dies, these extruded sections have a definitive cross -sectional profile for a wide range of uses. The
extrusion process makes the most of aluminium’s unique combination of physical characteristics, its
malleability allows it to be easily machined and cast.        </motion.p>
      </div>
      <div className="mx-auto max-w-7xl">
        {/* First Section */}
        <motion.div
          className="grid grid-cols-12 items-center p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          {/* Text Column */}
          <motion.div
            className="col-span-12 md:col-span-8 border-[#E8D858] border-1 border-l-8 p-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-5xl text-[#023D68] font-bold mb-8">
            DIE SHOP
            </h2>
            <p className="text-lg text-[#484848] leading-8 mb-4">
            At Elex Aluminum we understand that dies and moulds are at the heart of the extrusion manufacturing
            process, and we possess an inventory for more than3 000 special dies for our export and domestic customers .
            </p>
            <p className="text-lg text-[#484848] leading-8 mb-2 ">
            With its well equipped state - of - the-art tool room comprising the latest equipments, Elex Aluminum
comprehensive range of custom-made shapes and profiles find applications in some of the major industries
like Automobiles, Agriculture, Rail and Road Transport, Building and Construction, Heavy Engineering,
Architecture, Electronics, Solar Energy & ladder industry.
            </p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="flex flex-col gap-4">
              <Image
                src="/2.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
              <Image
                src="/3.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg -ml-10 border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6">
          {/* Section Heading */}
  <motion.h1
    className="relative text-[#023D68] text-xl md:text-2xl lg:text-3xl font-bold z-10 mb-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.4 }}
  >
    WHY CHOOSE US
  </motion.h1>
  {/* Four Cards Section */}
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 2.0 }}
  >
    {/* Card 1 */}
    <motion.div
      className="bg-[#E8D858] p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="text-xl font-bold text-center text-[#023D68] mb-4">EXPERIENCED</h3>
      <p className="text-[#484848] text-center">The most valuable source of knowledge is Experience. We have been in this industry for the last 25 years and have had an exponential
        growth in out leavrning curve.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="bg-[#E8D858] p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="text-xl font-bold text-center text-[#023D68] mb-4">TRANSPARENCY</h3>
      <p className="text-[#484848] text-center">We believe openess, accountabilty and trust are the essential ingredients to build transparency.
        We do business in a culture that is characterized by social transparency.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      className="bg-[#E8D858] p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="text-xl font-bold text-center text-[#023D68] mb-4">SUPERIOR QUALITY</h3>
      <p className="text-[#484848] text-center">Quality is about making the organization perform for the skateholders, from improving the products 
        and servies to system and processes. Managing Quality means constantly striving for excellence.
      </p>    
      </motion.div>

    {/* Card 4 */}
    <motion.div
      className="bg-[#E8D858] p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="text-xl font-bold text-center text-[#023D68] mb-4">COMPETITIVE PRICE</h3>
      <p className="text-[#484848] text-center">In this competitive world, where the rave is never ending, our price startegies reflect the value 
        we provide versus our competitors while keeping the brand image in mind. 
      </p>
      </motion.div>
  </motion.div>
</div>
                <motion.div
                  className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center gap-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  {/* Text Column */}
                  <div className="col-span-12 md:col-span-7 mt-12 md:mt-20">
                    <motion.div
                      className="flex gap-3 mb-8"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.0 }}
                    >
                      <hr className="w-2 h-16 md:h-16 bg-[#E8D858] border-none" />
                      <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                        LOCATION
                      </h2>
                    </motion.div>
      
                    <motion.p
                      className="text-[#484848] mb-6 text-justify md:pr-7"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.0 }}
                    >
                      Address: <a href="https://maps.app.goo.gl/iA3i8gx2HG5WK49i8?g_st=it" target="_blank" className="text-blue-500 hover:underline">487/9, Kondayampalayam Road, Keeranatham Village, Saravanampatti (PO), Coimbatore - 641 035.</a><br></br>
      Hours: 08:00 AM - 5:00 PM <br></br>
      Phone: +91- 97900 23706<br></br>
      Email Address: <a href="mailto:elexaluminium@gmail.com" target="_blank" className="text-blue-500 hover:underline">elexaluminium@gmail.com</a></motion.p>
                  </div>
      
                  {/* Logo Column */}
                  <motion.a
                    href="https://maps.app.goo.gl/iA3i8gx2HG5WK49i8?g_st=it"
                    target="_blank"
                    className="col-span-12 md:col-span-5 border-4 border-[#E8D858] relative h-100 md:h-96 flex justify-center items-center overflow-visible"
                    initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                      backgroundImage:
                        "url('/locationelex.jpg')", // Replace with your image path
                      backgroundSize: "cover", // Ensures the image completely fills the div
                      backgroundPosition: "center", // Centers the image in the div
                      backgroundRepeat: "no-repeat", // Prevents the image from repeating
                    }}
                  >
                  </motion.a>
                </motion.div>

      <Footer />
    </motion.div>
  );
}

export default page;
