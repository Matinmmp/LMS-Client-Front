'use client'
import { useSelector } from "react-redux";
import { Skeleton } from "@nextui-org/skeleton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/src/utils/toast";
import { getFactor } from "@/src/lib/apis/userApis";
import { motion } from 'framer-motion';
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { formatDate, formatDate2, numberSeparator, toPersianNumber } from "@/src/utils/functions";
import Link from "next/link";

export default function ProfilePage() {
    const { user, loading, error } = useSelector((state: any) => state.auth)
    const getFactorQuery: any = useQuery({ queryKey: ['getFactorQuery'], queryFn: getFactor });


    return (
        <div className="h-full w-full flex flex-col">
            {
                error ?
                    <div className="h-full w-full flex items-center justify-center">
                        <p className="text-center text-xl font-semibold text-red-500">مشکلی پیش آمده است, بعدا دوباره تلاش کنید.</p>
                    </div>
                    :
                    <>
                        <div className="mt-2">
                            <h1 className="text-lg font-semibold">فاکتور‌ها</h1>
                        </div>

                        {
                            getFactorQuery.isLoading ?
                                <div className="w-full mt-16 lg:mt-20">

                                    <div className="w-full shadow-medium rounded-lg">
                                        <div className="p-3 border-b-1 border-b-primary-50">
                                            <Skeleton className="w-24 h-6" />
                                        </div>

                                        <div className="px-4 pb-6">
                                            <Skeleton className="w-38 h-8 mt-12" />
                                            <Skeleton className="w-38 h-8 mt-12" />
                                            <Skeleton className="w-38 h-8 mt-12" />
                                        </div>
                                    </div>
                                </div>

                                :
                                getFactorQuery?.data?.invoices?.length ?
                                    <div className="w-full mt-16 lg:mt-20">

                                        <div className="w-full shadow-medium rounded-lg">
                                            <div className="p-3 border-b-1 border-b-primary-50">
                                                <p className="font-medium text-base">فاکتور : {toPersianNumber(getFactorQuery?.data?.invoices.length || '')}</p>
                                            </div>

                                            <AccordionList accordions={getFactorQuery?.data?.invoices} />
                                        </div>
                                    </div> :
                                    <div className="py-16">
                                        <p className="text-secondary-500 text-xl font-semibold text-center">هیچ فاکتوری ثبت نشده است.</p>
                                    </div>
                        }
                    </>
            }
        </div >
    );
}


const Accordion = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <div className='w-full rounded-[0.625rem] '>
                <label onClick={() => setIsOpen(!isOpen)}
                    className={`w-full h-full min-h-[3.5625rem] p-4 flex items-center justify-between rounded-[0.625rem] transition-all cursor-pointer`}>

                    <h5 className='text-base lg:text-lg font-semibold text-right'>{formatDate2(item.createdAt)}</h5>
                    <IoIosArrowBack size={20} className={`${isOpen ? '-rotate-90' : 'rotate-0'} transition-transform`} />
                </label>

                <motion.div
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    exit={{ height: 0 }}
                    style={{ overflow: 'hidden' }} >

                    <div className='pt-4 pb-7 px-4  bg-primary-50'>
                        
                        <Link href={`/courses/${item.name}`} className="font-semibold text-lg hover:text-secondary-400 transition-all">
                            {item.courseName}
                        </Link>
                        <div className="mt-4 flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span>مبلغ اصلی : </span>
                                <span>{toPersianNumber(numberSeparator(item.originalPrice))} تومان</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>تخفیف : </span>
                                <span>{toPersianNumber(numberSeparator(item.discountAmount))} تومان</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>قابل پرداخت : </span>
                                <span>{toPersianNumber(numberSeparator(item.finalPrice))} تومان</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>آیدی تراکنش: </span>
                                <span>{item._id}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

        </div >
    );
};

const AccordionList = ({ accordions }: { accordions: any[] }) => {
    return (

        <div className='flex flex-col gap-2 mt-6'>
            {accordions.map((item, index) => <Accordion key={index} item={item} />)}
        </div>

    )
}


