"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../wobble-card";
import { motion } from "framer-motion";

type CardData = {
  imageSrc: string;
  title: string;
};

type WobbleCardDemoProps = {
  heading: string;
  description: string;
  listItems: string[];
  cards: CardData[];
};

export function WobbleCardDemo({
  heading,
  description,
  listItems,
  cards,
}: WobbleCardDemoProps) {
  return (
    <div className="max-w-7xl mx-auto w-full p-6">
      {/* Text Section */}
      <div className="flex-1 mx-auto mb-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mb-6 flex items-start gap-6"
        >
          <hr className="w-2 h-16 bg-[#E8D858] border-none" />
          <h2 className="text-3xl md:text-6xl font-bold text-[#023D68] leading-tight">
            {heading}
          </h2>
        </motion.div>
        <motion.div>
          <p className="text-[#484848] mb-6">{description}</p>
          <ul className="text-[#000000] font-semibold">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-between gap-4">
        {cards.map((card, index) => (
          <WobbleCard
            key={index}
            containerClassName="flex-1 min-w-[250px] bg-gray-800 h-[300px] relative"
          >
            <Image
              src={card.imageSrc}
              layout="fill"
              alt={card.title}
              className="absolute inset-0 object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 w-[90%] bg-[#023D68] text-white py-2 px-3 text-left rounded-md">
              {card.title}
            </div>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
}
