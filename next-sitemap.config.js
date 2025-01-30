const axios = require('axios');

const encodeTitle = (title) => {
    try {
        return title.replace(/\s/g, '_').replace(/\u200C/g, '-');
    }
    catch {
        return title;
    }
}

const BASE_URL = 'http://localhost:8001/api/v1/';

module.exports = {
    siteUrl: 'https://www.vc-virtual-learn.com',
    // generateRobotsTxt: true,
    sitemapSize: 5000, // اطمینان از اینکه فایل‌های زیادی ایجاد نشود
    exclude: [
        '/profile/**',
        '/profile',
        '/error',
        '/apple-icon.png'
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/profile', '/error']
            }
        ],
        additionalSitemaps: [
            'https://www.vc-virtual-learn.com/sitemap-index.xml', // اشاره به فایل سایت‌مپ اصلی
        ]
    },

    additionalPaths: async (config) => {
        const dynamicPaths = [];
        const staticPaths = [
            { loc: '/', priority: 1.0 },
            { loc: '/about-us', priority: 0.8 },
            { loc: '/contact-us', priority: 0.8 },
            { loc: '/courses', priority: 0.9 },
            { loc: '/teachers', priority: 0.9 },
            { loc: '/academies', priority: 0.9 },
            { loc: '/roles', priority: 0.9 },
        ];
        dynamicPaths.push(...staticPaths);
        try {
            const academyNames = await axios.get(`${BASE_URL}/getAllAcademyNames`);
            academyNames?.data?.academiesName?.forEach(academy => {
                dynamicPaths.push({
                    loc: `/academies/${encodeURIComponent(encodeTitle(academy.engName))}`,
                    lastmod: new Date().toISOString(),
                    priority: 0.7
                });
            });
        } catch (error) {
            console.error('خطا در دریافت آکادمی‌ها:', error.message);
        }

        try {
            const teacherNames = await axios.get(`${BASE_URL}/getAllTeachersName`);
            teacherNames?.data?.teachersName?.forEach(teacher => {
                dynamicPaths.push({
                    loc: `/teachers/${encodeURIComponent(encodeTitle(teacher.engName))}`,
                    lastmod: new Date().toISOString(),
                    priority: 0.6
                });
            });
        } catch (error) {
            console.error('خطا در دریافت اساتید:', error.message);
        }

        try {
            const coursUrlNames = await axios.get(`${BASE_URL}/getAllCourseUrlNames`);
            coursUrlNames?.data?.coursUrlNames?.forEach(course => {
                dynamicPaths.push({
                    loc: `/courses/${course?.urlName}`,
                    lastmod: new Date().toISOString(),
                    priority: 0.8
                });
            });
        } catch (error) {
            console.error('خطا در دریافت دوره‌ها:', error.message);
        }

        return dynamicPaths;
    }
};
