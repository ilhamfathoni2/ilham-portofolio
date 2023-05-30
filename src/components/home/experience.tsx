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
        project: "Alfamind (Alfamart)",
        year: "JAN 2022 - PRESENT",
        position: "FRONTEND DEVELOPER",
        link: "https://play.google.com/store/apps/details?id=id.meteor.alfamind&hl=en&gl=US",
        stacks: [
          "React Native",
          "React.js",
          "Redux",
          "RestAPI",
          "Axios",
          "CodePush",
          "Firebase",
          "React Native Paper",
          "Bootstrap",
          "JavaScript",
        ],
        description:
          "Main tasks, writing and developing program code, testing tasks that have been completed, fixing bugs, working with the team to find solutions to problems, collaborating with other teams/divisions to understand the needs needed.",
      },
      {
        project: "Daikin",
        year: "DEC 2022 - PRESENT",
        position: "FRONTEND DEVELOPER",
        link: "",
        stacks: [
          "React Native",
          "Next.js",
          "Zustand",
          "RestAPI",
          "Axios",
          "CodePush",
          "Firebase",
          "Native Base",
          "tailwindcss",
          "TypeScript",
        ],
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
        year: "JUN 2021 - OKT 2021",
        position: "Internship Laravel Developer",
        link: "",
        stacks: ["Laravel 8", "MySQL", "Bootstrap", "HTML", "CSS"],
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
      <div className="block lg:hidden mb-12">
        <Image
          src={imgExperience}
          alt="experience"
          width={350}
          quality={100}
          className="mt-[65px]"
        />
      </div>
      <div>
        <h1 className="text-textPrimary text-[20px] font-bold p-0">
          Experience
        </h1>
        <div className="mx-auto mt-8 grid max-w-lg gap-6 lg:gap-8">
          {experienceData.map((comp, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <div className="text-base leading-5 mb-4">
                <h3 className="font-semibold text-white">{comp.company}</h3>
                {comp.data.map((item, index) => (
                  <div key={index}>
                    <h4 className="mt-3 text-[15px] font-medium text-textPrimary hover:text-primaryBlue cursor-pointer">
                      {item.link ? (
                        <a href={item.link}>
                          PROJECT - <b>{item.project}</b>
                        </a>
                      ) : (
                        <a>
                          PROJECT - <b>{item.project}</b>
                        </a>
                      )}
                    </h4>
                    <h4 className="text-[12px] font-semibold text-textSecondary">
                      {item.position}
                    </h4>
                    <p className="text-[12px] font-medium text-textSecondary">
                      {item.year}
                    </p>
                    <div className="text-[14px] mt-1 text-textSecondary mb-2">
                      {item.description}
                    </div>
                    <div className="flex flex-wrap mb-4">
                      {item.stacks.map((stack, index) => (
                        <h5
                          key={index}
                          className="text-[12px] border-[1px] pl-2 pr-2 pt-0 pb-0 rounded-full text-textSecondary mr-2 mb-2"
                        >
                          {stack}
                        </h5>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
