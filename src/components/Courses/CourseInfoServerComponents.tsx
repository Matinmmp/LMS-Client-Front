import { getRelatedBlogsByCourseName } from "@/src/lib/apis/blogApis";
import { getRelatedCourses } from "@/src/lib/apis/courseApis";
import { encodeTitle, formatDate } from "@/src/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { ImBooks } from "react-icons/im";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { IoIosBook } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

export async function RelatedCourse({ name }: { name: string }) {

    const data: any = await getRelatedCourses(name)


    if (data && data.success && data?.courses?.length)

        return (
            <div className="w-full hidden md:block bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl relative">
                <span className="absolute -right-2 top-4 h-12 w-2 bg-success-400 rounded-r-md"></span>
                <div className="p-4 px-4 sm:py-6 flex flex-col gap-6">
                    <div className=" flex items-center gap-2 text-success-400 dark:text-white">
                        <ImBooks size={40} className="text-success-400 hidden lg:inline " />
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold">دوره‌های مرتبط</p>
                    </div>
                    <div className="mt-4 flex flex-col gap-4">
                        {data?.courses?.length &&
                            data?.courses?.map((item: any, index: number) => {
                                let link = encodeTitle(item?.urlName);
                                return (
                                    <div key={index} className="h-[4.4rem] p-2 flex items-center justify-between bg-primary-50 rounded-xl shadow-small border-1 border-primary-400">
                                        <Link href={`/courses/${link}`} className="flex items-center gap-4 ">
                                            <Image src={item.thumbnail.imageUrl} width={160} height={90} alt="" className="w-24 h-[3.375rem] rounded-lg shadow-small" />
                                            <span dir="ltr" className="font-semibold" >{item.name}</span>
                                        </Link>

                                        <Link href={`/courses/${link}`} className="flex items-center">
                                            <span className="text-sm font-semibold text-primary-400">مشاهده</span>
                                            <RiArrowLeftDoubleLine size={20} className=" text-primary-400" />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );

}

export async function RelatedBlog({ name }: { name: string }) {

    const data: any = await getRelatedBlogsByCourseName(name)


    if (data && data.success && data?.blogs?.length)

        return (
            <div className="w-full bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl relative">
                <span className="absolute -right-2 top-4 h-12 w-2 bg-danger-400 rounded-r-md"></span>
                <div className="p-4 px-4 sm:py-6 flex flex-col gap-6">

                    <div className=" flex items-center gap-2 text-danger-400 dark:text-white">
                        <IoIosBook size={40} className="text-danger-400 hidden lg:inline " />
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold">مقالات مرتبط</p>
                    </div>

                    <div className="mt-4 grid xl:grid-cols-2 gap-4">
                        {data?.blogs?.length &&
                            data?.blogs?.map((item: any, index: number) => {
                                let link = encodeTitle(item?.slug);
                                return (
                                    <div key={index} className="h-[5rem] md:h-[6.8rem] p-2 flex items-center gap-3 bg-primary-50/60 rounded-xl shadow-small border-1 border-secondary-400">
                                        
                                        <Image src={item.thumbnail.imageUrl} width={160} height={100} alt="" className="h-full w-full min-w-[8rem] max-w-[8rem] md:min-w-max !aspect-video rounded-xl shadow-small" />
                                      
                                        <div className="h-full py-1 md:py-2 flex flex-col justify-between">
                                            <Link href={`/blogs/${link}`} dir="rtl" className="text-sm md:teext-base font-medium line-clamp-1" >{item.title}</Link>
                                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                                <CiCalendar size={20}/>
                                                <span className="text-sm font-semibold">{formatDate(item?.lastUpdated)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );

}