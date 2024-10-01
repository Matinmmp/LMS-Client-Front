import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { title } from "../primitives";
import { clsx } from "clsx";
import { CourseCard } from "../Shared/CourseCard";
import { PiBooksFill } from "react-icons/pi";

type Props = {
};

const LastCourses = (props: Props) => {


    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                    <PiBooksFill className="text-primary-400 text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]"/>
                    <h3 className={clsx(title({ color: 'secondary' }), "pt-1 text-lg md:text-xl lg:text-2xl xl:text-3xl")}>آخرین دوره‌ها</h3>
                </div>
                <Link href={'/'} className={`flex items-center gap-1 hover:text-primary-400 text-sm md:text-base transition-all`}>
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
                    
                </div>

            </div>

        </section>
    );
};

export default LastCourses;

