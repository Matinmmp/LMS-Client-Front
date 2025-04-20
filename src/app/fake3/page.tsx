
'use client'
import Code from "@/src/components/Shared/Code";
import { secondsToMinutes, toPersianNumber } from "@/src/utils/functions";
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

                                    {/* Ultimate CSS Grid Course: From Beginner to Advanced */}
                                    <div className="space-y-8">


                                        <p className=" md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                            در این دوره یاد می‌گیرید چگونه با استفاده از سیستم جدید <strong className="font-semibold text-primary-600 dark:text-primary-400">CSS Grid Layout</strong>، چیدمان‌های وب را پیاده‌سازی کنید و آن را در کنار <strong className="font-semibold">CSS3 Flexbox</strong> و <strong className="font-semibold">Sass</strong> برای ایجاد یک گردش کار (Workflow) شگفت‌انگیز و بهینه به کار بگیرید.
                                        </p>


                                        <div id="course-learn" className="bg-primary-50 dark:bg-gray-800/50 p-5 md:p-6 rounded-lg border-l-4 border-primary-500 shadow-sm">
                                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                                <svg className="w-6 h-6 me-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                آنچه در این دوره یاد خواهید گرفت:
                                            </h3>
                                            <ul className="list-disc ps-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-6">
                                                <li>شناخت و درک کامل مشخصات فنی <strong className="font-semibold">CSS Grid</strong>.</li>
                                                <li>ایجاد سریع و کارآمد چیدمان‌های (Layout) وب واقعی با گرید.</li>
                                                <li>درک چگونگی تکمیل کنندگی <strong className="font-semibold">CSS Grid</strong> نسبت به <strong className="font-semibold">Flexbox</strong>.</li>
                                                <li>فهم مفاهیم پیشرفته‌تر مشخصات فنی CSS Grid.</li>
                                                <li>استفاده از تمام ویژگی‌ها (Properties) جدید تعریف شده برای چیدمان‌های CSS Grid.</li>
                                            </ul>
                                        </div>


                                        <div id="course-requirements">
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">پیش‌نیازهای دوره:</h3>
                                            <ul className="list-disc ps-4 space-y-2 text-gray-700 dark:text-gray-300  text-sm md:text-base leading-6">
                                                <li>
                                                    آشنایی با مفاهیم پایه HTML و CSS. (برای یادگیری این موارد می‌توانید از دوره
                                                    <a href="https://vc-virtual-learn.com/courses/Build-Responsive-Real-World-Websites-with-HTML-and-CSS-Jonas-Schmedtmann" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline dark:text-primary-400 font-medium mx-1">
                                                        آموزش HTML & CSS ساخت سایت واکنشگرا
                                                    </a>
                                                    در ویرچوال لرن استفاده کنید.)
                                                </li>

                                            </ul>
                                        </div>


                                        <div id="course-description"  >
                                            <h3 className="mt-14 lg:mt-18 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">توضیحات کامل دوره:</h3>
                                            <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                                <p>
                                                    در این دوره آموزشی <strong className="font-semibold">CSS Grid</strong>، شما مهارت‌های زیر را کسب خواهید کرد:
                                                </p>
                                                <ul className="list-disc ps-4 space-y-2 text-gray-700 dark:text-gray-300 my-4 text-sm md:text-base leading-6">
                                                    <li>نحوه استفاده از تمام ویژگی‌های CSS تعریف شده در مشخصات فنی CSS Grid را خواهید آموخت.</li>
                                                    <li>چندین برگه تمرین (Exercise Sheet) را برای به‌کارگیری مهارت‌های جدید و ساخت چیدمان‌های اختصاصی خود با CSS Grid تکمیل خواهید کرد.</li>
                                                    <li>کدهای CSS خوانا و مختصر، حتی برای چیدمان‌های پیچیده خواهید نوشت.</li>
                                                    <li>با استفاده از چیدمان‌های CSS Grid، پروتوتایپ‌های (نمونه اولیه) چیدمان را در کمترین زمان طراحی خواهید کرد.</li>
                                                    <li>مبانی نحوه تکمیل Flexbox توسط CSS Grid و امکان کار ترکیبی آن‌ها با <strong className="font-semibold">Sass</strong> را یاد خواهید گرفت.</li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div id="course-testimonials" className=" border-t border-gray-200 dark:border-gray-700">
                                            <h3 className="mt-8 lg:mt-12 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">نظرات دانشجویان درباره سایر دوره‌های پیتر سومرهوف</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center italic max-w-2xl mx-auto">
                                                (توجه: این نظرات مربوط به سایر دوره‌های محبوب پیتر در زمینه Flexbox و Sass هستند و نشان‌دهنده کیفیت کلی آموزش‌های او می‌باشند.)
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                                <blockquote className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-secondary-400">
                                                    <p className="text-gray-700 dark:text-gray-300 italic mb-3">"توضیحات عالی بود. آموزش کارآمد. مهارت بسیار خوبی برای یادگیری در CSS. همین الان دارم ازش تو کدهام استفاده می‌کنم و در زمان و دردسر صرفه‌جویی می‌کنم."</p>
                                                    <footer className="text-sm text-gray-500 dark:text-gray-400">- Shane (دانشجوی دوره Flexbox)</footer>
                                                </blockquote>
                                                <blockquote className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-secondary-400">
                                                    <p className="text-gray-700 dark:text-gray-300 italic mb-3">"خیلی واضح و منظم درباره flexbox توضیح داده شده. تمام چیزی که لازم بود بدونید رو پوشش میده. این یکی از معدود دوره‌هاییه که ادعا می‌کنه "کامله" و واقعاً هم هست! آفرین! ممنون پیتر."</p>
                                                    <footer className="text-sm text-gray-500 dark:text-gray-400">- Fabio (دانشجوی دوره Flexbox)</footer>
                                                </blockquote>

                                                <blockquote className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-success-400">
                                                    <p className="text-gray-700 dark:text-gray-300 italic mb-3">"دوره عالی! بسیار مفید و با جزئیات!"</p>
                                                    <footer className="text-sm text-gray-500 dark:text-gray-400">- Vladislav (دانشجوی دوره Sass)</footer>
                                                </blockquote>
                                                <blockquote className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-success-400">
                                                    <p className="text-gray-700 dark:text-gray-300 italic mb-3">"این دوره نگاهی عالی و عمیق به نحوه شروع کار با SASS/SCSS ارائه میده. من بدون هیچ تجربه‌ای شروع کردم و الان کاملاً راحت تو همه پروژه‌هام ازش استفاده می‌کنم. به شدت توصیه می‌شه."</p>
                                                    <footer className="text-sm text-gray-500 dark:text-gray-400">- Jerry (دانشجوی دوره Sass)</footer>
                                                </blockquote>
                                            </div>
                                        </div>


                                        <div id="course-expectations">
                                            <h3 className="mt-8 lg:mt-12 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">چه انتظارات دیگری می‌توانید داشته باشید:</h3>
                                            <ul className="list-disc ps-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-6">
                                                <li>پاسخگویی مدرس به تمام سوالات شما در طول دوره برای کمک به شما در مسیر یادگیری.</li>
                                                <li>وجود تمرین‌های عملی متعدد در این دوره برای به‌کارگیری آموخته‌ها، به همراه راه حل‌های پیشنهادی مدرس در GitHub. (فرصت عالی برای تثبیت مهارت‌ها)</li>
                                                <li>ترجمه و ارائه شده با <strong className="font-semibold">زیرنویس فارسی دقیق و روان</strong> توسط تیم ویرچوال لرن.</li>
                                                نکته: مورد گارانتی و پیش‌نمایش رایگان احتمالاً مربوط به پلتفرم اصلی بوده و شاید در پلتفرم شما سیاست متفاوتی داشته باشد. در صورت نیاز می‌توانید حذف یا ویرایش کنید.
                                                <li>گارانتی ۳۰ روزه بازگشت وجه برای مشاهده دوره بدون ریسک.</li>
                                                <li>وجود چندین درس پیش‌نمایش رایگان برای بررسی مناسب بودن دوره برای شما.</li>
                                            </ul>
                                        </div>


                                        <div id="course-audience" className="mt-8 lg:mt-12 bg-gray-50 dark:bg-gray-800/60 p-5 md:p-6 rounded-lg border-t-2 border-gray-200 dark:border-gray-700">
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">این دوره برای چه کسانی مناسب است:</h3>
                                            <ul className="list-disc ps-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-6">
                                                <li>طراحان وب که می‌خواهند مهارت‌های خود را ارتقا دهند و چیدمان‌های قابل نگهداری (Maintainable) را سریع‌تر بسازند.</li>
                                                <li>هر کسی که می‌خواهد با آخرین تحولات در فناوری‌های وب به‌روز بماند.</li>
                                                <li>افرادی که دوست دارند با آنچه آینده (نزدیک) CSS خواهد بود، آشنا شوند (Early Adopters).</li>
                                                <li>تمام علاقه‌مندان به یادگیری و تسلط بر CSS.</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full lg:w-[25%] px-4 md:p-0">
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="gap-10 relative"><span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" /></div>
        </>
    );


}
