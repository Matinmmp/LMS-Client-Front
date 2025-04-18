import { FaRegComment, FaUser } from "react-icons/fa";
import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { getTimeAgo, toPersianNumber } from "@/src/utils/functions";
import { blogCategories } from "@/src/config/site";

function FeaturedPosts({ blogs }: { blogs: any }) {
    return (
        <section className="w-full">
            <h2 className=" text-2xl lg:text-3xl font-semibold underline decoration-secondary-500
             decoration-wavy decoration-[2px] underline-offset-[1rem] lg:underline-offset-[1.5rem]">پست‌های ویژه</h2>

            <div className="w-full mt-16 p-6 rounded-xl border-1 border-secondary-500 shadow-medium bg-white dark:bg-transparent">
                <div className="flex flex-col md:flex-row gap-6">

                    <div className="w-full md:w-1/2">
                        <Link href={`blog/blogs/${blogs[0]?.slug}`} className="w-full flex flex-col">
                            <Image src={blogs[0]?.thumbnail?.imageUrl} alt="1" width={500} height={300}
                                className="w-full rounded-md aspect-video object-cover object-center shadow-medium" />

                            <h3 className="mt-3 text-xl font-semibold hover:text-secondary-500 cursor-pointer">{blogs[0]?.title}</h3>

                            <div className="mt-4 flex items-center gap-4 text-[#555555] dark:text-gray-200">
                                <div className="flex items-center gap-2">
                                    <FaUser size={14} />
                                    <span className="text-xs font-medium">ویرچوال لرن</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LuCalendarDays size={14} />
                                    <span className="text-xs font-medium">{getTimeAgo(blogs[0]?.publishDate)}</span>
                                </div>

                            </div>
                            <p className='mt-2 leading-7 text-[#555555] dark:text-gray-200'>{blogs[0]?.description}</p>
                            <div className='mt-5'>
                                <Button variant="shadow" color="secondary" radius="full" className="font-bold">مطالعه‌ی بیشتر</Button>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="pe-3 overflow-auto scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0 md:col-6">

                            {
                                blogs?.slice(1)?.map((blog: any, index: number) =>
                                    <Link  key={index}  href={`/blogs/${blog?.slug}`} className="mb-6 flex flex-col sm:flex-row gap-4 pb-6 border-b border-border">
                                        <Image alt={blog?.title} src={blog?.thumbnail?.imageUrl} width="192" height="108" className="w-full aspect-video sm:h-[85px] sm:w-auto rounded object-cover" />
                                        <div className='mt-1'>
                                            <h3 className="text-lg mb-2 block hover:text-secondary-500">
                                                {blog?.title}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <LuCalendarDays size={14} />
                                                <span className="text-xs font-medium">ویرچوال لرن</span>
                                            </div>
                                        </div>
                                    </Link>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReceentPosts({ blogs }: { blogs: any }) {

    return (
        <section className="w-full relative">
            <h2 className="text-2xl lg:text-3xl text-right font-semibold underline decoration-secondary-500
                decoration-wavy decoration-[2px] underline-offset-[1rem] lg:underline-offset-[1.2rem]">پست‌های اخیر</h2>

            <div className="mt-10 w-full p-4 pb-6 rounded-xl border-1 border-secondary-500 shadow-medium relative bg-white dark:bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">

                    {
                        blogs?.map((blog: any, index: number) =>
                            <Link key={index} href={`blog/blogs/${blog?.slug}`} className="w-full flex flex-col">
                                <Image src={blog?.thumbnail?.imageUrl} alt="1" width={500} height={300}
                                    className="w-full rounded-md aspect-video object-cover object-center shadow-medium" />
                                <h3 className="mt-3 text-xl  font-medium hover:text-secondary-500 cursor-pointer">
                                    {blog?.title}
                                </h3>
                                <div className="mt-4 flex items-center gap-4 text-[#555555] dark:text-gray-200">
                                    <div className="flex items-center gap-2">
                                        <FaUser size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">{getTimeAgo(blogs[0]?.publishDate)}</span>
                                    </div>

                                </div>
                                <p className='mt-4 leading-7 text-[#555555] dark:text-gray-200'>{blog?.description}</p>
                                <div className='mt-5'>
                                    <Button variant="shadow" color="secondary" radius="full" className="font-bold">مطالعه‌ی بیشتر</Button>
                                </div>
                            </Link>)
                    }


                </div>
                <div className="w-full mt-20 flex justify-center">
                    <Button  variant="shadow" color="secondary" size="lg" className="font-bold">مشاهده‌ی همه</Button>
                </div>
            </div>
        </section>
    );
}

function BlogPost({ blog }: { blog: any }) {

    return (
        <div className="w-full shadow-medium rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm">
            <div className="p-4">
                <Link href={`/blog/blogs/${blog?.slug}`} className="overflow-hidden h-[14rem] md:h-[12rem] md:aspect-video">
                    <Image
                        className="w-full h-full max-h-40 object-center object-cover hover:scale-110 hover:scale-y-[1.15] transition-transform rounded-xl"
                        width={450}
                        height={300}
                        alt={blog.title}
                        src={blog?.thumbnail?.imageUrl}
                    />
                </Link>
                <div className="mt-8">
                    <Link href={`/blog/blogs/${blog?.slug}`}><h5 className="font-semibold">{blog?.title}</h5></Link>
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
                        <span className="text-sm">{toPersianNumber(getTimeAgo(blog?.publishDate))}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WhatIsVirtualLearn() {

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <section className="w-full mt-40 max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                <div className="w-full rounded-2xl shadow-medium p-8 py-14 bg-white dark:bg-black/40">
                    <div className="flex flex-col md:flex-row items-center gap-10 relative">
                        <Image priority alt="لوگوی ویرچوال لرن، پلتفرم آموزش برنامه‌نویسی" className="w-36 h-36" height={400} width={400}
                            src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                        <span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" />

                        <div className="">
                            <h2 className="text-2xl lg:text-3xl font-semibold">ویرچوال لرن</h2>
                            <p className="mt-6 leading-9 font-medium" style={{ wordSpacing: '0.2rem' }}>
                                Virtual Learn پلتفرمی پیشرو در ارائه دوره‌های آموزشی برنامه‌نویسی و توسعه وب از بهترین آکادمی‌های جهان، با زیرنویس فارسی تولید شده توسط هوش مصنوعی است. اما یادگیری فقط محدود به دوره‌ها نیست! در بخش بلاگ Virtual Learn می‌توانید جدیدترین مقالات آموزشی و تحلیلی را در موضوعات متنوعی مانند هوش مصنوعی، توسعه وب، برنامه‌نویسی فرانت‌اند و بک‌اند، امنیت سایبری، دیتابیس، فریمورک‌های مدرن و فناوری‌های روز دنبال کنید.

                                ما در اینجا تلاش می‌کنیم تا با ارائه راهنماهای جامع، آموزش‌های پروژه‌محور، مقایسه ابزارهای توسعه و جدیدترین اخبار دنیای تکنولوژی، مسیر یادگیری شما را هموارتر کنیم. اگر به بهترین منابع آموزشی و مقالات عمیق و کاربردی علاقه‌مند هستید، بلاگ Virtual Learn همان جایی است که به دنبال آن می‌گردید! 🚀
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </div>
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
                                    <span className="p-0.5 rounded-sm bg-primary-400 "><Image width={28} height={28} alt={cat?.name} src={cat?.imageUrl} /></span>
                                    <span>{cat?.name}</span>
                                </div>

                                <span className="flex items-center justify-center rounded-full bg-primary-400 text-sm min-w-6 min-h-6 text-white">{toPersianNumber(cat?.totalBlogs)}</span>
                            </Link>
                        )
                    }



                </div>

            </div>
        </section>
    );
}


export {
    FeaturedPosts,
    ReceentPosts,
    BlogPost,
    WhatIsVirtualLearn,
    CategoriesSidebar
}

