import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
  
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/src/config/site";


import { Baloo, Inter } from "../config/fonts";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html   lang="fa" dir="rtl">
            <head />

            <body className={clsx("min-h-screen bg-background font-sans antialiased", Baloo.variable, Inter.variable)} >

                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }} >

                    <div className="relative flex flex-col h-screen" >

                        {/* <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                            {children}
                        </main> */}
                        <main className="/container mx-auto/ max-w-7xl/ flex-grow">
                            <div className="background">
                                <span></span>
                                <span></span>


                            </div >
                            {children}
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>

                        </main>

                    </div>
                </Providers>
            </body>

        </html>
    );
}
