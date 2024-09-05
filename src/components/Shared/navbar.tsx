'use client'
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { FaRightToBracket } from "react-icons/fa6";
import { MdOutlinePersonAddAlt, MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/dropdown";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) { // مقدار اسکرول مورد نظر
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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


    console.log(open)

    return (
        <div className={`sticky top-10 w-full transition-all ${scrolled ? ' max-w-[100%] px-0 left-0 right-0' : ' max-w-7xl px-4'}`}>
            <NextUINavbar maxWidth="full" className="w-full h-[4.5rem]">

                <NavbarContent className="basis-1/5 sm:basis-full" justify="start">

                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink className='-me-8 lg:m-0 ' href="/">
                            <Image width={100} height={100} priority src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'logo-main.png'} className='w-12 h-12' alt='logo' />
                        </NextLink>
                    </NavbarBrand>

                    <ul className="hidden lg:flex gap-4 justify-start ml-2">
                        {siteConfig.navItems.map((item) => (
                            <NavbarItem key={item.href}>
                                <NextLink color="foreground" href={item.href}
                                    className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")}>
                                    {item.label}
                                </NextLink>
                            </NavbarItem>
                        ))}

                    

                    </ul>

                </NavbarContent>

                <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">

                    <NavbarItem className="hidden sm:flex gap-2">
                        <ThemeSwitch />
                    </NavbarItem>

                    <NavbarItem className="hidden sm:flex gap-2">
                        <div className="flex items-center">

                            <Button endContent={<FaRightToBracket size={20} className="ms-1 text-base font-medium" />}
                                variant="shadow" radius="sm" className=" w-[5.5rem] -me-4 gap-0.5 ps-2 bg-info text-white">
                                ورود
                            </Button>

                            <Button color="primary" variant="shadow" radius="sm" className='px-2 w-24'>
                                <span className='text-base font-medium '>عضویت</span>
                                <MdOutlinePersonAddAlt size={24} />
                            </Button>


                        </div>
                    </NavbarItem>

                </NavbarContent>



            </NextUINavbar>
        </div>
    );
};
