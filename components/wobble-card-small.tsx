"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./wobble-card";
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

export function WobbleCardSmall({
  heading,

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
      </div>

      {/* Card Section */}
      <div className="flex flex-row gap-4 items-end justify-end">
        {cards.map((card, index) => (
          <WobbleCard
            key={index}
            containerClassName="w-[100px] h-[100px] bg-gray-800 relative"
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
