"use client";
import { Navbar as NextUINavbar, NavbarContent, NavbarItem, } from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState ,forwardRef} from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "@/src/components/theme-switch";
import Drawer from "./Drawer";
import { Edu } from "@/src/config/fonts";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdOutlinePersonAddAlt } from "react-icons/md";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaRightToBracket, FaCaretLeft, FaChevronLeft } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { GrMenu } from "react-icons/gr";
import { motion } from 'framer-motion';
import {Avatar} from "@nextui-org/avatar";

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

const links = [
    
]

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <div className={`sticky top-10 w-full transition-all ${scrolled ? " max-w-[100%] px-0 left-0 right-0" : " max-w-7xl px-4"}`}>
            <NextUINavbar className="w-full h-[4.5rem]" maxWidth="full">
                <NavbarContent className='items-center px-4 relative' justify="start">


                    <GrMenu size={25} className="cursor-pointer md:hidden" onClick={() => setIsMenuOpen(true)} />

                    <NextLink className=" md:-me-8 lg:m-0 absolute left-1/2  transform -translate-x-1/2 md:relative md:right-0 md:transform-none" href="/">
                        <Image priority alt="logo" className="w-12 h-12" height={100} width={100}
                            src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                    </NextLink>

                    <ul className="ms-10 md:ms-6 hidden md:flex gap-4 justify-start ml-2">
                        <NavbarItem>
                            <DropDown link={"/b"} position="bottom-middle"
                                title={
                                    <div className="w-full flex items-center justify-between">
                                        <span>دوره‌های برنامه نویسی</span>
                                        <MdKeyboardArrowDown size={24} />
                                    </div>
                                }>

                                <div className="w-44 max-h-[25rem] p-3">
                                    {categories.map((item, index) => {
                                        if (item?.subCategories)
                                            return (
                                                <NavbarItem key={index}>
                                                    <DropDown link="/" position="left"
                                                        title={
                                                            <div className="w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300">
                                                                {item.subCategories && (<MdKeyboardArrowLeft className="me-auto" size={16} />)}
                                                                {item.title}
                                                                <GoDotFill className="text-primary-300" size={10} />
                                                            </div>}>

                                                        <div className="w-44 max-h-[25rem] p-3">
                                                            {item.subCategories.map((sub, index) => (
                                                                <NavbarItem key={index}>
                                                                    <NextLink
                                                                        className={clsx(linkStyles({ color: "foreground" }),
                                                                            "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",
                                                                        )}
                                                                        color="foreground" href={"/"} >
                                                                        {sub.title}
                                                                        <GoDotFill className="text-primary-300" size={10} />
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
                                                    className={clsx(linkStyles({ color: "foreground" }),
                                                        "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",
                                                    )}
                                                    color="foreground" href={"/"}>
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
                            <DropDown link={"/b"} position="bottom-left"
                                title={
                                    <div className="w-full flex items-center justify-between">
                                        <span>آکادمی‌ها</span>
                                        <MdKeyboardArrowDown size={24} />
                                    </div>
                                }>

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
                            <NextLink color="foreground" href={"/"}
                                className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")} >
                                بلاگ
                            </NextLink>
                        </NavbarItem>
                    </ul>

                    <ul className="ms-auto flex items-center">
                        <NavbarItem className="hidden sm:flex gap-2">
                            <ThemeSwitch />
                        </NavbarItem>

                        <NavbarItem className="hidden sm:flex gap-2">
                            <div className="flex items-center">
                                <Button radius="sm" variant="shadow" color="secondary" className=" w-[5.5rem] -me-4 gap-0.5 ps-2   text-white"
                                    endContent={<FaRightToBracket className="ms-1 text-base font-medium" size={20} />} >
                                    ورود
                                </Button>

                                <Button className="px-2 w-24" color="primary" radius="sm" variant="shadow">
                                    <span className="text-base font-medium ">عضویت</span>
                                    <MdOutlinePersonAddAlt size={24} />
                                </Button>
                            </div>
                        </NavbarItem>

                        <NavbarItem className="flex sm:hidden gap-2">
                            <Button radius="sm" variant="shadow" color="secondary" className="!min-w-8   text-white"
                                endContent={<FaRightToBracket className="text-base font-medium" size={20} />} >
                            </Button>
                        </NavbarItem>

                    </ul>
                </NavbarContent>
            </NextUINavbar>


            <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
                <DrawerContent setIsOpen={setIsMenuOpen} categoryList={categories} />

            </Drawer>

        </div>
    );
};

type DropDownProps = {
    children: React.ReactNode;
    position: | "top" | "bottom" | "left" | "right" | "bottom-middle" | "bottom-left";
    title: React.ReactNode;
    link: string;
};

const DropDown = ({ children, position, title, link }: DropDownProps) => {
    const [open, setOpen] = useState(false);
    let positionStyle = "";

    const handleMouseEnter = () => setOpen(true)
    const handleMouseLeave = () => setOpen(false)

    if (position === "bottom-middle") positionStyle = "left-1/2 transform -translate-x-1/2";
    if (position === "left") positionStyle = "left-[-125%] -top-3 pe-10";
    if (position === "bottom-left") positionStyle = "rigth-1 transform ";

    return (
        <div className="w-full relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <NextLink className={clsx(linkStyles({ color: "foreground" }), "w-full font-medium cursor-pointer relative")} color="foreground" href={link}>
                {title}
            </NextLink>

            {open && (
                <div className={clsx("absolute pt-7 transition-opacity duration-200 opacity-0", open ? "opacity-100" : "opacity-0")}>
                    <div className=" overflow-x-autos rounded-md backdrop-blur-lg backdrop-saturate-200 bg-background/90" dir="ltr">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

type DrawerContentProps = {
    setIsOpen: (isOpen: boolean) => void;
    categoryList: any[];
};
const DrawerContent = ({ setIsOpen, categoryList }: DrawerContentProps) => {
    return (
        <div className="h-full w-full overflow-y-auto" dir='ltr'>
            <div className='p-2 py-4 flex flex-col items-center' dir='rtl'>
                <div className="w-full flex justify-end">
                    <CgClose size={30} className='cursor-pointer' onClick={() => setIsOpen(false)} />
                </div>
                <div className='mt-5'>
                    <p className={`${Edu.className} text-center font-bold text-[2.75rem]   text-primary-400 neon-text-3d`}>
                        Virtual Learn
                    </p>
                </div>

                <div className="my-4 w-11/12 h-[0.05rem] bg-primary-400"></div>

                <div className='w-full px-2 mt-2'>
                    <ThemeSwitch showText={true}/>
                </div>

                <div className="mt-8 w-11/12 h-[0.05rem] bg-primary-400"></div>

                
                <div className="w-full mt-6 px-2 flex flex-col gap-4">
                    <DrawerDropDown categoryList={categoryList} />
                    <DrawerDropDown2 list={categoryList} title={'مدرسین'} radius="full"/>
                    <DrawerDropDown2 list={categoryList} title={'آکادمی ها'} radius="sm"/>
                </div>
            </div>

        </div>
    )
}


type DrawerDropDownProps = {
    categoryList: any[]
};
const DrawerDropDown = ({ categoryList }: DrawerDropDownProps) => {
    const [open, setOpen] = useState(false);

    const containerVariants = {
        open: { maxHeight: "100rem", opacity: 1, transition: { duration: 0.3 } },
        closed: { maxHeight: 0, transition: { duration: 0.3 } },
    };

    const subCategoryVariants = {
        open: { maxHeight: "40rem", opacity: 1, transition: { duration: 0.3 } },
        closed: { maxHeight: 0, transition: { duration: 0.3 } },
    };

    return (
        <div className="w-full flex flex-col">
            <div className="w-full ">
                <NextLink color="foreground" href={'/'}
                    className="w-full text-base hover:text-primary-400 transition cursor-pointer relative flex items-center justify-between" >
                    <div className='flex items-center gap-1'>
                        <FaCaretLeft size={12} className="text-primary-400" />
                        <span>دوره‌های برنامه نویسی</span>
                    </div>
                    {open ?
                        <CiSquareMinus size={24} className="text-primary-400" onClick={() => setOpen(false)} />
                        :
                        <CiSquarePlus size={24} className="text-primary-400" onClick={() => setOpen(true)} />}
                </NextLink>
            </div>

            <motion.div className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>
                <div className='ps-4'>
                    {
                        categoryList.map((item, index) => {
                            const [openSub, setOpenSub] = useState(false);
                            return (
                                <div className="flex flex-col" key={index}>
                                    <NextLink color="foreground" href={'/'}
                                        className="w-full mt-3 text-sm hover:text-primary-400 transition cursor-pointer relative flex items-center justify-between" >
                                        <div className='flex items-center gap-1'>
                                            <FaChevronLeft size={8} className="text-primary-400" />
                                            <span>{item.title}</span>
                                        </div>
                                        {item.subCategories && (openSub ?
                                            <CiSquareMinus size={24} className="text-primary-400" onClick={() => setOpenSub(false)} />
                                            :
                                            <CiSquarePlus size={24} className="text-primary-400" onClick={() => setOpenSub(true)} />)}
                                    </NextLink>

                                    {item.subCategories && (
                                        <motion.div
                                            className="ps-8 overflow-hidden"
                                            initial={false}
                                            animate={openSub ? "open" : "closed"}
                                            variants={subCategoryVariants}
                                        >
                                            {item.subCategories.map((itemSub: any, index2: number) => (
                                                <div className="flex flex-col" key={index2}>
                                                    <NextLink color="foreground" href={'/'}
                                                        className="w-full mt-3 text-sm hover:text-primary-400 transition cursor-pointer relative flex items-center justify-between" >
                                                        <div className='flex items-center gap-1'>
                                                            <GoDotFill size={10} className="text-primary-400" />
                                                            <span>{itemSub.title}</span>
                                                        </div>
                                                    </NextLink>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </div>
    );
}



type DrawerDropDown2Props = {
    list: any[];
    title: string;
    radius: 'full' | 'sm'
};
const DrawerDropDown2 = ({ list, title,radius }: DrawerDropDown2Props) => {
    const [open, setOpen] = useState(false);

    const containerVariants = {
        open: { maxHeight: "40rem", opacity: 1, transition: { duration: 0.3 } },
        closed: { maxHeight: 0, transition: { duration: 0.3 } },
    };

    return (
        <div className="w-full flex flex-col">
            <div className="w-full ">
                <NextLink color="foreground" href={'/'}
                    className="w-full text-base hover:text-primary-400 transition cursor-pointer relative flex items-center justify-between" >
                    <div className='flex items-center gap-1'>
                        <FaCaretLeft size={12} className="text-primary-400" />
                        <span>{title}</span>
                    </div>
                    {open ?
                        <CiSquareMinus size={24} className="text-primary-400" onClick={() => setOpen(false)} />
                        :
                        <CiSquarePlus size={24} className="text-primary-400" onClick={() => setOpen(true)} />}
                </NextLink>
            </div>

            <motion.div className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>
               
                    <div className='w-full p-2 pt-8 grid gap-6 grid-cols-3 justify-beetwen'>

                        <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={'primary'} name='harchi' showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                            <span className='text-center'>jhonas eshmitman</span>
                        </NextLink>    
                        <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={'primary'} name='harchi' showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                            <span className='text-center'>jhonas</span>
                        </NextLink>     
                        <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={'primary'} name='harchi' showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                            <span className='text-center'>jhonas</span>
                        </NextLink>                      
                        <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={'primary'} name='harchi' showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                            <span className='text-center'>jhonas</span>
                        </NextLink>   
                        <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={'primary'} name='harchi' showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                            <span className='text-center'>jhonas</span>
                        </NextLink>   
                        <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={'primary'} name='harchi' showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                            <span className='text-center'>jhonas</span>
                        </NextLink>   
                        <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={'primary'} name='harchi' showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                            <span className='text-center'>jhonas</span>
                        </NextLink>   
                        <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={'primary'} name='harchi' showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                            <span className='text-center'>jhonas</span>
                        </NextLink>   
                        <Avatar name='10+' radius={radius}  isBordered size={'lg'} color={'primary'} className='text-xl cursor-pointer' />
                    </div>
               
            </motion.div>
        </div>
    );
}
 