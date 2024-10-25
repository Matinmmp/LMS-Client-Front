import { getTeacherByName } from "@/src/lib/apis/teacherApis";
import TeacherInfo from '../../../components/Teachers/TeacherInfo';
 


type Props = {
    params: { engName: string }
};

// export async function generateStaticParams() {
//     // فرض بر این است که تابع `getAllAcademyNames` لیستی از نام‌های آکادمی‌ها را برمی‌گرداند.
//     const academyNames:any = await getAllAcademyNames();
    

//     // بررسی صحت داده‌ها و ایجاد پارامترهای استاتیک
//     return academyNames?.academiesName?.map((academy: { engName: string }) => ({
//         engName: encodeURIComponent(academy.engName),
//     })) || [];
// }



export default async function Teacher({ params: { engName } }: Props) {
    const name = await decodeURIComponent(engName);
    const data: any = await getTeacherByName(name);


    if (data && data.success)
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-24 flex items-center justify-center ">
                    <div className="w-full mt-24 lg:mt-32">
                        <TeacherInfo data={data.teacher} />
                    </div>
                </div>

            </section>
        );
}
