
import MainSlider from '@/src/components/blog/home/MainSlider';
import { FeaturedPosts, ReceentPosts } from '@/src/components/blog/home/ServerComponents';
import { VirtualInfo, FeaturedSidebar, NewSteler, CategoriesSidebar, WhatIsVirtualLearn } from '@/src/components/blog/home/Components';
import { getBlogsInSlider, getLatestBlogs, getOldestAndPopularBlogs, getSpecialBlogs } from '@/src/lib/apis/blogApis';

export default async function Home() {
    let data1: any
    let data2: any
    let data3: any
    let data4: any
    [data1, data2, data3, data4] = await Promise.allSettled([
        getBlogsInSlider(),
        getSpecialBlogs(),
        getLatestBlogs(),
        getOldestAndPopularBlogs()
    ]);

    console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddd",data1)



    return (
        <>
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


                    <div className="background z-[-1] !absolute">
                        <span className=" dark:bg-[#1582ff37] " />

                    </div>

                    <div className='mt-4'></div>
                    {data1?.value?.blogs ? <MainSlider blogs={data1?.value?.blogs} /> : ''}



                    <div className='mt-10 lg:mt-20 w-full flex flex-col lg:flex-row gap-6'>
                        <div className='w-full lg:w-[70%] flex flex-col gap-20'>
                            {data2?.value?.blogs ? <FeaturedPosts blogs={data2?.value?.blogs} /> : ''}
                            {data3?.value?.blogs ? <ReceentPosts blogs={data3?.value?.blogs} /> : ''}


                        </div>

                        <aside className='mt-10 w-full lg:w-[30%] flex flex-col gap-8'>
                            <VirtualInfo />
                            {data4?.value?.oldestBlogs ?
                                <FeaturedSidebar oldestBlogs={data4?.value?.oldestBlogs} popularBlogs={data4?.value?.popularBlogs} /> : ''}
                            <NewSteler />
                            <CategoriesSidebar />
                        </aside>

                    </div>
                </div>

            </section>
            <WhatIsVirtualLearn />
        </>
    )

}