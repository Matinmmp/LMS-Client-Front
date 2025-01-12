
import AcademiesList from "@/src/components/Academies/AcademiesList";
import Hero from "@/src/components/Academies/Hero";

import { getAcademies } from "@/src/lib/apis/academyApis";
import Script from "next/script";




export default async function Home() {

    const data: any = await getAcademies();


    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": ">لیست آکادمی‌های آموزشی | Virtual Learn",
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
            "itemListElement": [
                {
                    "@type": "EducationalOrganization",
                    "name": "آکادمی ۱",
                    "url": "https://www.vc-virtual-learn.com/academies/academy-1",
                    "description": "توضیحات مربوط به آکادمی ۱.",
                    "image": "https://www.vc-virtual-learn.com/assets/academy-1.png",

                },
            ]
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

    const item = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "آکادمی ۱",
        "url": "https://www.vc-virtual-learn.com/academies/academy-1",
        "description": "توضیحات مربوط به آکادمی ۱. این آکادمی ارائه‌دهنده دوره‌های آموزشی تخصصی برنامه‌نویسی است.",
        "image": "https://www.vc-virtual-learn.com/assets/academy-1.png",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.vc-virtual-learn.com/assets/academy-1-logo.png",
            "width": 512,
            "height": 512
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "350",
            "bestRating": "5",
        },
    }



    if (data && data.success)
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                    dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                    <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-16 flex items-center justify-center ">
                        <Hero />
                    </div>

                </div>

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                    <div className="w-full mt-6">
                        <AcademiesList list={data.academies} />
                    </div>
                </div>
                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            </section>
        );
}
