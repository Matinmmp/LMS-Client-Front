"use client";
import { buildCategoryTree } from "@/src/utils/categorySorter";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { encodeTitle, toPersianNumber } from "@/src/utils/functions";
import { link as linkStyles } from "@nextui-org/theme";
import { useEffect, useRef, useState } from "react";
import { navObject } from "@/src/config/site";
import { Edu } from "@/src/config/fonts";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";


import { FaCaretLeft, FaChevronLeft, FaQuoteRight, FaRegEye, FaStar } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { CgClose } from "react-icons/cg";
import { GrMenu } from "react-icons/gr";
import { AnimatePresence, motion } from 'framer-motion'
import { useMutation } from "@tanstack/react-query";
import { homeSearch } from "@/src/lib/apis/homeApis";

import { usePathname, useSearchParams } from "next/navigation";
import { showToast } from "@/src/utils/toast";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';

const UserDropDown = dynamic(() => import("../UserDropDown"), { ssr: false });

const Drawer = dynamic(() => import("@/src/components/Shared/Drawer"), { ssr: false });
const Login = dynamic(() => import("@/src/components/Auth/Login"), { ssr: false });
const SignUp = dynamic(() => import("@/src/components/Auth/SignUp"), { ssr: false });
const Verification = dynamic(() => import("@/src/components/Auth/Verfication"), { ssr: false });
const CustomeModal = dynamic(() => import("@/src/components/Shared/CustomeModal"), { ssr: false });
const Cart = dynamic(() => import("../Shared/Cart"), { ssr: false });
const ForgetPassword = dynamic(() => import("@/src/components/Auth//ForgetPasswrod"), { ssr: false });


const links = [
    {
        icon: <FaTelegramPlane size={20} color="#079CED" />,
        title: 'کانال تلگرام',
        link: '',
        isOut: true,
    },
    {
        icon: <GrInstagram size={18} color="#ed071e" />,
        title: 'پیج اینستاگرام',
        link: '',
        isOut: true,
    },
    {
        icon: <MdContactPhone size={18} color="#07edd2" />,
        title: 'ارتباط با ما',
        link: '/contact-us',
    },
    {
        icon: <FcAbout size={20} />,
        title: 'درباره‌ی ما',
        link: '/about-us',
    },
    {
        icon: <FaQuoteRight size={20} />,
        title: 'قوانین',
        link: '/roles',
    },
]

const categories: any = buildCategoryTree(navObject.categoryObject.categoryList, null);

