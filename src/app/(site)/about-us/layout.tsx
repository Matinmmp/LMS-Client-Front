import Script from "next/script";
 
const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "درباره‌ی ویرچوال لرن",
    "url": "https://www.vc-virtual-learn.com/about-us",
    "description": "آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان.",
    "keywords": "آموزش برنامه‌نویسی, ترجمه دوره‌ها, برنامه‌نویسی فارسی, آموزش آنلاین, Virtual Learn, درباره‌ی ویرچوال لرن",
    "inLanguage": "fa",
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://www.vc-virtual-learn.com/",
        "logo": {
            "@type": "ImageObject",
            "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png`, // آدرس دقیق لوگو را جایگزین کنید
            "width": 512,
            "height": 512
        }
    },
    "image": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}about5.svg`, // آدرس دقیق تصویر صفحه را جایگزین کنید
        "width": 1200,
        "height": 628
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.vc-virtual-learn.com/about-us"
    },
    "sameAs": [
        "https://www.instagram.com/virtual_learn", //اینم تغییر بده
        "https://t.me/VC_Virtual_Learn"
    ],
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vc-virtual-learn.com/courses?searchText={search_term_string}",
        "query-input": "required searchText=search_term_string"
    }
};


export default function AboutLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <title>درباره‌ی ویرچوال لرن</title>
            <meta name="revisit-after" content="5 days"></meta>
            <meta name="robots" content="index, follow" />
            <meta name="description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />
            <meta name="keywords" content="آموزش برنامه‌نویسی, ترجمه دوره‌ها, برنامه‌نویسی فارسی, آموزش آنلاین, Virtual Learn, درباره‌ی ویرچوال لرن" />


            <meta property="og:title" content="درباره‌ی ویرچوال لرن" />
            <meta property="og:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />
            <meta property="og:url" content="https://www.vc-virtual-learn.com/about-us" />
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}about5.svg`} />

            <meta name="twitter:title" content="درباره‌ی ویرچوال لرن" />
            <meta name="twitter:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}about5.svg`} />
            <link rel="canonical" href="https://www.vc-virtual-learn.com/about-us"/>

            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <div className="relative z-20">
                {children}
            </div>
        </>

    );
}
