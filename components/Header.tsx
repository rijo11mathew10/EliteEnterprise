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
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion from framer-motion

function Header() {
  const [isClick] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolling, setScrolling] = useState(false); // State to detect scrolling

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
      link: "/about",
      sections: [
        {
          heading: "WHO WE ARE",
          items: [
            { text: "ABOUT OUR COMPANY", link: "/about" },
            { text: "OUR PROJECTS", link: "/about/ourprojects" },
            { text: "OUR GLOBAL MARKETS", link: "/about/ourglobalmarkets" },
            { text: "OUR SUPPLIERS", link: "/about/oursuppliers" },
            { text: "OUR CERTIFICATIONS", link: "/about/certification" },
            { text: "OUR POLICIES AND ASSURANCE", link: "/about/qualitypolicy" },
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
              text: "EXTRUDED PROFILES",
              link: "/about/ourgroups/extrudedprofiles",
            },
            { text: "COILS AND SHEETS", link: "/about/ourgroups/" },
            { text: "EXTRUSION DIES", link: "/about/ourgroups/extrusiondies" },
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
            { text: "FABRICATIONS", link: "/about/ourgroups/fabrications" },
            { text: "COLOR COATING", link: "/about/ourgroups/colorcoating" },
            {
              text: "SURFACE COATING",
              link: "/about/ourgroups/surfacecoatings",
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
            { text: "NEWS", link: "/about/ourgroups/news" },
            { text: "IMAGE GALLERY", link: "/about/ourgroups/images" },
            { text: "VIDEO GALLERY", link: "/about/videogallery" },
            { text: "DOWNLOADS", link: "/about/downloads" },
          ],
        },
      ],
    },
    {
      topic: "Careers",
      link: "/careers",
      sections: null,
    },
    {
      topic: "Contact Us",
      link: "/contactus",
      sections: null,
    },
  ];

  // Detect scroll and change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Set scrolling state when scrolled more than 50px
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 pt-5 pb-2 transition-all duration-300 ${
        scrolling
          ? "bg-white backdrop-blur-lg shadow-lg h-[80px]"
          : "bg-transparent"
      }`}
      style={{
        backgroundImage: `url('/frame.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div
            className={`flex items-center transition-all duration-300 transform ${
              scrolling ? "scale-75 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={150} height={60} />
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
                    className={`rounded-lg p-2 text-white text-sm font-medium ${
                      hoveredIndex === index
                        ? "bg-[#E8D858] text-black"
                        : "hover:bg-[#E8D858] hover:text-black transition-all duration-300"
                    }`}
                  >
                    {list.topic}
                  </Link>

                  {/* Dropdown (Rendered only on hover with animation) */}
                  {hoveredIndex === index && list.sections && (
                    <motion.div
                      className="absolute left-0 mt-2 rounded-xl bg-white bg-opacity-90 shadow-xl p-6 grid grid-cols-2 gap-6 border border-[#E8D858] transition-all duration-300"
                      style={{
                        zIndex: 10,
                        top: "100%",
                        width: list.topic === "About Us" ? "35rem" : "15rem",
                      }}
                      initial={{ opacity: 0, y: 0 }} // Initial state (invisible and slightly above)
                      animate={{ opacity: 1, y: 0 }} // Final state (fully visible and at normal position)
                      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth slide-down effect
                    >
                      {list.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          {section.heading && (
                            <h3 className="text-lg font-semibold text-[#023D68] mb-4">
                              {section.heading}
                            </h3>
                          )}
                          <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li
                                key={`${index}-${sectionIndex}-${itemIndex}`}
                                className={`${
                                  list.topic !== "About Us"
                                    ? "whitespace-nowrap"
                                    : ""
                                }`}
                              >
                                <Link
                                  href={item.link}
                                  className="group text-black hover:text-black inline-block relative"
                                >
                                  <span className="relative">
                                    {item.text}
                                    <span className="absolute left-0 bottom-0 bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <Button className="bg-[#E8D858] text-black rounded-sm font-xl hover:bg-[#c5b32b] transition-colors duration-300">
                Get Quote
              </Button>
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
                            className={`block py-2 text-gray-800 ${
                              list.sections
                                ? "bg-[#E8D858] text-black"
                                : "hover:bg-[#E8D858] hover:text-black transition-all duration-300"
                            }`}
                          >
                            {list.topic}
                          </Link>

                          {/* Dropdown (Mobile) */}
                          {list.sections && (
                            <motion.div
                              className="mt-2 pl-4"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                            >
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
                            </motion.div>
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
