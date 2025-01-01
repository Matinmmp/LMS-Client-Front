'use client'

import { encodeToShortCode, formatDate, hoursAndMinutesString, secondsToTimeString2, toPersianNumber } from "@/src/utils/functions"
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
import { PiMaskSad, PiMonitorPlay } from "react-icons/pi";
import { RiLockLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";
import { TiAttachmentOutline } from "react-icons/ti";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { VideoPlayer } from "../Shared/VideoPlayer";
import { AlertDanger, AlertSecondary, AlertWarning } from "../Shared/Alert";
import { showToast } from "@/src/utils/toast";
import { Skeleton } from "@nextui-org/skeleton";
import { FaComments } from "react-icons/fa6";
import { getCourseComments } from "@/src/lib/apis/courseReviewApis";
import { Spinner } from "@nextui-org/spinner"
import { Avatar } from "@nextui-org/avatar";
import { BiCommentDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Textarea } from "@nextui-org/input";

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
            <span className="absolute -right-2 top-5 h-12 w-2 bg-primary-400 rounded-r-md"></span>
            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300, duration: 600 }}
                initial={{ height: 1400 }}
                animate={{ height: open ? 'auto' : 1400 }}
                className="p-4 pt-6 overflow-hidden/"
                exit={{ height: 1400 }}
                style={{ overflow: 'hidden' }}
            >
                <div className="flex items-center gap-2 text-primary-400 dark:text-white">
                    <TbFileDescription size={40} className="text-primary-400 hidden lg:inline " />
                    <p className="text-xl md:text-2xl font-semibold">توضیحات دوره</p>

                </div>

                <div className="mt-8 pb-20" dangerouslySetInnerHTML={{ __html: desc }}></div>
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
    const [open, setOpen] = useState(false);
    let getCourseData: any

    if (!refresh_token || !access_token)
        getCourseData = useQuery({ queryKey: ['getCourseDataByNameNoLoged', name], queryFn: () => getCourseDataByNameNoLoged(name) });

    if (refresh_token)
        getCourseData = useQuery({ queryKey: ['getCourseDataByNameLoged', name], queryFn: () => getCourseDataByNameLoged(name) });

    let data: any = null;
    if (!getCourseData.isLoading && getCourseData.isSuccess && getCourseData?.data)
        data = getCourseData?.data;

    let lessonsList: any = []
    if (!getCourseData.isLoading && getCourseData.isSuccess && getCourseData?.data)
        lessonsList = data?.courseData;


    let totalSections = 0;

    if (!getCourseData.isLoading && getCourseData.isSuccess && getCourseData?.data)
        totalSections = lessonsList?.length;

    if (!getCourseData.isLoading && getCourseData.isSuccess && data?.courseFiles && (data?.courseFiles === true || data?.courseFiles?.length))
        totalSections += 1;

    if (!getCourseData.isLoading && getCourseData.isSuccess && data?.courseLinks && (data?.courseLinks === true || data?.courseLinks?.length))
        totalSections += 1;

    return (
        <div className="w-full bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl relative">
            <span className="absolute -right-2 top-4 h-12 w-2 bg-secondary-400 rounded-r-md"></span>
            <div className="px-2 py-6 sm:px-4 flex flex-col gap-6">
                <div className="px-2 sm:px-0 flex items-center gap-2 text-secondary-400 dark:text-white">
                    <IoIosSchool size={40} className="text-secondary-400 hidden lg:inline " />
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold">سرفصل‌ها</p>
                </div>

                {!getCourseData.isLoading && getCourseData.isSuccess && (getCourseData?.data?.error || getCourseData?.data?.warning || getCourseData?.data?.info) ?
                    <div className="mb-4 flex flex-col gap-2">
                        {getCourseData?.data?.error ? <AlertDanger text={getCourseData?.data.error} /> : ''}
                        {getCourseData?.data?.warning ? <AlertWarning text={getCourseData?.data.warning} /> : ''}
                        {getCourseData?.data?.info ? <AlertSecondary text={getCourseData?.data.info} /> : ''}
                    </div> : ''}

                <div className="w-full">

                    <div className="flex flex-col gap-4">
                        {getCourseData.isLoading &&
                            <>
                                <Skeleton className="w-full h-[4rem] rounded-xl shadow-small dark:shadow-small" />
                                <Skeleton className="w-full h-[4rem] rounded-xl shadow-small dark:shadow-small" />
                                <Skeleton className="w-full h-[4rem] rounded-xl shadow-small dark:shadow-small" />

                            </>
                        }

                    </div>

                    <div className="flex flex-col gap-2">
                        {!getCourseData.isLoading && getCourseData.isSuccess &&
                            lessonsList?.slice(0, open ?
                                // data?.courseData?.length 
                                lessonsList.length : 10)?.map((item: any, index: number) => <SectionAcordian item={item} key={index} isCourseFree={data?.isPurchased} />)
                        }

                        {
                            !getCourseData.isLoading && getCourseData.isSuccess && data?.courseFiles && (data?.courseFiles === true || data?.courseFiles?.length) &&
                            (lessonsList.length < 10 || open) && <CourseFileAcordian courseFiles={data?.courseFiles} isCourseFree={data?.isPurchased} />
                        }

                        {
                            !getCourseData.isLoading && getCourseData.isSuccess && data?.courseLinks && (data?.courseLinks === true || data?.courseLinks?.length) &&
                            (lessonsList.length < 10 || open) && <CourseLinkAcordian courseLinks={data?.courseLinks} isCourseFree={data?.isPurchased} />
                        }

                    </div>


                    {
                        lessonsList.length >= 10 &&
                        <div className="w-full mt-6 flex justify-center">
                            <Button variant="ghost" color="secondary" size="lg" className="w-full font-semibold"
                                onClick={() => setOpen(!open)}>
                                {`${toPersianNumber(totalSections - 10)} بخش دیگر`}
                            </Button>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
}


const CourseFileAcordian = ({ courseFiles, isCourseFree }: { courseFiles: any, isCourseFree: boolean }) => {
    const [open, setOpen] = useState(false);
    let lessonIcon = <RiLockLine size={26} />
    if (isCourseFree)
        lessonIcon = <FaRegFile size={20} />

    const handleClick = () => {
        if (isCourseFree) {
            setOpen(!open)
        }
        else {
            showToast({ message: 'برای دیدن فایل‌های دوره در دوره ثبت‌نام کنید', type: 'warning' })
        }
    }

    return (
        <div dir="rtl" className="flex flex-col justify-center shadow-small rounded-xl overflow-hidden bg-[#f3f4f8] dark:bg-slate-800">

            <div onClick={handleClick} className={`p-4 py-5 cursor-pointer transition-all
                 ${open ? "bg-primary-500" : " bg-[#f3f4f8] dark:bg-slate-800"} `}>

                <div className="flex items-center gap-3 ">
                    <div className={`flex items-center gap-2 ${open ? "text-white " : " "}`}>
                        {lessonIcon}
                        <p dir="rtl" className={`text-sm sm:text-[1.1rem] font-medium `}>فایل‌های دوره</p>
                    </div>
                </div>


            </div>

            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ height: 0 }}
                animate={{ height: open ? 'auto' : 0 }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }} >
                <div className="mt-2 p-2 sm:p-4">
                    <div className="flex flex-col justify-start gap-2">
                        {Array.isArray(courseFiles) ? courseFiles?.map((file: any, index: number) =>
                            <Button className="max-w-max" startContent={<TiAttachmentOutline size={20} />} key={index} color="primary" variant="shadow" radius="sm" href={file.fileName} as={Link}>
                                {file?.fileTitle}
                            </Button>) : ''}
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

