import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { AcadmyCard, AcadmyCardLoading } from "../Shared/AcadmyCard";
import { SiHtmlacademy } from "react-icons/si";
import { getHomeFavoritAcademies } from '@/src/lib/apis/homeApis';

type Props = {
    children: React.ReactNode
};

const FavoritAcademies = async (props: Props) => {
    const data: any = await getHomeFavoritAcademies();
    
    if (data && data.success && data.academies.length)

        return (
            <section className="w-full pb-10 flex flex-col relative">

                <div className="w-full flex justify-between">

                    <div className="flex items-center gap-2">
                        <SiHtmlacademy className="text-success-400 text-[1.5rem] md:text-[2rem] lg:text-[3rem]" />
                        {props.children}
                    </div>
                    <Link href={'/academies'} className={`flex items-center gap-1 text-sm md:text-base  hover:text-success-400 transition-all`}>
                        <p>مشاهده همه آکادمی‌ها</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-success-400 " />
                    </Link>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3   justify-items-center gap-y-8 gap-x-8 ">
                        {data.academies.length && data.academies.map((item: any, index: number) => <AcadmyCard key={index} data={item} />)}
                    </div>

                </div>

            </section>
        );
};

export const FavoritAcademiesLoading =  (props: Props) => {


    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">

                <div className="flex items-center gap-2">
                    <SiHtmlacademy className="text-success-400 text-[1.5rem] md:text-[2rem] lg:text-[3rem]" />
                    {props.children}
                </div>

                <Link href={'/academies'} className={`flex items-center gap-1 text-sm md:text-base  hover:text-success-400 transition-all`}>
                    <p>مشاهده همه آکادمی‌ها</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-success-400 " />
                </Link>

            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3   justify-items-center gap-y-8 gap-x-8 ">
                    {Array(3).fill(null).map((index: number) => <AcadmyCardLoading key={index} />)}
                </div>

            </div>

        </section>
    );
};

export default FavoritAcademies;
