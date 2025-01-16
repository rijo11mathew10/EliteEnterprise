"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

function page() {
  return (
    <div>
      <Header />
      <div
        className="relative bg-cover bg-center h-[550px] flex items-center justify-center mb-16 overflow-hidden"
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
              OUR GLOBAL MARKETS
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Adjusted Description Section */}
      <div className="p-12 lg:p-24 text-[#484848]">
        <motion.p
          className="mb-6 leading-6 text-justify mt-[-100px]" // Negative margin to move text up
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }} // More professional transition
        >
          We seek to provide excellent products that exceed Aluminum is a widely
          used metal for countless applications in the nowadays society.
          Strength, light-weight, corrosion resistance, thermal conductive,
          durability, no-toxic, recycling are just a few of the several
          advantages of this metal. Two of the most common compounds are alum,
          such as potassium aluminum sulfate and aluminum oxide. About 8% of the
          earth#39;s crust is composed of aluminum.
        </motion.p>
        <motion.p
          className="mb-6 leading-6 text-justify mt-[20px]" // Negative margin to move text up
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Elite Group of Companies is one of the leading names in the aluminum
          industry in our region. Due to the overall production and the global
          offer we believe to be quite distinctive in the related industry.
          Being able to establish itself as a benchmark in this sector, Elite
          Group was able to develop our operations in a very less time, both
          nationally and internationally. We are currently touching the MENA
          region, including India considered the fifth largest producer of
          aluminum in the world.
        </motion.p>
        <motion.p
          className="mb-6 leading-6 text-justify mt-[20px]" // Negative margin to move text up
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          In order to reach the Asiatic South-East market, Elex Aluminum
          Products Pvt. Ltd. was established and situated in the city of
          Coimbatore (India). Based in the area of 59,800 sq. ft. the production
          unit is equipped with latest machines and has team of experienced
          professionals. The manufacturing unit consists of three presses (two
          4” presses with the production capacity of 300 kg&#39;s per hour and
          one 5” press with the production capacity of 550 kg&#39;s per hour).
        </motion.p>
        <motion.p
          className="mb-6 leading-6 text-justify mt-[20px]" // Negative margin to move text up
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          With the addition of Elex Aluminum, Elite Group reached an overall
          production which is one of the highest in all the MENA region and
          South-Asia, and ready to serve the overseas markets.
        </motion.p>
        <motion.p
          className="mb-6 leading-6 text-justify mt-[20px]" // Negative margin to move text up
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          We seek to provide excellent products that exceed customer
          expectations. We aim to achieve our goals through the dedication of
          our staff and support of our suppliers, which will empower and
          strengthen our leading position in the market. This shall certainly
          lead to continuous growth for the benefit of our society, at large.
        </motion.p>
      </div>

      <Footer />
    </div>
  );
}

export default page;
