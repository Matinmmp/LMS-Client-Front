import Script from "next/script";
 
// TODO درست نیست اصلا
// کامل نیست پرش کن
const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Virtual Learn",
    "url": "https://www.virtual_learn.com",
    "description": "آموزش برنامه‌نویسی با ترجمه دوره‌های اختصاصی از بهترین مدرسین و آکادمی‌های جهان به زبان فارسی. آموزش‌های تخصصی از برترین اساتید برنامه‌نویسی دنیا برای فارسی‌زبانان.",
    "keywords": "آموزش برنامه‌نویسی, ترجمه دوره‌ها, برنامه‌نویسی فارسی, اساتید برتر برنامه‌نویسی, آموزش آنلاین, برترین آکادمی‌های برنامه نویسی, آکادمی" ,
    "inLanguage": "fa",
    "alternateName": "آموزش آنلاین برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از آکادمی‌های جهانی",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.virtual_learn.com/search?query={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    "sameAs": [
        "https://www.instagram.com/virtual_learn"
    ],
    "publisher": {
        "@type": "Organization",
        "name": "Virtual Learn",
        "url": "https://www.virtual_learn.com",
        "logo": ""
    }
}



export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            {/* // TODO درست نیست اصلا */}
            {/* بعدا درستشون کن */}
            <title>معرفی آکادمی‌های ویرچوال لرن </title>
            <meta name="revisit-after" content="5 days"></meta>
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="معرفی آکادمی‌های ویرچوال لرن " />
            <meta property="og:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />
            <meta property="og:image" content="https://www.virtual_learn.com/logo.png" />
            <meta property="og:url" content="https://www.virtual_learn.com/" />
            <meta name="twitter:title" content="آموزش برنامه‌نویسی به زبان فارسی | Virtual Learn" />
            <meta name="twitter:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />
         

            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            
            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
}
