
import clsx from "clsx";
import { title } from "../primitives";
import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa"; 
import { RxInstagramLogo } from "react-icons/rx";
import { navObject } from "@/src/config/site";
import { link as linkStyles } from "@nextui-org/theme";
import { buildCategoryTree } from "@/src/utils/categorySorter";
import { MdOutlineContactMail } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { encodeTitle } from '@/src/utils/functions';

type CardProps = {
};

const Footer = ({ }: CardProps) => {
    const categories = buildCategoryTree(navObject.categoryObject.categoryList, null);
    const academiesObject:any = navObject.academyObject
    const teacherObject:any = navObject.teacherObject

    return (
        <footer className="w-full flex justify-center relative backdrop-blur-xl z-40">


            <div className="size-full p-4 py-10 max-w-[1350px] px-4 md:px-8 2xl:px-2 flex flex-col items-center">
                <div className="w-full h-1 bg-secondary-500 rounded-full" />

                <div className="w-full mt-16 px-2">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-16 sm:gap-10">

                        <ul className="min-w-[12rem] flex flex-col gap-2 lg:-mt-6">
                            <li>
                                <Link className="flex items-center gap-1" href="/">
                                    <Image priority alt="لوگوی ویرچوال لرن در فوتر سایت" className="h-12 w-12 md:w-16 md:h-16" height={100} width={100}
                                        src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                                    <span className="text-xl font-extrabold text-primary-400">ویرچوال‌لرن</span>
                                </Link>
                            </li>
                            <li className="mt-4 ">
                                <Link className={`flex items-center gap-2 font-medium`} href="https://t.me/VC_Virtual_Learn">
                                    <FaTelegramPlane size={20} />
                                    <span >تلگرام</span>
                                </Link>
                            </li>
                            <li className="mt-1">
                                <Link className="flex items-center gap-2 font-medium " href="https://www.instagram.com/vc_virtual_learn">
                                    <RxInstagramLogo size={20} />
                                    <span >ایناستگرام</span>
                                </Link>
                            </li>
                            <li className="mt-1">
                                <Link className="flex items-center gap-2 font-medium " href="/contact-us">
                                    <MdOutlineContactMail size={20} />
                                    <span >ارتباط با ما</span>
                                </Link>
                            </li>
                            <li className="mt-1">
                                <Link className="flex items-center gap-2 font-medium " href="/about-us">
                                    <HiOutlineInformationCircle size={24} className="text-black dark:text-white" />
                                    <span >درباره‌ی ما</span>
                                </Link>
                            </li>
                        </ul>

                        <div className="min-w-[12rem]">
                            <h5 className={clsx(title({ color: 'blue' }), 'text-xl lg:text-2xl font-bold')}>دسته بندی‌ها</h5>
                            <ul className="mt-6 className= flex flex-col gap-3">
                                {
                                    categories[0]?.subCategories?.map((item, index) =>
                                        <li key={index}>
                                            <Link color="foreground" href={`/courses/?category=${item.name}`} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                                {item.name}
                                            </Link>
                                        </li>)
                                }
                            </ul>
                        </div>

                        <div className="min-w-[12rem]">
                            <h5 className={clsx(title({ color: 'blue' }), 'text-xl lg:text-2xl font-bold')}>مدرس‌ها</h5>
                            <ul className="mt-6 className= flex flex-col gap-3">
                                {
                                    teacherObject?.teacherList?.slice(0, 10).map((item:any, index:number) =>
                                        <li key={index}>
                                            <Link color="foreground" href={`/teachers/${encodeTitle(item?.engName)}`} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                                {item?.engName}
                                            </Link>
                                        </li>)
                                }
                                {
                                    teacherObject.teacherList.length > 10
                                        ?
                                        <li >
                                            <Link color="foreground" href={"/teachers"} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                                مشاهده‌ی همه
                                            </Link>
                                        </li> : ''
                                }
                            </ul>
                        </div>

                        <div className="min-w-[12rem]">
                            <h5 className={clsx(title({ color: 'blue' }), 'text-xl lg:text-2xl font-bold')}>آکادمی‌ها</h5>
                            <ul className="mt-6 className= flex flex-col gap-3">
                                {
                                    academiesObject.academyList.slice(0, 10).map((item:any, index:number) =>
                                        <li key={index}>
                                            <Link color="foreground" href={`/academies/${encodeTitle(item.engName)}`} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                                {item.engName}
                                            </Link>
                                        </li>)
                                }
                                {
                                    academiesObject.academyList.length > 10
                                        ?
                                        <li >
                                            <Link color="foreground" href={"/academies"} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                                مشاهده‌ی همه
                                            </Link>
                                        </li> : ''
                                }
                            </ul>
                        </div>

                        <div className="min-w-[12rem]">
                            <h5 className={clsx(title({ color: 'blue' }), 'text-xl lg:text-2xl font-bold')}>دسترسی سریع</h5>
                            <ul className="mt-6 className= flex flex-col gap-3">
                                {/* <li>
                                    <Link color="foreground" href={"/"} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                        بلاگ
                                    </Link>
                                </li> */}

                                <li>
                                    <Link color="foreground" href={"/teachers"} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                        همه‌ی مدرس‌ها
                                    </Link>
                                </li>

                                <li>
                                    <Link color="foreground" href={"/teachers"} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                        همه‌ی آکادمی‌ها
                                    </Link>
                                </li>

                                <li>
                                    <Link color="foreground" href={"/courses"} className={clsx(linkStyles({ color: "foreground" }), "font-medium")} >
                                        همه‌ی دوره‌ها
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="w-full mt-24 px-2">
                    <div className="w-full">

                        <section>
                            <h2 className={clsx(title({ color: 'blue' }), 'text-xl lg:text-2xl font-bold')}>ویرچوال لرن (Virtual Learn) – مرجع آموزش‌های برنامه‌نویسی فارسی با ترجمه‌ی دقیق</h2>
                            <p className="mt-6 leading-7">
                                ویرچوال لرن با هدف ارائه آموزش‌های باکیفیت و به‌روز برنامه‌نویسی به فارسی‌زبانان راه‌اندازی شده است.
                                در این سایت می‌توانید به دوره‌ها و ویدیوهای آموزشی برتر از آکادمی‌های معتبر بین‌المللی دسترسی پیدا کنید
                                که با دقت به فارسی ترجمه شده‌اند. ما با استفاده از تکنولوژی‌های هوش مصنوعی، زیرنویس‌ها و ترجمه‌ها را
                                به‌روز کرده و تجربه‌ای ساده و روان برای یادگیری فراهم می‌کنیم. از آموزش‌های مقدماتی تا پیشرفته، در
                                زبان‌های برنامه‌نویسی مختلف مثل جاوااسکریپت، پایتون، و بسیاری دیگر، ویرچوال لرن به شما کمک می‌کند تا
                                مهارت‌های لازم برای موفقیت در دنیای تکنولوژی را کسب کنید.
                            </p>
                            <p className="mt-1 leading-7">
                                هدف ما این است که برنامه‌نویسان فارسی‌زبان بدون هیچ‌گونه محدودیتی به بهترین منابع آموزشی جهان دسترسی
                                داشته باشند. با تیم مجرب ما و استفاده از ابزارهای پیشرفته ترجمه و زیرنویس، ویدیوهای آموزشی به دقیق‌ترین
                                شکل ممکن به فارسی ارائه می‌شوند. شما می‌توانید به سادگی از مطالب آموزشی بهره‌مند شوید و مهارت‌های خود
                                را ارتقا دهید.
                            </p>
                            <p>
                                <strong>ویرچوال لرن – پلی به دنیای برنامه‌نویسی با ترجمه‌های دقیق و کاربردی</strong>
                            </p>
                        </section>



                    </div>
                </div>


            </div>

        </footer >

    )
}
export default Footer
