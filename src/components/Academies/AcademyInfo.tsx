import Image from "next/image";
import { title } from "../primitives";
import { clsx } from "clsx";
import { Avatar } from "@nextui-org/avatar";
import { GiTeacher } from "react-icons/gi"
import { PiStudentBold } from "react-icons/pi";
import { toPersianNumber } from "@/src/utils/functions";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Suspense } from 'react';
import FavoriteCoursesForAcademy from "./FavoriteCourses";
import { PiMaskSad } from "react-icons/pi";
import FavoritTeachersForAcademy, { FavoritTeachersForAcademyLoading } from "./FavoriteTeacher";


type Props = {
    data: {
        faName: string,
        engName: string,
        description: string,
        longDescription: string,
        avatar: {
            imageUrl: string,
        }
        rating: number,
        totalStudents: number,
        totalTeachers: number,
        totalCourses: number,

    }
};

function generateAcademyDescription(academyName: string, studentsCount: number, rating: number, coursesCount: number, teachersCount: number) {
    let description = `آکادمی ${academyName} در پلتفرم «Virtual Learn» با ارائه‌ی دوره‌های متنوع و گسترده، به یکی از انتخاب‌های پرطرفدار میان دانشجویان فارسی‌زبان تبدیل شده است. `;

    // توضیحات مربوط به تعداد دانشجویان
    if (studentsCount > 1000) {
        description += `این آکادمی با بیش از ${studentsCount} دانشجو، از محبوب‌ترین مراکز آموزشی ما است و توجه کاربران را به خود جلب کرده است. `;
    } else if (studentsCount > 500) {
        description += `با ${studentsCount} دانشجو، این آکادمی توانسته است جایگاه ویژه‌ای در میان کاربران ما پیدا کند. `;
    } else if (studentsCount > 100) {
        description += `آکادمی ${academyName} با ${studentsCount} دانشجو به عنوان یکی از گزینه‌های معتبر برای یادگیری در پلتفرم ما شناخته می‌شود. `;
    } else {
        description += `این آکادمی با ${studentsCount} دانشجو، در حال جذب علاقه‌مندان به دوره‌های آموزشی است. `;
    }

    // توضیحات مربوط به امتیاز آکادمی
    if (rating >= 4.8) {
        description += `با امتیاز بالای ${rating} از ۵، آکادمی ${academyName} توانسته است رضایت فوق‌العاده‌ای از کاربران جلب کند و دوره‌های آن از کیفیت بالایی برخوردار است. `;
    } else if (rating >= 4.5) {
        description += `امتیاز ${rating} از ۵ نشان‌دهنده کیفیت خوب دوره‌ها و رضایت گسترده کاربران از محتوای آموزشی آکادمی ${academyName} است. `;
    } else if (rating >= 4) {
        description += `با امتیاز ${rating} از ۵، آکادمی ${academyName} سطح قابل قبولی از کیفیت آموزشی را برای کاربران فراهم کرده است. `;
    } else {
        description += `با امتیاز ${rating} از ۵، آکادمی ${academyName} در تلاش است تا کیفیت دوره‌های خود را بهبود بخشد. `;
    }

    // توضیحات مربوط به تعداد دوره‌ها و مدرسین
    description += `آکادمی ${academyName} با ${coursesCount} دوره‌ی آموزشی و ${teachersCount} مدرس در پلتفرم «Virtual Learn» حضور دارد و دوره‌های به‌روز و کاربردی را به علاقه‌مندان ارائه می‌کند. `;
    // description += `اطلاعات ارائه‌شده، مختص به فعالیت این آکادمی در پلتفرم ما است و نشان‌دهنده‌ی میزان فعالیت آن در سایت «Virtual Learn» می‌باشد.`;

    return description;
}


