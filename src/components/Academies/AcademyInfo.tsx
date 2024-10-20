'use client'
import Image from "next/image";
import { title } from "../primitives";
import { clsx } from "clsx";
import { Avatar } from "@nextui-org/avatar";


type Props = {
    data: {
        faName: string,
        engName: string,
        description: string,
        avatar: {
            imageUrl: string,
        }
        rates: number,
        totalStudents: number,
        totalTeachers: number,
        totalCourses: number,

    }
};


const AcademyInfo = ({ data }: Props) => {
    console.log(data)
    return (
        <div className="w-full flex flex-col">

            <div className="w-full pb-12 p-4 lg:p-8 bg-white dark:bg-slate-900 dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">

                <div className="w-full h-48 md:h-64 lg:h-[27rem] relative rounded-2xl ">
                    <Image className="w-full h-full -mt-24 md:-mt-32 lg:-mt-40 rounded-2xl object-cover object-center shadow-medium" priority={true}
                        width={1000} height={1000} alt="virtual learn hero" src={"https://buckettest.storage.c2.liara.space/images/academy19.png"} />

                    {/* <Avatar className="h-52 w-52 shadow-[0_0_15px_0_#44de77] absolute -bottom-1/2 -translate-y-1/2" size="lg" radius="sm" isBordered color="success" src={data.avatar.imageUrl} /> */}
                    {/* <Avatar className="h-52 w-52 shadow-[0_0_15px_0_#44de77] absolute right-8 -bottom-1/2 -translate-y-1/3 " size="lg" radius="lg" isBordered color="success" src={'https://buckettest.storage.c2.liara.space/images/udemy-logo.png'} /> */}
                </div>

                <div className="w-full mt-10 flex flex-col items-center lg:items-start lg:flex-row justify-between">

                    <div className="order-2 lg:order-1 mt-8 lg:mt-4 text-center lg:text-left" style={{ lineBreak: 'anywhere' }}>
                        <h1 className={clsx(title({ color: 'green' }), 'inline w-full text-left text-2xl md:text-4xl lg2:text-[2.5rem] xl:text-5xl !font-bold md:leading-[3.2rem] whitespace-nowrap')}>
                            {data.faName}

                        </h1>
                        <h2 className={clsx(title({ color: 'green' }), 'inline w-full text-left text-2xl md:text-4xl lg2:text-[2.5rem] xl:text-5xl !font-bold md:leading-[3.2rem] whitespace-nowrap')}>
                            {` (${data.engName}) `}

                        </h2>
                    </div>

                    <Avatar className="order-1 lg:order-2 min-h-28 min-w-28 md:min-h-36 md:min-w-36 lg:min-h-52 lg:min-w-52 -mt-20 md:-mt-28 lg:-mt-20 lg:me-6 shadow-[0_0_15px_0_#44de77] " size="lg" radius="lg" isBordered color="success" src={'https://buckettest.storage.c2.liara.space/images/udemy-logo.png'} />

                </div>

                <div className="w-full mt-10 lg:mt-14">
                    <p className={`w-full text-lg md:text-xl text-center lg:text-right font-light lg:font-normal leading-8 md:leading-10`}>
                        یودمی (Udemy) یکی از بزرگ‌ترین و شناخته‌شده‌ترین پلتفرم‌های آموزش آنلاین در جهان است که در سال ۲۰۱۰ توسط ارین بالوگلو و تیمی از کارآفرینان تأسیس شد. این پلتفرم با هدف فراهم کردن دسترسی به آموزش برای همه افراد از هر کجای دنیا و در هر زمینه‌ای راه‌اندازی شد. یودمی با ارائه دوره‌های متنوع در حوزه‌های مختلف، از تکنولوژی و برنامه‌نویسی گرفته تا هنر، موسیقی و تجارت، توانسته به سرعت به یکی از محبوب‌ترین منابع آموزشی آنلاین در سطح جهانی تبدیل شود.
                    </p>

                    <p className={`mt-4 w-full text-lg md:text-xl text-center lg:text-right font-light lg:font-normal leading-8 md:leading-10`}>
                        یکی از ویژگی‌های منحصر به فرد یودمی، گستردگی موضوعات و دوره‌های آموزشی است. کاربران این پلتفرم می‌توانند از بیش از ۲۰۰ هزار دوره آموزشی استفاده کنند که توسط اساتید متخصص و با تجربه از سراسر جهان تهیه شده است. این دوره‌ها شامل ویدئوهای آموزشی، آزمون‌ها، تمرینات عملی و گواهینامه‌های پایان دوره هستند که باعث می‌شود کاربران بتوانند به‌صورت کاملاً حرفه‌ای مهارت‌های جدید را یاد بگیرند و پیشرفت کنند.
                    </p>

                    <p className={`mt-4 w-full text-lg md:text-xl text-center lg:text-right font-light lg:font-normal leading-8 md:leading-10`}>
                        یودمی همواره بر بهبود کیفیت آموزش‌ها تأکید داشته و به‌روز‌رسانی مداوم دوره‌ها یکی از اولویت‌های اصلی این پلتفرم است. با استفاده از بازخوردهای کاربران و تجزیه و تحلیل نیازهای بازار، دوره‌های جدید به طور منظم به پلتفرم اضافه می‌شوند. این امر باعث شده است که یودمی به عنوان یک منبع آموزشی معتبر و پویا شناخته شود که با روندهای جدید تکنولوژی و مهارت‌های بازار کار همگام است.
                    </p>

                    <p className={`mt-4 w-full text-lg md:text-xl text-center lg:text-right font-light lg:font-normal leading-8 md:leading-10`}>
                        یکی دیگر از جنبه‌های مهم یودمی، دسترسی آسان به آموزش برای افراد در سراسر جهان است. این پلتفرم به افراد امکان می‌دهد تا بدون نیاز به حضور در کلاس‌های فیزیکی و با هزینه‌های مناسب، به دوره‌های آموزشی پیشرفته دسترسی داشته باشند. یودمی با تنوع زبانی بالا و ارائه دوره‌های متعدد به زبان‌های مختلف، از جمله انگلیسی، اسپانیایی، فرانسوی و حتی فارسی، توانسته جامعه بزرگی از یادگیرندگان را در سراسر دنیا جذب کند.
                    </p>

                    <p className={`mt-4 w-full text-lg md:text-xl text-center lg:text-right font-light lg:font-normal leading-8 md:leading-10`}>
                        در نهایت، یودمی به عنوان یک پلتفرم آموزش آنلاین، به افرادی که به دنبال یادگیری مهارت‌های جدید، ارتقاء دانش حرفه‌ای یا حتی تغییر مسیر شغلی خود هستند، کمک می‌کند. این پلتفرم با ارائه ابزارهای مختلف آموزشی و دوره‌های آنلاین متناسب با نیازهای مختلف افراد، نقشی حیاتی در بهبود دسترسی به آموزش و گسترش دانش در جهان ایفا کرده است.
                    </p>
                </div>

            </div>

            <div className="w-full mt-8 flex flex-col lg:flex-row items-start   gap-4">

                <div className="w-full h-full order-2 lg:order-1 flex-grow lg:w-2/3 xl:w-[70%] bg-white dark:bg-slate-900 dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl ">
g
                </div>

                <div className="w-full order-1 lg:order-2 lg:w-1/3 xl:w-[30%] p-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 bg-white dark:bg-slate-900 dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">
                    <div className="aspect-square bg-white dark:bg-slate-900 dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">

                    </div>
                    <div className="aspect-square bg-white dark:bg-slate-900 dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">

                    </div>
                    <div className="aspect-square bg-white dark:bg-slate-900 dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">

                    </div>
                    <div className="aspect-square bg-white dark:bg-slate-900 dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">

                    </div>
                </div>


            </div>



        </div>
    );
};

export default AcademyInfo;
