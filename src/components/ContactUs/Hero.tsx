import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { title } from "../primitives";
import { clsx } from "clsx";

type Props = {
};

const Hero = (props: Props) => {
    return (

        <div className="w-full  relative">

            <div className="mt-2 md:mt-6">

                <h1 className='text-center text-[#475466] dark:text-white w-full text-3xl md:text-4xl lg:text-5xl !font-extrabold md:leading-[3.2rem]'>
                    ارتباط با ما
                </h1>

                <p className="mt-6 text-center text-[#475466] dark:text-white text-lg lg:text-2xl font-light">در این صفحه میتوانید اطلاعات ارتباطی ویرچوال لرن را مشاهده کنید.</p>


                <div className="mt-10 lg:mt-16">
                    <div className="flex items-center gap-4 justify-center">
                        <Link href="https://t.me/VC_Virtual_Learn" target="_blank" rel="noopener noreferrer" className="p-4 flex items-center justify-center border-secondary-500 rounded-xl border-2 shadow-medium">
                            <FaTelegramPlane className="text-3xl lg:text-4xl text-secondary-500" />
                        </Link>

                        <Link href="https://www.instagram.com/vc_virtual_learn" target="_blank" rel="noopener noreferrer" className="p-4 flex items-center justify-center border-danger-500 rounded-xl border-2 shadow-medium">
                            <RxInstagramLogo className="text-3xl lg:text-4xl text-danger-500" />
                        </Link>

                        <Link rel={"noopener noreferrer"} target={ "_blank"} href="mailto:vc.virtuallearn@gmail.com?subject=تماس%20از%20سایت&body=سلام،%20لطفاً%20به%20سوالات%20من%20پاسخ%20دهید." className="p-4 flex items-center justify-center border-warning-500 rounded-xl border-2 shadow-medium">
                            <BiLogoGmail className="text-3xl lg:text-4xl text-warning-500" />
                        </Link>


                    </div>

                </div>
            </div>

        </div >

    );
};

export default Hero;
