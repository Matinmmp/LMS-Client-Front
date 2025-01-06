'use client'
import { addCourse, hydrateCart } from "@/src/redux/cart/cartSlice";
import { toPersianNumber } from "@/src/utils/functions";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getCartCourses } from "@/src/lib/apis/cartApis";
import { Spinner } from "@nextui-org/spinner";


export const Cart = () => {
    const [open, setOpen] = useState(true);
    const cartRef = useRef<HTMLDivElement | null>(null); // برای مرجع‌دادن به کل منو

    const dispatch = useDispatch();
    const { courseIds } = useSelector((state: any) => state.cart);
    const cartCourses: any =
        useQuery({ queryKey: ['cartCourses', courseIds], queryFn: () => getCartCourses(courseIds), enabled: !!courseIds?.length });

    useEffect(() => {
        dispatch(hydrateCart()); // بارگذاری داده‌ها از localStorage
    }, [dispatch]);

    // بستن منو در صورتی که کاربر خارج از آن کلیک کند
    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
    //             setOpen(false); // بستن منو
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside); // افزودن رویداد کلیک
    //     return () => document.removeEventListener("mousedown", handleClickOutside); // پاک‌کردن رویداد هنگام حذف کامپوننت
    // }, []);

    return (
        <div ref={cartRef} className="relative cursor-pointer">
            <div onClick={() => setOpen(!open)}
                className="min-w-11 min-h-11 max-h-11 max-w-11 flex items-center justify-center rounded-full bg-secondary-500 shadow-[0_0_7px_0_#42C0F4]">
                <IoMdCart size={26} className="text-white" />
            </div>

            {courseIds?.length ? (
                <span className="-top-[5px] -right-[5px] w-5 h-5 text-xs font-light flex items-center justify-center rounded-full bg-primary-500 absolute text-white shadow-medium">
                    {toPersianNumber(courseIds?.length)}
                </span>
            ) : ("")}

            {open && (
                <div className="w-80 md:w-96 absolute -left-16 md:left-0 transform">
                    <div className={clsx("w-full px-2 pt-5 transition-opacity duration-200 opacity-0 ", open ? "opacity-100" : "opacity-0")}>
                        <div className="w-full rounded-xl backdrop-blur-lg backdrop-saturate-200 bg-white dark:bg-[#131d35] shadow-small" dir="ltr">
                            <div className="flex flex-col">
                                <div className="w-full h-14 px-4 flex items-center justify-between bg-primary-50/80 rounded-t-xl shadow-small">
                                    <Link className="text-sm lg:text-base font-semibold flex items-center text-secondary-500" href={'/'}>
                                        <MdKeyboardArrowLeft size={16} />
                                        <span>مشاهده‌ی سبد خرید</span>
                                    </Link>

                                    <div className="flex items-center gap-1 text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-300">
                                        <span>دوره</span>
                                        <span>{toPersianNumber(courseIds?.length)}</span>
                                    </div>

                                </div>
                                {!courseIds?.length ?
                                    <div className="h-20 px-4 flex items-center justify-center">
                                        <p className="font-medium  text-gray-700 dark:text-gray-300">هنوز محصولی به سبد خرید اضافه نشده</p>
                                    </div> :
                                    <div className='p-4 flex flex-col gap-2'>
                                        {
                                            cartCourses.isLoading &&
                                            <>
                                                <Spinner color="warning" size={'md'} />
                                                <p className="font-semibold text-secondary-500">درحال دریافت سبد خرید.</p>
                                            </>
                                        }

                                        {
                                            !cartCourses.isLoading && cartCourses.isSuccess && cartCourses?.data?.courses?.length &&
                                            
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

