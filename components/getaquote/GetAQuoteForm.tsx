import React, { useState } from "react";

const GetAQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    category: "", // "services" or "products"
    productServiceOption: "", // Product or Service specific options
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", description: "", category: "", productServiceOption: "" });
        alert(result.message);
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white text-gray-800"
            required
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white text-gray-800"
            required
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-white mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white text-gray-800"
            required
            placeholder="Enter your phone number"
          />
        </div>

        {/* Category (Services or Products) */}
        <div>
          <label htmlFor="category" className="block text-white mb-2">
            Choose Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white text-gray-800"
            required
          >
            <option value="">Select a category</option>
            <option value="services">Services</option>
            <option value="products">Products</option>
          </select>
        </div>

        {/* If category is services, show service options */}
        {formData.category === "services" && (
          <div>
            <label htmlFor="productServiceOption" className="block text-white mb-2">
              Select Service
            </label>
            <select
              id="productServiceOption"
              name="productServiceOption"
              value={formData.productServiceOption}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white text-gray-800"
              required
            >
              <option value="">Choose a service</option>
              <option value="Fabrication">FABRICATIONS</option>
              <option value="Color Coating">COLOR COATING</option>
              <option value="surface Coating">SURFACE COATING</option>
            </select>
          </div>
        )}

        {/* If category is products, show product options */}
        {formData.category === "products" && (
          <div>
            <label htmlFor="productServiceOption" className="block text-white mb-2">
              Select Product
            </label>
            <select
              id="productServiceOption"
              name="productServiceOption"
              value={formData.productServiceOption}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white text-gray-800"
              required
            >
              <option value="">Choose a product</option>
              <option value="Extruded Profiles">EXTRUDED PROFILES</option>
              <option value="Coils and Sheets">COILS AND SHEETS</option>
              <option value="Extrusion Dies">EXTRUSION DIES</option>
              <option value="EPDM Rubber">EPDM RUBBER</option>
            </select>
          </div>
        )}

        <div className="col-span-2">
          <label htmlFor="description" className="block text-white mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white text-gray-800"
            rows={5}
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-[#E8D858] text-[#023D68] font-semibold rounded-lg hover:bg-[#c7b227] transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Request a Quote"}
        </button>
      </div>
    </form>
  );
};

export default GetAQuoteForm;
