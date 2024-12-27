import { getRelatedCourses } from "@/src/lib/apis/courseApis";
import { encodeTitle } from "@/src/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { ImBooks } from "react-icons/im";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

export async function RelatedCourse({ name }: { name: string }) {

    const data: any = await getRelatedCourses(name)


    if (data && data.success && data?.courses?.length)

        return (
            <div className="w-full hidden md:block bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl relative">
                <span className="absolute -right-2 top-4 h-12 w-2 bg-primary-400 rounded-r-md"></span>
                <div className="p-4 px-2 sm:p-6 flex flex-col gap-6">
                    <div className="px-2 sm:px-0 flex items-center gap-2 text-primary-400 dark:text-white">
                        <ImBooks size={40} className="text-primary-400 hidden lg:inline " />
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold">دوره‌های مرتبط</p>
                    </div>
                    <div className="mt-4 flex flex-col gap-4">
                        {data?.courses?.length &&
                            data?.courses?.map((item: any, index: number) => {
                                let link = encodeTitle(item?.urlName);
                                return (
                                    <div key={index} className="h-[4.4rem] p-2 flex items-center justify-between bg-[#edeff7]/ dark:bg-[#22334c]/ bg-primary-50 rounded-xl shadow-small border-1 border-primary-400">
                                        <Link href={`/courses/${link}`} className="flex items-center gap-4 ">
                                            <Image src={item.thumbnail.imageUrl} width={160} height={90} alt="" className="w-24 h-[3.375rem] rounded-lg" />
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