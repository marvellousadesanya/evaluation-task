"use client";

import React, { useState, useEffect } from "react";
import gsap from "gsap-trial";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/dummyData/projects";

export default function Works() {
  const containerRef = useRef(null);
  const worksSectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    const pinnedText = gsap.to(".pin-this", {
      opacity: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: worksSectionRef.current,
        pin: ".pin-this",
        pinSpacing: true,
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      pinnedText.kill();
    };
  }, []);

  useGSAP(() => {
    // For responsiveness
    const distance = isMobile ? "70vw" : "100vw";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      [".selected-text", ".works-text"],
      {
        x: (index) => (index === 0 ? `-${distance}` : distance),
        opacity: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0,
      }
    ).to([".selected-text", ".works-text"], {
      x: (index) => (index === 0 ? distance : `-${distance}`),
      opacity: 0.3,
      ease: "power2.inOut",
      stagger: 0,
    });

    const projectItems = gsap.utils.toArray(".project-item");
    projectItems.forEach((item) => {
      gsap.fromTo(
        // @ts-expect-error will fix later
        item,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative bg-white h-full pt-32 md:pt-64 z-50 overflow-x-hidden">
      <div className="p-4 md:p-12 uppercase overflow-hidden h-full sm:">
        <p className="selected-text text-4xl sm:text-7xl 2xl:text-[17.5rem] 2xl:leading-0 leading-none md:leading-none text-center">
          Selected
        </p>
        <div className="works-text flex w-full justify-center items-center gap-5 md:gap-12">
          <div className="flex-shrink-0 h-12 sm:h-20 md:h-32 2xl:h-48 w-18 sm:w-32 md:w-72 rounded-lg overflow-hidden">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source
                src="https://Grainient.b-cdn.net/Inspirux/new%20short.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <p className="text-4xl sm:text-7xl 2xl:text-[17.5rem] leading-none">
            Works
          </p>
        </div>
      </div>

      <div ref={worksSectionRef} className="border-t border-black h-full">
        <div className="block lg:flex flex-col lg:flex-row justify-between lg:pl-12 gap-8 lg:gap-18 2xl:gap-80">
          <div className="w-full lg:w-96 p-4 md:pt-12 h-full uppercase lg:pin-this">
            <p className="text-sm">
              Simplicity and clarity are your guiding principles, from start to
              finish - from design to product development.
            </p>
            <p className="underline pt-2 text-sm">View all works</p>
          </div>

          <div className="uppercase w-full lg:w-[70%] h-full">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-item border-b border-black py-6 md:py-10 flex justify-between items-center px-4 md:pr-12 cursor-pointer group">
                <div>
                  <p className="text-xs">{project.number}</p>
                  <p className="text-lg md:text-5xl text-[#0F0F12] 2xl:text-7xl font-semibold">
                    {project.title}
                  </p>
                  <p className="text-base md:text-xl">{project.description}</p>
                </div>

                <div className="transform transition-transform group-hover:rotate-[-30deg]">
                  <Image
                    src="/img/arrowRight.svg"
                    alt="Arrow right"
                    height={40}
                    width={40}
                  />
                </div>
              </div>
            ))}
            <div className="uppercase py-8 md:py-12 text-xl md:text-3xl px-4 md:px-0">
              <p> -- Creatively driven solution orientated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
