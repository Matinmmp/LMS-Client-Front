import Script from "next/script";


// کامل نیست پرش کن
const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Virtual Learn",
    "url": "https://www.virtuallearn.com",
    "description": "آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان. با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید.",
    "keywords": "آموزش برنامه‌نویسی, ترجمه دوره‌ها, برنامه‌نویسی فارسی, آموزش آنلاین",
    "inLanguage": "fa",
    "alternateName": "آموزش آنلاین برنامه‌نویسی به زبان فارسی",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.virtuallearn.com/search?query={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    "sameAs": [
        "https://www.instagram.com/virtuallearn",

    ],
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://www.virtuallearn.com",
        "logo": "", // بعدا پر کن
    }
}


export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* بعدا درستشون کن */}
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="آموزش برنامه‌نویسی به زبان فارسی | Virtual Learn" />
            <meta property="og:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />
            <meta property="og:image" content="https://www.virtuallearn.com/logo.png" />
            <meta property="og:url" content="https://www.virtuallearn.com/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="آموزش برنامه‌نویسی به زبان فارسی | Virtual Learn" />
            <meta name="twitter:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />
            
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {children}
        </div>
    );
}
