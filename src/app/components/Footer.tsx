import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-[#0F0F12] pl-4 pt-12 lg:p-12">
      <div className="block space-y-5 lg:space-y-0 lg:flex justify-between">
        <div>
          <div className="uppercase text-white text-xs sm:text-sm">
            <p>Drop us a line, and we{"'"}ll get in touch!</p>
            <p className="underline ">Schedule a call</p>
          </div>
        </div>

        <div>
          <div className="block lg:flex justify-between text-xs sm:text-sm uppercase text-white">
            <div>Dribbble</div>
            <div>Behance</div>
            <div>Linkedin</div>
            <div>X(Twitter)</div>
            <div>Instagram</div>
            <div>facebook</div>
            <div>Youtube</div>
          </div>

          <div className="relative border-b border-[#939393]/30 my-12 py-4 sm:py-8 group cursor-pointer flex gap-3">
            <p className="text-white uppercase font-semibold text-xl sm:text-4xl lg:text-7xl">
              HELLO@CREateYourmeta4.com
            </p>

            <div>
              <Image
                src="/img/footerArrow2.png"
                width={40}
                height={40}
                alt="arrow"
                className="hidden sm:block group-hover:rotate-180 transform transition-transform duration-300 ease-in-out"
              />

              <Image
                src="/img/footerArrow2.png"
                width={10}
                height={10}
                alt="arrow"
                className="block sm:hidden group-hover:rotate-180 transform transition-transform duration-300 ease-in-out"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B3EC12] transition-all duration-300 ease-in-out group-hover:w-full" />
          </div>

          <div className="w-full block sm:grid font-semibold grid-cols-3 gap-4 uppercase text-white text-xs py-4 space-y-5 sm:space-y-0 sm:py-12">
            <div className="">
              <p>+4400000000</p>
              <p>
                some address I will
                <br /> show later
              </p>
            </div>
            <div>
              <p>Works</p>
              <p>expertise</p>
              <p>about</p>
              <p>insights</p>
            </div>
            <div>
              <p>careers</p>
              <p>contact</p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-between uppercase py-2 px-4 sm:py-10 text-[#939393] text-xs sm:text-sm">
            <p className="">© 2022. All rights reserved.</p>
            <p>Lets make ideas again 🎉</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
