'use client'

import { encodeToShortCode, hoursAndMinutesString, secondsToTimeString, secondsToTimeString2, toPersianNumber } from "@/src/utils/functions"
import { FaRegCopy } from "react-icons/fa6"
import { motion } from 'framer-motion';
import React, { useState } from "react";
import { TbFileDescription } from "react-icons/tb";
import { Button } from "@nextui-org/button";
import { SlEye } from "react-icons/sl";
import { IoIosArrowBack, IoIosSchool } from "react-icons/io";

import { getCourseDataByNameLoged, getCourseDataByNameNoLoged } from "@/src/lib/apis/courseApis";
import { useQuery } from "@tanstack/react-query";
import cookies from 'js-cookie'
import { RxDotFilled } from "react-icons/rx";
import { PiMonitorPlay } from "react-icons/pi";
import { RiLockLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";

import ReactPlayer from 'react-player'

export function ShortLink({ name }: { name: string }) {
    const copy = () => navigator.clipboard.writeText(`virtual-learn.com/?r=${encodeToShortCode(name)}`);

    return (
        <div className="w-full bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">
            <div className="w-full px-4 py-6 flex flex-col items-center">
                <p className="text-lg font-semibold text-center">لینک کوتاه آموزش</p>


                <div className="mt-4 flex flex-grow flex-row w-full py-3 px-4 gap-x-1 rounded-medium items-start bg-primary-500/20">
                    <div onClick={copy}
                        className="flex justify-center items-center w-9 h-9 rounded-full bg-primary-500 shadow-small cursor-pointer">
                        <FaRegCopy className="text-white" />
                    </div>
                    <div className="h-full flex-grow min-h-10 ms-2 flex flex-col box-border items-start text-inherit justify-center">
                        <div dir="ltr" className=" w-full font-medium block text-inherit leading-5">
                            {`virtual-learn.com/?r=${encodeToShortCode(name)}`}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export function Description({ desc }: { desc: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300, duration: 600 }}
                initial={{ height: 1400 }}
                animate={{ height: open ? 'auto' : 1400 }}
                className="p-6 overflow-hidden"
                exit={{ height: 1400 }}
                style={{ overflow: 'hidden' }}
            >
                <div className="flex items-center gap-2 text-primary-400 dark:text-white">
                    <TbFileDescription size={40} />
                    <p className="text-2xl font-bold">توضیحات دوره</p>
                </div>

                <div className="mt-6 pb-20" dangerouslySetInnerHTML={{ __html: desc }}></div>
            </motion.div>

            {!open && (
                <div
                    className="w-full h-44 flex justify-center items-end bg-gradient-to-b
                        from-transparent from-10% to-55% to-white dark:to-[#131E34] backdrop-blur-[1px] absolute bottom-0 rounded-b-2xl"
                >
                    <Button
                        onClick={() => setOpen(!open)}
                        endContent={<SlEye size={22} />}
                        variant="ghost"
                        color="secondary"
                        size="lg"
                        className="mb-5 font-semibold"
                    >
                        ادامه مطلب
                    </Button>
                </div>
            )}
        </div>
    );
}




const refresh_token = cookies.get('refresh_token')
const access_token = cookies.get('access_token')

export function CourseLessons({ name }: { name: any }) {
    let getCourseData: any

    if (!refresh_token || !access_token)
        getCourseData = useQuery({ queryKey: ['getCourseDataByNameNoLoged'], queryFn: () => getCourseDataByNameNoLoged(name) });

    if (refresh_token)
        getCourseData = useQuery({ queryKey: ['getCourseDataByNameLoged'], queryFn: () => getCourseDataByNameLoged(name) });



    // let categorizedData: any

    // if (!getCourseData.isLoading && getCourseData.isSuccess && getCourseData?.data?.success) {

    //     // categorizedData = categorizeVideos(getCourseData?.data?.courseData);
    //     console.log(getCourseData?.data)
    // }


    return (
        <div className="w-full bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">
            <div className="p-4 px-2 sm:p-6 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-primary-400 dark:text-white">
                    <IoIosSchool size={40} />
                    <p className="text-2xl font-bold">سرفصل‌ها</p>
                </div>

                <div className="w-full">
                    <div className="flex flex-col gap-4">
                        {!getCourseData.isLoading && getCourseData.isSuccess &&
                            getCourseData?.data?.courseData?.map((item: any, index: number) => <Acordian item={item} key={index} />)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}


const Acordian = ({ item }: { item: any }) => {
    const [open, setOpen] = useState(false)
    const [selectedLesson, setSelectedLesson] = useState('')


    return (
        <div dir="ltr" className="flex flex-col justify-center dark:shadow-small rounded-xl overflow-hidden bg-[#f3f4f8] dark:bg-slate-800">
            <div onClick={() => setOpen(!open)} className={`p-4 py-5 cursor-pointer transition-all
                 ${open ? "bg-primary-500" : " bg-[#f3f4f8] dark:bg-slate-800"} `}>
                <div className={`w-full flex items-center justify-between ${open ? "text-white" : " text-black dark:text-white"}`}>
                    <p className={`sm:text-[1.1rem] font-medium `}>{item?.sectionName}</p>

                    <div className="flex items-center gap-0.5">
                        {item?.totalLength && <span className="hidden sm:inline font-light">{toPersianNumber(hoursAndMinutesString(item?.totalLength))}</span>}
                        <RxDotFilled className="hidden sm:inline" />
                        <span dir="rtl" className="hidden sm:inline font-light">{toPersianNumber(item?.lessonsList?.length)} درس</span>

                        <IoIosArrowBack size={26} className={`${open ? '-rotate-90' : 'rotate-90'} ms-4 transition-transform`} />

                    </div>
                </div>
            </div>

            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ height: 0 }}
                animate={{ height: open ? 'auto' : 0 }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }} >
                <div>
                    {item?.lessonsList?.map((item2: any, index: number) =>
                        <LessonAcordian key={index} index={index} item={item2} selectedLesson={selectedLesson} setSelectedLesson={setSelectedLesson} />)}

                </div>
            </motion.div>

        </div>
    )
}

const LessonAcordian = ({ item, selectedLesson, setSelectedLesson, index }: { item: any, selectedLesson: string, setSelectedLesson: (index: string) => void, index: number }) => {

    const handleClick = () => {
        if (item?.isFree) {
            if (selectedLesson === `${index}`) setSelectedLesson(``)
            else setSelectedLesson(`${index}`)
        }
    }
    console.log(item)



    return (
        <div className="flex flex-col justify-cente border-b-2 border-b-primary-50">
            <div onClick={handleClick} className={`p-4 py-5 ${item?.isFree ? "cursor-pointer" : 'cursor-default'} transition-all `}>

                <div className={`w-full flex flex-wrap items-center gap-2`}>

                    <div className="flex items-center gap-3 ">
                        <span className="w-7 h-7 pt-[1px] flex items-center justify-center rounded-md bg-primary-500 shadow-small font-semibold text-white  ">{toPersianNumber(index + 1)}</span>

                        <p className={` text-[1.1rem] hover:text-primary-400 ${selectedLesson === `${index}` ? "text-primary-400 " : " "}`}>{item?.lessonTitle}</p>
                    </div>

                    <div className="ms-auto flex items-center gap-2">
                        {item.attachedFile === true || item?.attachedFile.length ?
                            <div className=" me-2 flex items-center gap-1">
                                <FaDownload />
                                <span className="text-sm font-light">پیوست</span>
                            </div>
                            : ''}

                        {item?.lessonLength ? <span className="font-medium">{toPersianNumber(secondsToTimeString2(item?.lessonLength))}</span> : ''}
                        {item?.isFree ? <PiMonitorPlay size={28} /> : <RiLockLine size={28} />}

                    </div>

                </div>

            </div>

            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ height: 0 }}
                animate={{ height: selectedLesson === `${index}` ? 'auto' : 0 }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }} >
                <div className="mt-2">
                    {item.type==='video'&&<ReactPlayer
                        className='aspect-video !w-full'
                        url={item?.lessonFile.fileName}
                        controls />}

                </div>
            </motion.div>

        </div>
    )
}

