import "@/src/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Baloo, Inter } from "../config/fonts";
import { Providers } from "./providers";
import { Navbar } from "../components/Shared/navbar2";
import Footer from "../components/Shared/Footer";
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from "react";



export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (

        <html dir="rtl" lang="fa" id="html">
            {/* بعدا درستشون کن  */}
            <title>Virtual Learn | آموزش برنامه‌نویسی به زبان فارسی</title>
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

            <body className={clsx("min-h-screen bg-background  font-sans antialiased", Baloo.variable, Inter.variable)} >
                <NextTopLoader />

                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="relative flex flex-col h-screen ">

                        <main className="flex-grow relative z-10 bg-[#fbfbfb]/ 
                        bg-gradient-to-b from-[#eef3f994] to-[#f3f4f6c8]
                        dark:bg-gradient-to-b dark:from-[#020617] dark:to-[#181818]
                        dark:bg-none/ 
                        dark:bg-[#181818]/ dark:bg-[#020617] ">
                            <div className="background z-[1] ">
                                <span className="bg-none dark:bg-[#1582ff25]" />
                                <span className="bg-none dark:bg-[#1582ff25] max-w-80 max-h-80 2xl:max-w-[40%] lg:max-h-[50%]" />


                            </div>
                            <div className="relative z-20 ">
                                {/* <Suspense> */}
                                    <Navbar />
                                {/* </Suspense> */}
                                {children}
                                <div className="mt-64">
                                    <Footer />
                                </div>
                            </div>
                        </main>

                    </div>
                </Providers>
            </body>

        </html>

    );
}
