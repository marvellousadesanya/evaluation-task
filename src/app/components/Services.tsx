"use client";

import React from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import { services } from "@/dummyData/services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const worksSectionRef = useRef(null);

  const [activeServiceId, setActiveServiceId] = React.useState<string | null>(
    null
  );

  // useGSAP(() => {
  //   gsap.from(".pin-this", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.02,
  //     ease: "back.out",
  //     scrollTrigger: {
  //       pin: true,
  //       trigger: containerRef.current,
  //       start: "top 80%",
  //     },
  //   });
  // });

  useGSAP(() => {
    const pinnedText = gsap.to(".pin-this-too", {
      // y: -50,
      opacity: 0.8,
      duration: 1,

      scrollTrigger: {
        trigger: worksSectionRef.current,

        pin: ".pin-this-too",
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
    // Selected Works animation
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });

    tl1.fromTo(
      ".selected-text",
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

    // Project items animation
    const projectItems = gsap.utils.toArray(".project-items");
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
      tl1.kill();
      tl2.kill();
    };
  }, []);

  const handleShowDescription = (serviceId: string) => {
    setActiveServiceId(activeServiceId === serviceId ? null : serviceId);
  };

  return (
    <div ref={containerRef} className="bg-[#0F0F12] py-4 md:py-12 z-50">
      <div ref={worksSectionRef} className="">
        <div className="block lg:flex justify-between pl-4 md:pl-12 lg:gap-18 2xl:gap-80">
          <div className="w-full md:w-96 pt-12 uppercase lg:pin-this-too h-full text-white">
            <p className="text-xs md:text-sm text-[#939393]">
              Strategy
              <br /> design
              <br /> development
              <br /> marketing
              <br />
            </p>
            <p className="underline pt-2 text-sm">View all services</p>
          </div>

          <div className="h-full w-full py-7 sm:py-0 lg:w-[70%]">
            <div className="w-[80%] py-5 md:w-3/4">
              <p className="text-xl md:text-4xl text-white font-semibold">
                EXPERTISE — From initial exploration through strategy, branding,
                and on to the product{"'s"} design and development
              </p>
            </div>

            {services.map((service) => (
              <div
                onClick={() => handleShowDescription(service.id)}
                key={service.id}
                className="project-items border-b-[0.2px] border-[#939393]/30  hover:border-transparent  transition-colors duration-700 text-white py-8 md:py-12 flex justify-between items-center pr-12 cursor-pointer group">
                <div>
                  <div className="flex gap-3">
                    <p className="text-xs text-[#B4EA28] font-semibold">
                      {service.number}
                    </p>
                    <p className="text-3xl lg:text-5xl 2xl:text-7xl uppercase font-semibold">
                      {service.title}
                    </p>
                  </div>

                  <div
                    className={`transform transition-all duration-500 ease-in-out overflow-hidden pl-7 ${
                      activeServiceId === service.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-xs sm:text-sm lg:text-lg py-2 w-3/4 font-semibold">
                      {service.description}
                    </p>

                    <div className="uppercase flex flex-wrap pt-12 gap-1 md:gap-3">
                      {service.tags.map((tag, index) => (
                        <div
                          key={index}
                          className="w-fit rounded-full border border-[#939393] text-[#939393] px-3 py-1 text-xs">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`transform transition-transform ${
                    activeServiceId === service.id ? "rotate-45" : ""
                  }`}>
                  <Image
                    src="/img/cross.svg"
                    alt="Cross"
                    height={30}
                    width={30}
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B4EA28] transition-all duration-300 ease-in-out group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
