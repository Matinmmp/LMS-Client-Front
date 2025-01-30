import { getAllTeachersName, getTeacherByName } from "@/src/lib/apis/teacherApis";
import TeacherInfo from '../../../components/Teachers/TeacherInfo';
import { decodeTitle, encodeTitle } from "@/src/utils/functions";
import { notFound } from "next/navigation";



type Props = {
    params: { engName: string }
};

export async function generateStaticParams() {

    const teacherNames: any = await getAllTeachersName();

    return teacherNames?.teachersName?.map((teacher: { engName: string }) => ({
        engName: encodeURIComponent(encodeTitle(teacher.engName)),
    })) || [];
}



export default async function Teacher({ params: { engName } }: Props) {
    const name = await decodeURIComponent(engName);
    const data: any = await getTeacherByName(decodeTitle(name));


    if (data && data?.message === 'Teacher not found')
        notFound();

    if (data && data.success) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": data?.teacher?.seoMeta?.title,
            "url": `https://www.vc-virtual-learn.com/teachers/${name}`,
            "description": data?.teacher?.seoMeta?.description,
            "image": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}Contact-us-bro.svg`,//بعدا بذار
            "logo": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.svg`,//بعدا بذار
            "inLanguage": "fa",
            "isPartOf": {
                "@type": "WebSite",
                "name": "ویرچوال لرن",
                "url": "https://www.vc-virtual-learn.com"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": data?.teacher?.rating,
                "reviewCount": data?.teacher?.ratingNumber,
                "bestRating": "5",
            },
            "publisher": {
                "@type": "Organization",
                "name": "Virtual Learn",
                "url": "https://www.vc-virtual-learn.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png`, //پرش کن
                    "width": 512,
                    "height": 512
                }
            },

        }

        return (
            <section className=" flex flex-col items-center justify-center  " >

                <title>{data?.teacher?.seoMeta?.title}</title>
                <meta name="description" content={data?.teacher?.seoMeta?.description} />
                <meta name="keywords" content={data?.teacher?.seoMeta?.keywords?.join(' ,')} />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="5 days" />

                <meta property="og:title" content={data?.teacher?.seoMeta?.title} />
                <meta property="og:description" content={data?.teacher?.seoMeta?.description} />
                <meta property="og:url" content={`https://www.vc-virtual-learn.com/teachers/${name}`} />
                {/* بعدا عکسو بذار */}
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}teacher2.png`} />

                <meta name="twitter:title" content={data?.teacher?.seoMeta?.title} />
                <meta name="twitter:description" content={data?.teacher?.seoMeta?.description} />

                {/* بعدا عکسو بذار */}
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}teacher2.png`} />

                <link rel="canonical" href={`https://www.vc-virtual-learn.com/teachers/${name}`} />

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-24 flex items-center justify-center ">
                    <div className="w-full mt-24 lg:mt-32">
                        <TeacherInfo data={data.teacher} />
                    </div>
                </div>

            </section>
        );
    }
}