const CourseLinkAcordian = ({ courseLinks, isCourseFree }: { courseLinks: any, isCourseFree: boolean }) => {
    const [open, setOpen] = useState(false);
    let lessonIcon = <RiLockLine size={26} />
    if (isCourseFree)
        lessonIcon = <FaExternalLinkAlt size={20} />

    const handleClick = () => {
        if (isCourseFree) {
            setOpen(!open)
        } else {
            showToast({ message: 'برای دیدن لینک‌های دوره در دوره ثبت‌نام کنید.', type: 'warning' })
        }
    }

    return (
        <div dir="rtl" className="flex flex-col justify-center shadow-small rounded-xl overflow-hidden bg-[#f3f4f8] dark:bg-slate-800">

            <div onClick={handleClick} className={`p-4 py-5 cursor-pointer transition-all
                 ${open ? "bg-primary-500" : " bg-[#f3f4f8] dark:bg-slate-800"} `}>

                <div className="flex items-center gap-3 ">
                    <div className={`flex items-center gap-2 ${open ? "text-white " : " "}`}>
                        {lessonIcon}
                        <p dir="rtl" className={`text-sm sm:text-[1.1rem] font-medium `}>لینک‌های دوره</p>
                    </div>
                </div>


            </div>

            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ height: 0 }}
                animate={{ height: open ? 'auto' : 0 }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }} >
                <div className="mt-2 p-2 sm:p-4">


                    <div dir="rtl">
                        <div className="flex flex-col justify-start gap-2">
                            {Array.isArray(courseLinks) ? courseLinks?.map((link: any, index: number) =>
                                <Link key={index} href={link?.url} target="_blank">
                                    {link?.title}
                                </Link>) : ''}
                        </div>

                    </div>

                </div>
            </motion.div>

        </div>
    )
}


