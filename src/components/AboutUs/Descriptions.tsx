import { clsx } from "clsx";
import { title } from "../primitives";
import Image from "next/image";

type Props = {
};



const Description1 = (props: Props) => {
    return (

        <div className="w-full  relative">

            <div className="pb-10 gap-2 flex flex-col md2:flex-row justify-between relative z-10 text-[rgb(58,147,232)]/">

                <div className="w-full mt-14 lg:mt-16 text-center  ">
                    <h2 className={clsx(title({ color: 'blue' }), 'text-[#475466] dark:text-white inline w-full text-center text-3xl md:text-4xl lg:text-5xl !font-semibold md:leading-[3.2rem]')}>
                        هدف ویرچوال لرن
                    </h2>
                    <br />

                    <div className="flex flex-col items-center">

                        <p className={`w-full lg:w-10/12 mt-6 lg:mt-10 text-lg md:text-xl text-center font-light lg:font-normal leading-8 md:leading-10`}>
                            هدف ما در <span className={clsx(title({ color: 'blue' }), 'text-lg md:text-2xl !font-bold')}>Virtual Learn</span>  این است که دسترسی به آموزش‌های تخصصی برنامه‌نویسی را برای همه علاقه‌مندان، به‌خصوص فارسی‌زبانان، ساده‌تر کنیم. با استفاده از تکنولوژی هوش مصنوعی، ما دوره‌های آموزشی بین‌المللی را با دقت به زبان فارسی ترجمه می‌کنیم و این دوره‌ها را با قیمتی مناسب و منصفانه ارائه می‌دهیم. با این کار، به هر فردی این امکان را می‌دهیم که بدون نیاز به دانش زبان انگلیسی به منابع ارزشمند آموزشی دسترسی داشته باشد.
                        </p>

                        <p className={`w-full lg:w-10/12 mt-8 lg:mt-10 text-lg md:text-xl text-center font-light lg:font-normal leading-8 md:leading-10`}>
                            تمرکز اصلی ما بر ایجاد پلی میان منابع جهانی و دانشجویان فارسی‌زبان است. با به‌روزرسانی مداوم و توجه به نیازهای جدید جامعه برنامه‌نویسان، به دنبال ارتقاء سطح دانش و مهارت‌های تخصصی در این حوزه هستیم. رویکرد ما، ارائه آموزش‌های کاربردی و به‌روز است تا افراد بتوانند با سرعت بیشتری مسیر حرفه‌ای خود را پیش بگیرند و به اهداف خود نزدیک‌تر شوند.
                        </p>

                    </div>
                </div>



            </div>

        </div >

    );
};

const Description2 = (props: Props) => {
    return (

        <div className="w-full relative">

            <div className="pb-10 flex flex-col gap-6 md2:flex-row justify-between items-center relative z-10 text-[rgb(58,147,232)]/">

                <div className="w-[17rem] order-1 md2:order-1">
                    <Image priority={true}
                        width={1000} height={1000} alt="virtual learn hero" src={"https://buckettest.storage.c2.liara.space/images/mission.svg"} />
                </div>

                <div className="w-ful md2:w-3/4 order-2 md2:order-2 lg:mt-0 text-center md:text-right">

                    <h3 className={clsx(title({ color: 'blue' }), 'inline w-full text-3xl lg:text-4xl !font-bold md:leading-[3.2rem]')}>
                        ماموریت
                    </h3>

                    <div className="flex flex-col items-center">

                        <p className={`w-full mt-6 lg:mt-10 text-lg md:text-xl text-center lg:text-right font-light lg:font-normal leading-10 md:leading-[2.75rem]`}>
                            ماموریت ما ارائه دوره‌های آموزشی باکیفیت و جامع از برترین آکادمی‌های جهانی به زبان فارسی است. ما با استفاده از هوش مصنوعی و فناوری‌های پیشرفته، به‌طور مستمر دوره‌های به‌روز و کاربردی را ترجمه و با قیمت‌های مناسب در دسترس همگان قرار می‌دهیم. هدف اصلی ما، تسهیل دسترسی به آموزش‌های بین‌المللی برای تمامی فارسی‌زبانان است تا بدون محدودیت زبانی به دانش و مهارت‌های جدید دست یابند. همچنین، ما به ارتقاء سطح علمی و حرفه‌ای کاربران خود از طریق ارائه محتوای معتبر و غنی متعهد هستیم و می‌کوشیم با استفاده از نظرات و بازخوردهای کاربران، کیفیت خدمات خود را به‌طور مداوم بهبود بخشیم.

                        </p>



                    </div>
                </div>

            </div>
        </div >

    );
};

const Description3 = (props: Props) => {

    return (

        <div className="w-full relative">

            <div className="pb-10 flex flex-col gap-6 md2:flex-row justify-between items-center relative z-10">

                <div className="w-ful md2:w-3/4 order-2 md2:order-1  lg:mt-0 text-center md:text-left">

                    <h3 className={clsx(title({ color: 'blue' }), 'inline w-full text-3xl lg:text-4xl !font-bold md:leading-[3.2rem]')}>
                        چشم‌انداز
                    </h3>

                    <div className="flex flex-col items-center">

                        <p className={`w-full mt-6 lg:mt-10 text-lg md:text-xl text-center lg:text-right font-light lg:font-normal leading-10 md:leading-[2.75rem]`}>
                            چشم‌انداز ما این است که به بزرگ‌ترین مرجع آموزش‌های ترجمه‌شده به فارسی در حوزه‌های متنوع، به‌ویژه در زمینه تکنولوژی‌های پیشرفته و مهارت‌های آینده‌نگر تبدیل شویم. در آینده، ما قصد داریم دامنه محتوای خود را به سمت دوره‌های مختلفی از جمله هنر، ترید و معماری گسترش دهیم و با بهره‌گیری از فناوری‌های نوین و مبتکرانه، تجربه یادگیری را برای کاربران بهینه‌تر و جذاب‌تر کنیم. هدف ما این است که یک پلتفرم هوشمند و کاربرمحور ایجاد کنیم که دسترسی به دانش و مهارت‌های جهانی را برای تمامی علاقه‌مندان تسهیل کند و به آن‌ها امکان یادگیری راحت‌تر و سریع‌تر را بدهد. ما متعهد به ایجاد یک جامعه آموزشی پویا هستیم که در آن کاربران بتوانند به راحتی تجربیات خود را به اشتراک بگذارند و از یکدیگر بیاموزند.
                        </p>



                    </div>
                </div>

                <div className="w-[17rem] order-1 md2:order-2">
                    <Image priority={true}
                        width={1000} height={1000} alt="virtual learn hero" src={"https://buckettest.storage.c2.liara.space/images/future.svg"} />
                </div>

            </div>
        </div>

    );
};


export {
    Description1,
    Description2,
    Description3
}