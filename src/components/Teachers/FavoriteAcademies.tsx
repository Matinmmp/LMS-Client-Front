import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { TeacherCardLoading } from "../Shared/TeacherCard";
import { toPersianNumber } from "@/src/utils/functions";
import { SiHtmlacademy } from "react-icons/si";
import { AcadmyCard } from "../Shared/AcadmyCard";
import { getTeachersAcademiesByEngName } from "@/src/lib/apis/teacherApis";

type Props = {
    children: React.ReactNode
    name: string,
    totalTeachers: number
};

const FavoritAcademyForTeacher = async (props: Props) => {

    const data: any = await getTeachersAcademiesByEngName(props.name);

    if (data && data.success)
        return (
            <section className="w-full pb-10 flex flex-col relative">

                <div className="w-full flex justify-between">

                    <div className="flex items-center gap-2">
                        <SiHtmlacademy className="text-success-400 text-[1.5rem] md:text-[2rem] lg:text-[3rem]" />

                        {props.children}
                    </div>
                    <Link href={`/academies`} className={`flex items-center gap-1 text-sm md:text-base  hover:text-success-400 transition-all`}>
                        <p>مشاهده همه({toPersianNumber(props.totalTeachers)})</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-success-400 " />
                    </Link>
                </div>

                <div className="mt-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-4d  justify-items-center gap-y-8 gap-x-8 ">
                        {data.academies.length && data.academies.map((item: any, index: number) => <AcadmyCard key={index} data={item} />)}
                    </div>

                    <div className="mt-10 sm:hidden flex justify-center">
                        <Link href={`/academies`} className={`flex items-center gap-1 text-base  hover:text-success-400 transition-all`}>
                            <p>مشاهده همه({toPersianNumber(props.totalTeachers)})</p>
                            <TbArrowBigLeftLinesFilled size={20} className="text-success-400 " />
                        </Link>
                    </div>

                </div>

            </section>
        );
};


export const FavoritAcademyForTeacherLoading = (props: Props) => {


    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">

                <div className="flex items-center gap-2">
                    <SiHtmlacademy className="text-success-400 text-[1.5rem] md:text-[2rem] lg:text-[3rem]" />
                    {props.children}
                </div>
                <Link href={`/academies`} className={`flex items-center gap-1 text-sm md:text-base  hover:text-secondary-400 transition-all`}>
                    <p>مشاهده همه({toPersianNumber(props.totalTeachers)})</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-secondary-400" />
                </Link>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-4d  justify-items-center gap-y-8 gap-x-8 ">

                    {Array(3).fill(null).map((index: number) => <TeacherCardLoading key={index} />)}

                </div>

                <div className="mt-10 sm:hidden flex justify-center">
                    <Link href={`/academies`} className={`flex items-center gap-1 text-base  hover:text-primary-400 transition-all`}>
                        <p>مشاهده همه({toPersianNumber(props.totalTeachers)})</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-primary-400 " />
                    </Link>
                </div>

            </div>

        </section>
    );
};

export default FavoritAcademyForTeacher;
