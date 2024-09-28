import { toPersianNumber } from "@/src/utils/functions";
import { Avatar } from "@nextui-org/avatar";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineCastForEducation } from "react-icons/md";
import clsx from "clsx";
import { title } from "../primitives";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";




type CardProps = {
};

export const TeacherCard = ({ }: CardProps) => {
    return (
        <div className="w-full max-w-[25rem] h-[22rem] rounded-2xl transition-all
        shadow-[0px_0px_10px_0px_#ff4a86d1,_0px_2px_20px_0px_#ff4a86d1,_inset_0px_0px_1px_0px_#ff4a86d1]
        dark:shadow-[0px_0px_8px_0px_#FF3F7F,_0px_2px_3px_0px_#FF3F7F,_inset_0px_0px_1px_0px_#FF3F7F]
        
             bg-white/80 hover:bg-white dark:bg-transparent  dark:hover:bg-primary-50 backdrop-blur-md backdrop-saturate-150 cursor-pointer">

            <div className="h-full w-full flex flex-col items-center">

                <div className="w-full pt-6 px-6 flex items-center justify-between">

                    <Avatar className="h-24 w-24 shadow-[0_0_15px_0_#FF3F7F]" size="lg" radius="full" isBordered color="danger" src="https://buckettest.storage.c2.liara.space/images/udemy-logo.png" />
                    
                    <div className="flex flex-col gap-1">
                        <div className='py-1 px-2 flex items-center gap-2 rounded-md border-1 border-danger-50 dark:border-danger-300'>
                            <PiStudentBold size={16} className="text-danger-400" />
                            <span className="text-xs font-semibold">{toPersianNumber(1023)} دانشجو</span>
                        </div>

                        <div className='py-1 px-2 flex items-center gap-2 rounded-md border-1 border-danger-50 dark:border-danger-300'>
                            <MdOutlineCastForEducation size={16} className="text-danger-400" />
                            <span className="text-xs font-semibold">{toPersianNumber(15)} دوره</span>
                        </div>
                    </div>

                </div>

                <div className="w-full mt-4 px-6 pb-4 flex flex-col items-start">
                    <h4 className={clsx(title({ color: 'pink' }), 'text-2xl lg:text-3xl font-bold')}>یودمی</h4>
                    <h5 className="mt-2 dark:text-[#d0e0ef] text-gray-800">
                        <span className="font-bold text-danger-400 inline">یودمی</span>
                        <p className="inline font-medium"> لاراول پر استفاده‌ترین فریمورک زبان برنامه نویسی PHP بوده و در سال‌های اخیر توسط شرکت‌ها و استارتاپ‌های بسیار زیادی مورد...</p>
                    </h5>
                </div>

                <div className="w-full mt-auto">
                    <div className="w-full px-12 py-4 flex items-center justify-center gap-2 border-t-2 border-danger-50 dark:border-danger-300">
                         <p className="ms-auto font-medium">مشاهده دوره‌های یودمی</p>
                         <TbArrowBigLeftLinesFilled size={20} className="text-danger-300 " />
                    </div>
                </div>

            </div>

        </div>


    )
}

