import { CategoriesPosts, WhatIsVirtualLearn } from '@/src/components/blog/home/Components';
import { CourseSlider } from '@/src/components/blog/home/MainSlider';
import { getBlogsByCategories } from '@/src/lib/apis/blogApis';
import { getHomeLastCourses } from '@/src/lib/apis/homeApis';

export default async function CategoriesPage() {
    let data1: any
    let data2: any

    [data1, data2] = await Promise.allSettled([
        getHomeLastCourses(),
        getBlogsByCategories(),
    ]);

     
    return (
        <>
            <section className=" flex flex-col items-center justify-center  " >

                <div className="background z-[-1] !absolute">
                    <span className=" dark:bg-[#1582ff37] " />
                </div>

                <div className='mt-8 w-full max-w-[1380px] px-4 md:px-8 2xl:px-2 items-center justify-center '>
                    {data1?.value?.courses && <CourseSlider courses={data1?.value?.courses} />}
                </div>

                <div className='mt-36  max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center '>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-center'>جدیدترین مقالات ویرچوال لرن</h1>
                </div>

                <div className='w-full mt-16  max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center '>
                    {data1?.value?.courses && <CategoriesPosts blogs={data2?.value?.data} />}
                </div>

            </section>
            <WhatIsVirtualLearn />
        </>
    )

}