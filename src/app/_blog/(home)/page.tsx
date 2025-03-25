
import MainSlider from '@/src/components/blog/home/MainSlider';
import { FeaturedPosts, ReceentPosts } from '@/src/components/blog/home/ServerComponents';
import { VirtualInfo, FeaturedSidebar, NewSteler, CategoriesSidebar, WhatIsVirtualLearn } from '@/src/components/blog/home/Components';
import { getBlogsInSlider } from '@/src/lib/apis/blogApis';

export default async function Home() {

    const data: any = await getBlogsInSlider()
    console.log(data?.blogs);
 
    return (
        <>
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


                    <div className="background z-[-1] !absolute">
                        <span className=" dark:bg-[#1582ff37] " />

                    </div>

                    <div className='mt-4'></div>
                    <MainSlider blogs={data?.blogs}/>



                    <div className='mt-10 lg:mt-20 w-full flex flex-col lg:flex-row gap-6'>
                        <div className='w-full lg:w-[70%] flex flex-col gap-20'>
                            <FeaturedPosts />
                            <ReceentPosts />
                        </div>

                        <aside className='mt-10 w-full lg:w-[30%] flex flex-col gap-8'>
                            <VirtualInfo />
                            <FeaturedSidebar />
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