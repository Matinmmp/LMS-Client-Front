import Script from "next/script";


const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Virtual Learn | آموزش برنامه‌نویسی به زبان فارسی",
    "url": "https://www.vc-virtual-learn.com/",
    "description": "آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان. با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید.",
    "keywords": "آموزش برنامه‌نویسی, دوره‌های ترجمه‌شده فارسی, آموزش آنلاین, Virtual Learn",
    "inLanguage": "fa",
    "alternateName": "Virtual Learn | آموزش برنامه‌نویسی به زبان فارسی",
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
        "url": "https://www.vc-virtual-learn.com/",
        "logo": {
            "@type": "ImageObject",
            // ادرس عکسو بعدا بذار
            "url": "https://www.vc-virtual-learn.com/assets/logo.png",
            "width": 512,
            "height": 512
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.vc-virtual-learn.com/"
    }
}



export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <title>Virtual Learn | آموزش برنامه‌نویسی به زبان فارسی</title>
            <meta name="description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان. با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید." />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="آموزش برنامه‌نویسی, دوره‌های ترجمه‌شده فارسی, آموزش آنلاین, Virtual Learn" />

            <meta property="og:title" content="Virtual Learn | آموزش برنامه‌نویسی به زبان فارسی" />
            <meta property="og:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان. با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید." />
            <meta property="og:url" content="https://www.vc-virtual-learn.com/" />
            <meta property="og:image" content="https://www.vc-virtual-learn.com/assets/contact-banner.png" />

            <meta name="twitter:title" content="Virtual Learn | آموزش برنامه‌نویسی به زبان فارسی" />
            <meta name="twitter:description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان. با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید." />
            <meta name="twitter:image" content="https://www.vc-virtual-learn.com/assets/contact-banner.png" />
            <meta name="revisit-after" content="1 days" />

            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {children}
        </div>
    );
}
