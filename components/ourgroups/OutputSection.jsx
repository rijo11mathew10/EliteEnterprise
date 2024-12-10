const OutputSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-4 p-4">
      {/* Left Box */}
      <div className="bg-[#023D68] text-white p-4 relative">
        <div className="absolute right-0 bottom-0 h-full w-full -skew-x-12 bg-[#023D68]" />
        <div className="relative z-10 text-lg font-semibold">
          Output per annum
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white shadow-lg p-6 rounded-md flex-1">
        <div className="flex flex-col items-center space-y-4">
          {/* First Heading */}
          <div className="text-xl font-semibold">Heading 1</div>
          <div className="text-4xl font-bold">100</div>

          {/* Second Heading */}
          <div className="text-xl font-semibold">Heading 2</div>
          <div className="text-4xl font-bold">200</div>

          {/* Third Heading */}
          <div className="text-xl font-semibold">Heading 3</div>
          <div className="text-4xl font-bold">300</div>
        </div>
      </div>
    </div>
  );
};

export default OutputSection;
