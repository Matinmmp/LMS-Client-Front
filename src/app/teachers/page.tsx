import Hero from "@/src/components/Teachers/Hero";
import TeachersList from "@/src/components/Teachers/TeachersList";
import { getTeachers } from "@/src/lib/apis/teacherApis";




export default async function Home() {

    const data: any = await getTeachers();



    if (data && data.success)


        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                    dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                    <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-16  flex items-center justify-center ">
                        <Hero />
                    </div>

                </div>

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">

                    <div className="w-full mt-6">
                        <TeachersList list={data.teachers} />
                    </div>
                </div>
            </section>
        );
}
