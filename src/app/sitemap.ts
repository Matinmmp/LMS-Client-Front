import { MetadataRoute } from 'next';
import { BASE_URL } from '../config/urls';
import { encodeTitle } from '../utils/functions';
const axios = require('axios');

export default async function name(): Promise<MetadataRoute.Sitemap> {


    const academyNamesResponse = await axios.get(`${BASE_URL}/getAllAcademyNames`);

    const acadmeyEntries: MetadataRoute.Sitemap = academyNamesResponse?.data?.academiesName?.map((academy: any) => ({
        url: `https://vc-virtual-learn.com/academies/${encodeURIComponent(encodeTitle(academy.engName))}`,
        priority: 0.9
    }))

    const teacherNamesResponse = await axios.get(`${BASE_URL}/getAllTeachersName`);
    const teacherEntries: MetadataRoute.Sitemap = teacherNamesResponse?.data?.teachersName?.map((teacher: any) => ({
        url: `https://vc-virtual-learn.com/teachers/${encodeURIComponent(encodeTitle(teacher.engName))}`,
        priority: 0.9
    }))


    const courseNameResponse = await axios.get(`${BASE_URL}/getAllCourseUrlNames`);
    const courseEntries: MetadataRoute.Sitemap = courseNameResponse?.data?.courseUrlNames?.map((course: any) => ({
        url: `https://vc-virtual-learn.com/courses/${encodeURIComponent(encodeTitle(course?.urlName))}`,
        priority: 0.9
    }))

    const list1 = courseEntries?.length ? courseEntries: [];
    const list2 = teacherEntries?.length ? teacherEntries: [];
    const list3 = acadmeyEntries?.length ? acadmeyEntries: [];

    return [
        ...list1,
        ...list2,
        ...list3,
        {
            url: `https://vc-virtual-learn.com/`,
            priority: 1,
        },
        {
            url: `https://vc-virtual-learn.com/about-us`,
            priority: 0.8,
        },
        {
            url: `https://vc-virtual-learn.com/contact-us`,
            priority: 0.8,
        },
        {
            url: `https://vc-virtual-learn.com/courses`,
            priority: 0.9,
        },
        {
            url: `https://vc-virtual-learn.com/teachers`,
            priority: 0.9,
        },
        {
            url: `https://vc-virtual-learn.com/academies`,
            priority: 0.9,
        },
        {
            url: `https://vc-virtual-learn.com/roles`,
            priority: 0.8,
        },
    ]
} 