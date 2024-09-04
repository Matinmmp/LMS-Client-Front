import { Inter as Inter1, Edu_VIC_WA_NT_Beginner, Baloo_Bhaijaan_2 } from "next/font/google";

export const Baloo = Baloo_Bhaijaan_2({
    subsets: ['arabic'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-baloo'
});

export const Inter = Inter1({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-inter'
});


export const Edu = Edu_VIC_WA_NT_Beginner({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap'
});