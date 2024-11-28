// pages/index.tsx
import { useState } from "react";
import { GlobeWithCountries } from "@/components/MapWithCountries";

const countries = [
  { name: "USA", lat: 37.0902, lng: -95.7129 },
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "China", lat: 35.8617, lng: 104.1954 },
  // Add more countries with their latitudes and longitudes here
];

export default function Home() {
  const [highlightedCountry, setHighlightedCountry] = useState<string | null>(
    null
  );

  const handleCountrySelect = (country: string) => {
    setHighlightedCountry(country);
  };

  return (
    <div className="flex h-screen">
      {/* Country List */}
      <div className="w-1/4 p-4 bg-gray-200">
        <h2 className="text-xl font-bold mb-4">Countries</h2>
        <ul>
          {countries.map((country) => (
            <li
              key={country.name}
              onClick={() => handleCountrySelect(country.name)}
              className="cursor-pointer p-2 hover:bg-gray-300"
            >
              {country.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Globe */}
      <div className="flex-1">
        <GlobeWithCountries
          countries={countries}
          onCountrySelect={handleCountrySelect}
          highlightedCountry={highlightedCountry}
        />
      </div>
    </div>
  );
}
