import Hero from "@/src/components/HomePage/Hero";
import LastCourses from "@/src/components/HomePage/LastCourses";

export default async function Home() {

    return (
        <section className=" flex flex-col items-center justify-center  " >

            <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


                <div className="mt-20">
                    <Hero />
                </div>

                <div className="w-full mt-20">
                    <LastCourses />
                </div>


            </div>

        </section>
    );
}
