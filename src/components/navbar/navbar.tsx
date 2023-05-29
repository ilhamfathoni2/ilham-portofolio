import React from "react";
import Image from "next/image";
import { logoIF } from "../../../public/assets/vector";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", href: "#about-section", current: false },
  { name: "Experience", href: "#experience-section", current: false },
  { name: "Portofolio", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const scrollHero = () => {
    const element = document.getElementById("hero-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPDF = () => {
    const file = "/assets/CVIlham.pdf";
    window.open(file, "_blank");
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 bg-bgPrimary p-[20px] z-[1000000]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <button onClick={scrollHero}>
                    <Image
                      src={logoIF}
                      alt="logo"
                      width={20}
                      quality={100}
                      className="hidden h-8 w-auto lg:block cursor-pointer"
                    />
                  </button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "hover:text-primaryBlue text-textPrimary",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <button
                      onClick={openPDF}
                      className="hover:bg-[#16385B] border-primaryBlue border-[2px] text-primaryBlue pl-[15px] pr-[15px] rounded-[4px] text-sm font-medium"
                    >
                      Resume
                    </button>
                  </div>
                </div>
                <button onClick={scrollHero}>
                  <Image
                    src={logoIF}
                    alt="logo"
                    width={20}
                    quality={100}
                    className="block h-8 w-auto lg:hidden cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "hover:text-primaryBlue text-textPrimary",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <button
                onClick={openPDF}
                className={classNames(
                  "hover:text-primaryBlue text-textPrimary",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                Resume
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
