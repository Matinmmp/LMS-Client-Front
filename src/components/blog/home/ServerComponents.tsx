import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { getTimeAgo } from "@/src/utils/functions";

function FeaturedPosts({ blogs }: { blogs: any }) {
    return (
        <section className="w-full">
            <h2 className=" text-2xl lg:text-3xl font-semibold underline decoration-secondary-500
             decoration-wavy decoration-[2px] underline-offset-[1rem] lg:underline-offset-[1.5rem]">پست‌های ویژه</h2>

            <div className="w-full mt-16 p-6 pe-3 rounded-xl border-1 border-secondary-500 shadow-medium bg-white dark:bg-transparent">
                <div className="flex flex-col md:flex-row gap-6">

                    <div className="w-full md:w-1/2">
                        <Link href={`/blogs/${blogs[0]?.slug}`} className="w-full flex flex-col">
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
                                blogs?.map((blog: any, index: number) =>
                                    <Link  key={index}  href={`/blogs/${blog?.slug}`} className="mb-6 flex gap-4 pb-6 border-b border-border">
                                        <Image alt="Drone Software and Development" src={blog?.thumbnail?.imageUrl} width="120" height="80" className="h-[85px] rounded object-cover" />
                                        <div className='mt-1'>
                                            <h3 className="text-xl font-medium mb-2 block hover:text-secondary-500">
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
                            <Link key={index} href={`/blogs/${blog?.slug}`} className="w-full flex flex-col">
                                <Image src={blog?.thumbnail?.imageUrl} alt="1" width={500} height={300}
                                    className="w-full rounded-md aspect-video object-cover object-center shadow-medium" />
                                <h3 className="mt-3 text-xl lg:text-2xl font-medium hover:text-secondary-500 cursor-pointer">
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
                    <Button variant="shadow" color="secondary" size="lg" className="font-bold">مشاهده‌ی همه</Button>
                </div>
            </div>
        </section>
    );
}



export {
    FeaturedPosts,
    ReceentPosts,
    
}