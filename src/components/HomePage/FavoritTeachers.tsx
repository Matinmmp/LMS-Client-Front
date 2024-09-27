import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { title } from "../primitives";
import { clsx } from "clsx";
 
import { AcadmyCard } from "../Shared/AcadmyCard";
import { SiHtmlacademy } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { TeacherCard } from "../Shared/TeacherCard";

type Props = {
};

const FavoritTeachers = (props: Props) => {


    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">
                
                <div className="flex items-center gap-2">
                    <GiTeacher  className="text-danger-400 text-[1.5rem] md:text-[2rem] lg:text-[3rem]"/>
                    <h3 className={clsx(title({ color: 'pink' }), "text-lg lg:text-2xl xl:text-3xl")}>محبوب‌ترین مدرس‌ها</h3>
                </div>
                <Link href={'/'} className={`flex items-center gap-1 text-sm md:text-base  hover:text-danger-400 transition-all`}>
                    <p>مشاهده همه مدرس‌‌ها</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-danger-400 " />
                </Link>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-4d  justify-items-center gap-y-8 gap-x-8 ">
                    <TeacherCard />
                    <TeacherCard />
                    <TeacherCard />
                    <TeacherCard />
        

                  
                </div>

            </div>

        </section>
    );
};

export default FavoritTeachers;
