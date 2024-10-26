import AcademyInfo from "@/src/components/Academies/AcademyInfo";
import { getAcademyByName, getAllAcademyNames } from "@/src/lib/apis/academyApis";


type Props = {
    params: { engName: string }
};

export async function generateStaticParams() {
 
    const academyNames:any = await getAllAcademyNames();
    
    console.log('academyNames1',academyNames)

 
    return academyNames?.academiesName?.map((academy: { engName: string }) => ({
        engName: encodeURIComponent(academy.engName),
    })) || [];
}



export default async function Academy({ params: { engName } }: Props) {
    const name = await decodeURIComponent(engName);
    const data: any = await getAcademyByName(name);


    if (data && data.success)
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-24 flex items-center justify-center ">
                    <div className="w-full mt-24 lg:mt-32">
                        <AcademyInfo data={data.academy} />
                    </div>
                </div>

            </section>
        );
}