const AcademyInfo = ({ data }: Props) => {
    return (
        <div className="w-full flex flex-col">

            <div className="w-full pb-12 p-4 lg:p-8 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">

                <div className="w-full h-48 md:h-64 lg:h-[27rem] relative rounded-2xl ">
                    <Image className="w-full h-full -mt-24 md:-mt-32 lg:-mt-40 rounded-2xl object-cover object-center shadow-medium" priority={true}
                        width={1000} height={1000} alt="virtual learn hero" src={"https://buckettest.storage.c2.liara.space/images/academy19.png"} />
                </div>

                <div className="w-full mt-10 flex flex-col items-center lg:items-start lg:flex-row justify-between">

                    <div className="order-2 lg:order-1 mt-8 lg:mt-4 text-center lg:text-left" style={{ lineBreak: 'anywhere' }}>
                        <h1 className={clsx(title({ color: 'green' }), 'inline w-full text-left text-2xl md:text-4xl lg2:text-[2.5rem]  !font-bold md:leading-[3.2rem] whitespace-nowrap')}>
                            {data.faName}
                        </h1>
                        <h2 className={clsx(title({ color: 'green' }), 'inline w-full text-left text-2xl md:text-4xl lg2:text-[2.5rem]  !font-bold md:leading-[3.2rem] whitespace-nowrap')}>
                            {` (${data.engName}) `}

                        </h2>
                    </div>

                    <Avatar className="order-1 lg:order-2 min-h-28 min-w-28 md:min-h-36 md:min-w-36 lg:min-h-52 lg:min-w-52 -mt-20 md:-mt-28 lg:-mt-20 lg:me-6 shadow-[0_0_15px_0_#44de77] " size="lg" radius="lg" isBordered color="success" src={data.avatar.imageUrl} />

                </div>

                <div className="w-full mt-10 lg:mt-14">
                    <p className={`w-full tracking-wide text-sm md:text-base lg:text-lg text-right font-light lg:font-normal leading-8 md:leading-10`}>
                        {data.longDescription}
                    </p>
                </div>

            </div>

            <div className="w-full lg:h-[20rem] mt-6 lg:mt-8 flex flex-col lg:flex-row items-start gap-6 lg:gap-4">

                <div className="h-auto lg:min-h-[20rem] lg:w-full flex-grow order-2 lg:order-1 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl ">
                    <div className="p-4 pt-8 text-center">
                        <h2 className={clsx(title({ color: 'green' }), 'inline w-full lg:text-left text-xl lg:text-2xl xl:text-3xl font-bold leading-10')}>آکادمی {data.faName} در ویرچوال لرن</h2>

                        <p className="mt-6 tracking-wide text-right text-sm md:text-base lg:text-lg leading-8 ">
                            {toPersianNumber(generateAcademyDescription(data.engName, data.totalStudents, data.rating, data.totalCourses, data.totalTeachers))}
                        </p>

                    </div>
                </div>

                <div className="w-full order-1 lg:order-2 lg:w-[27rem] p-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">

                    <div className="aspect-square bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <GiTeacher className="text-4xl text-success-400" />
                            <span className="mt-3 text-sm">تعداد مدرسین:</span>
                            <span className="mt-0.5 font-bold">{toPersianNumber(data.totalTeachers)}</span>
                        </div>
                    </div>

                    <div className="aspect-square bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <PiStudentBold className="text-4xl text-success-400" />
                            <span className="mt-3 text-sm">تعداد دانشجوها:</span>
                            <span className="mt-0.5 font-bold">{toPersianNumber(data.totalStudents)}</span>
                        </div>
                    </div>

                    <div className="aspect-square bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <MdOutlineCastForEducation className="text-4xl text-success-400" />
                            <span className="mt-3 text-sm">تعداد دوره‌ها:</span>
                            <span className="mt-0.5 font-bold">{toPersianNumber(data.totalCourses)}</span>
                        </div>
                    </div>

                    <div className="aspect-square bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <FaStar className="text-4xl text-success-400" />
                            <span className="mt-3 text-sm">امتیاز</span>
                            <span className="mt-0.5 font-bold">{toPersianNumber(data.rating)}</span>
                        </div>
                    </div>

                </div>

            </div>

            <div className="mt-6 lg:mt-8">
                <div className="p-4 pt-6 pb-2 lg:pb-8 lg:p-8 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl ">
                    {data.totalTeachers ?
                        <Suspense fallback={
                            <FavoritTeachersForAcademyLoading name={data.engName} totalTeachers={data.totalTeachers}>
                                <h3 className={clsx(title({ color: 'secondary' }), "text-lg md:text-xl lg:text-2xl")}>محبوب‌ترین مدرس‌ها {data.engName}</h3>
                            </FavoritTeachersForAcademyLoading>}>

                            <FavoritTeachersForAcademy name={data.engName} totalTeachers={data.totalTeachers}>
                                <h3 className={clsx(title({ color: 'secondary' }), "text-lg md:text-xl lg:text-2xl")}>محبوب‌ترین مدرس‌ها {data.engName}</h3>
                            </FavoritTeachersForAcademy>
                        </Suspense> :
                        <div className="py-10 text-center flex flex-col items-center gap-6">
                            <PiMaskSad className="text-success text-6xl md:text-7xl" />
                            <p className="text-lg font-semibold">در‌حال حاضر مدرسی برای آکادمیه ({data.engName}) اضافه نشده است.</p>
                        </div>
                    }
                </div>
            </div>

            <div className="mt-6 lg:mt-8">
                <div className="py-4 pb-2 lg:py-8 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl ">
                    {data.totalCourses ?
                        <FavoriteCoursesForAcademy name={data.engName} totalCourses={data.totalCourses}>
                            <h3 className={clsx(title({ color: 'blue' }), "text-lg md:text-xl lg:text-2xl ")}>محبوب‌ترین دوره‌های {data.engName}</h3>
                        </FavoriteCoursesForAcademy>
                        :
                        <div className="py-10 text-center flex flex-col items-center gap-6">
                            <PiMaskSad className="text-success text-6xl md:text-7xl" />
                            <p className="text-lg font-semibold">در‌حال حاضر دوره‌ای برای آکادمیه ({data.engName}) اضافه نشده است.</p>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default AcademyInfo;
