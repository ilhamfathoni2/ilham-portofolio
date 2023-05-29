import React from "react";
import Image from "next/image";
import {
  imgExperience,
  logoAlfamind,
  logoDaikin,
} from "../../../public/assets/img";

const experienceData = [
  {
    company: "PT Meteor Inovasi Digital",
    data: [
      {
        project: "Alfamind",
        year: "Jan 2022 - Present",
        position: "Mobile Developer",
        link: "https://play.google.com/store/apps/details?id=id.meteor.alfamind&hl=en&gl=US",
        description:
          "Main tasks, writing and developing program code, testing tasks that have been completed, fixing bugs, working with the team to find solutions to problems, collaborating with other teams/divisions to understand the needs needed.",
      },
      {
        project: "Daikin",
        year: "Dec 2022 - Present",
        position: "Frontend Developer",
        link: "",
        description:
          "Main tasks, writing and developing program code, testing tasks that have been completed, fixing bugs, working with the team to find solutions to problems, collaborating with other teams/divisions to understand the needs needed.",
      },
    ],
  },
  {
    company: "PT PAL Indonesia",
    data: [
      {
        project: "Web PAL Internship",
        year: "Jun 2021 - Okt 2021",
        position: "Internship Laravel Developer",
        link: "",
        description:
          "Create a web to manage internship registration and active internship data management",
      },
    ],
  },
];

export const Experience = () => {
  return (
    <div
      id="experience-section"
      className="pl-7 pr-7 lg:flex lg:justify-between lg:pl-[232px] lg:pr-[98px] mt-[170px] lg:mt-[100px] xl:mt-[100px] 2xl:mt-[100px] mb-[50px] items-center"
    >
      <div>
        <h1 className="text-textPrimary text-[20px] font-bold p-0">
          Experience
        </h1>
        <div className="mx-auto mt-8 grid max-w-lg gap-6 lg:gap-8">
          <div className="rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
            {experienceData.map((comp, index) => (
              <div key={index} className="text-base leading-7 mb-5">
                <h3 className="font-semibold text-white">{comp.company}</h3>
                {comp.data.map((item, index) => (
                  <div key={index}>
                    <h4 className="mt-3 text-[14px] font-medium text-textPrimary hover:text-primaryBlue cursor-pointer">
                      {item.link ? (
                        <a href={item.link}>
                          <b>Project - {item.project}</b>
                        </a>
                      ) : (
                        <a>
                          <b>Project - {item.project}</b>
                        </a>
                      )}
                    </h4>
                    <h4 className="text-[14px] font-medium text-textSecondary">
                      {item.position} | {item.year}
                    </h4>
                    <div className="mt-4 text-textSecondary mb-4">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Image
          src={imgExperience}
          alt="experience"
          width={350}
          quality={100}
          className="mt-[70px] hidden lg:inline"
        />
      </div>
    </div>
  );
};
