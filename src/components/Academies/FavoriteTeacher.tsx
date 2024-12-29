import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { GiTeacher } from "react-icons/gi";
import { TeacherCard, TeacherCardLoading } from "../Shared/TeacherCard";
import { toPersianNumber } from "@/src/utils/functions";
import { getAcademyTeachersByEngName } from "@/src/lib/apis/academyApis";

type Props = {
    children: React.ReactNode
    name: string,
    totalTeachers: number
};

const FavoritTeachersForAcademy = async (props: Props) => {

    const data: any = await getAcademyTeachersByEngName(props.name);
    console.log(data);
    if (data && data.success)
        return (
            <section className="w-full pb-4 flex flex-col relative">

                <div className="w-full flex justify-between">

                    <div className="flex items-center gap-2">
                        <GiTeacher className="text-secondary-400 text-[1.5rem] md:text-[2rem] lg:text-[3rem]" />
                        {
                            props.children
                        }
                    </div>
                    <Link href={`/teachers?academy=${props.name}`} className={`hidden md:flex items-center gap-1 text-sm md:text-base  hover:text-secondary-400 transition-all`}>
                        <p>مشاهده همه مدرس‌های ({toPersianNumber(props.totalTeachers)})</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-secondary-400 " />
                    </Link>
                </div>

                <div className="mt-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-4d  justify-items-center gap-y-8 gap-x-8 ">
                        {data.teachers.length && data.teachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />)}
                    </div>

                    <div className="mt-10 md:hidden flex justify-center">
                        <Link href={`/teachers?academy=${props.name}`} className={`flex items-center gap-1 text-base  hover:text-primary-400 transition-all`}>
                            <p>مشاهده همه مدرس‌‌ها ({toPersianNumber(props.totalTeachers)})</p>
                            <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                        </Link>
                    </div>

                </div>

            </section>
        );
};


export const FavoritTeachersForAcademyLoading = (props: Props) => {
    return (
        <section className="w-full pb-4 flex flex-col relative">

            <div className="w-full flex justify-between">

                <div className="flex items-center gap-2">
                    <GiTeacher className="text-secondary-400 text-[1.5rem] md:text-[2rem] lg:text-[3rem]" />
                    {
                        props.children
                    }
                </div>
                <Link href={`/teachers?academy=${props.name}`} className={`hidden md:flex items-center gap-1 text-sm md:text-base  hover:text-secondary-400 transition-all`}>
                    <p>مشاهده همه مدرس‌‌ها ({toPersianNumber(props.totalTeachers)})</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-secondary-400 " />
                </Link>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-4d  justify-items-center gap-y-8 gap-x-8 ">

                    {Array(3).fill(null).map((index: number) => <TeacherCardLoading key={index} />)}

                </div>

                <div className="mt-10 md:hidden flex justify-center">
                    <Link href={`/teachers?academy=${props.name}`} className={`flex items-center gap-1 text-base  hover:text-primary-400 transition-all`}>
                        <p>مشاهده همه مدرس‌‌ها ({toPersianNumber(props.totalTeachers)})</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                    </Link>
                </div>

            </div>

        </section>
    );
};

export default FavoritTeachersForAcademy;
