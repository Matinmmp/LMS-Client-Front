import { BlogPost, CategoriesSidebar } from '@/src/components/blog/home/Components';
import { CourseSlider } from '@/src/components/blog/home/MainSlider';
import { getBlogsByCategories, getBlogsByCategory } from '@/src/lib/apis/blogApis';
import { getHomeLastCourses } from '@/src/lib/apis/homeApis';

export default async function CategoriesPage(s: any) {
    console.log(s?.params?.catName);

    let data1: any
    let data2: any

    [data1, data2] = await Promise.allSettled([
        getHomeLastCourses(),
        getBlogsByCategory({ slug: s?.params?.catName }),
    ]);

    console.log('adsfadfadfs', data2)
    return (
        <section className="w-full flex flex-col items-center justify-center  " >

            <div className=' w-full max-w-[1400px] px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center'>
                <div className='mt-8 w-full max-w-[1380px] px-4 md:px-8 2xl:px-2 items-center justify-center '>
                    {data1?.value?.courses && <CourseSlider courses={data1?.value?.courses} />}
                </div>
                <div className="mt-36 w-full flex flex-col lg:flex-row gap-4">
                    <div className='w-full lg:w-[70%] border-1 border-secondary-500 bg-white dark:bg-black/30 backdrop-blur-sm rounded-2xl shadow-medium'>

                        <div className='p-4 lg:p-8'>
                            {data2?.value?.name ? <h1 className='text-xl lg:text-2xl xl:text-3xl font-medium'>{data2?.value?.name}</h1> : ''}

                            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
                                {
                                    data2?.value?.blogs?.map((blog: any, index: number) => <BlogPost blog={blog} key={index} />)
                                }


                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[30%]'>
                        <CategoriesSidebar />
                    </div>


                </div>
            </div>

            <div className="gap-10 relative"><span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" /></div>

        </section>
    )

}