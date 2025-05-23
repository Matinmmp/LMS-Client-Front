'use client'
import { useSelector } from "react-redux";
import { Skeleton } from "@nextui-org/skeleton";
import { useQuery } from "@tanstack/react-query";
import { getUserFreeCourses } from "@/src/lib/apis/userApis";
import { motion } from 'framer-motion';
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { encodeTitle, formatDate, formatDate2, toPersianNumber } from "@/src/utils/functions";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

export default function ProfilePage() {
    const { user, loading, error } = useSelector((state: any) => state.auth)
    const getUserFreeCoursesQuery: any = useQuery({ queryKey: ['getUserFreeCourses'], queryFn: getUserFreeCourses });



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
                            <h1 className="text-lg font-semibold">دوره‌های من</h1>
                        </div>

                        {
                            getUserFreeCoursesQuery.isLoading ?
                                <div className="w-full mt-16 lg:mt-20">

                                    <div className="w-full shadow-medium rounded-lg">
                                        <div className="p-3 border-b-1 border-b-primary-50">
                                            <Skeleton className="w-24 h-6" />
                                        </div>

                                        <div className="px-4 pb-6">
                                            <Skeleton className="w-38 h-8 mt-4" />
                                            <Skeleton className="w-38 h-8 mt-4" />
                                            <Skeleton className="w-38 h-8 mt-4" />
                                        </div>
                                    </div>
                                </div>

                                :
                                <div className="w-full mt-16 lg:mt-20">

                                    <div className="w-full shadow-medium rounded-lg">
                                        <div className="p-3 border-b-1 border-b-primary-50">
                                            <p className="font-medium text-base">دوره‌ها : {toPersianNumber(getUserFreeCoursesQuery?.data?.courses?.length || '')}</p>
                                        </div>


                                        <Table
                                            classNames={{ wrapper: 'bg-transparent shadow-none', emptyWrapper: 'text-secondary-500 font-medium text-base' }}>
                                            <TableHeader className="text-center">
                                                <TableColumn className="text-sm font-medium text-center">تصویر</TableColumn>
                                                <TableColumn className="text-sm font-medium text-center">عنوان آموزش</TableColumn>
                                                <TableColumn className="text-sm font-medium text-center">تاریخ آخرین به روز رسانی</TableColumn>
                                            </TableHeader>
                                            <TableBody emptyContent={"در هیچ دوره‌ای شرکت نکرده اید."}>
                                                {getUserFreeCoursesQuery?.data?.courses?.length ?
                                                    getUserFreeCoursesQuery?.data?.courses.map((item: any, index: number) => {
                                                        return (
                                                            <TableRow key={index} className="mt-6">
                                                                <TableCell className="flex justify-center text-center">
                                                                    <Avatar alt={item?.faName ? item?.faName : item?.name} className="h-12 w-16 shadow-[0_0_15px_0_#42C0F4]" size="lg" radius="sm" isBordered color="secondary" src={item?.thumbnail?.imageUrl} />
                                                                </TableCell>
                                                                <TableCell className="text-center">
                                                                    <Link href={`/courses/${encodeTitle(item?.urlName)}`} className="font-semibold hover:text-secondary-400 transition-all text-nowrap">
                                                                        {item?.faName ? item?.faName : item?.name}
                                                                    </Link>
                                                                </TableCell>
                                                                <TableCell className="text-base font-medium text-center">{formatDate(item.updatedAt)}</TableCell>
                                                            </TableRow>
                                                        )
                                                    })

                                                    : []

                                                }
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                        }
                    </>
            }
        </div >
    );
}




