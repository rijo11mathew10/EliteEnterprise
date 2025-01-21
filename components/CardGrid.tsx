import React from "react";

interface Card {
  image: string;
  title: string;
  description: string;
  unit: string;
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <a
              key={index}
              href="#"
              className="block bg-white text-[#023D68] shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:z-10 hover:bg-white hover:text-[#023D68] hover:border-[#E8D858] border-b-4"
              style={{ borderBottomColor: "#E8D858" }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex justify-center items-center hover:bg-[#E8D858]">
                <img
                  alt=""
                  src={card.image}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mt-4 text-lg font-bold sm:text-xl transition-colors duration-300">
                  {card.title}
                </h3>
                <div>
                  <h2 className="mt-2 max-w-sm transition-colors duration-300">
                    <span className="bg-[#023D68] text-white hover:bg-white hover:text-[#023D68]">
                      {card.description}
                    </span>
                  </h2>
                  <h2 className="transition-colors duration-300">
                    {card.unit}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
