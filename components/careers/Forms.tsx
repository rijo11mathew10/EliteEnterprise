"use client";

import { FormEvent, useRef, useState } from "react";

const Forms = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        formRef.current?.reset();
      } else {
        console.log("Error submitting form");
      }
    } catch {
      console.log("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen ml-9 flex flex-col  items-center justify-center p overflow-x-hidden -top-60 ">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`w-full max-w-5xl bg-white rounded-lg shadow-lg mb-10 transition-all duration-500 ${
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

        {/* Personal Details */}
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Personal Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Email */}
            <div>
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
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Contact */}
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Enter your contact number"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Nationality */}
            <div>
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-700"
              >
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                placeholder="Enter your nationality"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Gender</h3>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio h-5 w-5 text-indigo-600"
                  required
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio h-5 w-5 text-indigo-600"
                  required
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Current Location */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Current Location
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Employment Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Please enter category of your job"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Experience in years */}
              <div>
                <label
                  htmlFor="experiance"
                  className="block text-sm font-medium text-gray-700"
                >
                  Experience in years
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  placeholder="Please enter experience in years"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Skills */}
              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-gray-700"
                >
                  What are your key skills
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={5} // Number of visible rows
                  placeholder="Please enter your key skills"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-8">
            {/* Section Heading */}
            <h3 className="text-lg font-medium text-gray-800">
              Education Details
            </h3>

            {/* First Row: Basic Education and Masters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {/* Basic Education */}
              <div>
                <label
                  htmlFor="basicEducation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Basic Education
                </label>
                <input
                  type="text"
                  id="basicEducation"
                  name="basicEducation"
                  placeholder="Enter your basic education"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Masters */}
              <div>
                <label
                  htmlFor="masters"
                  className="block text-sm font-medium text-gray-700"
                >
                  Masters
                </label>
                <input
                  type="text"
                  id="masters"
                  name="masters"
                  placeholder="Enter your master's degree"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Second Row: Choose a Category */}
            <div className="mt-6">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Choose a Category
              </label>
              <select
                id="category"
                name="category"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">
                  Select a category
                </option>
                <option value="Administration">Administration</option>
                <option value="Accounts">Accounts</option>
                <option value="Audit">Audit</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Logistics">Logistics</option>
                <option value="Production">Production</option>
                <option value="Procurement">Procurement</option>
                <option value="Quality Control">Quality Control</option>
                <option value="Maintenance<">Maintenance</option>
                <option value="Safety">Safety</option>
                <option value="Stores">Stores</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Third Row: Attach CV */}
            <div className="mt-6">
              <label
                htmlFor="cv"
                className="block text-sm font-medium text-gray-700"
              >
                Attach CV (PDF)
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept="application/pdf"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Please upload your CV in PDF format.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-left">
            <button
              type="submit"
              className="px-8 py-3 bg-[#E8D858] text-black font-medium rounded-md shadow-sm hover:bg-[#ffe941] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms;
