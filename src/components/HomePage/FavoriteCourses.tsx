
import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { title } from "../primitives";
import { clsx } from "clsx";
import { CourseCard } from "../Shared/CourseCard";
import { BsBookmarkHeartFill } from "react-icons/bs";

type Props = {
};

const FavoriteCourses = (props: Props) => {


    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                    <BsBookmarkHeartFill  className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                    <h3 className={clsx(title({ color: 'secondary' }), "text-lg md:text-xl lg:text-2xl xl:text-3xl")}>محبوب‌ترین دوره‌ها</h3>
                </div>

                <Link href={'/'} className={`flex items-center gap-1 text-sm md:text-base  hover:text-primary-400 transition-all`}>
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

export default FavoriteCourses;

