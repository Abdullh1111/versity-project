"use client";
import { useState } from 'react';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <section id="section-3" className="p-6">
      <h2 className="text-2xl font-bold text-center text-shadow-custom mb-6">
        Search Your Phone
      </h2>
      <div id="search-container" className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div id="search-bar" className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-md px-3 py-2">
          <input
            type="text"
            name="search"
            id="search-input-field"
            placeholder="Search Your Phone"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <div id="search-button">
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;