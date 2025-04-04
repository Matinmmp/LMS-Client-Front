import Hero from "@/src/components/Courses/Hero";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import Script from "next/script";
import Blogs from "@/src/components/blog/Blogs";
import BlogsList from "@/src/components/blog/BlogsList";


export default async function CourseSearch(p: any) {
    const params = p.searchParams;

    // searchCourse
    let object: Record<string, any> = {
        page: '1'
    };
    let text = 'همه'
    if(params.searchText)
        text = params.searchText
    if (params.searchText) object.searchText = params.searchText;
    if (params.order) object.order = params.order;
    if (params.page) object.page = params.page;

    const schema = {
        "@context": "https://schema.org",
        "@type": "SearchResultsPage",
        "name": `نتایج جستجوی ${text} در بلاگ Virtual Learn`,
        "url": `https://www.vc-virtual-learn.com/blog/blogs?searchText=${text}`,
        "description": `نتایج جستجو برای ${text} در بلاگ Virtual Learn. مقالات فارسی در زمینه‌ی برنامه‌نویسی، توسعه نرم‌افزار، طراحی وب، هوش مصنوعی و دیگر موضوعات مرتبط.`,
        "inLanguage": "fa",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Virtual Learn",
            "url": "https://www.vc-virtual-learn.com"
        },
        "mainEntity": {
            "@type": "SearchAction",
            "query": `${text}`,
            "query-input": "required name=searchTerm"
        }
    }


    if (params.category) {
        if (Array.isArray(params.category)) object.categories = params.category
        else object.categories = [params.category]
    }

    return (

        <>

            <title>{`نتایج جستجوی ${text} | بلاگ Virtual Learn`}</title>
            <meta name="description" content={`نتایج جستجوی ${text} در بلاگ Virtual Learn. مقالات آموزشی فارسی درباره ${text}، برنامه‌نویسی، توسعه نرم‌افزار، و تکنولوژی‌های روز.`} />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content={`${text}, مقالات ${text}, آموزش ${text}, بلاگ برنامه‌نویسی, Virtual Learn`} />

            <meta property="og:title" content={`نتایج جستجوی ${text} | بلاگ Virtual Learn`} />
            <meta property="og:description" content={`جستجو برای ${text} در بلاگ Virtual Learn. مقالاتی با محتوای آموزشی و تخصصی در زمینه‌ی {searchTerm}.`} />
            <meta property="og:url" content={`https://www.vc-virtual-learn.com/blog/blogs?searchText=${text}`} />

            <meta name="twitter:title" content={`نتایج جستجوی ${text} | بلاگ Virtual Learn`} />
            <meta name="twitter:description" content={`نتایج مرتبط با ${text} در بلاگ Virtual Learn. آموزش‌های ترجمه‌شده فارسی از بهترین منابع دنیا.`} />
 
            <link rel="canonical" href={`https://www.vc-virtual-learn.com/blog/blogs?searchText=${text}`} />

            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <section className=" flex flex-col items-center justify-center  " >


                <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                    dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                    <Hero />
               
                </div>

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                    <Blogs>
                        <Suspense fallback={<Loading />}>

                            <BlogsList object={object} />

                        </Suspense>
                    </Blogs>
                </div>
            </section>
            <div className="gap-10 relative"><span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" /></div>

        </>

    );
}

const Loading = () => {
    return <div className="mt-8 flex flex-col items-center gap-6">
        <p className='text-lg md:text-xl lg:text-2xl text-primary-400 font-semibold'>درحال دریافت بلاگ‌ها...</p>
        <Spinner color="primary" size="lg"
            classNames={{
                circle1: 'w-12 h-12 md:w-16 md:h-16 border-[4px]',
                circle2: 'w-12 h-12 md:w-16 md:h-16 border-[4px]',
                base: 'w-12 h-12 md:w-16 md:h-16',
                wrapper: 'w-12 h-12 md:w-16 md:h-16'
            }} />
    </div>

}