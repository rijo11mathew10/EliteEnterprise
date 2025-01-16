"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      unit: "Elite Group Stand once again at the BIG 5 2018",
      relatedImages: [
        "/imagegallery/imagegallcard1/img1.jpg",
        "/imagegallery/imagegallcard1/img2.jpg",
        "/imagegallery/imagegallcard1/img3.jpg",
        "/imagegallery/imagegallcard1/img4.jpg",
        "/imagegallery/imagegallcard1/img5.jpg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery2.jpg",
      description: "29/11/2018",
      unit: "Elite Group Stand once again at the BIG 5 2018",
      relatedImages: [
        "/imagegallery/imagegallcard2/img1.jpg",
        "/imagegallery/imagegallcard2/img2.jpg",
        "/imagegallery/imagegallcard2/img3.jpg",
        "/imagegallery/imagegallcard2/img4.jpg",
        "/imagegallery/imagegallcard2/img5.jpg",
        "/imagegallery/imagegallcard2/img6.jpg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery3.jpg",
      description: "29/11/2018",
      unit: "Elite Group Stand once again at the BIG 5 2018",
      relatedImages: [
        "/imagegallery/imagegallcard3/img1.jpg",
        "/imagegallery/imagegallcard3/img2.jpg",
        "/imagegallery/imagegallcard3/img3.jpg",
        "/imagegallery/imagegallcard3/img4.jpg",
        "/imagegallery/imagegallcard3/img5.jpg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery4.jpg",
      description: "29/11/2018",
      unit: "Elite Group Stand once again at the BIG 5 2018",
      relatedImages: [
        "/imagegallery/imagegallcard4/img1.jpg",
        "/imagegallery/imagegallcard4/img2.jpg",
        "/imagegallery/imagegallcard4/img3.jpg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery5.jpg",
      description: "29/11/2018",
      unit: "Elite Group Stand once again at the BIG 5 2018",
      relatedImages: [
        "/imagegallery/imagegallcard5/img1.jpg",
        "/imagegallery/imagegallcard5/img2.jpg",
        "/imagegallery/imagegallcard5/img3.jpg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery6.jpg",
      description: "29/11/2018",
      unit: "Elite Group Stand once again at the BIG 5 2018",
      relatedImages: [
        "/imagegallery/imagegallcard6/img1.jpg",
        "/imagegallery/imagegallcard6/img2.jpg",
        "/imagegallery/imagegallcard6/img3.jpg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery7.jpg",
      description: "29/11/2018",
      unit: "Elite Group Stand once again at the BIG 5 2018",
      relatedImages: [
        "/imagegallery/imagegallcard7/img1.jpg",
        "/imagegallery/imagegallcard7/img2.jpg",
        "/imagegallery/imagegallcard7/img3.jpg",
      ],
    },
    {
      image: "/imagegallery/initialcardsimage/imagegallery8.jpg",
      description: "29/11/2018",
      unit: "Elite Group Stand once again at the BIG 5 2018",
      relatedImages: [
        "/imagegallery/imagegallcard8/img1.jpg",
        "/imagegallery/imagegallcard8/img2.jpg",
        "/imagegallery/imagegallcard8/img3.jpg",
      ],
    },
    // Add more cards as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[550px] flex items-center justify-center overflow-hidden group"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Decorative lines with CSS transitions */}
        <div className="absolute top-[120px] right-6 h-1 w-[45%] bg-[#E8D858] opacity-0 transform translate-x-12 transition-all duration-1000 ease-out group-hover:opacity-100 group-hover:translate-x-0"></div>
        <div className="absolute bottom-6 left-6 h-1 w-[45%] bg-[#E8D858] opacity-0 transform -translate-x-12 transition-all duration-1000 ease-out group-hover:opacity-100 group-hover:translate-x-0"></div>

        {/* Title */}
        <div className="relative z-10 text-center px-4 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
            <h1 className="text-white font-semibold">
              <span className="text-4xl md:text-7xl block">IMAGE GALLERY</span>
            </h1>
          </div>
        </div>
      </div>

      <CardGrid cards={cards} />
      <Footer />
    </div>
  );
};

export default App;
