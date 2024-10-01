
import FavoriteCourses from "@/src/components/HomePage/FavoriteCourses";
import Hero from "@/src/components/HomePage/Hero";
import LastCourses from "@/src/components/HomePage/LastCourses";
import FavoritAcademies from "@/src/components/HomePage/FavoritAcademies";
import FavoritTeachers from "@/src/components/HomePage/FavoritTeachers";
import Comments from "@/src/components/HomePage/Comments";
import FAQ from "@/src/components/HomePage/FAQ";
// import dynamic from "next/dynamic";
// const Comments = dynamic(() => import("@/src/components/HomePage/Comments"), {
//     ssr: false, // اگر نیاز دارید که این کامپوننت فقط در سمت کلاینت رندر شود
//   });

export default async function Home() {

    return (
        <section className=" flex flex-col items-center justify-center  " >

            <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


                <div className="mt-20 ">
                    <div className="background z-[1] !absolute">
                        <span className="bg-[#1582ff37] dark:bg-none " />
                        {/* <span/> */}
                    </div>
                    <Hero />
                </div>

                {/* <div className="w-full mt-10">
                    <VirtualPlus />
                </div> */}

                <div className="w-full mt-24">
                    <LastCourses />
                </div>

                <div className="w-full mt-24 ">
                    <FavoriteCourses />
                </div>

                <div className="w-full mt-24 ">
                    <FavoritAcademies />
                </div>
                <div className="w-full mt-24 ">
                    <FavoritTeachers />
                </div>
                <div className="w-full mt-28 md:mt-52 ">
                    <Comments />
                </div>

                <div className="w-full mt-20 md:mt-32 ">
                    <FAQ />
                </div>
                
            </div>

        </section>
    );
}
