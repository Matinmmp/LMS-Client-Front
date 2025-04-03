
import MainSlider from '@/src/components/blog/home/MainSlider';
import { FeaturedPosts, ReceentPosts } from '@/src/components/blog/home/ServerComponents';
import { VirtualInfo, FeaturedSidebar, NewSteler, CategoriesSidebar, WhatIsVirtualLearn } from '@/src/components/blog/home/Components';
import { getBlogsInSlider, getLatestBlogs, getOldestAndPopularBlogs, getSpecialBlogs } from '@/src/lib/apis/blogApis';
import Script from 'next/script';


const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "بلاگ Virtual Learn | جدیدترین مقالات آموزش برنامه‌نویسی",
    "url": "https://www.vc-virtual-learn.com/blog",
    "description": "در بلاگ Virtual Learn مقالات تخصصی درباره برنامه‌نویسی، توسعه وب، هوش مصنوعی، فریمورک‌های مدرن و فناوری‌های جدید را بخوانید. جدیدترین آموزش‌ها و نکات کاربردی را دنبال کنید.",
    "keywords": "بلاگ برنامه‌نویسی, آموزش برنامه‌نویسی, مقالات برنامه‌نویسی, توسعه وب, یادگیری کدنویسی, فریمورک‌های برنامه‌نویسی",
    "inLanguage": "fa",
    "alternateName": "بلاگ Virtual Learn | جدیدترین مقالات آموزش برنامه‌نویسی",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vc-virtual-learn.com/blog/blogs?searchText={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    "sameAs": [
        "https://www.instagram.com/virtual_learn",
        "https://t.me/VC_Virtual_Learn"
    ],
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://www.vc-virtual-learn.com/",
        "logo": {
            "@type": "ImageObject",
            "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png`,
            "width": 512,
            "height": 512
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.vc-virtual-learn.com/blog"
    }
}



export default async function Home() {
    let data1: any
    let data2: any
    let data3: any
    let data4: any
    [data1, data2, data3, data4] = await Promise.allSettled([
        getBlogsInSlider(),
        getSpecialBlogs(),
        getLatestBlogs(),
        getOldestAndPopularBlogs()
    ]);





    return (
        <>
            <title>بلاگ Virtual Learn | جدیدترین مقالات آموزش برنامه‌نویسی</title>
            <meta name="description" content="جدیدترین مقالات آموزشی درباره برنامه‌نویسی، توسعه وب، هوش مصنوعی و فریمورک‌های محبوب. در بلاگ Virtual Learn مطالب تخصصی و نکات مهم دنیای کدنویسی را بخوانید." />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="بلاگ برنامه‌نویسی, آموزش کدنویسی, مقالات برنامه‌نویسی, توسعه وب, جاوا اسکریپت, پایتون, هوش مصنوعی, فریمورک‌های برنامه‌نویسی" />

            <meta property="og:title" content="بلاگ Virtual Learn | جدیدترین مقالات آموزش برنامه‌نویسی" />
            <meta property="og:description" content="مطالب تخصصی درباره توسعه وب، زبان‌های برنامه‌نویسی و فریمورک‌های مدرن را در بلاگ Virtual Learn دنبال کنید. جدیدترین مقالات و آموزش‌ها برای برنامه‌نویسان!" />
            <meta property="og:url" content="https://www.vc-virtual-learn.com/blog" />
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}blog-hero.jpg`} />

            <meta name="twitter:title" content="بلاگ Virtual Learn | جدیدترین مقالات آموزش برنامه‌نویسی" />
            <meta name="twitter:description" content="بهترین مقالات آموزشی درباره برنامه‌نویسی، جاوا اسکریپت، پایتون، هوش مصنوعی و توسعه وب را در بلاگ Virtual Learn مطالعه کنید." />
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}blog-hero.jpg`} />
            <meta name="revisit-after" content="5 days" />

            <link rel="canonical" href="https://www.vc-virtual-learn.com/blog" />

            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <section className=" flex flex-col items-center justify-center" >

                <h1 className='hidden'>بلاگ Virtual Learn | جدیدترین مقالات آموزش برنامه‌نویسی</h1>
                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


                    <div className="background z-[-1] !absolute">
                        <span className=" dark:bg-[#1582ff37] " />

                    </div>

                    <div className='mt-4'></div>
                    {data1?.value?.blogs ? <MainSlider blogs={data1?.value?.blogs} /> : ''}



                    <div className='mt-10 lg:mt-20 w-full flex flex-col lg:flex-row gap-6'>
                        <div className='w-full lg:w-[70%] flex flex-col gap-20'>
                            {data2?.value?.blogs ? <FeaturedPosts blogs={data2?.value?.blogs} /> : ''}
                            {data3?.value?.blogs ? <ReceentPosts blogs={data3?.value?.blogs} /> : ''}


                        </div>

                        <aside className='mt-10 w-full lg:w-[30%] flex flex-col gap-8'>
                            <VirtualInfo />
                            {data4?.value?.oldestBlogs ?
                                <FeaturedSidebar oldestBlogs={data4?.value?.oldestBlogs} popularBlogs={data4?.value?.popularBlogs} /> : ''}
                            <NewSteler />
                            <CategoriesSidebar />
                        </aside>

                    </div>
                </div>

            </section>
            <WhatIsVirtualLearn />
        </>
    )

}