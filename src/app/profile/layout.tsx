import Navbar from "@/src/components/ProfilePages/Nabar";

export default function ProfileLayout({ children, }: { children: React.ReactNode }) {
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

            <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                 dark:bg-gradient-to-b dark:from-primary-50 dark:to-transparent dark:bg-opacity-10 backdrop-blur-md">

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-24 lg:mt-10 flex gap-8">
                    <Navbar />

                    <div className="w-full bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl ">
                        <div className="px-4 py-8">
                            {children}

                        </div>
                    </div>
                </div>

            </div>

        </>

    );
}
