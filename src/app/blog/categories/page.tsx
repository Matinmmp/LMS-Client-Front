
import MainSlider from '@/src/components/blog/home/MainSlider';
import FeaturedPosts from '@/src/components/blog/home/FeaturedPosts';
import { VirtualInfo, FeaturedSidebar, NewSteler, ReceentPosts, CategoriesSidebar, CourseSlider, CategoriesPosts } from '@/src/components/blog/home/Components';

export default function Home() {

    return (<section className=" flex flex-col items-center justify-center  " >



        <div className="background z-[-1] !absolute">
            <span className=" dark:bg-[#1582ff37] " />
        </div>

        <div className='mt-8 w-full max-w-[1380px] px-4 md:px-8 2xl:px-2 items-center justify-center '>
            <CourseSlider />
        </div>

        <div className='mt-36  max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center '>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-center'>جدیدترین مقالات ویرچوال لرن</h1>
        </div>

        <div className='w-full mt-16  max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center '>
            <CategoriesPosts />
        </div>



    </section>)

}