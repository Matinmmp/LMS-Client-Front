"use client";
import React from "react";


import { Edu } from "@/src/config/fonts";
import Link from "next/link";
import Image from "next/image";
import { subtitle, title } from "../primitives";
import { clsx } from "clsx";


type Props = {
};




const Hero = (props: Props) => {
    return (
        <div className="w-full  ">
            <div className="pb-10 flex flex-col md2:flex-row justify-between">
                <div className="w-full md2:w-1/2 order-2 md2:order-1">
                    <div className="w-full mt-4 text-center md2:text-right">
                        <h1 className={clsx(title({ color: 'blue' }), 'inline w-full text-center text-[1.75rem] md:text-[2.5rem] font-bold md:leading-[3.2rem]')}>آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان
                        </h1>
                        <br />

                        <h2 className="mt-7 text-right text-base md:text-lg font-medium leading-8 md:leading-10">
                            با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید .
                        </h2>
                        <h2 className="text-right text-base md:text-lg font-medium leading-8 md:leading-10">
                             <span className={clsx(title({ color: 'blue' }),'text-base md:text-xl !font-bold')}>Virtual Learn</span> ویدیوهای آموزشی برترین آکادمی‌های بین‌المللی را ترجمه کرده و به زبان فارسی در اختیار شما قرار می‌دهد تا بدون نیاز به دانش زبان انگلیسی، از منابع آموزشی برتر بهره‌مند شوید.
                        </h2>

                    </div>
                </div>

                <div className="w-full md2:w-1/2 order-1 md2:order-2">
                    <Image className="-mt-20 "
                        width={1000} height={1000} alt="virtual learn hero" src={"https://buckettest.storage.c2.liara.space/images/hero4.svg"} />
                </div>

            </div>
        </div >
    );
};

export default Hero;
