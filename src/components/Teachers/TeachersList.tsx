import React from "react";
import { TeacherCard } from "../Shared/TeacherCard";
import { getHomeFavoritTeachers } from "@/src/lib/apis/homeApis";
import { TiPencil } from "react-icons/ti";

type Props = {

};

const TeachersList = async (props: Props) => {

    const data: any = await getHomeFavoritTeachers();

    if (data && data.success)
        return (
            <section className="w-full pb-10 flex flex-col ">


                <div className="mt-10 relative">

                    <div className="sticky top-[30vh] mt-20 -ms-10 lg:-ms-24  z-10 w-0 h-0">
                        <TiPencil className=" text-[15rem] md:text-[20rem]  xl:text-[25rem] text-secondary-400 dark:text-secondary-700" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3    justify-items-center gap-y-8 gap-x-8 relative z-20">

                        {data.teachers.length && data.teachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />)}
                        {data.teachers.length && data.teachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />)}
                        {data.teachers.length && data.teachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />)}
                        {data.teachers.length && data.teachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />)}
                        {data.teachers.length && data.teachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />)}
                        {data.teachers.length && data.teachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />)}
                        {data.teachers.length && data.teachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />)}

                    </div>

                </div>

            </section>
        );
};

export default TeachersList