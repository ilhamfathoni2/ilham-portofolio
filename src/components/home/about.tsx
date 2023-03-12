import React from "react";
import Image from "next/image";
import { rightIcon } from "../../../public/assets/vector";
import { imgProfile } from "../../../public/assets/img";

export const About = () => {
  return (
    <div id="about-section" className="flex justify-between pl-[232px] pr-[98px] mt-[100px] mb-[20px]">
      <div>
        <Image src={imgProfile} alt="profile" width={350} quality={100} className="mt-[70px]" />
      </div>
      <div>
        <h1 className="text-textPrimary text-[20px] font-bold p-0 mb-8">
          About Me
        </h1>
        <div className="text-textSecondary text-[18px] mb-5 lg:w-[680px] p-0">
          <p className="mb-1">
            Hello! My name is Ilham and I love building solid, scalable frontend
            products with great user experiences. My interest in frontend
            development started in 2020 when I decided to try basic web
            programming job training from the government, where I was taught a
            lot about HTML, CSS, PHP & MySql.
          </p>
          <br />
          <p className="mb-1">
            From previous experience, I was finally nterested in working as a
            frontend developer, then in 2021 I decided to take part in the
            Full-Stack Developer Bootcamp at PT DumbWays Indonesia to improve my
            skills and get a job as a developer.
          </p>
          <br />
          <p className="mb-1">
            After 3 months of Full-Stack Developer training at PT DumbWays
            Indonesia, I finally got the opportunity to work for an IT Solution
            company, a company that has only been established for about 7 years.
            My main focus is as a mobile and web application developer for
            various clients.
          </p>
          <br />
          <p className="mb-1">
            {"Here are some of the technologies I've been using recently:"}
          </p>
        </div>
        <div className="flex justify-between lg:w-[400px]">
          <div>
            <h6 className="flex items-center mb-2 text-textSecondary text-[13px]">
              <Image src={rightIcon} alt="icon-right" width={7} className="mr-4" /> JavaScript
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image src={rightIcon} alt="icon-right" width={7} className="mr-4" /> React.js
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image src={rightIcon} alt="icon-right" width={7} className="mr-4" /> React Native
            </h6>
          </div>
          <div>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image src={rightIcon} alt="icon-right" width={7} className="mr-4" /> Next.js
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image src={rightIcon} alt="icon-right" width={7} className="mr-4" /> Express.js
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image src={rightIcon} alt="icon-right" width={7} className="mr-4" /> Node.js
            </h6>
          </div>
          <div>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image src={rightIcon} alt="icon-right" width={7} className="mr-4" /> TypeScript
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
