"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
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
              <span className="text-4xl md:text-7xl block">
                SURFACE COATINGS
              </span>
              {/* Extrusion LLC */}
            </h1>
          </div>
        </motion.div>
      </div>
      <br></br>
      <div className="mx-4 md:mx-40 max-w-7xl mb-16">
      <motion.p
        className="text-[#484848] mb-6 text-justify md:pr-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0 }}
      >
        We offer three types of finish coating – powder coating, wood effect
        coating and anodizing. Having three powder coating plants, with two high
        capacity vertical powder coating line, to provide finishing in the
        variety of colours in RAL.
      </motion.p>
      </div>
      <div className="mx-auto max-w-7xl mb-8">
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
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                <hr className="w-2 h-16 md:h-24 bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                  POWDER COATING
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                We have three powder coating plants, with two high capacity
                vertical powder coating unit, to provide finishing in the
                variety of colours in RAL colours. The unit is certified with
                Qualicoat.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                Powder coating is a type of coating that is applied as a
                free-flowing, dry powder. The main difference between
                conventional liquid paint and powder coating is that the powder
                coating does not require a solvent to keep the binder and filler
                parts in a liquid suspension form. The coating is typically
                applied electrostatically and is then cured under heat to allow
                it to flow and form a &#34;skin&#34;. The powder may be a
                thermoplastic or a thermoset polymer. It is usually used to
                create a hard finish that is tougher than conventional paint.
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                After application of the powder coatings, the aluminum
                extrusions proceed to an indirectly heated convection oven for a
                complete cure of the powder coatings. The natural gas fired
                ovens are very energy efficient in design and provide the
                optimum environment to cure the powder coatings. Indirectly
                heating the powder cure oven eliminates the concerns about
                possible contaminants from the burner and helps provide
                excellent control over the temperature profile within the oven
              </motion.p>
            </div>
            <motion.div
              className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/ourgroups/surfacecoating/surface1.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/ourgroups/surfacecoating/surface2.jpeg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/ourgroups/surfacecoating/surface3.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />

                <Image
                  src="/ourgroups/surfacecoating/surface4.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div>
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-12 max-w-7xl mx-auto p-6 items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Image Column */}
          <motion.div
            className="col-span-12 md:col-span-5 bg-[#023D68] p-6 text-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/ourgroups/surfacecoating/wood1.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/surfacecoating/wood2.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/surfacecoating/wood3.jpg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
              <Image
                src="/ourgroups/surfacecoating/wood4.jpeg"
                alt=""
                width={350}
                height={180}
                className="shadow-lg border-3 border-[#E8D858]"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="col-span-12 md:col-span-7">
            <motion.div
              className="flex gap-3 mb-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              <hr className="w-2 h-16 md:h-24 bg-[#E8D858] border-none" />
              <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                WOOD EFFECT COATING
              </h2>
            </motion.div>
            <motion.p
              className="text-[#484848] mb-6 text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              WOOD GRAIN EFFECT : As aesthetic values evolve, wood grain effect
              finishing is now becoming more and more popular in the fields of
              architectural decoration, furniture, electronics and home
              appliances. Wood grain effect finishing is a special powder
              coating process based on the latest technology in the surface
              finishing.
            </motion.p>
            <motion.p
              className="text-[#484848] text-justify md:pr-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              The wood grain finished aluminum profile is a perfect integration
              of the excellent aluminum properties with the natural appearance
              of natural resources such as wood, marble, etc. It is a wonderful
              combination of the state-of-the-art technology and aesthetics. The
              products have stable quality, appealing appearance and therefore a
              higher value of decoration.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="max-w-7xl mx-auto p-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-[#023D68] mb-8">
            WOOD CHAIN EFFECT FEATURES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Materials */}
            <div>
              <h4 className="font-semibold text-[#023D68] mb-2">Materials</h4>
              <p className="text-[#484848]">
                The wood pattern coating can be cured and transferred to the
                surface of aluminum profiles or aluminum sheets under a
                temperature of 200-degree Celsius.
              </p>
            </div>

            {/* Cost Savings */}
            <div>
              <h4 className="font-semibold text-[#023D68] mb-2">
                Cost Savings
              </h4>
              <p className="text-[#484848]">
                Maintenance free will resume original effect simply by regular
                cleaning.
              </p>
            </div>

            {/* Durability */}
            <div>
              <h4 className="font-semibold text-[#023D68] mb-2">Durability</h4>
              <p className="text-[#484848]">
                Excellent weathering resistance performance, durable in all
                kinds of applications.
              </p>
            </div>

            {/* Effects */}
            <div>
              <h4 className="font-semibold text-[#023D68] mb-2">Effects</h4>
              <p className="text-[#484848]">
                The decorative effects of pictures, text and graphs, and all
                kinds of natural scenes can be of a wood material or marble
                character transmitted by the latest technology.
              </p>
            </div>

            {/* Environmental Friendliness */}
            <div>
              <h4 className="font-semibold text-[#023D68] mb-2">
                Environmental Friendliness
              </h4>
              <p className="text-[#484848]">
                The special decoration needs can be realized without using wood,
                meanwhile the products can be recycled.
              </p>
            </div>

            {/* Fields of Applications */}
            <div>
              <h4 className="font-semibold text-[#023D68] mb-2">
                Fields of Applications
              </h4>
              <p className="text-[#484848]">
                The wood effect can be applied to windows, furniture,
                components, appliances, transportation vehicles, sunshades,
                ships and cars and other decorating materials. It can be
                furnished according to customer requirements.
              </p>
            </div>
            {/* Fields of Shapes */}
            <div>
              <h4 className="font-semibold text-[#023D68] mb-2">Shapes</h4>
              <p className="text-[#484848]">
                The wood pattern can be transferred to all kinds of substrate
                shapes, including sheets.
              </p>
            </div>
            {/* Fields of Shapes */}
            <div>
              <h4 className="font-semibold text-[#023D68] mb-2">
                Aesthetic Value
              </h4>
              <p className="text-[#484848]">
                Patterns of the most precious woods, such as oak, chestnut,
                cherry and walnut, can be imitated.
              </p>
            </div>
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
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                <hr className="w-2 h-16 md:h-24 bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                  ANODIZING
                </h2>
              </motion.div>
              <motion.p
                className="text-[#484848] mb-6 text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                Anodizing is a multi step process whereby aluminum is
                electrochemically processed to form a layer of aluminum oxide
                (anodic) coating which protects the aluminum beneath. The
                coating can also be cosmetically enhanced by dying it as a step
                in the anodizing process. Surface cleanliness and preparation is
                the key to good anodizing results.{" "}
              </motion.p>
              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                The anodic oxide structure originates from the aluminum
                substrate and is composed entirely of aluminum oxide. This
                aluminum oxide is not applied to the surface like paint or
                plating, but is fully integrated with the underlying aluminum
                substrate, so cannot chip or peel. It has a highly ordered,
                porous structure that allows for secondary processes such as
                coloring and sealing.{" "}
              </motion.p>

              <motion.p
                className="text-[#484848] text-justify md:pr-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              >
                <br></br>
                Anodizing is accomplished by immersing the aluminum into an acid
                electrolyte bath and passing an electric current through the
                medium. A cathode is mounted to the inside of the anodizing
                tank; the aluminum acts as an anode, so that oxygen ions are
                released from the electrolyte to combine with the aluminum atoms
                at the surface of the part being anodized. Anodizing is,
                therefore, a matter of highly controlled oxidation—the
                enhancement of a naturally occurring phenomenon.{" "}
              </motion.p>
            </div>
            <motion.div
              className="hidden md:col-span-4 md:block bg-[#023D68] p-6 text-white"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/ourgroups/surfacecoating/anodizing1.jpeg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/ourgroups/surfacecoating/anodizing2.jpeg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
                <Image
                  src="/ourgroups/surfacecoating/anodizing3.jpeg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />

                <Image
                  src="/ourgroups/surfacecoating/anodizing4.jpg"
                  alt=""
                  width={350}
                  height={180}
                  className="shadow-lg -ml-10 border-3 border-[#E8D858]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
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
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                <hr className="w-2 h-16 md:h-24 bg-[#E8D858] border-none" />
                <h2 className="text-3xl md:text-5xl font-semibold text-[#023D68] leading-tight">
                  POLISHING
                </h2>
              </motion.div>

              {/* Image under the text */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0 }}
              >
                <Image
                  src="/ourgroups/surfacecoating/polishing.jpg"
                  alt="Polishing Image"
                  width={350}
                  height={180}
                  className="shadow-lg border-3 border-[#E8D858]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}

export default page;

