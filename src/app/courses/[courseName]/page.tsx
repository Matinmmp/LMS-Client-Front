import CourseInfo from "@/src/components/Courses/CourseInfo";
import { getAllCourseUrlNames, getCourseByName, } from "@/src/lib/apis/courseApis";
import { decodeTitle, encodeTitle } from "@/src/utils/functions";
import { cookies } from 'next/headers'

export async function generateStaticParams() {
    const coursUrlNames: any = await getAllCourseUrlNames();


    return coursUrlNames?.coursUrlNames?.map((course: { urlName: string }) => ({
        courseName: encodeURIComponent(encodeTitle(course?.urlName)),
    })) || [];
}

type Props = {
    params: { courseName: string }
};

export default async function CourseDetail({ params: { courseName } }: Props) {
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get('refresh_token');
    const access_token = cookieStore.get('access_token');


    const name = await decodeURIComponent(decodeTitle(courseName));

    const data: any = await getCourseByName(name, refresh_token?.value, access_token?.value)

   
    if (data && data.success)
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl mt-28 px-4 md:px-8 2xl:px-2 flex items-center justify-center ">
                    <CourseInfo data={data?.courseData} isPurchased={data?.isPurchased}/>
                </div>

            </section>
        );

}
