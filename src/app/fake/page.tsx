
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

                                    <article className="px-1"> {/* Enclosing the entire blog post content */}

                                        {/* ===== 1. عنوان اصلی (H1) ===== */}
                                        <h1 id="main-title" className="text-gray-900 dark:text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mt-10 mb-6 md:mb-8 lg:mb-10 text-center ">
                                            آموزش CSS Grid پروژه محور: ساخت چیدمان‌های مدرن از صفر تا صد
                                        </h1>

                                        {/* ===== 2. مقدمه (Introduction) ===== */}
                                        <section id="introduction" className="mb-10 md:mb-12">
                                            <p className=" md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                                                آیا از دست و پنجه نرم کردن با `float`، `inline-block` یا حتی محدودیت‌های Flexbox برای ساخت چیدمان‌های پیچیده وب خسته شده‌اید؟ خبر خوب این است که **CSS Grid Layout** آمده تا انقلابی در نحوه طراحی صفحات وب ایجاد کند!
                                            </p>
                                            <div className="mx-auto text-gray-800 dark:text-gray-200 text-base md:text-lg font-normal leading-loose text-justify space-y-5">
                                                <p>
                                                    به راهنمای جامع و **پروژه محور آموزش CSS Grid** وبلاگ ویرچوال لرن خوش آمدید! در این مقاله عمیق (بیش از ۴۰۰۰ کلمه)، قصد داریم شما را از سطح کاملاً مبتدی به نقطه‌ای برسانیم که بتوانید با اطمینان کامل، چیدمان‌های (Layouts) مدرن، واکنش‌گرا (Responsive) و پیچیده را با استفاده از قدرت شگفت‌انگیز **CSS Grid** پیاده‌سازی کنید. هدف ما فقط یادگیری تئوری نیست؛ ما با هم یک **پروژه عملی و جذاب** (مثلاً ساخت یک گالری عکس پیشرفته یا چیدمان یک صفحه وبلاگ کامل) را قدم به قدم خواهیم ساخت تا تمام مفاهیم را در عمل ببینید و تجربه کنید.
                                                </p>
                                                <p>
                                                    این راهنما برای **برنامه‌نویسان تازه‌کار** که به تازگی با HTML و CSS آشنا شده‌اند و همچنین **طراحان وب** که می‌خواهند مهارت‌های خود در زمینه چیدمان (Layout) را به‌روز و حرفه‌ای‌تر کنند، ایده‌آل است. ما تمام **مفاهیم کلیدی CSS Grid**، از اصول اولیه گرفته تا تکنیک‌های پیشرفته‌تر مانند `grid-template-areas`، توابع `minmax()` و `repeat()`، و نحوه ترکیب هوشمندانه Grid با Flexbox را پوشش خواهیم داد. در پایان این آموزش، شما قادر خواهید بود:
                                                </p>
                                                <ul className="list-disc  space-y-2 text-gray-700 dark:text-gray-300 ps-4 my-4">
                                                    <li>سیستم گرید (Grid System) خودتان را با CSS خالص بسازید.</li>
                                                    <li>چیدمان‌های پیچیده دو بعدی را به سادگی پیاده کنید.</li>
                                                    <li>وب‌سایت‌های کاملاً واکنش‌گرا با کنترل دقیق بر روی نقاط شکست (Breakpoints) طراحی کنید.</li>
                                                    <li>کدهای CSS خواناتر، کوتاه‌تر و قابل نگهداری‌تر برای بخش چیدمان بنویسید.</li>
                                                    <li>تفاوت‌ها و موارد استفاده بهینه CSS Grid و Flexbox را درک کنید.</li>
                                                </ul>
                                                <p>
                                                    پس اگر آماده‌اید تا قدرت واقعی چیدمان در CSS را کشف کنید و پروژه‌های چشم‌نوازی بسازید، با ما همراه باشید! بیایید سفر **یادگیری CSS Grid** را با هم آغاز کنیم.
                                                </p>
                                            </div>
                                        </section>

                                        {/* ===== 3. بخش پیش‌نیازها (Prerequisites) ===== */}
                                        <div id="prerequisites" className="bg-gray-50 dark:bg-gray-800/60 rounded-lg p-6 my-8 md:my-10 border border-gray-200 dark:border-gray-700 shadow-sm mx-auto">
                                            <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-secondary-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                                                پیش‌نیازهای این آموزش CSS Grid:
                                            </h2>
                                            <ul className="list-disc md:p-4 list-inside space-y-3 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                                <li>
                                                    **دانش پایه HTML و CSS:** شما باید با تگ‌های اصلی HTML و مفاهیم پایه‌ای CSS مانند سلکتورها، ویژگی‌ها (Properties)، مقادیر و مدل باکس (Box Model) آشنا باشید. اگر نیاز به مرور یا یادگیری این موارد دارید، مقاله جامع ما را از دست ندهید:
                                                    <a href="https://vc-virtual-learn.com/blog/blogs/learn-html-css-web-design" className="text-primary-600 hover:underline dark:text-primary-400 font-medium mx-1">HTML و CSS: دروازه ورود به دنیای طراحی وب | راهنمای جامع برای شروع در ایران</a>.
                                                </li>
                                                <li>
                                                    همچنین گذراندن دوره
                                                    <a href="https://vc-virtual-learn.com/courses/Build-Responsive-Real-World-Websites-with-HTML-and-CSS-Jonas-Schmedtmann" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline dark:text-primary-400 font-medium mx-1">
                                                        آموزش HTML & CSS ساخت سایت واکنشگرا
                                                    </a>
                                                    می‌تواند یک پایه بسیار قوی برای این آموزش فراهم کند.
                                                </li>
                                                <li>**ویرایشگر کد (Code Editor):** هر ویرایشگر کدی مانند VS Code، Sublime Text، Atom یا ... که با آن راحت هستید.</li>
                                                <li>**مرورگر وب مدرن:** مرورگرهایی مانند Google Chrome، Firefox، Edge یا Safari که از CSS Grid به خوبی پشتیبانی می‌کنند (تقریباً تمام نسخه‌های اخیر).</li>
                                                <li>**اشتیاق به یادگیری:** مهم‌ترین پیش‌نیاز! :)</li>
                                            </ul>
                                        </div>


                                        <nav id="toc" aria-label="فهرست مراحل آموزش" className="my-8 md:my-10 lg:my-12 px-4 py-6 bg-primary-50 dark:bg-gray-800/50 rounded-lg border-t-4 border-primary-500 shadow-md mx-auto backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">

                                            <h2 className="text-lg md:text-xl font-bold text-primary-800 dark:text-primary-200 mb-5 text-center flex items-center justify-center">
                                                آنچه در این آموزش CSS Grid می‌خوانید:
                                            </h2>
                                            <ol className="list-decimal space-y-3 text-base font-medium text-gray-700 dark:text-gray-300 columns-1 md:columns-2 ps-4">
                                                <li><a href="#introduction" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">مقدمه: چرا CSS Grid؟</a></li>
                                                <li><a href="#prerequisites" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">پیش‌نیازهای آموزش</a></li>
                                                <li><a href="#project-intro" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">معرفی پروژه: گالری تصاویر واکنش‌گرا</a></li>
                                                <li><a href="#grid-basics" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">مفاهیم بنیادین CSS Grid</a></li>
                                                <li><a href="#grid-vs-flexbox-intro" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">مقایسه کوتاه Grid و Flexbox</a></li>
                                                <li><a href="#step-1-create-container" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۱: ایجاد Grid Container</a></li>
                                                <li><a href="#step-2-define-columns" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۲: تعریف ستون‌ها (با fr)</a></li>
                                                <li><a href="#step-3-define-gaps" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۳: افزودن فاصله‌ها (gap)</a></li>
                                                <li><a href="#step-4-define-rows" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۴: تعریف ارتفاع ردیف‌ها</a></li>
                                                <li><a href="#step-5-item-placement-span" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۵: قرار دادن و گسترش آیتم‌ها</a></li>
                                                <li><a href="#step-6-grid-template-areas" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۶: چیدمان با grid-template-areas</a></li>
                                                <li><a href="#step-7-responsiveness" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۷: واکنش‌گرایی با Media Queries</a></li>
                                                <li><a href="#step-8-alignment" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۸: ترازبندی آیتم‌ها و محتوا</a></li>
                                                <li><a href="#step-9-grid-functions" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">گام ۹: توابع minmax() و repeat(auto-fit)</a></li>
                                                <li><a href="#project-wrap-up" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">جمع‌بندی پروژه و نکات پیشرفته</a></li>
                                                <li><a href="#faq" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">سوالات متداول (FAQ)</a></li>
                                                <li><a href="#conclusion" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">نتیجه‌گیری نهایی</a></li>
                                                <li><a href="#cta-next-steps" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">قدم‌های بعدی و دوره‌های پیشنهادی</a></li>
                                            </ol>
                                        </nav>

                                        {/* ===== 5. بدنه اصلی (Main Body - Steps & Project) ===== */}
                                        <main>

                                            {/* ========= معرفی پروژه: گالری تصاویر واکنش‌گرا ========= */}
                                            <section id="project-intro" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-indigo-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">⭐</span>
                                                    <div>
                                                        پروژه عملی ما: ساخت گالری تصاویر پیشرفته و واکنش‌گرا
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">یادگیری CSS Grid از طریق ساخت یک پروژه واقعی</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        بهترین راه برای یادگیری عمیق CSS Grid، استفاده از آن در یک پروژه واقعی است. در این آموزش، ما قصد داریم یک **گالری تصاویر (Photo Gallery)** مدرن و کاملاً واکنش‌گرا را با هم بسازیم. این پروژه به ما امکان می‌دهد تا تقریباً تمام جنبه‌های مهم CSS Grid را پوشش دهیم.
                                                    </p>
                                                    <p>
                                                        تصور کنید گالری‌ای داریم که در دستگاه‌های دسکتاپ به شکلی زیبا و چند ستونه نمایش داده می‌شود، برخی تصاویر فضای بیشتری را اشغال می‌کنند (مثلاً دو ستون یا دو ردیف) و در دستگاه‌های موبایل، چیدمان به صورت تک ستونه و قابل اسکرول تغییر می‌کند. همه این‌ها را با CSS Grid به سادگی پیاده خواهیم کرد!
                                                    </p>
                                                    {/* Placeholder for final project screenshot */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/final_gallery_screenshot.jpg" alt="نمای نهایی پروژه گالری تصاویر ساخته شده با آموزش CSS Grid" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-full h-auto" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">نمای نهایی گالری تصاویری که در این آموزش خواهیم ساخت.</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshot of final project)" */}
                                                    {/* [Suggested Alt Text]: "نمای نهایی پروژه گالری تصاویر واکنش گرا ساخته شده با آموزش CSS Grid" */}
                                                    <p>
                                                        ابتدا ساختار اولیه HTML گالری را آماده می‌کنیم و سپس مرحله به مرحله، با استفاده از ویژگی‌های مختلف CSS Grid، به آن جان می‌بخشیم.
                                                    </p>
                                                </div>
                                                {/* HTML اولیه پروژه */}
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">ساختار اولیه HTML برای گالری تصاویر (`index.html`):</p>
                                                    <Code lang="html">




                                                        {`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>گالری تصاویر با CSS Grid</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header class="main-header p-5 bg-primary-600 text-white text-center shadow-md">
    <h1 class="text-2xl font-bold">گالری تصاویر من با CSS Grid</h1>
</header>

<main class="container mx-auto my-8 p-4">
    <div class="gallery-grid">
        <figure class="gallery-item item-1">
            <img src="images/img-1.jpg" alt="تصویر گالری ۱ - طبیعت">
            <figcaption>منظره زیبا</figcaption>
        </figure>
        <figure class="gallery-item item-2">
            <img src="images/img-2.jpg" alt="تصویر گالری ۲ - معماری">
            <figcaption>معماری مدرن</figcaption>
        </figure>
        <figure class="gallery-item item-3">
            <img src="images/img-3.jpg" alt="تصویر گالری ۳ - شهر">
            <figcaption>شهر در شب</figcaption>
        </figure>
        <figure class="gallery-item item-4">
            <img src="images/img-4.jpg" alt="تصویر گالری ۴ - حیوانات">
            <figcaption>پرنده رنگارنگ</figcaption>
        </figure>
        <figure class="gallery-item item-5">
            <img src="images/img-5.jpg" alt="تصویر گالری ۵ - غذا">
            <figcaption>غذای لذیذ</figcaption>
        </figure>
        <figure class="gallery-item item-6">
            <img src="images/img-6.jpg" alt="تصویر گالری ۶ - سفر">
            <figcaption>جاده‌ای به ناکجا</figcaption>
        </figure>
         <figure class="gallery-item item-7">
            <img src="images/img-7.jpg" alt="تصویر گالری ۷ - انتزاعی">
            <figcaption>طرح انتزاعی</figcaption>
        </figure>
        <figure class="gallery-item item-8">
            <img src="images/img-8.jpg" alt="تصویر گالری ۸ - پرتره">
            <figcaption>پرتره خاص</figcaption>
        </figure>
         {/* Add more items as needed */}
    </div>
</main>

<footer class="main-footer p-4 bg-gray-800 text-gray-300 text-center text-sm">
    <p>ساخته شده با ❤️ و CSS Grid در <a href="https://vc-virtual-learn.com/" class="text-primary-400 hover:underline">Virtual Learn</a></p>
</footer>
</body>
</html>`}
                                                    </Code>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                                                        فایل style.css را نیز ایجاد کنید. (فعلاً خالی باشد). تصاویر نمونه را در پوشه images قرار دهید یا از تصاویر خودتان استفاده کنید. کلاس‌های item-1, item-2, ... بعداً برای استایل‌دهی خاص یا قرارگیری در گرید استفاده می‌شوند.
                                                    </p>
                                                </div>
                                                {/* CSS اولیه (ریست و استایل‌های پایه) */}
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">مقداری CSS اولیه برای ریست و استایل‌های پایه در style.css:</p>
                                                    <Code lang="css">



                                                        {`/* Basic Reset & Box Sizing */
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: 'Vazirmatn', sans-serif; /* یا هر فونت فارسی مناسب دیگر */
line-height: 1.6;
background-color: #f8f9fa; /* Light gray background */
color: #333; /* Dark text */
}

/* Dark Mode Base (Optional - can be enhanced with JS toggle) */
/*
@media (prefers-color-scheme: dark) {
body {
background-color: #1a202c; /* Dark background */
color: #cbd5e0; /* Lighter text */
}
.main-header { background-color: #2d3748; }
.main-footer { background-color: #171923; }
}
*/

img {
display: block; /* Remove extra space below images */
max-width: 100%; /* Make images responsive by default */
height: auto;
object-fit: cover; /* Ensure images cover their container */
}

/* Gallery Item basic styling */
.gallery-item {
background-color: #fff; /* White background for items */
border: 1px solid #e2e8f0; /* Light border */
border-radius: 8px; /* Rounded corners */
overflow: hidden; /* Clip image overflow */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.gallery-item:hover {
transform: translateY(-5px); /* Lift item on hover */
box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* Stronger shadow on hover */
}


.gallery-item figcaption {
padding: 10px;
text-align: center;
font-size: 0.9em;
color: #555;
background-color: #f8f9fa; /* Slightly different background for caption */
}

/* Simple Container - (Alternative to Tailwind's container if not using Tailwind for layout) */
.container {
max-width: 1200px; /* Max width */
margin-left: auto;
margin-right: auto;
padding-left: 1rem; /* 16px */
padding-right: 1rem; /* 16px */
}

/* Basic styling (already provided in Tailwind) */
.p-5 { padding: 1.25rem; }
.p-4 { padding: 1rem; }
.my-8 { margin-top: 2rem; margin-bottom: 2rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center { text-align: center; }
.bg-primary-600 { background-color: #0052cc; } /* Adjust primary color */
.text-white { color: #fff; }
.shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
.text-2xl { font-size: 1.5rem; }
.font-bold { font-weight: 700; }
.bg-gray-800 { background-color: #2d3748; }
.text-gray-300 { color: #d1d5db; }
.text-sm { font-size: 0.875rem; }
.text-primary-400 { color: #3b82f6; } /* Adjust primary color */
.hover\:underline:hover { text-decoration: underline; }

/* --- End of basic setup CSS --- */

/* === CSS GRID STYLES WILL GO HERE === */

`}
                                                    </Code>
                                                </div>
                                            </section>

                                            {/* ========= مفاهیم پایه CSS Grid ========= */}
                                            <section id="grid-basics" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                    <span className="bg-secondary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۱</span>
                                                    <div>
                                                        مفاهیم بنیادین CSS Grid: خطوط، ترک‌ها، سلول‌ها و نواحی
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">درک اجزای سازنده یک چیدمان Grid</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        قبل از اینکه شیرجه بزنیم در کدنویسی پروژه، حیاتی است که با چند **مفهوم و واژه‌ کلیدی در CSS Grid** آشنا شویم. این مفاهیم اساس درک نحوه کار Grid را تشکیل می‌دهند.
                                                    </p>
                                                    {/* Placeholder for Grid Terminology Diagram */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/grid_terminology_diagram.svg" alt="دیاگرام مفاهیم پایه CSS Grid: خطوط گرید، ترک‌ها، سلول‌ها و نواحی" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-lg h-auto bg-white p-4" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">دیاگرام نمایش‌دهنده خطوط، ترک‌ها (ردیف‌ها و ستون‌ها)، سلول‌ها و نواحی در یک Grid Layout.</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Diagram)" or "AI Generation" */}
                                                    {/* [Suggested Alt Text]: "دیاگرام مفاهیم پایه CSS Grid شامل خطوط گرید، ترک‌ها، سلول‌ها و نواحی" */}
                                                    <dl className="space-y-4">
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۱. نگهدارنده گرید (Grid Container):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300 text-base">
                                                                المان والد مستقیمی که ویژگی display: grid; یا display: inline-grid; روی آن اعمال می‌شود. تمام آیتم‌های فرزند مستقیم این المان، تبدیل به آیتم‌های گرید (Grid Items) می‌شوند. در پروژه ما، div.gallery-grid نقش Grid Container را خواهد داشت.
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۲. آیتم گرید (Grid Item):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300 text-base">
                                                                فرزندان مستقیم یک Grid Container. در پروژه ما، هر figure.gallery-item یک Grid Item است. توجه کنید که فقط فرزندان مستقیم تبدیل به آیتم گرید می‌شوند، نوه‌ها و نتیجه‌ها نه.
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۳. خطوط گرید (Grid Lines):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300 text-base">
                                                                خطوط افقی و عمودی که ساختار گرید را تشکیل می‌دهند و ترک‌ها (Tracks) را از هم جدا می‌کنند. این خطوط شماره‌گذاری می‌شوند (از ۱ شروع می‌شود) و می‌توان از آن‌ها برای قرار دادن آیتم‌ها استفاده کرد. خطوط افقی، ردیف‌ها را و خطوط عمودی، ستون‌ها را می‌سازند.
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۴. ترک گرید (Grid Track):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300 text-base">
                                                                فضای بین دو خط گرید مجاور. ما ترک‌های ستونی (Column Tracks) و ترک‌های ردیفی (Row Tracks) داریم. شما با ویژگی‌هایی مانند grid-template-columns و grid-template-rows اندازه این ترک‌ها را مشخص می‌کنید.
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۵. سلول گرید (Grid Cell):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300 text-base">
                                                                کوچکترین واحد در گرید، فضایی که توسط تقاطع یک ترک ردیفی و یک ترک ستونی ایجاد می‌شود (مانند یک سلول در جدول). هر آیتم گرید به صورت پیش‌فرض یک سلول را اشغال می‌کند.
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۶. ناحیه گرید (Grid Area):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300 text-base">
                                                                یک فضای مستطیلی دلخواه در گرید که می‌تواند یک یا چند سلول را شامل شود. نواحی توسط خطوط گرید محدود می‌شوند و می‌توان با استفاده از ویژگی grid-template-areas به آن‌ها نام داد و آیتم‌ها را در آن نواحی قرار داد.
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                    <p className="mt-4">
                                                        درک این مفاهیم به شما کمک می‌کند تا در ادامه، زمانی که با ویژگی‌های مختلف CSS Grid کار می‌کنیم، بدانید دقیقاً چه اتفاقی در حال رخ دادن است.
                                                    </p>
                                                </div>
                                                {/* تفاوت مختصر Grid و Flexbox */}
                                                <div id="grid-vs-flexbox-intro" className="mt-8">
                                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                        CSS Grid در مقابل Flexbox: یک توضیح کوتاه
                                                    </h3>
                                                    <div className="space-y-3 text-base text-gray-700 dark:text-gray-300 leading-loose">
                                                        <p>
                                                            یک سوال رایج این است که تفاوت اصلی **CSS Grid** و **Flexbox** چیست و چه زمانی باید از کدام استفاده کرد؟ به طور خلاصه:
                                                        </p>
                                                        <ul className="list-disc space-y-2 ps-4">
                                                            <li>**Flexbox (Flexible Box Layout):** اصولاً برای چیدمان آیتم‌ها در **یک بُعد** طراحی شده است - یا به صورت یک ردیف یا به صورت یک ستون. Flexbox برای تراز کردن (Alignment) آیتم‌ها و توزیع فضا بین آن‌ها در آن بُعدِ خاص، فوق‌العاده است. عالی برای کامپوننت‌ها مانند نوبار (Navbar)، کارت‌ها (Cards) و یا هر جایی که نیاز به چیدمان خطی دارید. (<a href="https://vc-virtual-learn.com/blog/blogs/css-flexbox-tutorial-project-based" className="text-primary-600 hover:underline dark:text-primary-400">آموزش کامل Flexbox را اینجا بخوانید</a>)</li>
                                                            <li>**CSS Grid Layout:** برای چیدمان آیتم‌ها در **دو بُعد** (ردیف‌ها و ستون‌ها به صورت همزمان) طراحی شده است. Grid به شما کنترل کامل بر روی ساختار کلی صفحه و نحوه قرارگیری المان‌های بزرگ در کنار هم می‌دهد. ایده‌آل برای چیدمان کلی صفحه (Page Layout)، ساختارهای جدولی پیچیده و هر جایی که نیاز به کنترل دقیق بر روی هر دو محور افقی و عمودی دارید.</li>
                                                        </ul>
                                                        <div className="flex items-start border-l-4 border-success-400 bg-success-50 dark:bg-gray-800 p-4 rounded-r-lg my-5 shadow-sm">
                                                            <svg className="flex-shrink-0 h-6 w-6 text-success-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                                            <div>
                                                                <strong className="font-semibold text-success-800 dark:text-success-200">نکته کلیدی: Grid و Flexbox رقیب نیستند، مکمل‌اند!</strong>
                                                                <p className="text-success-700 dark:text-success-200/90 mt-1 text-sm md:text-base leading-relaxed">اغلب بهترین رویکرد، استفاده ترکیبی از هر دو است. می‌توانید از Grid برای چیدمان کلی صفحه استفاده کنید و سپس از Flexbox برای چینش آیتم‌ها در *داخل* یک سلول یا ناحیه Grid بهره ببرید. ما در ادامه این آموزش به این موضوع نیز اشاره خواهیم کرد.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            {/* ========= شروع ساخت پروژه: گام به گام ========= */}

                                            {/* === گام ۱: ایجاد Grid Container === */}
                                            <section id="step-1-create-container" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-success-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۲</span>
                                                    <div>
                                                        گام ۱: تبدیل نگهدارنده گالری به Grid Container
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">استفاده از `display: grid` برای شروع کار</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        اولین قدم برای فعال کردن قابلیت‌های **CSS Grid**، انتخاب المان نگهدارنده (Container) آیتم‌های گالری و اعمال ویژگی `display: grid;` به آن است. در پروژه ما، این المان دارای کلاس `gallery-grid` است.
                                                    </p>
                                                    <p>
                                                        کد زیر را به فایل style.css خود اضافه کنید:
                                                    </p>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">افزودن display: grid به نگهدارنده گالری در style.css:</p>
                                                    <Code lang="css">
                                                        {`/* === CSS GRID STYLES WILL GO HERE === */

.gallery-grid {
display: grid; /* Magic starts here! */
}

/* --- End of Step 1 --- */`}
                                                    </Code>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                                                        با افزودن این یک خط، المان .gallery-grid حالا یک Grid Container است و تمام فرزندان مستقیم آن (figure.gallery-item) تبدیل به Grid Items شده‌اند.
                                                    </p>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        اگر صفحه را در مرورگر باز کنید، احتمالاً تغییر محسوسی نخواهید دید! چرا؟ چون ما هنوز هیچ ستون یا ردیفی تعریف نکرده‌ایم. به صورت پیش‌فرض، Grid یک ستون ایجاد می‌کند و تمام آیتم‌ها را زیر هم در آن ستون قرار می‌دهد (شبیه به display: block). در گام بعدی، ستون‌های گالری خود را تعریف خواهیم کرد.
                                                    </p>
                                                    {/* نکته: نمایش Grid Overlay در DevTools */}
                                                    <div className="flex items-start border-l-4 border-secondary-400 bg-secondary-50 dark:bg-gray-800 p-4 rounded-r-lg my-6 shadow-sm">
                                                        <svg className="flex-shrink-0 h-6 w-6 text-secondary-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                        <div>
                                                            <strong className="font-semibold text-secondary-800 dark:text-secondary-200">نکته ابزارهای توسعه‌دهنده (DevTools):</strong>
                                                            <p className="text-secondary-700 dark:text-secondary-200/90 mt-1 text-sm md:text-base leading-relaxed">مرورگرهای مدرن (مانند Firefox و Chrome) ابزارهای فوق‌العاده‌ای برای بازرسی (Inspect) و خطایابی (Debug) چیدمان‌های Grid دارند. در پنل Elements/Inspector، کنار المانی که `display: grid` دارد، معمولاً یک آیکون یا گزینه برای فعال کردن Grid Overlay وجود دارد. با فعال کردن آن، می‌توانید خطوط گرید، شماره ترک‌ها و... را به صورت بصری روی صفحه ببینید. این ابزار در طول یادگیری بسیار کمک‌کننده است!</p>
                                                            {/* Placeholder for DevTools Grid Overlay Screenshot */}
                                                            <div className="my-4 flex flex-col items-center group">
                                                                [IMAGE PLACEHOLDER]
                                                                {/* <img src="link/to/devtools_grid_overlay.png" alt="نمایش Grid Overlay در ابزار توسعه دهنده مرورگر برای آموزش CSS Grid" className="rounded-md shadow-sm border border-gray-200 dark:border-gray-700 max-w-sm h-auto mt-2" /> */}
                                                                <figcaption className="text-center text-xs text-gray-600 dark:text-gray-400 mt-1 italic">فعال‌سازی Grid Overlay در DevTools.</figcaption>
                                                            </div>
                                                            {/* [Image Suggestion Type]: "Author Creation (Screenshot)" */}
                                                            {/* [Suggested Alt Text]: "نمایش Grid Overlay در ابزار توسعه دهنده مرورگر فایرفاکس برای آموزش CSS Grid" */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            {/* === گام ۲: تعریف ستون‌ها === */}
                                            <section id="step-2-define-columns" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-success-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۳</span>
                                                    <div>
                                                        گام ۲: تعریف ستون‌ها با `grid-template-columns` و واحد `fr`
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">ایجاد یک گرید چند ستونه واکنش‌گرا</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        حالا که Grid Container را داریم، وقت آن است که ساختار ستون‌های گالری را مشخص کنیم. برای این کار از ویژگی `grid-template-columns` استفاده می‌کنیم. این ویژگی به ما امکان می‌دهد تعداد و اندازه هر ستون را تعریف کنیم.
                                                    </p>
                                                    <p>
                                                        یکی از قدرتمندترین واحدهایی که می‌توانید در CSS Grid استفاده کنید، واحد **`fr`** (Fraction Unit - واحد کسری) است. واحد `fr` نشان‌دهنده یک **بخش از فضای موجود** در Grid Container است. این واحد به طور خودکار فضا را بین ستون‌ها (یا ردیف‌ها) تقسیم می‌کند و ایجاد چیدمان‌های واکنش‌گرا را بسیار آسان می‌سازد.
                                                    </p>
                                                    <p>
                                                        بیایید گالری خود را به گونه‌ای تعریف کنیم که ۳ ستون با عرض برابر داشته باشد. هر ستون یک بخش (۱fr) از فضای افقی موجود را اشغال خواهد کرد.
                                                    </p>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">تعریف سه ستون برابر با grid-template-columns و واحد fr در style.css:</p>
                                                    <Code lang="css">
                                                        {`.gallery-grid {
display: grid;
grid-template-columns: 1fr 1fr 1fr; /* سه ستون با عرض برابر */

/* می‌توانید از تابع repeat() برای کوتاه‌تر کردن کد استفاده کنید: */
/* grid-template-columns: repeat(3, 1fr); */
}

/* --- End of Step 2 --- */`}
                                                    </Code>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        حالا اگر صفحه را رفرش کنید، خواهید دید که آیتم‌های گالری به صورت خودکار در یک گرید ۳ ستونه مرتب شده‌اند! CSS Grid به طور خودکار ردیف‌های لازم را نیز ایجاد می‌کند (این ردیف‌ها، ترک‌های ضمنی یا Implicit Tracks نامیده می‌شوند که بعداً به آن‌ها خواهیم پرداخت).
                                                    </p>
                                                    {/* Placeholder for 3-column grid screenshot */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/3_column_grid.png" alt="گالری تصاویر با سه ستون برابر ایجاد شده توسط آموزش CSS Grid و grid-template-columns" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-full h-auto" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">گالری با چیدمان ۳ ستونه اولیه.</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshot)" */}
                                                    {/* [Suggested Alt Text]: "گالری تصاویر با سه ستون برابر با استفاده از grid-template-columns: 1fr 1fr 1fr در آموزش CSS Grid" */}

                                                    {/* توضیح واحد fr و تابع repeat */}
                                                    <div className="flex items-start border-l-4 border-info-400 bg-info-50 dark:bg-gray-800 p-4 rounded-r-lg my-6 shadow-sm"> {/* Changed border color */}
                                                        <svg className="flex-shrink-0 h-6 w-6 text-info-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {/* Changed icon color */}
                                                        <div>
                                                            <strong className="font-semibold text-info-800 dark:text-info-200">درک بهتر واحد `fr` و تابع `repeat()`:</strong> {/* Changed text color */}
                                                            <ul className="text-info-700 dark:text-info-200/90 mt-2 text-sm md:text-base leading-relaxed list-disc ps-4 space-y-2"> {/* Changed text color */}
                                                                <li>**واحد fr:** این واحد فقط در CSS Grid کار می‌کند و به مرورگر می‌گوید که فضای *باقیمانده* در کانتینر را (پس از در نظر گرفتن ستون‌ها/ردیف‌هایی با اندازه‌های ثابت مانند پیکسل یا درصد) بین ترک‌های fr تقسیم کند. مثلاً 1fr 2fr یعنی ستون دوم دو برابر ستون اول عرض داشته باشد.</li>
                                                                <li>**تابع repeat(count, track-list):** راهی بسیار مفید برای تکرار یک الگو در تعریف ترک‌ها است. repeat(3, 1fr) دقیقاً معادل 1fr 1fr 1fr` است. برای گریدهای با تعداد ستون زیاد، این تابع کد شما را بسیار تمیزتر می‌کند. می‌توانید الگوهای پیچیده‌تری را نیز تکرار کنید، مثلاً repeat(4, 1fr 2fr) چهار جفت ستون (اولی یک بخش، دومی دو بخش) ایجاد می‌کند.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            {/* === گام ۳: تعریف فاصله‌ها (Gaps) === */}
                                            <section id="step-3-define-gaps" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-success-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۴</span>
                                                    <div>
                                                        گام ۳: افزودن فاصله بین آیتم‌ها با gap
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">ایجاد فضای تنفس (Gutter) در گرید</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        در حال حاضر، آیتم‌های گالری دقیقاً به هم چسبیده‌اند. برای ایجاد فضای خالی (Gutter) بین ردیف‌ها و ستون‌ها، از ویژگی `gap` (یا ویژگی‌های قدیمی‌تر `grid-gap`, `grid-row-gap`, `grid-column-gap`) استفاده می‌کنیم.
                                                    </p>
                                                    <p>
                                                        ویژگی `gap` یک shorthand (کوتاه‌نویسی) است که به شما امکان می‌دهد فاصله بین ردیف‌ها و ستون‌ها را به صورت همزمان یا جداگانه تنظیم کنید.
                                                    </p>
                                                    <ul className="list-disc ps-4 space-y-1 text-sm my-3">
                                                        <li>`gap: 20px;` : فاصله ۲۰ پیکسلی هم بین ردیف‌ها و هم بین ستون‌ها.</li>
                                                        <li>`gap: 30px 15px;` : فاصله ۳۰ پیکسلی بین ردیف‌ها و ۱۵ پیکسلی بین ستون‌ها.</li>
                                                    </ul>
                                                    <p>
                                                        بیایید یک فاصله یکسان `1rem` (معادل 16px در تنظیمات پیش‌فرض) بین آیتم‌های گالری خود اضافه کنیم.
                                                    </p>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">افزودن gap به Grid Container در style.css:</p>
                                                    <Code lang="css">
                                                        {`.gallery-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem; /* افزودن فاصله 16px بین ردیف‌ها و ستون‌ها */

/* ویژگی‌های قدیمی‌تر (هنوز کار می‌کنند اما gap جدیدتر و توصیه شده است): */
/* grid-gap: 1rem; */
/* grid-row-gap: 1rem; */
/* grid-column-gap: 1rem; */
}