const BlogNavbar = () => {
    const path = usePathname();
    const searchParams = useSearchParams();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [timeout, setTimeout2] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [list, setList] = useState([]);
    const router = useRouter();

    const [open, setOpen] = useState(!!searchParams?.get('openLogin') || false);
    const [route, setRoute] = useState('Login')


    const [open2, setOpen2] = useState(false);
    const searchRef = useRef<any>();




    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch('')
                setTimeout(() => setOpen2(false), 500)

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


    useEffect(() => {
        setSearch('')
        setTimeout(() => setOpen2(false), 500)
    }, [path])

    const handleSearchClick = () => {
        if (!search) return;
        if (path?.includes('courses'))
            setTimeout(() => {
                setSearch('')
                setTimeout(() => setOpen2(false), 500)
            }, 500)
        router.push(`/courses?searchText=${search}`);
    }

    const handleSearchIteemClick = () => {
        if (!search) return;

        setTimeout(() => {
            setSearch('')
            setTimeout(() => setOpen2(false), 500)
        }, 500)
    }


    return (
        <div className="w-full flex flex-col justify-center items-center sticky md:top-0 z-50 ">

            <div className={`sticky top-10 w-full transition-all ${!scrolled ? "max-w-full md:px-0 left-0 right-0" : "md:max-w-[90rem] md:px-4 md:mt-4 "}`}>

                <nav className={`w-full backdrop-blur-[10px] bg-[#ffffffb7] dark:bg-[#2020204d]
                     relative z-[57] ${!scrolled ? 'h-[5.5rem] rounded-none ' : 'h-24 md:rounded-2xl md:border-[1px] md:border-[#58585880]/ md:border-secondary-500 shadow-medium'} `}>

                    <header className='h-full px-4 flex items-center gap-4 relative'  >

                        <GrMenu size={25} className="cursor-pointer md:hidden" onClick={() => setIsMenuOpen(true)} />

                        <NextLink className=" md:-me-8 lg:m-0 absolute left-1/2  transform -translate-x-1/2 md:relative md:right-0 md:transform-none" href="/">
                            <Image priority alt="لوگوی ویرچوال لرن، پلتفرم آموزش برنامه‌نویسی" className="w-12 h-12" height={100} width={100}
                                src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                        </NextLink>

                        <ul className="ms-10 md:ms-6 hidden md:flex gap-4 justify-start ml-2">
                            <li >
                                <NextLink color="foreground" href={"/blog"} className={clsx(linkStyles({ color: "foreground" }), "font-semibold")} >
                                    خانه
                                </NextLink>
                            </li>
                            <li >
                                <NextLink color="foreground" href={"/blog/categories"} className={clsx(linkStyles({ color: "foreground" }), "font-semibold")} >
                                    دسته بندی‌ها
                                </NextLink>
                            </li>

                            <li>
                                <DropDown link={"/courses"} position="bottom-middle"
                                    title={
                                        <div className="w-full flex items-center justify-between">
                                            <span>دوره‌های آموزشی</span>
                                            <MdKeyboardArrowDown size={24} />
                                        </div>
                                    }>

                                    <div className="w-52 max-h-[25rem] p-3">
                                        {categories[0]?.subCategories?.map((item: any, index: number) => {
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

                                                            {item?.subCategories?.length ? <div className="w-44 max-h-[25rem] p-3 flex flex-col ">
                                                                {item?.subCategories.map((sub: any, index: number) => (
                                                                    <NextLink color="foreground" href={`/courses?category=${sub?.name}`} key={index}
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
                                <DropDown link={"/"} position="bottom-left"
                                    title={
                                        <div className="w-full flex items-center justify-between">
                                            <span>لینک های مفید</span>
                                            <MdKeyboardArrowDown size={24} />
                                        </div>
                                    }>

                                    <div className="w-[10rem] max-h-[50rem] p-3 flex flex-col gap-2">
                                        {links.map((item, index) => (

                                            <NextLink key={index} color="foreground" href={item.link} rel={item?.isOut ? "noopener noreferrer" : ''} target={item?.isOut ? "_blank" : ''}
                                                className={clsx(linkStyles({ color: "foreground" }), "w-full flex items-center justify-end gap-2 py-1 hover:text-primary-300 ")}>
                                                {item.title}
                                                {item.icon}
                                            </NextLink>

                                        ))}
                                    </div>
                                </DropDown>
                            </li>
                        </ul>

                        <ul className={`ms-auto flex items-center gap-3`}>

                            <li className="hidden md:flex gap-2">
                                <ThemeSwitch />
                            </li>

                            <li className="me-2">
                                <Cart />
                            </li>

                            <UserDropDown setOpen={setOpen} setRoute={setRoute} />

                        </ul>

                    </header>

                </nav>

                <div className="w-full flex justify-center absolute z-[50] left-1/2 -translate-x-1/2">

                    <div className=" w-full max-w-3xl flex justify-center transition-all ">
                        <div ref={searchRef} onClick={() => setOpen2(true)}
                            className={`min-h-14 flex flex-col items-center md:border-[#58585880]/ border-secondary-500 shadow-medium ${open2 ? "w-full px-4" : "w-14 rounded-b-full"} ${scrolled ? ' md:border-[1px] md:border-t-0' : 'border-0'} rounded-b-[2rem]
                            cursor-pointer transition-all backdrop-blur-xl bg-[#ffffffb7] dark:bg-[#2020204d]`}>

                            <div className={`h-11 mt-1.5 ${open2 ? "w-full ps-4 border-primary-400" : "w-11 dark:border-white "} 
                              p-[2px] border-[3px] rounded-[5rem] transition-all  relative border-primary-400 `}>

                                <input placeholder="جستوجو بین بلاگ‌ها" value={search} onChange={handleSearch}
                                    className={`${open2 ? "w-11/12" : "w-0"} h-8 mt-[2px] absolute right-3 bg-transparent placeholder:text-sm md:text-lg placeholder:pb-1 ps-1`} />

                                <div onClick={handleSearchClick}
                                    className={`min-w-9 min-h-9 flex items-center justify-center ${open2 ? " left-[2px] dark:border-primary-400" : "dark:border-white"}
                                    absolute left-[0.1rem] bottom-[0.08rem] border-primary-400 border-[3px] rounded-full`}>
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
                                            list?.map((item: any, index: number) => {
                                                let link = encodeTitle(item?.urlName);
                                                return (
                                                    <NextLink href={`/courses/${link}`} key={index} className="w-full h-full flex gap-4 transition-all" onClick={handleSearchIteemClick}>
                                                        <div>
                                                            <div className="w-16 h-12 p-[1px] rounded-sm border-1 border-primary-400 overflow-hidden shadow-medium">
                                                                <Image className="w-full h-full rounded-sm" width={320} height={180} src={item?.thumbnail?.imageUrl} alt={item.name} />
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col">
                                                            <div className="w-full flex items-start justify-between">
                                                                <p className={clsx(linkStyles({ color: "foreground" }), "w-full text-lg font-semibold cursor-pointer hover:text-primary-400 transition-all")} >
                                                                    {item.name}
                                                                </p>

                                                                <div className="flex items-center gap-1">
                                                                    <span className="pt-1 text-md font-semibold text-warning-400">{toPersianNumber(item.rating)}</span>
                                                                    <FaStar size={16} className="text-warning-400" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="w-full !text-sm !font-normal ">
                                                                    {`مدرس : ${item?.teacherId?.faName}`}
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </NextLink>)
                                            }
                                            )
                                        }
                                    </motion.div>}
                            </AnimatePresence>

                        </div>
                    </div>

                </div>

                <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
                    <DrawerContent setIsOpen={setIsMenuOpen} />
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

                {
                    route === 'ForgetPassword' &&
                    <CustomeModal open={open} setOpen={setOpen} setRoute={setRoute} component={ForgetPassword} />
                }
            </div>

        </div>
    );
};
export default BlogNavbar
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
        <div className="w-full relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NextLink className={clsx(linkStyles({ color: "foreground" }), "w-full font-semibold cursor-pointer relative")}
                href={link}>
                {title}
            </NextLink>

            {open && (
                <div className={clsx(positionStyle, "absolute pt-10 transition-opacity duration-200 opacity-0", open ? "opacity-100" : "opacity-0")}>
                    <div className=" overflow-x-auto/ rounded-md backdrop-blur-lg backdrop-saturate-200 bg-white dark:bg-[#131d35] shadow-medium" dir="ltr">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

type DrawerContentProps = {
    setIsOpen: (isOpen: boolean) => void;

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


                <ul className="w-full mt-6 px-2 flex flex-col gap-4">
                    <li >
                        <NextLink color="foreground" href={"/blog"} className="w-full text-base hover:text-primary-400 transition relative" >
                            خانه
                        </NextLink>
                    </li>
                    <li >
                        <NextLink color="foreground" href={"/blog/categories"} className="w-full text-base hover:text-primary-400 transition relative" >
                            دسته بندی‌ها
                        </NextLink>
                    </li>
                    <DrawerDropDown categoryList={categories[0]?.subCategories} setIsOpen={setIsOpen} />
                    <DrawerDropDown3 title="لینک‌های مفید" setIsOpen={setIsOpen} />
                </ul>
            </div>

        </div>
    )
}


type DrawerDropDownProps = {
    categoryList: any[];
    setIsOpen: (isOpen: boolean) => void;
};

const DrawerDropDown = ({ categoryList, setIsOpen }: DrawerDropDownProps) => {
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
            <div className="w-full flex items-center justify-between cursor-pointer">
                <NextLink color="foreground" href={'/courses'} onClick={() => setTimeout(() => setIsOpen(false), 200)}
                    className="w-full text-base hover:text-primary-400 transition relative " >

                    <div className='flex items-center gap-1'>
                        <FaCaretLeft size={12} className="text-primary-400" />
                        <span>دوره‌های برنامه نویسی</span>
                    </div>

                </NextLink>
                {open ?
                    <CiSquareMinus size={24} className="text-primary-400" onClick={() => setOpen(false)} />
                    :
                    <CiSquarePlus size={24} className="text-primary-400" onClick={() => setOpen(true)} />}
            </div>

            <motion.div className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>
                <div className='ps-4'>
                    {
                        categoryList?.map((item, index) => {
                            const [openSub, setOpenSub] = useState(false);
                            return (
                                <div className="flex flex-col" key={index}>
                                    <div className="cursor-pointer relative flex items-center justify-between">

                                        <NextLink color="foreground" href={`/courses?category=${item.name}`} onClick={() => setTimeout(() => setIsOpen(false), 200)}
                                            className="w-full mt-3 text-sm hover:text-primary-400 transition relative" >
                                            <div className='flex items-center gap-1'>
                                                <FaChevronLeft size={8} className="text-primary-400" />
                                                <span>{item?.name}</span>
                                            </div>

                                        </NextLink>
                                        {item?.subCategories && (openSub ?
                                            <CiSquareMinus size={24} className="text-primary-400" onClick={() => setOpenSub(false)} />
                                            :
                                            <CiSquarePlus size={24} className="text-primary-400" onClick={() => setOpenSub(true)} />)}
                                    </div>

                                    {item?.subCategories && (
                                        <motion.div className="ps-5 overflow-hidden" initial={false} animate={openSub ? "open" : "closed"} variants={subCategoryVariants}>
                                            {item?.subCategories.map((itemSub: any, index2: number) => (
                                                <div className="flex flex-col" key={index2}>
                                                    <NextLink color="foreground" href={`/courses?category=${itemSub?.name}`} onClick={() => setTimeout(() => setIsOpen(false), 200)}
                                                        className="w-full mt-3 text-sm hover:text-primary-400 transition cursor-pointer relative flex items-center justify-between" >
                                                        <div className='flex items-center gap-1'>
                                                            <GoDotFill size={10} className="text-primary-400" />
                                                            <span>{itemSub?.name}</span>
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



type DrawerDropDown3Props = {
    title: string;
    setIsOpen: (isOpen: boolean) => void;

};

const DrawerDropDown3 = ({ title, setIsOpen }: DrawerDropDown3Props) => {
    const [open, setOpen] = useState(false);

    const containerVariants = {
        open: { maxHeight: "40rem", opacity: 1, transition: { duration: 0.3 } },
        closed: { maxHeight: 0, transition: { duration: 0.3 } },
    };

    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-between  cursor-pointer">
                <NextLink color="foreground" href={'/'} onClick={() => setTimeout(() => setIsOpen(false), 200)}
                    className="w-full text-base hover:text-primary-400 transition relative" >
                    <div className='flex items-center gap-1'>
                        <FaCaretLeft size={12} className="text-primary-400" />
                        <span>{title}</span>
                    </div>

                </NextLink>
                {open ?
                    <CiSquareMinus size={24} className="text-primary-400" onClick={() => setOpen(false)} />
                    :
                    <CiSquarePlus size={24} className="text-primary-400" onClick={() => setOpen(true)} />}
            </div>

            <motion.div className="overflow-hidden" initial={false} animate={open ? "open" : "closed"} variants={containerVariants}>

                <div className="p-3 ps-6 pt-5 flex flex-col gap-2" dir='ltr'>
                    {links.map((item, index) => (

                        <NextLink key={index} color="foreground" href={item.link} rel={item?.isOut ? "noopener noreferrer" : ''} target={item?.isOut ? "_blank" : ''}
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
