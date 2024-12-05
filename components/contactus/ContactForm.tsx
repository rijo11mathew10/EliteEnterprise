"use client";

import { FormEvent, useRef, useState } from "react";

const ContactFormWithCards = () => {
  const companydetails = [
    {
      name: "Elite Extrusion LLC",
      address: "Ras Al Khaimah - UAE.",
      phone: "Tel: +971 7 244 7668",
      fax: "Fax: +971 7 244 7669",
      email: "Email: info@eliteextrusion.ae",
    },
    {
      name: "Classic Extrusion LLC",
      address: "Sharjah - UAE.",
      phone: "Tel: +971 6 534 9550",
      fax: "Fax: +971 6 534 9551",
      email: "Email: info@clex.ae",
    },
    {
      name: "National Aluminium Extrusion Co. LLC",
      address: "Dubai - UAE",
      phone: "Tel: +971 4 885 8101",
      fax: "Fax: +971 4 885 8705",
      email: "Email: info@nalexuae.ae",
    },
    {
      name: "Alumill Tech Gulf LLC",
      address: "Ras Al Khaimah - UAE",
      phone: "Tel: +971 7 258 9099",
      fax: "Fax: +971 7 258 9190",
      email: "Email: info@alumill.ae",
    },
    {
      name: "Thermoset Middle East LLC",
      address: "Dubai - UAE",
      phone: "Tel: +971 4 885 4901",
      fax: "Fax: +971 4 885 4902",
      email: "Email: info@tmerubber.ae",
    },
    {
      name: "Global Pioneer Aluminium Industries LLC",
      address: "Ajman - UAE",
      phone: "Tel: +971 6 743 2020",
      fax: "Fax: +971 6 743 2030",
      email: "Email: gpai@eim.ae",
    },
    {
      name: "United Powder Coating FZC",
      address: "Sharjah - UAE.",
      phone: "Tel: +971 6 526 1220",
      fax: "Fax: +971 6 526 1223",
      email: "Email: unitedpc@eim.ae",
    },
    {
      name: "Jordan Aluminium Extrusion Co. LLC",
      address: "Mafrak - Jordan",
      phone: "Tel: 00962 6 5548770 / 1/2",
      fax: "Fax: 00962 6 5818412",
      email: "",
    },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const count = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Set the submitting state to true

    const formdata = new FormData(e.currentTarget);
    const values = Object.fromEntries(formdata.entries());
    console.log(values);

    try {
      const response = await fetch("https://formspree.io/f/xovqbqrq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        count.current?.reset();
      } else {
        console.log("Error submitting form");
      }
    } catch (error) {
      console.log("Failed to submit form");
    } finally {
      setIsSubmitting(false); // Reset the submitting state once the submission is complete
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 overflow-x-hidden">
      {/* Form Section */}
      <form
        ref={count}
        onSubmit={handleSubmit}
        className={`w-full max-w-5xl bg-white p-10 rounded-lg shadow-lg mb-10 transition-all duration-500 ${
          isSubmitting ? "blur-sm" : ""
        }`}
      >
        {isSubmitting && (
          <div className="absolute inset-0 bg-white opacity-50 flex items-center justify-center z-10">
            <span className="text-xl font-medium text-gray-700">
              Submitting...
            </span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div>
            <div className="mb-6">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Please enter your first name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Please enter your last name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Please enter your subject message"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            type="submit"
            className="px-8 py-3 bg-[#E8D858] text-black font-medium rounded-md shadow-sm hover:bg-[#ffe941] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Cards Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {companydetails.map((details) => (
          <div
            key={details.name}
            className="w-full h-[250px] bg-white border-t-2 border-[#25587D40] shadow-md p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage: "url('/contactus/Frame.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Heading */}
            <h3 className="text-[#023D68] text-xl font-bold mb-5">
              {details.name}
            </h3>

            {/* Contact Details */}
            <p className="text-[#023D68] text-sm leading-8">
              {details.address}
              <br />
              {details.phone} <br />
              {details.fax} <br />
              {details.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFormWithCards;