/* --- End of Step 3 --- */`}
                                                    </Code>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        عالی شد! حالا بین تمام آیتم‌های گالری یک فاصله منظم و زیبا وجود دارد که خوانایی و ظاهر کلی گالری را بهبود می‌بخشد.
                                                    </p>
                                                    {/* Placeholder for grid with gaps screenshot */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/grid_with_gaps.png" alt="گالری تصاویر با فاصله (gap) بین آیتم‌ها در آموزش CSS Grid" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-full h-auto" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">گالری با فاصله‌های ۱ rem بین آیتم‌ها.</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshot)" */}
                                                    {/* [Suggested Alt Text]: "نمایش گالری تصاویر با استفاده از ویژگی gap در آموزش CSS Grid" */}
                                                </div>
                                            </section>

                                            {/* === گام ۴: تعریف ردیف‌ها === */}
                                            <section id="step-4-define-rows" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-success-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۵</span>
                                                    <div>
                                                        گام ۴: کنترل ارتفاع ردیف‌ها با `grid-template-rows` یا `grid-auto-rows`
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">تنظیم ارتفاع ردیف‌های صریح و ضمنی</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        تا اینجا، ما فقط ستون‌ها را به صراحت تعریف کرده‌ایم (`grid-template-columns`). ارتفاع ردیف‌ها به صورت خودکار توسط محتوای داخل آیتم‌ها (در اینجا، ارتفاع تصاویر و کپشن‌ها) تعیین می‌شود. این ردیف‌ها، **ردیف‌های ضمنی (Implicit Rows)** نامیده می‌شوند.
                                                    </p>
                                                    <p>
                                                        ما دو راه اصلی برای کنترل ارتفاع ردیف‌ها داریم:
                                                    </p>
                                                    <ol className="list-decimal list-outside pl-6 space-y-2">
                                                        <li>
                                                            **grid-template-rows**: برای تعریف ارتفاع ردیف‌هایی که **به صراحت** می‌خواهید ایجاد کنید (Explicit Rows). مشابه grid-template-columns کار می‌کند.
                                                        </li>
                                                        <li>
                                                            **grid-auto-rows**: برای تعیین ارتفاع پیش‌فرض برای تمام ردیف‌هایی که به صورت **ضمنی** (Implicitly) توسط Grid ایجاد می‌شوند (یعنی زمانی که تعداد آیتم‌ها بیشتر از تعداد سلول‌های تعریف شده در ردیف‌های صریح باشد).
                                                        </li>
                                                    </ol>
                                                    <p>
                                                        در پروژه گالری ما، احتمالاً نمی‌دانیم دقیقاً چند ردیف خواهیم داشت (چون ممکن است تصاویر بیشتری اضافه شود). بنابراین، استفاده از grid-auto-rows منطقی‌تر است تا ارتفاع یکسانی برای تمام ردیف‌های ایجاد شده (چه الان و چه در آینده) تعریف کنیم.
                                                    </p>
                                                    <p>
                                                        بیایید ارتفاع هر ردیف را طوری تنظیم کنیم که حدوداً 300px باشد تا تصاویر به خوبی نمایش داده شوند. (البته تصاویر با object-fit: cover خودشان را تطبیق می‌دهند).
                                                    </p>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">تنظیم ارتفاع ردیف‌های ضمنی با grid-auto-rows در style.css:</p>
                                                    <Code lang="css">
                                                        {`.gallery-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
