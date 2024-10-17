
import { title } from "../primitives";
import { clsx } from "clsx";


type Props = {
};


const Hero = (props: Props) => {
    return (
        <div className="w-full  relative  ">

            <div className="pb-10 flex flex-col md2:flex-row justify-between relative z-10">
                <div className="w-full">
                    <div className="w-full mt-4 text-center ">
                        <h1 className={clsx(title({ color: 'green' }), 'inline w-full text-center text-[2rem] md:text-[2.5rem] lg:text-5xl xl:text-6xl !font-bold md:leading-[3.2rem]')}>
                            بهترین آکادمی برنامه‌نویسی از سراسر جهان
                        </h1>

                        <div className="w-full flex flex-col items-center">
                            <h2 className="w-full lg:w-10/12 mt-4 md:mt-10 text-base md:text-xl font-medium leading-8 md:leading-8">
                                در این بخش می‌توانید آکادمی‌های بین‌المللی را پیدا کنید و دوره‌های ترجمه‌شده آنها را به زبان فارسی مشاهده کنید.
                                <span className={clsx(title({ color: 'green' }), 'text-base md:text-2xl !font-bold px-1 whitespace-nowrap')}>
                                    Virtual Learn
                                </span>
                                دسترسی به برترین آکادمی‌ها برنامه‌نویسی در هر زمان و از هر مکان برای شما فراهم است.
                            </h2>

                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Hero;
