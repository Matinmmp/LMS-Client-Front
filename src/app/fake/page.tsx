
import { CategoriesSidebar } from "@/src/components/blog/home/ServerComponents";
import Code from "@/src/components/Shared/Code";
import { formatJalaliDate, secondsToMinutes, toPersianNumber } from "@/src/utils/functions";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";


type Props = {
    params: { blogName: string }
};

export default async function BlogDetail({ params: { blogName } }: Props) {


    return (
        <>
            <meta name="robots" content="noindex, nofollow" />

            <section className=" flex flex-col items-center justify-center" >

                <div className="w-full max-w-[1400px] md:px-8 2xl:px-2 flex items-center justify-center ">
                    <div className="w-full flex flex-col gap-2 ">
                        <div className="w-full px-4 md:px-0">
                            <Image className="mt-16 lg:mt-0 w-full rounded-2xl lg:rounded-3xl shadow-medium"
                                width={1000} height={700} alt="" src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}academy19.png`} />
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-6 py-4 lg:py-10">
                            <div className="w-full lg:w-[75%] md:rounded-xl md:shadow-large backdrop-blur-3xl bg-white dark:bg-transparent">
                                <div className="p-4 md:p-6 lg:p-8">
                                    <div className="flex itmes-center gap-6 text-[#3E4247] dark:text-white text-xs">

                                        <span>{`زمان مطالعه ${toPersianNumber(secondsToMinutes(`60`))} دقیقه`}</span>

                                    </div>

                                    <article>
                                        <h1 id="main-title" className="text-gray-900 dark:text-white text-[22px] md:text-[26px] lg:text-[28px] font-bold leading-tight mt-10 mb-6 md:mb-8 lg:mb-10 text-center">
                                            آموزش Flexbox در CSS: راهنمای جامع و پروژه‌محور (صفر تا صد) برای طراحان وب ایرانی
                                        </h1>

                                        <p className="md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                                            آیا از دست‌وپنجه نرم کردن با float ها و position: absolute برای چیدمان (Layout) صفحات وب خسته شده‌اید؟ آیا به دنبال راهی مدرن، قدرتمند و انعطاف‌پذیر برای قرار دادن عناصر در جای درست هستید؟ به دنیای <strong className="font-semibold text-primary-600 dark:text-primary-400">CSS Flexbox</strong> خوش آمدید!
                                        </p>

                                        <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg font-normal leading-loose text-justify my-5">
                                            Flexbox (یا Flexible Box Layout) انقلابی در نحوه چیدمان عناصر در CSS ایجاد کرد و به یکی از <strong className="font-semibold">مهارت‌های ضروری برای هر توسعه‌دهنده فرانت‌اند</strong>، به‌ویژه در <strong className="font-semibold">بازار کار ایران</strong>، تبدیل شده است. در این <strong className="font-semibold">راهنمای جامع و قدم به قدم</strong>، ما از صفر شروع می‌کنیم و تمام مفاهیم کلیدی Flexbox را با **مثال‌های عملی** و **ساخت یک پروژه کوچک (یک کارت محصول و یک نوار ناوبری ساده)** به شما آموزش می‌دهیم.
                                        </p>
                                        <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg font-normal leading-loose text-justify my-5">
                                            <strong className="font-semibold">هدف نهایی این آموزش:</strong> در پایان این راهنما، شما قادر خواهید بود با اطمینان از Flexbox برای ایجاد چیدمان‌های تک‌بعدی واکنش‌گرا و مرتب استفاده کنید و درک عمیقی از نحوه کارکرد خصوصیات اصلی آن به دست آورید.
                                        </p>

                                        <div id="prerequisites" className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-6 md:p-6 my-8 md:my-10 border border-gray-200 dark:border-gray-700">
                                            <h2 className="md:text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 me-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                قبل از شروع مطمئن شوید: (پیش‌نیازها)
                                            </h2>
                                            <ul className="list-disc list-inside p-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                                                <li>آشنایی کامل با مفاهیم پایه <a href="https://vc-virtual-learn.com/blog/blogs/learn-html-css-web-design" className="text-primary-600 dark:text-primary-400 hover:underline">HTML و CSS</a> (عناصر، انتخابگرها، Box Model).</li>
                                                <li>یک ویرایشگر کد (مانند <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-400 hover:underline">VS Code<span className="inline-block mr-1 text-xs">↗️</span></a>).</li>
                                                <li>یک مرورگر وب مدرن (مانند Chrome یا Firefox) و آشنایی اولیه با <strong className="font-semibold">ابزارهای توسعه‌دهنده (DevTools)</strong> آن.</li>
                                            </ul>
                                            <div className="flex items-start border-l-4 border-success-400 bg-success-50 dark:bg-gray-800/50 p-4 ps-0  md:p-4 rounded-lg my-4 shadow-sm mt-5">
                                                <svg className="flex-shrink-0 h-6 w-6 text-success-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                                <div>
                                                    <strong className="font-semibold text-success-800 dark:text-success-200">نکته مهم:</strong>
                                                    <p className="text-success-700 dark:text-success-200/90 mt-1 text-sm md:text-base leading-relaxed">این آموزش بر <strong className="font-semibold">CSS خالص (Vanilla CSS)</strong> تمرکز دارد. گرچه فریمورک‌هایی مانند Tailwind CSS کلاس‌های کمکی برای Flexbox دارند، درک مفاهیم پایه ضروری است.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <nav id="toc" aria-label="فهرست مراحل آموزش" className="my-8 md:my-10 lg:my-12 px-4 py-6 bg-primary-50 dark:bg-gray-800/50 rounded-lg border-t-4 border-primary-500 shadow-md">
                                            <h2 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-5 text-center">مراحل این آموزش Flexbox:</h2>
                                            <ol className="list-decimal ps-4 space-y-3 text-base font-medium text-gray-700 dark:text-gray-300 columns-1 md:columns-2">
                                                <li><a href="#step-1-intro" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Flexbox چیست و چرا به آن نیاز داریم؟ (مفاهیم کلیدی)</a></li>
                                                <li><a href="#step-2-setup" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">راه‌اندازی پروژه نمونه: HTML پایه</a></li>
                                                <li><a href="#step-3-flex-container" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">فعال‌سازی Flexbox: جادوی display: flex</a></li>
                                                <li><a href="#step-4-justify-content" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">تراز در محور اصلی: justify-content</a></li>
                                                <li><a href="#step-5-align-items" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">تراز در محور متقاطع: align-items</a></li>
                                                <li><a href="#step-6-wrapping" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">مدیریت خطوط چندگانه: flex-wrap و align-content</a></li>
                                                <li><a href="#step-7-flex-items" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">کنترل آیتم‌های فلکس: انعطاف‌پذیری و ترتیب</a></li>
                                                <li><a href="#step-8-project-build" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">تکمیل پروژه نمونه: Navbar و Card Layout نهایی</a></li>
                                                <li><a href="#step-9-usecases-responsive" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">کاربردهای رایج و طراحی واکنش‌گرا با Flexbox</a></li>
                                                <li><a href="#faq" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">پرسش‌های متداول درباره Flexbox</a></li>
                                                <li><a href="#conclusion" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">جمع‌بندی: Flexbox، ابزار قدرتمند شما</a></li>
                                            </ol>

                                        </nav>


                                        {/* شروع گام ۱ */}
                                        <section id="step-1-intro" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-secondary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۱</span>
                                                <div>
                                                    Flexbox چیست و چرا به آن نیاز داریم؟ (مفاهیم کلیدی)
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">آشنایی با فلسفه و اجزای اصلی Flexbox.</p>
                                                </div>
                                            </h2>

                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                قبل از اینکه دست به کد شویم، بیایید بفهمیم Flexbox دقیقاً چیست. <strong className="font-semibold">CSS Flexible Box Layout</strong>، که معمولاً به آن Flexbox گفته می‌شود، یک مدل چیدمان یک‌بعدی در CSS است. هدف اصلی آن ارائه راهی کارآمدتر برای <strong className="font-semibold">چیدمان (layout)، تراز کردن (alignment) و توزیع فضا (distribution)</strong> بین آیتم‌ها در یک کانتینر است، حتی زمانی که اندازه آن آیتم‌ها نامشخص یا پویا باشد (از این رو "Flexible" نامیده می‌شود).
                                            </p>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                چرا Flexbox مهم است؟ پیش از آن، طراحان وب مجبور بودند از ترفندهایی مانند float، clear، display: inline-block و هک‌های position استفاده کنند که اغلب منجر به کدهای پیچیده، شکننده و سخت برای نگهداری می‌شد. Flexbox این مشکلات را با ارائه یک مدل منطقی و مجموعه‌ای از خصوصیات قدرتمند حل کرد. این مدل به خصوص برای طراحی <strong className="font-semibold">رابط‌های کاربری (UI) مدرن و واکنش‌گرا (Responsive)</strong> بسیار کارآمد است.
                                            </p>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">مفاهیم پایه Flexbox: کانتینر و آیتم‌ها</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                مدل Flexbox بر اساس دو جزء اصلی کار می‌کند:
                                            </p>
                                            <ul className="list-disc ps-4 space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li className="mb-3"><strong className="font-semibold text-primary-700 dark:text-primary-300">Flex Container (کانتینر فلکس):</strong> عنصری که خصوصیت display: flex یا display: inline-flex روی آن اعمال می‌شود. این عنصر والد آیتم‌های فلکس است و خصوصیات آن نحوه چیدمان کلی آیتم‌های درونش را کنترل می‌کنند.</li>
                                                <li className="mb-3"><strong className="font-semibold text-secondary-700 dark:text-secondary-300">Flex Items (آیتم‌های فلکس):</strong> فرزندان مستقیم Flex Container. خصوصیات اعمال شده روی این آیتم‌ها، رفتار فردی آن‌ها (مانند اندازه، ترتیب و تراز) را در داخل کانتینر تعیین می‌کنند.</li>
                                            </ul>

                                            <div className="my-6 md:my-8 lg:my-10 flex flex-col items-center group">
                                                [IMAGE PLACEHOLDER]
                                                <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic max-w-prose">نمایش بصری یک Flex Container و Flex Item های درون آن.</figcaption>
                                            </div>
                                            ---
                                            [Image Suggestion Type]: AI Generation
                                            [Image Prompt Suggestion]: "A simple, clear diagram showing a rectangle labeled 'Flex Container (display: flex)' containing three smaller rectangles labeled 'Flex Item 1', 'Flex Item 2', 'Flex Item 3'. Use distinct but complementary colors, perhaps based on the Virtual Learn palette (primary blue for container, secondary/success/warning for items). Add subtle arrows indicating the parent-child relationship. Keep it clean and educational. Aspect ratio 16:9."
                                            [Suggested Alt Text]: "دیاگرام مفهومی Flex Container و Flex Items در CSS Flexbox"
                                            [Suggested Dimensions]: 16:9 (e.g., 1280x720)
                                            ---

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">محورهای اصلی (Main Axis) و متقاطع (Cross Axis)</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                درک مفهوم محورها در Flexbox حیاتی است. برخلاف مدل‌های چیدمان سنتی که بر اساس جهت‌های بلوکی (عمودی) و خطی (افقی) بودند، Flexbox دارای دو محور است:
                                            </p>
                                            <ul className="list-disc ps-4 space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li className="mb-3"><strong className="font-semibold">محور اصلی (Main Axis):</strong> جهتی که آیتم‌های فلکس در آن چیده می‌شوند. این محور توسط خصوصیت flex-direction تعیین می‌شود (که به زودی بررسی می‌کنیم). به طور پیش‌فرض، محور اصلی افقی است (`row`).</li>
                                                <li className="mb-3"><strong className="font-semibold">محور متقاطع (Cross Axis):</strong> محوری که عمود بر محور اصلی است. اگر محور اصلی افقی باشد، محور متقاطع عمودی خواهد بود و بالعکس.</li>
                                            </ul>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                بسیاری از خصوصیات Flexbox بر اساس این دو محور عمل می‌کنند (مانند justify-content برای محور اصلی و align-items برای محور متقاطع).
                                            </p>

                                            <div className="my-6 md:my-8 lg:my-10 flex flex-col items-center group">
                                                [IMAGE PLACEHOLDER]
                                                <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic max-w-prose">نمایش محور اصلی و محور متقاطع در حالت flex-direction: row (پیش‌فرض).</figcaption>
                                            </div>
                                            ---
                                            [Image Suggestion Type]: Online Search / Existing Resource
                                            [Suggested Search Terms]: "css flexbox main axis cross axis diagram", "flexbox axes illustration"
                                            [Notes]: "Look for a clear diagram showing both axes for the default row direction. Ensure it's royalty-free or properly attributed if needed."
                                            [Suggested Alt Text]: "دیاگرام محور اصلی (Main Axis) و محور متقاطع (Cross Axis) در CSS Flexbox حالت row"
                                            ---

                                        </section>
                                        {/* پایان گام ۱ */}

                                        {/* شروع گام ۲ */}
                                        <section id="step-2-setup" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-success-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۲</span>
                                                <div>
                                                    راه‌اندازی پروژه نمونه: HTML پایه
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">ایجاد ساختار HTML برای تمرین عملی Flexbox.</p>
                                                </div>
                                            </h2>

                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                برای یادگیری عملی Flexbox، ما دو مثال کوچک می‌سازیم: یک <strong className="font-semibold">نوار ناوبری ساده (Navbar)</strong> و یک <strong className="font-semibold">چیدمان کارتی (Card Layout)</strong>{". ابتدا ساختار HTML مورد نیاز را ایجاد می‌کنیم. یک فایل به نام index.html و یک فایل به نام style.css در یک پوشه ایجاد کنید."}
                                            </p>

                                            <div className="my-6 md:my-8">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">محتوای فایل index.html:</p>



                                                <Code lang="html">

                                                    {`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>آموزش Flexbox</title>
    <link rel="stylesheet" href="style.css">
    {/* افزودن فونت وزیرمتن برای خوانایی بهتر فارسی */}
    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
    <style>
        /* استایل های پایه برای نمایش بهتر - در فایل style.css قرار می گیرد */
        body {
            font-family: 'Vazirmatn', sans-serif;
            margin: 20px;
            background-color: #f8f9fa;
            color: #333;
        }
        .container {
            max-width: 960px;
            margin: 30px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h1, h2 { text-align: center; margin-bottom: 30px; color: #0065D9; }

        /* --- Navbar Styles (Initial) --- */
        .navbar { background-color: #004EBA; padding: 10px 20px; border-radius: 5px; margin-bottom: 40px; }
        .navbar ul { list-style: none; padding: 0; margin: 0; }
        .navbar li { margin: 0 10px; }
        .navbar a { color: white; text-decoration: none; font-size: 1.1em; }
        .logo { font-weight: bold; color: #FFA100; font-size: 1.3em; } /* لوگو سمت راست */
        .nav-links { /* محفظه لینک ها */ }

        /* --- Card Layout Styles (Initial) --- */
        .card-container { margin-top: 40px; }
        .card {
            background-color: #e9ecef;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px; /* برای فاصله اولیه قبل از فلکس */
            width: 200px; /* عرض ثابت اولیه برای نمایش مشکل بدون فلکس */
        }
        .card h3 { margin-top: 0; color: #003A9C; }
        .card p { font-size: 0.9em; color: #555; }

        /* --- Helper classes for visualization (Temporary) --- */
        .flex-container {
            border: 2px dashed #ff006e;
            padding: 10px;
            background-color: rgba(255, 0, 110, 0.05);
            min-height: 100px; /* برای نمایش بهتر */
        }
        .flex-item {
            background-color: #caebfd;
            border: 1px solid #96d3fb;
            padding: 15px;
            text-align: center;
            color: #004EBA;
            font-weight: bold;
            margin: 5px; /* برای دیدن فاصله */
        }

    </style>
</head>
<body>

    <h1>آموزش جامع Flexbox</h1>

    <div class="container">
        <h2>مثال ۱: نوار ناوبری (Navbar)</h2>
        {/* --- Navbar HTML --- */}
        <nav class="navbar flex-container"> {/* کانتینر فلکس */}
            <a href="#" class="logo flex-item">Virtual Learn</a>
            <ul class="nav-links flex-item"> {/* آیتم فلکس (لیست لینک ها) */}
                <li><a href="#">خانه</a></li>
                <li><a href="#">دوره‌ها</a></li>
                <li><a href="#">وبلاگ</a></li>
                <li><a href="#">تماس با ما</a></li>
            </ul>
            <a href="#" class="login-btn flex-item">ورود</a> {/* آیتم فلکس */}
        </nav>
        <p>هدف: چیدمان لوگو در سمت راست، لینک‌ها در وسط و دکمه ورود در سمت چپ.</p>
    </div>

    <div class="container">
        <h2>مثال ۲: چیدمان کارت‌ها (Card Layout)</h2>
         {/* --- Card Layout HTML --- */}
        <div class="card-container flex-container"> {/* کانتینر فلکس */}
            <div class="card flex-item"> {/* آیتم فلکس */}
                <h3>کارت ۱</h3>
                <p>محتوای کارت شماره یک.</p>
            </div>
            <div class="card flex-item"> {/* آیتم فلکس */}
                <h3>کارت ۲</h3>
                <p>این کارت محتوای بیشتری دارد تا ارتفاع آن متفاوت باشد.</p>
            </div>
             <div class="card flex-item"> {/* آیتم فلکس */}
                <h3>کارت ۳</h3>
                <p>کارت سوم.</p>
            </div>
            <div class="card flex-item"> {/* آیتم فلکس */}
                <h3>کارت ۴</h3>
                <p>و کارت چهارم.</p>
            </div>
        </div>
         <p>هدف: چیدمان کارت‌ها در کنار هم به صورت انعطاف‌پذیر و با تراز مناسب.</p>
    </div>

</body>
</html>
`}
                                                </Code>

                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                                                    ما ساختار HTML اولیه را با چند استایل پایه برای نمایش بهتر ایجاد کردیم. کلاس‌های
                                                    <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono">flex-container</code> و
                                                    <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono">flex-item</code>{" و استایل‌های کمکی داخل تگ `<style>` فقط برای تجسم بهتر در طول آموزش هستند و در نهایت به فایل style.css منتقل و پاکسازی خواهند شد. فعلاً فایل style.css خالی است."}
                                                </p>
                                            </div>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-6">
                                                اگر این فایل HTML را در مرورگر باز کنید، می‌بینید که عناصر هنوز چیدمان مناسبی ندارند. نوار ناوبری به هم ریخته است و کارت‌ها زیر هم قرار گرفته‌اند. حالا با Flexbox این وضعیت را تغییر خواهیم داد!
                                            </p>

                                        </section>
                                        {/* پایان گام ۲ */}

                                        {/* شروع گام ۳ */}
                                        <section id="step-3-flex-container" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-primary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۳</span>
                                                <div>
                                                    فعال‌سازی Flexbox: جادوی display: flex
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">اولین و مهم‌ترین قدم: تبدیل یک عنصر به Flex Container.</p>
                                                </div>
                                            </h2>

                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                برای اینکه مدل چیدمان Flexbox را فعال کنیم، کافی است به عنصر والد (کانتینر) که می‌خواهیم فرزندانش (آیتم‌ها) را با Flexbox بچینیم، خصوصیت <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">display</code> را با مقدار <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex</code> بدهیم. همچنین مقدار <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">inline-flex</code> وجود دارد که کانتینر را مانند یک عنصر inline رفتار می‌کند، اما فرزندانش همچنان طبق قوانین Flexbox چیده می‌شوند. ما از flex استفاده می‌کنیم.
                                            </p>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                {' بیایید این خصوصیت را به کانتینرهای پروژه نمونه خود (یعنی <nav class="navbar"> و <div class="card-container">) اضافه کنیم. کد زیر را به فایل style.css خود اضافه کنید (یا اگر فعلاً از تگ `<style>` در HTML استفاده می‌کنید، به آنجا اضافه کنید):'}
                                            </p>

                                            <div className="my-6 md:my-8">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">{"افزودن به فایل style.css:"}</p>
                                                <Code lang="css">
                                                    {`/* --- Flexbox Activation --- */
.navbar {
    display: flex;
    /* فعلا خصوصیات دیگر را برای Navbar اضافه می‌کنیم تا نتیجه را ببینیم */
    align-items: center; /* تراز عمودی آیتم ها در وسط */
    justify-content: space-between; /* توزیع فضا بین آیتم ها */
}

.navbar ul {
    display: flex; /* لیست لینک ها هم خودش یک فلکس کانتینر برای li ها شد */
    /* استایل های قبلی ul حذف یا اصلاح می شوند */
    list-style: none;
    padding: 0;
    margin: 0;
}

.card-container {
    display: flex;
}`}
                                                </Code>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                                                    همچنین استایل‌های کمکی `.flex-container` و `.flex-item` و کلاس‌های مربوطه در HTML را حذف کنید، چون دیگر مستقیماً از display: flexاستفاده می‌کنیم. ما همچنین چند خصوصیت دیگر Flexbox (align-items و justify-content برای navbar، و display: flexبرای ul) را اضافه کردیم تا نتیجه اولیه بهتر دیده شود، در گام‌های بعدی آنها را توضیح خواهیم داد.
                                                </p>
                                            </div>

                                            <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-6 mb-6">
                                                حالا صفحه index.html را دوباره در مرورگر باز کنید یا رفرش کنید. چه اتفاقی افتاد؟
                                                <ul className="list-disc ps-4 space-y-2 my-4">
                                                    <li>آیتم‌های درون نوار ناوبری (لوگو، لیست لینک‌ها، دکمه ورود) حالا <strong className="font-semibold">در یک ردیف افقی</strong> قرار گرفته‌اند و با فاصله بینشان توزیع شده‌اند. لینک‌های داخل ul نیز کنار هم قرار گرفته‌اند.</li>
                                                    <li>کارت‌ها نیز حالا <strong className="font-semibold">در یک ردیف افقی</strong> کنار هم چیده شده‌اند (ممکن است از کانتینر بیرون بزنند اگر عرض کافی نباشد، که بعداً با flex-wrap حل می‌کنیم).</li>
                                                </ul>
                                                این قدرت display: flexاست! به طور پیش‌فرض، آیتم‌ها را در یک ردیف افقی (محور اصلی پیش‌فرض) قرار می‌دهد.
                                            </div>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">تغییر جهت: flex-direction</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                خصوصیت <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex-direction</code> روی Flex Container اعمال می‌شود و جهت محور اصلی (و در نتیجه جهت چیده شدن آیتم‌ها) را تعیین می‌کند. مقادیر اصلی آن عبارتند از:
                                            </p>
                                            <ul className="list-disc ps-4 space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">row</code>: (مقدار پیش‌فرض) آیتم‌ها به صورت افقی از چپ به راست (در زبان‌های LTR) یا راست به چپ (در زبان‌های RTL مانند فارسی) چیده می‌شوند. محور اصلی افقی است.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">row-reverse</code>: مانند rowاما در جهت معکوس.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">column</code>: آیتم‌ها به صورت عمودی از بالا به پایین چیده می‌شوند. محور اصلی عمودی است.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">column-reverse</code>: مانند column اما در جهت معکوس (از پایین به بالا).</li>
                                            </ul>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                برای مثال، اگر به .card-container خود flex-direction: column; اضافه کنیم، کارت‌ها دوباره زیر هم قرار می‌گیرند (اما همچنان یک Flex Context فعال است). فعلاً ما همان حالت پیش‌فرض rowرا برای هر دو مثال نیاز داریم.
                                            </p>

                                        </section>
                                        {/* پایان گام ۳ */}

                                        {/* شروع گام ۴ */}
                                        <section id="step-4-justify-content" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-warning-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۴</span>
                                                <div>
                                                    تراز در محور اصلی: justify-content
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">نحوه توزیع فضا بین آیتم‌ها در طول محور اصلی.</p>
                                                </div>
                                            </h2>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                خصوصیت <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">justify-content</code> که روی Flex Container اعمال می‌شود، نحوه توزیع فضای خالی باقی‌مانده در <strong className="font-semibold">محور اصلی</strong> بین آیتم‌ها را کنترل می‌کند. این یکی از پرکاربردترین خصوصیات Flexbox است. مقادیر مهم آن:
                                            </p>
                                            <ul className="list-disc ps-4 space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex-start</code>: (پیش‌فرض) آیتم‌ها به ابتدای محور اصلی می‌چسبند.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex-end</code>: آیتم‌ها به انتهای محور اصلی می‌چسبند.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">center</code>: آیتم‌ها در مرکز محور اصلی قرار می‌گیرند.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">space-between</code>: اولین آیتم به ابتدا و آخرین آیتم به انتها می‌چسبد و فضای خالی به طور مساوی بین آیتم‌های میانی توزیع می‌شود. (ما از این مقدار برای Navbar استفاده کردیم).</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">space-around</code>: فضای خالی به طور مساوی در اطراف هر آیتم توزیع می‌شود (فاصله در ابتدا و انتها نصف فاصله بین آیتم‌هاست).</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">space-evenly</code>: فضای خالی به طور کاملاً مساوی بین هر جفت آیتم مجاور و همچنین قبل از اولین و بعد از آخرین آیتم توزیع می‌شود.</li>
                                            </ul>

                                            <div className="my-6 md:my-8 lg:my-10 flex flex-col items-center group">
                                                [IMAGE PLACEHOLDER]
                                                <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic max-w-prose">نمایش بصری مقادیر مختلف justify-content.</figcaption>
                                            </div>
                                            ---
                                            [Image Suggestion Type]: Online Search / Existing Resource
                                            [Suggested Search Terms]: "css flexbox justify-content examples visual", "justify-content visual guide"
                                            [Notes]: "Look for a clear image or GIF showing boxes aligned differently based on justify-content values (flex-start, center, space-between, space-around, space-evenly). A well-known guide like the one from CSS-Tricks is ideal."
                                            [Suggested Alt Text]: "نمایش تصویری مقادیر مختلف خصوصیت justify-content در CSS Flexbox"
                                            ---

                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-6 mb-6">
                                                در مثال Navbar، ما از justify-content: space-between; استفاده کردیم تا لوگو به راست (در RTL)، دکمه ورود به چپ، و لیست لینک‌ها در فضای باقی‌مانده وسط قرار گیرند (البته رفتار دقیق ul ممکن است نیاز به تنظیمات بیشتری روی آیتم‌های فلکس داشته باشد که بعداً می‌بینیم).
                                                برای مثال کارت‌ها، اگر می‌خواستیم آن‌ها را در مرکز کانتینر قرار دهیم، می‌توانستیم از justify-content: center; استفاده کنیم (البته اگر فضای خالی وجود داشته باشد).
                                            </p>
                                        </section>
                                        {/* پایان گام ۴ */}

                                        {/* شروع گام ۵ */}
                                        <section id="step-5-align-items" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-danger-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۵</span>
                                                <div>
                                                    تراز در محور متقاطع: align-items
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">نحوه چیدمان آیتم‌ها در طول محور متقاطع.</p>
                                                </div>
                                            </h2>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                خصوصیت <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">align-items</code> که روی Flex Container اعمال می‌شود، نحوه تراز شدن آیتم‌ها در طول <strong className="font-semibold">محور متقاطع</strong> را کنترل می‌کند. مقادیر اصلی آن:
                                            </p>
                                            <ul className="list-disc ps-4 space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">stretch</code>: (پیش‌فرض) آیتم‌ها کشیده می‌شوند تا ارتفاع (یا عرض، اگر flex-direction: column باشد) کانتینر را پر کنند (مگر اینکه ارتفاع/عرض مشخصی داشته باشند).</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex-start</code>: آیتم‌ها به ابتدای محور متقاطع می‌چسبند.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex-end</code>: آیتم‌ها به انتهای محور متقاطع می‌چسبند.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">center</code>: آیتم‌ها در مرکز محور متقاطع قرار می‌گیرند. (ما از این مقدار برای Navbar استفاده کردیم تا همه چیز در یک راستای عمودی قرار گیرد).</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">baseline</code>: آیتم‌ها بر اساس خط پایه (baseline) محتوایشان تراز می‌شوند.</li>
                                            </ul>

                                            <div className="my-6 md:my-8 lg:my-10 flex flex-col items-center group">
                                                [IMAGE PLACEHOLDER]
                                                <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic max-w-prose">نمایش بصری مقادیر مختلف align-items.</figcaption>
                                            </div>
                                            ---
                                            [Image Suggestion Type]: Online Search / Existing Resource
                                            [Suggested Search Terms]: "css flexbox align-items examples visual", "align-items visual guide"
                                            [Notes]: "Look for a clear image or GIF showing boxes aligned vertically (for row direction) based on align-items values (stretch, flex-start, center, etc.). Guides like CSS-Tricks are good sources."
                                            [Suggested Alt Text]: "نمایش تصویری مقادیر مختلف خصوصیت align-items در CSS Flexbox"
                                            ---

                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-6 mb-6">
                                                در مثال Navbar، استفاده از align-items: center;باعث می‌شود لوگو، لیست لینک‌ها و دکمه ورود، همگی در مرکز عمودی نوار ناوبری قرار بگیرند که ظاهر مرتب‌تری ایجاد می‌کند.
                                                در مثال کارت‌ها، اگر کارت‌ها ارتفاع‌های متفاوتی داشته باشند (که در مثال ما اینطور است)، align-items نحوه قرارگیری عمودی آن‌ها نسبت به هم را تعیین می‌کند. مثلاً با align-items: flex-start; همه از بالا تراز می‌شوند.
                                            </p>
                                            <div className="flex items-start border-l-4 border-secondary-400 bg-secondary-50 dark:bg-gray-800 p-4 rounded-lg my-6 shadow-sm">
                                                <svg className="flex-shrink-0 h-6 w-6 text-secondary-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <div>
                                                    <strong className="font-semibold text-secondary-800 dark:text-secondary-200">نکته: align-self</strong>
                                                    <p className="text-secondary-700 dark:text-secondary-200/90 mt-1 text-sm md:text-base leading-relaxed">شما می‌توانید تراز عمودی یک <strong className="font-semibold">آیتم فلکس خاص</strong> را با استفاده از خصوصیت align-self روی خود آن آیتم، لغو (override) کنید. این خصوصیت همان مقادیر align-items را می‌پذیرد.</p>
                                                </div>
                                            </div>
                                        </section>
                                        {/* پایان گام ۵ */}

                                        {/* شروع گام ۶ */}
                                        <section id="step-6-wrapping" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-secondary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۶</span>
                                                {/* Info color used as secondary alternative */}
                                                <div>
                                                    مدیریت خطوط چندگانه: flex-wrap و align-content
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">وقتی آیتم‌ها در یک خط جا نمی‌شوند چه کنیم؟</p>
                                                </div>
                                            </h2>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                به طور پیش‌فرض، آیتم‌های فلکس سعی می‌کنند همگی در <strong className="font-semibold">یک خط (Single Line)</strong> باقی بمانند، حتی اگر این به معنی کوچک شدن یا بیرون زدن از کانتینر باشد (همان مشکلی که ممکن است در مثال کارت‌ها دیده باشید). خصوصیت <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex-wrap</code> روی Flex Container این رفتار را کنترل می‌کند:
                                            </p>
                                            <ul className="list-disc ps-4 space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">nowrap</code>: (پیش‌فرض) همه آیتم‌ها در یک خط فشرده می‌شوند.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">wrap</code>: آیتم‌ها اجازه دارند به خط (یا ستون، بسته به flex-direction) بعدی شکسته شوند اگر در خط فعلی جا نشوند.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">wrap-reverse</code>: مانندwrap اما خطوط جدید در جهت معکوس (بالا به جای پایین) ایجاد می‌شوند.</li>
                                            </ul>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                بیایید flex-wrap: wrap;را به .card-container خود اضافه کنیم تا کارت‌ها در صورت نیاز به خط بعدی بروند:
                                            </p>
                                            <div className="my-6 md:my-8">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">{"افزودن به استایل .card-container در style.css:"}</p>
                                                <Code lang="css">
                                                    {`.card-container {
    display: flex;
    flex-wrap: wrap; /* اجازه شکستن به خط بعدی */
    /* می‌توانید justify-content را هم اضافه کنید، مثلا: */
    /* justify-content: center; /* کارت‌ها در مرکز هر خط قرار گیرند */
}`}
                                                </Code>
                                            </div>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-6 mb-6">
                                                حالا اگر صفحه را رفرش کنید و عرض مرورگر را کم کنید، می‌بینید که کارت‌ها به جای فشرده شدن، به خط بعدی می‌روند و چیدمان بهتری ایجاد می‌شود.
                                            </p>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">تراز خطوط چندگانه: align-content</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                وقتی به دلیل flex-wrap: wrap خطوط (یا ستون‌های) متعددی ایجاد می‌شود، خصوصیت <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">align-content</code> روی Flex Container نحوه <strong className="font-semibold">توزیع فضای خالی بین این خطوط</strong> در محور متقاطع را تعیین می‌کند. توجه کنید که این خصوصیت تنها زمانی اثر دارد که بیش از یک خط وجود داشته باشد. مقادیر آن شبیه justify-content هستند:
                                            </p>
                                            <ul className="list-disc ps-4 space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li>flex-start, flex-end, center</li>
                                                <li>space-between, space-around, space-evenly</li>
                                                <li>`stretch` (پیش‌فرض): خطوط کشیده می‌شوند تا فضای کانتینر را پر کنند.</li>
                                            </ul>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                مثلاً اگر فضای عمودی اضافه در .card-container وجود داشت، align-content: center; تمام خطوط کارت‌ها را در مرکز عمودی کانتینر قرار می‌داد.
                                            </p>

                                            <div className="my-6 md:my-8 lg:my-10 flex flex-col items-center group">
                                                [IMAGE PLACEHOLDER]
                                                <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic max-w-prose">نمایش تفاوت align-items و align-content.</figcaption>
                                            </div>
                                            ---
                                            [Image Suggestion Type]: Online Search / Existing Resource
                                            [Suggested Search Terms]: "css flexbox align-items vs align-content", "align-content visual guide"
                                            [Notes]: "Look for a diagram clearly showing multiple lines of flex items and how align-content distributes space *between* the lines, contrasted with align-items which aligns items *within* a line. CSS-Tricks or MDN often have good visuals."
                                            [Suggested Alt Text]: "دیاگرام مقایسه نحوه عملکرد align-items و align-content در CSS Flexbox برای خطوط چندگانه"
                                            ---

                                        </section>
                                        {/* پایان گام ۶ */}

                                        {/* شروع گام ۷ */}
                                        <section id="step-7-flex-items" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-primary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۷</span>
                                                <div>
                                                    کنترل آیتم‌های فلکس: انعطاف‌پذیری و ترتیب
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">خصوصیاتی که روی فرزندان (Flex Items) اعمال می‌شوند.</p>
                                                </div>
                                            </h2>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                تا اینجا خصوصیاتی را دیدیم که روی Flex Container اعمال می‌شدند. حالا نوبت به خصوصیاتی می‌رسد که روی خود Flex Items (فرزندان مستقیم کانتینر) اعمال می‌شوند و رفتار آن‌ها را کنترل می‌کنند:
                                            </p>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">`order`</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                به طور پیش‌فرض، آیتم‌ها به همان ترتیبی که در HTML آمده‌اند، نمایش داده می‌شوند. خصوصیت <code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">order</code> به شما اجازه می‌دهد ترتیب بصری آیتم‌ها را بدون تغییر در HTML تغییر دهید. مقدار پیش‌فرض 0 است. آیتم‌ها با `order` کمتر، زودتر نمایش داده می‌شوند. مقادیر منفی نیز مجاز هستند.
                                                <br />
                                                مثال: order: -1; آیتم را به اول می‌برد. order: 1; آن را به بعد از آیتم‌های با order 0 منتقل می‌کند.
                                            </p>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">flex-grow</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                این خصوصیت تعیین می‌کند که یک آیتم چقدر از <strong className="font-semibold">فضای خالی مثبت</strong> موجود در کانتینر (در محور اصلی) را باید به خود اختصاص دهد (چقدر "رشد" کند). مقدار آن یک عدد بدون واحد (نسبت) است و پیش‌فرض آن 0 می‌باشد (یعنی آیتم رشد نمی‌کند).
                                                <br />
                                                اگر مجموع flex-grow همه آیتم‌ها 1 باشد، هر آیتم با flex-grow: 1 سهم مساوی از فضای خالی را می‌گیرد. اگر یک آیتم flex-grow: 2 و بقیه flex-grow: 1 باشند، آن آیتم دو برابر دیگران از فضای خالی سهم می‌برد.
                                            </p>
                                            <div className="flex items-start border-l-4 border-success-400 bg-success-50 dark:bg-gray-800 p-4 rounded-lg my-4 shadow-sm">
                                                <svg className="flex-shrink-0 h-6 w-6 text-success-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                                <div>
                                                    <strong className="font-semibold text-success-800 dark:text-success-200">کاربرد رایج:</strong>
                                                    <p className="text-success-700 dark:text-success-200/90 mt-1 text-sm md:text-base leading-relaxed">برای اینکه یک آیتم (مثلاً بخش محتوای اصلی) تمام فضای خالی باقی‌مانده در کنار آیتم‌های دیگر (مثل سایدبار) را پر کند، به آن آیتم flex-grow: 1; و به بقیه flex-grow: 0; (که پیش‌فرض است) می‌دهیم.</p>
                                                </div>
                                            </div>


                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">flex-shrink</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                این خصوصیت تعیین می‌کند که یک آیتم چقدر باید از <strong className="font-semibold">فضای منفی</strong> (وقتی فضا کم است و آیتم‌ها جا نمی‌شوند) کم کند (چقدر "کوچک" شود). مقدار پیش‌فرض آن 1 است، یعنی همه آیتم‌ها به نسبت مساوی کوچک می‌شوند (اگر فضای کافی نباشد و flex-wrap: nowrap`باشد). اگر مقدار آن 0 باشد، آیتم کوچک نمی‌شود و اندازه اصلی خود را حفظ می‌کند.
                                            </p>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">flex-basis</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                این خصوصیت <strong className="font-semibold">اندازه اولیه (ایده‌آل)</strong> یک آیتم را قبل از توزیع فضای خالی (توسط flex-grow یا flex-shrink) تعیین می‌کند. می‌تواند یک طول مشخص flex-basis(100px, 10em) یا درصد (50%) یا مقدار auto (پیش‌فرض، اندازه بر اساس محتوا یا width/heightتعیین می‌شود) یا content باشد.
                                            </p>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">flex (Shorthand)</h3>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                این یک خصوصیت مختصرنویسی (Shorthand) برای flex-grow, flex-shrink, و flex-basis به ترتیب است. استفاده از آن بسیار رایج است. مقادیر پیش‌فرض آن flex: 0 1 auto;می‌باشد.
                                            </p>
                                            <ul className="list-disc ps-4 space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex: 1;</code> مساوی است با flex: 1 1 0%;(رشد و کوچک شدن دارد، اندازه اولیه صفر). این باعث می‌شود آیتم‌ها فضای موجود را به نسبت مساوی تقسیم کنند.</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex: auto;</code> مساوی است با flex: 1 1 auto; (رشد و کوچک شدن دارد، اندازه اولیه بر اساس محتوا).</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex: none;</code> مساوی است با flex: 0 0 auto;(نه رشد می‌کند و نه کوچک می‌شود، اندازه اولیه بر اساس محتوا).</li>
                                                <li><code className="language-css bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">flex: 0 0 200px;</code> یعنی آیتم نه رشد کند، نه کوچک شود و اندازه اولیه‌اش ۲۰۰ پیکسل باشد.</li>
                                            </ul>

                                            <div className="overflow-x-auto my-6 md:my-8 shadow-lg rounded-xl border border-gray-300 dark:border-gray-700">
                                                <table className="w-full text-sm md:text-base">
                                                    <caption className="caption-top text-lg font-semibold text-gray-800 dark:text-gray-100 p-4 bg-gray-100 dark:bg-gray-800 rounded-t-xl">خلاصه خصوصیات Flex Item ها</caption>
                                                    <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-xs tracking-wider font-semibold">
                                                        <tr>
                                                            <th scope="col" className="p-3">خصوصیت</th>
                                                            <th scope="col" className="p-3">کاربرد</th>
                                                            <th scope="col" className="p-3">مقدار پیش‌فرض</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                                        <tr className="odd:bg-gray-50 dark:odd:bg-gray-800/60">
                                                            <td className="p-3 font-medium text-gray-900 dark:text-gray-100 font-mono">order</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300">تعیین ترتیب بصری آیتم</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300 font-mono">0</td>
                                                        </tr>
                                                        <tr className="even:bg-white dark:even:bg-gray-900">
                                                            <td className="p-3 font-medium text-gray-900 dark:text-gray-100 font-mono">flex-grow</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300">نسبت گرفتن فضای خالی مثبت</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300 font-mono">0</td>
                                                        </tr>
                                                        <tr className="odd:bg-gray-50 dark:odd:bg-gray-800/60">
                                                            <td className="p-3 font-medium text-gray-900 dark:text-gray-100 font-mono">flex-shrink</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300">نسبت کوچک شدن در کمبود فضا</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300 font-mono">1</td>
                                                        </tr>
                                                        <tr className="even:bg-white dark:even:bg-gray-900">
                                                            <td className="p-3 font-medium text-gray-900 dark:text-gray-100 font-mono">flex-basis</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300">اندازه اولیه آیتم</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300 font-mono">auto</td>
                                                        </tr>
                                                        <tr className="odd:bg-gray-50 dark:odd:bg-gray-800/60">
                                                            <td className="p-3 font-medium text-gray-900 dark:text-gray-100 font-mono">flex</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300">مختصرنویسی سه تای بالا</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300 font-mono">0 1 auto</td>
                                                        </tr>
                                                        <tr className="even:bg-white dark:even:bg-gray-900">
                                                            <td className="p-3 font-medium text-gray-900 dark:text-gray-100 font-mono">align-self</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300">تراز آیتم در محور متقاطع (لغو align-items)</td>
                                                            <td className="p-3 text-gray-600 dark:text-gray-300 font-mono">auto (ارث‌بری از align-items)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-6 mb-6">
                                                حالا با این خصوصیات می‌توانیم چیدمان Navbar و کارت‌ها را دقیق‌تر کنترل کنیم.
                                            </p>
                                        </section>
                                        {/* پایان گام ۷ */}

                                        {/* شروع گام ۸ */}
                                        <section id="step-8-project-build" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-secondary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۸</span>
                                                <div>
                                                    تکمیل پروژه نمونه: Navbar و Card Layout نهایی
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">اعمال تمام مفاهیم آموخته شده برای ساخت چیدمان‌های نهایی.</p>
                                                </div>
                                            </h2>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                {" حالا وقت آن است که با استفاده از تمام خصوصیاتی که یاد گرفتیم، چیدمان Navbar و Card Layout را نهایی کنیم. استایل‌های زیر را به فایل style.css اضافه یا جایگزین کنید (استایل‌های پایه و کمکی که قبلاً اضافه کردیم را حذف یا اصلاح کنید):"}
                                            </p>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">استایل نهایی Navbar</h3>
                                            <div className="my-6 md:my-8">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">{"افزودن/جایگزینی در style.css:"}</p>
                                                <Code lang="css">
                                                    {`/* --- Final Navbar Styles --- */
.navbar {
    display: flex;
    align-items: center; /* تراز عمودی آیتم‌ها در مرکز */
    justify-content: space-between; /* توزیع فضا: لوگو راست، دکمه چپ، لینک‌ها وسط */
    background-color: #004EBA;
    padding: 15px 30px; /* پدینگ بیشتر */
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 4px 10px rgba(0, 78, 186, 0.2);
}

.navbar .logo {
    color: #FFA100;
    font-weight: bold;
    font-size: 1.5em;
    text-decoration: none;
    /* flex-grow: 0; flex-shrink: 0; flex-basis: auto; (پیش‌فرض، نیازی به نوشتن نیست) */
}

.navbar .nav-links {
    display: flex; /* فرزندان (li) این ul هم فلکس می‌شوند */
    list-style: none;
    padding: 0;
    margin: 0;
    /* این بخش فضای میانی را پر می‌کند */
    /* flex-grow: 1; /* اگر می‌خواستیم لینک‌ها فضای بیشتری بگیرند */
    /* justify-content: center; /* اگر می‌خواستیم لینک‌ها دقیقاً وسط باشند */
}

.navbar .nav-links li {
    margin: 0 15px; /* فاصله بیشتر بین لینک‌ها */
}

.navbar .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1em;
    transition: color 0.2s ease-in-out;
}

.navbar .nav-links a:hover {
    color: #96D3FB; /* رنگ روشن‌تر هنگام هاور */
}

.navbar .login-btn {
    color: #004EBA;
    background-color: white;
    padding: 8px 18px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95em;
    transition: background-color 0.2s, color 0.2s;
    /* flex-grow: 0; flex-shrink: 0; (پیش‌فرض) */
}

.navbar .login-btn:hover {
    background-color: #f1f1f1;
}`}

                                                </Code>
                                            </div>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-6 mb-6">
                                                با این استایل‌ها، Navbar ظاهری حرفه‌ای‌تر پیدا می‌کند. justify-content: space-between عناصر اصلی (لوگو، لیست، دکمه) را توزیع می‌کند و align-items: center آن‌ها را در مرکز عمودی قرار می‌دهد. همچنین display: flex روی ul.nav-links باعث می‌شود li ها کنار هم قرار گیرند.
                                            </p>

                                            <h3 className="text-gray-800 dark:text-white text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-3">استایل نهایی Card Layout</h3>
                                            <div className="my-6 md:my-8">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">{"افزودن/جایگزینی در style.css:"}</p>
                                                <Code lang="css">
                                                    {`/* --- Final Card Layout Styles --- */
.card-container {
    display: flex;
    flex-wrap: wrap; /* اجازه شکستن خط */
    gap: 20px; /* ایجاد فاصله مساوی بین آیتم‌ها (جایگزین margin) */
    /* justify-content: center; /* اختیاری: کارت‌ها در مرکز هر خط باشند */
    margin-top: 40px;
    border: none; /* حذف بوردر کمکی */
    padding: 0;
    background-color: transparent;
}

.card {
    background-color: #ffffff; /* پس زمینه سفید */
    border: 1px solid #dee2e6;
    border-radius: 12px; /* گردی بیشتر */
    padding: 25px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    /* --- Flex Item Properties --- */
    /* flex-grow: 1; */  /* باعث می‌شود همه کارت‌ها عرض مساوی بگیرند و فضا را پر کنند */
    /* flex-shrink: 1; */ /* پیش‌فرض */
    flex-basis: 250px; /* عرض اولیه هر کارت، وقتی فضا هست */
    /* معادل: flex: 1 1 250px; (اگر flex-grow: 1 باشد) */
    /* یا: flex: 0 1 250px; (اگر نمی‌خواهیم رشد کنند) - این مورد معمولا بهتر است */
    flex: 0 1 250px;

    margin: 0; /* حذف margin قبلی چون از gap استفاده کردیم */
    display: flex; /* خود کارت هم یک فلکس کانتینر عمودی برای محتوایش می‌شود */
    flex-direction: column;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card h3 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #003A9C;
    font-size: 1.2em;
}

.card p {
    font-size: 0.95em;
    color: #495057;
    line-height: 1.6;
    flex-grow: 1; /* باعث می‌شود پاراگراف فضای خالی عمودی کارت را پر کند (اگر دکمه باشد) */
    margin-bottom: 0;
}

/* (اختیاری) افزودن دکمه به کارت */
/* .card .card-button {
    margin-top: 20px;
    padding: 8px 15px;
    background-color: #079CED;
    color: white;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s;
    align-self: flex-start; /* دکمه به سمت چپ/راست کارت نچسبد */
} */
/* .card .card-button:hover { background-color: #0579CB; } */
`}
                                                </Code>
                                            </div>

                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-6 mb-6">
                                                در اینجا، display: flexو flex-wrap: wrap را روی کانتینر اعمال کردیم. gap: 20px روش مدرن‌تری برای ایجاد فاصله بین آیتم‌های فلکس (و گرید) است. مهم‌ترین بخش، تنظیم خصوصیت flex روی خود .card است. با flex: 0 1 250px; می‌گوییم که کارت‌ها نباید رشد کنند (flex-grow: 0)، می‌توانند در صورت نیاز کوچک شوند (flex-shrink: 1) و عرض پایه‌شان 250px است. این باعث می‌شود در هر ردیف تا جایی که جا باشد، کارت‌های 250 پیکسلی قرار گیرند و بقیه به خط بعد بروند. همچنین خود کارت را flex با flex-direction: column کردیم تا بتوانیم محتوای داخل آن (مثل دکمه احتمالی) را بهتر مدیریت کنیم.
                                            </p>
                                            <div className="my-6 md:my-8 lg:my-10 flex flex-col items-center group">
                                                [IMAGE PLACEHOLDER]
                                                <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic max-w-prose">نتیجه نهایی چیدمان کارت‌ها با Flexbox.</figcaption>
                                            </div>
                                            ---
                                            [Image Suggestion Type]: Author Creation (Screenshot)
                                            [Description of Content Needed]: "A clean screenshot of the browser rendering the card layout section after applying the final CSS. Show multiple cards arranged horizontally, wrapping to the next line if the screen width is reduced slightly. Ensure the styling (background, border, shadow, padding) is visible."
                                            [Suggested Alt Text]: "اسکرین شات نتیجه نهایی پروژه کارت‌های محصول واکنش‌گرا با استفاده از CSS Flexbox"
                                            [Suggested Dimensions]: 16:9 or similar standard web screenshot ratio.
                                            ---
                                        </section>
                                        {/* پایان گام ۸ */}


                                        {/* شروع گام ۹ */}
                                        <section id="step-9-usecases-responsive" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">
                                            <h2 className="flex items-start gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                <span className="bg-success-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center md:text-xl font-bold flex-shrink-0 shadow-lg">۹</span>
                                                <div>
                                                    کاربردهای رایج و طراحی واکنش‌گرا با Flexbox
                                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">فراتر از مثال‌ها: Flexbox در دنیای واقعی.</p>
                                                </div>
                                            </h2>
                                            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mb-6">
                                                Flexbox فقط برای ساخت Navbar و کارت نیست! قدرت واقعی آن در ساده‌سازی بسیاری از الگوهای چیدمان رایج و کمک به طراحی واکنش‌گرا مشخص می‌شود:
                                            </p>
                                            <ul className="list-disc ps-4 space-y-4 text-gray-800 dark:text-gray-200 text-base md:text-lg mb-6">
                                                <li className="mb-3">
                                                    <strong className="font-semibold text-primary-700 dark:text-primary-300">وسط‌چین کردن کامل (Perfect Centering):</strong> وسط‌چین کردن یک آیتم هم به صورت افقی و هم عمودی که قبلاً چالش‌برانگیز بود، با Flexbox بسیار ساده است:
                                                    <div className="my-4">
                                                        <Code lang="css">
                                                            {`.parent {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;    /* Center vertically */
    min-height: 300px; /* Ensure parent has height */
}
.child { /* The item to be centered */ }`}
                                                        </Code>
                                                    </div>
                                                </li>
                                                <li className="mb-3">
                                                    <strong className="font-semibold text-primary-700 dark:text-primary-300">چیدمان‌های Holy Grail (با سایدبار):</strong> ایجاد چیدمان‌های سه‌ستونه (هدر، فوتر، محتوا، دو سایدبار) با Flexbox بسیار ساده‌تر از روش‌های قدیمی است (معمولاً با ترکیب flex-grow و flex-basis).
                                                </li>
                                                <li className="mb-3">
                                                    <strong className="font-semibold text-primary-700 dark:text-primary-300">کنترل آیتم‌های فرم:** چیدمان آسان برچسب‌ها (Labels) و ورودی‌ها (Inputs) در کنار هم یا زیر هم. </strong></li>
                                                <li className="mb-3">
                                                    <strong className="font-semibold text-primary-700 dark:text-primary-300">طراحی واکنش‌گرا (Responsive Design):</strong> قدرت اصلی Flexbox در واکنش‌گرایی است. با ترکیب Flexbox و <strong className="font-semibold">Media Queries</strong>، می‌توانید چیدمان را بر اساس عرض صفحه تغییر دهید. مثال:
                                                    <div className="my-4">
                                                        <Code lang="css">
                                                            {`/* Default styles (Mobile First) */
.card-container {
    display: flex;
    flex-direction: column; /* کارت ها زیر هم در موبایل */
    gap: 15px;
}

.card {
    flex-basis: auto; /* عرض کامل در ستون */
}

/* Styles for larger screens (e.g., tablets and up) */
@media (min-width: 768px) {
    .card-container {
        flex-direction: row; /* کارت ها کنار هم در تبلت و دسکتاپ */
        flex-wrap: wrap;
        gap: 20px;
    }
    .card {
        flex: 0 1 calc(50% - 10px); /* دو کارت در هر ردیف با فاصله */
        /* calc(50% - half the gap) */
    }
}

/* Styles for even larger screens (e.g., desktops) */
@media (min-width: 992px) {
    .card {
        flex-basis: calc(33.333% - 14px); /* سه کارت در هر ردیف */
         /* Roughly (100% / 3) - (2/3 * gap) */
    }
}`}
                                                        </Code>
                                                    </div>
                                                    این مثال نشان می‌دهد چگونه چیدمان کارت‌ها از ستونی در موبایل به ۲ ستونه در تبلت و ۳ ستونه در دسکتاپ تغییر می‌کند.
                                                </li>
                                            </ul>
                                            <div className="flex items-start border-l-4 border-secondary-400 bg-secondary-50 dark:bg-gray-800 p-4 rounded-lg my-6 shadow-sm">
                                                <svg className="flex-shrink-0 h-6 w-6 text-secondary-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <div>
                                                    <strong className="font-semibold text-secondary-800 dark:text-secondary-200">Flexbox در مقابل CSS Grid:</strong>
                                                    <p className="text-secondary-700 dark:text-secondary-200/90 mt-1 text-sm md:text-base leading-relaxed">Flexbox برای چیدمان‌های <strong className="font-semibold">یک‌بعدی</strong> (یا در یک ردیف یا در یک ستون) عالی است. برای چیدمان‌های پیچیده <strong className="font-semibold">دوبعدی</strong> (هم ردیف و هم ستون به طور همزمان، مانند یک جدول یا گرید کامل صفحه)، <strong className="font-semibold">CSS Grid Layout</strong> ابزار قدرتمند دیگری است که اغلب در کنار Flexbox استفاده می‌شود. یادگیری هر دو برای تسلط بر چیدمان مدرن CSS توصیه می‌شود.</p>
                                                </div>
                                            </div>
                                        </section>
                                        {/* پایان گام ۹ */}

                                        {/* --- بخش‌های پایانی --- */}

                                        <h2 id="faq" className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white my-10 md:my-12 lg:my-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">🤔 پرسش‌های متداول درباره Flexbox</h2>
                                        <div className="space-y-6 divide-y divide-gray-200 dark:divide-gray-700 max-w-3xl mx-auto">
                                            <div className="pt-6">
                                                <dt>
                                                    <button className="flex items-center justify-between w-full text-left group">
                                                        <strong className="font-semibold text-gray-800 dark:text-gray-100 text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">آیا Flexbox در همه مرورگرها پشتیبانی می‌شود؟ نیاز به پیشوند (Prefix) دارد؟</strong>
                                                    </button>
                                                </dt>
                                                <dd className="mt-3 pr-0">
                                                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">بله، Flexbox امروزه در تمام مرورگرهای مدرن (Chrome, Firefox, Safari, Edge) به طور کامل پشتیبانی می‌شود. نسخه‌های بسیار قدیمی مرورگرها (مانند اینترنت اکسپلورر ۱۰ و ۱۱) نیاز به پیشوندهای -ms- یا سینتکس قدیمی داشتند، اما برای توسعه مدرن وب، دیگر نیازی به نگرانی در مورد پیشوندهای استاندارد (`-webkit-, -moz-) برای Flexbox نیست و می‌توانید از سینتکس استاندارد استفاده کنید.</p>
                                                </dd>
                                            </div>
                                            <div className="pt-6">
                                                <dt>
                                                    <button className="flex items-center justify-between w-full text-left group">
                                                        <strong className="font-semibold text-gray-800 dark:text-gray-100 text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">چرا justify-content روی آیتم‌های من کار نمی‌کند؟</strong>
                                                    </button>
                                                </dt>
                                                <dd className="mt-3 pr-0">
                                                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">justify-content فضای خالی را توزیع می‌کند. اگر هیچ فضای خالی در محور اصلی وجود نداشته باشد (مثلاً مجموع عرض آیتم‌ها برابر یا بیشتر از عرض کانتینر باشد)، justify-content تأثیری نخواهد داشت. مطمئن شوید که کانتینر شما فضای کافی دارد یا از flex-shrink روی آیتم‌ها به درستی استفاده می‌کنید.</p>
                                                </dd>
                                            </div>
                                            <div className="pt-6">
                                                <dt>
                                                    <button className="flex items-center justify-between w-full text-left group">
                                                        <strong className="font-semibold text-gray-800 dark:text-gray-100 text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">چه زمانی باید از Flexbox و چه زمانی از CSS Grid استفاده کنم؟</strong>
                                                    </button>
                                                </dt>
                                                <dd className="mt-3 pr-0">
                                                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">قانون کلی خوب این است: Flexbox برای چیدمان‌های <strong className="font-semibold">یک‌بعدی</strong> (یک ردیف یا یک ستون، مانند Navbar، لیست کارت‌های ساده) عالی است. CSS Grid برای چیدمان‌های <strong className="font-semibold">دوبعدی</strong> (هم ردیف و هم ستون، مانند ساختار کلی صفحه، گالری‌های پیچیده) قدرتمندتر است. در عمل، این دو اغلب با هم ترکیب می‌شوند (مثلاً Grid برای ساختار کلی صفحه و Flexbox برای چیدمان محتوای داخل هر بخش گرید).</p>
                                                </dd>
                                            </div>
                                            {/* ... سوالات بیشتر در صورت نیاز ... */}
                                        </div>

                                        <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white my-10 md:my-12 lg:my-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600">جمع‌بندی: Flexbox، ابزار قدرتمند شما برای چیدمان مدرن</h2>
                                        <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify my-5 max-w-4xl mx-auto">
                                            تبریک می‌گوییم! شما با موفقیت مفاهیم کلیدی و کاربردی <strong className="font-semibold">CSS Flexbox</strong> را از طریق این راهنمای جامع و پروژه‌محور فرا گرفتید. دیدید که چگونه با استفاده از display: flexو خصوصیات مرتبط با کانتینر (flex-direction, justify-content, align-items, flex-wrap, align-content) و آیتم‌ها (`order`, flex-grow, flex-shrink, flex-basis, align-self) می‌توانید چیدمان‌های انعطاف‌پذیر، واکنش‌گرا و مرتبی ایجاد کنید. ساخت نوار ناوبری و چیدمان کارت‌ها به شما تجربه عملی کار با این مفاهیم را داد.
                                        </p>
                                        <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify my-5 max-w-4xl mx-auto">
                                            تسلط بر Flexbox یک <strong className="font-semibold">مهارت بنیادی</strong> برای هر توسعه‌دهنده وب مدرن است و درهای زیادی را در <strong className="font-semibold">بازار کار ایران</strong> و جهان به روی شما باز می‌کند. به تمرین ادامه دهید! سعی کنید چیدمان وب‌سایت‌های دیگر را با Flexbox بازسازی کنید یا از آن در پروژه‌های شخصی خود استفاده نمایید. هرچه بیشتر تمرین کنید، درک شما عمیق‌تر و استفاده شما از آن طبیعی‌تر خواهد شد.
                                        </p>

                                        {/* --- CTA --- */}
                                        <div className="mt-12 md:mt-16 lg:mt-20 py-10 md:py-14 px-6 bg-gradient-to-b from-primary-100/40 to-white dark:from-gray-900 dark:to-gray-800/60 rounded-t-2xl border-t-4 border-primary-500 text-center shadow-lg">
                                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-5">تسلط کامل بر طراحی وب واکنش‌گرا! 🚀</h2>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                                                Flexbox بخش مهمی از طراحی وب مدرن است. برای یادگیری کامل <strong className="font-semibold">HTML، CSS، Flexbox، CSS Grid</strong> و ساخت <strong className="font-semibold">وب‌سایت‌های کاملاً واکنش‌گرا و حرفه‌ای</strong> از صفر، گام بعدی شما اینجاست!
                                            </p>

                                            {/* معرفی دوره اصلی */}
                                            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-primary-300 dark:border-primary-700 transform transition hover:scale-[1.03] duration-300 mb-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4 flex items-center justify-center">
                                                    <span className="text-3xl mr-2">🎓</span> دوره پیشنهادی ویژه:
                                                </h3>
                                                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-5 font-medium">
                                                    <a href="https://vc-virtual-learn.com/courses/Build-Responsive-Real-World-Websites-with-HTML-and-CSS-Jonas-Schmedtmann" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-300 font-bold hover:underline decoration-wavy decoration-2 underline-offset-4">آموزش HTML & CSS ساخت سایت واکنشگرا (Jonas Schmedtmann)</a> در Virtual Learn، با <strong className="font-semibold">زیرنویس دقیق فارسی</strong>، شما را به یک متخصص طراحی وب تبدیل می‌کند و تمام تکنیک‌های لازم برای ساخت وب‌سایت‌های خیره‌کننده را به شما می‌آموزد.
                                                </p>
                                                <a href="https://vc-virtual-learn.com/courses/Build-Responsive-Real-World-Websites-with-HTML-and-CSS-Jonas-Schmedtmann" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-700 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">مشاهده جزئیات دوره و شروع تسلط بر CSS</a>
                                            </div>

                                            {/* دعوت به بحث */}
                                            <div className="mt-8 pt-6 border-t border-primary-200 dark:border-primary-700/50 max-w-3xl mx-auto">
                                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">💬 سوالی دارید یا نکته‌ای برای اشتراک‌گذاری؟</h4>
                                                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                                    تجربیات خود را از کار با Flexbox یا سوالاتی که در طول این آموزش برایتان پیش آمد، در بخش کامنت‌ها با ما و دیگران به اشتراک بگذارید!
                                                </p>
                                            </div>
                                        </div>


                                    </article>


                                </div>
                            </div>
                            <div className="w-full lg:w-[25%] px-4 md:p-0">
                                <CategoriesSidebar />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="gap-10 relative"><span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" /></div>
        </>
    );


}
