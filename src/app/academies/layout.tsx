import Script from "next/script";



export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">

            <title>لیست آکادمی‌های آموزشی | Virtual Learn</title>
            <meta name="description" content="لیست آکادمی‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />
            <meta name="keywords" content="آکادمی‌های آموزشی, آموزش برنامه‌نویسی, ترجمه دوره‌ها, آموزش آنلاین, ویرچوال لرن" />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="5 days" />

            <meta property="og:title" content=">لیست آکادمی‌های آموزشی | Virtual Learn" />
            <meta property="og:description" content="لیست آکادمی‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />
            <meta property="og:url" content="https://www.vc-virtual-learn.com/academies" />
            <meta property="og:image" content="https://www.vc-virtual-learn.com/assets/academies-banner.png" />

            <meta name="twitter:title" content=">لیست آکادمی‌های آموزشی | Virtual Learn" />
            <meta name="twitter:description" content="لیست آکادمی‌های آموزشی معتبر با دوره‌های ترجمه‌شده به زبان فارسی در ویرچوال لرن. بهترین منابع آموزشی برای ارتقای مهارت‌های برنامه‌نویسی شما." />

            {/* بعدا عکسو بذار */}
            <meta name="twitter:image" content="https://www.vc-virtual-learn.com/assets/academies-banner.png" />

            <link rel="canonical" href="https://www.vc-virtual-learn.com/academies" />



           


            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
}
