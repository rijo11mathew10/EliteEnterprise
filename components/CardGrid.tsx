import React from "react";
import Link from "next/link";  // Import Link from Next.js

interface Card {
  image: string;
  title: string;
  description: string;
  unit: string;
  link: string;  // Add a link property to navigate when the card is clicked
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <section className="py-12 bg-white-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {cards.map((card, index) => (
            // Directly wrap the content with Link without <a> tag
            <Link key={index} href={card.link}>
              <div
                className="flex flex-col bg-white text-[#023D68] shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:z-10 hover:bg-white hover:text-[#023D68] hover:border-[#E8D858] border-b-4 h-full"  // Set the height to full
                style={{ borderBottomColor: "#E8D858" }}
              >
                {/* Image Section */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex justify-center items-center hover:bg-[#E8D858]">
                  <img
                    alt={card.title}  // Provide an alt text for accessibility
                    src={card.image}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Content Section */}
                <div className="flex flex-col p-6 flex-grow justify-between">  {/* Added justify-between for equal spacing */}
                  <h3 className="mt-4 text-lg font-bold sm:text-xl transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div>
                    <h2 className="mt-2 max-w-sm transition-colors duration-300">
                      <span className="bg-[#023D68] text-white hover:bg-white hover:text-[#023D68]">
                        {card.description}
                      </span>
                    </h2>
                    <h2 className="transition-colors duration-300">{card.unit}</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
