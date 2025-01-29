'use client'
import { title } from "../primitives";
import { clsx } from "clsx";
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Avatar, AvatarIcon } from "@nextui-org/avatar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




type Props = {
};


const list = [
    {
        name: 'علی رضایی',
        comment: 'دوره‌های این سایت واقعاً عالیه! با اینکه زبان انگلیسیم ضعیفه، ولی ترجمه‌های دقیق و روان دوره‌ها خیلی به من کمک کرد تا مفاهیم رو بهتر درک کنم.',
    },
    {
        name: 'مهسا کریمی',
        comment: 'از وقتی با Virtual Learn آشنا شدم، تونستم مهارت‌های برنامه‌نویسیم رو خیلی سریع ارتقا بدم و حالا اعتماد به نفس بیشتری در کدنویسی دارم. ممنون از تیم فوق‌العاده‌تون!',
    },
    {
        name: 'امیرحسین عباسی',
        comment: 'آموزش‌های این سایت از آکادمی‌های معتبر دنیا هستن و این فوق‌العادست. به همه توصیه می‌کنم این سایت رو امتحان کنند، چون واقعاً ارزشش رو داره.',
    },
    {
        name: 'سارا احمدی',
        comment: 'خیلی خوشحالم که این سایت رو پیدا کردم. به خصوص برای کسانی که می‌خوان برنامه‌نویسی رو از صفر شروع کنن، واقعاً عالیه و آموزش‌ها بسیار کاربردی هستن.',
    },
    {
        name: 'محمد امینی',
        comment: 'ترجمه‌های دوره‌ها خیلی دقیق و روان هستند و باعث میشه یادگیری لذت‌بخش و مؤثر باشه. بهترین مرجع برای یادگیری برنامه‌نویسی به زبان فارسی و پیشرفت در مهارت‌ها.',
    },
    {
        name: 'نرگس شفیعی',
        comment: 'من همیشه دنبال دوره‌های معتبر برنامه‌نویسی بودم، ولی به دلیل مشکل زبان نمی‌تونستم استفاده کنم. Virtual Learn این مشکل رو برام حل کرد و حالا می‌تونم با خیال راحت یاد بگیرم.',
    },
    {
        name: 'پژمان صادقی',
        comment: 'دوره‌های تخصصی این سایت واقعاً به روز و حرفه‌ای هستند. از تیم پشتیبانی هم بسیار راضی‌ام، چون سریع و با دقت مشکلات رو پیگیری می‌کنن.',
    },
    {
        name: 'زهرا ملکی',
        comment: 'Virtual Learn به من کمک کرد که بتونم به صورت خودآموز برنامه‌نویسی یاد بگیرم و الان توی کارم موفق‌تر و مسلط‌تر باشم. این سایت رو به همه دوستانم پیشنهاد کردم.',
    },
    {
        name: 'شهرام نادری',
        comment: 'اگر دنبال آموزش برنامه‌نویسی هستید و به زبان انگلیسی مسلط نیستید، این سایت بهترین انتخابه! آموزش‌ها دقیق، جامع و با کیفیت ارائه می‌شن و کاملاً قابل درک هستند.',
    },
    {
        name: 'فاطمه رستمی',
        comment: 'ترجمه‌های فوق‌العاده دقیق و محتوای آموزشی به روز، Virtual Learn رو به یکی از بهترین منابع یادگیری برای فارسی‌زبانان تبدیل کرده. واقعاً ازش راضی‌ام.',
    },
    {
        name: 'احمد سلیمانی',
        comment: 'دوره‌های موجود در این سایت به قدری با کیفیت هستند که انگار دارید به زبان اصلی از بهترین منابع دنیا استفاده می‌کنید. مطمئناً این سایت یکی از بهترین‌هاست.',
    }
];



const Comments = (props: Props) => {
    const myStyles = {
        itemShapes: RoundedStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }


    return (
        <div className="w-full  relative">

            <div className="pb-10 flex flex-col">
                <div className="w-full ">
                    <div className="w-full mt-4 text-center ">
                        <h3 className={clsx(title({ color: 'blue' }), 'inline w-full text-center text-[1.5rem] md:text-[2.5rem] !font-extrabold md:leading-[3.2rem]')}>
                            نظرات درباره‌ی <strong className="!font-extrabold">ویرچوال لرن</strong>
                        </h3>

                        <div className="mt-6 md:mt-12">
                            <Swiper slidesPerView={'auto'} spaceBetween={0} className="mySwiper w-full"   >
                                {
                                    list.map((item, index) =>
                                        <SwiperSlide key={index} className='flex justify-center items-center max-w-96 min-h-64 max-h-64'>
                                            <div className="py-5 px-2">
                                                <div className=" p-4 bg-white dark:bg-primary-50/90 shadow-medium rounded-xl max-w-96 min-h-56 max-h-56 transition-all">
                                                    <div className="w-full flex items-center gap-4">
                                                        <Avatar alt="" className="h-16 w-16 shadow-medium" size="lg" radius="full" isBordered color="secondary" icon={<AvatarIcon />} />
                                                        <div className="flex flex-col items-start gap-1">
                                                            <p className="text-lg font-semibold">{item.name}</p>
                                                            <Rating readOnly value={5} style={{ maxWidth: 100 }} itemStyles={myStyles} />
                                                        </div>

                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="font-medium text-start">{item.comment}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper >

                        </div>

                    </div>
                </div>

            </div>

        </div >
    );
};

export default Comments;