const SectionAcordian = ({ item, isCourseFree }: { item: any, isCourseFree: boolean }) => {
    const [open, setOpen] = useState(false)
    const [selectedLesson, setSelectedLesson] = useState('')



    return (
        <div dir="ltr" className="flex flex-col justify-center shadow-small rounded-xl overflow-hidden bg-[#f3f4f8] dark:bg-slate-800">

            <div onClick={() => setOpen(!open)} className={`p-4 py-5 cursor-pointer transition-all
                 ${open ? "bg-primary-500" : " bg-[#f3f4f8] dark:bg-slate-800"} `}>

                <div className={`w-full flex items-center justify-between gap-2 ${open ? "text-white" : " text-black dark:text-white"}`}>
                    <p className={`text-sm sm:text-[1.1rem] font-medium `}>{item?.sectionName}</p>

                    <div className="flex items-center gap-0.5 whitespace-nowrap">
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
                    {item?.error ? <AlertDanger text={item.error} /> : ''}
                    {item?.warning ? <AlertWarning text={item.warning} /> : ''}
                    {item?.info ? <AlertSecondary text={item.info} /> : ''}

                    {item?.lessonsList?.map((item2: any, index: number) =>
                        <LessonAcordian key={index} index={index} item={item2} selectedLesson={selectedLesson} setSelectedLesson={setSelectedLesson} isCourseFree={isCourseFree} />)}

                    {(item?.sectionFiles === true || Array.isArray(item?.sectionFiles)) ? <SectionFileAcordian sectionFiles={item?.sectionFiles} index={3232} selectedLesson={selectedLesson} setSelectedLesson={setSelectedLesson} isSectionFree={item?.isFree || isCourseFree} /> : ''}
                    {(item?.sectionLinks === true || Array.isArray(item?.sectionLinks)) ? <SectionLinkAcordian sectionLinks={item?.sectionLinks} index={3233} selectedLesson={selectedLesson} setSelectedLesson={setSelectedLesson} isSectionFree={item?.isFree || isCourseFree} /> : ''}


                </div>
            </motion.div>

        </div>
    )
}

type LessonAcordianProps = { isCourseFree: boolean, item: any, selectedLesson: string, setSelectedLesson: (index: string) => void, index: number }

