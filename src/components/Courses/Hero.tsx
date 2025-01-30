
import { title } from "../primitives";
import { clsx } from "clsx";


type Props = {
};


const Hero = (props: Props) => {
    return (
        <div className="w-full mt-16 relative">
            <div className="pb-10 flex flex-col md2:flex-row justify-between relative z-10">
                <div className="w-full px-4">
                    <div className="w-full mt-4 text-center ">
                        <h1 className={clsx(title({ color: 'blue' }), ' inline w-full text-center text-2xl md:text-[2.5rem] lg:text-5xl xl:text-6xl !font-bold md:leading-[3.2rem]')}>
                            بهترین دوره‌های برنامه‌نویسی از سراسر جهان
                        </h1>

                        <div className="w-full flex flex-col items-center">
                            <h2 className="w-full lg:w-10/12 mt-4 md:mt-10 text-base md:text-xl font-medium leading-8 md:leading-8">
                                در این بخش از
                                <strong className={clsx(title({ color: 'blue' }), 'text-base md:text-2xl !font-bold px-1 whitespace-nowrap')}>
                                    Virtual Learn
                                </strong> 
                                به بهترین دوره‌های برنامه‌نویسی بین‌المللی دسترسی خواهید داشت که با دقت به زبان فارسی ترجمه شده‌اند. هر زمان و از هر مکان می‌توانید با انتخاب دوره‌های آموزشی معتبر، مهارت‌های خود را توسعه دهید و از محتوای آموزشی متنوع بهره‌مند شوید.
                            </h2>

                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Hero;