function categorizeVideos(data: any[]) {

    const result = Object.values(
        data.reduce((acc: any, item: any) => {
            const section = item.videoSection;

            if (!acc[section]) {
                acc[section] = {
                    videoSection: section,
                    sectionFiles: [],
                    sectionLinks: [],
                    totalLength: 0,
                    videoList: []
                };
            }

            // اضافه کردن اطلاعات بخش
            acc[section].sectionLinks = [...acc[section].sectionLinks, ...(item.sectionLinks || [])];
            acc[section].sectionFiles = acc[section].sectionFiles === 'true' ? 'true' : acc[section].sectionFiles || [];

            if (item.sectionFiles && item.sectionFiles !== "true") {
                acc[section].sectionFiles.push(item.sectionFiles);
            }
            else acc[section].sectionFiles = 'true'

            // به‌روزرسانی طول کل
            acc[section].totalLength += Number(item.videoLength || 0);

            // اضافه کردن ویدیو به لیست
            const videoData = {
                isFree: item.isFree,
                title: item.title,
                description: item.description,
                videoLength: item.videoLength,
                videoLinks: item.videoLinks,
                videoFiles: item.videoFiles,
                videoUrl: item.videoUrl
            };
            acc[section].videoList.push(videoData);

            return acc;
        }, {})
    );

    return result;
}