const LessonAcordian = ({ item, selectedLesson, setSelectedLesson, index, isCourseFree }: LessonAcordianProps) => {
    let lessonIcon = <RiLockLine size={26} />
    const infoText = 'توجه داشته باشید محتوای این درس به صورت فایل میباشد که میتواند، فایل متنی، سوال، تمرین، نکته، داکیومنت باشد.'

    if (item?.isFree || isCourseFree)
        if (item.lessonType === 'video')
            lessonIcon = <PiMonitorPlay size={26} />
        else
            lessonIcon = <FaRegFile size={20} />

    const handleClick = () => {
        if (item?.isFree || isCourseFree) {
            if (selectedLesson === `${index}`) setSelectedLesson(``)
            else setSelectedLesson(`${index}`)
        } else {
            showToast({ message: 'برای دیدن این درس در دوره ثبت‌نام کنید.', type: 'warning' })
        }
    }

    let lesson: any;
    if (item.lessonType === 'video' && (item?.isFree || isCourseFree)) {

        lesson =
            <div className="flex flex-col gap-4">
                <VideoPlayer url={item?.lessonFile.fileName} />

                <div className="flex flex-col pt-4 pb-8">

                    {(item?.error || item?.warning || item?.info) ?
                        <div className="mb-6">
                            {item?.error ? <div className="my-2"><AlertDanger text={item?.error} /></div> : ""}

                            {item?.warning ? <div className="my-2"><AlertWarning text={item?.warning} /></div> : ""}

                            {item?.info ? <div className="my-2"><AlertSecondary text={item?.info} /></div> : ""}
                        </div> : ''
                    }

                    <Button color="primary" variant="shadow" radius="sm" href={item?.lessonFile.fileName} as={Link}>
                        دانلود ویدیو این بخش
                    </Button>

                    {Array.isArray(item?.attachedFile) ?
                        <div dir="rtl" className="mt-8">
                            <p className="mb-4 flex items-center gap-1">
                                <TiAttachmentOutline size={20} />
                                <span className="text-lg font-bold">پیوست</span>
                            </p>


                            <div className="flex flex-col justify-start gap-2">
                                {item?.attachedFile?.map((file: any, index: number) =>
                                    <Button className="max-w-max" startContent={<TiAttachmentOutline size={20} />} key={index} color="primary" variant="shadow" radius="sm" href={file.fileName} as={Link}>
                                        {file?.fileTitle}
                                    </Button>)}
                            </div>
                        </div> : ''}

                    {Array.isArray(item?.links) ?
                        <div dir="rtl" className="mt-8">
                            <p className="mb-2 flex items-center gap-1">
                                <FaExternalLinkAlt size={16} />
                                <span className="ms-1 text-lg font-bold">لینک</span>
                            </p>

                            <div className="flex flex-col justify-start gap-2">
                                {item?.links?.map((link: any, index: number) =>
                                    <Link key={index} href={link?.url} target="_blank">
                                        {link?.title}
                                    </Link>)}
                            </div>
                        </div> : ''}


                </div>
            </div>
    }


    if (item.lessonType !== 'video' && (item?.isFree || isCourseFree)) {

        lesson =
            <div className="-mt-4 pb-8 flex flex-col ">

                <div className="my-2"><AlertSecondary text={infoText} /></div>

                {item?.error ? <div className="my-2"><AlertDanger text={item?.error} /></div> : ""}

                {item?.warning ? <div className="my-2"><AlertWarning text={item?.warning} /></div> : ""}

                {item?.info ? <div className="my-2"><AlertSecondary text={item?.info} /></div> : ""}

                <Button className="mt-4" color="primary" variant="shadow" radius="sm" href={item?.lessonFile.fileName} as={Link}>
                    دانلود فایل این بخش
                </Button>

                {item?.attachedFile.length ?
                    <div dir="rtl" className="mt-8">
                        <p className="mb-4 flex items-center gap-1">
                            <TiAttachmentOutline size={20} />
                            <span className="text-lg font-bold">پیوست</span>
                        </p>


                        <div className="flex flex-col justify-start gap-2">
                            {item?.attachedFile?.map((file: any, index: number) =>
                                <Button className="max-w-max" startContent={<TiAttachmentOutline size={20} />} key={index} color="primary" variant="shadow" radius="sm" href={file.fileName} as={Link}>
                                    {file?.fileTitle}
                                </Button>)}
                        </div>
                    </div> : ''}

                {item?.links.length ?
                    <div dir="rtl" className="mt-8">
                        <p className="mb-2 flex items-center gap-1">
                            <FaExternalLinkAlt size={16} />
                            <span className="ms-1 text-lg font-bold">لینک</span>
                        </p>

                        <div className="flex flex-col justify-start gap-2">
                            {item?.links?.map((link: any, index: number) =>
                                <Link key={index} href={link?.url} target="_blank">
                                    {link?.title}
                                </Link>)}
                        </div>
                    </div> : ''}


            </div>
    }

    return (
        <div className="flex flex-col justify-cente border-b-2 border-b-primary-50">
            <div onClick={handleClick} className={`p-2 md:p-4 py-5 ${isCourseFree || item?.isFree ? "cursor-pointer" : 'cursor-default'} transition-all `}>

                <div className={`w-full flex flex-wrap items-center gap-2`}>

                    <div className="flex items-center gap-3 ">
                        <span className="min-w-7 min-h-7 pt-[1px] flex items-center justify-center rounded-md bg-primary-500 shadow-small font-semibold text-white  ">{toPersianNumber(index + 1)}</span>

                        <div className={`flex items-center gap-2 hover:text-secondary-500 ${selectedLesson === `${index}` ? "text-secondary-500 " : " "}`}>
                            {lessonIcon}
                            <p className={`mt-0.5 text-sm sm:text-[1.1rem] font-medium `}>{item?.lessonTitle}</p>
                        </div>
                    </div>

                    <div className="ms-auto flex items-center gap-2">
                        {item.attachedFile === true || item?.attachedFile.length ?
                            <div className=" me-2 flex items-center gap-1">
                                <FaDownload />
                                <span className="text-sm font-light">پیوست</span>
                            </div>
                            : ''}

                        {item?.lessonLength ? <span className="font-medium">{toPersianNumber(secondsToTimeString2(item?.lessonLength))}</span> : ''}


                    </div>

                </div>

            </div>

            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ height: 0 }}
                animate={{ height: selectedLesson === `${index}` ? 'auto' : 0 }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }} >
                <div className="mt-2 p-2 sm:p-4">

                    <div className="w-full h-full min-h-44">
                        {lesson}

                    </div>

                </div>
            </motion.div>

        </div>
    )
}

