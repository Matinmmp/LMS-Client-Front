'use client'
import { toPersianNumber } from '@/src/utils/functions';
import React, { useEffect, useState } from 'react';

type DiscountProps = {
    percent: number;
    usageCount: number;
    expireTime: string;
};

const DiscountCounter = ({ percent, usageCount=1, expireTime }: DiscountProps) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isValid, setIsValid] = useState(false);

    // بررسی وجود داده‌های معتبر
    useEffect(() => {
        if (!percent || !expireTime) {
            setIsValid(false);
            return;
        }

        const now = new Date().getTime();
        const expiry = new Date(expireTime).getTime();

        if (expiry > now ) {
            setIsValid(true); // تخفیف معتبر است
        } else {
            setIsValid(false); // تخفیف نامعتبر است
        }
    }, [percent, expireTime]);

    // تابع محاسبه زمان باقی‌مانده
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const expiry = new Date(expireTime).getTime();

        const diff = expiry - now;

        if (diff <= 0) {
            setIsValid(false); // زمان منقضی شده
            return;
        }

        setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
    };

    // تنظیم شمارش معکوس با تأخیر 1 ثانیه
    useEffect(() => {
        if (!isValid) return;

        // نمایش اولیه شمارنده با صفر
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);

        const timeout = setTimeout(() => {
            calculateTimeLeft(); // محاسبه اولیه بعد از 1 ثانیه
        }, 1000);

        const interval = setInterval(() => {
            calculateTimeLeft(); // بروزرسانی هر ثانیه
        }, 1000);

        return () => {
            clearTimeout(timeout); // پاکسازی تأخیر
            clearInterval(interval); // پاکسازی شمارنده
        };
    }, [isValid, expireTime]);

    // اگر داده‌ها یا تخفیف معتبر نیست، چیزی نمایش نده
    if (!isValid) return null;

    return (
        <div className='w-full md:mt-5 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row items-center justify-between  bg-white dark:bg-primary-50 p-4 rounded-xl shadow-small'>
            <p className='text-2xl font-semibold text-danger-400'> ٪<span>{toPersianNumber(percent)}</span> تخفیف ویژه</p>

            <div className="flex gap-2 text-lg dark:text-white ">
                <div className='px-2 border-l-1 flex flex-col items-center md:flex-row border-l-gray-800 dark:border-l-gray-100'>
                    <span className='me-1 text-lg lg:text-2xl font-medium'>{toPersianNumber(days)}</span>
                    <span className='font-light'>روز</span>
                </div>

                <div className='px-2 border-l-1 flex flex-col items-center md:flex-row border-l-gray-800 dark:border-l-gray-100'>
                    <span className='me-1 text-lg lg:text-2xl font-medium'>{toPersianNumber(hours)}</span>
                    <span className='font-light'>ساعت</span>
                </div>

                <div className='px-2 border-l-1 flex flex-col items-center md:flex-row border-l-gray-800 dark:border-l-gray-100'>
                    <span className='me-1 text-lg lg:text-2xl font-medium'>{toPersianNumber(minutes)}</span>
                    <span className='font-light'>دقیقه</span>
                </div>

                <div className='px-2 w-12 md:w-[4.3rem] flex flex-col items-center md:flex-row'>
                    <span className='text-lg lg:text-2xl font-medium'>{toPersianNumber(seconds)}</span>
                    <span className='ps-1 font-light '>ثانیه</span>
                </div>
            </div>
        </div>
    );
};

export default DiscountCounter;
