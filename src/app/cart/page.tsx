import { Problem } from "@/src/components/Shared/Problem";
import Hero from "@/src/components/Teachers/Hero";
import TeachersList from "@/src/components/Teachers/TeachersList";
import { getTeachers } from "@/src/lib/apis/teacherApis";
import { encodeTitle } from "@/src/utils/functions";




export default async function Home() {

    const data: any = await getTeachers();


    if (data) {
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <title>سبد خرید | Virtual Learn</title>
                <meta name="robots" content="noindex, nofollow" />
            </section>
        );
    }
}