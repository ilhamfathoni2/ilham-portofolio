import Image from "next/image";
import { ptgss, jhonkey } from "../../../public/assets/img";
import { LinkIcon } from '@heroicons/react/24/outline'

const posts = [
  {
    id: 1,
    title: "PT Global Solusindo",
    href: "https://ptgss.com/",
    description:
      "PT GLOBAL SOLUSINDO SAKTI is able to provide Mechanical and Electrical support in the design, build, construct, supply, install, and upgrade of Electro-Mechanical Systems & Networks",
    imageUrl: ptgss,
    stacks: ["Next.js", "tailwindcss", "daisyui", "HTML"],
  },
  {
    id: 1,
    title: "Jhonkey",
    href: "https://jhonkey.com/",
    description:
      "Web that offers 24-hour call service for locksmiths for cars, motorbikes, doors, safes, immobilizers and others.",
    imageUrl: jhonkey,
    stacks: ["Next.js", "tailwindcss", "daisyui", "HTML"],
  },
  // More posts...
];

export const Portofolio = () => {
  return (
    <div
      id="portofolio-section"
      className="pl-7 pr-7 lg:pl-[232px] lg:pr-[98px] mt-[170px] lg:mt-[100px] xl:mt-[100px] 2xl:mt-[100px] mb-[50px] md:mb-[150px] lg:mb-[150px] xl:mb-[150px] 2xl:mb-[150px]"
    >
      <div>
        <h2 className="text-textPrimary text-[20px] font-bold">Portofolio</h2>
        <div className="mt-8 space-y-12 lg:space-y-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative isolate flex flex-col gap-8 lg:flex-row justify-between rounded-xl bg-bgPrimary p-6 ring-1 ring-inset ring-white/10 hover:bg-white/5"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2/1] lg:w-[350px] lg:shrink-0">
                <Image
                  src={post.imageUrl}
                  alt="PT GSS"
                  width={880}
                  quality={100}
                  className="absolute inset-0 h-full w-full rounded-[6px] object-cover"
                />
                <div className="absolute inset-0 rounded-[6px] ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="group relative max-w-xl">
                  <h3 className="flex gap-3 mt-3 text-lg font-semibold leading-6 text-textSecondary group-hover:text-primaryBlue">
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                    <LinkIcon className="w-5" />
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-textSecondary">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap mt-2">
                    {post.stacks.map((stack, index) => (
                      <h5
                        key={index}
                        className="text-[12px] border-[1px] pl-2 pr-2 pt-0 pb-0 rounded-full text-textSecondary mr-2 mb-2"
                      >
                        {stack}
                      </h5>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
