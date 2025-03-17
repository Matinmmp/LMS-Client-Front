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
import { Tabs, Tab } from "@heroui/tabs";
import { Input } from "@nextui-org/input";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaRegComment } from "react-icons/fa6";
import { toPersianNumber } from "@/src/utils/functions";

function VirtualInfo() {
    const { theme } = useTheme();

    return (
        <section className="lg:mt-16  w-full relative">

            <Image src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'background1.jpeg'} alt="back" width={300} height={300}
                className="absolute z-10 opacity-30 h-full aspect-square w-full bg-contain bg-center" style={{ mixBlendMode: 'soft-light' }} />

            <div className="w-full p-4 pe-3 rounded-xl border-1 border-secondary-500 shadow-medium relative bg-white dark:bg-transparent">

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

function WhatIsVirtualLearn() {

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <section className="w-full mt-40 max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                <div className="w-full rounded-2xl shadow-medium p-8 py-14 bg-white dark:bg-black/50">
                    <div className="flex items-center gap-10 relative">
                        <Image priority alt="لوگوی ویرچوال لرن، پلتفرم آموزش برنامه‌نویسی" className="w-36 h-36" height={400} width={400}
                            src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                        <span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" />

                        <div className="">
                            <h2 className="text-2xl lg:text-3xl font-semibold">ویرچوال لرن</h2>
                            <p className="mt-6 leading-9 font-medium" style={{ wordSpacing: '0.2rem' }}>
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و

                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}

function FeaturedSidebar() {
    const [state, setState] = useState(1);
    return (
        <section className="w-full relative">
            <div className="w-full p-4 pe-3 rounded-xl border-1 border-secondary-500 shadow-medium bg-white dark:bg-transparent">
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

            <div className="w-full p-4 pb-6 pe-3 rounded-xl border-1 border-secondary-500 shadow-medium relative bg-white dark:bg-transparent">
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

            <div className="mt-10 w-full p-4 pb-6 rounded-xl border-1 border-secondary-500 shadow-medium relative bg-white dark:bg-transparent">
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
                <div className="w-full mt-20 flex justify-center">
                    <Button variant="shadow" color="secondary" size="lg" className="font-bold">مشاهده‌ی همه</Button>
                </div>
            </div>
        </section>
    );
}

function CategoriesSidebar() {

    return (
        <section className="w-full relative">

            <div className="w-full p-4 pb-6 rounded-xl border-1 border-secondary-500 shadow-medium relative bg-white dark:bg-transparent">
                <p className="text-lg text-right font-semibold ">دسته‌بندی‌ها</p>

                <div className="w-full mt-10 flex flex-col gap-4">

                    <Link href={`/blog/categories/1`} className="w-full flex items-center justify-between gap-4 ">
                        <div className="flex items-center gap-2">
                            <span className="p-1 rounded-sm bg-primary-400 "><MdEmail size={20} className='text-white' /></span>
                            <span>برنامه نویسی</span>
                        </div>
                        <span className="flex items-center justify-center rounded-full bg-primary-400 text-sm min-w-6 min-h-6 text-white">1</span>
                    </Link>


                </div>

            </div>
        </section>
    );
}

function CourseSlider() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 ">


            <Swiper pagination={true} modules={[Pagination]}
                className="mySwiper w-full lg:w-2/3 px-2 h-[20rem] md:h-[20rem] lg:h-[25rem] rounded-2xl  shadow-medium">

                <SwiperSlide className='w-full overflow-hidden relative rounded-2xl '>
                    <Image src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} className='w-full h-full shadow-large' alt='aa' width={1000} height={600} />
                    <div className='z-50 absolute bottom-0 p-4 w-full flex items-center justify-start backdrop-blur-[1px] bg-[#ffffffb7]/ dark:bg-[#2020204d]'>
                        <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white ps-1 md:ps-4 pb-4 lg:pb-6'>برنامه‌نویسی چیست و از کجا شروع کنیم؟</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='w-full overflow-hidden relative rounded-2xl '>
                    <Image src={'https://buckettest.storage.c2.liara.space/CoursesImages/eRsYtMTIKQl4d8OQcOGB-Learn%20React%20Query%20In%2050%20Minutes.png'} className='w-full h-full shadow-large' alt='aa' width={1000} height={600} />
                    <div className='z-50 absolute bottom-0 p-4 w-full flex items-center justify-start backdrop-blur-[1px] bg-[#ffffffb7]/ dark:bg-[#2020204d]'>
                        <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white ps-1 md:ps-4 pb-4 lg:pb-6'>برنامه‌نویسی چیست و از کجا شروع کنیم؟</p>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="w-full h-full max-h-[25rem] overflow-auto lg:w-1/3 rounded-2xl shadow-medium bg-white dark:bg-black/50">
                <div className="h-full p-3 flex flex-col gap-1">
                    <div className="p-3 flex items-center gap-4 hover:shadow-medium cursor-pointer rounded-xl transition-all">
                        <Image className="w-28 aspect-video rounded-md shadow-small" alt="f" width={200} height={140} src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} />
                        <h3 className="text-lg font-bold">آموزش برنامه نویسی فرانت</h3>
                    </div>
                    <div className="p-3 flex items-center gap-4 hover:shadow-medium cursor-pointer rounded-xl transition-all">
                        <Image className="w-28 aspect-video rounded-md shadow-small" alt="f" width={200} height={140} src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} />
                        <h3 className="text-lg font-bold">آموزش برنامه نویسی فرانت</h3>
                    </div>
                    <div className="p-3 flex items-center gap-4 hover:shadow-medium cursor-pointer rounded-xl transition-all">
                        <Image className="w-28 aspect-video rounded-md shadow-small" alt="f" width={200} height={140} src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} />
                        <h3 className="text-lg font-bold">آموزش برنامه نویسی فرانت</h3>
                    </div>
                    <div className="p-3 flex items-center gap-4 hover:shadow-medium cursor-pointer rounded-xl transition-all">
                        <Image className="w-28 aspect-video rounded-md shadow-small" alt="f" width={200} height={140} src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} />
                        <h3 className="text-lg font-bold">آموزش برنامه نویسی فرانت</h3>
                    </div>
                    <div className="p-3 flex items-center gap-4 hover:shadow-medium cursor-pointer rounded-xl transition-all">
                        <Image className="w-28 aspect-video rounded-md shadow-small" alt="f" width={200} height={140} src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} />
                        <h3 className="text-lg font-bold">آموزش برنامه نویسی فرانت</h3>
                    </div>
                    <div className="p-3 flex items-center gap-4 hover:shadow-medium cursor-pointer rounded-xl transition-all">
                        <Image className="w-28 aspect-video rounded-md shadow-small" alt="f" width={200} height={140} src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} />
                        <h3 className="text-lg font-bold">آموزش برنامه نویسی فرانت</h3>
                    </div>
                    <div className="p-3 flex items-center gap-4 hover:shadow-medium cursor-pointer rounded-xl transition-all">
                        <Image className="w-28 aspect-video rounded-md shadow-small" alt="f" width={200} height={140} src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} />
                        <h3 className="text-lg font-bold">آموزش برنامه نویسی فرانت</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