grid-auto-rows: 300px; /* ارتفاع پیش‌فرض ردیف‌های ضمنی */

/* اگر می‌خواستیم مثلا ۲ ردیف اول را صریحا تعریف کنیم: */
/* grid-template-rows: 250px 400px; */
/* grid-auto-rows: 200px; */ /* ردیف سوم به بعد ۲۰۰ پیکسل ارتفاع خواهند داشت */
}

/* --- End of Step 4 --- */`}
                                                    </Code>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        حالا تمام ردیف‌های گالری (که به صورت خودکار ایجاد شده‌اند) ارتفاع تقریباً یکسانی (۳۰۰ پیکسل) خواهند داشت، که به ساختار منظم‌تری منجر می‌شود.
                                                    </p>
                                                    {/* Placeholder for grid with defined row heights screenshot */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/grid_with_auto_rows.png" alt="گالری تصاویر با ارتفاع ردیف یکسان تعریف شده توسط grid-auto-rows در آموزش CSS Grid" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-full h-auto" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">گالری با ارتفاع ردیف‌های یکسان (۳۰۰ پیکسل).</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshot)" */}
                                                    {/* [Suggested Alt Text]: "نمایش گالری تصاویر با استفاده از grid-auto-rows در آموزش CSS Grid" */}
                                                </div>
                                            </section>

                                            {/* === گام ۵: قرار دادن آیتم‌ها و Spanning === */}
                                            <section id="step-5-item-placement-span" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-primary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۶</span>
                                                    <div>
                                                        گام ۵: قرار دادن آیتم‌ها و گسترش (Span) روی سلول‌ها
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">کنترل دقیق محل قرارگیری آیتم‌ها با `grid-column` و `grid-row`</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        تا الان، تمام آیتم‌های گالری به صورت خودکار در سلول‌های موجود قرار گرفته‌اند (Auto Placement). اما قدرت واقعی CSS Grid زمانی مشخص می‌شود که بخواهیم آیتم‌های خاصی را در مکان‌های دلخواه قرار دهیم یا آن‌ها را روی چندین ستون یا ردیف **گسترش دهیم (Span)**.
                                                    </p>
                                                    <p>
                                                        برای این کار، از ویژگی‌های `grid-column-start`, `grid-column-end`, `grid-row-start`, و `grid-row-end` استفاده می‌کنیم. این ویژگی‌ها شماره خطوط گرید را به عنوان مقدار می‌پذیرند. به یاد بیاورید که خطوط از ۱ شروع می‌شوند.
                                                    </p>
                                                    <p>
                                                        همچنین می‌توان از **shorthand** های `grid-column: start / end;` و `grid-row: start / end;` استفاده کرد.
                                                    </p>
                                                    <p>
                                                        یک روش دیگر برای تعیین گسترش، استفاده از کلمه کلیدی `span` است. برای مثال، `grid-column: span 2;` به آیتم می‌گوید که روی دو ترک ستونی گسترش پیدا کند.
                                                    </p>
                                                    <p>
                                                        بیایید چند آیتم را در گالری خود به صورت دستی قرار دهیم و گسترش دهیم تا گالری جذاب‌تری داشته باشیم:
                                                    </p>
                                                    <ul className="list-disc ps-4 space-y-1 text-sm my-3">
                                                        <li>آیتم اول (`.item-1`) را روی دو ستون اول گسترش دهیم.</li>
                                                        <li>آیتم چهارم (`.item-4`) را روی دو ردیف گسترش دهیم.</li>
                                                        <li>آیتم پنجم (`.item-5`) را روی دو ستون (ستون دوم و سوم) گسترش دهیم.</li>
                                                    </ul>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">اعمال استایل برای قرارگیری و گسترش آیتم‌ها در style.css:</p>
                                                    <Code lang="css">
                                                        {`/* Previous Grid Styles... */

