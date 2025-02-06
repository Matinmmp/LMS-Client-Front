'use client'

import Link from "next/link";
import { LiaUserEditSolid, LiaUser } from "react-icons/lia";
import { IoKeyOutline } from "react-icons/io5";
import { IoReceiptOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { MdMoneyOff } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "@/src/lib/apis/userApis";
import { userLoggedOut } from "@/src/redux/auth/authSlice";
import { showToast } from "@/src/utils/toast";
import cookies from 'js-cookie'

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
        link: '/profile/myFreeCourses',
    },
    // {
    //     icons: <CiBookmarkCheck size={21} strokeWidth={0.7} />,
    //     title: 'دوره‌های موردعلاقه من',
    //     link: '/profile/myFavoritCourses',
    // },
]

export default function Navbar() {
    const path = usePathname();




    const logoutMutation = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            location?.reload();
            cookies.remove('access_token');
            cookies.remove('refresh_token');
        },
        onError: () => showToast({ type: 'error', message: 'خطایی پیش آمده است.' })
    })



    return (
        <div className={`h-full lg:block w-full lg:w-1/4 ${path === '/profile' || path === '/profile/edit' ? 'mb-20' : 'mb-0'}  bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl overflow-hidden`}>
            <div className="w-full pb-4">
                <div className="hidden lg:flex w-full items-center justify-center aspect-[16/10] ">
                    <Link className="" href="/">
                        <Image priority alt="لوگوی ویرچوال لرن، پلتفرم آموزش برنامه‌نویسی " className="w-24 h-24" height={100} width={100}
                            src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                    </Link>
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

                    <div onClick={() => logoutMutation.mutate()} className={`mt-4 flex items-center gap-2 hover:text-danger-500 dark:hover:text-danger-500 transition-all cursor-pointer`}>
                        <MdLogout size={21} />
                        <span className="text-base font-medium">خروج</span>
                    </div>

                </ul>
            </div>
        </div>

    );
}
