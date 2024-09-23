"use client";
import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";

import { Edu } from "@/src/config/fonts";
import Link from "next/link";
import Image from "next/image";
import { subtitle, title } from "../primitives";
import { clsx } from "clsx";



type Props = {
};




const LastCourses = (props: Props) => {


    return (
        <section className="w-full pb-10 flex flex-col">
            <div className="w-full flex justify-between">
                <h3 className={clsx(title({ color: 'secondary' }), "text-xl lg:text-2xl xl:text-3xl")}>آخرین دوره‌ها</h3>
                <Link href={'/'} className={`flex items-center gap-1 hover:text-primary-400 transition-all`}>
                    <p>مشاهده همه دوره‌ها</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-8 ">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>

            </div>

        </section>
    );
};

export default LastCourses;


type CardProps = {
};

const CourseCard = ({ }: CardProps) => {
    return (
        <div className="w-full max-w-[25rem] h-[24rem] border-1 border-[#ecf0f4] hover:scale-105 transition-all
        shadow-[0_0_9px_0_#c1c2c4] dark:shadow-[0_0_9px_0_#2b2b2b]  hover:shadow-[0_0_7px_0_#079CED] dark:hover:shadow-[0_0_7px_0_#079CED]
         dark:border-0 bg-white dark:bg-[#212123]/50 dark:backdrop-blur-md dark:backdrop-saturate-150 rounded-md cursor-pointer overflow-hidden  ">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-1/2 p-2 overflow-hidden">
                    <Image className="w-full h-full object-center hover:scale-110 transition-transform rounded-md "
                        width={450} height={300} alt="" src={'https://buckettest.storage.c2.liara.space/9e6f3885-47fc-41df-81d7-a567169df08f.png'} />
                </div>
                <div className="w-full h-1/2  /dark:bg-default-100/50">

                </div>
            </div>
        </div>
    )
}