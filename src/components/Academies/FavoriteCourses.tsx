import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { CourseCard, CourseCardLoading } from "../Shared/CourseCard";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { getAcademyCoursesByEngName } from "@/src/lib/apis/academyApis";
import { toPersianNumber } from "@/src/utils/functions";

type Props = {
    children: React.ReactNode
    name: string,
    totalCourses: number
};


const FavoriteCoursesForAcademy = async (props: Props) => {
    const data: any = await getAcademyCoursesByEngName(props.name);
  
    if (data && data.success)
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-8 ">
                        {
                            data?.courses?.length && data.courses.map((item: any, index: number) =>
                                <CourseCard key={index} data={item} />
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

