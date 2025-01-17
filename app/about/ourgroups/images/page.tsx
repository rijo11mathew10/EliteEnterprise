"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

interface Card {
  image: string;
  title?: string;
  description: string;
  unit: string;
  relatedImages: string[]; // Array of related images for "View More"
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleViewMore = (index: number) => {
    setExpandedCard(index === expandedCard ? null : index);
  };

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Render Cards or Related Images */}
      {expandedCard === null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 relative"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <Image
                  src={card.image}
                  alt={card.title || card.description}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                {/* View More Button */}
                <button
                  onClick={() => handleViewMore(index)}
                  className="absolute bottom-4 left-4 bg-[#023D68] text-white py-2 px-4 rounded hover:bg-[#03508A] transition duration-300"
                >
                  View More
                </button>
              </div>

              {/* Card Details */}
              <div className="p-6">
                <p className="text-sm text-gray-600">{card.description}</p>
                <p className="text-sm text-gray-600">{card.unit}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8D858]"></div>
            </div>
          ))}
        </div>
      ) : (
        // Render Related Images Section
        <div>
          <button
            onClick={() => setExpandedCard(null)}
            className="mb-4 bg-[#023D68] text-white py-2 px-4 rounded hover:bg-[#03508A] transition duration-300"
          >
            Back to Gallery
          </button>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {cards[expandedCard].relatedImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64 cursor-pointer">
                  <Image
                    src={image}
                    alt={`Related image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    onClick={() => openImageModal(image)} // Open image in modal
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeImageModal} // Close modal on clicking outside
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={closeImageModal} // Close modal
              className="absolute top-2 right-2 text-white bg-[#023D68] hover:bg-[#03508A] p-2 rounded-full"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const cards: Card[] = [
    {
      image: "/imagegallery/imagegallcard1/IMG03.jpeg",
      description: "",
      unit: "13TH ANNUAL FUNCTION-2018",
      relatedImages: [
        "/imagegallery/imagegallcard1/IMG01.jpeg",
        "/imagegallery/imagegallcard1/IMG02.jpeg",
        "/imagegallery/imagegallcard1/IMG03.jpeg",
        "/imagegallery/imagegallcard1/IMG04.jpeg",
        "/imagegallery/imagegallcard1/IMG05.jpeg",
        "/imagegallery/imagegallcard1/IMG06.jpeg",
        "/imagegallery/imagegallcard1/IMG07.jpeg",
        "/imagegallery/imagegallcard1/IMG08.jpeg",
        "/imagegallery/imagegallcard1/IMG09.jpeg",
        "/imagegallery/imagegallcard1/IMG10.jpeg",
        "/imagegallery/imagegallcard1/IMG11.jpeg",
        "/imagegallery/imagegallcard1/IMG12.jpeg",
        "/imagegallery/imagegallcard1/IMG13.jpeg",
        "/imagegallery/imagegallcard1/IMG14.jpeg",
        "/imagegallery/imagegallcard1/IMG15.jpeg",
        "/imagegallery/imagegallcard1/IMG16.jpeg",
        "/imagegallery/imagegallcard1/IMG17.jpeg",
        "/imagegallery/imagegallcard1/IMG18.jpeg",
        "/imagegallery/imagegallcard1/IMG19.jpeg",
        "/imagegallery/imagegallcard1/IMG20.jpeg",
        "/imagegallery/imagegallcard1/IMG21.jpeg",
        "/imagegallery/imagegallcard1/IMG22.jpeg",
        "/imagegallery/imagegallcard1/IMG23.jpeg",
        "/imagegallery/imagegallcard1/IMG24.jpeg",
        "/imagegallery/imagegallcard1/IMG25.jpeg",
        "/imagegallery/imagegallcard1/IMG26.jpeg",
        "/imagegallery/imagegallcard1/IMG27.jpeg",
        "/imagegallery/imagegallcard1/IMG28.jpeg",
        "/imagegallery/imagegallcard1/IMG29.jpeg",
        "/imagegallery/imagegallcard1/IMG30.jpeg",
        "/imagegallery/imagegallcard1/IMG31.jpeg",
        "/imagegallery/imagegallcard1/IMG32.jpeg",
        "/imagegallery/imagegallcard1/IMG33.jpeg",
        "/imagegallery/imagegallcard1/IMG34.jpeg",
        "/imagegallery/imagegallcard1/IMG35.jpeg",
        "/imagegallery/imagegallcard1/IMG36.jpeg",
      ],
    },
    {
      image: "/imagegallery/imagegallcard2/IMG02.jpg",
      description: "",
      unit: "BIG FIVE 2017",
      relatedImages: [
        "/imagegallery/imagegallcard2/IMG01.jpg",
        "/imagegallery/imagegallcard2/IMG02.jpg",
        "/imagegallery/imagegallcard2/IMG03.jpg",
        "/imagegallery/imagegallcard2/IMG04.jpg",
        "/imagegallery/imagegallcard2/IMG05.jpg",
        "/imagegallery/imagegallcard2/IMG06.jpg",
        "/imagegallery/imagegallcard2/IMG07.jpg",
        
        "/imagegallery/imagegallcard2/IMG09.jpg",
        "/imagegallery/imagegallcard2/IMG10.jpg",
      ],
    },
    {
      image: "/imagegallery/imagegallcard3/IMG01.jpeg",
      description: "",
      unit: "BIG FIVE EXHIBITION -2018",
      relatedImages: [
        "/imagegallery/imagegallcard3/IMG01.jpeg",
        "/imagegallery/imagegallcard3/IMG02.jpeg",
        "/imagegallery/imagegallcard3/IMG03.jpeg",
        "/imagegallery/imagegallcard3/IMG04.jpeg",
        "/imagegallery/imagegallcard3/IMG05.jpeg",
        "/imagegallery/imagegallcard3/IMG06.jpeg",
        "/imagegallery/imagegallcard3/IMG07.jpeg",
        "/imagegallery/imagegallcard3/IMG08.jpeg",
        "/imagegallery/imagegallcard3/IMG09.jpeg",
        "/imagegallery/imagegallcard3/IMG10.jpeg",
        "/imagegallery/imagegallcard3/IMG11.jpeg",
        "/imagegallery/imagegallcard3/IMG12.jpeg",
        "/imagegallery/imagegallcard3/IMG13.jpeg",
        "/imagegallery/imagegallcard3/IMG14.jpeg",
        "/imagegallery/imagegallcard3/IMG15.jpeg",
        "/imagegallery/imagegallcard3/IMG16.jpeg",
        "/imagegallery/imagegallcard3/IMG17.jpeg",
        "/imagegallery/imagegallcard3/IMG18.jpeg",
        "/imagegallery/imagegallcard3/IMG19.jpeg",
        "/imagegallery/imagegallcard3/IMG20.jpeg",
        "/imagegallery/imagegallcard3/IMG21.jpeg",
        "/imagegallery/imagegallcard3/IMG22.jpeg",
        "/imagegallery/imagegallcard3/IMG23.jpeg",
        "/imagegallery/imagegallcard3/IMG24.jpeg",
        "/imagegallery/imagegallcard3/IMG25.jpeg",
        "/imagegallery/imagegallcard3/IMG26.jpeg",
        "/imagegallery/imagegallcard3/IMG27.jpeg",
        "/imagegallery/imagegallcard3/IMG28.jpeg",
        "/imagegallery/imagegallcard3/IMG29.jpeg",
        "/imagegallery/imagegallcard3/IMG30.jpeg",
        "/imagegallery/imagegallcard3/IMG31.jpeg",
        "/imagegallery/imagegallcard3/IMG32.jpeg",
        "/imagegallery/imagegallcard3/IMG33.jpeg",
        "/imagegallery/imagegallcard3/IMG34.jpeg",
        "/imagegallery/imagegallcard3/IMG35.jpeg",
        "/imagegallery/imagegallcard3/IMG36.jpeg",
        "/imagegallery/imagegallcard3/IMG37.jpeg",
        "/imagegallery/imagegallcard3/IMG38.jpeg",
        "/imagegallery/imagegallcard3/IMG39.jpeg",
        "/imagegallery/imagegallcard3/IMG40.jpeg",
        "/imagegallery/imagegallcard3/IMG41.jpeg",
        "/imagegallery/imagegallcard3/IMG42.jpeg",
        "/imagegallery/imagegallcard3/IMG43.jpeg",
        "/imagegallery/imagegallcard3/IMG44.jpeg",
        "/imagegallery/imagegallcard3/IMG46.jpeg",
        

      ],
    },
    {
      image: "/imagegallery/imagegallcard4/IMG01.jpeg",
      description: "",
      unit: "BUSINESS EXCELLENCE AWARDS",
      relatedImages: [
        "/imagegallery/imagegallcard4/IMG01.jpeg",
        "/imagegallery/imagegallcard4/IMG02.jpeg",
        "/imagegallery/imagegallcard4/IMG03.jpeg",
        "/imagegallery/imagegallcard4/IMG04.png",
      ],
    },
    {
      image: "/imagegallery/imagegallcard5/IMG01.jpeg",
      description: "",
      unit: "NEW PROJECTS",
      relatedImages: [
        "/imagegallery/imagegallcard5/IMG01.jpeg",
        "/imagegallery/imagegallcard5/IMG02.jpeg",
        "/imagegallery/imagegallcard5/IMG03.jpeg",
        "/imagegallery/imagegallcard5/IMG04.jpeg",
        "/imagegallery/imagegallcard5/IMG05.jpeg",
      ],
    },
    {
      image: "/imagegallery/imagegallcard6/IMG01.jpg",
      description: "",
      unit: "ONAM BAKRID CELEBRATION 2017",
      relatedImages: [
        "/imagegallery/imagegallcard6/IMG01.jpg",
        "/imagegallery/imagegallcard6/IMG02.jpg",
        "/imagegallery/imagegallcard6/IMG03.jpg",
        "/imagegallery/imagegallcard6/IMG04.jpg",
        "/imagegallery/imagegallcard6/IMG05.jpg",
        "/imagegallery/imagegallcard6/IMG06.jpg",
        "/imagegallery/imagegallcard6/IMG07.jpg",
        "/imagegallery/imagegallcard6/IMG08.jpg",
        "/imagegallery/imagegallcard6/IMG09.jpg",
        "/imagegallery/imagegallcard6/IMG10.jpg",
        "/imagegallery/imagegallcard6/IMG11.jpg",
        "/imagegallery/imagegallcard6/IMG12.jpg",
        "/imagegallery/imagegallcard6/IMG13.jpg",
        "/imagegallery/imagegallcard6/IMG14.jpg",
        "/imagegallery/imagegallcard6/IMG15.jpg",
        "/imagegallery/imagegallcard6/IMG16.jpg",
      ],
    },
    {
      image: "/imagegallery/imagegallcard7/IMG01.jpeg",
      description: "",
      unit: "Safety and First Aid course in Elite Group",
      relatedImages: [
        "/imagegallery/imagegallcard7/IMG01.jpeg",
        "/imagegallery/imagegallcard7/IMG02.jpeg",
        "/imagegallery/imagegallcard7/IMG03.jpeg",
        "/imagegallery/imagegallcard7/IMG04.jpeg",
        "/imagegallery/imagegallcard7/IMG05.jpeg",
        "/imagegallery/imagegallcard7/IMG06.jpeg",
        "/imagegallery/imagegallcard7/IMG07.jpeg",
      ],
    },
    {
      image: "/imagegallery/imagegallcard8/IMG01.jpg",
      description: "",
      unit: "SPORTS MEET 2018",
      relatedImages: [
        "/imagegallery/imagegallcard8/IMG01.jpg",
        "/imagegallery/imagegallcard8/IMG02.jpg",
        "/imagegallery/imagegallcard8/IMG03.jpg",
        "/imagegallery/imagegallcard8/IMG04.jpg",
        "/imagegallery/imagegallcard8/IMG05.jpg",
        "/imagegallery/imagegallcard8/IMG06.jpg",
        "/imagegallery/imagegallcard8/IMG07.jpg",
        "/imagegallery/imagegallcard8/IMG08.jpg",
        "/imagegallery/imagegallcard8/IMG09.jpg",
        "/imagegallery/imagegallcard8/IMG10.jpg",
        "/imagegallery/imagegallcard8/IMG11.jpg",
        "/imagegallery/imagegallcard8/IMG12.jpg",
        "/imagegallery/imagegallcard8/IMG13.jpg",
        "/imagegallery/imagegallcard8/IMG14.jpg",
        "/imagegallery/imagegallcard8/IMG15.jpg",
        "/imagegallery/imagegallcard8/IMG16.jpg",
        "/imagegallery/imagegallcard8/IMG17.jpg",
        "/imagegallery/imagegallcard8/IMG18.jpg",
        "/imagegallery/imagegallcard8/IMG19.jpg",
        "/imagegallery/imagegallcard8/IMG20.jpg",
        "/imagegallery/imagegallcard8/IMG21.jpg",
        "/imagegallery/imagegallcard8/IMG22.jpg",
        "/imagegallery/imagegallcard8/IMG23.jpg",
        "/imagegallery/imagegallcard8/IMG24.jpg",
        "/imagegallery/imagegallcard8/IMG25.jpg",
        "/imagegallery/imagegallcard8/IMG26.jpg",
        "/imagegallery/imagegallcard8/IMG27.jpg",
        "/imagegallery/imagegallcard8/IMG28.jpg",
        "/imagegallery/imagegallcard8/IMG29.jpg",
        "/imagegallery/imagegallcard8/IMG30.jpg",
        "/imagegallery/imagegallcard8/IMG31.jpg",
        "/imagegallery/imagegallcard8/IMG32.jpg",
        "/imagegallery/imagegallcard8/IMG33.jpg",
        "/imagegallery/imagegallcard8/IMG34.jpg",
        "/imagegallery/imagegallcard8/IMG35.jpg",
        "/imagegallery/imagegallcard8/IMG36.jpg",
        "/imagegallery/imagegallcard8/IMG37.jpg",
        "/imagegallery/imagegallcard8/IMG38.jpg",
        "/imagegallery/imagegallcard8/IMG39.jpg",
        "/imagegallery/imagegallcard8/IMG40.jpg",
        "/imagegallery/imagegallcard8/IMG41.jpg",
        "/imagegallery/imagegallcard8/IMG42.jpg",
        "/imagegallery/imagegallcard8/IMG43.jpg",
        "/imagegallery/imagegallcard8/IMG44.jpg",
        "/imagegallery/imagegallcard8/IMG46.jpg",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              <span className="text-4xl md:text-7xl block">IMAGES GALLERY</span>
            </h1>
          </div>
        </motion.div>
      </div>

      <CardGrid cards={cards} />
      <Footer />
    </div>
  );
};

export default App;
