import { BiError } from "react-icons/bi";

export const Problem = () => {

    return (
     <div className=" w-full flex flex-col items-center">
        <p className="text-xl lg:text-2xl xl:text-3xl font-semibold text-danger-500">خطایی رخ داده است</p>
        <p className="mt-6 md:text-lg text-danger-500 text-center font-semibold">متأسفیم، مشکلی در سرور پیش آمده است. لطفاً بعداً دوباره امتحان کنید یا با پشتیبانی تماس بگیرید.</p>
        <BiError className="mt-6 text-[6rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem] text-danger-500"/>
     </div>
    )
}