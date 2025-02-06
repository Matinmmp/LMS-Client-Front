'use client'
import {  deleteCourses, hydrateCart } from "@/src/redux/cart/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { verifyPayment } from "@/src/lib/apis/invoiceApis";



export default function CartPage(s: any) {
    const { Authority, Status, invoiceId } = s?.searchParams

    const dispatch = useDispatch();
    const { courseIds } = useSelector((state: any) => state.cart);
    const verify: any =
        useQuery({ queryKey: ['verifyPayment'], queryFn: () => verifyPayment({ Authority, Status, invoiceId }), 
        enabled: !!(Authority && Status && invoiceId && Status == "OK") });

    if(verify?.isSuccess && !verify?.isLoading && verify?.data?.success){
        dispatch(deleteCourses({ courseIds }))
    }
    useEffect(() => {
        dispatch(hydrateCart()); // بارگذاری داده‌ها از localStorage
    }, [dispatch]);

    if (!Authority || !Status || !invoiceId )
        return (
            <section className=" flex flex-col items-center justify-center " >
                <title>اطلاعات غلط هست</title>
                <meta name="robots" content="noindex, nofollow" />
                <div className="w-full max-w-lg sm2:max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">

                    <div className="w-full mt-32 py-28 bg-white dark:bg-[#131D35] rounded-2xl shadow-medium">
                        <div className=' flex flex-col items-center'>
                            <Image className="w-96 " alt="" width={800} height={800} src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'contact-us-animate%20%281%29.svg'} />
                            <p className="md:text-lg mb-5 md:mb-6 text-center">اطلاعات اشتباه هست. اگر مشکلی در خرید دارید از قسمت ارتباط با ما مطرح کنید تا بلافاصله رسیدگی شود.</p>
                            <Button className="min-w-80" size="lg" color="primary" variant="shadow" radius="sm" as={Link} href="/contact-us">ارتباط با ما</Button>
                        </div>
                    </div>
                </div>
            </section>

        )

    return (
        <section className=" flex flex-col items-center justify-center " >

            <title>تایید خرید</title>
            <meta name="robots" content="noindex, nofollow" />

            <div className="w-full max-w-lg sm2:max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                {
                    verify?.isLoading &&
                    <div className="w-full mt-28 flex justify-center items-center">
                        <Spinner size="lg" color="primary" />
                    </div>

                }
                {
                    !verify?.isLoading && verify?.data?.success ?
                        <div className="w-full mt-32 py-28 bg-white dark:bg-[#131D35] rounded-2xl shadow-medium">
                            <div className=' flex flex-col items-center'>
                                <Image className="w-96 " alt="" width={800} height={800} src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'online-groceries-animate.svg'} />
                                <p className="md:text-lg mb-5 md:mb-6 text-center">{verify?.data?.message}</p>
                                <div className="md:text-lg mt-4 mb-5 md:mb-6 text-center">
                                    <span>شماره تراکنش:</span>
                                    <span>{verify?.data?.refId}</span>
                                </div>

                                <Button className="min-w-80" size="lg" color="primary" variant="shadow" radius="sm" as={Link} href="/courses">لیست دوره‌ها</Button>
                            </div>
                        </div> : ''
                }
                {
                    !verify?.isLoading && !verify?.data?.success||Status === 'NOK' ?
                        <div className="w-full mt-32 py-28 bg-white dark:bg-[#131D35] rounded-2xl shadow-medium">
                            <div className=' flex flex-col items-center'>
                                <Image className="w-96 " alt="" width={800} height={800} src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'invoice-falied.svg'} />
                                <p className="md:text-lg lg:text-xl mb-5 md:mb-6 text-center">پرداخت ناموفق بود.</p>
                                <Button className="min-w-80" size="lg" color="primary" variant="shadow" radius="sm" as={Link} href="/contact-us">ارتباط با ما</Button>
                            </div>
                        </div> : ''
                }
            </div>
        </section>
    );

}