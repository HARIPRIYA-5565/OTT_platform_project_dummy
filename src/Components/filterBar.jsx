import React from "react";

export default function FilterBar({ filters, onFilterChange, onApplyFilters }) {
  return (
    <div className="p-4 bg-gray-200">
      <div className="flex items-center">
        <label className="mr-2">Genre:</label>
        <select
          value={filters.genre}
          onChange={(e) => onFilterChange("genre", e.target.value)}
className="px-2 py-1 rounded-md border border-gray-100"
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
         
        </select>
      </div>
      <div className="flex items-center mt-2">
        <label className="mr-2">Release Date:</label>
        <input
          type="text"
          placeholder="YYYY-MM-DD"
          value={filters.releaseDate}
className="px-2 py-1 rounded-md border border-gray-100"
          onChange={(e) => onFilterChange("releaseDate", e.target.value)}

        />
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2" onClick={onApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};