.gallery-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
grid-auto-rows: 300px; /* Using auto-rows for flexibility */
}

/* --- Item Placement & Spanning --- */

.gallery-item.item-1 {
grid-column-start: 1;
grid-column-end: 3; /* Span across column line 1 to 3 (covers 2 tracks) */
/* Shorthand: grid-column: 1 / 3; */
/* Using span: grid-column: span 2; (Starts at the first available column) */
}

.gallery-item.item-4 {
grid-row-start: 2; /* Explicitly start on row line 2 */
grid-row-end: 4;   /* Span across row line 2 to 4 (covers 2 tracks) */
/* Shorthand: grid-row: 2 / 4; */
/* Using span: grid-row: span 2; (Starts at the current auto-placed row) */

/* Let's also make it span 1 column starting from the 3rd column */
grid-column-start: 3;
grid-column-end: 4;
/* Shorthand: grid-column: 3 / 4; */
}

.gallery-item.item-5 {
grid-column-start: 1; /* Start at column 1 */
grid-column-end: 3;   /* Span across columns 1 and 2 */
/* Shorthand: grid-column: 1 / 3; */
/* Using span: grid-column: span 2; */

/* We might need to explicitly set its row if auto-placement is not desired */
/* grid-row-start: 3; */ /* Example: place it starting on row line 3 */
}

/* Optional: Explicit placement for another item to fill a gap */
/* .gallery-item.item-7 {
grid-column: 2 / 3;
grid-row: 2 / 3;
} */


/* --- End of Step 5 --- */`}
                                                    </Code>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        حالا مشاهده می‌کنید که چیدمان گالری بسیار پویاتر شده است. آیتم ۱ فضای دو ستون را اشغال کرده، آیتم ۴ بلندتر شده و روی دو ردیف کشیده شده و آیتم ۵ نیز پهن‌تر شده است. توجه کنید که الگوریتم Auto Placement سعی می‌کند بقیه آیتم‌ها را در فضاهای خالی باقی‌مانده قرار دهد، که گاهی ممکن است منجر به ایجاد فضاهای خالی ناخواسته شود. روش `grid-template-areas` که در گام بعدی می‌بینیم، کنترل بیشتری بر این موضوع به ما می‌دهد.
                                                    </p>
                                                    {/* Placeholder for grid with spanning items screenshot */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/grid_with_spanning.png" alt="گالری تصاویر با آیتم‌های گسترش یافته (Spanning) با استفاده از grid-column و grid-row در آموزش CSS Grid" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-full h-auto" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">گالری با آیتم‌هایی که روی چند ستون و ردیف گسترش یافته‌اند.</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshot)" */}
                                                    {/* [Suggested Alt Text]: "نمایش آیتم های گسترش یافته با grid-column و grid-row در آموزش CSS Grid" */}
                                                </div>
                                            </section>

                                            {/* === گام ۶: چیدمان با grid-template-areas === */}
                                            <section id="step-6-grid-template-areas" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-primary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۷</span>
                                                    <div>
                                                        گام ۶: قدرت بصری `grid-template-areas` برای چیدمان
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">تعریف نواحی نام‌گذاری شده و قرار دادن آیتم‌ها در آن‌ها</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        یکی از خواناترین و قدرتمندترین روش‌ها برای تعریف چیدمان‌های پیچیده در CSS Grid، استفاده از ویژگی `grid-template-areas` است. این روش به شما امکان می‌دهد تا به صورت بصری، ساختار گرید خود را با استفاده از نام‌های دلخواه برای نواحی (Areas) تعریف کنید.
                                                    </p>
                                                    <p>
                                                        مراحل کار با `grid-template-areas` به این صورت است:
                                                    </p>
                                                    <ol className="list-decimal list-outside pl-6 space-y-2">
                                                        <li>**تعریف نام نواحی برای آیتم‌ها:** به هر آیتم گریدی که می‌خواهید در ناحیه خاصی قرار گیرد، با استفاده از ویژگی `grid-area` یک نام اختصاص دهید (مثلاً: `grid-area: header;`, `grid-area: main-image;`).</li>
                                                        <li>**تعریف قالب نواحی در کانتینر:** در Grid Container، با استفاده از `grid-template-areas`، یک قالب متنی بسازید که نشان‌دهنده چیدمان بصری گرید است. هر رشته (String) در این قالب نشان‌دهنده یک ردیف است و نام‌های نواحی (که در مرحله ۱ تعریف کردید) با فاصله از هم جدا می‌شوند تا ستون‌ها را بسازند.
                                                            <ul>
                                                                <li>برای گسترش یک ناحیه روی چند سلول، نام آن ناحیه را در سلول‌های مجاور تکرار کنید.</li>
                                                                <li>برای نشان دادن یک سلول خالی، از نقطه (`.`) استفاده کنید.</li>
                                                            </ul>
                                                        </li>
                                                        <li>(اختیاری ولی معمولاً لازم) تعداد و اندازه ستون‌ها و ردیف‌ها را با `grid-template-columns` و `grid-template-rows` (یا `grid-auto-rows`) مشخص کنید تا با ساختار `grid-template-areas` شما مطابقت داشته باشد.</li>
                                                    </ol>
                                                    <p>
                                                        بیایید چیدمان گالری قبلی را با استفاده از `grid-template-areas` بازسازی کنیم. فرض کنید می‌خواهیم چیدمان زیر را داشته باشیم (در حالت دسکتاپ با ۳ ستون):
                                                    </p>
                                                    <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm font-mono text-center my-4">
                                                        {`
