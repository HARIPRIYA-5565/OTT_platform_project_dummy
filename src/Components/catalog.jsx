import React, { useState } from "react";
import VideoCard from "./videoCard";
import FilterBar from "./filterBar";

export default function Catalog({ videoData }) {
  const [filters, setFilters] = useState({ genre: "", releaseDate: "" });
  const [filteredVideos, setFilteredVideos] = useState(videoData);

  const applyFilters = () => {
    
    const filtered = videoData.filter((video) => {
      return (
        (filters.genre === "" || video.genre === filters.genre) &&
        (filters.releaseDate === "" || video.releaseDate === filters.releaseDate)
      );
    });

    setFilteredVideos(filtered);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  return (
    <div>
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={applyFilters}
      />
      <div className="flex flex-wrap">
        {filteredVideos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};


