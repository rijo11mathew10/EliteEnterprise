"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon

import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isClick, setisClick] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  const toggleDropdown = (
    state: boolean,
    dropdownName: string | null
  ): void => {
    setOpenDropdown(state ? dropdownName : null);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#023D68] text-[#D5D5D5] pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 flex justify-end items-center space-x-8">
          <a href="#" className="hover:underline">
            CAREERS
          </a>
          <a href="#" className="hover:underline">
            NEWS
          </a>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-lg" />
            <span>+971 7 244 7668</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#023D68] pb-4 relative">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href={"/"}>
                <Image src={"/logo.png"} alt="logo" width={195} height={78} />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
                >
                  Home
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => toggleDropdown(true, "about")}
                  onMouseLeave={() => toggleDropdown(false, null)}
                >
                  <Link
                    href="/about"
                    className={`rounded-lg p-2 ${
                      openDropdown === "about"
                        ? "bg-[#E8D858] text-black"
                        : "text-white hover:bg-[#E8D858] hover:text-black"
                    }`}
                  >
                    About Us
                  </Link>
                  {openDropdown === "about" && (
                    <div
                      className="absolute left-0 mt-2 w-[35rem] bg-white bg-opacity-80 shadow-lg p-6 grid grid-cols-2 gap-6 transition-opacity duration-300 border border-[#E8D858]"
                      style={{ zIndex: 10, top: "100%" }}
                    >
                      <div>
                        <h3 className="text-lg font-bold text-[#023D68] mb-4">
                          WHO WE ARE
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/about"
                              className="hover:text-[#023D68]"
                            >
                              ABOUT OUR COMPANY
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourprojects"
                              className="hover:text-[#023D68]"
                            >
                              OUR PROJECTS
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourglobalmarkets"
                              className="hover:text-[#023D68]"
                            >
                              OUR GLOBAL MARKETS
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="hover:text-[#023D68]">
                              OUR SUPPLIERS
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="hover:text-[#023D68]">
                              OUR CERTIFICATIONS
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="hover:text-[#023D68]">
                              OUR POLICIES AND ASSURANCE
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#023D68] mb-4">
                          OUR GROUPS
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/about/ourgroups/eliteextrusion"
                              className="hover:text-[#023D68]"
                            >
                              ELITE EXTRUSION LLC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourgroups/nationalaluminium"
                              className="hover:text-[#023D68]"
                            >
                              NATIONAL ALUMINIUM EXTRUSION LLC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourgroups/classicextrusion"
                              className="hover:text-[#023D68]"
                            >
                              CLASSIC EXTRUSION LLC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourgroups/alumiltech"
                              className="hover:text-[#023D68]"
                            >
                              ALUMIL TECH GULF LLC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourgroups/thermoset"
                              className="hover:text-[#023D68]"
                            >
                              THERMOST MIDDLE EAST
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourgroups/globalpioneer"
                              className="hover:text-[#023D68]"
                            >
                              GLOBAL PIONEER ALUMINIUM INDUSTRIES
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourgroups/jordan"
                              className="hover:text-[#023D68]"
                            >
                              JORDAN ALUMINIUM EXTRUSION
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourgroups/unitedpowdercoating"
                              className="hover:text-[#023D68]"
                            >
                              UNITED POWDER COATING FZC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/ourgroups/nashat"
                              className="hover:text-[#023D68]"
                            >
                              NASHAT METAL ENGINEERING LLC
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                {["products", "services", "media"].map((dropdown) => (
                  <div
                    key={dropdown}
                    className="relative"
                    onMouseEnter={() => toggleDropdown(true, dropdown)}
                    onMouseLeave={() => toggleDropdown(false, null)}
                  >
                    <Link
                      href={`/${dropdown}`}
                      className={`rounded-lg p-2 ${
                        openDropdown === dropdown
                          ? "bg-[#E8D858] text-black"
                          : "text-white hover:bg-[#E8D858] hover:text-black"
                      }`}
                    >
                      {dropdown.charAt(0).toUpperCase() + dropdown.slice(1)}
                    </Link>
                    {openDropdown === dropdown && (
                      <div
                        className="absolute left-0 mt-2 w-[15rem] bg-white bg-opacity-80 shadow-lg p-6 grid grid-cols-1 gap-4 transition-opacity duration-300 border border-[#E8D858]"
                        style={{ zIndex: 10, top: "100%" }}
                      >
                        {Array.from({ length: 3 }).map((_, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="hover:text-[#023D68]"
                          >
                            {dropdown.charAt(0).toUpperCase() +
                              dropdown.slice(1)}{" "}
                            Item {index + 1}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contactus"
                  className="text-white hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
                >
                  Contact Us
                </Link>
                <Button className="bg-white rounded-sm font-xl">
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="lg:hidden flex items-center">
              <Button
                className="inline-flex items-center justify-center p-2 rounded-md text-white 
              hover:text-white focus:outline-none focus-ring-2 focus-ring-inset focus:ring-white "
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6L18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
