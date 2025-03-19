
import MainSlider from '@/src/components/blog/home/MainSlider';
import FeaturedPosts from '@/src/components/blog/home/FeaturedPosts';
import { VirtualInfo, FeaturedSidebar, NewSteler,ReceentPosts,CategoriesSidebar,WhatIsVirtualLearn } from '@/src/components/blog/home/Components';

export default function Home() {

    return (
    <>
    <section className=" flex flex-col items-center justify-center  " >

        <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


            <div className="background z-[-1] !absolute">
                <span className=" dark:bg-[#1582ff37] " />

            </div>

            <div className='mt-4'></div>
            <MainSlider />

    

            <div className='mt-10 lg:mt-20 w-full flex flex-col lg:flex-row gap-6'>
                <div className='w-full lg:w-[70%] flex flex-col gap-20'>
                    <FeaturedPosts />
                    <ReceentPosts/>
                </div>
                
                <aside className='mt-10 w-full lg:w-[30%] flex flex-col gap-8'>
                    <VirtualInfo />
                    <FeaturedSidebar />
                    <NewSteler />
                    <CategoriesSidebar/>
                </aside>

            </div>
        </div>

    </section>
    <WhatIsVirtualLearn />
    </>
    )

}