'use client'
import { useSelector } from "react-redux";
import { Skeleton } from "@nextui-org/skeleton";
import { useQuery } from "@tanstack/react-query";
import { motion } from 'framer-motion';
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { decodeTitle, formatDate2, numberSeparator, toPersianNumber } from "@/src/utils/functions";
import Link from "next/link";
import { getUserInvoices } from "@/src/lib/apis/invoiceApis";

export default function RecieptPage() {
    const { error } = useSelector((state: any) => state.auth);
    const getFactorQuery: any = useQuery({ queryKey: ['getUserInvoices'], queryFn: getUserInvoices });

    return (
        <div className="h-full w-full flex flex-col">
            {error ? (
                <div className="h-full w-full flex items-center justify-center">
                    <p className="text-center text-xl font-semibold text-red-500">
                        مشکلی پیش آمده است, بعدا دوباره تلاش کنید.
                    </p>
                </div>
            ) : (
                <>
                    <div className="mt-2">
                        <h1 className="text-lg font-semibold">فاکتور‌ها</h1>
                    </div>

                    {getFactorQuery.isLoading ? (
                        <LoadingSkeleton />
                    ) : getFactorQuery?.data?.invoices?.length ? (
                        <div className="w-full mt-6 lg:mt-8">
                            <div className="w-full shadow-medium rounded-lg">
                                <div className="p-3 border-b-1 border-b-primary-50">
                                    <p className="font-medium text-base">
                                        تعداد فاکتورها: {toPersianNumber(getFactorQuery?.data?.invoices.length || '')}
                                    </p>
                                </div>

                                <AccordionList accordions={getFactorQuery?.data?.invoices} />
                            </div>
                        </div>
                    ) : (
                        <div className="py-16">
                            <p className="text-secondary-500 text-xl font-semibold text-center">
                                هیچ فاکتوری ثبت نشده است.
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// کامپوننت برای نمایش لیست فاکتورها
const AccordionList = ({ accordions }: { accordions: any[] }) => {
    return (
        <div className='flex flex-col gap-2 mt-6'>
            {accordions.map((invoice, index) => (
                <Accordion key={index} invoice={invoice} />
            ))}
        </div>
    );
};

// هر فاکتور
const Accordion = ({ invoice }: { invoice: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <div className='w-full rounded-[0.625rem] '>
                <label
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full h-full min-h-[3.5625rem] p-4 flex items-center justify-between 
                    rounded-[0.625rem] transition-all cursor-pointer`}
                >
                    <h5 className='text-base lg:text-lg font-semibold text-right'>
                        {formatDate2(invoice.createdAt)}
                    </h5>
                    <IoIosArrowBack size={20} className={`${isOpen ? '-rotate-90' : 'rotate-0'} transition-transform`} />
                </label>

                <motion.div
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    exit={{ height: 0 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div className='pt-4 pb-7 px-4 bg-primary-50'>

                        <div className="mb-4">
                            <p className="font-semibold text-lg">آیدی تراکنش: {invoice.refId}</p>
                            <p className="font-medium text-sm text-gray-500">
                                وضعیت پرداخت: 
                                <span className={`ml-2 font-bold ${invoice.paymentStatus === "successful" ? "text-green-500" : "text-red-500"}`}>
                                    {invoice.paymentStatus === "successful" ? "موفق" : "ناموفق"}
                                </span>
                            </p>
                        </div>

                        {/* لیست دوره‌های خریداری شده در هر فاکتور */}
                        {invoice.courses.map((course: any, idx: number) => (
                            <div key={idx} className="border-t pt-4 mt-4">
                                <Link href={`/courses/${decodeTitle(course.courseUrlName)}`} className="font-semibold text-lg hover:text-secondary-400 transition-all">
                                    {course.courseName}
                                </Link>
                                <div className="mt-2 flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span>مبلغ اصلی:</span>
                                        <span>{toPersianNumber(numberSeparator(course.originalPrice))} تومان</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>تخفیف:</span>
                                        <span>{toPersianNumber(numberSeparator(course.discountAmount))} تومان</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>قابل پرداخت:</span>
                                        <span>{toPersianNumber(numberSeparator(course.finalPrice))} تومان</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* مجموع پرداختی فاکتور */}
                        <div className="mt-6 border-t pt-4">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">مجموع مبلغ اصلی:</span>
                                <span>{toPersianNumber(numberSeparator(invoice.totalOriginalPrice))} تومان</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">مجموع تخفیف:</span>
                                <span>{toPersianNumber(numberSeparator(invoice.totalDiscount))} تومان</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-lg">مجموع قابل پرداخت:</span>
                                <span className="text-lg text-green-600 font-bold">{toPersianNumber(numberSeparator(invoice.totalFinalPrice))} تومان</span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// اسکلت لودینگ برای نمایش در هنگام دریافت اطلاعات
const LoadingSkeleton = () => (
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
);
