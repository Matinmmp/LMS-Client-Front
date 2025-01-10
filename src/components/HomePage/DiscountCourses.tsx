
'use client'

import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { CourseCard, CourseCardLoading } from "../Shared/CourseCard";;
import { getDiscountedCourses } from "@/src/lib/apis/homeApis";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Props = {
    children: React.ReactNode
};


const DiscountCourses = async (props: Props) => {
    const data: any = await getDiscountedCourses();

    if (data && data.success && data.courses.length)


        return (
            <section className="w-full pb-10 flex flex-col relative">

                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-2">
                        <RiDiscountPercentLine className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                        {props.children}
                    </div>

                    <Link href={'/courses?price=4'} className={`flex items-center gap-1 text-sm md:text-base  hover:text-primary-400 transition-all`}>
                        <p>مشاهده همه دوره‌ها</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                    </Link>
                </div>

                <div className="mt-10">
                    <Swiper slidesPerView={'auto'} spaceBetween={15} className="mySwiper w-full" breakpoints={{ 576: { slidesPerView: 'auto' } }}  >
                        {
                            data.courses.length ? data.courses.map((item: any, index: number) =>
                                <SwiperSlide key={index} className='flex justify-center items-center  sm:max-w-[18rem]'>
                                    <div className="max-w-[20rem] mx-auto sm:mx-0">
                                        <CourseCard data={item} />
                                    </div>
                                </SwiperSlide>
                            ) : ''
                        }
                    </Swiper >

                </div>

            </section>
        );
};

export const DiscountCoursesLoading = (props: Props) => {

    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                    <RiDiscountPercentLine className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                    {props.children}
                </div>
                <Link href={'/courses?price=4'} className={`flex items-center gap-1 hover:text-primary-400 text-sm md:text-base transition-all`}>
                    <p>مشاهده همه دوره‌ها</p>

                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>
            </div>

            <div className="mt-10">
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

            </div>

        </section>
    );
};

export default DiscountCourses;

