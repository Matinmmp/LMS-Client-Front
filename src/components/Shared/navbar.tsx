"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { FaRightToBracket } from "react-icons/fa6";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdOutlinePersonAddAlt,
} from "react-icons/md";
import { GoDotFill } from "react-icons/go";

import { ThemeSwitch } from "@/src/components/theme-switch";

const categories = [
  {
    _id: 1,
    title: "برنامه نویسی",
    subCategories: [
      {
        _id: 1,
        title: "برنامه نویسی",
      },
      {
        _id: 1,
        title: "برنامه نویسی",
      },
    ],
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
  {
    _id: 1,
    title: "برنامه نویسی",
    subCategories: [
      {
        _id: 1,
        title: "برنامه نویسی",
        subCategories: [
          {
            _id: 1,
            title: "برنامه نویسی",
          },
          {
            _id: 1,
            title: "برنامه نویسی",
          },
        ],
      },
      {
        _id: 1,
        title: "برنامه نویسی",
        subCategories: [
          {
            _id: 1,
            title: "برنامه نویسی",
          },
          {
            _id: 1,
            title: "برنامه نویسی",
          },
        ],
      },
    ],
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
  {
    _id: 1,
    title: "برنامه نویسی",
    subCategories: [
      {
        _id: 1,
        title: "برنامه نویسی",
      },
      {
        _id: 1,
        title: "برنامه نویسی",
      },
    ],
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
];

const academies = [
  {
    _id: 1,
    title: "برنامه نویسی",
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
  {
    _id: 1,
    title: "برنامه نویسی",
  },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 100) {
        // مقدار اسکرول مورد نظر
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const searchInput = (
  //     <Input aria-label="Search" classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
  //         endContent={<Kbd className="hidden lg:inline-block" keys={["command"]}> K </Kbd>}
  //         labelPlacement="outside"
  //         placeholder="Search..."
  //         startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
  //         type="search"
  //     />
  // );

  console.log(open);

  return (
    <div
      className={`sticky top-10 w-full transition-all ${scrolled ? " max-w-[100%] px-0 left-0 right-0" : " max-w-7xl px-4"}`}
    >
      <NextUINavbar className="w-full h-[4.5rem]" maxWidth="full">
        <NavbarContent justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="-me-8 lg:m-0 " href="/">
              <Image
                priority
                alt="logo"
                className="w-12 h-12"
                height={100}
                src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"}
                width={100}
              />
            </NextLink>
          </NavbarBrand>

          <ul className="ms-6 hidden lg:flex gap-4 justify-start ml-2">
            <NavbarItem>
              <DropDown
                link={"/b"}
                position="bottom-middle"
                title={
                  <div className="w-full flex items-center justify-between">
                    <span>دوره‌های برنامه نویسی</span>
                    <MdKeyboardArrowDown size={24} />
                  </div>
                }
              >
                <div className="w-44 max-h-[25rem] p-3">
                  {categories.map((item, index) => {
                    if (item?.subCategories)
                      return (
                        <NavbarItem key={index}>
                          <DropDown
                            link="/"
                            position="left"
                            title={
                              <div className="w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300">
                                {item.subCategories && (
                                  <MdKeyboardArrowLeft
                                    className="me-auto"
                                    size={16}
                                  />
                                )}
                                {item.title}
                                <GoDotFill
                                  className="text-primary-300  "
                                  size={10}
                                />
                              </div>
                            }
                          >
                            <div className="w-44 max-h-[25rem] p-3">
                              {item.subCategories.map((sub, index) => (
                                <NavbarItem key={index}>
                                  <NextLink
                                    className={clsx(
                                      linkStyles({ color: "foreground" }),
                                      "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",
                                    )}
                                    color="foreground"
                                    href={"/"}
                                  >
                                    {sub.title}
                                    <GoDotFill
                                      className="text-primary-300  "
                                      size={10}
                                    />
                                  </NextLink>
                                </NavbarItem>
                              ))}
                            </div>
                          </DropDown>
                        </NavbarItem>
                      );

                    return (
                      <NavbarItem key={index}>
                        <NextLink
                          className={clsx(
                            linkStyles({ color: "foreground" }),
                            "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",
                          )}
                          color="foreground"
                          href={"/"}
                        >
                          {item.title}
                          <GoDotFill className="text-primary-300  " size={10} />
                        </NextLink>
                      </NavbarItem>
                    );
                  })}
                </div>
              </DropDown>
            </NavbarItem>

            <NavbarItem>
              <DropDown
                link={"/b"}
                position="bottom-left"
                title={
                  <div className="w-full flex items-center justify-between">
                    <span>آکادمی‌ها</span>
                    <MdKeyboardArrowDown size={24} />
                  </div>
                }
              >
                <div className="w-[35rem] max-h-[50rem] p-3">
                  {academies.map((item, index) => (
                    <NavbarItem key={index}>
                      <NextLink
                        className={clsx(
                          linkStyles({ color: "foreground" }),
                          "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",
                        )}
                        color="foreground"
                        href={"/"}
                      >
                        {item.title}
                        <GoDotFill className="text-primary-300  " size={10} />
                      </NextLink>
                    </NavbarItem>
                  ))}
                </div>
              </DropDown>
            </NavbarItem>

            <NavbarItem>
              <DropDown
                link={"/b"}
                position="bottom-left"
                title={
                  <div className="w-full flex items-center justify-between">
                    <span>آکادمی‌ها</span>
                    <MdKeyboardArrowDown size={24} />
                  </div>
                }
              >
                <div className="w-[35rem] max-h-[50rem] p-3">
                  {academies.map((item, index) => (
                    <NavbarItem key={index}>
                      <NextLink
                        className={clsx(
                          linkStyles({ color: "foreground" }),
                          "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",
                        )}
                        color="foreground"
                        href={"/"}
                      >
                        {item.title}
                        <GoDotFill className="text-primary-300  " size={10} />
                      </NextLink>
                    </NavbarItem>
                  ))}
                </div>
              </DropDown>
            </NavbarItem>

            <NavbarItem key={"/"}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={"/"}
              >
                بلاگ
              </NextLink>
            </NavbarItem>
          </ul>
        </NavbarContent>

        <ul className="!w-[20rem] hidden sm:flex justify-end">
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>

          <NavbarItem className="hidden sm:flex gap-2">
            <div className="flex items-center">
              <Button
                className=" w-[5.5rem] -me-4 gap-0.5 ps-2 bg-info text-white"
                endContent={
                  <FaRightToBracket
                    className="ms-1 text-base font-medium"
                    size={20}
                  />
                }
                radius="sm"
                variant="shadow"
              >
                ورود
              </Button>

              <Button
                className="px-2 w-24"
                color="primary"
                radius="sm"
                variant="shadow"
              >
                <span className="text-base font-medium ">عضویت</span>
                <MdOutlinePersonAddAlt size={24} />
              </Button>
            </div>
          </NavbarItem>
        </ul>
      </NextUINavbar>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
  position:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "bottom-middle"
    | "bottom-left";
  title: React.ReactNode;
  link: string;
};

const DropDown = ({ children, position, title, link }: Props) => {
  const [open, setOpen] = useState(false);
  let positionStyle = "";

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  if (position === "bottom-middle")
    positionStyle = "left-1/2 transform -translate-x-1/2";
  if (position === "left") positionStyle = "left-[-125%] -top-3 pe-10";
  if (position === "bottom-left") positionStyle = "rigth-1 transform ";

  return (
    <div
      className="w-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NextLink
        className={clsx(
          linkStyles({ color: "foreground" }),
          "w-full font-medium cursor-pointer relative",
        )}
        color="foreground"
        href={link}
      >
        {title}
      </NextLink>

      {open && (
        <div
          className={clsx(
            "absolute pt-7 transition-opacity duration-200 opacity-0", // اضافه کردن transition و opacity
            positionStyle,
            open ? "opacity-100" : "opacity-0", // کنترل کردن باز و بسته شدن با opacity
          )}
        >
          <div
            className=" overflow-x-autos rounded-md backdrop-blur-lg backdrop-saturate-200 bg-background/90"
            dir="ltr"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
