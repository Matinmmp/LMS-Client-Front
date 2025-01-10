import localFont from 'next/font/local'
import { Inter as Inter1, Edu_VIC_WA_NT_Beginner, Vazirmatn } from "next/font/google";


// export const Vazir = Vazirmatn({
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//     display: "swap",
//     variable: "--font-vazir",
//     subsets: ["arabic"],

// })

// export const Inter = Inter1({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600", "700", "800", "900"],
//     display: "swap",
//     variable: "--font-inter",
// });

// export const Edu = Edu_VIC_WA_NT_Beginner({
//     subsets: ["latin"],
//     weight: ["400", "500", "600", "700"],
//     display: "swap",
// });


export const Inter = localFont({
    src: [
        { path: '../fonts/Inter/static/Inter_18pt-Thin.ttf', weight: '100', style: 'normal', },
        { path: '../fonts/Inter/static/Inter_18pt-ExtraLight.ttf', weight: '200', style: 'normal', },
        { path: '../fonts/Inter/static/Inter_18pt-Light.ttf', weight: '300', style: 'normal', },
        { path: '../fonts/Inter/static/Inter_18pt-Regular.ttf', weight: '400', style: 'normal', },
        { path: '../fonts/Inter/static/Inter_18pt-Medium.ttf', weight: '500', style: 'normal', },
        { path: '../fonts/Inter/static/Inter_18pt-SemiBold.ttf', weight: '600', style: 'normal', },
        { path: '../fonts/Inter/static/Inter_18pt-Bold.ttf', weight: '700', style: 'normal', },
        { path: '../fonts/Inter/static/Inter_18pt-ExtraBold.ttf', weight: '800', style: 'normal', },
        { path: '../fonts/Inter/static/Inter_18pt-Black.ttf', weight: '900', style: 'normal', }
    ],
})


export const Vazir = localFont({
    src: [
        { path: '../fonts/Vazirmatn/static/Vazirmatn-Thin.ttf', weight: '100', style: 'normal' },
        { path: '../fonts/Vazirmatn/static/Vazirmatn-ExtraLight.ttf', weight: '200', style: 'normal' },
        { path: '../fonts/Vazirmatn/static/Vazirmatn-Light.ttf', weight: '300', style: 'normal' },
        { path: '../fonts/Vazirmatn/static/Vazirmatn-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../fonts/Vazirmatn/static/Vazirmatn-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../fonts/Vazirmatn/static/Vazirmatn-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '../fonts/Vazirmatn/static/Vazirmatn-Bold.ttf', weight: '700', style: 'normal' },
        { path: '../fonts/Vazirmatn/static/Vazirmatn-ExtraBold.ttf', weight: '800', style: 'normal' },
        { path: '../fonts/Vazirmatn/static/Vazirmatn-Black.ttf', weight: '900', style: 'normal' },
    ],
})

export const Edu = localFont({
    src: [
        { path: '../fonts/Edu_VIC_WA_NT_Beginner/static/EduVICWANTBeginner-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../fonts/Edu_VIC_WA_NT_Beginner/static/EduVICWANTBeginner-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../fonts/Edu_VIC_WA_NT_Beginner/static/EduVICWANTBeginner-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '../fonts/Edu_VIC_WA_NT_Beginner/static/EduVICWANTBeginner-Bold.ttf', weight: '700', style: 'normal' },

    ],
})