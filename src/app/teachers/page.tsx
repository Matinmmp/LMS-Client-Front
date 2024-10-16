import Hero from "@/src/components/Teachers/Hero";
import TeachersList from "@/src/components/Teachers/TeachersList";
import { getTeachers } from "@/src/lib/apis/teacherApis";




export default async function Home() {

    const data: any = await getTeachers();

 

    if (data && data.success)


        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


                    <div className="mt-20 lg:mt-32 ">
                        {/* <div className="background z-[-1] !absolute">
                            <span className=" dark:bg-[#1582ff37] " />
                        </div> */}
                        <Hero />
                    </div>
                    <div className="w-full mt-16 lg:mt-24">
                        <TeachersList list={data.teachers}/>
                    </div>
                </div>
            </section>
        );
}
