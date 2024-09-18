"use client";
import { Navbar as NextUINavbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "@/src/components/theme-switch";
import Drawer from "./Drawer";
import { Edu } from "@/src/config/fonts";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdOutlinePersonAddAlt } from "react-icons/md";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaRightToBracket, FaCaretLeft, FaChevronLeft, FaQuoteRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { GrMenu } from "react-icons/gr";
import { Avatar } from "@nextui-org/avatar";
import { navObject } from "@/src/config/site";
import { buildCategoryTree } from "@/src/utils/categorySorter";
import { useTheme } from "next-themes";
import { toPersianNumber } from "@/src/utils/functions";
import { FcAbout } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import dynamic from "next/dynamic";
import CustomeModal from "./CustomeModal";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Auth/Login";
import { useMutation, useQuery } from "@tanstack/react-query";

import SignUp from "../Auth/SignUp";
import { getUserInfo } from "@/src/lib/userApis";
import { userLoggedIn } from "@/src/redux/auth/authSlice";


const MotionComponent = dynamic(() =>
    import("framer-motion").then((mod) => mod.motion.div)
);

const links = [
    {
        icon: <FaTelegramPlane size={20} color="#079CED" />,
        title: 'کانال تلگرام',
        link: '/',
    },
    {
        icon: <GrInstagram size={18} color="#ed071e" />,
        title: 'پیج اینستاگرام',
        link: '/',
    },
    {
        icon: <MdContactPhone size={18} color="#07edd2" />,
        title: 'ارتباط با ما',
        link: '/',
    },
    {
        icon: <FcAbout size={20} />,
        title: 'درباره‌ی ما',
        link: '/',
    },
    {
        icon: <FaQuoteRight size={20} />,
        title: 'سوالات متداول',
        link: '/',
    },
]

const categories = buildCategoryTree(navObject.categoryObject.categoryList, null);
const academiesObject = navObject.academyObject
const teacherObject = navObject.teacherObject


