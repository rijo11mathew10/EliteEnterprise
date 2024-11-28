import Image from "next/image";

export default function HighlightSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch px-6 py-6 mx-28">
      {/* Container to Align the Yellow Div */}
      <div className="relative flex items-center w-full md:w-3/2">
        {/* Yellow Box */}
        <div className="border border-[#E8D858] border-l-8 p-6 bg-white w-full flex-shrink-0">
          <h2 className="text-6xl font-semibold mb-8 text-[#023D68]">
            WOOD FINISH <br />
            PROCESS
          </h2>
          <p className="w-5/6 leading-8">
            The wood finish lines from Elite Extrusion reproduce wood effects
            and special textures on aluminium profiles. These plants allow the
            company to produce high-quality aluminium systems with a sleek wood
            finish that are both elegant and durable. The end products are apt
            for doors, windows, and kitchen cabinets, and they are available in
            a variety of shades and tones.
          </p>
        </div>
      </div>

      {/* Blue Box */}
      <div className="relative bg-[#023D68] w-full md:w-1/2 min-h-[600px] flex items-center justify-center overflow-visible">
        {/* First Image */}
        <div className="absolute left-[-50px] top-[20px] ">
          <Image
            src="/services/woodfinish.jpg"
            alt="First Image"
            width={350}
            height={280}
            className=" border-[#E8D858] border-3 shadow-lg"
          />
        </div>

        {/* Second Image */}
        <div className="absolute left-[-50px] top-[300px]">
          <Image
            src="/services/woodfinish2.jpg"
            alt="Second Image"
            width={350}
            height={280}
            className=" border-[#E8D858] border-3 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
