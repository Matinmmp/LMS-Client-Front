import Hero from "@/src/components/Courses/Hero";
import { Suspense } from "react";
import CoursesList from "../../components/Courses/CoursesList";
import Courses from "@/src/components/Courses/Courses";


export default async function CourseSearch(p: any) {

    const params = p.searchParams;


    // searchCourse
    let object: Record<string, any> = {
        page: '1'
    };

    if (params.searchText) object.searchText = params.searchText;
    if (params.price) object.price = params.price;
    if (params.order) object.order = params.order;
    if (params.page) object.page = params.page;


    if (params.category) {
        if (Array.isArray(params.category)) object.categories = params.category
        else object.categories = [params.category]
    }

    if (params.teacher) {
        if (Array.isArray(params.teacher)) object.teachers = params.teacher
        else object.teachers = [params.teacher]
    }

    if (params.academy) {
        if (Array.isArray(params.academy)) object.academies = params.academy
        else object.academies = [params.academy]
    }




    return (
        <section className=" flex flex-col items-center justify-center  " >

            <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                    dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                <Hero />
            </div>

            <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                <Courses>
                    <Suspense fallback={<div>loading</div>}>

                        <CoursesList object={object}/>

                    </Suspense>
                </Courses>
            </div>
        </section>
    );
}
