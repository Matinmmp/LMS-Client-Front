import "@/src/styles/globals.css";
import { Viewport } from "next";
import { Inter, Vazir } from "../config/fonts";
import { Providers } from "./providers";
import Footer from "../components/Shared/Footer";
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../components/Shared/navbar2'), {loading: () => <p></p>,})


export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (

        <html dir="rtl" lang="fa" id="html">
            <head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PPNQCJ8DN0" />
                <Script id="google-analytics">
                    { `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-PPNQCJ8DN0');
                    `}
                </Script>
            </head>
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fa_IR" />
            <meta httpEquiv="Content-Language" content="fa" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="theme-color" content="#079CED" />
            <meta name="author" content="Virtual Learn" />
            <meta charSet="UTF-8" />
            <meta name="enamad" content="67578191" />
            <meta property="og:site_name" content="Virtual Learn" />


            <body
                className={Vazir.className + ' ' + Inter.className + ' ' + 'min-h-screen bg-background  '}
            //  className={clsx("min-h-screen bg-background  font-sans antialiased", Vazir.className, Inter.className)} 
            >
                <NextTopLoader />

                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="relative flex flex-col h-screen ">

                        <main className="flex-grow relative z-10 bg-[#fffdfd]
                        bg-gradient-to-b/ from-[#eef3f994]/ to-[#f3f4f6c8]/
                        bg-[#F3F4F6]/
                        bg-[#F4F5F7]/
                        

                        dark:bg-gradient-to-b/ dark:from-[#020617]/ dark:to-[#181818]/
                        dark:bg-gradient-to-b/ dark:from-[#111827]/ dark:to-[#181818]/
                        dark:bg-[#181818]/ dark:bg-[#020617] dark:bg-[#111827]/
                        
                        dark:bg-gradient-to-b/ dark:from-[#111827]/ dark:to-[#181818]/
                        dark:bg-[#111827]/
                        dark:bg-[#1b1e26]/
                        dark:bg-[#1c212f]/
                        dark:bg-[#172034]/
                        dark:bg-[#1b2026]/
                  

                         ">

                            <div className="background z-[1] ">
                                {/* <span className="bg-none dark:bg-[#1582ff25]" />
                                <span className="bg-none dark:bg-[#1582ff25] max-w-80 max-h-80 2xl:max-w-[40%] lg:max-h-[50%]" /> */}

                                {/* <span className="bg-none dark:bg-[rgba(10,130,255,0.09)]" />
                                <span className="bg-none dark:bg-[rgba(10,130,255,0.09)] w-full h-full max-w-80 max-h-80 2xl:max-w-[40%] lg:max-h-[50%]" /> */}


                            </div>
                            <div className="relative z-20 ">
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
