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
import { toPersianNumber } from "@/src/utils/functions";
import { blogCategories } from "@/src/config/site";
import { BlogPost } from "./ServerComponents";

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
                    <p className='mt-2 leading-7 text-[#555555] dark:text-gray-200 text-center'>بلاگ Virtual Learn جایی است که جدیدترین مقالات در حوزه برنامه‌نویسی، توسعه وب، هوش مصنوعی و دنیای فناوری را می‌یابید. محتوای تخصصی و کاربردی برای ارتقای دانش شما! 🚀</p>


                    <div className="mt-4 flex items-center gap-4 ">
                        <Link href={'/'}><IoLogoLinkedin size={24} className="text-secondary-500" /></Link>
                        <Link href="https://www.instagram.com/vc_virtual_learn"><FaSquareInstagram size={24} className="text-secondary-500" /></Link>
                        <Link href="https://t.me/VC_Virtual_Learn" ><FaTelegram size={24} className="text-secondary-500" /></Link>
                    </div>
                </div>
            </div>
        </section>
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
                                <Link href={`blog/blogs/${blog?.slug}`} key={index} className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                                    <Avatar className="min-w-20 max-w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src={blog?.thumbnail?.imageUrl} />

                                    <div className='mb-3'>
                                        <h3 className="font-medium mb-2 block hover:text-secondary-500">
                                            {blog?.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <LuCalendarDays size={14} />
                                            <span className="text-xs font-medium">ویرچوال لرن</span>
                                        </div>
                                    </div>

                                </Link>
                            )
                            :
                            oldestBlogs?.map((blog: any, index: number) =>
                                <Link key={index} href={`blog/blogs/${blog?.slug}`} className="mb-4 flex items-center gap-4 pb-6 border-b border-border border-secondary-500">
                                    <Avatar className="min-w-20 max-w-20 h-20" isBordered size={'lg'} color="secondary" radius="full" src={blog?.thumbnail?.imageUrl} />

                                    <div className='mb-3'>
                                        <h3 className="font-medium mb-2 block hover:text-secondary-500">
                                            {blog?.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <LuCalendarDays size={14} />
                                            <span className="text-xs font-medium">ویرچوال لرن</span>
                                        </div>
                                    </div>

                                </Link>
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

function CategoriesPosts({ blogs }: { blogs: any }) {
    const [sel, setSel] = useState<any>(null)
    if (!blogs) return null;

    // استخراج دسته‌بندی‌ها و ادغام همه بلاگ‌ها در یک لیست
    const categories = Object.entries(blogs);

    const uniqueBlogsMap = new Map();
    categories?.forEach(([_, category]: any) => {
        category?.blogs?.forEach((blog: any) => {
            if (!uniqueBlogsMap.has(blog._id)) {
                uniqueBlogsMap.set(blog._id, blog);
            }
        });
    });
    const allBlogs = Array.from(uniqueBlogsMap.values());
   

    let url = `blogs`
    if (categories.find((item) => item[0] === sel)) {
        const obj: any = categories.find((item) => item[0] === sel)
        url = `categories/${obj[1]?.slug}`
    }

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
                    onSelectionChange={setSel}

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
                            {allBlogs?.map((blog: any, index: number) => (
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
                                    categoryData?.blogs.map((blog: any, index: number) => (
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
                <Button href={url} as={Link} color="secondary" variant="shadow" radius="md" size="lg">
                    مشاهده‌ی بیشتر
                </Button>
            </div>
        </section>
    );
}


export {
    VirtualInfo,
    FeaturedSidebar,
    NewSteler,

    CategoriesPosts,

}