"use client"
import React, { useEffect, useState } from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { CourseCard, CourseCardLoading } from "../Shared/CourseCard";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { getAcademyCoursesByEngName } from "@/src/lib/apis/academyApis";
import { toPersianNumber } from "@/src/utils/functions";
import { useQuery } from "@tanstack/react-query";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


type Props = {
    children: React.ReactNode
    name: string,
    totalCourses: number
};


const FavoriteCoursesForAcademy = (props: Props) => {
    const [loaded, setLoaded] = useState(false);
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        rtl: true,
        slides: { perView: "auto", spacing: 15 },
        created() { setLoaded(true) }
    })

    const AcademyCourses: any = useQuery({ queryKey: [props.name], queryFn: () => getAcademyCoursesByEngName(props.name) });




    return (
        <section className="w-full pb-4 flex flex-col relative">

            <div className="w-full px-4 pb-2 lg:px-8 flex justify-between">
                <div className="flex items-center gap-2">
                    <BsBookmarkHeartFill className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                    {props.children}
                </div>

                <Link href={'/'} className={`hidden md:flex items-center gap-1 text-sm md:text-base  hover:text-primary-400 transition-all`}>
                    <p>مشاهده همه دوره‌ها ({toPersianNumber(props.totalCourses)})</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>
            </div>

            <div className="w-full mt-10 px-2">
                {!AcademyCourses.isLoading && AcademyCourses?.data?.courses?.length ?
                    <Swiper slidesPerView={1} spaceBetween={15} className="mySwiper w-full" breakpoints={{ 576: { slidesPerView: 'auto' } }}  >
                        {
                            [...AcademyCourses?.data.courses, ...AcademyCourses?.data.courses, ...AcademyCourses?.data.courses, ...AcademyCourses?.data.courses, ...AcademyCourses?.data.courses, ...AcademyCourses?.data.courses, ...AcademyCourses?.data.courses].map((item, index) =>
                                <SwiperSlide key={index} className='flex justify-center items-center  sm:max-w-[18rem]'>
                                    <div className="max-w-[20rem] mx-auto sm:mx-0">
                                        <CourseCard data={item} />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper >
                    : ''

                    // <div dir="rtl" ref={sliderRef} className="w-full keen-slider">
                    //     {
                    //         [1].map((item: any, index: number) =>
                    //             <div key={index} className="w-full min-w-full md:max-w-[20rem] md:min-w-[20rem] h-[30rem] keen-slider__slide">
                    //                 <CourseCardLoading />
                    //             </div>
                    //         )
                    //     }
                    // </div>

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

export const FavoriteCoursesForAcademyLoading = (props: Props2) => {

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

export default FavoriteCoursesForAcademy;