+------------+------------+------------+
|  item-1    |  item-1    |  item-2    |
+------------+------------+------------+
|  item-3    |  item-4    |  item-4    |
+------------+------------+------------+
|  item-5    |  item-5    |  item-6    |
+------------+------------+------------+
|  item-7    |  item-8    |      .     |
+------------+------------+------------+
                 `}
                                                    </pre>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">بازسازی چیدمان گالری با grid-template-areas در style.css:</p>
                                                    <Code lang="css">
                                                        {`/* Remove or comment out previous item placement rules (Step 5) */
/*
.gallery-item.item-1 { ... }
.gallery-item.item-4 { ... }
.gallery-item.item-5 { ... }
*/

/* === Assign grid-area names to items === */
.gallery-item.item-1 { grid-area: item1; }
.gallery-item.item-2 { grid-area: item2; }
.gallery-item.item-3 { grid-area: item3; }
.gallery-item.item-4 { grid-area: item4; }
.gallery-item.item-5 { grid-area: item5; }
.gallery-item.item-6 { grid-area: item6; }
.gallery-item.item-7 { grid-area: item7; }
.gallery-item.item-8 { grid-area: item8; }


/* === Define the grid structure using areas in the container === */
.gallery-grid {
display: grid;
gap: 1rem;

/* Define column tracks (must match the areas structure) */
grid-template-columns: repeat(3, 1fr);

/* Define row heights (can be explicit or auto) */
/* Let's try explicit rows matching the areas structure */
grid-template-rows: 300px 250px 300px 250px; /* 4 rows */
/* Or use grid-auto-rows if row count might change */
/* grid-auto-rows: minmax(250px, auto); */

/* Define the visual template */
grid-template-areas:
"item1 item1 item2"  /* Row 1 */
"item3 item4 item4"  /* Row 2 */
"item5 item5 item6"  /* Row 3 */
"item7 item8 .";    /* Row 4 (last cell is empty) */
}


/* Make sure images within specific areas behave well */
.gallery-item.item-4 {
/* Maybe ensure the tall image fits well */
/* height: 100%; */ /* This depends on grid-template-rows */
}


/* --- End of Step 6 --- */`}
                                                    </Code>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        اکنون، با استفاده از `grid-template-areas`، چیدمان ما بسیار خواناتر و مدیریت آن آسان‌تر شده است. دقیقاً همان چیدمانی که در دیاگرام متنی بالا نشان دادیم، پیاده‌سازی شده است. مزیت بزرگ این روش، قابلیت تغییر آسان چیدمان (به خصوص در حالت واکنش‌گرا) با تغییر دادن قالب `grid-template-areas` است.
                                                    </p>
                                                    {/* Placeholder for grid with template areas screenshot */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/grid_with_areas.png" alt="گالری تصاویر پیاده سازی شده با grid-template-areas در آموزش CSS Grid" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-full h-auto" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">گالری با چیدمان تعریف شده توسط `grid-template-areas`.</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshot)" */}
                                                    {/* [Suggested Alt Text]: "نمایش گالری تصاویر با استفاده از grid-template-areas در آموزش CSS Grid" */}

                                                    <div className="flex items-start border-l-4 border-warning-400 bg-warning-50 dark:bg-gray-800 p-4 rounded-r-lg my-5 shadow-sm">
                                                        <svg className="flex-shrink-0 h-6 w-6 text-warning-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                                        <div>
                                                            <strong className="font-semibold text-warning-800 dark:text-warning-200">توجه مهم:</strong>
                                                            <p className="text-warning-700 dark:text-warning-200/90 mt-1 text-sm md:text-base leading-relaxed">هنگام استفاده از `grid-template-areas`، قالب تعریف شده باید یک مستطیل کامل باشد. یعنی تمام ردیف‌ها باید تعداد ستون‌های یکسانی داشته باشند. همچنین، هر ناحیه نام‌گذاری شده باید یک ناحیه مستطیلی واحد را اشغال کند (نمی‌توانید یک ناحیه L شکل بسازید).</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            {/* === گام ۷: واکنش‌گرایی (Responsiveness) === */}
                                            <section id="step-7-responsiveness" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-primary-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۸</span>
                                                    <div>
                                                        گام ۷: واکنش‌گرا کردن گرید با Media Queries
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">تغییر چیدمان گرید در اندازه‌های مختلف صفحه</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        یکی از بزرگترین مزایای **CSS Grid** (به خصوص در ترکیب با `grid-template-areas`)، سهولت در ایجاد **چیدمان‌های واکنش‌گرا (Responsive)** است. ما می‌توانیم با استفاده از Media Queries، ساختار گرید (تعداد ستون‌ها، قالب نواحی و ...) را در نقاط شکست (Breakpoints) مختلف تغییر دهیم.
                                                    </p>
                                                    <p>
                                                        بیایید گالری خود را به صورت زیر واکنش‌گرا کنیم:
                                                    </p>
                                                    <ul className="list-disc ps-4 space-y-1 text-sm my-3">
                                                        <li>**موبایل (مثلاً تا 640px):** نمایش تک ستونه. تمام آیتم‌ها زیر هم قرار گیرند.</li>
                                                        <li>**تبلت (مثلاً از 641px تا 1024px):** نمایش دو ستونه با یک چیدمان متفاوت با استفاده از grid-template-areas.</li>
                                                        <li>**دسکتاپ (مثلاً از 1025px به بالا):** نمایش سه ستونه، همان چیدمانی که در گام قبل با grid-template-areas ساختیم.</li>
                                                    </ul>
                                                    <p>
                                                        ما از رویکرد Mobile-First استفاده می‌کنیم، یعنی ابتدا استایل‌های پایه برای موبایل را می‌نویسیم و سپس با min-width در Media Query، استایل‌ها را برای صفحات بزرگتر بازنویسی (Override) می‌کنیم.
                                                    </p>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">پیاده‌سازی واکنش‌گرایی با Media Queries در style.css:</p>
                                                    <Code lang="css">
                                                        {`/* Mobile First Styles (Default) */
.gallery-grid {
display: grid;
gap: 1rem;
/* Single column by default */
grid-template-columns: 1fr;
/* No areas needed for single column, items stack naturally */
grid-template-areas: none; /* Reset areas */
grid-auto-rows: auto; /* Let content determine height on mobile */
}

/* Reset individual item areas for mobile */
.gallery-item.item-1,
.gallery-item.item-2,
.gallery-item.item-3,
.gallery-item.item-4,
.gallery-item.item-5,
.gallery-item.item-6,
.gallery-item.item-7,
.gallery-item.item-8 {
grid-area: auto; /* Let them auto-place */
}


/* Tablet Styles (e.g., min-width: 641px) */
@media (min-width: 641px) {
.gallery-grid {
/* Two columns for tablet */
grid-template-columns: repeat(2, 1fr);
grid-auto-rows: 280px; /* Adjust row height for tablet */

/* Define a different layout for tablet */
grid-template-areas:
  "item1 item2"
  "item3 item2" /* item2 spans two rows */
  "item4 item5"
  "item6 item5" /* item5 spans two rows */
  "item7 item8";
}

/* Assign areas for tablet layout */
/* Note: Names MUST match the areas defined above */
.gallery-item.item-1 { grid-area: item1; }
.gallery-item.item-2 { grid-area: item2; }
.gallery-item.item-3 { grid-area: item3; }
.gallery-item.item-4 { grid-area: item4; }
.gallery-item.item-5 { grid-area: item5; }
.gallery-item.item-6 { grid-area: item6; }
.gallery-item.item-7 { grid-area: item7; }
.gallery-item.item-8 { grid-area: item8; }
}


/* Desktop Styles (e.g., min-width: 1025px) */
@media (min-width: 1025px) {
.gallery-grid {
/* Three columns for desktop */
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 300px 250px 300px 250px; /* Explicit rows */
grid-auto-rows: 0; /* Prevent implicit rows if possible */

/* Revert to the original desktop layout */
grid-template-areas:
  "item1 item1 item2"
  "item3 item4 item4"
  "item5 item5 item6"
  "item7 item8 .";
}
/* Areas are already assigned, no need to re-assign if names are the same */
}


