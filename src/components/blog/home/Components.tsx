'use client'
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from 'next/link';
import { Edu } from "@/src/config/fonts";
import { useTheme } from "next-themes";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { Button } from "@nextui-org/button";


function VirtualInfo() {
    const { theme } = useTheme();

    return (
        <section className="mt-16  w-full relative">

            <Image src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'background1.jpeg'} alt="back" width={300} height={300}
                className="absolute z-10 opacity-30 h-full aspect-square w-full bg-contain bg-center" style={{ mixBlendMode: 'soft-light' }} />
            <div className="w-full p-4 pe-3 rounded-md border-1 border-secondary-500 shadow-medium relative">



                <div className="flex flex-col gap-4 items-center relative z-20">
                    <div className="flex gap-1 items-center">
                        <Link href="/" className={`${Edu.className} text-center font-bold text-3xl text-primary-400 ${theme == 'light' ? 'neon-text-3d-light' : ' neon-text-3d'}`}>
                            Virtual Learn
                        </Link>
                    </div>
                    <p className='mt-2 leading-7 text-[#555555] dark:text-gray-200 text-center'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و    </p>


                    <div className="mt-4 flex items-center gap-4 ">
                        <Link href={'/'}><IoLogoLinkedin size={24} className="text-secondary-500" /></Link>
                        <Link href={'/'}><FaSquareInstagram size={24} className="text-secondary-500" /></Link>
                        <Link href={'/'}><FaTelegram size={24} className="text-secondary-500" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturedSidebar() {
    return (
        <section className="w-full relative">
            <div className="w-full p-4 pe-3 rounded-md border-1 border-secondary-500 shadow-medium">
                <h4 className="text-xl lg:text-2xl font-semibold underline decoration-secondary-500
                decoration-wavy decoration-[2px] underline-offset-[1rem] lg:underline-offset-[1rem] text-center">محبوب‌ها</h4>

                <div className='mt-10 flex justify-center gap-3'>
                    <Button variant="bordered" color="secondary" radius="full" className="font-bold" size="lg">محبوب‌ها</Button>
                    <Button variant="shadow" color="secondary" radius="full" className="font-bold" size="lg">جدید‌ها</Button>

                </div>

            </div>
        </section>
    );
}

export {
    VirtualInfo,
    FeaturedSidebar
}