import React from "react";
import Image from "next/image";
import { rightIcon } from "../../../public/assets/vector";
import { imgProfile } from "../../../public/assets/img";

export const About = () => {
  return (
    <div
      id="about-section"
      className="pl-7 pr-7 lg:flex lg:justify-between lg:pl-[232px] lg:pr-[98px] mt-[170px] lg:mt-[100px] xl:mt-[100px] 2xl:mt-[100px] mb-[20px]"
    >
      <div>
        <Image
          src={imgProfile}
          alt="profile"
          width={350}
          quality={100}
          className="mt-[70px] mb-12"
        />
      </div>
      <div>
        <h1 className="text-textPrimary text-[20px] font-bold p-0 mb-8">
          About Me
        </h1>
        <div className="text-textSecondary text-[16px] lg:text-[18px] mb-5 lg:w-[680px] p-0">
          <p className="mb-1">
            I am a frontend developer based in Indonesia, and I take great pleasure in building robust frontend products that can scale with an exceptional user experience.
          </p>
          <br />
          <p className="mb-1">
            My career in frontend development began at a startup company in Tangerang, where I honed my skills in developing complex mobile and web applications, especially for e-commerce and other applications. Using JavaScript frameworks like React and Next for mobile and web development has always piqued my interest. I believe that designing solutions for mobile and web development is a challenge to be embraced, and I enjoy exploring new approaches to tackle it.
          </p>
          <br />
          <p className="mb-1">
            Currently, I am continuously enhancing my skills in frontend, particularly in React.js, React Native, Next.js, and Flutter. Over time, I've realized the limitations when developing mobile applications with these frameworks, which is why I am committed to expanding my expertise by understanding and utilizing low-level core infrastructures like Java, Kotlin, and C++. I aim to gain the ability to solve problems and interact with their underlying structures.
          </p>
          <br />
          <p className="mb-1">
            {"Here are some of the technologies I've been using recently:"}
          </p>
        </div>
        <div className="flex justify-between lg:w-[400px]">
          <div>
            <h6 className="flex items-center mb-2 text-textSecondary text-[13px]">
              <Image
                src={rightIcon}
                alt="icon-right"
                width={7}
                className="mr-4"
              />{" "}
              JavaScript
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image
                src={rightIcon}
                alt="icon-right"
                width={7}
                className="mr-4"
              />{" "}
              React.js
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image
                src={rightIcon}
                alt="icon-right"
                width={7}
                className="mr-4"
              />{" "}
              React Native
            </h6>
          </div>
          <div>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image
                src={rightIcon}
                alt="icon-right"
                width={7}
                className="mr-4"
              />{" "}
              Next.js
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image
                src={rightIcon}
                alt="icon-right"
                width={7}
                className="mr-4"
              />{" "}
              Express.js
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image
                src={rightIcon}
                alt="icon-right"
                width={7}
                className="mr-4"
              />{" "}
              Node.js
            </h6>
          </div>
          <div>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image
                src={rightIcon}
                alt="icon-right"
                width={7}
                className="mr-4"
              />{" "}
              TypeScript
            </h6>
            <h6 className="flex items-center mb-2 text-textSecondary text-[14px]">
              <Image
                src={rightIcon}
                alt="icon-right"
                width={7}
                className="mr-4"
              />{" "}
              Flutter
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
