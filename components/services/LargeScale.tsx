import Image from "next/image";

export default function HighlightSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch px-6 py-6 mx-28">
      {/* Blue Box */}
      <div className="relative bg-[#023D68] w-full md:w-1/2 min-h-[600px] flex items-center justify-center overflow-visible">
        {/* First Image */}
        <div className="absolute right-[-50px] top-[20px]">
          <Image
            src="/services/largescale.jpg"
            alt="First Image"
            width={350}
            height={280}
            className="border-[#E8D858] border-3 shadow-lg"
          />
        </div>

        {/* Second Image */}
        <div className="absolute right-[-50px] top-[300px]">
          <Image
            src="/services/largescale2.jpg"
            alt="Second Image"
            width={350}
            height={280}
            className="border-[#E8D858] border-3 shadow-lg"
          />
        </div>
      </div>

      {/* Container to Align the Yellow Div */}
      <div className=" flex items-center w-full md:w-3/2">
        {/* Yellow Box */}
        <div className="border border-[#E8D858] border-r-8 p-6 bg-white w-full flex-shrink-0">
          <div className="ml-[80px]">
            <h2 className="text-6xl font-semibold mb-8 text-[#023D68]">
              LARGE SCALE OF OPERATIONS
            </h2>
            <p className="w-5/6 leading-8">
              Massive stockpiles of Aluminium alloy logs are systematically
              stored to cater to projects of any scale. Our system is flexible
              enough to handle demands from a small architectural challenge to a
              world class one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
