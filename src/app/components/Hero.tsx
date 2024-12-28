"use client";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/all";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 7;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);

        const loaderTl = gsap.timeline({
          onComplete: () => setIsLoading(false),
        });

        loaderTl
          .to(counterRef.current, {
            scale: 1.2,
            duration: 0.2,
            ease: "power2.in",
          })
          .to(loaderRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
          });
      }
      if (counterRef.current) {
        counterRef.current.textContent = Math.floor(progress) + "%";
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (
      isLoading ||
      !headingRef.current ||
      !overlayRef.current ||
      !textRef.current
    )
      return;

    const revealTl = gsap.timeline();

    revealTl
      .fromTo(
        overlayRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        }
      )
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 1.5,
        opacity: 0,
        ease: "power4.inOut",
      });

    gsap.fromTo(
      headingRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    gsap.to(headingRef.current, {
      y: "+=10",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.fromTo(
      textRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      }
    );
  }, [isLoading]);

  return (
    <>
      <div
        ref={loaderRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F12]">
        <p className="text-white absolute top-[5%] left-3 text-5xl md:text-5xl  font-[ppmori-regular]">
          Meta4 is loading
        </p>
        <span
          ref={counterRef}
          className="text-5xl md:text-9xl font-[ppmori-regular] text-white absolute bottom-4 font-semibold right-5">
          0%
        </span>
      </div>

      <main className="sticky top-0 -z-10">
        <div className="w-full h-[calc(100vh-40vh)] md:h-[calc(100vh-15vh)] flex flex-col justify-between bg-black bg-[url('/img/hero_bg_try.webp')] bg-cover bg-center bg-no-repeat">
          <div
            ref={overlayRef}
            className="fixed inset-0 h-screen bg-[#B4EA28] z-50"
          />

          <div className="relative px-4 sm:px-12 pt-[20vh] sm:pt-[50vh] lg:pt-[30vh]  2xl:pt-[39vh] 3xl:  pb-0">
            <h1
              ref={headingRef}
              className="
            text-[#B4EA28]
            text-4xl     
            sm:text-5xl  
            md:text-6xl  
            lg:text-7xl  
            xl:text-8xl  
            2xl:text-[10rem] 
            leading-tight
            sm:leading-tight
            md:leading-tight
            lg:leading-snug
            xl:leading-normal
            2xl:leading-[10rem]
            
            w-full
            sm:w-[95%]
            md:w-[92%]
            lg:w-[90%]
            xl:w-[85%]
            2xl:w-[85%]
            min-[1850px]:w-[75%]
            
            wobble-text 
            font-[ppmori-regular] 
            ">
              Where ideas
              <span className="text-white block lg:inline">
                {" "}
                races to victory!
              </span>
            </h1>

            <p
              ref={textRef}
              className="text-white text-sm sm:text-base md:text-lg
            pt-20 w-full mt-8 lg:mt-0 
             lg:absolute lg:right-40 2xl:right-[30rem] lg:top-[26rem]
             max-w-md sm:max-w-[400px] md:max-w-[440px] lg:max-w-72">
              Inspirux is a strategic design company giving global brands an
              edge
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
