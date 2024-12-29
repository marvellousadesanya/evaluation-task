"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Results() {
  const containerRef = useRef(null);
  const worksSectionRef = useRef(null);
  const recordsSectionRef = useRef(null);
  const clientsSectionRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    if (!isMobile) {
      const pinnedText = gsap.to(".pin-this-tooss", {
        // y: -50,
        opacity: 0.8,
        duration: 1,

        scrollTrigger: {
          trigger: recordsSectionRef.current,

          pin: ".pin-this-tooss",
          pinSpacing: true,
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        pinnedText.kill();
      };
    }
  }, [isMobile]);

  useGSAP(() => {
    if (!isMobile) {
      const pinnedText = gsap.to(".pin-this-too2", {
        // y: -50,
        opacity: 0.8,
        duration: 1,

        scrollTrigger: {
          trigger: clientsSectionRef.current,

          pin: ".pin-this-too2",
          pinSpacing: true,
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        pinnedText.kill();
      };
    }
  }, [isMobile]);

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });

    tl1.fromTo(
      ".selected-textss",
      {
        x: -150,
      },
      {
        x: 300,
        stagger: 0.02,
        ease: "easeInOut",
      }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });

    tl2.fromTo(
      ".works-text",
      {
        x: 150,
      },
      {
        x: -300,
        stagger: 0.02,
        ease: "easeInOut",
      }
    );

    const projectItems = gsap.utils.toArray(".project-itemss");
    projectItems.forEach((item) => {
      gsap.fromTo(
        //@ts-expect-error will fix later
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
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-white pt-12 lg:pt-24 z-50 overflow-x-hidden">
      <div ref={worksSectionRef} className=" h-full">
        <div
          ref={recordsSectionRef}
          className="block lg:flex h-full  justify-between py-12 gap-12">
          <div className="w-full  md:w-96 pt-2 md:pt-12 h-full px-4 md:px-12 uppercase pin-this-tooss text-black ">
            <p className="text-sm ">
              WE HAVE DRIVEN RESULTS FOR OVER 100+ STARTUP BUSINESSES IN THE
              PAST 07 YEARS OF TEAM EXPERIENCE
            </p>
            <p className="underline pt-2 text-sm">About us</p>
          </div>

          <div className="h-full w-full lg:w-[70%] ">
            <div className="py-7">
              <p className="text-xl px-5 sm:text-2xl lg:text-5xl text-black">
                — We{"'"}re a seasoned squad of <br /> creative maestros,
                brewing brilliance
                <br /> with every stroke.
              </p>
            </div>

            <div className="project-itemss border-b uppercase text-black border-black py-12 flex justify-between items-center pr-12 cursor-pointer group">
              <div className="block space-y-5 sm:space-y-0 pl-5 lg:pl-0 sm:flex gap-12">
                <div>
                  <p className="text-4xl sm:text-6xl lg:text-8xl text-black font-semibold">
                    13
                  </p>
                  <p className="text-sm md:text-base">Skilled members</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-6xl lg:text-8xl font-semibold">
                    7
                  </p>
                  <p className="text-sm md:text-base">years of growth</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-6xl lg:text-8xl font-semibold">
                    70+
                  </p>
                  <p className="text-sm md:text-base">Satisfied clients</p>
                </div>
              </div>
            </div>

            <div className="project-itemss uppercase border-b  text-black border-black py-12 flex justify-between items-center pr-12 cursor-pointer group">
              <div className="block space-y-5 sm:space-y-0 pl-5 sm:pl-5 sm:flex gap-12">
                <div>
                  <p className="text-4xl sm:text-6xl lg:text-8xl text-black font-semibold">
                    $10M+
                  </p>
                  <p className="text-sm md:text-base">Clients raised</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-6xl lg:text-8xl font-semibold">
                    300%
                  </p>
                  <p className="text-sm md:text-base">
                    Onboarding conversion rate
                  </p>
                </div>
                <div>
                  <p className="text-4xl sm:text-6xl lg:text-8xl font-semibold">
                    10
                  </p>
                  <p className="text-sm md:text-base">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={clientsSectionRef}
          className="block lg:flex h-full justify-between  gap-12 ">
          <div className="w-full sm:w-96 pt-12 h-full px-4 lg:px-12 uppercase pin-this-too2 text-black">
            <p className="text-sm">
              OUR TRACK RECORD OF TRUSTED PARTNERS AND CLIENTS.
            </p>
          </div>

          <div className="w-full lg:w-[70%]">
            <div className="py-7">
              <p className="text-xl p-5 sm:text-3xl lg:text-5xl text-black">
                We{"'"}ve been fortunate to work with a<br /> lot of awesome
                people on even more
                <br /> awesome projects.
              </p>
            </div>

            <div className="project-itemss border-b uppercase text-black border-black py-12 flex justify-between items-center lg:pr-12 cursor-pointer group">
              <div className="flex justify-around gap-6 sm:gap-56 ">
                <div className="flex justify-center items-center">
                  <Image
                    src="/img/brand1.svg"
                    alt="Brand1"
                    width={150}
                    height={30}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/img/brand2.svg"
                    alt="Brand1"
                    width={100}
                    height={30}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/img/brand3.svg"
                    alt="Brand1"
                    width={150}
                    height={50}
                  />
                </div>
              </div>
            </div>

            <div className="project-itemss uppercase border-b text-black border-black py-12 flex justify-between items-center pr-12 cursor-pointer group">
              <div className="flex justify-around gap-6 sm:gap-56">
                <div className="flex justify-center items-center">
                  <Image
                    src="/img/brand4.svg"
                    alt="Brand1"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/img/brand5.svg"
                    alt="Brand1"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/img/brand6.svg"
                    alt="Brand1"
                    width={150}
                    height={50}
                  />
                </div>
              </div>
            </div>

            <div className="project-itemss  uppercase border-b  text-black border-black py-12 flex justify-between items-center pr-12 cursor-pointer group">
              <div className="flex justify-around gap-6 sm:gap-56">
                <div className="flex justify-center items-center">
                  <Image
                    src="/img/brand7.svg"
                    alt="Brand1"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/img/brand8.svg"
                    alt="Brand1"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/img/brand9.svg"
                    alt="Brand1"
                    width={100}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="py-7 sm:py-24 px-4 w-full ">
              <p className="text-lg  sm:text-4xl">
                — WE BUILD THE BRANDS
                <br className="hidden lg:block" /> THAT CAN’T BE IGNORED!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
