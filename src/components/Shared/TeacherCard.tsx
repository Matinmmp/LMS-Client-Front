import { toPersianNumber } from "@/src/utils/functions";
import { Avatar } from "@nextui-org/avatar";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineCastForEducation } from "react-icons/md";
import clsx from "clsx";
import { title } from "../primitives";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { Skeleton } from "@nextui-org/skeleton";
import { FaStar } from "react-icons/fa6";




type CardProps = {
    data: {
        faName: string,
        engName: string,
        description: string,
        avatar: {
            imageUrl: string,
        }
        rates: number,
        totalStudents: number,
        totalCourses: number,

    }
};

const TeacherCard = ({ data }: CardProps) => {
    return (
        <div className="w-full max-w-[25rem] h-[22rem] rounded-2xl transition-all
        shadow-medium
            shadow-[0px_0px_10px_0px_#42bff49b,_0px_2px_20px_0px_#42bff49b,_inset_0px_0px_1px_0px_#42bff49b]/
            dark:shadow-[0px_0px_8px_0px_#42bff4c5,_0px_2px_3px_0px_#42bff4c5,_inset_0px_0px_1px_0px_#42bff4c5]
        
             bg-white/80 hover:bg-white dark:bg-transparent  dark:hover:bg-primary-50 backdrop-blur-md backdrop-saturate-150 cursor-pointer">

            <div className="h-full w-full flex flex-col items-center">

                <div className="w-full pt-6 px-6 flex items-center justify-between">

                    <Avatar className="h-[5.5rem] w-[5.5rem] shadow-[0_0_15px_0_#42C0F4]" size="lg" radius="full" isBordered color="secondary" src={data.avatar.imageUrl} fallback/>

                    <div className="flex flex-col gap-1">
                        <div className='py-1 px-2 flex items-center gap-2 rounded-md border-1 border-secondary-50 dark:border-secondary-300'>
                            <PiStudentBold size={16} className="text-secondary-400" />
                            <span className="text-xs font-semibold">{toPersianNumber(`${data.totalStudents}`)} دانشجو</span>
                        </div>

                        <div className='py-1 px-2 flex items-center gap-2 rounded-md border-1 border-secondary-50 dark:border-secondary-300'>
                            <MdOutlineCastForEducation size={16} className="text-secondary-400" />
                            <span className="text-xs font-semibold">{toPersianNumber(`${data.totalCourses}`)} دوره</span>
                        </div>
                    </div>

                </div>

                <div className="w-full mt-6 px-6 pb-4 flex flex-col items-start">
                    <div className="w-full flex items-center justify-between">
                        <h4 className={clsx(title({ color: 'secondary' }), 'text-2xl lg:text-3xl font-bold')}>{data.engName}</h4>
                        <div className="flex items-center gap-1">
                            <span className="pt-1 text-md font-semibold text-warning-400">{data.rates}</span>

                            <FaStar size={20} className="text-warning-400" />
                        </div>
                    </div>
                    <h5 className="mt-4 dark:text-[#d0e0ef] text-gray-800">
                        <span className="font-bold text-secondary-400 inline"> {data.engName} </span>
                        <p className="inline font-medium"> {data.description} </p>
                    </h5>
                </div>

                <div className="w-full mt-auto">
                    <div className="w-full px-12 py-4 flex items-center justify-center gap-2 border-t-2 border-secondary-50 dark:border-secondary-300">
                        <p className="ms-auto font-medium">مشاهده دوره‌های {data.engName}</p>
                        <TbArrowBigLeftLinesFilled size={20} className="text-secondary-300 " />
                    </div>
                </div>

            </div>

        </div>


    )
}

// .illustrations .illustration_card:hover {
//     box-shadow: 0 12px 25px rgba(0, 0, 0, .2);
//     border: transparent;
// }

const TeacherCardLoading = () => {
    return (
        <div className="w-full max-w-[25rem] h-[22rem] rounded-2xl transition-all
        shadow-medium
        shadow-[0px_0px_10px_0px_#42bff49b,_0px_2px_20px_0px_#42bff49b,_inset_0px_0px_1px_0px_#42bff49b]/
        dark:shadow-[0px_0px_8px_0px_#42bff4c5,_0px_2px_3px_0px_#42bff4c5,_inset_0px_0px_1px_0px_#42bff4c5]
        
             bg-white/80 hover:bg-white dark:bg-transparent  dark:hover:bg-primary-50 backdrop-blur-md backdrop-saturate-150 cursor-pointer">

            <div className="h-full w-full flex flex-col items-center">

                <div className="w-full pt-6 px-6 flex items-center justify-between">

                    <Skeleton className="h-[5.5rem] w-[5.5rem] rounded-full" />

                    <div className="flex flex-col gap-1">
                        <Skeleton className="w-24 h-6 rounded-md" />
                        <Skeleton className="w-24 h-6 rounded-md" />
                    </div>

                </div>

                <div className="w-full px-6 pb-4 flex flex-col items-start">

                    <div className="w-full pt-5 flex items-center gap-1">
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
                    <div className="w-full px-12 py-4 flex items-center justify-center gap-2 border-t-2 border-secondary-50 dark:border-secondary-300">
                        <Skeleton className="w-48 h-5 mt-2 ms-auto rounded-md" />
                        <TbArrowBigLeftLinesFilled size={20} className="text-secondary-300 mt-1" />
                    </div>
                </div>

            </div>

        </div>


    )
}

export {
    TeacherCard,
    TeacherCardLoading
}