import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  githubIcon,
  linkedinIcon,
  emailIcon,
} from "../../../public/assets/vector";

export const Socemed = () => {
  return (
    <div className="hidden md:inline lg:inline xl:inline 2xl:inline">
      <div className="flex flex-col fixed justify-between bottom-0 h-[300px] w-[200px] items-center pl-[70px] pr-[80px] pt-[20px] z-[1000000]">
        <div>
          <Link href="https://github.com/ilhamfathoni2" target="_blank">
            <Image
              src={githubIcon}
              alt="github"
              width={20}
              quality={100}
              className="mb-6"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ilham-fathoni"
            target="_blank"
          >
            <Image
              src={linkedinIcon}
              alt="linkedin"
              width={20}
              quality={100}
              className="mb-6"
            />
          </Link>
          <Link href="mailto:ilhamfathoni2399@gmail.com" target="_blank">
            <Image
              src={emailIcon}
              alt="email"
              width={20}
              quality={100}
              className="mb-6"
            />
          </Link>
        </div>
        <hr className="bg-textPrimary w-[1px] h-[150px]" />
      </div>
    </div>
  );
};
