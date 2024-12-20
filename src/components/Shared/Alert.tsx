import { IoIosInformationCircle } from "react-icons/io"
import { MdDangerous } from "react-icons/md";
import { PiShieldWarningFill } from "react-icons/pi";

type AlertProps = {
    text: string,
    title?: string,
}



export const AlertDanger = ({ text, title }: AlertProps) => {

    return (
        <div dir="rtl" className={`w-full py-3 px-4 border-1 border-default-200 border-s-4 border-s-danger-700 
        dark:border-s-danger-400 rounded-e-xl bg-[#241c1c] dark:bg-[#131313]/70`}>

            <div className="w-full flex items-start gap-4">
                <span className={`p-1 rounded-full border-1 border-danger-200 shadow-small dark:shadow-none`}>
                    <MdDangerous className={`text-danger-700 dark:text-danger-400 text-xl md:text-2xl`} />
                </span>
                <div>
                    {title && <p className={`mb-1 text-xs sm:text-sm font-semibold text-danger-700 dark:text-danger-400`}>{title}</p>}
                    <p className={`text-xs sm:text-sm w-full font-medium block leading-5
                     text-danger-700 dark:text-danger-400`}>{text}</p>
                </div>
            </div>
        </div>
    )
}


export const AlertSecondary = ({ text, title }: AlertProps) => {
    return (
        <div dir="rtl" className={`w-full py-3 px-4 border-1 border-default-200 border-s-4 border-s-secondary-700 
        dark:border-s-secondary-400 rounded-e-xl bg-[#241c1c] dark:bg-[#131313]/70`}>

            <div className="w-full flex items-start gap-4">
                <span className={`p-1 rounded-full border-1 border-secondary-200 shadow-small dark:shadow-none`}>
                    <IoIosInformationCircle className={`text-secondary-700 dark:text-secondary-400 text-xl md:text-2xl`} />
                </span>
                <div>
                    {title && <p className={`mb-1 text-xs sm:text-sm font-semibold text-secondary-700 dark:text-secondary-400`}>{title}</p>}
                    <p className={`text-xs sm:text-sm w-full font-medium block leading-5
                     text-secondary-700 dark:text-secondary-400`}>{text}</p>
                </div>
            </div>
        </div>
    )
}


export const AlertWarning = ({ text, title }: AlertProps) => {
    return (
        <div dir="rtl" className={`w-full py-3 px-4 border-1 border-default-200 border-s-4 border-s-warning-700 
        dark:border-s-warning-400 rounded-e-xl bg-[#241c1c] dark:bg-[#131313]/70`}>

            <div className="w-full flex items-start gap-4">
                <span className={`p-1 rounded-full border-1 border-warning-200 shadow-small dark:shadow-none`}>
                    <PiShieldWarningFill className={`text-warning-700 dark:text-warning-400 text-xl md:text-2xl`} />
                </span>
                <div>
                    {title && <p className={`mb-1 text-xs sm:text-sm font-semibold text-warning-700 dark:text-warning-400`}>{title}</p>}
                    <p className={`text-xs sm:text-sm w-full font-medium block leading-5
                     text-warning-700 dark:text-warning-400`}>{text}</p>
                </div>
            </div>
        </div>
    )
}