"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

const CustomCarousel = () => {
  const slides = [
    {
      id: 1,
      background: "/banner.jpg",
      photos: ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg", "/pic4.jpg"],
      heading: "EXTRUSION\nDIVISION",
      description: (
        <>
          <span className="font-bold text-2xl">76,800</span> metric ton
        </>
      ),
      subdescription: "Output per annum",
    },
    {
      id: 2,
      background: "/banner.jpg",
      photos: ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg", "/pic4.jpg"],
      heading: "Slide 2 Heading",
      description: "This is the description for Slide 2.",
      subdescription: "Output per annum",
      className: "hidden sm:block",
    },
    {
      id: 3,
      background: "/banner.jpg",
      photos: ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg", "/pic4.jpg"],
      heading: "Slide 3 Heading",
      description: "This is the description for Slide 3.",
      subdescription: "Output per annum",
      className: "hidden sm:block",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        speed={1500}
        loop
        className="relative w-full h-[600px] px-4 md:px-8 lg:px-16"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <motion.div
              className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full h-full gap-12 sm:gap-16 p-4 sm:p-8"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Grid (Hidden on smaller screens) */}
              <motion.div
                className="hidden lg:grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md sm:max-w-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slide.photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={photo}
                      alt={`Slide ${slide.id} Photo ${index + 1}`}
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="flex flex-col justify-center p-6 sm:p-8 rounded-lg w-full max-w-lg h-auto sm:h-[400px] lg:h-full"
                style={{
                  backgroundColor: "#023D68",
                }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white whitespace-pre-line leading-tight text-center md:text-left">
                  {slide.heading}
                </h2>

                {/* Updated Description */}
                <span className="inline-block text-sm sm:text-lg bg-white text-black px-4 py-2 rounded-md mb-2 sm:mb-4 text-center md:text-left max-w-fit">
                  {slide.description}
                </span>

                <p className="text-sm sm:text-base text-white text-center md:text-left">
                  {slide.subdescription}
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
