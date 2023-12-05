import React, { useState } from "react";
import NavBar from "./navBar";
import LatestMovieRelease from "./latestMovieRelease";
import TreandingMovies from "./trendingMovies";
import Catalog from "./catalog";
import MostWatched from "./mostWatched";
import Menu from "./menu";
export default function HomePart() {
  

 const latestMovieData = [
    {
      title: "Movie 1",
      description: "Description for Movie 1",
      videoUrl: "https://www.youtube.com/embed/your-movie-1-video-id",
    },
    {
      title: "Movie 2",
      description: "Description for Movie 2",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
    {
      title: "Movie 3",
      description: "Description for Movie 3",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
{
      title: "Movie 4",
      description: "Description for Movie 4",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
  ];

 const trendingMovieData = [
    {
      title: "Movie 1",
      description: "Description for Movie 1",
      videoUrl: "https://www.youtube.com/embed/your-movie-1-video-id",
    },
    {
      title: "Movie 2",
      description: "Description for Movie 2",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
    {
      title: "Movie 3",
      description: "Description for Movie 3",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
{
      title: "Movie 4",
      description: "Description for Movie 4",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
  ];
const mostWatchedData = [
    {
      title: "Movie 1",
      description: "Description for Movie 1",
      videoUrl: "https://www.youtube.com/embed/your-movie-1-video-id",
    },
    {
      title: "Movie 2",
      description: "Description for Movie 2",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
    {
      title: "Movie 3",
      description: "Description for Movie 3",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
{
      title: "Movie 4",
      description: "Description for Movie 4",
      videoUrl: "https://www.youtube.com/embed/your-movie-2-video-id",
    },
  ];
const videoData = [
  {
    title: "Video 1",
    genre: "Action",
    releaseDate: "2023-01-15",
    description: "Description for Video 1",
    videoUrl: "https://www.youtube.com/embed/your-video-1-id",
  },
  {
    title: "Video 2",
    genre: "Drama",
    releaseDate: "2023-02-20",
    description: "Description for Video 2",
    videoUrl: "https://www.youtube.com/embed/your-video-2-id",
  },
  {
    title: "Video 3",
    genre: "Action",
    releaseDate: "2023-02-20",
    description: "Description for Video 3",
    videoUrl: "https://www.youtube.com/embed/your-video-2-id",
  },
 {
    title: "Video 4",
    genre: "Drama",
    releaseDate: "2023-02-20",
    description: "Description for Video 4",
    videoUrl: "https://www.youtube.com/embed/your-video-2-id",
  },
{
    title: "Video 5",
    genre: "Action",
    releaseDate: "2023-02-20",
    description: "Description for Video 5",
    videoUrl: "https://www.youtube.com/embed/your-video-2-id",
  },
{
    title: "Video 6",
    genre: "Drama",
    releaseDate: "2023-02-20",
    description: "Description for Video 6",
    videoUrl: "https://www.youtube.com/embed/your-video-2-id",
  },
];



  return (
    <>
    <nav className="bg-gray-800 p-4 flex justify-between ">
      <div className="text-white flex items-center sm:text-base text-sm">Your Logo/Brand</div>
      <NavBar />
    </nav>
  
<Menu/>
<div className="p-8"> <Catalog videoData={videoData} /></div> 
 <div className="p-8 bg-gray-200">
        <h1 className="text-2xl font-bold mb-4 flex pl-8">Latest Movie Releases</h1>
<div className="flex flex-wrap md:flex-nowrap gap-x-4">

        {latestMovieData.map((movie, index) => (
          <LatestMovieRelease key={index} {...movie} />
        ))}
</div>
      </div>
<div className="p-8 ">
        <h1 className="text-2xl font-bold mb-4 flex pl-8">Trending Movie </h1>
<div className="flex flex-wrap md:flex-nowrap gap-x-4">

        {trendingMovieData.map((movie, index) => (
          <TreandingMovies key={index} {...movie} />
        ))}
</div>
      </div>
<div className="p-8 ">
        <h1 className="text-2xl font-bold mb-4 flex pl-8">Most Viewed </h1>
<div className="flex flex-wrap md:flex-nowrap gap-x-4">

        {mostWatchedData.map((movie, index) => (
          <MostWatched key={index} {...movie} />
        ))}
</div>
      </div>
    </>
  );
}

