import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { CourseCard, CourseCardLoading } from "../Shared/CourseCard";
import { PiBooksFill } from "react-icons/pi";
import { getHomeLastCourses } from "@/src/lib/apis/homeApis";
import { BsBookmarkHeartFill } from "react-icons/bs";

type Props = {
    children: React.ReactNode
};



const LastCourses = async (props: Props) => {
    const data: any = await getHomeLastCourses();

    if (data && data.success)

        return (
            <section className="w-full pb-10 flex flex-col relative">

                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-1 md:gap-2">
                        <PiBooksFill className="text-primary-400 text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]" />
                        {props.children}
                    </div>
                    <Link href={'/'} className={`flex items-center gap-1 hover:text-primary-400 text-sm md:text-base transition-all`}>
                        <p>مشاهده همه دوره‌ها</p>

                        <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                    </Link>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-8 ">
                        {
                            data.courses.length && data.courses.map((item: any, index: number) =>
                                <CourseCard key={index} data={item} />
                            )
                        }
                    </div>
                </div>
            </section>
        );
};

export const LastCoursesLoading = async (props: Props) => {

    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                    <PiBooksFill className="text-primary-400 text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]" />


                    {props.children}
                </div>
                <Link href={'/'} className={`flex items-center gap-1 hover:text-primary-400 text-sm md:text-base transition-all`}>
                    <p>مشاهده همه دوره‌ها</p>

                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-8 ">
                    {
                        Array(3).fill(null).map((index: number) =>
                            <CourseCardLoading key={index} />
                        )
                    }
                </div>

            </div>

        </section>
    );
};

export default LastCourses;