type SextionFileAcordianProps = { isSectionFree: boolean, sectionFiles: any, selectedLesson: string, setSelectedLesson: (index: string) => void, index: number }

const SectionFileAcordian = ({ sectionFiles, selectedLesson, setSelectedLesson, isSectionFree, index }: SextionFileAcordianProps) => {
    let lessonIcon = <RiLockLine size={26} />

    if (isSectionFree)
        lessonIcon = <FaRegFile size={20} />

    const handleClick = () => {
        if (isSectionFree) {
            if (selectedLesson === `${index}`) setSelectedLesson(``)
            else setSelectedLesson(`${index}`)
        } else {
            showToast({ message: 'برای دیدن فایل‌های این بخش در دوره ثبت‌نام کنید.', type: 'warning' })
        }
    }


    return (
        <div className="flex flex-col justify-cente border-b-2 border-b-primary-50">
            <div onClick={handleClick} className={`p-2 md:p-4 py-5 ${isSectionFree ? "cursor-pointer" : 'cursor-default'} transition-all `}>

                <div dir="rtl" className={`flex items-center gap-2 hover:text-secondary-500 ${selectedLesson === `${index}` ? "text-secondary-500 " : " "}`}>
                    {lessonIcon}
                    <p className={`mt-0.5 text-sm sm:text-[1.1rem] font-medium `}>فایل‌های این بخش</p>
                </div>

            </div>

            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ height: 0 }}
                animate={{ height: selectedLesson === `${index}` ? 'auto' : 0 }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }} >
                <div className="mt-2 p-2 sm:p-4">

                    <div dir="rtl">

                        <div className="flex flex-col justify-start gap-2">
                            {Array.isArray(sectionFiles) ? sectionFiles?.map((file: any, index: number) =>
                                <Button className="max-w-max" startContent={<TiAttachmentOutline size={20} />} key={index} color="primary" variant="shadow" radius="sm" href={file.fileName} as={Link}>
                                    {file?.fileTitle}
                                </Button>) : ''}
                        </div>
                    </div>

                </div>
            </motion.div>

        </div>
    )
}

type SectionLinkAcordianProps = { isSectionFree: boolean, sectionLinks: any, selectedLesson: string, setSelectedLesson: (index: string) => void, index: number }

const SectionLinkAcordian = ({ sectionLinks, selectedLesson, setSelectedLesson, isSectionFree, index }: SectionLinkAcordianProps) => {
    let lessonIcon = <RiLockLine size={26} />

    if (isSectionFree)
        lessonIcon = <FaExternalLinkAlt size={20} />

    const handleClick = () => {
        if (isSectionFree) {
            if (selectedLesson === `${index}`) setSelectedLesson(``)
            else setSelectedLesson(`${index}`)
        } else {
            showToast({ message: 'برای دیدن لینک‌های این بخش در دوره ثبت‌نام کنید.', type: 'warning' })
        }
    }


    return (
        <div className="flex flex-col justify-cente border-b-2 border-b-primary-50">
            <div onClick={handleClick} className={`p-2 md:p-4 py-5 ${isSectionFree ? "cursor-pointer" : 'cursor-default'} transition-all `}>

                <div dir="rtl" className={`flex items-center gap-2 hover:text-secondary-500 ${selectedLesson === `${index}` ? "text-secondary-500 " : " "}`}>
                    {lessonIcon}
                    <p className={`mt-0.5 text-sm sm:text-[1.1rem] font-medium `}>لینک‌های این بخش</p>
                </div>

            </div>

            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ height: 0 }}
                animate={{ height: selectedLesson === `${index}` ? 'auto' : 0 }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }} >
                <div className="mt-2 p-2 sm:p-4">


                    <div dir="rtl">
                        <div className="flex flex-col justify-start gap-2">
                            {Array.isArray(sectionLinks) ? sectionLinks?.map((link: any, index: number) =>
                                <Link key={index} href={link?.url} target="_blank">
                                    {link?.title}
                                </Link>) : ''}
                        </div>

                    </div>

                </div>
            </motion.div>

        </div>
    )
}


