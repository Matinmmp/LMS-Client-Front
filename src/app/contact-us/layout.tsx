import Script from "next/script";

const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "ارتباط با ما | Virtual Learn",
    "url": "https://www.vc-virtual-learn.com/contact-us",
    "description": "برای ارتباط با تیم ویرچوال لرن و دریافت پشتیبانی، می‌توانید از اطلاعات تماس موجود در این صفحه استفاده کنید. سوالات و نظرات خود را با ما به اشتراک بگذارید.",
    "inLanguage": "fa",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.vc-virtual-learn.com/contact-us"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vc-virtual-learn.com/search?query={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    "sameAs": [
        "https://www.instagram.com/virtual_learn",
        "https://t.me/VC_Virtual_Learn"
    ],
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://www.vc-virtual-learn.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.vc-virtual-learn.com/assets/logo.png",//اینم تغییر بده
            "width": 512,
            "height": 512
        }
    },
    "image": {
        "@type": "ImageObject",
        "url": "https://www.vc-virtual-learn.com/assets/contact-banner.png",
        "width": 1200,
        "height": 628
    }
}


export default function AboutLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>

            <meta name="twitter:image" content="https://www.virtuallearn.com/logo.png" />
            <meta name="twitter:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />


            <title>ارتباط با ما | Virtual Learn</title>
            <meta name="description" content="برای ارتباط با تیم ویرچوال لرن و دریافت پشتیبانی، می‌توانید از اطلاعات تماس موجود در این صفحه استفاده کنید. سوالات و نظرات خود را با ما به اشتراک بگذارید." />
            <meta name="keywords" content="ارتباط با ما, تماس با ویرچوال لرن, پشتیبانی ویرچوال لرن, سوالات و نظرات" />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="5 days" />

            <meta property="og:title" content="ارتباط با ما | Virtual Learn" />
            <meta property="og:description" content="برای ارتباط با تیم ویرچوال لرن و دریافت پشتیبانی، می‌توانید از اطلاعات تماس موجود در این صفحه استفاده کنید." />
            <meta property="og:url" content="https://www.vc-virtual-learn.com/contact-us" />

            {/* بعدا عکسو درست کن */}
            <meta property="og:image" content="https://www.vc-virtual-learn.com/assets/contact-banner.png" />

            <meta name="twitter:title" content="ارتباط با ما | Virtual Learn" />
            <meta name="twitter:description" content="برای ارتباط با تیم ویرچوال لرن و دریافت پشتیبانی، می‌توانید از اطلاعات تماس موجود در این صفحه استفاده کنید." />
            <meta name="twitter:image" content="https://www.vc-virtual-learn.com/assets/contact-banner.png" />
    


            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <div className="relative z-20">
                {children}
            </div>
        </>

    );
}
