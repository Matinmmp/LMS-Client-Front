'use client'
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";
import Link from 'next/link';
import { Edu } from "@/src/config/fonts";
import { useTheme } from "next-themes";

export default function VirtualInfo() {
    const { theme } = useTheme();

    return (
        <section className="w-full relative">
            <Image src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'background1.jpeg'} alt="back" width={300} height={300}
                className="absolute z-10 opacity-30 h-full w-full bg-contain bg-center" style={{mixBlendMode:'soft-light'}}/>
            <div className="w-full mt-16 p-4 pe-3 rounded-md border-1 border-secondary-500 shadow-medium">


                <div className="flex flex-col gap-4 items-center relative z-20">
                    <div className="flex gap-1 items-center">
                        <Link href="/" className={`${Edu.className} text-center font-bold text-3xl text-primary-400 ${theme == 'light' ? 'neon-text-3d-light' : ' neon-text-3d'}`}>
                            Virtual Learn
                        </Link>
                    </div>
                    <p className='mt-2 leading-7 text-[#555555] dark:text-gray-200 text-center'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و    </p>
                    <div className="mt-12">

                    </div>
                </div>

            </div>
        </section>
    );
}
