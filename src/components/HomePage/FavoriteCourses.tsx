
import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { CourseCard, CourseCardLoading } from "../Shared/CourseCard";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { getHomeFavoritCourses } from "@/src/lib/apis/homeApis";

type Props = {
    children: React.ReactNode
};


const FavoriteCourses = async (props: Props) => {
    const data: any = await getHomeFavoritCourses();

    if (data && data.success && data.courses.length)


        return (
            <section className="w-full pb-10 flex flex-col relative">

                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-2">
                        <BsBookmarkHeartFill className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                        {props.children}
                    </div>

                    <Link href={'/courses?order=5'} className={`flex items-center gap-1 text-sm md:text-base  hover:text-primary-400 transition-all`}>
                        <p>مشاهده همه دوره‌ها</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                    </Link>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 ">
                        {
                            data.courses.length ? data.courses.map((item: any, index: number) =>
                                <CourseCard key={index} data={item} />
                            ):''
                        }


                    </div>

                </div>

            </section>
        );
};

export const FavoriteCoursesLoading = (props: Props) => {

    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                    <BsBookmarkHeartFill className="text-primary-400 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]" />
                    {props.children}
                </div>
                <Link href={'/courses?order=5'} className={`flex items-center gap-1 hover:text-primary-400 text-sm md:text-base transition-all`}>
                    <p>مشاهده همه دوره‌ها</p>

                    <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                </Link>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 ">
                    {
                        Array(4).fill(null).map((index: number) =>
                            <CourseCardLoading key={index} />
                        )
                    }
                </div>

            </div>

        </section>
    );
};

export default FavoriteCourses;

