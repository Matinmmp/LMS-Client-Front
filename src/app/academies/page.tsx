
import AcademiesList from "@/src/components/Academies/AcademiesList";
import Hero from "@/src/components/Academies/Hero";

import { getAcademies } from "@/src/lib/apis/academyApis";




export default async function Home() {

    const data: any = await getAcademies();

    console.log(data)


    if (data && data.success)
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


                    <div className="mt-20 lg:mt-32 ">
                        {/* <div className="background z-[-1] !absolute">
                            <span className=" dark: bg-success-500 opacity-50" />
                        </div> */}
                        <Hero />
                    </div>
                    <div className="w-full mt-16 lg:mt-24">
                        <AcademiesList list={data.academies} />
                    </div>
                </div>
            </section>
        );
}
