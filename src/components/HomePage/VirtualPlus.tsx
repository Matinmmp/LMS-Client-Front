'use client'

import { toPersianNumber } from "@/src/utils/functions";
import { title } from "../primitives";
import { clsx } from "clsx";


type Props = {
};





const VirtualPlus = (props: any) => {
    return (
        <div className="relative">

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="random-hash font-bold text-[6rem] lg:text-[9rem] text-primary">+V</div>
            </div>

            <div className="w-full py-10 px-4 backdrop-blur-[8px] bg-[#ffffff44] dark:bg-[#2020204d] bg-primary-50/ dark:bg-primary-50/30/ rounded-2xl relative overflow-hidden">
                
                <div className="pb-10 flex flex-col z-10 relative">
                    <div className="w-full">
                        <div className="w-full mt-4 text-center">
                            <h2 className={clsx(title({ color: 'secondary' }),' inline w-full text-center text-[1.75rem] md:text-[2.5rem] font-extrabold md:leading-[3.2rem]')}>
                                با خرید اکانت ویرچوال پلاس به بیش از {toPersianNumber(100)} دوره دسترسی داشته باشید.
                            </h2>
                            <br />
                            <h2 className="mt-7 text-right text-base md:text-lg font-medium leading-8 md:leading-10">
                                با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید.
                            </h2>
                            <h2 className="text-right text-base md:text-lg font-medium leading-8 md:leading-10">
                                <span className="text-blue-500 text-base md:text-xl font-bold">Virtual Learn</span> ویدیوهای آموزشی برترین آکادمی‌های بین‌المللی را ترجمه کرده و به زبان فارسی در اختیار شما قرار می‌دهد تا بدون نیاز به دانش زبان انگلیسی، از منابع آموزشی برتر بهره‌مند شوید.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VirtualPlus;

