import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  githubIcon,
  linkedinIcon,
  emailIcon,
} from "../../../public/assets/vector";

export const Footer = () => {
  return (
    <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
      <div className="flex justify-center gap-5 bottom-0 w-full pl-[7px] pr-[7px] z-[1000000] bg-bgPrimary mb-[50px]">
        <Link href="https://github.com/ilhamfathoni2" target="_blank">
          <Image
            src={githubIcon}
            alt="github"
            width={20}
            quality={100}
            className="mb-6"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ilham-fathoni" target="_blank">
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
    </div>
  );
};
