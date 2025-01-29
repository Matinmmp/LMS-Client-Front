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


export default function AboutLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <title>دوره‌های آموزشی | Virtual Learn</title>
            <meta name="description" content="در این صفحه می‌توانید دوره‌های برنامه‌نویسی مختلف را جستجو کرده و با مقایسه آن‌ها، بهترین گزینه را انتخاب کنید. Virtual Learn انتخاب شما برای یادگیری برنامه‌نویسی به زبان فارسی است." />
            <meta name="keywords" content="جستجوی دوره‌های برنامه‌نویسی, دوره‌های فارسی, آموزش آنلاین, دوره‌های ترجمه‌شده, Virtual Learn" />
            <meta name="robots" content="noindex, follow" />
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

            <div className="relative z-20">
                {children}
            </div>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        </>

    );
}