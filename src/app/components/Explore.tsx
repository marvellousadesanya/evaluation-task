import React from "react";
import { Play } from "lucide-react";

export default function ExploreSection() {
  return (
    <section className="relative top-0 z-50 block sm:flex h-20 w-full uppercase text-sm bg-white">
      <div className="bg-[#3B4EFF] px-4 h-full w-full sm:w-1/2 flex lg:pl-12 items-center relative group cursor-pointer">
        <p className="text-white text-xs">
          <span className="relative">
            Explore Works
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
        </p>
      </div>

      <div className="flex items-center h-full w-full sm:w-1/2">
        <div className=" bg-[#B4EA28] h-full w-1/4 sm:w-[16%] flex justify-center items-center cursor-pointer group relative overflow-hidden">
          <Play className="w-5 h-5 text-black group-hover:opacity-0 transition-opacity duration-300" />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover z-50">
              <source
                src="https://Grainient.b-cdn.net/Inspirux/new%20short.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="text-black flex justify-between h-full w-3/4 sm:w-[84%] px-6 sm:px-12 bg-[#EEEEEE] items-center">
          <p className="text-xs sm:text-base">Play reel</p>
          <p className="text-xs sm:text-base">Scroll down</p>
        </div>
      </div>
    </section>
  );
}
