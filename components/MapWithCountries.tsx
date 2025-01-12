"use client";
import { WorldMap } from "@/components/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-3xl md:text-5xl dark:text-white text-[#023D68]">
          OUR MAJOR{" "}
          <span className="text-[#346587]">
            {"GLOBAL MARKETS".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
      </div>

      {/* Layout Wrapper */}
      <div className="md:flex max-w-7xl mx-auto mt-10">
        {/* Left: Country List */}
        <div className="w-4/4 hidden md:block bg-white dark:bg-gray-800 p-4 rounded-lg">
          <ul className="space-y-2">
            {[
              "India",
              "Saudi Arabia",
              "Qatar",
              "Oman",
              "Jordan",
              "Tanzania",
              "Pakistan",
              "Kuwait",
              "Bahrain",
              "Ethiopia",
            ].map((country, index) => (
              <li
                key={index}
                className="text-sm p-2 bg-white  dark:text-black font-bold"
              >
                {country}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Map */}
        <div className="w-full pl-4 mx-auto">
          <WorldMap
            dots={[
              {
                start: { lat: 28.6139, lng: 77.209 }, // India (New Delhi)
                end: { lat: 24.7136, lng: 46.6753 }, // Saudi Arabia (Riyadh)
              },
              {
                start: { lat: 24.7136, lng: 46.6753 }, // Saudi Arabia (Riyadh)
                end: { lat: 25.276987, lng: 51.520008 }, // Qatar (Doha)
              },
              {
                start: { lat: 25.276987, lng: 51.520008 }, // Qatar (Doha)
                end: { lat: 23.588, lng: 58.3829 }, // Oman (Muscat)
              },
              {
                start: { lat: 23.588, lng: 58.3829 }, // Oman (Muscat)
                end: { lat: 31.9454, lng: 35.9284 }, // Jordan (Amman)
              },
              {
                start: { lat: 31.9454, lng: 35.9284 }, // Jordan (Amman)
                end: { lat: -6.7924, lng: 39.2083 }, // Tanzania (Dar es Salaam)
              },
              {
                start: { lat: 31.9454, lng: 35.9284 }, // Jordan (Amman)
                end: { lat: 33.6844, lng: 73.0479 }, // Pakistan (Islamabad)
              },
              {
                start: { lat: 33.6844, lng: 73.0479 }, // Pakistan (Islamabad)
                end: { lat: 29.3759, lng: 47.9774 }, // Kuwait (Kuwait City)
              },
              {
                start: { lat: 29.3759, lng: 47.9774 }, // Kuwait (Kuwait City)
                end: { lat: 26.0667, lng: 50.5577 }, // Bahrain (Manama)
              },
              {
                start: { lat: 26.0667, lng: 50.5577 }, // Bahrain (Manama)
                end: { lat: 9.145, lng: 40.489673 }, // Ethiopia (Addis Ababa)
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
