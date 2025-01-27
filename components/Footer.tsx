// components/Footer.tsx
import Image from "next/image"; // if you're using an image for the logo
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa"; // for the social icons

const Footer = () => {
  return (
    <footer className="bg-[#023D68] text-[#D5D5D5] py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
          {/* First Column: Groups 1-3 (Left-aligned) */}
          <div className="flex flex-col">
            <h3 className="text-lg font-light mb-4">GROUPS</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about/ourgroups/eliteextrusion"
                  className="hover:underline"
                >
                  Elite Extrusion LLC{" "}
                </a>
              </li>
              <li>
                <a
                  href="/about/ourgroups/nationalaluminium"
                  className="hover:underline"
                >
                  National Aluminium Extrusion LLC{" "}
                </a>
              </li>
              <li>
                <a
                  href="/about/ourgroups/classicextrusion"
                  className="hover:underline"
                >
                  Classic Extrusion LLC{" "}
                </a>
              </li>
              <li>
                <a
                  href="/about/ourgroups/alumiltech"
                  className="hover:underline"
                >
                  Alumill Tech Gulf LLC{" "}
                </a>
              </li>
              <li>
                <a
                  href="/about/ourgroups/thermoset"
                  className="hover:underline"
                >
                  Thermoset Middle East{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* Second Column: Groups 4-5 (Middle Column, No Heading) */}
          <div className="flex flex-col">
            <ul className="space-y-2">
              {/* Blank first line to align with the first column */}
              <li>&nbsp;</li>
              <li>
                <Link
                  href="/about/ourgroups/globalpioneer"
                  className="hover:underline"
                >
                  Global Pioneer Aluminium{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/about/ourgroups/jordan"
                  className="hover:underline"
                >
                  Jordan Aluminium Extrusion{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/about/ourgroups/unitedpowdercoating"
                  className="hover:underline"
                >
                  United Powder Coating FZC{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/about/ourgroups/nashat"
                  className="hover:underline"
                >
                  Nashat Metal Engineering LLC{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column: Address (Right-aligned) */}
          <div className="flex flex-col">
            <h3 className="text-lg font-light mb-4">OUR PRIME ADDRESS</h3>
            <p>Elite Extrusion LLC</p>
            <p>P O BOX: 86025, Ras Al Khaimah - UAE</p>
            <p className="mt-4">
              <span className="font-semibold">Phone:</span> +971 50 123 4567
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <Link href="mailto:info@example.com" className="hover:underline">
                info@example.com
              </Link>
            </p>
            <p>
              <Link
                href="https://www.google.com/maps?q=Ras+Al+Khaimah,+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Open in Google Maps
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Line and Logo/Social Icons */}
        <div className="border-t-2 border-[#E8D858] mt-8 pt-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Company Logo with Increased Size */}
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={120}
              height={120}
            />
          </div>

          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8D858]"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8D858]"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