/* --- End of Step 7 --- */`}
                                                    </Code>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        حالا با تغییر اندازه پنجره مرورگر (یا با استفاده از ابزار Responsive Design Mode در DevTools)، می‌توانید ببینید که چیدمان گالری به زیبایی در نقاط شکست مختلف تغییر می‌کند. این قدرت **واکنش‌گرایی ذاتی CSS Grid** است!
                                                    </p>
                                                    {/* Placeholder for responsive screenshots (mobile, tablet, desktop) */}
                                                    <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="flex flex-col items-center group">
                                                            [IMAGE PLACEHOLDER]
                                                            {/* <img src="link/to/gallery_mobile.png" alt="نمایش گالری در موبایل (تک ستونه) - آموزش CSS Grid واکنش گرا" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 w-full h-auto object-contain" style={{ maxHeight: '400px' }}/> */}
                                                            <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">نمای موبایل (تک ستونه)</figcaption>
                                                        </div>
                                                        <div className="flex flex-col items-center group">
                                                            [IMAGE PLACEHOLDER]
                                                            {/* <img src="link/to/gallery_tablet.png" alt="نمایش گالری در تبلت (دو ستونه) - آموزش CSS Grid واکنش گرا" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 w-full h-auto object-contain" style={{ maxHeight: '400px' }}/> */}
                                                            <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">نمای تبلت (دو ستونه)</figcaption>
                                                        </div>
                                                        <div className="flex flex-col items-center group">
                                                            [IMAGE PLACEHOLDER]
                                                            {/* <img src="link/to/gallery_desktop.png" alt="نمایش گالری در دسکتاپ (سه ستونه) - آموزش CSS Grid واکنش گرا" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 w-full h-auto object-contain" style={{ maxHeight: '400px' }}/> */}
                                                            <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">نمای دسکتاپ (سه ستونه)</figcaption>
                                                        </div>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshots)" */}
                                                    {/* [Suggested Alt Text]: "نمایش واکنش گرای گالری در [موبایل/تبلت/دسکتاپ] در آموزش CSS Grid" */}
                                                </div>
                                            </section>

                                            {/* === گام ۸: ترازبندی (Alignment) === */}
                                            <section id="step-8-alignment" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-purple-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۹</span> {/* Using a different color */}
                                                    <div>
                                                        گام ۸: ترازبندی آیتم‌ها و محتوا در گرید
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">استفاده از `align-items`, `justify-items`, `align-content`, `justify-content`</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        CSS Grid کنترل فوق‌العاده‌ای بر روی **ترازبندی (Alignment)** آیتم‌ها در داخل سلول‌هایشان و همچنین ترازبندی خودِ گرید در داخل کانتینر (اگر فضای اضافی وجود داشته باشد) به ما می‌دهد. این ویژگی‌ها بسیار شبیه به ویژگی‌های ترازبندی در Flexbox هستند.
                                                    </p>
                                                    <p>
                                                        چهار ویژگی اصلی ترازبندی در Grid عبارتند از:
                                                    </p>
                                                    <dl className="space-y-4">
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۱. `justify-items` (در Container):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300">
                                                                ترازبندی **افقی** تمام آیتم‌ها را در *داخل* سلول‌های گریدشان کنترل می‌کند. مقادیر رایج: `start`, `end`, `center`, `stretch` (پیش‌فرض).
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۲. `align-items` (در Container):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300">
                                                                ترازبندی **عمودی** تمام آیتم‌ها را در *داخل* سلول‌های گریدشان کنترل می‌کند. مقادیر رایج: `start`, `end`, `center`, `stretch` (پیش‌فرض), `baseline`.
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۳. `justify-content` (در Container):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300">
                                                                ترازبندی **افقی** *کلِ گرید* را در *داخل* کانتینر کنترل می‌کند (فقط زمانی کاربرد دارد که اندازه کل گرید کوچکتر از عرض کانتینر باشد). مقادیر رایج: `start`, `end`, `center`, `space-around`, `space-between`, `space-evenly`.
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۴. `align-content` (در Container):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300">
                                                                ترازبندی **عمودی** *کلِ گرید* را در *داخل* کانتینر کنترل می‌کند (فقط زمانی کاربرد دارد که اندازه کل گرید کوچکتر از ارتفاع کانتینر باشد). مقادیر مشابه `justify-content`.
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                    <p className="mt-4">
                                                        همچنین می‌توانید با استفاده از ویژگی‌های justify-self و align-self بر روی **یک آیتم خاص**، ترازبندی پیش‌فرض تعیین شده توسط justify-items و align-items را بازنویسی کنید.
                                                    </p>
                                                    <p>
                                                        در پروژه گالری ما، چون آیتم‌ها به صورت پیش‌فرض (stretch) تمام فضای سلول خود را پر می‌کنند، شاید justify-items و align-items تأثیر بصری زیادی نداشته باشند، مگر اینکه آیتم‌ها اندازه ذاتی (intrinsic size) داشته باشند یا اندازه‌شان را کوچکتر کنیم. اما بیایید برای مثال، تمام آیتم‌ها را در مرکز سلول‌هایشان (هم افقی و هم عمودی) قرار دهیم.
                                                    </p>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">اعمال ترازبندی مرکزی برای آیتم‌ها در style.css:</p>
                                                    <Code lang="css">


                                                        {`/* Apply to the container */
.gallery-grid {
/* ... previous styles ... */
justify-items: center; /* Center items horizontally within their cell */
align-items: center;   /* Center items vertically within their cell */

/* Optional: If grid itself is smaller than container */
/* align-content: center; */
/* justify-content: center; */
}

/* Optional: Override for a specific item */
.gallery-item.item-2 {
justify-self: start; /* Align item 2 to the start horizontally */
align-self: end;   /* Align item 2 to the end vertically */
}


/* --- End of Step 8 --- */`}
                                                    </Code>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        با اعمال این کد، خواهید دید که آیتم‌ها دیگر تمام فضای سلول خود را پر نمی‌کنند و در مرکز آن قرار می‌گیرند (به جز آیتم ۲ که به صورت جداگانه ترازبندی شده است). این می‌تواند برای ایجاد افکت‌های بصری خاص مفید باشد. (در عمل برای گالری تصاویر، معمولاً `stretch` پیش‌فرض مناسب‌تر است، مگر اینکه بخواهید تصاویر اندازه اصلی خود را حفظ کنند).
                                                    </p>
                                                    {/* Placeholder for grid alignment screenshot */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/grid_alignment.png" alt="نمایش ترازبندی آیتم ها در مرکز سلول با justify-items و align-items در آموزش CSS Grid" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-full h-auto" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">ترازبندی آیتم‌ها در مرکز سلول‌هایشان.</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshot)" */}
                                                    {/* [Suggested Alt Text]: "نمایش ترازبندی آیتم ها در مرکز با align-items و justify-items در آموزش CSS Grid" */}
                                                </div>
                                            </section>

                                            {/* === گام ۹: توابع مفید Grid: minmax() و repeat() === */}
                                            <section id="step-9-grid-functions" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-orange-500 text-white rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">۱۰</span> {/* Another color */}
                                                    <div>
                                                        گام ۹: توابع قدرتمند `minmax()` و `repeat()` (با `auto-fit`/`auto-fill`)
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">ایجاد گریدهای انعطاف‌پذیر و خودکار</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        CSS Grid توابع داخلی بسیار مفیدی را ارائه می‌دهد که به شما کمک می‌کنند گریدهای پیچیده‌تر و انعطاف‌پذیرتری بسازید. دو مورد از پرکاربردترین آن‌ها `minmax()` و `repeat()` (با قابلیت‌های بیشتر) هستند.
                                                    </p>
                                                    <dl className="space-y-4">
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۱. تابع minmax(min, max):</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300">
                                                                به شما امکان می‌دهد یک محدوده اندازه برای یک ترک (ردیف یا ستون) تعریف کنید. ترک می‌تواند تا مقدار max بزرگ شود، اما هرگز کوچکتر از min نخواهد شد. این برای ایجاد انعطاف‌پذیری عالی است. مثال: grid-template-columns: minmax(150px, 1fr); (ستون حداقل ۱۵۰ پیکسل عرض دارد، اما می‌تواند بزرگتر شود تا فضای خالی را پر کند).
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded">
                                                            <dt className="font-semibold text-gray-800 dark:text-gray-100">۲. تابع repeat(count, track-list) با auto-fit و auto-fill:</dt>
                                                            <dd className="mt-1 text-gray-700 dark:text-gray-300">
                                                                ما قبلاً از repeat(3, 1fr) استفاده کردیم. اما می‌توان به جای تعداد (count)، از کلمات کلیدی auto-fit یا auto-fill استفاده کرد. این به Grid می‌گوید که **تا جایی که ممکن است** ستون‌هایی با الگوی مشخص شده (track-list) را در فضای موجود جا دهد.
                                                                <ul>
                                                                    <li>**`auto-fill`**: تا جایی که ممکن است ستون ایجاد می‌کند، حتی اگر خالی بمانند.</li>
                                                                    <li>**`auto-fit`**: شبیه `auto-fill` است، اما اگر ستون‌های ایجاد شده خالی باشند، آن‌ها را "جمع می‌کند" (collapse می‌کند) تا فضای خالی از بین برود و ستون‌های پر شده باقی‌مانده فضا را اشغال کنند. auto-fit معمولاً برای چیدمان‌های واکنش‌گرا بسیار کاربردی‌تر است.</li>
                                                                </ul>
                                                                مثال کلاسیک ترکیب اینها: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));. این کد یک گرید واکنش‌گرای فوق‌العاده ایجاد می‌کند: مرورگر تا جایی که جا دارد ستون‌هایی ایجاد می‌کند که حداقل ۲۵۰ پیکسل عرض دارند، اما می‌توانند بزرگتر شوند (`1fr`) تا تمام فضای افقی را پر کنند. با کوچک شدن صفحه، تعداد ستون‌ها به صورت خودکار کم می‌شود!
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                    <p className="mt-4">
                                                        بیایید تعریف ستون‌های گالری خود را (در حالت دسکتاپ) با استفاده از این تکنیک بازنویسی کنیم تا به صورت خودکار تعداد ستون‌ها بر اساس فضای موجود تنظیم شود، اما حداقل عرض هر آیتم حفظ شود. (توجه: این ممکن است با `grid-template-areas` پیچیده شود، بنابراین یا باید `grid-template-areas` را حذف کنیم یا فقط در حالتی که از آن استفاده نمی‌کنیم (مثلاً موبایل یا تبلت) این روش را به کار ببریم).
                                                    </p>
                                                    <p>
                                                        برای سادگی، بیایید `grid-template-areas` را در حالت دسکتاپ کامنت کنیم و این تکنیک جدید را امتحان کنیم:
                                                    </p>
                                                </div>
                                                <div className="my-6 md:my-8">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">استفاده از repeat(auto-fit, minmax(...)) برای ستون‌های واکنش‌گرا در style.css (بخش دسکتاپ):</p>
                                                    <Code lang="css">
                                                        {`/* Inside Desktop Styles (@media (min-width: 1025px)) */
@media (min-width: 1025px) {
.gallery-grid {
/* Replace previous column/row/area definitions */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
grid-auto-rows: 300px; /* Keep consistent row height if desired */
grid-template-areas: none; /* Disable areas when using auto-fit columns */

 /* Reset grid-area on items if they were set previously */
 & > .gallery-item {
    grid-area: auto; /* Allow auto-placement */
    /* Reset specific spanning if needed, or handle it differently */
 }
}
}

/* Make sure mobile and tablet styles also reset areas or adjust accordingly */
/* Example: Mobile */
/* .gallery-grid { ... grid-template-areas: none; } */
/* .gallery-grid > .gallery-item { grid-area: auto; } */

/* Example: Tablet */
/* @media (min-width: 641px) { ... grid-template-areas: ... (or none if using auto-fit here too) } */


