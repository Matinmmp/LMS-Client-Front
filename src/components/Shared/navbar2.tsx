"use client";

import { buildCategoryTree } from "@/src/utils/categorySorter";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { toPersianNumber } from "@/src/utils/functions";
import { link as linkStyles } from "@nextui-org/theme";
import { useEffect, useRef, useState } from "react";
import { navObject } from "@/src/config/site";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { Edu } from "@/src/config/fonts";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";


import Drawer from '@/src/components/Shared/Drawer'
import Login from "@/src/components/Auth/Login";
import SignUp from "@/src/components/Auth/SignUp";
import Verification from "@/src/components/Auth/Verfication";
import CustomeModal from "@/src/components/Shared/CustomeModal";

import { FaRightToBracket, FaCaretLeft, FaChevronLeft, FaQuoteRight, FaRegEye, FaStar } from "react-icons/fa6";
import { MdAttachMoney, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdLogout, MdOutlinePersonAddAlt } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { FcAbout } from "react-icons/fc";
import { CgClose } from "react-icons/cg";
import { GrMenu } from "react-icons/gr";
import { AnimatePresence, motion } from 'framer-motion'
import { useMutation } from "@tanstack/react-query";
import { homeSearch } from "@/src/lib/apis/homeApis";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { LiaUser } from "react-icons/lia";
import { IoKeyOutline, IoReceiptOutline } from "react-icons/io5";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { showToast } from "@/src/utils/toast";


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
        link: '/about-us',
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
    const searchParams = useSearchParams();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [timeout, setTimeout2] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [list, setList] = useState([]);



    const [open, setOpen] = useState(!!searchParams?.get('openLogin') || false);
    const [route, setRoute] = useState('Login')
    const { user, loading } = useSelector((state: any) => state.auth)


    const [open2, setOpen2] = useState(false);
    const searchRef = useRef<any>();

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch('')
                setOpen2(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    useEffect(() => {
        if (searchParams?.get('openLogin') === 'true')
            showToast({ type: 'warning', message: 'لطفا وارد حساب خود شوید' });
        
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);


    const searchMutation: any = useMutation(
        {
            mutationFn: (search: string) => homeSearch(search),
            onSuccess: (e: any) => {
                if (e?.courses?.length)
                    setList(e?.courses)
            }
        }
    )

    const handleSearch = (e: any) => {
        const data = e.target.value
        setSearch(data);

        if (timeout) clearTimeout(timeout);
        // if (data === '') return;

        const time = setTimeout(() => {
            searchMutation.mutate(data);
        }, 500);

        setTimeout2(time)
    };



    return (
        <div className="w-full flex flex-col justify-center items-center sticky md:top-0 z-50 ">

            <div className={`sticky top-10 w-full transition-all ${!scrolled ? "max-w-full md:px-0 left-0 right-0" : "md:max-w-[90rem] md:px-4 md:mt-4 "}`}>

                <nav className={`w-full backdrop-blur-[10px] bg-[#ffffffb7] dark:bg-[#2020204d]
                     relative z-[57] ${!scrolled ? 'h-[5.5rem] rounded-none ' : 'h-24 md:rounded-2xl md:border-[1px] md:border-[#58585880]'} `}>

                    <header className='h-full px-4 flex items-center gap-4 relative'  >

                        <GrMenu size={25} className="cursor-pointer md:hidden" onClick={() => setIsMenuOpen(true)} />

                        <NextLink className=" md:-me-8 lg:m-0 absolute left-1/2  transform -translate-x-1/2 md:relative md:right-0 md:transform-none" href="/">
                            <Image priority alt="logo" className="w-12 h-12" height={100} width={100}
                                src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                        </NextLink>

                        <ul className="ms-10 md:ms-6 hidden md:flex gap-4 justify-start ml-2">
                            <li>
                                <DropDown link={"/courses"} position="bottom-middle"
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
                                                        <DropDown link={`/courses?category=${item.name}`} position="left"
                                                            title={
                                                                <div className="w-full flex items-center justify-end gap-1 py-2 hover:text-primary-300">
                                                                    {item?.subCategories.length ? (<MdKeyboardArrowLeft className="me-auto" size={16} />) : ''}
                                                                    {item.name}
                                                                    <GoDotFill className="text-primary-300" size={10} />
                                                                </div>}>

                                                            {item?.subCategories.length ? <div className="w-44 max-h-[25rem] p-3 flex flex-col ">
                                                                {item.subCategories.map((sub, index) => (
                                                                    <NextLink color="foreground" href={`/courses?category=${sub.name}`} key={index}
                                                                        className={clsx(linkStyles({ color: "foreground" }), " w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",)}>
                                                                        {sub.name}
                                                                        <GoDotFill className="text-primary-300" size={10} />
                                                                    </NextLink>
                                                                ))}
                                                            </div> : ''}
                                                        </DropDown>
                                                    </div>
                                                );

                                            return (
                                                <li color="foreground" key={index}
                                                    className={clsx(linkStyles({ color: "foreground" }), "w-full flex items-center justify-end gap-1 py-1 hover:text-primary-300 ",)}>
                                                    {item.name}
                                                    <GoDotFill className="text-primary-300  " size={10} />
                                                </li>
                                            );
                                        })}
                                    </div>
                                </DropDown>
                            </li>

                            <li>
                                <DropDown link={"/teachers"} position="bottom-left"
                                    title={
                                        <div className="w-full flex items-center justify-between">
                                            <span>مدرس‌ها</span>
                                            <MdKeyboardArrowDown size={24} />
                                        </div>
                                    }>

                                    <div className="w-[30rem] max-h-[50rem] p-4 grid gap-6 grid-cols-4 justify-beetwen " dir='rtl'>
                                        {teacherObject.teacherList.slice(0, 7).map((item, index) => (
                                            <NextLink href={`/teachers/${item.engName}`} key={index} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                                                <Avatar radius={'full'} isBordered size={'lg'} color={'primary'} name={item.engName} showFallback src={item.imageUrl} />
                                                <span className='text-center whitespace-break-spaces'>{item.engName}</span>
                                            </NextLink>
                                        ))}
                                        <NextLink href={"/teachers"} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                                            <Avatar name={toPersianNumber(teacherObject.total - teacherObject.teacherList.slice(0, 7).length) + '+'}
                                                radius={'full'} isBordered size={'lg'} color={'primary'} className='text-xl cursor-pointer' />
                                            <span className='text-center'>مشاهده همه</span>
                                        </NextLink>
                                    </div>
                                </DropDown>
                            </li>

                            <li>
                                <DropDown link={"/academies"} position="bottom-left"
                                    title={
                                        <div className="w-full flex items-center justify-between">
                                            <span>آکادمی‌ها</span>
                                            <MdKeyboardArrowDown size={24} />
                                        </div>
                                    }>

                                    <div className="w-[25rem] max-h-[50rem] p-4 grid gap-6 grid-cols-3 justify-beetwen " dir='rtl'>
                                        {academiesObject.academyList.slice(0, 5).map((item, index) => (
                                            <NextLink href={`/academies/${item.engName}`} key={index} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                                                <Avatar radius={'sm'} isBordered size={'lg'} color={'secondary'} name={item.engName} showFallback src={item.imageUrl} />
                                                <span className='text-center whitespace-break-spaces'>{item.engName}</span>
                                            </NextLink>
                                        ))}
                                        <NextLink href={"/academies"} className='flex flex-col items-center gap-2 hover:text-primary-400 transition cursor-pointer'>
                                            <Avatar name={toPersianNumber(academiesObject.total - academiesObject.academyList.slice(0, 4).length) + '+'}
                                                radius={'sm'} isBordered size={'lg'} color={'secondary'} className='text-xl cursor-pointer' />
                                            <span className='text-center'>مشاهده همه</span>
                                        </NextLink>
                                    </div>
                                </DropDown>
                            </li>

                            <li >
                                <NextLink color="foreground" href={"/"} className={clsx(linkStyles({ color: "foreground" }), "font-semibold")} >
                                    بلاگ
                                </NextLink>
                            </li>

                            <li>
                                <DropDown link={"/"} position="bottom-left"
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
                            </li>
                        </ul>

                        <ul className={`ms-auto flex items-center ${!loading && user ? 'gap-2' : 'gap-1'}`}>

                            <li className="hidden sm:flex gap-2">
                                <ThemeSwitch />
                            </li>

                            <li className="hidden sm:flex">
                                {
                                    !loading ?
                                        user ?
                                            <div className="flex items-center gap-4">
                                                <Dropdown placement="bottom-end" >
                                                    <DropdownTrigger>
                                                        <Avatar isBordered as="button" className="transition-transform"
                                                            color="secondary" src={user.imageUrl} />
                                                    </DropdownTrigger>

                                                    <DropdownMenu aria-label="Profile Actions" variant="flat" className="min-w-80">
                                                        <DropdownItem color="default">
                                                            <div className="py-4 ps-1">
                                                                <User
                                                                    as="button"
                                                                    avatarProps={{ isBordered: true, src: user.imageUrl, color: 'secondary' }}
                                                                    classNames={{ description: 'text-md font-normal', name: 'text-lg font-normal' }}
                                                                    className="transition-transform"
                                                                    description={user.email}
                                                                    name={user.name}
                                                                />
                                                            </div>
                                                        </DropdownItem>

                                                        <DropdownItem color="secondary" className="mt-4 ">
                                                            <Link href={'/profile'} className="flex items-center gap-2">
                                                                <LiaUser size={24} strokeWidth={0.7} />
                                                                <span className="text-base font-medium">پروفایل</span>
                                                            </Link>
                                                        </DropdownItem>

                                                        <DropdownItem color="secondary">
                                                            <div className="flex items-center gap-2">
                                                                <IoKeyOutline size={22} strokeWidth={1} />
                                                                <span className="text-base font-medium">تغییر رمز عبور</span>
                                                            </div>
                                                        </DropdownItem>

                                                        <DropdownItem color="secondary">
                                                            <div className="flex items-center gap-2">
                                                                <IoReceiptOutline size={21} strokeWidth={0.7} />
                                                                <span className="text-base font-medium">فاکتور‌ها</span>
                                                            </div>
                                                        </DropdownItem>

                                                        <DropdownItem color="secondary">
                                                            <div className="flex items-center gap-2">
                                                                <MdAttachMoney size={21} />
                                                                <span className="text-base font-medium">دوره‌های من</span>
                                                            </div>
                                                        </DropdownItem>

                                                        <DropdownItem color="danger">
                                                            <div className="flex items-center gap-2">
                                                                <MdLogout size={21} />
                                                                <span className="text-base font-medium">خروج</span>
                                                            </div>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                            </div>
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

                            </li>

                            <li className="sm:hidden">
                                {
                                    !loading ?
                                        user ?
                                            <NextLink href={'/profile'}><Avatar className="cursor-pointer" isBordered color="secondary" src={user.imageUrl} /></NextLink>
                                            :
                                            <Button radius="sm" variant="shadow" color="secondary" className="!min-w-8 text-white"
                                                endContent={<FaRightToBracket className="text-base font-medium" size={20} />} onClick={() => setOpen(true)}>
                                            </Button>
                                        : ''
                                }
                            </li>

                        </ul>

                    </header>

                </nav>

                <div className="w-full flex justify-center absolute z-[50] left-1/2 -translate-x-1/2">

                    <div className=" w-full max-w-3xl flex justify-center transition-all ">
                        <div ref={searchRef} onClick={() => setOpen2(true)}
                            className={`min-h-14 flex flex-col items-center md:border-[#58585880] ${open2 ? "w-full px-4" : "w-14 rounded-b-full"} ${scrolled ? ' md:border-[1px] md:border-t-0' : 'border-0'} rounded-b-[2rem]
                            cursor-pointer transition-all backdrop-blur-xl bg-[#ffffffb7] dark:bg-[#2020204d]`}>

                            <div className={`h-11 mt-1.5 ${open2 ? "w-full ps-4 border-primary-400" : "w-11 dark:border-white "} 
                              p-[2px] border-[3px] rounded-[5rem] transition-all  relative border-primary-400 `}>

                                <input placeholder="جستوجو بین دوره‌ها" value={search} onChange={handleSearch}
                                    className={`${open2 ? "w-11/12" : "w-0"} h-8 mt-[2px] absolute right-3 bg-transparent placeholder:text-sm md:text-lg placeholder:pb-1 ps-1`} />

                                <div className={`min-w-9 min-h-9 flex items-center justify-center
                                ${open2 ? " left-[2px] dark:border-primary-400" : "dark:border-white"} border-[3px] rounded-full
                                absolute left-[0.1rem] bottom-[0.08rem] border-primary-400 `}>
                                    <FaRegEye className={open2 ? "text-primary-400" : "text-primary-400 dark:text-white"} size={16} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {open2 && search && list?.length &&
                                    <motion.div
                                        transition={{ type: 'spring', damping: 30, stiffness: 300, duration: .3 }}
                                        initial={{ height: 0 }}
                                        animate={{ height: open2 && search && list?.length ? 'auto' : 0 }}
                                        exit={{ height: 0 }}

                                        className="max-h-[60vh] overflow-scroll w-full p-2 ps-6 pb-3 pt-6 flex flex-col gap-3 scroll-10 ">
                                        {
                                            list?.map((item: any, index: number) =>

                                                <NextLink href={'/'} key={index} className="w-full h-full flex gap-4">
                                                    <div>
                                                        <div className="w-16 h-12 p-[1px]   rounded-sm border-1 border-primary-400 overflow-hidden shadow-medium">
                                                            <Image className="w-full h-full rounded-sm" width={500} height={500} src={item.thumbnail.imageUrl} alt={item.name} />
                                                        </div>
                                                    </div>
                                                    <div className="w-full flex flex-col">
                                                        <div className="w-full flex items-start justify-between">
                                                            <p className={clsx(linkStyles({ color: "foreground" }), "w-full text-lg font-semibold cursor-pointer hover:text-primary-400 transition-all")} >
                                                                {item.name}
                                                            </p>

                                                            <div className="flex items-center gap-1">
                                                                <span className="pt-1 text-md font-semibold text-warning-400">{toPersianNumber(item.ratings)}</span>
                                                                <FaStar size={16} className="text-warning-400" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="w-full !text-sm !font-normal ">
                                                                {`مدرس : ${item?.teacherId?.faName}`}
                                                            </p>
                                                        </div>
                                                    </div>

                                                </NextLink>
                                            )
                                        }
                                    </motion.div>}
                            </AnimatePresence>

                        </div>
                    </div>

                </div>

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

                {
                    route === 'Verification' &&
                    <CustomeModal open={open} setOpen={setOpen} setRoute={setRoute} component={Verification} />
                }
            </div>

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
        <div className="w-full relative"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <NextLink className={clsx(linkStyles({ color: "foreground" }), "w-full font-semibold cursor-pointer relative")} href={link}>
                {title}
            </NextLink>

            {open && (
                <div className={clsx(positionStyle, "absolute pt-10 transition-opacity duration-200 opacity-0", open ? "opacity-100" : "opacity-0")}>
                    <div className=" overflow-x-autos rounded-md backdrop-blur-lg backdrop-saturate-200 bg-background/90/ bg-primary-50" dir="ltr">
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
                                            <span>{item.name}</span>
                                        </div>
                                        {item.subCategories && (openSub ?
                                            <CiSquareMinus size={24} className="text-primary-400" onClick={() => setOpenSub(false)} />
                                            :
                                            <CiSquarePlus size={24} className="text-primary-400" onClick={() => setOpenSub(true)} />)}
                                    </NextLink>

                                    {item.subCategories && (
                                        <motion.div className="ps-5 overflow-hidden" initial={false} animate={openSub ? "open" : "closed"} variants={subCategoryVariants}>
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

            <motion.div className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>

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

            </motion.div>
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

            <motion.div className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>

                <div className="p-3 ps-6 pt-5 flex flex-col gap-2" dir='ltr'>
                    {links.map((item, index) => (

                        <NextLink key={index} color="foreground" href={item.link}
                            className={clsx(linkStyles({ color: "foreground" }), "w-full flex items-center justify-end gap-2 py-1 text-sm hover:text-primary-300 ")}>
                            {item.title}
                            {item.icon}
                        </NextLink>

                    ))}
                </div>

            </motion.div>
        </div>
    );
}
