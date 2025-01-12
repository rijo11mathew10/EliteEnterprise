import React from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Card {
  image: string;
  title?: string;
  description: string;
  unit: string;
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 relative">
            <div className="relative h-64">
              <img 
                src={card.image} 
                alt={card.title || card.description}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600">
                {card.description}
              </p>
              <p className="text-sm text-gray-600">
                {card.unit}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8D858]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const cards: Card[] = [
    {
      image: "/cardgrid/slide1.jpg",
      description: "29/11/2018",
      unit: "Elite Group Stand once again at the BIG 5 2018",
    },
    {
      image: "/cardgrid/slide2.jpg",
      title: "POWDER COATING DIVISION",
      description: "44,400 metric ton",
      unit: "Output per annum",
    },
    {
      image: "/cardgrid/slide3.jpg",
      title: "ANODIZING DIVISION",
      description: "14,800 metric ton",
      unit: "Output per annum",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "WOOD COATING DIVISION",
      description: "1500 metric ton",
      unit: "Output per annum",
    },
    {
      image: "/cardgrid/slide5.jpg",
      title: "EXTRUSION DIE DIVISION",
      description: "1800 Dies",
      unit: "Output per annum",
    },
    {
      image: "/cardgrid/slide6.jpg",
      title: "EPDM RUBBER PRODUCTS DIVISION",
      description: "1800 metric ton",
      unit: "Output per annum",
    },
    {
      image: "/cardgrid/slide7.jpg",
      title: "ALUMINIUM COIL & SHEET DIVISION",
      description: "30,000 metric ton",
      unit: "Output per annum",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "SOLAR DIVISION",
      description: "25,000 metric ton",
      unit: "Output per annum",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "RECYCLING DIVISION",
      description: "18,000 metric ton",
      unit: "Recycled aluminium per annum",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "FOUNDRY DIVISION",
      description: "20,000 metric ton",
      unit: "Output per annum",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "ARCHITECTURAL PRODUCTS",
      description: "Premium designs",
      unit: "Available worldwide",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "SPECIALTY EXTRUSIONS",
      description: "Custom solutions",
      unit: "For diverse industries",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "INDUSTRIAL PRODUCTS",
      description: "High performance",
      unit: "For manufacturing needs",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "TRANSPORTATION PRODUCTS",
      description: "Lightweight aluminium",
      unit: "For vehicles",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "ENERGY EFFICIENT SOLUTIONS",
      description: "Advanced designs",
      unit: "For sustainable development",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "HIGH PRECISION EXTRUSIONS",
      description: "Precision engineering",
      unit: "For critical applications",
    },
    {
      image: "/cardgrid/slide4.jpg",
      title: "EXTRUSION TESTING FACILITY",
      description: "Quality assurance",
      unit: "State-of-the-art labs",
    },
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