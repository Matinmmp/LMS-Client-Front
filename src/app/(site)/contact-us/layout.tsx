import Script from "next/script";

const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "ارتباط با ما | Virtual Learn",
    "url": "https://vc-virtual-learn.com/contact-us",
    "description": "برای ارتباط با تیم ویرچوال لرن و دریافت پشتیبانی، می‌توانید از اطلاعات تماس موجود در این صفحه استفاده کنید. سوالات و نظرات خود را با ما به اشتراک بگذارید.",
    "inLanguage": "fa",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://vc-virtual-learn.com/contact-us"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://vc-virtual-learn.com/courses?searchText={search_term_string}",
        "query-input": "required searchText=search_term_string"
    },
    "sameAs": [
        "https://",
        ""
    ],
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://vc-virtual-learn.com",
        "logo": {
            "@type": "ImageObject",
            "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png` ,//اینم تغییر بده
            "width": 512,
            "height": 512
        }
    },
    "image": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}Contact-us-bro.svg` ,
        "width": 1200,
        "height": 628
    }
}


export default function AboutLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <title>ارتباط با ما | Virtual Learn</title>
            <meta name="description" content="برای ارتباط با تیم ویرچوال لرن و دریافت پشتیبانی، می‌توانید از اطلاعات تماس موجود در این صفحه استفاده کنید. سوالات و نظرات خود را با ما به اشتراک بگذارید." />
            <meta name="keywords" content="ارتباط با ما, تماس با ویرچوال لرن, پشتیبانی ویرچوال لرن, سوالات و نظرات" />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="5 days" />

            <meta property="og:title" content="ارتباط با ما | Virtual Learn" />
            <meta property="og:description" content="برای ارتباط با تیم ویرچوال لرن و دریافت پشتیبانی، می‌توانید از اطلاعات تماس موجود در این صفحه استفاده کنید." />
            <meta property="og:url" content="https://vc-virtual-learn.com/contact-us" />

            {/* بعدا عکسو درست کن */}
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}Contact-us-bro.svg`} />

            <meta name="twitter:title" content="ارتباط با ما | Virtual Learn" />
            <meta name="twitter:description" content="برای ارتباط با تیم ویرچوال لرن و دریافت پشتیبانی، می‌توانید از اطلاعات تماس موجود در این صفحه استفاده کنید." />
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}Contact-us-bro.svg`} />



            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <div className="relative z-20">
                {children}
            </div>
        </>

    );
}
