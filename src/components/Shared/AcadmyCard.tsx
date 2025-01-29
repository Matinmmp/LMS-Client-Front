import { encodeTitle, toPersianNumber } from "@/src/utils/functions";
import { Avatar } from "@nextui-org/avatar";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineCastForEducation } from "react-icons/md";
import clsx from "clsx";
import { title } from "../primitives";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi"
import { Skeleton } from "@nextui-org/skeleton";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

type CardProps = {
    data: {
        faName: string,
        engName: string,
        description: string,
        avatar: {
            imageUrl: string,
        }
        rating: number,
        totalStudents: number,
        totalTeachers: number,
        totalCourses: number,

    }
};

const AcadmyCard = ({ data }: CardProps) => {

    return (
        <Link href={`/academies/${encodeTitle(data.engName)}`} className="w-full max-w-[25rem] h-[22rem] ">
            <div className="w-full h-full rounded-lg transition-all
                shadow-medium
                shadow-[0px_0px_10px_0px_#60ff95a0,_0px_2px_20px_0px_#60ff95a0,_inset_0px_0px_1px_0px_#60ff95a0]/
                dark:shadow-[0px_0px_8px_0px_#73ffa2,_0px_2px_3px_0px_#87ffaf,_inset_0px_0px_1px_0px_#73ffa2]
                bg-white/90 dark:bg-transparent dark:hover:bg-primary-50 backdrop-blur-md backdrop-saturate-150 cursor-pointer">

                <div className="h-full w-full flex flex-col items-center">

                    <div className="w-full p-4 flex items-center justify-between">
                        <Avatar alt={`آکادمی ${data?.faName} در ویرچوال لرن`} className="h-[4.5rem] w-[4.5rem] shadow-[0_0_15px_0_#44de77]" size="lg" radius="sm" isBordered color="success" src={data.avatar.imageUrl} />

                        <div className="flex flex-col gap-1">
                            <div className='py-[2px] px-3 flex items-center gap-2 rounded-md border-1 border-success-50 dark:border-success-300 shadow-sm'>
                                <PiStudentBold size={13} className="text-success-400" />
                                <span className="text-[0.7rem] font-semibold">{toPersianNumber(data.totalStudents)} دانشجو</span>
                            </div>

                            <div className='py-[2px] px-3 flex items-center gap-2 rounded-md border-1 border-success-50 dark:border-success-300 shadow-sm'>
                                <MdOutlineCastForEducation size={13} className="text-success-400" />
                                <span className="text-[0.7rem] font-semibold">{toPersianNumber(data.totalCourses)} دوره</span>
                            </div>

                            <div className='py-[2px] px-3 flex items-center gap-2 rounded-md border-1 border-success-50 dark:border-success-300 shadow-sm'>
                                <GiTeacher size={13} className="text-success-400" />
                                <span className="text-[0.7rem] font-semibold">{toPersianNumber(data.totalTeachers)} مدرس</span>
                            </div>
                        </div>

                    </div>

                    <div className="w-full px-4 pb-4 flex flex-col items-start">

                        <div className="mt-2 w-full flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <span className="pt-1 text-md font-semibold text-warning-400">{toPersianNumber(data.rating)}</span>
                                <FaStar size={20} className="text-warning-400" />
                            </div>
                            <h4 className={clsx(title({ color: 'green' }), 'text-xl font-extrabold')}>{data.engName}</h4>
                        </div>

                        <h5 className="mt-4 dark:text-[#d0e0ef] text-gray-800 max-h-24">
                            <p className="text-sm font-light line-clamp-5"> {data?.description} </p>
                        </h5>
                    </div>

                    <div className="w-full mt-auto">
                        <div className="w-full p-4 flex text-sm lg:text-base items-center justify-center gap-2 border-t-2 border-success-50 dark:border-success-300">
                            <p>مشاهده اطلاعات <span className="text-success-500">{data?.engName}</span></p>
                            <TbArrowBigLeftLinesFilled size={20} className="text-success-300" />
                        </div>
                    </div>

                </div>

            </div>
        </Link>
    )
}

const AcadmyCardLoading = () => {
    return (
        <div className="w-full max-w-[25rem] h-[22rem] rounded-lg transition-all
        shadow-[0px_0px_10px_0px_#60ff95a0,_0px_2px_20px_0px_#60ff95a0,_inset_0px_0px_1px_0px_#60ff95a0]/
        shadow-medium
        dark:shadow-[0px_0px_8px_0px_#73ffa2,_0px_2px_3px_0px_#87ffaf,_inset_0px_0px_1px_0px_#73ffa2]
        bg-white/90 dark:bg-transparent   dark:hover:bg-primary-50 backdrop-blur-md backdrop-saturate-150 cursor-pointer">

            <div className="h-full w-full flex flex-col items-center">
                <div className="w-full p-6 flex items-center justify-between">

                    <Skeleton className="w-20 h-20 p-2 rounded-xl" />



                    <div className="flex flex-col gap-1">
                        <Skeleton className="w-24 h-5 rounded-md" />
                        <Skeleton className="w-24 h-5 rounded-md" />
                        <Skeleton className="w-24 h-5 rounded-md" />
                    </div>

                </div>

                <div className="w-full px-6 pb-4 flex flex-col items-start">
                    <div className="w-full flex items-center gap-1">
                        <div className="w-full flex items-center justify-between">
                            <Skeleton className="w-24 h-7 rounded-md" />
                            <div className="flex items-center gap-1">
                                <Skeleton className="w-8 h-4 rounded-sm" />
                                <FaStar size={20} className="text-warning-400" />
                            </div>
                        </div>
                    </div>

                    <Skeleton className="w-72 h-4 mt-8 rounded-sm" />
                    <Skeleton className="w-64 h-4 mt-2 rounded-sm" />
                    <Skeleton className="w-56 h-4 mt-2 rounded-sm" />
                </div>

                <div className="w-full mt-auto">
                    <div className="w-full p-4 flex items-center justify-center gap-2 border-t-2 border-success-50 dark:border-success-300">
                        <Skeleton className="w-48 h-5 mt-2 rounded-md" />
                        <TbArrowBigLeftLinesFilled size={20} className="text-success-300 mt-1" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export { AcadmyCard, AcadmyCardLoading }