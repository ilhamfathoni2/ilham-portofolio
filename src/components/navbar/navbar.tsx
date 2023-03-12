import React from "react";
import Image from "next/image";
import { logoIF } from "../../../public/assets/vector";

export const Navbar = () => {
  const handleAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hidden md:inline lg:inline xl:inline 2xl:inline">
        <div className="flex fixed justify-between top-0 left-0 right-0 bg-bgPrimary h-[80px] w-full drop-shadow items-center pl-[80px] pr-[80px] pt-[20px] pb-[20px] z-[1000000]">
          <Image
            src={logoIF}
            alt="logo"
            width={25}
            quality={100}
            className="cursor-pointer"
          />
          <div className="flex items-center">
            <button onClick={handleAbout}>
              <h6 className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                About
              </h6>
            </button>
            <button>
              <h6 className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                Experience
              </h6>
            </button>
            <button>
              <h6 className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                Portofolio
              </h6>
            </button>
            <button>
              <h6 className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                Contact
              </h6>
            </button>
            <button className="hover:bg-[#16385B] border-primaryBlue border-[2px] text-primaryBlue pt-2 pb-2 pl-[15px] pr-[15px] rounded-[4px]">
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
