'use client'
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";

export default function FeaturedPosts() {
    return (
        <section className="w-full">
            <h2 className=" text-2xl lg:text-3xl xl:text-4xl font-semibold underline decoration-primary-500
             decoration-wavy decoration-[2px] underline-offset-[1rem] lg:underline-offset-[1.5rem]">پست‌های ویژه</h2>
            <div className="w-full mt-16 p-6 pe-3 rounded-md border-1 border-primary-500">
                <div className="flex flex-col lg:flex-row gap-6">

                    <div className="w-full lg:w-1/2">
                        <div className="w-full flex flex-col">
                            <Image src={'https://buckettest.storage.c2.liara.space/images/academy19.png'} alt="1" width={500} height={300}
                                className="w-full rounded-md aspect-video object-cover object-center shadow-medium" />
                            <h3 className="mt-3 text-xl lg:text-2xl font-semibold hover:text-secondary-500 cursor-pointer">پست ویژه‌ی اول</h3>
                            <div className="mt-4 flex items-center gap-4 text-[#555555] dark:text-gray-200">
                                <div className="flex items-center gap-2">
                                    <FaUser size={14} />
                                    <span className="text-xs font-medium">ویرچوال لرن</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LuCalendarDays size={14} />
                                    <span className="text-xs font-medium">ویرچوال لرن</span>
                                </div>

                            </div>
                            <p className='mt-2 leading-7 text-[#555555] dark:text-gray-200'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری   </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="pe-3 overflow-auto scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0 md:col-6">

                            <div className="mb-6 flex gap-4 pb-6 border-b border-border">
                                <Image alt="Drone Software and Development" src="https://buckettest.storage.c2.liara.space/images/academy19.png" width="120" height="80" className="h-[85px] rounded object-cover" />
                                <div className='mt-1'>
                                    <h3 className="text-xl font-medium mb-2">
                                        <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 flex gap-4 pb-6 border-b border-border">
                                <Image alt="Drone Software and Development" src="https://buckettest.storage.c2.liara.space/images/academy19.png" width="120" height="80" className="h-[85px] rounded object-cover" />
                                <div className='mt-1'>
                                    <h3 className="text-xl font-medium mb-2">
                                        <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 flex gap-4 pb-6 border-b border-border">
                                <Image alt="Drone Software and Development" src="https://buckettest.storage.c2.liara.space/images/academy19.png" width="120" height="80" className="h-[85px] rounded object-cover" />
                                <div className='mt-1'>
                                    <h3 className="text-xl font-medium mb-2">
                                        <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 flex gap-4 pb-6 border-b border-border">
                                <Image alt="Drone Software and Development" src="https://buckettest.storage.c2.liara.space/images/academy19.png" width="120" height="80" className="h-[85px] rounded object-cover" />
                                <div className='mt-1'>
                                    <h3 className="text-xl font-medium mb-2">
                                        <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 flex gap-4 pb-6 border-b border-border">
                                <Image alt="Drone Software and Development" src="https://buckettest.storage.c2.liara.space/images/academy19.png" width="120" height="80" className="h-[85px] rounded object-cover" />
                                <div className='mt-1'>
                                    <h3 className="text-xl font-medium mb-2">
                                        <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 flex gap-4 pb-6 border-b border-border">
                                <Image alt="Drone Software and Development" src="https://buckettest.storage.c2.liara.space/images/academy19.png" width="120" height="80" className="h-[85px] rounded object-cover" />
                                <div className='mt-1'>
                                    <h3 className="text-xl font-medium mb-2">
                                        <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 flex gap-4 pb-6 border-b border-border">
                                <Image alt="Drone Software and Development" src="https://buckettest.storage.c2.liara.space/images/academy19.png" width="120" height="80" className="h-[85px] rounded object-cover" />
                                <div className='mt-1'>
                                    <h3 className="text-xl font-medium mb-2">
                                        <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 flex gap-4 pb-6 border-b border-border">
                                <Image alt="Drone Software and Development" src="https://buckettest.storage.c2.liara.space/images/academy19.png" width="120" height="80" className="h-[85px] rounded object-cover" />
                                <div className='mt-1'>
                                    <h3 className="text-xl font-medium mb-2">
                                        <a className="block hover:text-secondary-500">یه بلاگ خیلی خوب</a>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <LuCalendarDays size={14} />
                                        <span className="text-xs font-medium">ویرچوال لرن</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
