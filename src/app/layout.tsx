import "@/src/styles/globals.css";
import { Viewport } from "next";
import { Inter, Vazir } from "../config/fonts";
import { Providers } from "./providers";
import NextTopLoader from 'nextjs-toploader';
import Script from "next/script";


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
                    {`
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


            <body className={Vazir.className + ' ' + Inter.className + ' ' + 'min-h-screen bg-background'}>
                <NextTopLoader />

                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>

                    
                    {children}


                </Providers>
            </body>

        </html>

    );
}
