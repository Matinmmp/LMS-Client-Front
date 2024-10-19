'use client'
import Image from "next/image";
import { title } from "../primitives";
import { clsx } from "clsx";
import { Avatar } from "@nextui-org/avatar";


type Props = {
    data: {
        faName: string,
        engName: string,
        description: string,
        avatar: {
            imageUrl: string,
        }
        rates: number,
        totalStudents: number,
        totalTeachers: number,
        totalCourses: number,

    }
};


const AcademyInfo = ({ data }: Props) => {
    console.log(data)
    return (
        <div className="w-full h-[200vh] p-4 lg:p-8 bg-white dark:bg-slate-900 dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">

            <div className="w-full h-48 md:h-64 lg:h-[27rem]  relative rounded-2xl ">
                <Image className="w-full h-full -mt-20 md:-mt-32 lg:-mt-40 rounded-2xl object-cover object-center shadow-medium" priority={true}
                    width={2000} height={2000} alt="virtual learn hero" src={"https://buckettest.storage.c2.liara.space/images/academy6.jpg"} />

                {/* <Avatar className="h-52 w-52 shadow-[0_0_15px_0_#44de77] absolute -bottom-1/2 -translate-y-1/2" size="lg" radius="sm" isBordered color="success" src={data.avatar.imageUrl} /> */}
                {/* <Avatar className="h-52 w-52 shadow-[0_0_15px_0_#44de77] absolute right-8 -bottom-1/2 -translate-y-1/3 " size="lg" radius="lg" isBordered color="success" src={'https://buckettest.storage.c2.liara.space/images/udemy-logo.png'} /> */}
            </div>

            <div className="w-full mt-10 flex flex-col items-center lg:items-start lg:flex-row justify-between">
                <Avatar className="min-h-28 min-w-28 md:min-h-36 md:min-w-36 lg:min-h-52 lg:min-w-52 -mt-20 md:-mt-28 lg:mt-0 shadow-[0_0_15px_0_#44de77] " size="lg" radius="lg" isBordered color="success" src={'https://buckettest.storage.c2.liara.space/images/udemy-logo.png'} />
               
                <div className="w-full mt-8 lg:mt-4 text-center lg:text-left ">
                    <h1 className={clsx(title({ color: 'green' }), 'inline w-full text-left text-4xl   lg:text-5xl xl:text-6xl !font-bold md:leading-[3.2rem]')}>
                        {data.engName}
                    </h1>
                </div>

            </div>

        </div>
    );
};

export default AcademyInfo;
