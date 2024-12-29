"use client";

import Image from "next/image";
import React from "react";
import { insights } from "@/dummyData/insights";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedInsights() {
  return (
    <section className="relative z-50 bg-[#D4D9D7] py-20 md:py-32 overflow-x-hidden">
      <div className="block lg:flex gap-80 justify-between">
        <div className="w-full lg:max-w-96 text-sm pl-4 lg:px-12">
          <p>SOMETIMES WE WRITE, SOMETIME WE READ</p>
          <p> VIEW ALL</p>
        </div>

        <div className="w-full p-4">
          <div className="w-full py-2 lg:max-w-[70%]">
            <p className="text-xl md:text-3xl  lg:text-5xl w-full lg:w-3/4 ">
              — Valuable insights, exciting stories and other things worth
              sharing with the world.
            </p>
          </div>

          <div className="pt-12 lg:pt-24 w-full">
            <p className="uppercase pb-5 text-sm md:text-base">
              Featured insights
            </p>

            <div className="group">
              <div className="w-[90%] relative overflow-hidden">
                <div className="w-full aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/insights-image.jpg"
                    alt="Insights image"
                    className="w-full h-full object-cover rounded-2xl transition-[clip-path] ease-in-out duration-300 [clip-path:inset(0%_0%_0%_0%_round_1rem)] group-hover:[clip-path:inset(2%_2%_2%_2%_round_1rem)]"
                  />
                </div>
              </div>

              <div className="relative text-[#0F0F12] border-b border-[#6C6C6C] py-5">
                <p className="text-xl md:text-4xl">
                  Story behind the Inspirux Rebranding: A Journey of Growth
                </p>
                <p className="text-xs md:text-base">
                  It all began in 2019 with a simple gathering of three friends.
                  We sat together, casually discussing our freelance UI/UX
                  projects...
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full" />
              </div>
            </div>
          </div>

          <div className="py-12 md:py-24">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="project-item border-b border-[#0F0F12] py-10 sm:py-12 pb-5 sm:pb-10 text-[#0F0F12] flex justify-between items-center pr-4 sm:pr-12 cursor-pointer group">
                <div className="block md:flex items-center gap-5 sm:gap-10 ">
                  <div className="w-40 sm:w-56 relative overflow-hidden ">
                    <div className="w-full aspect-video">
                      <img
                        src={insight.image}
                        alt="Insights image"
                        className="w-full h-full object-cover rounded-sm transition-[clip-path] ease-in-out duration-300 [clip-path:inset(0%_0%_0%_0%_round_1rem)] group-hover:[clip-path:inset(2%_2%_2%_2%_round_1rem)]"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-[70%] space-y-3">
                    <p className="text-xl lg:text-5xl py-2 sm:py-0 leading-none">
                      {insight.title}
                    </p>
                    <p className="text-sm lg:text-lg">{insight.description}</p>
                  </div>
                </div>

                <div className="transform transition-transform group-hover:rotate-[-30deg]">
                  <Image
                    src="/img/arrowRight.svg"
                    alt="Arrow right"
                    height={30}
                    width={30}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
