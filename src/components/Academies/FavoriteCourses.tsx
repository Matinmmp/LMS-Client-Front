"use client"
import React, { useEffect } from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { CourseCard, CourseCardLoading } from "../Shared/CourseCard";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { getAcademyCoursesByEngName } from "@/src/lib/apis/academyApis";
import { toPersianNumber } from "@/src/utils/functions";
// import { useKeenSlider } from "keen-slider/react";
import { useQuery } from "@tanstack/react-query";
// import 'keen-slider/keen-slider.min.css'

type Props = {
    children: React.ReactNode
    name: string,
    totalCourses: number
};


const FavoriteCoursesForAcademy = (props: Props) => {
    // const [sliderRef] = useKeenSlider<HTMLDivElement>({
    //     loop: false,
    //     mode: "snap",
    //     rtl: true,
    //     slides: { perView: "auto", spacing: 15 },
    // })

    const AcademyCourses =
        useQuery({
            queryKey: [props.name],
            queryFn: () => fetch('http://192.168.1.18:8001/api/v1/getAcademyCoursesByEngName/Udemy')
        });


    console.log('logggggggggggggggggggggggggggggggggggggggggggg9', AcademyCourses)

    // useEffect(() => {
    //     async function f() {
    //         // const res = await fetch('http://192.168.1.18:8001/api/v1/getAcademyCoursesByEngName/Udemy');
    //         const res = await fetch('https://api.github.com/repos/TanStack/query');

            
    //         const data = await res.json();
    //         return data;
    //     }

    //     f().then(data => {
    //         alert(JSON.stringify(data)); // نمایش نتیجه در قالب JSON
    //     }).catch(err => {
    //         alert(err)
    //         console.error(err); // هندل کردن خطا
    //     });
    // }, []);


    return (
        <section className="w-full pb-4 flex flex-col relative">
            {/* {`${AcademyCourses.toString()}`}
            <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                    <BsBookmarkHeartFill className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                    {props.children}
                </div>

                <Link href={'/'} className={`hidden md:flex items-center gap-1 text-sm md:text-base  hover:text-primary-400 transition-all`}>
                    <p>مشاهده همه دوره‌ها ({toPersianNumber(props.totalCourses)})</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>
            </div>

            <div className="w-full mt-10">
                {!AcademyCourses.isLoading ?
                    <div dir="rtl" ref={sliderRef} className="w-full keen-slider">
                        {
                            AcademyCourses?.data?.courses?.length && [...AcademyCourses?.data.courses, ...AcademyCourses?.data.courses].map((item: any, index: number) =>
                                <div key={index} className="w-full min-w-full md:max-w-[20rem] md:min-w-[20rem] h-[30rem] keen-slider__slide">
                                    <CourseCard data={item} />
                                </div>
                            )
                        }

                    </div> :
                    <div dir="rtl" ref={sliderRef} className="w-full keen-slider">
                        {
                            [1].map((item: any, index: number) =>
                                <div key={index} className="w-full min-w-full md:max-w-[20rem] md:min-w-[20rem] h-[30rem] keen-slider__slide">
                                    <CourseCardLoading />
                                </div>
                            )
                        }
                    </div>}

                <div className="mt-10 md:hidden flex justify-center">
                    <Link href={'/'} className={`flex items-center gap-1 text-base  hover:text-primary-400 transition-all`}>
                        <p>مشاهده همه دوره‌ها ({toPersianNumber(props.totalCourses)})</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                    </Link>
                </div>

            </div> */}

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

