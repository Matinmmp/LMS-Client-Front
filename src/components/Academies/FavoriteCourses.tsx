"use client"
import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { CourseCard, CourseCardLoading } from "../Shared/CourseCard";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { getAcademyCoursesByEngName } from "@/src/lib/apis/academyApis";
import { toPersianNumber } from "@/src/utils/functions";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 
 
type Props = {
    children: React.ReactNode
    name: string,
    totalCourses: number
};


const FavoriteCoursesForAcademy = (props: Props) => {

    const AcademyCourses: any = useQuery({ queryKey: [props.name], queryFn: () => getAcademyCoursesByEngName(props.name) });

    return (
        <section className="w-full pb-4 flex flex-col relative">

            <div className="w-full px-4 pb-2 lg:px-8 flex justify-between">
                <div className="flex items-center gap-2">
                    <BsBookmarkHeartFill className="text-primary-400 text-[1.3rem] md:text-[1.8rem] lg:text-[2.2rem]" />
                    {props.children}
                </div>

                <Link href={'/'} className={`hidden md:flex items-center gap-1 text-sm md:text-base  hover:text-primary-400 transition-all`}>
                    <p>مشاهده همه دوره‌ها ({toPersianNumber(props.totalCourses)})</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>
            </div>

            <div className="w-full mt-10 px-4 lg:px-8">
                {!AcademyCourses?.isLoading ?
                    <Swiper slidesPerView={1} spaceBetween={15} className="mySwiper w-full" breakpoints={{ 576: { slidesPerView: 'auto' } }}  >
                        {
                            AcademyCourses?.data?.courses?.length && AcademyCourses?.data?.courses?.map((item: any, index: number) =>
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

                <div className="mt-10 md:hidden flex justify-center">
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

export default FavoriteCoursesForAcademy;


