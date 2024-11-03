 
import {   title } from "../primitives";
import { clsx } from "clsx";
import Image from "next/image";


type Props = {
};

const Hero = (props: Props) => {
    return (

        <div className="w-full  relative">

            <div className="gap-2 flex flex-col md2:flex-row justify-between relative z-10">
                <div className="w-full md2:w-1/2 order-2 md2:order-1">
                    <div className="w-full mt-6 lg:mt-20 text-center md2:text-right">
                        <h1 className={clsx(title({ color: 'blue' }), 'text-[#475466] dark:text-white inline w-full text-center text-4xl md:text-5xl lg:text-6xl !font-extrabold md:leading-[3.2rem]')}>
                            درباره‌ی ویرچوال لرن
                        </h1>
                        <br />

                        <h2 className={`mt-6 lg:mt-10 text-xl md:text-2xl text-center lg:text-right font-normal leading-8 md:leading-10`}>
                            <strong className="text-primary-400">ویرچوال لرن</strong> یک پلتفرم آموزشی است که برنامه‌های آموزشی بین‌المللی را به زبان فارسی ترجمه و در دسترس قرار می‌دهد. هدف اصلی سایت، ارائه آموزش‌های تخصصی برنامه‌نویسی به زبان فارسی برای دسترسی راحت‌تر کاربران به منابع معتبر جهانی است.
                        </h2>
                    </div>
                </div>

                <div className="w-full md2:w-1/2 order-1 md2:order-2 mt-14 lg:mt-6">
                    {/* <IconCloud iconSlugs={slugs} /> */}
                    <Image className="-mt-20 " priority={true}
                        width={1000} height={1000} alt="virtual learn hero" src={"https://buckettest.storage.c2.liara.space/images/about5.svg"} />

                </div>

            </div>

        </div >

    );
};

export default Hero;
