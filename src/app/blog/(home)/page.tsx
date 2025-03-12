
import MainSlider from '@/src/components/blog/home/MainSlider';
import BlogHeader from '../../../components/blog/Header';
import Hero from '@/src/components/HomePage/Hero';
import FeaturedPosts from '@/src/components/blog/home/FeaturedPosts';

export default function Home() {

    return (<section className=" flex flex-col items-center justify-center  " >

        <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


            <div className="background z-[-1] !absolute">
                <span className=" dark:bg-[#1582ff37] " />

            </div>

            <MainSlider />

            <div className='mt-32'></div>

            <div className='w-full flex flex-col lg:flex-row'>
                <div className=' w-[70%]'>
                    <FeaturedPosts />
                </div>
                <div className=' w-[30%]'>

                </div>

            </div>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>
            <p>ffff</p>

        </div>

    </section>)

}