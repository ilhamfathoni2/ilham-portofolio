import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { rightIcon } from "../../../public/assets/vector";
import gsap, { Back } from "gsap";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'

export const SectionOne = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-1",
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Back.easeOut.config(10),
      }
    );
  }, []);

  const handleAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero-section"
      className="hero-1 pl-7 pr-7 lg:pl-[232px] lg:pr-[60px] mt-[150px]"
    >
      <div>
        <h6 className="text-primaryBlue text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-medium p-0 mb-[20px]">
          Hi, my name is
        </h6>
        <h1 className="text-textPrimary text-[40px] lg:text-[70px] font-bold p-0">
          Ilham Fathoni.
        </h1>
        <h1 className="text-textSecondary text-[40px] lg:text-[70px] font-bold p-0 lg:mt-[-20px] mb-6">
          Frontend Developer.
        </h1>
        <p className="text-textSecondary text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] mt-3 mb-9 lg:w-[500px] pr-7">
          I am a frontend developer specialized in building mobile apps and
          websites with over 1 year experience. Always looking for innovative
          solutions to everyday problems while keeping in mind the DRY
          principle.
        </p>
        <button
          onClick={handleAbout}
        >
          <ChevronDoubleDownIcon className="w-9 text-primaryBlue animate-bounce" />
        </button>
      </div>
    </div>
  );
};
