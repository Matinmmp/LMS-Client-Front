import Image from "next/image";
import { title } from "../primitives";
import { clsx } from "clsx";


type Props = {
};


const Hero = (props: Props) => {
    return (
        <div className="w-full  relative">

            <div className="pb-10 flex flex-col md2:flex-row justify-between relative z-10">
                <div className="w-full md2:w-1/2 order-2 md2:order-1">
                    <div className="w-full mt-4 text-center md2:text-right">
                        {/* <h1 className={clsx(title({ color: 'blue' }), 'inline w-full text-center text-[1.6rem] leading-9 md:text-3xl md:leading-10 xl:text-[2.5rem] xl:leading-[3.2rem] !font-bold ')}
                        >آموزش برنامه‌نویسی به زبان فارسی با ترجمه اختصاصی از بهترین آکادمی‌های جهان
                        </h1> */}
                        <h1 className={clsx(title({ color: 'blue' }), 'inline w-full text-center text-[1.6rem] leading-9 md:text-3xl md:leading-10 xl:text-[2.5rem] xl:leading-[3.2rem] !font-bold ')}>
                            آموزش برنامه‌نویسی به زبان فارسی از بهترین آکادمی‌های جهان
                        </h1>
                        <br />

                        <h2 className=" mt-7 text-right text-base md:text-lg font-medium leading-8 md:leading-10">
                            با دسترسی به بهترین دوره‌های برنامه‌نویسی جهان به زبان فارسی، مهارت‌های خود را ارتقا دهید.
                        </h2>
                        <h2 className="text-right text-base md:text-lg font-medium leading-8 md:leading-10">
                            <span className={clsx(title({ color: 'blue' }), 'text-base md:text-xl !font-bold')}>Virtual Learn</span> ویدیوهای آموزشی برترین آکادمی‌های بین‌المللی را ترجمه کرده و به زبان فارسی در اختیار شما قرار می‌دهد تا بدون نیاز به دانش زبان انگلیسی، از منابع آموزشی برتر بهره‌مند شوید.
                        </h2>

                    </div>
                </div>

                <div className="w-full md2:w-1/2 order-1 md2:order-2">
                    <Image className="-mt-10 md:lg:mt-0 lg:-mt-20 " priority={true}
                        width={1000} height={1000} alt="ویرچوال لرن، پلتفرم آموزش آنلاین با ترجمه دوره‌های بین‌المللی" src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}hero4.svg`} />
                </div>

            </div>
        </div >
    );
};

export default Hero;