export const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [open, setOpen] = useState(false);
    const [route, setRoute] = useState('Login')
    const { user, loading } = useSelector((state: any) => state.auth)
    const a = useSelector((state: any) => state.auth)

    console.log(a)

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
            <NextUINavbar className={`w-full h-[4.5rem] ${scrolled ? 'rounded-none' : 'md:rounded-lg'} `} maxWidth="full">
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
                                        <span>دوره‌های آموزشی</span>
                                        <MdKeyboardArrowDown size={24} />
                                    </div>
                                }>

                                <div className="w-52 max-h-[25rem] p-3">
                                    {categories[0].subCategories.map((item, index) => {
                                        if (item?.subCategories)
                                            return (
                                                <div key={index}>
                                                    <DropDown link="/" position="left"
                                                        title={
                                                            <div className="w-full flex items-center justify-end gap-1 py-2 hover:text-primary-300">
                                                                {item?.subCategories.length ? (<MdKeyboardArrowLeft className="me-auto" size={16} />) : ''}
                                                                {item.name}
                                                                <GoDotFill className="text-primary-300" size={10} />
                                                            </div>}>

                                                        {item?.subCategories.length ? <div className="w-44 max-h-[25rem] p-3 flex flex-col ">
                                                            {item.subCategories.map((sub, index) => (
                                                                <NextLink color="foreground" href={"/"} key={index}
                                                                    className={clsx(linkStyles({ color: "foreground" }), "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",)}>
                                                                    {sub.name}
                                                                    <GoDotFill className="text-primary-300" size={10} />
                                                                </NextLink>
                                                            ))}
                                                        </div> : ''}
                                                    </DropDown>
                                                </div>
                                            );

                                        return (
                                            <NextLink color="foreground" href={"/"} key={index}
                                                className={clsx(linkStyles({ color: "foreground" }), "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",)}>
                                                {item.name}
                                                <GoDotFill className="text-primary-300  " size={10} />
                                            </NextLink>
                                        );
                                    })}
                                </div>
                            </DropDown>
                        </NavbarItem>

                        <NavbarItem>
                            <DropDown link={"/b"} position="bottom-left"
                                title={
                                    <div className="w-full flex items-center justify-between">
                                        <span>مدرس‌ها</span>
                                        <MdKeyboardArrowDown size={24} />
                                    </div>
                                }>

                                <div className="w-[30rem] max-h-[50rem] p-4 grid gap-6 grid-cols-4 justify-beetwen " dir='rtl'>
                                    {teacherObject.teacherList.map((item, index) => (
                                        <NextLink href={'/'} key={index} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                                            <Avatar radius={'full'} isBordered size={'lg'} color={'primary'} name={item.engName} showFallback src={item.imageUrl} />
                                            <span className='text-center whitespace-break-spaces'>{item.engName}</span>
                                        </NextLink>
                                    ))}
                                    <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                                        <Avatar name={toPersianNumber(teacherObject.total - teacherObject.teacherList.length) + '+'}
                                            radius={'full'} isBordered size={'lg'} color={'primary'} className='text-xl cursor-pointer' />
                                        <span className='text-center'>مشاهده همه</span>
                                    </NextLink>
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

                                <div className="w-[25rem] max-h-[50rem] p-4 grid gap-6 grid-cols-3 justify-beetwen " dir='rtl'>
                                    {academiesObject.academyList.map((item, index) => (
                                        <NextLink href={'/'} key={index} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                                            <Avatar radius={'sm'} isBordered size={'lg'} color={'secondary'} name={item.engName} showFallback src={item.imageUrl} />
                                            <span className='text-center whitespace-break-spaces'>{item.engName}</span>
                                        </NextLink>
                                    ))}
                                    <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                                        <Avatar name={toPersianNumber(academiesObject.total - academiesObject.academyList.length) + '+'}
                                            radius={'sm'} isBordered size={'lg'} color={'secondary'} className='text-xl cursor-pointer' />
                                        <span className='text-center'>مشاهده همه</span>
                                    </NextLink>
                                </div>
                            </DropDown>
                        </NavbarItem>

                        <NavbarItem key={"/"}>
                            <NextLink color="foreground" href={"/"}
                                className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")} >
                                بلاگ
                            </NextLink>
                        </NavbarItem>

                        <NavbarItem>
                            <DropDown link={"/b"} position="bottom-left"
                                title={
                                    <div className="w-full flex items-center justify-between">
                                        <span>لینک های مفید</span>
                                        <MdKeyboardArrowDown size={24} />
                                    </div>
                                }>

                                <div className="w-[10rem] max-h-[50rem] p-3 flex flex-col gap-2">
                                    {links.map((item, index) => (

                                        <NextLink key={index} color="foreground" href={item.link}
                                            className={clsx(linkStyles({ color: "foreground" }), "w-full flex items-center justify-end gap-2 py-1 hover:text-primary-300 ")}>
                                            {item.title}
                                            {item.icon}
                                        </NextLink>

                                    ))}
                                </div>
                            </DropDown>
                        </NavbarItem>
                    </ul>

                    <ul className={`ms-auto flex items-center ${!loading && user ? 'gap-2':'gap-1'}`}>

                        <NavbarItem className="hidden sm:flex gap-2">
                            <ThemeSwitch />
                        </NavbarItem>

                        <NavbarItem className="hidden sm:flex">
                            {
                                !loading ?
                                    user ?
                                        <Avatar className="cursor-pointer" isBordered color="primary" src={user.imageUrl} />
                                        :
                                        <div className="flex items-center" >
                                            <Button onClick={() => { setOpen(true); setRoute('Login'); }} radius="sm" variant="shadow" color="secondary" className="w-[5.5rem] -me-4 gap-0.5 ps-2 text-white"
                                                endContent={<FaRightToBracket className="ms-1 text-base font-medium" size={20} />} >
                                                ورود
                                            </Button>

                                            <Button onClick={() => { setOpen(true); setRoute('Sign-Up'); }} className="px-2 w-24" color="primary" radius="sm" variant="shadow">
                                                <span className="text-base font-medium ">عضویت</span>
                                                <MdOutlinePersonAddAlt size={24} />
                                            </Button>
                                        </div>
                                    : ''}

                        </NavbarItem>

                        <NavbarItem className="sm:hidden" onClick={() => setOpen(true)}>
                            {
                                !loading ?
                                    user ?
                                        <Avatar className="cursor-pointer" isBordered color="primary" src={user.imageUrl} />
                                        :
                                        <Button radius="sm" variant="shadow" color="secondary" className="!min-w-8 text-white"
                                            endContent={<FaRightToBracket className="text-base font-medium" size={20} />} >
                                        </Button>
                                    : ''
                            }
                        </NavbarItem>

                    </ul>

                </NavbarContent>
            </NextUINavbar>


            <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
                <DrawerContent setIsOpen={setIsMenuOpen} categoryList={categories[0].subCategories} />
            </Drawer>

            {
                route === 'Login' &&
                <CustomeModal open={open} setOpen={setOpen} setRoute={setRoute} component={Login} />
            }
            {
                route === 'Sign-Up' &&
                <CustomeModal open={open} setOpen={setOpen} setRoute={setRoute} component={SignUp} />
            }
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
    if (position === "left") positionStyle = "left-[-105%] -top-3 pe-10";
    if (position === "bottom-left") positionStyle = "rigth-1 transform ";

    return (
        <div className="w-full relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <NextLink className={clsx(linkStyles({ color: "foreground" }), "w-full font-medium cursor-pointer relative")} color="foreground" href={link}>
                {title}
            </NextLink>

            {open && (
                <div className={clsx(positionStyle, "absolute pt-7 transition-opacity duration-200 opacity-0", open ? "opacity-100" : "opacity-0")}>
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

const DrawerContent = ({ setIsOpen }: DrawerContentProps) => {
    const { theme } = useTheme();

    return (
        <div className="h-full w-full overflow-y-auto" dir='ltr'>
            <div className='p-2 py-4 flex flex-col items-center' dir='rtl'>
                <div className="w-full flex justify-end">
                    <CgClose size={30} className='cursor-pointer' onClick={() => setIsOpen(false)} />
                </div>
                <div className='mt-5'>
                    <p className={`${Edu.className} text-center font-bold text-[2.75rem] text-primary-400 ${theme == 'light' ? 'neon-text-3d-light' : ' neon-text-3d'}`}>
                        Virtual Learn
                    </p>
                </div>

                <div className="my-4 w-11/12 h-[0.05rem] bg-primary-400"></div>

                <div className='w-full px-2 mt-2'>
                    <ThemeSwitch showText={true} />
                </div>

                <div className="mt-8 w-11/12 h-[0.05rem] bg-primary-400"></div>


                <div className="w-full mt-6 px-2 flex flex-col gap-4">
                    <DrawerDropDown categoryList={categories[0].subCategories} />
                    <DrawerDropDown2 color={'primary'} total={teacherObject.total} list={teacherObject.teacherList} title={'مدرس‌ها'} radius="full" />
                    <DrawerDropDown2 color={'secondary'} total={teacherObject.total} list={academiesObject.academyList} title={'آکادمی ها'} radius="sm" />
                    <DrawerDropDown3 list={links} title="لینک‌های مفید" />
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

            <MotionComponent className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>
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
                                            <span>{item.name}</span>
                                        </div>
                                        {item.subCategories && (openSub ?
                                            <CiSquareMinus size={24} className="text-primary-400" onClick={() => setOpenSub(false)} />
                                            :
                                            <CiSquarePlus size={24} className="text-primary-400" onClick={() => setOpenSub(true)} />)}
                                    </NextLink>

                                    {item.subCategories && (
                                        <MotionComponent className="ps-5 overflow-hidden" initial={false} animate={openSub ? "open" : "closed"} variants={subCategoryVariants}>
                                            {item.subCategories.map((itemSub: any, index2: number) => (
                                                <div className="flex flex-col" key={index2}>
                                                    <NextLink color="foreground" href={'/'}
                                                        className="w-full mt-3 text-sm hover:text-primary-400 transition cursor-pointer relative flex items-center justify-between" >
                                                        <div className='flex items-center gap-1'>
                                                            <GoDotFill size={10} className="text-primary-400" />
                                                            <span>{itemSub.name}</span>
                                                        </div>
                                                    </NextLink>
                                                </div>
                                            ))}
                                        </MotionComponent>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </MotionComponent>
        </div>
    );
}


type DrawerDropDown2Props = {
    list: any[];
    title: string;
    radius: 'full' | 'sm',
    total: number,
    color: 'primary' | 'secondary'
};
const DrawerDropDown2 = ({ list, title, radius, total, color }: DrawerDropDown2Props) => {
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

            <MotionComponent className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>

                <div className='w-full p-2 pt-8 grid gap-6 grid-cols-3 justify-beetwen'>

                    {list.map((item, index) => (
                        <NextLink href={'/'} key={index} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                            <Avatar radius={radius} isBordered size={'lg'} color={color} name={item.engName} showFallback src={item.imageUrl} />
                            <span className='text-center whitespace-break-spaces'>{item.engName}</span>
                        </NextLink>
                    ))}
                    <NextLink href={'/'} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                        <Avatar name={toPersianNumber(total - list.length) + '+'}
                            radius={radius} isBordered size={'lg'} color={color} className='text-xl cursor-pointer' />
                        <span className='text-center'>مشاهده همه</span>
                    </NextLink>

                </div>

            </MotionComponent>
        </div>
    );
}

type DrawerDropDown3Props = {
    list: any[];
    title: string;
};
const DrawerDropDown3 = ({ list, title }: DrawerDropDown3Props) => {
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

            <MotionComponent className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>

                <div className="p-3 ps-6 pt-5 flex flex-col gap-2" dir='ltr'>
                    {links.map((item, index) => (

                        <NextLink key={index} color="foreground" href={item.link}
                            className={clsx(linkStyles({ color: "foreground" }), "w-full flex items-center justify-end gap-2 py-1 text-sm hover:text-primary-300 ")}>
                            {item.title}
                            {item.icon}
                        </NextLink>

                    ))}
                </div>

            </MotionComponent>
        </div>
    );
}
