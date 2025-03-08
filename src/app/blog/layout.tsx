import BlogHeader from "@/src/blog assetes/components/Header";
import "@/src/styles/globals.css";


export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (

        <>
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fa_IR" />
            <meta httpEquiv="Content-Language" content="fa" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="theme-color" content="#079CED" />
            <meta name="author" content="Virtual Learn" />
            <meta charSet="UTF-8" />
            <meta name="enamad" content="67578191" />
            <meta property="og:site_name" content="Virtual Learn" />

            <div className="relative z-20 bg-[#fffdfd] dark:bg-[#111111] bg-[#202425]/ dark:bg-[#000]/ min-h-screen">
                <BlogHeader/>
                {children}
            </div>

        </>

    );
}