export const Commments = ({ name, refresh_token,courseId }: { name: string, refresh_token: any,courseId:string}) => {
    const [showAddComment, setShowAddComment] = useState(true);

    const getReviewData: any = useQuery({ queryKey: ['getReviewData', name], queryFn: () => getCourseComments({ name, currentPage: 1 }) });




    const handleLoginClick = () => {
        scrollTo({ top: 0, behavior: 'smooth' });
        showToast({ message: 'برای ثبت نظر وارد حساب خود شودید.', type: 'warning' });
    }

    const handleAddCommentClick = () => {
        setShowAddComment(true);
    }

    return (
        <div className="w-full pb-4 bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl relative">
            <span className="absolute -right-2 top-4 h-12 w-2 bg-warning-500 rounded-r-md"></span>

            <div className="w-full px-2 py-6 sm:px-4 flex items-center justify-between">
                <div className="px-2 sm:px-0 flex items-center gap-2 text-warning-500 dark:text-white">
                    <FaComments size={40} className="text-warning-500 hidden lg:inline " />
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold">کامنت‌ها</p>
                </div>

                {refresh_token ?
                    <Button onPress={handleAddCommentClick} endContent={<BiCommentDetail size={18} />} color={'primary'} radius="sm" size="md">ثبت نظر</Button>
                    :
                    <Button onPress={handleLoginClick} color={'primary'} radius="sm" size="md">برای ثبت نظر وارد شوید</Button>
                }

            </div>

            {showAddComment && <AddComment setShowAddComment={setShowAddComment} courseId={courseId}/>}



            {
                getReviewData?.isLoading && !getReviewData?.isError &&
                <div className="mt-4 pb-4 flex flex-col gap-4 items-center">
                    <Spinner color="warning" size={'lg'} />
                    <p className="text-xl font-semibold text-warning-500">درحال دریافت نظرات</p>
                </div>
            }
            {
                !getReviewData?.isLoading && getReviewData?.isSuccess && !getReviewData?.data?.comments?.length &&
                <div className="mt-4 pb-4 flex flex-col gap-4 items-center">
                    <PiMaskSad className="text-warning-500 text-5xl md:text-6xl" />
                    <p className="text-xl font-semibold text-warning-500">نظری ثبت نشده است</p>
                </div>
            }
            {
                !getReviewData?.isLoading && getReviewData?.isSuccess && getReviewData?.data?.comments?.length &&
                <div className="mt-4 px-4 flex flex-col gap-6">
                    {getReviewData?.data?.comments?.map((item: any, index: number) => <Commment item={item} key={index} />)}
                </div>
            }
        </div>
    )

}


