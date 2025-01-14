import Image from "next/image";
import { BiError } from "react-icons/bi";

export const Problem = () => {

    return (
     <div className=" w-full flex flex-col items-center">
        <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-danger-500">خطایی رخ داده است</p>
        <p className="mt-6 md:text-lg text-danger-500 text-center font-medium">متأسفیم، مشکلی در سرور پیش آمده است. لطفاً بعداً دوباره امتحان کنید یا با پشتیبانی تماس بگیرید.</p>
        {/* <BiError className="mt-6 text-[6rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem] text-danger-500"/> */}
        <Image src={'https://buckettest.storage.c2.liara.space/images/error1.svg'} alt='' width={1000} height={1000} className="mt-10 max-w-[40rem]"/>
     </div>
    )
}