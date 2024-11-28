import Image from "next/image";

export default function AdvancedPower() {
  return (
    <div className="flex flex-col md:flex-row items-stretch px-6 py-6 mx-28">
      {/* Container to Align the Yellow Div */}
      <div className="relative flex items-center w-full md:w-3/2">
        {/* Yellow Box */}
        <div className="border border-[#E8D858] border-l-8 p-6 bg-white w-full flex-shrink-0">
          <h2 className="text-6xl font-semibold mb-8 text-[#023D68]">
            ADVANCED POWDER COATING MACHINES
          </h2>
          <p className="w-5/6 leading-8">
            A high capacity vertical powder coating machine is installed at
            Elite Extrusion. The production capacity is 14,400 MT per annum. The
            advanced machine swiftly coats the extrusions to perfection. Their
            usage means few operators and more output compared to horizontal
            plants. This is one of the highlights of the powder coating plants
            here.
          </p>
        </div>
      </div>

      {/* Blue Box */}
      <div className="relative bg-[#023D68] w-full md:w-1/2 min-h-[600px] flex items-center justify-center overflow-visible">
        {/* First Image */}
        <div className="absolute left-[-50px] top-[20px] ">
          <Image
            src="/services/advancedpower.jpg"
            alt="First Image"
            width={350}
            height={280}
            className=" border-[#E8D858] border-3 shadow-lg"
          />
        </div>

        {/* Second Image */}
        <div className="absolute left-[-50px] top-[300px]">
          <Image
            src="/services/advancedpower2.jpg"
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
