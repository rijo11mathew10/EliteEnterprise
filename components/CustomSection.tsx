import React from "react";
import ContentSection from "./ContentSection";

// Define the Section type
interface Section {
  title: string;
  value: string;
  unit: string;
}

interface CustomSectionProps {
  sections: Section[];
}

const CustomSection: React.FC<CustomSectionProps> = ({ sections }) => {
  const sectionsCount = sections.length;

  // Set the grid-cols dynamically based on the number of sections
  const gridCols =
    sectionsCount === 1
      ? "grid-cols-1"
      : sectionsCount === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  return (
    <div className="bg-white p-10">
      {" "}
      {/* Add padding to the sides */}
      {/* Outer grid with border */}
      <div className={`grid grid-cols-4 gap-4 border-2 border-[#E8D858]`}>
        {/* First element with a relative parent */}
        <div className="relative flex items-center justify-center">
          <div
            className=" hidden sm:block absolute top-1/2 -translate-y-1/2 w-full h-[130%] bg-[#023D68] p-4 flex items-center justify-center text-4xl text-white font-bold"
            style={{
              clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
            }}
          >
            <p className="text-center">
              Output <br /> per annum
            </p>
          </div>
        </div>

        {/* Content section container, applying gridCols dynamically */}
        <div className={`col-span-3 grid ${gridCols} gap-4`}>
          {sections.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              value={section.value}
              unit={section.unit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
