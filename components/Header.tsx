"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon

import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  return (
    <div>
      <div className="hidden lg:block bg-[#023D68] text-[#D5D5D5]  pt-4 ">
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
      <nav className="bg-[#023D68]  pb-4">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between ">
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
                <Link
                  href="/about"
                  className="text-white hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className="text-white hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
                >
                  Products
                </Link>
                <Link
                  href="/"
                  className="text-white hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="text-white hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
                >
                  Media
                </Link>
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
                      d="M6 18L18 6M6 6L12 12"
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
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-white block hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white block hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
              >
                Products
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
              >
                Services
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
              >
                Media
              </Link>
              <Link
                href="/contactus"
                className="text-white block hover:bg-[#E8D858] hover:text-black rounded-lg p-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
