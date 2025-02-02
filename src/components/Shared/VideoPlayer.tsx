'use client'
import "plyr-react/plyr.css";
import dynamic from 'next/dynamic';
import { useEffect } from "react";
import { toPersianNumber } from "@/src/utils/functions";
const Plyr = dynamic(() => import('plyr-react'), { ssr: false });

// https://courses12.storage.c2.liara.space/Courses/JonasSchmedtmannBRRWWwHaC/CourseLessons/Preview.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=c2gmhcnho74iltfu%2F20250201%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20250201T201820Z&X-Amz-Expires=432000&X-Amz-Signature=036817a3f5e3217c2bcc4477fdd351d19a1c9f46c7eec14dfd5fafe89b8ccc61&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22Build%20Responsive%20Real-World%20Websites%20with%20HTML%20and%20CSS_preview%22.mp4&x-amz-checksum-mode=ENABLED&x-id=GetObject
const VideoPlayer: React.FC<{ url: string }> = ({ url }) => {
    const videoSource = {
        type: "video" as "video",
        sources: [
            {
                src: url,
                type: "video/mp4",
            },
        ],
    };

    useEffect(() => {
        const updateTimeToPersian = () => {
            const timeElements = document.querySelectorAll(".plyr__time");
            timeElements.forEach((element) => {
                element.textContent = toPersianNumber(element.textContent || "");
            });
        };

        updateTimeToPersian();

        const observer = new MutationObserver(updateTimeToPersian);
        const controls = document.querySelector(".plyr__controls");

        if (controls) {
            observer.observe(controls, {
                childList: true,
                subtree: true,
                characterData: true,
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full h-auto rounded-xl overflow-hidden">
            <Plyr
                source={videoSource}
                options={{
                    autoplay: false,
                    muted: false,
                    controls: ["progress", "play-large", "rewind", "play", "fast-forward", "current-time", "mute", "volume", "settings", "pip", "fullscreen"],
                }}
            />
        </div>
    );
};
export default VideoPlayer


// const options = {
//     autoplay: false,               // آیا ویدیو به‌صورت خودکار پخش شود؟
//     muted: false,                  // آیا ویدیو به‌صورت بی‌صدا شروع شود؟
//     loop: { active: false },       // تنظیم حالت پخش حلقه‌ای
//     controls: [                    // لیست کنترل‌های موجود روی پخش‌کننده
//         'play-large',              // دکمه پخش بزرگ در وسط ویدیو
//         'restart',                 // دکمه بازگشت به ابتدا
//         'rewind',                  // دکمه بازگشت به عقب
//         'play',                    // دکمه پخش
//         'fast-forward',            // دکمه حرکت به جلو
//         'progress',                // نوار پیشرفت پخش
//         'current-time',            // زمان فعلی
//         'duration',                // کل زمان ویدیو
//         'mute',                    // دکمه قطع صدا
//         'volume',                  // کنترل میزان صدا
//         'captions',                // کنترل زیرنویس
//         'settings',                // دکمه تنظیمات (مانند کیفیت و سرعت)
//         'pip',                     // دکمه تصویر در تصویر (Picture-in-Picture)
//         'airplay',                 // دکمه پخش روی دستگاه‌های دیگر (AirPlay)
//         'download',                // دکمه دانلود ویدیو
//         'fullscreen'               // دکمه تمام‌صفحه
//     ],
//     settings: ['captions', 'quality', 'speed'], // تنظیمات سفارشی در منوی تنظیمات
//     speed: {                          // تنظیم سرعت پخش
//         selected: 1,                  // سرعت پیش‌فرض
//         options: [0.5, 1, 1.5, 2],    // سرعت‌های قابل انتخاب
//     },
//     quality: {
//         default: 720,                 // کیفیت پیش‌فرض
//         options: [360, 720, 1080],    // کیفیت‌های قابل انتخاب
//         forced: false,                // آیا کاربران می‌توانند کیفیت را تغییر دهند؟
//         onChange: (quality: number) => {
//             console.log(`Quality changed to ${quality}`);
//         },
//     },
//     invertTime: true,                 // آیا زمان باقی‌مانده نمایش داده شود؟
//     captions: {                       // تنظیمات زیرنویس
//         active: true,                 // زیرنویس به‌صورت پیش‌فرض فعال باشد؟
//         language: 'en',               // زبان زیرنویس پیش‌فرض
//         update: true,                 // به‌روزرسانی زیرنویس در زمان واقعی
//     },
//     fullscreen: { enabled: true },    // فعال‌سازی تمام‌صفحه
//     ratio: '16:9',                    // نسبت ابعاد ویدیو
//     clickToPlay: true,                // پخش و توقف با کلیک
//     hideControls: true,               // پنهان کردن کنترل‌ها در صورت عدم استفاده
//     disableContextMenu: false,        // غیرفعال کردن منوی کلیک راست
//     loadSprite: true,                 // بارگذاری آیکون‌ها از اسپرایت SVG
//     iconUrl: null,                    // مسیر سفارشی برای آیکون‌ها
//     keyboard: {                       // پشتیبانی از میانبرهای صفحه‌کلید
//         focused: true,
//         global: false,
//     },
//     tooltips: {                       // نمایش توضیحات (Tooltips) برای دکمه‌ها
//         controls: false,
//         seek: true,
//     },
//     seekTime: 10,                     // زمان جستجوی سریع (برحسب ثانیه)
//     volume: 0.8,                      // سطح صدای پیش‌فرض (۰ تا ۱)
//     storage: {                        // ذخیره تنظیمات کاربر در لوکال‌استوریج
//         enabled: true,
//         key: 'plyr-settings',
//     },
//     poster: '',                       // تصویر پیش‌نمایش ویدیو
//     debug: false,                     // فعال کردن لاگ‌های دیباگ
// };


