import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Home, BedDouble } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    query: '',
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    beds: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onSearch(updatedFilters);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl -mt-12 relative z-10 max-w-6xl mx-auto border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Location</label>
          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              name="query"
              placeholder="City, Zip, Address"
              className="w-full bg-transparent border-none focus:outline-none text-sm"
              value={filters.query}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Property Type</label>
          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <Home className="w-4 h-4 text-gray-400 mr-2" />
            <select
              name="propertyType"
              className="w-full bg-transparent border-none focus:outline-none text-sm appearance-none"
              value={filters.propertyType}
              onChange={handleChange}
            >
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Min Price</label>
          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="number"
              name="minPrice"
              placeholder="0"
              className="w-full bg-transparent border-none focus:outline-none text-sm"
              value={filters.minPrice}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Beds</label>
          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <BedDouble className="w-4 h-4 text-gray-400 mr-2" />
            <select
              name="beds"
              className="w-full bg-transparent border-none focus:outline-none text-sm appearance-none"
              value={filters.beds}
              onChange={handleChange}
            >
              <option value="">Any Beds</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>

        <div className="flex items-end">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-medium shadow-md shadow-blue-200">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};