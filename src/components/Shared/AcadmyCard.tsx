import { toPersianNumber } from "@/src/utils/functions";
import { Avatar } from "@nextui-org/avatar";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineCastForEducation } from "react-icons/md";
import clsx from "clsx";
import { title } from "../primitives";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";




type CardProps = {
};

export const AcadmyCard = ({ }: CardProps) => {
    return (
        <div className="w-full max-w-[25rem] h-[22rem] rounded-lg border-2/ transition-all border-primary-50/ 
        shadow-[0px_0px_10px_0px_#60ff95a0,_0px_2px_20px_0px_#60ff95a0,_inset_0px_0px_1px_0px_#60ff95a0]
        dark:shadow-[0px_0px_8px_0px_#73ffa2,_0px_2px_3px_0px_#87ffaf,_inset_0px_0px_1px_0px_#73ffa2]
        bg-white/90 dark:bg-transparent dark:border-success-300/ dark:hover:bg-primary-50 backdrop-blur-md backdrop-saturate-150 cursor-pointer">

            <div className="h-full w-full flex flex-col items-center">
                <div className="w-full p-6 flex items-center justify-between">

                    <Avatar className="h-16 w-16 shadow-[0_0_15px_0_#44de77]" size="lg" radius="sm" isBordered color="success" src="https://buckettest.storage.c2.liara.space/images/udemy-logo.png" />
                    <div className="flex flex-col gap-1">
                        <div className='py-1 px-2 flex items-center gap-2 rounded-md border-1 border-success-50 dark:border-success-300'>
                            <PiStudentBold size={16} className="text-success-400" />
                            <span className="text-xs font-semibold">{toPersianNumber(1023)} دانشجو</span>
                        </div>

                        <div className='py-1 px-2 flex items-center gap-2 rounded-md border-1 border-success-50 dark:border-success-300'>
                            <MdOutlineCastForEducation size={16} className="text-success-400" />
                            <span className="text-xs font-semibold">{toPersianNumber(15)} دوره</span>
                        </div>
                    </div>

                </div>

                <div className="w-full px-6 pb-4 flex flex-col items-start">
                    <h4 className={clsx(title({ color: 'green' }), 'text-2xl lg:text-3xl font-bold')}>یودمی</h4>
                    <h5 className="mt-4 dark:text-[#d0e0ef] text-gray-800">
                        <span className="font-bold text-success-400 inline">یودمی</span>
                        <p className="inline font-medium"> لاراول پر استفاده‌ترین فریمورک زبان برنامه نویسی PHP بوده و در سال‌های اخیر توسط شرکت‌ها و استارتاپ‌های بسیار زیادی مورد...</p>
                    </h5>
                </div>

                <div className="w-full mt-auto">
                    <div className="w-full px-12 py-4 flex items-center justify-center gap-2 border-t-2 border-success-50 dark:border-success-300">
                         <p className="ms-auto font-medium">مشاهده دوره‌های یودمی</p>
                         <TbArrowBigLeftLinesFilled size={20} className="text-success-300 " />
                    </div>
                </div>

            </div>

        </div>


    )
}

