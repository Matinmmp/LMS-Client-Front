import CourseInfo from "@/src/components/Courses/CourseInfo";
import { getAllCourseUrlNames, getCourseByName, } from "@/src/lib/apis/courseApis";
import { decodeTitle, encodeTitle, secondsToTimeString } from "@/src/utils/functions";
import { cookies } from 'next/headers'
import Script from "next/script";

export async function generateStaticParams() {
    const coursUrlNames: any = await getAllCourseUrlNames();


    return coursUrlNames?.coursUrlNames?.map((course: { urlName: string }) => ({
        courseName: encodeURIComponent(encodeTitle(course?.urlName)),
    })) || [];
}

type Props = {
    params: { courseName: string }
};

export default async function CourseDetail({ params: { courseName } }: Props) {
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get('refresh_token');
    const access_token = cookieStore.get('access_token');


    const name = await decodeURIComponent(decodeTitle(courseName));

    const data: any = await getCourseByName(name, refresh_token?.value, access_token?.value)

    if (data && data.success) {

        const schema = {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": data?.courseData?.course?.seoMeta?.title || data?.courseData?.course?.name, // عنوان دوره
            "description": data?.courseData?.course?.seoMeta?.description, // توضیحات دوره
            "provider": {
                "@type": "Organization",
                "name": "Virtual Learn", // نام پلتفرم شما
                "url": "https://www.vc-virtual-learn.com"
            },
            "isPartOf": {
                "@type": "WebSite",
                "name": "ویرچوال لرن",
                "url": "https://www.vc-virtual-learn.com"
            },
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "name": data?.courseData?.course?.name, // نام دوره (نسخه)
                "courseMode": 'Online', // حالت برگزاری دوره
                "startDate": data?.courseData?.course?.createDate, // تاریخ شروع دوره
                "endDate": data?.courseData?.course?.endDate, // تاریخ پایان دوره (در صورت وجود)
                "instructor": {
                    "@type": "Person",
                    "name": data?.courseData?.teacher?.engName, // نام مدرس دوره
                    "url": `https://www.vc-virtual-learn.com/teachers/${encodeTitle(data?.courseData?.teacher?.engName)}` // لینک به پروفایل مدرس
                },
                "location": {
                    "@type": "VirtualLocation",
                    "url": `https://www.vc-virtual-learn.com/courses/${encodeTitle(data?.courseData?.course?.urlName)}` // آدرس URL صفحه دوره
                }
            },
            "image": data?.courseData?.course?.thumbnail?.imageUrl, // تصویر دوره

            "duration": secondsToTimeString(data?.courseData?.course?.courseLength), // مدت زمان دوره

            // "isAccessibleForFree": { data?.courseData?.course?.isFree? "true": "false" }, // آیا رایگان است؟
            "offers": {
                "@type": "Offer",
                "price": data?.courseData?.course?.price, // قیمت دوره
                "priceCurrency": "IRR", // واحد پول
                "availability": true, // وضعیت دوره
                "url": `https://www.vc-virtual-learn.com/courses/${encodeTitle(data?.courseData?.course?.urlName)}`  // لینک به دوره
            }
        }


        return (
            <section className=" flex flex-col items-center justify-center" >
                <title>{data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name}</title>
                <meta name="description" content={data?.courseData?.course?.seoMeta?.description} />
                <meta name="keywords" content={data?.courseData?.course?.seoMeta?.keywords} />
                <meta name="robots" content="noindex, follow" />
                <meta name="revisit-after" content="5 days" />

                <meta property="og:title" content={data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name} />
                <meta property="og:description" content={data?.courseData?.course?.seoMeta?.description} />
                <meta property="og:url" content={`https://www.vc-virtual-learn.com/courses/${courseName}`} />
                <meta property="og:image" content={data?.courseData?.course?.thumbnail?.imageUrl} />

                <meta name="twitter:title" content={data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name} />
                <meta name="twitter:description" content={data?.courseData?.course?.seoMeta?.description} />

                {/* بعدا عکسو بذار */}
                <meta name="twitter:image" content={data?.courseData?.course?.thumbnail?.imageUrl} />

                <link rel="canonical" href={`https://www.vc-virtual-learn.com/courses/${courseName}`} />

                <div className="w-full max-w-7xl mt-28 px-4 md:px-8 2xl:px-2 flex items-center justify-center ">
                    <CourseInfo data={data?.courseData} isPurchased={data?.isPurchased} />
                </div>
                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            </section>
        );
    }
}