const Commment = ({ item }: { item: any }) => {
    return (
        <div className="w-full bg-primary-50 shadow-small rounded-lg border-1 border-primary-500">
            <div className="p-4 md:p-6 flex flex-col">

                <div className="pb-6 flex items-center justify-between flex-wrap gap-2 border-b-1 border-b-primary-200 dark:border-b-primary-900">
                    <div className="flex gap-4 ">
                        <Avatar className="h-[2.5rem] w-[2.5rem] md:h-[3.5rem] md:w-[3.5rem] shadow-[0_0_15px_0_#42C0F4]" size="lg" radius="full"
                            isBordered color="primary" src={item?.user?.imageUrl} showFallback />

                        <div className="flex flex-col justify-between gap-1 text-sm md:text-base">
                            <div className="flex items-center gap-1">
                                <span className="font-medium truncate">{item?.user?.name}</span>
                                <span>|</span>
                                <strong className=" font-semibold text-primary-500 dark:text-primary-400">{`${item?.user?.role === 'admin' ? 'مدیر' : 'کاربر'}`}</strong>
                            </div>

                            <span className='text-sm font-semibold text-gray-700 dark:text-gray-400'>{formatDate(item.createAt)}</span>
                        </div>
                    </div>
                    <Button color="primary" size="sm" variant="ghost" className='font-bold ms-auto'>پاسخ</Button>
                </div>

                <div className="w-full pt-6 pb-4">
                    <p className="text-xs md:text-base">{item?.comment}</p>
                </div>

                <div className="mt-2 sm:ps-4 flex flex-col gap-3">
                    {item?.commentsReplies?.map((comm: any, index: number) =>
                        <div key={index} className="p-4 bg-white dark:bg-[#1f2e44]/ dark:bg-[#1b293a] rounded-lg shadow-small">
                            <div className="pb-6 w-full flex gap-4 border-b-1 border-b-primary-200 dark:border-b-primary-700">
                                <Avatar className="h-[2.5rem] w-[2.5rem] md:h-[3.5rem] md:w-[3.5rem]" size="lg" radius="full"
                                    isBordered color="primary" src={comm?.user?.imageUrl} showFallback />

                                <div className="flex flex-col justify-between gap-1 text-sm md:text-base">
                                    <div className="flex items-center gap-1">
                                        <span className="font-medium truncate">{comm?.user?.name}</span>
                                        <span>|</span>
                                        <strong className=" font-semibold text-primary-500 dark:text-primary-400">{`${comm?.user?.role === 'admin' ? 'مدیر' : 'کاربر'}`}</strong>
                                    </div>

                                    <span className='text-sm font-semibold text-gray-700 dark:text-gray-400'>{formatDate(comm.createAt)}</span>
                                </div>
                            </div>

                            <div className="w-full pt-6 pb-2">
                                <p className="text-xs md:text-base">{comm?.comment}</p>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>)

}


type AddCommentProps = {
    setShowAddComment: (showAddComment:boolean)=>void,
    courseId:string
}
const AddComment = ({setShowAddComment,courseId}:AddCommentProps) => {
    const [showError, setShowError] = useState(false);
    const [commentText, setCommentText] = useState('');
    const { user, loading } = useSelector((state: any) => state.auth);



    const handleCommentChange = (text: string) => {
        setCommentText(text);
        if (showError)
            setShowError(false)
    }

    const handleCancleComment = () => {
        setShowAddComment(false);
        setCommentText('');
        setShowError(false);
    }

    const handleAddComment = () => {
        if (!commentText) {
            setShowError(true);
            return;
        }
    }

    return (
        <div className=" mt-4 mb-10 p-4">
            <div className="p-4 md:p-6 pt-6 md:pt-8 flex flex-col gap-4 border-1 border-primary-500 rounded-lg shadow-small">
                <div className="flex gap-4 ">
                    <Avatar className="h-[2.5rem] w-[2.5rem] md:h-[3.5rem] md:w-[3.5rem] shadow-[0_0_15px_0_#42C0F4]" size="lg" radius="full"
                        isBordered color="primary" src={user?.imageUrl} showFallback />

                    <div className="flex flex-col justify-between gap-1 text-sm md:text-base">

                        <span className="font-medium truncate">{user?.name}</span>


                        <span className='font-medium'>{user?.email}</span>
                    </div>
                </div>


                <Textarea
                    onChange={(e) => handleCommentChange(e.target.value)}
                    className="mt-6 text-sm"
                    classNames={{ inputWrapper: "dark:bg-opacity-30", errorMessage: 'text-sm font-medium mt-1' }}
                    color={'primary'}
                    errorMessage="برای ثبت نظر باید متن نظر پر باشد."
                    isInvalid={showError}
                    minRows={18}
                    value={commentText}
                    placeholder="نظر یا سوال خود را در اینجا بنویسید."
                    variant="faded"
                />

                <div className="md:mt-2 pb-2 w-full flex justify-end gap-4">

                    <Button onPress={handleCancleComment} className="w-full md:max-w-max  md:font-semibold" color="primary" variant="bordered" radius="sm" size="lg">لغو</Button>

                    <Button onPress={handleAddComment} className="w-full md:max-w-max  md:font-semibold" color="primary" variant="shadow" radius="sm" size="lg">ثبت</Button>
                </div>

            </div>
        </div>
    )
}