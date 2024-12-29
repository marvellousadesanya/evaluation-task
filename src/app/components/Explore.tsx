"use client";

import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

export default function ExploreSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVideoOpen) {
      timer = setTimeout(() => {
        setShowVideo(true);
      }, 1200);
    } else {
      setShowVideo(false);
    }
    return () => clearTimeout(timer);
  }, [isVideoOpen]);

  const handleClose = () => {
    setShowVideo(false);
    setIsVideoOpen(false);
  };

  return (
    <>
      <section className="relative top-0 z-10 flex flex-col sm:flex-row h-auto sm:h-20 w-full uppercase text-sm bg-white">
        <div className="bg-[#3B4EFF] px-4 h-20 sm:h-full w-full sm:w-1/2 flex lg:pl-12 items-center relative group cursor-pointer">
          <p className="text-white text-xs">
            <span className="relative">
              Explore Works
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </p>
        </div>

        <div className="flex items-center h-20 sm:h-full w-full sm:w-1/2">
          <div
            onClick={() => setIsVideoOpen(true)}
            className="bg-[#B4EA28] h-full w-[20%] sm:w-[16%] flex justify-center items-center cursor-pointer group relative overflow-hidden">
            <Play className="w-5 h-5 text-black group-hover:opacity-0 transition-opacity duration-300" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover z-10">
                <source
                  src="https://Grainient.b-cdn.net/Inspirux/new%20short.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="text-black flex justify-between h-full w-[80%] sm:w-[84%] px-4 lg:px-6 xl:px-12 bg-[#EEEEEE]  items-center">
            <p className="text-xs lg:text-base">Play reel</p>
            <p className="text-xs lg:text-base">Scroll down</p>
          </div>
        </div>
      </section>

      {/* Video Modal with Overlay */}
      <div
        className={`fixed  inset-0 w-full h-screen !min-h-screen z-[9999] isolation-auto ${
          isVideoOpen ? "" : "pointer-events-none"
        }`}>
        {/* Dark Overlay */}
        <div
          className={`fixed isolation-auto top-0 left-0 w-full h-screen min-h-screen bg-[#0F0F12] transition-transform duration-[1200ms] ease-out ${
            isVideoOpen
              ? "transform translate-y-0"
              : "transform -translate-y-full"
          }`}
        />

        {/* Video Container */}
        <div
          className={`fixed inset-0 w-full  h-screen min-h-screen flex items-center justify-center p-4 transition-opacity duration-500 ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}>
          <div
            className={`relative w-full max-w-7xl transition-transform duration-500 ${
              showVideo ? "scale-100" : "scale-95"
            }`}>
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white flex items-center gap-2 group hover:text-gray-300 transition-colors duration-200">
              <span className="text-sm uppercase">Close</span>
              <X className="w-5 h-5" />
            </button>

            <div className="relative pt-[56.25%]">
              <video
                autoPlay
                controls
                className="absolute inset-0 w-full h-full  shadow-2xl">
                <source
                  src="https://Grainient.b-cdn.net/Inspirux/new%20short.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