/* --- End of Step 9 --- */`}
                                                    </Code>
                                                    <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify mt-4">
                                                        حالا اگر در حالت دسکتاپ اندازه پنجره را تغییر دهید، می‌بینید که تعداد ستون‌ها به صورت خودکار تنظیم می‌شود تا آیتم‌ها همیشه حداقل ۲۸۰ پیکسل عرض داشته باشند و فضای اضافی بین آن‌ها تقسیم شود. این یک راه بسیار مدرن و کارآمد برای ایجاد چیدمان‌های مایع (fluid) و واکنش‌گرا است، بدون نیاز به تعریف نقاط شکست متعدد فقط برای تغییر تعداد ستون‌ها!
                                                    </p>
                                                    {/* Placeholder for auto-fit grid screenshot */}
                                                    <div className="my-6 flex flex-col items-center group">
                                                        [IMAGE PLACEHOLDER]
                                                        {/* <img src="link/to/grid_auto_fit.png" alt="نمایش گرید واکنش‌گرا با repeat(auto-fit, minmax(...)) در آموزش CSS Grid" className="rounded-md shadow-md border border-gray-200 dark:border-gray-700 max-w-full h-auto" /> */}
                                                        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic max-w-prose">گرید با تعداد ستون‌های خودکار و واکنش‌گرا.</figcaption>
                                                    </div>
                                                    {/* [Image Suggestion Type]: "Author Creation (Screenshot/GIF)" */}
                                                    {/* [Suggested Alt Text]: "نمایش گرید واکنش‌گرا با repeat(auto-fit, minmax) در آموزش CSS Grid" */}
                                                </div>
                                            </section>


                                            {/* ========= جمع‌بندی پروژه و نکات تکمیلی ========= */}
                                            <section id="project-wrap-up" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-gray-600 scroll-mt-20">
                                                <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 group">
                                                    <span className="bg-teal-500 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold ml-4 rtl:mr-4 rtl:ml-0 flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300 -translate-y-1">🏁</span>
                                                    <div>
                                                        جمع‌بندی پروژه گالری و نکات پیشرفته‌تر
                                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">نگاهی به آنچه ساختیم و قدم‌های بعدی</p>
                                                    </div>
                                                </h2>
                                                <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-4 mb-6">
                                                    <p>
                                                        تبریک می‌گویم! شما با موفقیت یک گالری تصاویر کاملاً واکنش‌گرا را با استفاده از قدرت **CSS Grid** از صفر ساختید. در طول این پروژه، ما مفاهیم اساسی مانند تعریف کانتینر و آیتم‌های گرید، ایجاد ستون‌ها و ردیف‌ها با واحدهای مختلف (به‌ویژه `fr`)، افزودن فاصله‌ها (`gap`)، کنترل ارتفاع ردیف‌ها، قرار دادن و گسترش آیتم‌ها به صورت دستی، استفاده از `grid-template-areas` برای چیدمان بصری، پیاده‌سازی واکنش‌گرایی با Media Queries، و در نهایت استفاده از توابع پیشرفته `minmax()` و `repeat()` با `auto-fit` را یاد گرفتیم.
                                                    </p>
                                                    {/* کد نهایی CSS برای مرجع */}
                                                    <details className="bg-gray-50 dark:bg-gray-800/60 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm my-6">
                                                        <summary className="text-lg font-semibold text-primary-700 dark:text-primary-300 cursor-pointer hover:text-primary-800 dark:hover:text-primary-200 transition-colors">
                                                            مشاهده کد نهایی CSS پروژه (style.css)
                                                        </summary>
                                                        <div className="mt-4">
                                                            <Code lang="css">


                                                                {`/* === Basic Reset & Base Styles === */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Vazirmatn', sans-serif; line-height: 1.6; background-color: #f8f9fa; color: #333; }
