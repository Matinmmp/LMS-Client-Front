import "@/src/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Baloo, Inter } from "../config/fonts";
import { Providers } from "./providers";
import { Navbar } from "../components/Shared/navbar2";




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
                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="relative flex flex-col h-screen ">
                        {/* <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                            {children}
                        </main> */}
                        <main className="flex-grow relative z-10 bg-[#fbfbfb]  dark:bg-[#181818]">
                            <div className="background z-[1]">
                                <span />
                                {/* <span/> */}
                            </div>
                            <div className="relative z-20 ">
                                <Navbar />
                                {children}
                            </div>
                        </main>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>

                    </div>
                </Providers>
            </body>

        </html>
    );
}
