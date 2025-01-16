'use client';
import React, { useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

interface Card {
  image: string;
  title?: string;
  description: string;
  longDescription: string;
  unit: string;
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 relative">
            <motion.div
                    className="relative h-64 pointer-events-none"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}>
              <img 
                src={card.image} 
                alt={card.title || card.description}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedImage(card.image)} // Set selected image on click
              />
            </motion.div>
            <div className="p-6">
              <p className="text-sm text-gray-600">
                {card.description}
              </p>
              <p className="text-sm text-gray-600">
                {card.unit}
              </p>
              {/* Display long description */}
              <p className="text-base text-gray-800 mt-4">
                {card.longDescription}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8D858]"></div>
          </div>
        ))}
      </div>

      {/* Modal for Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img 
            src={selectedImage}
            alt="Selected"
            className="max-w-3xl max-h-[90%] object-contain cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const cards: Card[] = [
    {
      image: "/ourgroups/news/news1.jpeg",
      description: "29/11/2018",
      longDescription: "Elite Group of Companies showcased in one of the biggest booth of the BIG 5 Exhibition 2018. We want to express our sincere gratitude to all the attendees for making this event another professional growth experience. Have a look in the related image and video galleries.",
      unit: "Elite Group Stand once again at the BIG 5 2018",
    },
    {
      image: "/ourgroups/news/news2.jpeg",
      description: "15/10/2018",
      longDescription: "National Aluminum Extrusion supplied large quantity of customized aluminum profiles for the tensile fabric structure engineered by HARDO Group. Our client selected Nalexco as the trusted partner for this prestigious project which will hold the next Football Asian Cup in 2019. Project: Al Nasr Stadium, Dubai (U.A.E.) Consultant: OBE Architect & Salama Structural Engineering Main Contractor: Bin Ladin Group Subcontractor: HARDCO",
      unit: "Nalexco supply aluminum profiles for Al Nasr Stadium project in Dubai",
    },
    {
      image: "/ourgroups/news/news3.jpeg",
      description: "15/09/2018",
      longDescription: "Elite Group of Companies is pleased to announce its participation to the BIG 5 Show 2018 in Dubai (United Arab Emirates). Following the success in the 2017 edition, Elite will be present in one of the biggest stand in all venue, the World Trade Center. The Big 5 is a series of construction trade fairs originating in Dubai and connecting international suppliers of construction products and services with buyers from the MENA region. The Dubai edition is held annually and attract more than 60.000 visitors and 2.000 exhibitors from 60 different countries, making the exhibition the largest construction event in the Middle East. Elite Group will be located in the Building Envelope & Special Construction Hall, Stand SS1 A131 (Sheikh Saeed Hall).",
      unit: "Elite Group at the BIG 5 Exhibition 2018",
    },
    {
      image: "/ourgroups/news/news4.jpeg",
      description: "07/09/2018",
      longDescription: "Thermoset Middle East LLC achieve upgraded certification for Quality Management System ISO 9001:2015. These international standard specifies the requirements for a quality management system (QMS). The QMS is a set of policies, processes and procedures required for planning and execution (production, development and service) in the core business area of an organization. The basic principles for such certification are: Customer focus, Leadership, Engagement of people, Process approach, Continuous Improvement, Evidence-based decision-making, Relationship management. Other subsidiaries in Elite Group are under the same process to upgrade their certificate for higher standards.",
      unit: "Thermoset Middle East upgraded certification ISO 9001:2015",
    },
    {
      image: "/ourgroups/news/news5.jpeg",
      description: "01/08/2018",
      longDescription: "Classic Extrusion upgraded its certification for Quality Management System ISO 9001:2015. These international standard specifies the requirements for a quality management system (QMS). The QMS is a set of policies, processes and procedures required for planning and execution (production, development and service) in the core business area of an organization. The basic principles for such certification are: Customer focus, Leadership, Engagement of people, Process approach, Continuous Improvement, Evidence-based decision-making, Relationship management. Other subsidiaries in Elite Group are under the same process to upgrade their certificate for higher standards.",
      unit: "Classic Extrusion upgraded certicifictation ISO 9001:2015",
    },
    {
      image: "/ourgroups/news/news6.png",
      description: "30/07/2018",
      longDescription: "National Aluminum Extrusion Co. LLC (Nalexco) achieve upgraded certification for Quality Management System ISO 9001:2015. These international standard specifies the requirements for a quality management system (QMS). The QMS is a set of policies, processes and procedures required for planning and execution (production, development and service) in the core business area of an organization. The basic principles for such certification are: Customer focus, Leadership, Engagement of people, Process approach, Continuous Improvement, Evidence-based decision-making, Relationship management. Other subsidiaries in Elite Group are under the same process to upgrade their certificate for higher standards.",
      unit: "Nalexco upgraded certification ISO 9001:2015",
    },
    {
      image: "/ourgroups/news/news7.png",
      description: "08/07/2018",
      longDescription: "The Elite Group in-house division 'Global Dies' recorded a new maximum production of 180 Dies in the two previous consecutive months of May and June 2018. The management takes this opportunity to congratulate everybody those who have contributed for achieving this result. Elite Group extends its gratitude to one and all for their dedication and efforts put into it. Let the spirit continue.",
      unit: "Dies' production achievement",
    },
    {
      image: "/ourgroups/news/news8.jpeg",
      description: "01/07/2018",
      longDescription: "Elite Extrusion achieve upgraded certification for Quality Management System ISO 9001:2015. ISO 9001 is the international standard that specifies requirements for a quality management system (QMS). The QMS is a set of policies, processes and procedures required for planning and execution (production, development and service) in the core business area of an organization. The basic principles for such certification are: Customer focus, Leadership, Engagement of people, Process approach, Continuous Improvement, Evidence-based decision-making, Relationship management. Other subsidiaries in Elite Group are under the same process to upgrade their certificate for higher standards.",
      unit: "Elite Extrusion upgraded ISO 9001:2015 Certification",
    },
    {
      image: "/ourgroups/news/news9.jpeg",
      description: "23/04/2018",
      longDescription: "Global Pioneer Aluminum Industry has completed the project in Dubai Marina Wharf 2 Tower for aluminum & glazing works. Client: Dheeraj & East Coast Developer (DEC), Consultant: Dimension Engineering (Dubai). The Marina Wharf 2 is a residential property that combines luxury with affordability on the awe-inspiring Dubai Marina. Dubai Marina is well known for being the largest waterfront community in the world.",
      unit: "Global Pioneer Aluminum Industries completed one more project in Dubai",
    },
    {
      image: "/ourgroups/news/news10.jpeg",
      description: "05/03/2018",
      longDescription: "Alumill Tech Gulf achieve upgraded certification for Quality Management System ISO 9001:2015. ISO 9001 is the international standard that specifies requirements for a quality management system (QMS). The QMS is a set of policies, processes and procedures required for planning and execution (production, development and service) in the core business area of an organization. The basic principles for such certification are: Customer focus, Leadership, Engagement of people, Process approach, Continuous Improvement, Evidence-based decision-making, Relationship management. All the other companies in Elite Group are under the same process to upgrade their certificates o new higher standards.",
      unit: "Alumill Tech Gulf upgraded ISO Certification 9001:2015",
    },
    {
      image: "/ourgroups/news/news11.png",
      description: "01/02/2018",
      longDescription: "Ras Al Khaimah Economic Zone (RAKEZ) and RAK Department of Economic Development (RAK DED) have finally revealed the winners of the 2017 RAKEZ Business Excellence Awards during a glittering award ceremony held at Rixos Bab Al Bahr, Al Marjan Island, on 25 January 2018. Alumill Tech Gulf has been awarded in the category 'Best Industrial Company of the year 2017'. The awards programme has yet again delivered an incredible night of celebration dedicated to the outstanding free zone and non-free zone businesses across Ras Al Khaimah.",
      unit: "Business Excellence Awards for 2017 - RAK Economic Zone",
    },
    {
      image: "/ourgroups/news/news12.png",
      description: "07/01/2018",
      longDescription: "Elite Group of Companies is pleased to announce that the name and license of Classic Extrusions L.L.C. have been taken over as of the date of yesterday 6 January 2018. Hence the subsidiary name of Al Hamad Extrusion Division will be replaced with Classic Extrusion and further, all operations will be under this name only. For smooth operations, henceforth please address all correspondence and requirements to Classic Extrusions LLC.",
      unit: "Classic Extrusion LLC license taking over",
    },
    {
      image: "/ourgroups/news/news13.png",
      description: "01/11/2017",
      longDescription: "Thermoset Middle East L.L.C. has achieved a new milestone of producing a new record quantity of product reaching 7000 metric tonnes this year, to support the demand from large scale clients. The company continues to maintain strict adherence to standards of quality in each product produced, to maintain continued excellence in its operations.",
      unit: "Thermoset Middle East achieves production record",
    },
    // Add other cards if necessary...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[550px] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Decorative lines */}
        <div className="absolute top-[120px] right-6 h-1 w-[45%] bg-[#E8D858]"></div>
        <div className="absolute bottom-6 left-6 h-1 w-[45%] bg-[#E8D858]"></div>

        {/* Static Title */}
        <div className="relative z-10 text-center px-4">
          <div className="inline-block bg-[#023D68] bg-opacity-80 py-4 px-8 rounded">
            <h1 className="text-white font-semibold">
              <span className="text-4xl md:text-7xl block">NEWS</span>
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
