'use client'
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from 'next/link';
import { Edu } from "@/src/config/fonts";
import { useTheme } from "next-themes";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram, FaUser } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { LuCalendarDays } from "react-icons/lu";
import { Avatar } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function VirtualInfo() {
    const { theme } = useTheme();

    return (
        <section className="lg:mt-16  w-full relative">

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
    const [state, setState] = useState(1);
    return (
        <section className="w-full relative">
            <div className="w-full p-4 pe-3 rounded-md border-1 border-secondary-500 shadow-medium">
                <h4 className="text-xl lg:text-2xl font-semibold underline decoration-secondary-500
                decoration-wavy decoration-[2px] underline-offset-[1rem] lg:underline-offset-[1rem] text-center">محبوب‌ها</h4>

                <div className='mt-10 flex justify-center gap-3'>
                    <Button onPress={() => setState(1)} variant={state ? 'shadow' : 'bordered'} color="secondary" radius="full" className="font-bold" size="lg">محبوب‌ها</Button>
                    <Button onPress={() => setState(0)} variant={!state ? 'shadow' : 'bordered'} color="secondary" radius="full" className="font-bold" size="lg">جدید‌ها</Button>

                </div>
                <div className='mt-12'>
                    <div className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                        <Avatar className="w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src="https://buckettest.storage.c2.liara.space/images/academy19.png" />

                        <div className='mb-3'>
                            <h3 className="text-lg font-medium mb-2">
                                <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                            </h3>
                            <div className="flex items-center gap-2">
                                <LuCalendarDays size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>
                        </div>

                    </div>
                    <div className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                        <Avatar className="w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src="https://buckettest.storage.c2.liara.space/images/academy19.png" />

                        <div className='mb-3'>
                            <h3 className="text-lg font-medium mb-2">
                                <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                            </h3>
                            <div className="flex items-center gap-2">
                                <LuCalendarDays size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>
                        </div>

                    </div>
                    <div className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                        <Avatar className="w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src="https://buckettest.storage.c2.liara.space/images/academy19.png" />

                        <div className='mb-3'>
                            <h3 className="text-lg font-medium mb-2">
                                <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                            </h3>
                            <div className="flex items-center gap-2">
                                <LuCalendarDays size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>
                        </div>

                    </div>
                    <div className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                        <Avatar className="w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src="https://buckettest.storage.c2.liara.space/images/academy19.png" />

                        <div className='mb-3'>
                            <h3 className="text-lg font-medium mb-2">
                                <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                            </h3>
                            <div className="flex items-center gap-2">
                                <LuCalendarDays size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>
                        </div>

                    </div>
                    <div className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                        <Avatar className="w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src="https://buckettest.storage.c2.liara.space/images/academy19.png" />

                        <div className='mb-3'>
                            <h3 className="text-lg font-medium mb-2">
                                <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                            </h3>
                            <div className="flex items-center gap-2">
                                <LuCalendarDays size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

function NewSteler() {


    return (
        <section className="w-full relative">
            <Image src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'background1.jpeg'} alt="back" width={300} height={300}
                className="absolute z-10 opacity-30 h-full aspect-square w-full bg-cover bg-center" style={{ mixBlendMode: 'soft-light' }} />

            <div className="w-full p-4 pb-6 pe-3 rounded-md border-1 border-secondary-500 shadow-medium relative">
                <div className="flex flex-col gap-4 items-center relative z-20">

                    <h4 className="mt-2 text-2xl font-semibold underline decoration-secondary-500
                decoration-wavy decoration-[2px] underline-offset-[1rem] lg:underline-offset-[1.3rem] text-center">خبرنامه‌ی ویرچوال لرن</h4>

                    <p className="mt-8 px-2 text-sm text-center">عضو خبرنامه‌ی ویرچول لرن بشید تا از آخرین احبار حوضه‌ی برنامه نویسی و تکنبوژی مطلع بشید.</p>

                    <div className="mt-4 w-full">
                        <Input
                            radius="full"
                            labelPlacement="outside"
                            placeholder="you@example.com"
                            className="w-full"
                            size="lg"
                            color={'secondary'}
                            variant={'bordered'}
                            startContent={
                                <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            type="email"
                        />

                        <Button variant="shadow" color="secondary" radius="full" className="mt-4 w-full font-bold" size="lg">عضویت</Button>

                    </div>
                </div>
            </div>
        </section>
    );
}

function ReceentPosts() {

    return (
        <section className="w-full relative">
            <h2 className="text-2xl lg:text-3xl text-right font-semibold underline decoration-secondary-500
                decoration-wavy decoration-[2px] underline-offset-[1rem] lg:underline-offset-[1.2rem]">پست‌های اخیر</h2>

            <div className="mt-10 w-full p-4 pb-6 rounded-md border-1 border-secondary-500 shadow-medium relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">

                    <div className="w-full flex flex-col">
                        <Image src={'https://buckettest.storage.c2.liara.space/images/academy19.png'} alt="1" width={500} height={300}
                            className="w-full rounded-md aspect-video object-cover object-center shadow-medium" />
                        <h3 className="mt-3 text-xl lg:text-2xl font-medium hover:text-secondary-500 cursor-pointer">پست ویژه‌ی اول</h3>
                        <div className="mt-4 flex items-center gap-4 text-[#555555] dark:text-gray-200">
                            <div className="flex items-center gap-2">
                                <FaUser size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LuCalendarDays size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>

                        </div>
                        <p className='mt-4 leading-7 text-[#555555] dark:text-gray-200'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می با نرم افزارها شناخت بیشتری   </p>
                        <div className='mt-5'>
                            <Button variant="shadow" color="secondary" radius="full" className="font-bold">مطالعه‌ی بیشتر</Button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col">
                        <Image src={'https://buckettest.storage.c2.liara.space/images/academy19.png'} alt="1" width={500} height={300}
                            className="w-full rounded-md aspect-video object-cover object-center shadow-medium" />
                        <h3 className="mt-3 text-xl lg:text-2xl font-medium hover:text-secondary-500 cursor-pointer">پست ویژه‌ی اول</h3>
                        <div className="mt-4 flex items-center gap-4 text-[#555555] dark:text-gray-200">
                            <div className="flex items-center gap-2">
                                <FaUser size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LuCalendarDays size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>

                        </div>
                        <p className='mt-4 leading-7 text-[#555555] dark:text-gray-200'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می با نرم افزارها شناخت بیشتری   </p>
                        <div className='mt-5'>
                            <Button variant="shadow" color="secondary" radius="full" className="font-bold">مطالعه‌ی بیشتر</Button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col">
                        <Image src={'https://buckettest.storage.c2.liara.space/images/academy19.png'} alt="1" width={500} height={300}
                            className="w-full rounded-md aspect-video object-cover object-center shadow-medium" />
                        <h3 className="mt-3 text-xl lg:text-2xl font-medium hover:text-secondary-500 cursor-pointer">پست ویژه‌ی اول</h3>
                        <div className="mt-4 flex items-center gap-4 text-[#555555] dark:text-gray-200">
                            <div className="flex items-center gap-2">
                                <FaUser size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LuCalendarDays size={14} />
                                <span className="text-xs font-medium">ویرچوال لرن</span>
                            </div>

                        </div>
                        <p className='mt-4 leading-7 text-[#555555] dark:text-gray-200'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می با نرم افزارها شناخت بیشتری   </p>
                        <div className='mt-5'>
                            <Button variant="shadow" color="secondary" radius="full" className="font-bold">مطالعه‌ی بیشتر</Button>
                        </div>
                    </div>
                   

                </div>
            </div>
        </section>
    );
}

export {
    VirtualInfo,
    FeaturedSidebar,
    NewSteler,
    ReceentPosts
}