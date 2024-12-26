"use client";

import React from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/all";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  // const textRef = useRef(null);
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
    gsap.from(".about-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.02,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
    });
  });

  useGSAP(() => {
    // if (!isMobile) {
    const pinnedText = gsap.to(".pinning-this", {
      y: -50,
      opacity: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        pin: ".pinning-this",
        pinSpacing: true,
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      pinnedText.kill();
    };
    // }
  }, []);

  return (
    <section
      ref={containerRef}
      className="px-4 md:px-12 pt-32 lg:pt-32 h-full overflow-hidden z-50 bg-white">
      <div className="block space-y-6 lg:space-y-0 lg:flex gap-24 justify-between">
        <div
          className={`w-full sm:max-w-xs h-full ${
            isMobile ? "pinning-this" : ""
          }`}>
          <p className="uppercase text-sm md:text-base">
            We believe in the power of design and its ability to define and
            transform brands
          </p>
        </div>

        <div className="text-sm lg:text-lg 2xl:text-5xl overflow-hidden w-full md:max-w-[1399px] h-full">
          <p className="leading-14 md:about-text">
            –– It{"'"}s our commitment to excellence that distinguises us. We
            are passionate about creating visually stunning and user-friendly
            digital experiences that leave a lasting impression.
            <br />
            We believe in the power of design and its ability to define and
            transform brands. We are a team of creative thinkers and problem
            solvers
          </p>

          <p className="pt-7 md:about-text">
            We are a team of creative thinkers and problem solvers
          </p>

          <p className="underline uppercase text-sm pt-2 md:pt-12 md:about-text">
            Read more about us
          </p>
        </div>
      </div>
    </section>
  );
}
