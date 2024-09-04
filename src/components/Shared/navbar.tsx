'use client'
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon, HeartFilledIcon, SearchIcon, Logo } from "@/src/components/icons";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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


    const searchInput = (
        <Input aria-label="Search" classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
            endContent={<Kbd className="hidden lg:inline-block" keys={["command"]}> K </Kbd>}
            labelPlacement="outside"
            placeholder="Search..."
            startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
            type="search"
        />
    );



    return (
        <div className={`sticky top-10 w-full max-w-7xl ${scrolled ? '  transition-all w-full max-w-screen px-0 left-0 right-5' : 'transition-all px-4'}`}>
            <NextUINavbar  className=" h-[4.5rem]">

                <NavbarContent className="basis-1/5 sm:basis-full" justify="start">

                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink className="flex justify-start items-center gap-1" href="/">
                            <Logo />
                            <p className="font-bold text-inherit">ACME</p>
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
                        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                            <TwitterIcon className="text-default-500" />
                        </Link>
                        <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                            <DiscordIcon className="text-default-500" />
                        </Link>
                        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                            <GithubIcon className="text-default-500" />
                        </Link>
                        <ThemeSwitch />
                    </NavbarItem>

                    <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

                    <NavbarItem className="hidden md:flex">
                        <Button isExternal as={Link} variant="flat" className="text-sm font-normal text-default-600 bg-default-100"
                            href={siteConfig.links.sponsor} startContent={<HeartFilledIcon className="text-danger" />}>
                            Sponsor
                        </Button>
                    </NavbarItem>

                </NavbarContent>

                <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitch />
                    <NavbarMenuToggle />
                </NavbarContent>

                <NavbarMenu>
                    {searchInput}
                    <div className="mx-4 mt-2 flex flex-col gap-2">
                        {siteConfig.navMenuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"}
                                    href="#" size="lg">
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </div>
                </NavbarMenu>

            </NextUINavbar>
        </div>
    );
};
