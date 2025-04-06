import BlogInfo from "@/src/components/blog/BlogInfo";
import { getBlogBySlug } from "@/src/lib/apis/blogApis";
import { getCourseByName, } from "@/src/lib/apis/courseApis";
import { decodeTitle, secondsToTimeString } from "@/src/utils/functions";
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

export default async function BlogDetail({ params: { blogName } }: Props) {
    
    const data:any = await getBlogBySlug(blogName)
    console.log(data)

    if (data && data?.message === "بلاگ مورد نظر یافت نشد")
        notFound();

    if (data && data.success) {
    const blog = data?.blog;
    const schema: any = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": data?.courseData?.course?.seoMeta?.title || data?.courseData?.course?.name,
        "description": data?.courseData?.course?.seoMeta?.description,
        "provider": {
            "@type": "Organization",
            "name": "Virtual Learn",
            "url": "https://www.vc-virtual-learn.com"
        },
        "isPartOf": {
            "@type": "WebSite",
            "name": "ویرچوال لرن",
            "url": "https://www.vc-virtual-learn.com"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "name": data?.courseData?.course?.name,
            "courseMode": "Online",
            "startDate": data?.courseData?.course?.createDate,
            "endDate": data?.courseData?.course?.endDate,
            "courseWorkload": "PT2H", // 2 ساعت در هفته به فرمت ISO 8601
            "courseSchedule": "Flexible", // برای جلوگیری از خطا اضافه شده
       

            "aggregateRating":{
                "@type": "AggregateRating",
                "ratingValue": 4.7,
                "reviewCount": 134,
                "bestRating": "5"
            }
        },
    };

    return (
        <>
            <section className=" flex flex-col items-center justify-center" >
                <meta property="og:image" content={blog?.thumbnail?.imageUrl} />
                <title>{blog?.seoMeta?.title ? blog?.seoMeta?.title : blog?.name}</title>
                <meta name="description" content={blog?.seoMeta?.description} />
                <meta name="keywords" content={blog?.seoMeta?.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="5 days" />

                <meta property="og:title" content={blog?.seoMeta?.title ? blog?.seoMeta?.title : blog?.name} />
                <meta property="og:description" content={blog?.seoMeta?.description} />
                <meta property="og:url" content={`https://www.vc-virtual-learn.com/courses/${blogName}`} />
                <meta property="og:image" content={blog?.thumbnail?.imageUrl} />

                <meta name="twitter:title" content={blog?.seoMeta?.title ? blog?.seoMeta?.title : data?.blog?.name} />
                <meta name="twitter:description" content={blog?.seoMeta?.description} />

                {/* بعدا عکسو بذار */}
                <meta name="twitter:image" content={blog?.thumbnail?.imageUrl} />

                <link rel="canonical" href={`https://www.vc-virtual-learn.com/courses/${blogName}`} />

                <BlogInfo data={blog} />

                {/* <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> */}

            </section>
            <div className="gap-10 relative"><span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" /></div>
        </>
    );
    // }
}
}
