import BlogInfo from "@/src/components/blog/BlogInfo";
import { getCourseByName, } from "@/src/lib/apis/courseApis";
import { decodeTitle } from "@/src/utils/functions";
import { cookies } from 'next/headers'
import { notFound } from "next/navigation";
import Script from "next/script";

// export async function generateStaticParams() {
//     const coursUrlNames: any = await getAllCourseUrlNames();


//     return coursUrlNames?.coursUrlNames?.map((course: { urlName: string }) => ({
//         courseName: encodeURIComponent(encodeTitle(course?.urlName)),
//     })) || [];
// }

type Props = {
    params: { blogName: string }
};

export default async function CourseDetail({ params: { blogName } }: Props) {
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get('refresh_token');
    const access_token = cookieStore.get('access_token');


    const name = await decodeURIComponent(decodeTitle(blogName));

    const data: any = await getCourseByName(name, refresh_token?.value, access_token?.value)


    // if (data && data?.message === 'دوره‌ای با این نام یافت نشد')
    //     notFound();

    if (data && data.success) {

        // const schema: any = {
        //     "@context": "https://schema.org",
        //     "@type": "Course",
        //     "name": data?.courseData?.course?.seoMeta?.title || data?.courseData?.course?.name,
        //     "description": data?.courseData?.course?.seoMeta?.description,
        //     "provider": {
        //         "@type": "Organization",
        //         "name": "Virtual Learn",
        //         "url": "https://www.vc-virtual-learn.com"
        //     },
        //     "isPartOf": {
        //         "@type": "WebSite",
        //         "name": "ویرچوال لرن",
        //         "url": "https://www.vc-virtual-learn.com"
        //     },
        //     "hasCourseInstance": {
        //         "@type": "CourseInstance",
        //         "name": data?.courseData?.course?.name,
        //         "courseMode": "Online",
        //         "startDate": data?.courseData?.course?.createDate,
        //         "endDate": data?.courseData?.course?.endDate,
        //         "courseWorkload": "PT2H", // 2 ساعت در هفته به فرمت ISO 8601
        //         "courseSchedule": "Flexible", // برای جلوگیری از خطا اضافه شده
        //         "instructor": {
        //             "@type": "Person",
        //             "name": data?.courseData?.teacher?.engName,
        //             "url": `https://www.vc-virtual-learn.com/teachers/${encodeTitle(data?.courseData?.teacher?.engName)}`
        //         },
        //         "location": {
        //             "@type": "VirtualLocation",
        //             "url": `https://www.vc-virtual-learn.com/courses/${encodeTitle(data?.courseData?.course?.urlName)}`
        //         }
        //     },
        //     "image": data?.courseData?.course?.thumbnail?.imageUrl,
        //     "duration": secondsToTimeString(data?.courseData?.course?.courseLength),
        //     "offers": {
        //         "@type": "Offer",
        //         "price": data?.courseData?.course?.price,
        //         "priceCurrency": "IRR",
        //         "availability": "InStock",
        //         "category": data?.courseData?.course?.category || "Programming",
        //         "url": `https://www.vc-virtual-learn.com/courses/${encodeTitle(data?.courseData?.course?.urlName)}`
        //     }
        // };

        // // اضافه کردن امتیاز دوره در صورت وجود
        // if (data?.courseData?.course?.rating && data?.courseData?.course?.ratingNumber) {
        //     schema.aggregateRating = {
        //         "@type": "AggregateRating",
        //         "ratingValue": data?.courseData?.course?.rating.toString(),
        //         "reviewCount": data?.courseData?.course?.ratingNumber.toString(),
        //         "bestRating": "5"
        //     };
        // }



        return (
            <>
                <section className=" flex flex-col items-center justify-center" >
                    <meta property="og:image" content={data?.courseData?.course?.thumbnail?.imageUrl} />
                    <title>{data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name}</title>
                    <meta name="description" content={data?.courseData?.course?.seoMeta?.description} />
                    <meta name="keywords" content={data?.courseData?.course?.seoMeta?.keywords} />
                    <meta name="robots" content="index, follow" />
                    <meta name="revisit-after" content="5 days" />

                    <meta property="og:title" content={data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name} />
                    <meta property="og:description" content={data?.courseData?.course?.seoMeta?.description} />
                    <meta property="og:url" content={`https://www.vc-virtual-learn.com/courses/${blogName}`} />
                    <meta property="og:image" content={data?.courseData?.course?.thumbnail?.imageUrl} />

                    <meta name="twitter:title" content={data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name} />
                    <meta name="twitter:description" content={data?.courseData?.course?.seoMeta?.description} />

                    {/* بعدا عکسو بذار */}
                    <meta name="twitter:image" content={data?.courseData?.course?.thumbnail?.imageUrl} />

                    <link rel="canonical" href={`https://www.vc-virtual-learn.com/courses/${blogName}`} />

                    <div className="w-full max-w-7xl mt-28 px-4 md:px-8 2xl:px-2 flex items-center justify-center ">
                        <BlogInfo blogName={name} />
                    </div>
                    {/* <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> */}

                </section>
                <div className="gap-10 relative"><span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" /></div>
            </>
        );
    }
}
