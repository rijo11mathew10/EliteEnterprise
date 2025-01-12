// ContentSection.tsx
import React from "react";

interface ContentSectionProps {
  title: string;
  value: string;
  unit: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  value,
  unit,
}) => {
  return (
    <div className="p-4 rounded-lg">
      <div className="text-center">
        <h2 className="text-[#484848] text-3xl">{title}</h2>
        <h3 className="font-bold text-3xl text-[#023D68]">{value}</h3>
        <p className="text-[#484848]">{unit}</p>
      </div>
    </div>
  );
};

export default ContentSection;
