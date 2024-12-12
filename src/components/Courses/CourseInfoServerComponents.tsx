
import { getCourseDataByName } from "@/src/lib/apis/courseApis";
import { IoIosSchool } from "react-icons/io";

export async function CourseLessons() {
    const data: any = await getCourseDataByName('100 Days of Code: The Complete Python Pro Bootcamp');
    console.log(data)
    return (
        <div className="w-full bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">
            <div className="p-6 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-primary-400 dark:text-white">
                    <IoIosSchool size={40} />
                    <p className="text-2xl font-bold">سرفصل‌ها</p>
                </div>
            </div>
        </div>
    );
}