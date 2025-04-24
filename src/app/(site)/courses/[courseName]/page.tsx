import CourseInfo from "@/src/components/Courses/CourseInfo";
import { getAllCourseUrlNames, getCourseByName, recordCourseView, } from "@/src/lib/apis/courseApis";
import { decodeTitle, encodeTitle, secondsToTimeString } from "@/src/utils/functions";
import { cookies } from 'next/headers'
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateStaticParams() {
    const coursUrlNames: any = await getAllCourseUrlNames();


    return coursUrlNames?.courseUrlNames?.map((course: { urlName: string }) => ({
        courseName: encodeURIComponent(encodeTitle(course?.urlName)),
    })) || [];
}

type Props = {
    params: { courseName: string }
};

const isDiscountValid = (expireTime: string, percent: number) => {
    if (!expireTime || !percent) return false;
    const now = new Date().getTime();
    const expiry = new Date(expireTime).getTime();
    return expiry > now; // اگر تاریخ انقضا نگذشته باشد، تخفیف معتبر است
};


export default async function CourseDetail({ params: { courseName } }: Props) {
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get('refresh_token');
    const access_token = cookieStore.get('access_token');


    const name = await decodeURIComponent(decodeTitle(courseName));

    const data: any = await getCourseByName(name, refresh_token?.value, access_token?.value)


    if (data && data?.message === 'دوره‌ای با این نام یافت نشد')
        notFound();

    if (data && data.success) {
        recordCourseView(data?.courseData?.course?._id)
        const schema: any = {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": data?.courseData?.course?.seoMeta?.title || data?.courseData?.course?.name,
            "description": data?.courseData?.course?.seoMeta?.description,
            "provider": {
                "@type": "Organization",
                "name": "Virtual Learn",
                "url": "https://vc-virtual-learn.com"
            },
            "isPartOf": {
                "@type": "WebSite",
                "name": "ویرچوال لرن",
                "url": "https://vc-virtual-learn.com"
            },
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "name": data?.courseData?.course?.name,
                "courseMode": "Online",
                "startDate": data?.courseData?.course?.createDate,
                "endDate": data?.courseData?.course?.endDate,
                "courseWorkload": "PT2H", // 2 ساعت در هفته به فرمت ISO 8601
                "courseSchedule": "Flexible", // برای جلوگیری از خطا اضافه شده
                "instructor": {
                    "@type": "Person",
                    "name": data?.courseData?.teacher?.engName,
                    "url": `https://vc-virtual-learn.com/teachers/${encodeTitle(data?.courseData?.teacher?.engName)}`
                },
                "location": {
                    "@type": "VirtualLocation",
                    "url": `https://vc-virtual-learn.com/courses/${encodeTitle(data?.courseData?.course?.urlName)}`
                }
            },
            "image": data?.courseData?.course?.thumbnail?.imageUrl,
            "duration": secondsToTimeString(data?.courseData?.course?.courseLength),
            "offers": {
                "@type": "Offer",
                "price": data?.courseData?.course?.price,
                "priceCurrency": "IRR",
                "availability": "InStock",
                "category": data?.courseData?.course?.category || "Programming",
                "url": `https://vc-virtual-learn.com/courses/${encodeTitle(data?.courseData?.course?.urlName)}`
            }
        };

        // اضافه کردن امتیاز دوره در صورت وجود
        if (data?.courseData?.course?.rating && data?.courseData?.course?.ratingNumber) {
            schema.aggregateRating = {
                "@type": "AggregateRating",
                "ratingValue": data?.courseData?.course?.rating.toString(),
                "reviewCount": data?.courseData?.course?.ratingNumber.toString(),
                "bestRating": "5"
            };
        }

        const course = data?.courseData?.course;

        // بررسی معتبر بودن تخفیف
        const hasDiscount = isDiscountValid(course?.discount?.expireTime, course?.discount?.percent);

        // محاسبه قیمت بعد از تخفیف
        const priceAfterDiscount = hasDiscount ? course?.price - (course?.price * course?.discount?.percent / 100) : course?.price;

        return (
            <section className=" flex flex-col items-center justify-center" >
                <meta name="product_id" content={data?.courseData?.course?._id} />
                <meta name="product_name" content={data?.courseData?.course?.faName} />
                <meta property="og:image" content={data?.courseData?.course?.thumbnail?.imageUrl} />
                <meta name="product_price" content={priceAfterDiscount} />
                <meta name="product_old_price" content={course?.price} />
                <meta name="availability" content="instock" />

                <title>{data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name}</title>
                <meta name="description" content={data?.courseData?.course?.seoMeta?.description} />
                <meta name="keywords" content={data?.courseData?.course?.seoMeta?.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="5 days" />

                <meta property="og:title" content={data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name} />
                <meta property="og:description" content={data?.courseData?.course?.seoMeta?.description} />
                <meta property="og:url" content={`https://vc-virtual-learn.com/courses/${courseName}`} />
                <meta property="og:image" content={data?.courseData?.course?.thumbnail?.imageUrl} />

                <meta name="twitter:title" content={data?.courseData?.course?.seoMeta?.title ? data?.courseData?.course?.seoMeta?.title : data?.courseData?.course?.name} />
                <meta name="twitter:description" content={data?.courseData?.course?.seoMeta?.description} />

                <meta name="twitter:image" content={data?.courseData?.course?.thumbnail?.imageUrl} />



                <div className="w-full max-w-7xl mt-20 px-4 md:px-8 2xl:px-2 flex items-center justify-center ">
                    <CourseInfo data={data?.courseData} isPurchased={data?.isPurchased} userRate={data?.userRate} />
                </div>
                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            </section>
        );
    }
}
