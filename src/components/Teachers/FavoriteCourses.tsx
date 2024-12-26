
'use client'
import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { CourseCard, CourseCardLoading } from "../Shared/CourseCard";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { toPersianNumber } from "@/src/utils/functions";
import { getTeacherCoursesByEngName } from "@/src/lib/apis/teacherApis";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useQuery } from "@tanstack/react-query";

type Props = {
    children: React.ReactNode
    name: string,
    totalCourses: number
};


const FavoriteCoursesForTeacher = (props: Props) => {
    const TeacherCourses: any = useQuery({ queryKey: [props.name], queryFn: () => getTeacherCoursesByEngName(props.name) });


    return (
        <section className="w-full pb-4 flex flex-col relative">

            <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                    <BsBookmarkHeartFill className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                    {props.children}
                </div>

                <Link href={'/'} className={`hidden sm:flex items-center gap-1 text-sm md:text-base  hover:text-primary-400 transition-all`}>
                    <p>مشاهده همه دوره‌ها ({toPersianNumber(props.totalCourses)})</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>
            </div>

            <div className="mt-10">
                {!TeacherCourses.isLoading ?
                    <Swiper slidesPerView={1} spaceBetween={15} className="mySwiper w-full" breakpoints={{ 576: { slidesPerView: 'auto' } }}  >
                        {
                            TeacherCourses?.data.courses.length && TeacherCourses?.data.courses.map((item: any, index: number) =>
                                <SwiperSlide key={index} className='flex justify-center items-center  sm:max-w-[18rem]'>
                                    <div className="max-w-[20rem] mx-auto sm:mx-0">
                                        <CourseCard data={item} />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper >
                    :

                    <Swiper slidesPerView={1} spaceBetween={15} className="mySwiper w-full" breakpoints={{ 576: { slidesPerView: 'auto' } }}  >
                        {
                            [1].map((item, index) =>
                                <SwiperSlide key={index} className='flex justify-center items-center  sm:max-w-[18rem]'>
                                    <div className="max-w-[20rem] mx-auto sm:mx-0">
                                        <CourseCardLoading />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper >

                }

                <div className="mt-10 sm:hidden flex justify-center">
                    <Link href={'/'} className={`flex items-center gap-1 text-base  hover:text-primary-400 transition-all`}>
                        <p>مشاهده همه دوره‌ها ({toPersianNumber(props.totalCourses)})</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                    </Link>
                </div>

            </div>

        </section>
    );
};


type Props2 = {
    children: React.ReactNode,
    totalCourses: number

};

export const FavoriteCoursesForTeacherLoading = (props: Props2) => {

    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">

                <div className="flex items-center gap-1 md:gap-2">
                    <BsBookmarkHeartFill className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                    {props.children}
                </div>

                <Link href={'/'} className={`hidden sm:flex items-center gap-1 text-sm md:text-base  hover:text-primary-400 transition-all`}>
                    <p>مشاهده همه دوره‌ها ({toPersianNumber(props.totalCourses)})</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>

            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-8 ">
                    {
                        Array(4).fill(null).map((index: number) =>
                            <CourseCardLoading key={index} />
                        )
                    }
                </div>

                <div className="mt-10 sm:hidden flex justify-center">
                    <Link href={'/'} className={`flex items-center gap-1 text-base  hover:text-primary-400 transition-all`}>
                        <p>مشاهده همه دوره‌ها ({toPersianNumber(props.totalCourses)})</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                    </Link>
                </div>


            </div>

        </section>
    );
};

export default FavoriteCoursesForTeacher;

