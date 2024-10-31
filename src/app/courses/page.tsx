import CoursesList from "@/src/components/Courses/CoursesList";
import Hero from "@/src/components/Courses/Hero";
import { getAcademies, getAllAcademyNames } from "@/src/lib/apis/academyApis";
import { getAllTeachersName } from '@/src/lib/apis/teacherApis';


export default async function CourseSearch(p: any) {

    const data: any = await getAcademies();
    const academyNames: any = await getAllAcademyNames();
    const teacherNames: any = await getAllTeachersName();
    const params = p.searchParams;



    let s: Record<string, any> = {
        page: '1'
    };

    if (params.searchText) s.searchText = params.searchText;
    if (params.price) s.price = params.price;
    if (params.order) s.order = params.order;
    if (params.page) s.page = params.page;


    if (params.category) {
        if (Array.isArray(params.category)) s.categories = params.category
        else s.categories = [params.category]
    }

    if (params.teacher) {
        if (Array.isArray(params.teacher)) s.teachers = params.teacher
        else s.teachers = [params.teacher]
    }

    if (params.academy) {
        if (Array.isArray(params.academy)) s.academies = params.academy
        else s.academies = [params.academy]
    }

    console.log('1111111112', s)


    if (data && data.success && academyNames && academyNames.success && teacherNames && teacherNames.success)

        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                    dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                    <Hero />
                </div>

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                    <CoursesList list={data.academies} academiesList={academyNames?.academiesName} teachersList={teacherNames.teachersName} />
                </div>
            </section>
        );
}
