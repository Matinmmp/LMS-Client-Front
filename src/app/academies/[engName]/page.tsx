
import AcademyInfo from "@/src/components/Academies/AcademyInfo";
import Hero from "@/src/components/Academies/Hero";

import { getAcademyByName } from "@/src/lib/apis/academyApis";


type Props = {
    params: { engName: string }
};



export default async function Academy({ params: { engName } }: Props) {
    const name = await decodeURIComponent(engName);

    const data: any = await getAcademyByName(name);

    console.log(data)

    if (data && data.success)
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-24 flex items-center justify-center ">
                    <div className="w-full mt-32">
                        <AcademyInfo data={data.academy} />
                    </div>
                </div>

            </section>
        );
}
