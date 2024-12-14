"use client";

import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isClick] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const navitems = [
    {
      topic: "Home",
      link: "/",
      sections: null,
    },

    {
      topic: "About Us",
      link: null,
      sections: [
        {
          heading: "WHO WE ARE",
          items: [
            {
              text: "ABOUT OUR COMPANY",
              link: "/about",
            },
            {
              text: "OUR PROJECTS",
              link: "/about/ourprojects",
            },
            {
              text: "OUR GLOBAL MARKETS",
              link: "/about/ourglobalmarkets",
            },
            {
              text: "OUR SUPPLIERS",
              link: "/about",
            },
            {
              text: "OUR CERTIFICATIONS",
              link: "/about",
            },
            {
              text: "OUR POLICIES AND ASSURANCE",
              link: "/about",
            },
          ],
        },
        {
          heading: "OUR GROUPS",
          items: [
            {
              text: "ELITE EXTRUSION LLC",
              link: "/about/ourgroups/eliteextrusion",
            },
            {
              text: "NATIONAL ALUMINIUM EXTRUSION LLC",
              link: "/about/ourgroups/nationalaluminium",
            },
            {
              text: "CLASSIC EXTRUSION LLC",
              link: "/about/ourgroups/classicextrusion",
            },
            {
              text: "ALUMIL TECH GULF LLC",
              link: "/about/ourgroups/alumiltech",
            },
            {
              text: "THERMOSET MIDDLE EAST",
              link: "/about/ourgroups/thermoset",
            },
            {
              text: "GLOBAL PIONEER ALUMINIUM INDUSTRIES",
              link: "/about/ourgroups/globalpioneer",
            },
            {
              text: "JORDAN ALUMINIUM EXTRUSION",
              link: "/about/ourgroups/jordan",
            },
            {
              text: "UNITED POWDER COATING FZC",
              link: "/about/ourgroups/unitedpowdercoatingfzc",
            },
            {
              text: "NASHAT METAL ENGINEERING LLC",
              link: "/about/ourgroups/nashat",
            },
          ],
        },
      ],
    },
    {
      topic: "Products",
      link: null,
      sections: [
        {
          heading: null,
          items: [
            {
              text: "Product 1",
              link: "/about",
            },
            {
              text: "Product 2",
              link: "/about/ourprojects",
            },
            {
              text: "Product 3",
              link: "/about/ourglobalmarkets",
            },
          ],
        },
      ],
    },
    {
      topic: "Services",
      link: null,
      sections: [
        {
          heading: null,
          items: [
            {
              text: "Services 1",
              link: "/about",
            },
            {
              text: "Services 2",
              link: "/about/ourprojects",
            },
            {
              text: "Services 3",
              link: "/about/ourglobalmarkets",
            },
          ],
        },
      ],
    },
    {
      topic: "Media",
      link: null,
      sections: [
        {
          heading: null,
          items: [
            {
              text: "Media 1",
              link: "/about",
            },
            {
              text: "Media 2",
              link: "/about/ourprojects",
            },
            {
              text: "Media 3",
              link: "/about/ourglobalmarkets",
            },
          ],
        },
      ],
    },

    {
      topic: "Contact Us",
      link: "/contactus",
      sections: null,
    },
  ];

  return (
    <nav className="pb-4 bg-transparent z-10 w-full absolute pt-9">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={195} height={78} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              {navitems.map((list, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Navigation Link */}
                  <Link
                    href={list.link || "#"}
                    className={`rounded-lg p-2 ${
                      hoveredIndex === index
                        ? "bg-[#E8D858] text-black"
                        : "text-white hover:bg-[#E8D858] hover:text-black"
                    }`}
                  >
                    {list.topic}
                  </Link>

                  {/* Dropdown (Rendered only on hover) */}
                  {hoveredIndex === index && list.sections && (
                    <div
                      className="absolute left-0 mt-1 w-[35rem] rounded-b-xl bg-white bg-opacity-80 shadow-lg p-6 grid grid-cols-2 gap-6 transition-opacity duration-300 border border-[#E8D858]"
                      style={{
                        zIndex: 10,
                        top: "100%",
                        width:
                          list.topic === "About Us"
                            ? "35rem"
                            : list.topic === "Products"
                            ? "15rem"
                            : list.topic === "Services"
                            ? "15rem"
                            : list.topic === "Media"
                            ? "15rem"
                            : "15rem", // Default width
                      }}
                    >
                      {list.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          {section.heading && (
                            <h3 className="text-lg font-bold text-[#023D68] mb-4">
                              {section.heading}
                            </h3>
                          )}
                          <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link href={item.link} className="group">
                                  {item.text}
                                  <div className="bg-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="bg-white rounded-sm font-xl">Get Quote</Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center">
            <Button onPress={onOpen} isIconOnly>
              {/* Hamburger Icon */}
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
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
              <DrawerContent>
                {(onClose) => (
                  <>
                    <DrawerBody>
                      {navitems.map((list, index) => (
                        <div key={index} className="mb-4">
                          {/* Navigation Link */}
                          <Link
                            href={list.link || "#"}
                            className={`block py-2 ${
                              list.sections
                                ? "bg-[#E8D858] text-black"
                                : "text-gray-800 hover:bg-[#E8D858] hover:text-black"
                            }`}
                          >
                            {list.topic}
                          </Link>

                          {/* Dropdown (Mobile) */}
                          {list.sections && (
                            <div className="mt-2 pl-4">
                              {list.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                  {section.heading && (
                                    <h3 className="text-sm font-semibold text-[#023D68] mb-2">
                                      {section.heading}
                                    </h3>
                                  )}
                                  <ul className="space-y-1">
                                    {section.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <Link
                                          href={item.link}
                                          className="block text-gray-700 hover:text-black"
                                        >
                                          {item.text}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </DrawerBody>
                    <DrawerFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </DrawerFooter>
                  </>
                )}
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
