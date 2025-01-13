import { CourseCard } from "@/src/components/Shared/CourseCard";
import { searchCourse } from "@/src/lib/apis/courseSearchApis";
import { ImBooks } from "react-icons/im";
import { CoursePagination } from "./Courses";
import { Problem } from "../Shared/Problem";

type Props = {
    object: any,
};

const CoursesList = async ({ object }: Props) => {
    const data: any = await searchCourse(object);

    return (
        <>
            {data?.courses?.length ?
                <div className="sticky top-[20vh] right-[70%] -ms-10 lg:-ms-24 z-10 w-0 h-0">
                    <ImBooks className=" text-[12rem] md:text-[16rem] xl:text-[20rem] text-primary-400 dark:text-primary-400" />
                </div> : ''}

            {
                data?.success ?
                    (data?.courses?.length ?
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 relative z-20">
                            {data.courses.map((course: any, index: number) => <CourseCard key={index} data={course} />)}
                        </div>
                        :
                        <div className='w-full mt-20'>
                            <p className="text-xl md:text-2xl font-semibold text-center">دوره ی مورد نظر شما یافت نشد !</p>
                            <p className="mt-4 text-base md:text-lg text-center">اگر دوره که دنبال آن هستید در سایت وجود ندارد از قسمت ارتباط با ما درخواست خود را برای افزودن دوره دلخواه ثبت کنید.</p>
                        </div>) :
                    <div className="mt-20">
                        <Problem />
                    </div>
            }
            {data?.success && <CoursePagination currentPage={data.currentPage} totalPage={data.totalPage} />}
        </>
    )
}

export default CoursesList;