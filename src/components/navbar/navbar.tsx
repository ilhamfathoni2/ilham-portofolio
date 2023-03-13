import React from "react";
import Image from "next/image";
import { logoIF } from "../../../public/assets/vector";

export const Navbar = () => {
  const scrollHero = () => {
    const element = document.getElementById("hero-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPDF = () => {
    const file = "/assets/CVIlham.pdf";
    window.open(file, "_blank");
  };

  return (
    <>
      <div className="hidden md:inline lg:inline xl:inline 2xl:inline">
        <div className="flex fixed justify-between top-0 left-0 right-0 bg-bgPrimary h-[80px] w-full drop-shadow items-center pl-[80px] pr-[80px] pt-[20px] pb-[20px] z-[1000000]">
          <button onClick={scrollHero}>
            <Image
              src={logoIF}
              alt="logo"
              width={25}
              quality={100}
              className="cursor-pointer"
            />
          </button>
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
            <button
              onClick={openPDF}
              className="hover:bg-[#16385B] border-primaryBlue border-[2px] text-primaryBlue pt-2 pb-2 pl-[15px] pr-[15px] rounded-[4px]"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="navbar bg-bgPrimary fixed top-0 left-0 right-0 z-[100000000]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={handleAbout}>
                    <p className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                      About
                    </p>
                  </button>
                </li>
                <li>
                  <button>
                    <p className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                      Experience
                    </p>
                  </button>
                </li>
                <li>
                  <button>
                    <p className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                      Portfolio
                    </p>
                  </button>
                </li>
                <li>
                  <button>
                    <p className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                      Contact
                    </p>
                  </button>
                </li>
                <li>
                  <button onClick={openPDF}>
                    <p className="hover:text-primaryBlue text-textPrimary mr-[50px] cursor-pointer">
                      Resume
                    </p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <button onClick={scrollHero}>
              <Image
                src={logoIF}
                alt="logo"
                width={13}
                quality={100}
                className="cursor-pointer mr-5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
