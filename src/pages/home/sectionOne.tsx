import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { rightIcon } from "../../../public/assets/vector";
import gsap, { Back } from "gsap";

export const SectionOne = () => {
  useEffect(() => {
    gsap.fromTo(".hero-1", {
      x: -40,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: Back.easeOut.config(10)
    })
  }, []);

  const handleAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-1 pl-[232px] pr-[60px] mt-[150px]">
      <div>
        <h6 className="text-primaryBlue text-[18px] font-medium p-0 mb-[20px]">
          Hi, my name is
        </h6>
        <h1 className="text-textPrimary text-[70px] font-bold p-0">
          Ilham Fathoni.
        </h1>
        <h1 className="text-textSecondary text-[70px] font-bold p-0 mt-[-20px] mb-6">
          Frontend Developer.
        </h1>
        <p className="text-textSecondary text-[18px] mt-3 mb-5 lg:w-[500px] p-0">
          I am a frontend developer specialized in building mobile apps and
          websites with over 1 year experience. Always looking for innovative
          solutions to everyday problems while keeping in mind the DRY
          principle.
        </p>
        <button onClick={handleAbout} className="flex justify-between items-center hover:bg-[#16385B] border-primaryBlue border-[2px] text-primaryBlue pt-2 pb-2 pl-[20px] pr-[20px] rounded-[4px] mt-10 w-[100px]">
          Next
          <Image src={rightIcon} alt="icon-right" width={7} />
        </button>
      </div>
    </div>
  );
};
