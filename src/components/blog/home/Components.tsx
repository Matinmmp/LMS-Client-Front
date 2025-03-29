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

import { FaRegComment } from "react-icons/fa6";
import { getTimeAgo, toPersianNumber } from "@/src/utils/functions";
import { blogCategories } from "@/src/config/site";

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
                <div className="w-full rounded-2xl shadow-medium p-8 py-14 bg-white dark:bg-black/40">
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

function FeaturedSidebar({ oldestBlogs, popularBlogs }: { oldestBlogs: any, popularBlogs: any }) {
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
                    {
                        state ?
                            popularBlogs?.map((blog: any, index: number) =>
                                <div className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                                    <Avatar className="w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src={blog?.thumbnail?.imageUrl} />

                                    <div className='mb-3'>
                                        <h3 className="text-lg font-medium mb-2 block hover:text-secondary-500">
                                            {blog?.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <LuCalendarDays size={14} />
                                            <span className="text-xs font-medium">ویرچوال لرن</span>
                                        </div>
                                    </div>

                                </div>
                            )
                            :
                            oldestBlogs?.map((blog: any, index: number) =>
                                <div className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                                    <Avatar className="w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src={blog?.thumbnail?.imageUrl} />

                                    <div className='mb-3'>
                                        <h3 className="text-lg font-medium mb-2 block hover:text-secondary-500">
                                            {blog?.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <LuCalendarDays size={14} />
                                            <span className="text-xs font-medium">ویرچوال لرن</span>
                                        </div>
                                    </div>

                                </div>
                            )
                    }

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

function CategoriesSidebar() {

    return (
        <section className="w-full relative">

            <div className="w-full p-4 pb-6 rounded-xl border-1 border-secondary-500 shadow-medium relative bg-white dark:bg-transparent">
                <p className="text-lg text-right font-semibold ">دسته‌بندی‌ها</p>

                <div className="w-full mt-10 flex flex-col gap-4">
                    {
                        blogCategories?.map((cat, index) =>
                            <Link key={index} href={`/blog/categories/${cat?.slug}`} className="w-full flex items-center justify-between gap-4 ">
                                <div className="flex items-center gap-2">
                                    <span className="p-1 rounded-sm bg-primary-400 "><Image width={24} height={24} alt={cat?.name} src={cat?.imageUrl}/></span>
                                    <span>{cat?.name}</span>
                                </div>
                                
                                <span className="flex items-center justify-center rounded-full bg-primary-400 text-sm min-w-6 min-h-6 text-white">{cat?.totalBlogs}</span>
                            </Link>
                        )
                    }



                </div>

            </div>
        </section>
    );
}


function CategoriesPosts({ blogs }: { blogs: any }) {
    if (!blogs) return null;

    // استخراج دسته‌بندی‌ها و ادغام همه بلاگ‌ها در یک لیست
    const categories = Object.entries(blogs);
    const allBlogs = categories?.flatMap(([_, category]: any) => category?.blogs);
    
    return (
        <section className="w-full">
            <div className="w-full flex justify-center">
                <Tabs
                    classNames={{ tabWrapper: "w-full", base: "flex justify-center" }}
                    className="w-full"
                    radius="full"
                    size="lg"
                    aria-label="Options"
                    isVertical={false}
                    color="secondary"
                    variant="underlined"
                >
                    {/* تب 'همه' شامل تمام بلاگ‌ها */}
                    <Tab
                        className="w-full"
                        key="all"
                        title={
                            <div className="flex gap-2 items-center">
                                <span>همه</span>
                                <span className="w-5 h-5 flex justify-center items-center rounded-full border-1 border-secondary-500 text-xs">
                                    {toPersianNumber(allBlogs?.length)}
                                </span>
                            </div>
                        }
                    >
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {allBlogs?.map((blog: any,index:number) => (
                                <BlogPost key={index} blog={blog} />
                            ))}
                        </div>
                    </Tab>

                    {/* دسته‌بندی‌های داینامیک */}
                    {categories?.map(([categoryKey, categoryData]: any) => (
                        <Tab
                            className="w-full"
                            key={categoryKey}
                            title={
                                <div className="flex gap-2 items-center">
                                    <span>{categoryKey}</span>
                                    <span className="w-5 h-5 flex justify-center items-center rounded-full border-1 border-secondary-500 text-xs">
                                        {toPersianNumber(categoryData?.totalBlogs)}
                                    </span>
                                </div>
                            }
                        >
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {categoryData?.blogs.length > 0 ? (
                                    categoryData?.blogs.map((blog: any,index:number) => (
                                        <BlogPost key={index} blog={blog} />
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500">هیچ بلاگی موجود نیست.</p>
                                )}
                            </div>
                        </Tab>
                    ))}
                </Tabs>
            </div>

            <div className="mt-16 w-full flex justify-center">
                <Button color="secondary" variant="shadow" radius="md" size="lg">
                    مشاهده‌ی بیشتر
                </Button>
            </div>
        </section>
    );
}

function BlogPost({ blog }: { blog: any }) {
   
    return (
        <div className="w-full shadow-medium rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm">
            <div className="p-4">
                <Link href={`/blogs/${blog?.slug}`} className="overflow-hidden h-[14rem] md:h-[12rem] md:aspect-video">
                    <Image
                        className="w-full h-full max-h-40 object-center object-cover hover:scale-110 hover:scale-y-[1.15] transition-transform rounded-xl"
                        width={450}
                        height={300}
                        alt={blog.title}
                        src={blog?.thumbnail?.imageUrl}
                    />
                </Link>
                <div className="mt-8">
                    <h5 className="font-semibold">{blog?.title}</h5>
                    <p className="mt-4 leading-6 text-xs" style={{ wordSpacing: "0.15rem" }}>
                        {blog?.description}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <FaRegComment />
                        <span className="text-sm">{toPersianNumber(blog?.comments)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <LuCalendarDays />
                        <span className="text-sm">{getTimeAgo(blog?.publishDate)} پیش</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    VirtualInfo,
    FeaturedSidebar,
    NewSteler,
    CategoriesSidebar,
    WhatIsVirtualLearn,
    CategoriesPosts,
    BlogPost
}