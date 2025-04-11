import { CategoriesPosts } from '@/src/components/blog/home/Components';
import { CourseSlider } from '@/src/components/blog/home/MainSlider';
import { WhatIsVirtualLearn } from '@/src/components/blog/home/ServerComponents';
import { getBlogsByCategories } from '@/src/lib/apis/blogApis';
import { getHomeLastCourses } from '@/src/lib/apis/homeApis';
import Script from 'next/script';


const schema: any = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "دسته‌بندی مقالات بلاگ | Virtual Learn",
    "url": "https://www.vc-virtual-learn.com/blog/categories",
    "description": "مرور دسته‌بندی‌های مختلف مقالات بلاگ Virtual Learn در حوزه برنامه‌نویسی و تکنولوژی. موضوعات مختلف از زبان‌های برنامه‌نویسی گرفته تا فریم‌ورک‌ها و ابزارهای توسعه را بررسی کنید.",
    "keywords": "دسته‌بندی مقالات, بلاگ برنامه‌نویسی, آموزش برنامه‌نویسی, مقالات تکنولوژی",
    "inLanguage": "fa",
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://www.vc-virtual-learn.com/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.vc-virtual-learn.com/images/logo-main.png",
            "width": 512,
            "height": 512
        }
    },
    "hasPart": [
        {
            "@type": "ItemList",
            "name": "دسته‌بندی‌های بلاگ",
            "itemListElement": []
        }
    ]
}


export default async function CategoriesPage() {
    let data1: any
    let data2: any

    [data1, data2] = await Promise.allSettled([
        getHomeLastCourses(),
        getBlogsByCategories(),
    ]);

    if (data2?.value?.data) {
        const categories = Object.entries(data2?.value?.data);

        if (schema.hasPart && schema.hasPart[0]) {
            categories?.map(([categoryKey, categoryData]: any) => {
                return {
                    "@type": "SiteNavigationElement",
                    "name": `${categoryData?.name}`,
                    "url": `https://www.vc-virtual-learn.com/blog/categories/${categoryData?.slug}`
                }
            })
            schema.hasPart[0].itemListElement = [

            ];
        }
    }


    return (
        <>
            <section className=" flex flex-col items-center justify-center  " >

                <title>دسته‌بندی مقالات بلاگ | Virtual Learn</title>
                <meta name="description" content="مرور دسته‌بندی‌های مختلف مقالات بلاگ Virtual Learn در حوزه برنامه‌نویسی و تکنولوژی. موضوعات مختلف از زبان‌های برنامه‌نویسی گرفته تا فریم‌ورک‌ها و ابزارهای توسعه را بررسی کنید." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="دسته‌بندی مقالات, بلاگ برنامه‌نویسی, آموزش برنامه‌نویسی, مقالات تکنولوژی" />

                <meta property="og:title" content="دسته‌بندی مقالات بلاگ | Virtual Learn" />
                <meta property="og:description" content="موضوعات مختلف مقالات برنامه‌نویسی، فریم‌ورک‌ها و ابزارهای توسعه را در بلاگ Virtual Learn کشف کنید." />
                <meta property="og:url" content="https://www.vc-virtual-learn.com/blog/categories" />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}blog-categories-banner.jpg`}
                />

                <meta name="twitter:title" content="دسته‌بندی مقالات بلاگ | Virtual Learn" />
                <meta name="twitter:description" content="موضوعات مختلف مقالات برنامه‌نویسی، فریم‌ورک‌ها و ابزارهای توسعه را در بلاگ Virtual Learn کشف کنید." />
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}blog-categories-banner.jpg`} />

                <link rel="canonical" href="https://www.vc-virtual-learn.com/blog/categories" />
                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

                <div className="background z-[-1] !absolute">
                    <span className=" dark:bg-[#1582ff37] " />
                </div>

                <div className='mt-8 w-full max-w-[1380px] px-4 md:px-8 2xl:px-2 items-center justify-center '>
                    {data1?.value?.courses && <CourseSlider courses={data1?.value?.courses} />}
                </div>

                <div className='mt-36  max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center '>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-center'>جدیدترین مقالات ویرچوال لرن</h1>
                </div>

                <div className='w-full mt-16  max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center '>
                    {data2?.value?.data && <CategoriesPosts blogs={data2?.value?.data} />}
                </div>

            </section>
            <WhatIsVirtualLearn />
        </>
    )

}