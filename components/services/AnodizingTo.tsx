import Image from "next/image";

export default function AnodizingTo() {
  return (
    <div className="flex flex-col md:flex-row items-stretch px-6 py-6 mx-28">
      {/* Blue Box */}
      <div className="relative bg-[#023D68] w-full md:w-1/2 min-h-[600px] flex items-center justify-center overflow-visible">
        {/* First Image */}
        <div className="absolute right-[-50px] top-[20px]">
          <Image
            src="/services/anodizingto.jpg"
            alt="First Image"
            width={350}
            height={280}
            className="border-[#E8D858] border-3 shadow-lg"
          />
        </div>

        {/* Second Image */}
        <div className="absolute right-[-50px] top-[300px]">
          <Image
            src="/services/anodizingto2.jpg"
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
            <h2 className="text-5xl font-semibold mb-8 text-[#023D68]">
              ANODIZING TO PERFECTION
            </h2>
            <p className="w-5/6 leading-8 mb-3">
              Aluminium oxide is hard, durable and weather resistant. Anodizing
              is an electrochemical process that forms a protective coating of
              Aluminium oxide on the surface of Aluminium. The coating is
              offered in silver, gold and bronze finishes.
            </p>
            <p className="w-5/6 leading-8 mb-3">
              This process is only appropriate on certain Aluminium alloys. Some
              of the advantages of anodizing include:
            </p>
            <ul className="w-5/6 leading-8 mb-3">
              <li>- Generally less expensive</li>
              <li>- Longer life; Low maintanence</li>

              <li>- Unaffected by sunlight</li>
            </ul>
            <p className="w-5/6 leading-8 mb-3">
              The unit is certified with Qualanod, and has an annual production
              capacity of 7,200 MT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