/* Optional Dark Mode */
/* @media (prefers-color-scheme: dark) { body { background-color: #1a202c; color: #cbd5e0; } ... } */
img { display: block; max-width: 100%; height: auto; object-fit: cover; }
.gallery-item { background-color: #fff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.gallery-item:hover { transform: translateY(-5px); box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); }
.gallery-item figcaption { padding: 10px; text-align: center; font-size: 0.9em; color: #555; background-color: #f8f9fa; }
.container { max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
/* Basic Tailwind-like utilities used in HTML */
.p-5 { padding: 1.25rem; } .p-4 { padding: 1rem; } .my-8 { margin-top: 2rem; margin-bottom: 2rem; } .mx-auto { margin-left: auto; margin-right: auto; } .text-center { text-align: center; } .bg-primary-600 { background-color: #0052cc; } .text-white { color: #fff; } .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); } .text-2xl { font-size: 1.5rem; } .font-bold { font-weight: 700; } .bg-gray-800 { background-color: #2d3748; } .text-gray-300 { color: #d1d5db; } .text-sm { font-size: 0.875rem; } .text-primary-400 { color: #3b82f6; } .hover\\:underline:hover { text-decoration: underline; }
/* === End of Base Styles === */


/* === CSS GRID STYLES === */

/* Mobile First Styles (Default) */
.gallery-grid {
display: grid;
gap: 1rem;
grid-template-columns: 1fr; /* Single column */
grid-template-areas: none; /* Reset areas */
grid-auto-rows: auto; /* Auto height */
}
/* Reset individual item areas for mobile */
.gallery-grid > .gallery-item {
grid-area: auto;
}

/* Tablet Styles (e.g., min-width: 641px) */
@media (min-width: 641px) {
.gallery-grid {
/* Two columns for tablet */
grid-template-columns: repeat(2, 1fr);
grid-auto-rows: 280px;

/* Using template areas for tablet layout */
grid-template-areas:
  "item1 item2"
  "item3 item2"
  "item4 item5"
  "item6 item5"
  "item7 item8";
}
/* Assign areas for tablet layout */
.gallery-item.item-1 { grid-area: item1; }
.gallery-item.item-2 { grid-area: item2; }
.gallery-item.item-3 { grid-area: item3; }
.gallery-item.item-4 { grid-area: item4; }
.gallery-item.item-5 { grid-area: item5; }
.gallery-item.item-6 { grid-area: item6; }
.gallery-item.item-7 { grid-area: item7; }
.gallery-item.item-8 { grid-area: item8; }
}

/* Desktop Styles (e.g., min-width: 1025px) - Using auto-fit example */
@media (min-width: 1025px) {
.gallery-grid {
/* Using auto-fit for responsive columns */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
grid-auto-rows: 300px;
grid-template-areas: none; /* Disable areas when using auto-fit */
}
/* Reset grid-area on items for auto-placement */
.gallery-grid > .gallery-item {
  grid-area: auto;
}
/* Example: Make item 1 span two columns even with auto-fit */
/* .gallery-item.item-1 { grid-column: span 2; } */
/* .gallery-item.item-4 { grid-row: span 2; } */
}

/* Optional Alignment (Uncomment to test) */
/*
.gallery-grid {
justify-items: center;
align-items: center;
}
.gallery-item.item-2 {
justify-self: start;
align-self: end;
}
*/
`}
                                                            </Code>
                                                        </div>
                                                    </details>

                                                    <p>
                                                        **نکات پیشرفته‌تر و قدم‌های بعدی:**
                                                    </p>
                                                    <ul className="list-disc ps-4 space-y-2">
                                                        <li>**ترتیب آیتم‌ها (`order`):** می‌توانید ترتیب بصری آیتم‌ها را با ویژگی `order` (مشابه Flexbox) تغییر دهید، بدون اینکه نیاز به تغییر HTML داشته باشید.</li>
                                                        <li>**خطوط نام‌گذاری شده (Named Lines):** به جای استفاده از شماره خطوط، می‌توانید به خطوط گرید نام دهید (مثلاً `[col-start]`، `[content-end]`) و از این نام‌ها برای قرار دادن آیتم‌ها استفاده کنید که خوانایی را افزایش می‌دهد.</li>
                                                        <li>**زیرگرید (Subgrid):** یک قابلیت نسبتاً جدید که به آیتم‌های گرید اجازه می‌دهد تا ساختار گریدِ والد خود را به ارث ببرند یا بخشی از آن را برای چیدمان داخلی خود استفاده کنند. (پشتیبانی مرورگرها در حال افزایش است).</li>
                                                        <li>**ترکیب با Flexbox:** همانطور که اشاره شد، برای چیدمان داخلی آیتم‌های گرید (مثلاً تراز کردن کپشن در پایین تصویر)، Flexbox همچنان یک انتخاب عالی است.</li>
                                                        <li>**انیمیشن و Transition:** می‌توان ویژگی‌های Grid (مانند اندازه ترک‌ها یا `gap`) را انیمیت کرد، اگرچه پشتیبانی و عملکرد آن ممکن است به اندازه انیمیشن `transform` روان نباشد.</li>
                                                    </ul>
                                                    <p>
                                                        بهترین راه برای تسلط کامل، تمرین مداوم است. سعی کنید چیدمان وب‌سایت‌های مورد علاقه خود را با CSS Grid بازسازی کنید یا پروژه‌های کوچک دیگری برای خود تعریف کنید.
                                                    </p>
                                                </div>
                                            </section>

                                        </main> {/* End of Main Body */}

                                        {/* ===== 6. پرسش و پاسخ متداول (FAQ) ===== */}
                                        <section id="faq" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 scroll-mt-20 mx-auto px-4 md:px-0">
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                                                <svg className="w-7 h-7 ml-2 rtl:mr-2 rtl:ml-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.742 0-3.223-.835-3.772-2M12 5v.01M12 19v.01M12 12h.01M12 12h.01M12 12h.01M3.05 13H1m19 0h-2.05m-15.64 4.243l-1.414 1.414M21 19l-1.414-1.414M3.05 11H1m19 0h-2.05m-15.64-4.243l-1.414-1.414M21 5l-1.414 1.414" /></svg>
                                                سوالات متداول درباره آموزش CSS Grid
                                            </h2>
                                            <div className="max-w-3xl mx-auto">
                                                <dl className="space-y-6">
                                                    {/* Question 1 */}
                                                    <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-lg shadow-sm">
                                                        <dt className="text-lg font-semibold text-gray-800 dark:text-gray-100">تفاوت اصلی CSS Grid و Flexbox چیست؟ چه زمانی از کدام استفاده کنیم؟</dt>
                                                        <dd className="mt-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            به طور خلاصه: Flexbox برای چیدمان **یک بعدی** (ردیف یا ستون) عالی است، در حالی که CSS Grid برای چیدمان **دو بعدی** (ردیف‌ها و ستون‌ها با هم) طراحی شده. از Grid برای ساختار کلی صفحه و از Flexbox برای تراز کردن آیتم‌ها درون یک کامپوننت یا یک سلول Grid استفاده کنید. آن‌ها مکمل یکدیگرند. (<a href="#grid-vs-flexbox-intro" className="text-primary-600 hover:underline dark:text-primary-400 text-sm">[جزئیات بیشتر در متن مقاله]</a>)
                                                        </dd>
                                                    </div>
                                                    {/* Question 2 */}
                                                    <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-lg shadow-sm">
                                                        <dt className="text-lg font-semibold text-gray-800 dark:text-gray-100">واحد `fr` دقیقاً چگونه کار می‌کند؟</dt>
                                                        <dd className="mt-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            واحد `fr` (Fraction) نشان‌دهنده بخشی از **فضای موجود** در کانتینر گرید است. اگر سه ستون `1fr 1fr 1fr` داشته باشید، هر کدام یک سوم فضای افقی موجود را اشغال می‌کنند. اگر `1fr 2fr` داشته باشید، ستون دوم دو برابر ستون اول فضا می‌گیرد. این باعث می‌شود ترک‌ها به صورت انعطاف‌پذیر و متناسب با فضای کلی، اندازه بگیرند. (<a href="#step-2-define-columns" className="text-primary-600 hover:underline dark:text-primary-400 text-sm">[توضیح بیشتر در گام ۲]</a>)
                                                        </dd>
                                                    </div>
                                                    {/* Question 3 */}
                                                    <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-lg shadow-sm">
                                                        <dt className="text-lg font-semibold text-gray-800 dark:text-gray-100">آیا CSS Grid در همه مرورگرها پشتیبانی می‌شود؟ آیا نیاز به پیشوند (Prefix) دارد؟</dt>
                                                        <dd className="mt-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            خوشبختانه، **CSS Grid** امروزه توسط تمام مرورگرهای مدرن اصلی (Chrome، Firefox، Safari، Edge) به خوبی پشتیبانی می‌شود و دیگر **نیازی به استفاده از پیشوندهای مرورگر (`-webkit-`, `-moz-`) نیست**. برای پشتیبانی از مرورگرهای بسیار قدیمی (مانند IE11 که پیاده‌سازی متفاوتی داشت)، ممکن است به راهکارهای جایگزین (Fallback) یا polyfill نیاز باشد، اما برای اکثر کاربران امروزی، Grid به صورت Native کار می‌کند. می‌توانید وضعیت دقیق پشتیبانی را در سایت‌هایی مانند <a href="https://caniuse.com/?search=grid%20layout" target="_blank" rel="noopener nofollow noreferrer" className="text-primary-600 hover:underline dark:text-primary-400">Can I use...</a> بررسی کنید.
                                                        </dd>
                                                    </div>
                                                    {/* Question 4 */}
                                                    <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-lg shadow-sm">
                                                        <dt className="text-lg font-semibold text-gray-800 dark:text-gray-100">چه زمانی *نباید* از CSS Grid استفاده کرد؟</dt>
                                                        <dd className="mt-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            گرچه Grid بسیار قدرتمند است، اما برای همه چیز بهترین راه حل نیست. برای چیدمان‌های ساده تک بعدی (مثلاً دکمه‌ها در یک ردیف، آیتم‌های منو)، Flexbox اغلب ساده‌تر و کارآمدتر است. همچنین برای ساختارهای بسیار ساده که با `display: block` یا `inline-block` به راحتی قابل پیاده‌سازی هستند، ممکن است استفاده از Grid کمی زیاده‌روی (Overkill) باشد. انتخاب ابزار مناسب بستگی به پیچیدگی چیدمان دارد.
                                                        </dd>
                                                    </div>
                                                    {/* Question 5 */}
                                                    <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-lg shadow-sm">
                                                        <dt className="text-lg font-semibold text-gray-800 dark:text-gray-100">یادگیری CSS Grid چقدر طول می‌کشد؟</dt>
                                                        <dd className="mt-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            زمان یادگیری بستگی به پیش‌زمینه شما در CSS و میزان تمرین دارد. مفاهیم پایه Grid (Container, Item, Columns, Rows, Gap) را می‌توان در عرض چند ساعت یاد گرفت. تسلط بر مفاهیم پیشرفته‌تر مانند `grid-template-areas`، توابع و ترازبندی ممکن است چند روز تا چند هفته تمرین نیاز داشته باشد. این مقاله جامع به شما کمک می‌کند تا این مسیر را سریع‌تر طی کنید، اما **تمرین عملی** کلید اصلی تسلط است.
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </section>

                                        {/* ===== 7. نتیجه‌گیری (Conclusion) ===== */}
                                        <section id="conclusion" className="mt-10 md:mt-12 lg:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 scroll-mt-20 mx-auto px-4 md:px-0">
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">جمع‌بندی نهایی: شما به CSS Grid مسلط شدید!</h2>
                                            <div className="max-w-3xl mx-auto text-gray-800 dark:text-gray-200 text-base md:text-lg leading-loose text-justify space-y-5">
                                                <p>
                                                    با رسیدن به انتهای این راهنمای جامع و **پروژه محور آموزش CSS Grid**، شما دانش و مهارت لازم برای ساخت انواع چیدمان‌های وب مدرن را به دست آورده‌اید. ما از مفاهیم بنیادی شروع کردیم و با ساخت یک گالری تصاویر واکنش‌گرا، تمام ویژگی‌های کلیدی **سی اس اس گرید** از جمله تعریف ترک‌ها، استفاده از واحد `fr`، کنترل فاصله‌ها، قرار دادن آیتم‌ها، کار با `grid-template-areas`، پیاده‌سازی واکنش‌گرایی و استفاده از توابع پیشرفته را به صورت عملی یاد گرفتیم.
                                                </p>
                                                <p>
                                                    دانش **CSS Grid Layout** یکی از مهم‌ترین مهارت‌ها برای هر توسعه‌دهنده فرانت‌اند یا طراح وب در دنیای امروز است. این ابزار به شما قدرت، انعطاف‌پذیری و کنترل بی‌نظیری بر روی چیدمان می‌دهد که پیش از این با روش‌های قدیمی‌تر به سختی قابل دستیابی بود.
                                                </p>
                                                <p>
                                                    حالا نوبت شماست! آموخته‌های خود را در پروژه‌های واقعی به کار بگیرید. چیدمان وب‌سایت‌های موجود را تحلیل کنید و سعی کنید آن‌ها را با Grid بازسازی کنید. هرچه بیشتر تمرین کنید، تسلط شما بر **یادگیری CSS Grid** عمیق‌تر خواهد شد.
                                                </p>
                                            </div>
                                        </section>

                                        {/* ===== 8. فراخوان به اقدام (Call to Action - CTA) ===== */}
                                        <div id="cta-next-steps" className="mt-12 md:mt-16 lg:mt-20 py-10 md:py-14 px-6 bg-gradient-to-b from-primary-100/40 to-white dark:from-gray-900 dark:to-gray-800/60 rounded-t-2xl border-t-4 border-primary-500 text-center shadow-xl">
                                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-5">قدم بعدی در مسیر استادی CSS Grid چیست؟ 🚀</h2>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                                                شما با این آموزش پروژه‌محور، یک جهش بزرگ در مهارت **CSS Grid** خود داشته‌اید. برای عمیق‌تر شدن در تمام جزئیات، مشاهده مثال‌های بیشتر و تسلط کامل بر تکنیک‌های پیشرفته، مسیر یادگیری خود را با منابع تخصصی ادامه دهید.
                                            </p>

                                            {/* معرفی دوره مرتبط CSS Grid */}
                                            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-primary-300 dark:border-primary-700 transform transition hover:scale-[1.03] duration-300 mb-6 ring-1 ring-primary-500/30">
                                                <h3 className="text-xl md:text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4 flex items-center justify-center">
                                                    <span className="text-3xl mr-2 rtl:ml-2 rtl:mr-0">🎓</span> دوره تخصصی CSS Grid:
                                                </h3>
                                                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6 font-medium">
                                                    برای یادگیری تمام نکات و ترفندهای CSS Grid از زبان مدرس متخصص، <a href="https://vc-virtual-learn.com/courses/Ultimate-CSS-Grid-Course-From-Beginner-to-Advanced-Peter-Sommerhoff" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-300 font-bold hover:underline decoration-wavy decoration-primary-500/50 decoration-2 underline-offset-4">دوره جامع CSS Grid: از مقدماتی تا پیشرفته (پیتر سومرهوف)</a> را در Virtual Learn از دست ندهید. این دوره با <strong className="font-semibold">زیرنویس دقیق فارسی</strong>، شما را به سطح استادی می‌رساند.
                                                </p>
                                                <a href="https://vc-virtual-learn.com/courses/Ultimate-CSS-Grid-Course-From-Beginner-to-Advanced-Peter-Sommerhoff" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-700 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">مشاهده دوره کامل CSS Grid</a>
                                            </div>

                                            {/* معرفی دوره جامع HTML/CSS */}
                                            <div className="max-w-2xl mx-auto bg-secondary-50 dark:bg-gray-700/60 p-6 rounded-xl shadow-lg border border-secondary-300 dark:border-secondary-700 transform transition hover:scale-[1.02] duration-300 mb-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-secondary-700 dark:text-secondary-300 mb-4 flex items-center justify-center">
                                                    <span className="text-3xl mr-2 rtl:ml-2 rtl:mr-0">📚</span> تقویت پایه‌های HTML و CSS:
                                                </h3>
                                                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6 font-medium">
                                                    اگر احساس می‌کنید نیاز به تقویت مفاهیم پایه HTML و CSS دارید تا بتوانید از Grid و Flexbox بهتر استفاده کنید، <a href="https://vc-virtual-learn.com/courses/Build-Responsive-Real-World-Websites-with-HTML-and-CSS-Jonas-Schmedtmann" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 font-bold hover:underline decoration-wavy decoration-secondary-500/50 decoration-2 underline-offset-4">دوره آموزش HTML & CSS ساخت سایت واکنشگرا (جوناس اشمتمن)</a> با زیرنویس فارسی، یک انتخاب فوق‌العاده است.
                                                </p>
                                                <a href="https://vc-virtual-learn.com/courses/Build-Responsive-Real-World-Websites-with-HTML-and-CSS-Jonas-Schmedtmann" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-secondary-500 hover:bg-secondary-600 dark:hover:bg-secondary-700 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">مشاهده دوره جامع HTML/CSS</a>
                                            </div>

                                            {/* دعوت به بحث و لینک‌های مرتبط */}
                                            <div className="mt-10 pt-6 border-t border-primary-200 dark:border-primary-700/50 max-w-3xl mx-auto space-y-4">
                                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">💬 سوالی دارید یا نکته‌ای؟</h4>
                                                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                                    امیدواریم این **آموزش CSS Grid** برای شما مفید بوده باشد. اگر در طول پروژه با مشکلی مواجه شدید، سوالی داشتید یا نکته جالبی کشف کردید، حتماً در بخش نظرات با ما و دیگر دوستان به اشتراک بگذارید!
                                                </p>
                                                <div className="pt-4">
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">منابع بیشتر برای مطالعه:</p>
                                                    <ul className="list-disc list-inside text-sm text-primary-600 dark:text-primary-400 space-y-1">
                                                        <li><a href="https://vc-virtual-learn.com/blog/blogs/css-flexbox-tutorial-project-based" className="hover:underline">آموزش Flexbox در CSS: راهنمای جامع و پروژه‌محور (صفر تا صد)</a></li>
                                                        <li><a href="https://vc-virtual-learn.com/blog/blogs/learn-html-css-web-design" className="hover:underline">HTML و CSS: دروازه ورود به دنیای طراحی وب | راهنمای جامع برای شروع در ایران</a></li>
                                                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noopener nofollow noreferrer" className="hover:underline">مستندات کامل CSS Grid Layout در MDN (انگلیسی)</a></li>
                                                        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener nofollow noreferrer" className="hover:underline">راهنمای کامل Grid در CSS-Tricks (انگلیسی)</a></li>
                                                    </ul>
                                                </div>
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
