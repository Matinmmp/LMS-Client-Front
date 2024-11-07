'use client'

import Link from "next/link";
import { LiaUserEditSolid, LiaUser } from "react-icons/lia";
import { IoKeyOutline } from "react-icons/io5";
import { IoReceiptOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { MdMoneyOff } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";

const list = [
    {
        icons: <LiaUser size={24} strokeWidth={0.7} />,
        title: 'پروفایل',
        link: '/profile',
    },
    {
        icons: <LiaUserEditSolid size={24} strokeWidth={0.7} />,
        title: 'ویرایش پروفایل',
        link: '/profile/edit',
    },
    {
        icons: <IoKeyOutline size={22} strokeWidth={1} />,
        title: 'تغییر رمز عبور',
        link: '/profile/password',
    },
    {
        icons: <IoReceiptOutline size={21} strokeWidth={0.7} />,
        title: 'فاکتور‌ها',
        link: '/profile/reciepts',
    },
    {
        icons: <MdAttachMoney size={21} />,
        title: 'دوره‌های خریداری شده من',
        link: '/profile/myCourses',
    },
    {
        icons: <MdMoneyOff size={21} />,
        title: 'دوره‌های رایگان من',
        link: '/profile/myFreeCourse',
    },
    {
        icons: <MdFavoriteBorder size={21} />,
        title: 'دوره‌های موردعلاقه من',
        link: '/profile/myFavoritCourses',
    },
    {
        icons: <MdLogout size={21} />,
        title: 'خروج',
        link: '/profile/exit',
    },

]

export default function Navbar() {
    const path = usePathname();
    console.log(path)
    return (
        <div className="h-full hidden lg:block lg:w-1/4 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl overflow-hidden">
            <div className="w-full pb-8">
                <div className="w-full aspect-[16/10] bg-blue-500">

                </div>

                <ul className="mt-6 p-2 flex flex-col gap-6 ">
                    {list.map((item, index) =>
                        <Link href={item.link} key={index}
                            className={`flex items-center gap-2 hover:text-secondary-500 dark:hover:text-secondary-500 transition-all 
                            ${path === item.link ? 'text-secondary-400 dark:text-secondary-400' : 'text-gray-800 dark:text-white'}`}>
                            {item.icons}
                            <span className="text-base font-medium">{item.title}</span>
                        </Link>
                    )}


                </ul>
            </div>
        </div>

    );
}
