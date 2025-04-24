
import { Problem } from "@/src/components/Shared/Problem";
import Hero from "@/src/components/Teachers/Hero";
import TeachersList from "@/src/components/Teachers/TeachersList";
import { getTeachers } from "@/src/lib/apis/teacherApis";
import { encodeTitle } from "@/src/utils/functions";




export default async function Home() {

    const data: any = await getTeachers();
 
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "لیست مدرس‌های آموزشی | Virtual Learn",
        "url": "https://vc-virtual-learn.com/teachers",
        "description": "لیست مدرس‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما.",
        "inLanguage": "fa",
        "isPartOf": {
            "@type": "WebSite",
            "name": "ویرچوال لرن",
            "url": "https://vc-virtual-learn.com"
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "لیست مدرس‌ها",
            "itemListElement": []
        },
        "publisher": {
            "@type": "Organization",
            "name": "Virtual Learn",
            "url": "https://vc-virtual-learn.com",
            "logo": {
                "@type": "ImageObject",
                "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png`, //پرش کن
                "width": 512,
                "height": 512
            }
        },
        // "image": "https://www.vc-virtual-learn.com/assets/teachers-banner.png",// پرش کن
    }

    if (data) {
        let items = data?.teachers?.map((item: any, index: number) => {
            const s: any = {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": item.engName,
                "url": `https://vc-virtual-learn.com/academies/${encodeTitle(item?.engName)}`,
                "description": item?.description,
                "logo": {
                    "@type": "ImageObject",
                    "url": item?.avatar?.imageUrl,
                    "width": 512,
                    "height": 512
                },
            }

            if (item?.rating || item?.ratingNumber)
                s.aggregateRating = {
                    "@type": "AggregateRating",
                    "ratingValue": `${item?.rating}`,
                    "reviewCount": `${item?.ratingNumber}`,
                    "bestRating": "5",
                }

            return s
        })
     
        schema.mainEntity.itemListElement = items;

        return (
            <section className=" flex flex-col items-center justify-center  " >

                <title>لیست مدرس‌های آموزشی | Virtual Learn</title>
                <meta name="description" content="لیست مدرس‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />
                <meta name="keywords" content="مدرس‌های آموزشی, آموزش برنامه‌نویسی, ترجمه دوره‌ها, آموزش آنلاین, ویرچوال لرن" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="5 days" />

                <meta property="og:title" content="لیست مدرس‌های آموزشی | Virtual Learn" />
                <meta property="og:description" content="لیست مدرس‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />
                <meta property="og:url" content="https://vc-virtual-learn.com/teachers" />
                {/* <meta property="og:image" content="https://www.vc-virtual-learn.com/assets/teachers-banner.png" /> */}

                <meta name="twitter:title" content="لیست مدرس‌های آموزشی | Virtual Learn" />
                <meta name="twitter:description" content="لیست مدرس‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />

                {/* بعدا عکسو بذار */}
                {/* <meta name="twitter:image" content="https://www.vc-virtual-learn.com/assets/teachers-banner.png" /> */}

 

                <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                    dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                    <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-16  flex items-center justify-center ">
                        <Hero />
                    </div>

                </div>

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">

                    <div className="w-full mt-6">
                        {data?.success ? <TeachersList list={data.teachers} /> : <Problem />}


                    </div>
                </div>
            </section>
        );
    }
}