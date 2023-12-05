import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
export default function LatestMovieRelease({ title, description, videoUrl }){
const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

 const handleDownload = () => {
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = `${title.replace(/\s+/g, "_").toLowerCase()}.mp4`; // Customize the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
return(
 <><div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden m-4 " id="new-releases">
        <div className="md:flex flex-col ">
            <div className="">
 <ReactPlayer
        url={videoUrl}
        playing={isPlaying}
        volume={volume}
        controls={true}
       title={title}
                    width="100%"
                    height="full"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
      />
               
            </div>
            <div className="p-8  ">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Latest Release
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                    {title}
                </h2>
                <p className="mt-2 text-gray-500">{description}</p>
 <div className="flex flex-wrap  mt-4">
          <button className="mr-2" onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <label className="mr-2">Volume:</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          />
          <button className="hover:text-blue-500  " onClick={handleFullScreen}>
            {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
 <button className="ml-2 hover:text-blue-500" onClick={handleDownload}>
            Download
          </button>
        </div>
            </div>
        </div>
    </div></>
)
}