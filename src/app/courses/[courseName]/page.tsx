



// export async function generateStaticParams() {

import CourseInfo from "@/src/components/Courses/CourseInfo";
import { getCourseByName } from "@/src/lib/apis/courseApis";

//     const academyNames: any = await getAllAcademyNames();


//     return academyNames?.academiesName?.map((academy: { engName: string }) => ({
//         engName: encodeURIComponent(academy.engName),
//     })) || [];
// }

type Props = {
    params: { courseName: string }
};
const decodeTitle = (encodedTitle: string) => {
    return encodedTitle
        .replace(/_/g, ' ')      // جایگزینی _ با فاصله
        .replace(/-/g, '\u200C'); // جایگزینی - با نیم‌فاصله
};

export default async function CourseDetail({ params: { courseName } }: Props) {

    const name = await decodeTitle(decodeURIComponent(courseName));

    const data: any = await getCourseByName(name)

    if (data && data.success)
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl mt-28 px-4 md:px-8 2xl:px-2 flex items-center justify-center ">
                    {/* <div className="w-full max-w-lg  md:"> */}
                    <CourseInfo data={data?.courseData} />

                    {/* </div> */}

                </div>

            </section>
        );
}
