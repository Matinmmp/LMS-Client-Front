import Hero from "@/src/components/Courses/Hero";
import { Suspense } from "react";
import CoursesList from "../../components/Courses/CoursesList";
import Courses from "@/src/components/Courses/Courses";
import { Spinner } from "@nextui-org/spinner";
import Script from "next/script";

const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "دوره‌های آموزشی | Virtual Learn",
    "url": "https://www.vc-virtual-learn.com/courses/search",
    "description": "در این صفحه می‌توانید دوره‌های برنامه‌نویسی مختلف را جستجو کرده و با مقایسه آن‌ها، بهترین گزینه را انتخاب کنید. Virtual Learn انتخاب شما برای یادگیری برنامه‌نویسی به زبان فارسی است.",
    "inLanguage": "fa",
    "isPartOf": {
        "@type": "WebSite",
        "name": "ویرچوال لرن",
        "url": "https://www.vc-virtual-learn.com"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vc-virtual-learn.com/courses/search?searchText={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    // "image": "https://www.vc-virtual-learn.com/assets/courses-search-banner.png",//بعدا درستش کن
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://www.vc-virtual-learn.com",
        "logo": {
            "@type": "ImageObject",
            "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png`,
            "width": 512,
            "height": 512
        }
    }
}



export default async function CourseSearch(p: any) {

    const params = p.searchParams;


    // searchCourse
    let object: Record<string, any> = {
        page: '1'
    };

    if (params.searchText) object.searchText = params.searchText;
    if (params.price) object.price = params.price;
    if (params.order) object.order = params.order;
    if (params.page) object.page = params.page;


    if (params.category) {
        if (Array.isArray(params.category)) object.categories = params.category
        else object.categories = [params.category]
    }

    if (params.teacher) {
        if (Array.isArray(params.teacher)) object.teachers = params.teacher
        else object.teachers = [params.teacher]
    }

    if (params.academy) {
        if (Array.isArray(params.academy)) object.academies = params.academy
        else object.academies = [params.academy]
    }




    return (

        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <title>دوره‌های آموزشی | Virtual Learn</title>
            <meta name="description" content="در این صفحه می‌توانید دوره‌های برنامه‌نویسی مختلف را جستجو کرده و با مقایسه آن‌ها، بهترین گزینه را انتخاب کنید. Virtual Learn انتخاب شما برای یادگیری برنامه‌نویسی به زبان فارسی است." />
            <meta name="keywords" content="جستجوی دوره‌های برنامه‌نویسی, دوره‌های فارسی, آموزش آنلاین, دوره‌های ترجمه‌شده, Virtual Learn" />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="5 days" />

            <meta property="og:title" content="دوره‌های آموزشی | Virtual Learn" />
            <meta property="og:description" content="در این صفحه می‌توانید دوره‌های برنامه‌نویسی مختلف را جستجو کرده و با مقایسه آن‌ها، بهترین گزینه را انتخاب کنید. Virtual Learn انتخاب شما برای یادگیری برنامه‌نویسی به زبان فارسی است." />
            <meta property="og:url" content="https://www.vc-virtual-learn.com/courses" />
            {/* <meta property="og:image" content="https://www.vc-virtual-learn.com/assets/academies-banner.png" /> */}

            <meta name="twitter:title" content="دوره‌های آموزشی | Virtual Learn" />
            <meta name="twitter:description" content="در این صفحه می‌توانید دوره‌های برنامه‌نویسی مختلف را جستجو کرده و با مقایسه آن‌ها، بهترین گزینه را انتخاب کنید. Virtual Learn انتخاب شما برای یادگیری برنامه‌نویسی به زبان فارسی است." />

            {/* بعدا عکسو بذار */}
            {/* <meta name="twitter:image" content="https://www.vc-virtual-learn.com/assets/academies-banner.png" /> */}

            <link rel="canonical" href="https://www.vc-virtual-learn.com/courses" />

            <section className=" flex flex-col items-center justify-center  " >


                <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
        dark:bg-gradient-to-b  dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                    <Hero />
                </div>

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">
                    <Courses>
                        <Suspense fallback={<Loading />}>

                            <CoursesList object={object} />

                        </Suspense>
                    </Courses>
                </div>
            </section>
        </>

    );
}

const Loading = () => {
    return <div className="mt-8 flex flex-col items-center gap-6">
        <p className='text-lg md:text-xl lg:text-2xl text-primary-400 font-semibold'>درحال دریافت دوره‌ها...</p>
        <Spinner color="primary" size="lg"
            classNames={{
                circle1: 'w-12 h-12 md:w-16 md:h-16 border-[4px]',
                circle2: 'w-12 h-12 md:w-16 md:h-16 border-[4px]',
                base: 'w-12 h-12 md:w-16 md:h-16',
                wrapper: 'w-12 h-12 md:w-16 md:h-16'
            }} />
    </div>

}