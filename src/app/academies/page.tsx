import AcademiesList from "@/src/components/Academies/AcademiesList";
import Hero from "@/src/components/Academies/Hero";
import { Problem } from "@/src/components/Shared/Problem";
import { getAcademies } from "@/src/lib/apis/academyApis";
import { encodeTitle } from "@/src/utils/functions";
import Script from "next/script";


export default async function Home() {

    const data: any = await getAcademies();


    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "لیست آکادمی‌های آموزشی | Virtual Learn",
        "url": "https://www.vc-virtual-learn.com/academies",
        "description": "لیست آکادمی‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما.",
        "inLanguage": "fa",
        "isPartOf": {
            "@type": "WebSite",
            "name": "ویرچوال لرن",
            "url": "https://www.vc-virtual-learn.com"
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "لیست آکادمی‌ها",
            "itemListElement": []
        },
        "publisher": {
            "@type": "Organization",
            "name": "Virtual Learn",
            "url": "https://www.vc-virtual-learn.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.vc-virtual-learn.com/assets/logo.png", //پرش کن
                "width": 512,
                "height": 512
            }
        },
        "image": "https://www.vc-virtual-learn.com/assets/academies-banner.png",// پرش کن
    }

    if (data) {
        let items = data?.academies?.map((item: any, index: number) => {
            return {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": item.engName,
                "url": `https://www.vc-virtual-learn.com/academies/${encodeTitle(item?.engName)}`,
                "description": item?.description,
                "logo": {
                    "@type": "ImageObject",
                    "url": item?.avatar?.imageUrl,
                    "width": 512,
                    "height": 512
                },

                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": item?.rating,
                    "reviewCount": item?.ratingNumber,
                    "bestRating": "5",
                },
            }
        })

        schema.mainEntity.itemListElement = items;

        return (
            <section className=" flex flex-col items-center justify-center  " >
                <title>لیست آکادمی‌های آموزشی | Virtual Learn</title>
                <meta name="description" content="لیست آکادمی‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />
                <meta name="keywords" content="آکادمی‌های آموزشی, آموزش برنامه‌نویسی, ترجمه دوره‌ها, آموزش آنلاین, ویرچوال لرن" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="5 days" />

                <meta property="og:title" content="لیست آکادمی‌های آموزشی | Virtual Learn" />
                <meta property="og:description" content="لیست آکادمی‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />
                <meta property="og:url" content="https://www.vc-virtual-learn.com/academies" />
                <meta property="og:image" content="https://www.vc-virtual-learn.com/assets/academies-banner.png" />

                <meta name="twitter:title" content="لیست آکادمی‌های آموزشی | Virtual Learn" />
                <meta name="twitter:description" content="لیست آکادمی‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />

                {/* بعدا عکسو بذار */}
                <meta name="twitter:image" content="https://www.vc-virtual-learn.com/assets/academies-banner.png" />

                <link rel="canonical" href="https://www.vc-virtual-learn.com/academies" />

                <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                    dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                    <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-16 flex items-center justify-center ">
                        <Hero />
                    </div>

                </div>

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                    <div className="w-full mt-6">
                        {data?.success ? <AcademiesList list={data?.academies} /> : <Problem />}
                    </div>
                </div>
                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            </section>
        );
    }
}
