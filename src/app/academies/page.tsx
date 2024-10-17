
import AcademiesList from "@/src/components/Academies/AcademiesList";
import Hero from "@/src/components/Academies/Hero";

import { getAcademies } from "@/src/lib/apis/academyApis";




export default async function Home() {

    const data: any = await getAcademies();

 

    if (data && data.success)
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                    <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-16 flex items-center justify-center ">
                        <Hero />
                    </div>

                </div>

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                    <div className="w-full mt-6">
                        <AcademiesList list={data.academies} />
                    </div>
                </div>
            </section>
        );
}
