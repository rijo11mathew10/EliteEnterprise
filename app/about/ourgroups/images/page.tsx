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

  const handleViewMore = (index: number) => {
    setExpandedCard(index === expandedCard ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards[expandedCard].relatedImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 relative"
              >
                <div className="relative h-64">
                  <Image
                    src={image}
                    alt={`Related image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const cards: Card[] = [
    {
      image: "/imagegallery/initialcardsimage/imagegallery1.jpg",
      description: "29/11/2018",
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
        "/imagegallery/imagegallcard1/IMG37.jpeg",
        "/imagegallery/imagegallcard1/IMG38.jpeg",
        "/imagegallery/imagegallcard1/IMG39.jpeg",
        "/imagegallery/imagegallcard1/IMG40.jpeg",
        "/imagegallery/imagegallcard1/IMG41.jpeg",
        "/imagegallery/imagegallcard1/IMG42.jpeg",
        "/imagegallery/imagegallcard1/IMG43.jpeg",
        "/imagegallery/imagegallcard1/IMG44.jpeg",
        "/imagegallery/imagegallcard1/IMG45.jpeg",
        "/imagegallery/imagegallcard1/IMG46.jpeg",
        "/imagegallery/imagegallcard1/IMG47.jpeg",
        "/imagegallery/imagegallcard1/IMG48.jpeg",
        "/imagegallery/imagegallcard1/IMG49.jpeg",
        "/imagegallery/imagegallcard1/IMG50.jpeg",
        "/imagegallery/imagegallcard1/IMG51.jpeg",
        "/imagegallery/imagegallcard1/IMG52.jpeg",
        "/imagegallery/imagegallcard1/IMG53.jpeg",
        "/imagegallery/imagegallcard1/IMG54.jpeg",
        "/imagegallery/imagegallcard1/IMG55.jpeg",
        "/imagegallery/imagegallcard1/IMG56.jpeg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery2.jpg",
      description: "",
      unit: "BIG FIVE 2017",
      relatedImages: [
        "/imagegallery/imagegallcard2/IMG01.jpeg",
        "/imagegallery/imagegallcard2/IMG02.jpeg",
        "/imagegallery/imagegallcard2/IMG03.jpeg",
        "/imagegallery/imagegallcard2/IMG04.jpeg",
        "/imagegallery/imagegallcard2/IMG05.jpeg",
        "/imagegallery/imagegallcard2/IMG06.jpeg",
        "/imagegallery/imagegallcard2/IMG07.jpeg",
        "/imagegallery/imagegallcard2/IMG08.jpeg",
        "/imagegallery/imagegallcard2/IMG09.jpeg",
        "/imagegallery/imagegallcard2/IMG10.jpeg",
        "/imagegallery/imagegallcard2/IMG11.jpeg",
        "/imagegallery/imagegallcard2/IMG12.jpeg",
        "/imagegallery/imagegallcard2/IMG13.jpeg",
        "/imagegallery/imagegallcard2/IMG14.jpeg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery3.jpg",
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
        "/imagegallery/imagegallcard3/IMG45.jpeg",
        "/imagegallery/imagegallcard3/IMG46.jpeg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery4.jpg",
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
      image: "/imagegallery/initialcardsimage/imagegallery5.jpg",
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
      image: "/imagegallery/initialcardsimage/imagegallery6.jpg",
      description: "",
      unit: "ONAM BAKRID CELEBRATION 2017",
      relatedImages: [
        "/imagegallery/imagegallcard6/IMG01.jpeg",
        "/imagegallery/imagegallcard6/IMG02.jpeg",
        "/imagegallery/imagegallcard6/IMG03.jpeg",
        "/imagegallery/imagegallcard6/IMG04.jpeg",
        "/imagegallery/imagegallcard6/IMG05.jpeg",
        "/imagegallery/imagegallcard6/IMG06.jpeg",
        "/imagegallery/imagegallcard6/IMG07.jpeg",
        "/imagegallery/imagegallcard6/IMG08.jpeg",
        "/imagegallery/imagegallcard6/IMG09.jpeg",
        "/imagegallery/imagegallcard6/IMG10.jpeg",
        "/imagegallery/imagegallcard6/IMG11.jpeg",
        "/imagegallery/imagegallcard6/IMG12.jpeg",
        "/imagegallery/imagegallcard6/IMG13.jpeg",
        "/imagegallery/imagegallcard6/IMG14.jpeg",
        "/imagegallery/imagegallcard6/IMG15.jpeg",
        "/imagegallery/imagegallcard6/IMG16.jpeg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery7.jpg",
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
        "/imagegallery/imagegallcard7/IMG08.jpeg",
      ],
    },
    // Add more cards as needed
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
              {/* Elite */}
              <span className="text-4xl md:text-7xl block">IMAGES</span>
              {/* Extrusion LLC */}
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
