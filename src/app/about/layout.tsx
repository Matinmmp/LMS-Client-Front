export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <title>درباره ی ویرچوال لرن</title>
            <meta name="revisit-after" content="5 days"></meta>
            <meta name="description" content="آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان." />
            <meta name="keywords" content="آموزش برنامه‌نویسی, ترجمه دوره‌ها, برنامه‌نویسی فارسی, آموزش آنلاین" />
            <link rel="canonical" href="https://www.virtuallearn.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fa_IR" />
            <meta name="twitter:image" content="https://www.virtuallearn.com/logo.png" />
            <meta name="theme-color" content="#00b3ff" />
            <meta name="author" content="Virtual Learn" />
            <meta charSet="UTF-8" />
        
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                {children}
            </div>
        </section>
        </>

    );
}
