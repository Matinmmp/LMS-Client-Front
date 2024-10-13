import Script from "next/script";


// کامل نیست پرش کن
const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Virtual Learn",
    "url": "https://www.virtual_learn.com",
    "description": "آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان. با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید.",
    "keywords": "آموزش برنامه‌نویسی, ترجمه دوره‌ها, برنامه‌نویسی فارسی, آموزش آنلاین",
    "inLanguage": "fa",
    "alternateName": "آموزش آنلاین برنامه‌نویسی به زبان فارسی",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.virtual_learn.com/search?query={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    "sameAs": [
        "https://www.instagram.com/virtual_learn",

    ],
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://www.virtual_learn.com",
        "logo": "", // بعدا پر کن
    }
}


export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* بعدا درستشون کن */}
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="مدرسان برتر برنامه‌نویسی جهان | Virtual Learn" />
            <meta property="og:description" content="لیست بهترین مدرسان برنامه‌نویسی به زبان فارسی با دوره‌های ترجمه‌شده از آکادمی‌های برتر جهان. استادان جهانی را با آموزش‌های تخصصی دنبال کنید." />
            <meta property="og:image" content="https://www.virtual_learn.com/teachers.png" />
            <meta property="og:url" content="https://www.virtual_learn.com/teachers" />
            <meta name="twitter:title" content="مدرسان برتر برنامه‌نویسی جهان | Virtual Learn" />
            <meta name="twitter:description" content="بهترین مدرسان برنامه‌نویسی از آکادمی‌های برتر جهان، آموزش‌های خود را با ترجمه فارسی ارائه می‌کنند. مهارت‌های خود را از مدرسان جهانی بیاموزید." />
            <meta name="revisit-after" content="7 days"/>

            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {children}
        </div>
    );
}
