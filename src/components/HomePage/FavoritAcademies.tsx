import React from "react";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import Link from "next/link";
import { title } from "../primitives";
import { clsx } from "clsx";
 
import { AcadmyCard } from "../Shared/AcadmyCard";
import { SiHtmlacademy } from "react-icons/si";

type Props = {
};

const FavoritAcademies = (props: Props) => {


    return (
        <section className="w-full pb-10 flex flex-col relative">

            <div className="w-full flex justify-between">
                
                <div className="flex items-center gap-2">
                    <SiHtmlacademy  className="text-success-400 text-[1.5rem] md:text-[2rem] lg:text-[3rem]"/>
                    <h3 className={clsx(title({ color: 'green' }), "text-lg lg:text-2xl xl:text-3xl")}>محبوب‌ترین آکادمی‌ها</h3>
                </div>
                <Link href={'/'} className={`flex items-center gap-1 text-sm md:text-base  hover:text-success-400 transition-all`}>
                    <p>مشاهده همه آکادمی‌ها</p>
                    <TbArrowBigLeftLinesFilled size={20} className="text-success-400 " />
                </Link>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3   justify-items-center gap-y-8 gap-x-8 ">
                    <AcadmyCard />
                    <AcadmyCard />
                    <AcadmyCard />
                    <AcadmyCard />
                    <AcadmyCard />
                    <AcadmyCard />
                    <AcadmyCard />

                  
                </div>

            </div>

        </section>
    );
};

export default FavoritAcademies;