function CategoriesPosts() {
    return (
        <section className="w-full">
            <div className="w-full">
                <div className="w-full flex justify-center">
                    <Tabs classNames={{ tabWrapper: 'w-full', base: 'flex justify-center' }} className="w-full" style={{ color: 'red' }} radius="full" size="lg" aria-label="Options" isVertical={false} color="secondary" variant="underlined">

                        <Tab className="w-full" key="photos" title={
                            <div className=" flex gap-2 items-center">
                                <span>همه</span>
                                <span className="w-5 h-5 flex justify-center items-center rounded-full border-1 border-secondary-500 text-xs">
                                    {toPersianNumber(7)}</span>
                            </div>
                        }>
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                                <BlogPosts />
                                <BlogPosts />
                                <BlogPosts />
                                <BlogPosts />

                            </div>
                        </Tab>

                        <Tab className="w-full" key="music" title="برنامه نویسی">
                            <div className="w-full">
                                f2
                            </div>
                        </Tab>

                        <Tab className="w-full" key="videos" title="پایتون">
                            <div className="w-full">
                                f3
                            </div>
                        </Tab>

                    </Tabs>

                </div>
                <div className="mt-16 w-full flex justify-center">
                    <Button color="secondary" variant="shadow" radius="md" size={'lg'}>
                        مشاهده‌ی بیشتر
                    </Button>
                </div>
            </div>
        </section>
    );
}

function BlogPosts() {
    return (
        <div className="w-full shadow-medium rounded-xl bg-white dark:bg-black/40 backdrop-blur-sm">
            <div className="p-4">
                <Link href={`/courses/$1`} className="overflow-hidden h-[14rem] md:h-[12rem] md:aspect-video">
                    <Image className="w-full h-full object-center object-cover hover:scale-110 hover:scale-y-[1.15] transition-transform rounded-xl "
                        width={450} height={300} alt={';;'} src={'https://buckettest.storage.c2.liara.space/CoursesImages/2fPFPH5AXF6BJPRPWW0Q-Working%20with%20Files%20in%20Python.png'} />
                </Link>
                <div className="mt-8">
                    <h5 className="font-semibold">تمامی اخبار و شایعات Samsung S25 Edge</h5>
                    <p className="mt-4 leading-6 text-xs" style={{ wordSpacing: '0.15rem' }}>
                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <FaRegComment />
                        <span className="text-sm">{toPersianNumber(12)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <LuCalendarDays />
                        <span className="text-sm">{toPersianNumber(12)} پیش</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    VirtualInfo,
    FeaturedSidebar,
    NewSteler,
    ReceentPosts,
    CategoriesSidebar,
    CourseSlider,
    WhatIsVirtualLearn,
    CategoriesPosts
}