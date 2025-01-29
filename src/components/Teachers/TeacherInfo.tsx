import Image from "next/image";
import { title } from "../primitives";
import { clsx } from "clsx";
import { Avatar } from "@nextui-org/avatar";
import { SiHtmlacademy } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import { toPersianNumber } from "@/src/utils/functions";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Suspense } from 'react';
import { PiMaskSad } from "react-icons/pi";
import FavoritAcademyForTeacher, { FavoritAcademyForTeacherLoading } from "./FavoriteAcademies";
import FavoriteCoursesForTeacher from "./FavoriteCourses";



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
        totalAcademies: number,
        totalCourses: number,
    }
};

function generateTeacherDescription(teacherName: string, studentsCount: number, rating: number, coursesCount: number, academyCount: number) {
    let description = `مدرس ${teacherName} در پلتفرم «Virtual Learn» با ارائه‌ی محتوای آموزشی متنوع و به‌روز، یکی از انتخاب‌های محبوب میان دانشجویان فارسی‌زبان است. `;

    // توضیحات مربوط به تعداد دانشجویان
    if (studentsCount > 1000) {
        description += `این مدرس با بیش از ${studentsCount} دانشجو، یکی از پرطرفدارترین اساتید ما به شمار می‌رود و توانسته است توجه بسیاری از کاربران را به خود جلب کند. `;
    } else if (studentsCount > 500) {
        description += `با ${studentsCount} دانشجو، ${teacherName} جایگاه ویژه‌ای در میان کاربران ما پیدا کرده است. `;
    } else if (studentsCount > 100) {
        description += `مدرس ${teacherName} با ${studentsCount} دانشجو، به عنوان یکی از گزینه‌های معتبر برای یادگیری شناخته می‌شود. `;
    } else {
        description += `این مدرس با ${studentsCount} دانشجو، در حال جذب علاقه‌مندان به دوره‌های خود است. `;
    }

    // توضیحات مربوط به امتیاز مدرس
    if (rating >= 4.8) {
        description += `با امتیاز بالای ${rating} از ۵، ${teacherName} توانسته است رضایت بالایی از کاربران جلب کند و دوره‌های او از کیفیت بالایی برخوردار است. `;
    } else if (rating >= 4.5) {
        description += `امتیاز ${rating} از ۵ نشان‌دهنده‌ی کیفیت خوب دوره‌ها و رضایت کاربران از محتوای آموزشی ${teacherName} است. `;
    } else if (rating >= 4) {
        description += `با امتیاز ${rating} از ۵، ${teacherName} سطح قابل قبولی از کیفیت آموزشی را فراهم کرده است. `;
    } else {
        description += `با امتیاز ${rating} از ۵، ${teacherName} در تلاش است تا کیفیت دوره‌های خود را بهبود بخشد. `;
    }

    // توضیحات مربوط به تعداد دوره‌ها و آکادمی‌ها
    description += `${teacherName} با ${coursesCount} دوره‌ی آموزشی در پلتفرم «Virtual Learn» حضور دارد و در ${academyCount} آکادمی فعالیت داشته است. `;

    return description;
}


const TeacherInfo = ({ data }: Props) => {

    return (
        <div className="w-full flex flex-col">

            <div className="w-full pb-12 p-4 lg:p-8 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">

                <div className="w-full h-48 md:h-64 lg:h-[27rem] relative rounded-2xl ">
                    <Image className="w-full h-full -mt-24 md:-mt-32 lg:-mt-40 rounded-2xl object-cover object-center shadow-medium" priority={true}
                        width={1000} height={1000} alt="" src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}teacher2.png`} />
                </div>

                <div className="w-full mt-10 flex flex-col items-center lg:items-start lg:flex-row justify-between">

                    <div className="order-2 lg:order-1 mt-8 lg:mt-4 text-center lg:text-left" style={{ lineBreak: 'anywhere' }}>
                        <h1 className={clsx(title({ color: 'secondary' }), 'inline w-full text-left text-2xl md:text-4xl lg2:text-[2.5rem]  !font-bold md:leading-[3.2rem] whitespace-nowrap')}>
                            {data.faName}

                        </h1>
                        <h2 className={clsx(title({ color: 'secondary' }), 'inline w-full text-left text-2xl md:text-4xl lg2:text-[2.5rem]  !font-bold md:leading-[3.2rem] whitespace-nowrap')}>
                            {` (${data.engName}) `}

                        </h2>
                    </div>

                    <Avatar alt={`مدرس ${data.faName}, در ویرچوال لرن`} className="order-1 lg:order-2 min-h-28 min-w-28 md:min-h-36 md:min-w-36 lg:min-h-52 lg:min-w-52 -mt-20 md:-mt-28 lg:-mt-20 lg:me-6 shadow-[0_0_15px_0_#42C0F4] " size="lg" radius="full" isBordered color="secondary" src={data.avatar.imageUrl} />

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
                        <h2 className={clsx(title({ color: 'secondary' }), 'inline w-full lg:text-left text-xl lg:text-2xl xl:text-3xl font-bold leading-10')}>{data.faName} در ویرچوال لرن</h2>

                        <p className="mt-6 tracking-wide text-right text-sm md:text-base lg:text-lg  leading-8 ">
                            {toPersianNumber(generateTeacherDescription(data.engName, data.totalStudents, data.rating, data.totalCourses, data.totalAcademies))}
                        </p>

                    </div>
                </div>

                <div className="w-full order-1 lg:order-2 lg:w-[27rem] p-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">

                    <div className="aspect-square bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <SiHtmlacademy className="text-4xl text-secondary-400" />
                            <span className="mt-3 text-sm">تعداد آکادمی فعال:</span>
                            <span className="mt-0.5 font-bold">{toPersianNumber(data.totalAcademies)}</span>
                        </div>
                    </div>

                    <div className="aspect-square bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <PiStudentBold className="text-4xl text-secondary-400" />
                            <span className="mt-3 text-sm">تعداد دانشجوها:</span>
                            <span className="mt-0.5 font-bold">{toPersianNumber(data.totalStudents)}</span>
                        </div>
                    </div>

                    <div className="aspect-square bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <MdOutlineCastForEducation className="text-4xl text-secondary-400" />
                            <span className="mt-3 text-sm">تعداد دوره‌ها:</span>
                            <span className="mt-0.5 font-bold">{toPersianNumber(data.totalCourses)}</span>
                        </div>
                    </div>

                    <div className="aspect-square bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-xl">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <FaStar className="text-4xl text-secondary-400" />
                            <span className="mt-3 text-sm">امتیاز</span>
                            <span className="mt-0.5 font-bold">{toPersianNumber(data.rating)}</span>
                        </div>
                    </div>

                </div>

            </div>

            <div className="mt-6 lg:mt-8">
                <div className="p-4 pt-6 pb-2 lg:pb-8 lg:p-8 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl ">
                    {data.totalAcademies ?
                        <Suspense fallback={
                            <FavoritAcademyForTeacherLoading name={data.engName} totalTeachers={data.totalAcademies}>
                                <h3 className={clsx(title({ color: 'green' }), "text-lg md:text-xl lg:text-2xl")}>آکادمی‌هایی که {data.engName} هست</h3>
                            </FavoritAcademyForTeacherLoading>}>

                            <FavoritAcademyForTeacher name={data.engName} totalTeachers={data.totalAcademies}>
                                <h3 className={clsx(title({ color: 'green' }), "text-lg md:text-xl lg:text-2xl")}>آکادمی‌هایی که {data.engName} هست</h3>
                            </FavoritAcademyForTeacher>
                        </Suspense> :
                        <div className="py-10 text-center flex flex-col items-center gap-6">
                            <PiMaskSad className="text-success text-6xl md:text-7xl" />
                            <p className="text-lg font-semibold">در‌حال حاضر مدرسی برای آکادمیه ({data.engName}) اضافه نشده است.</p>
                        </div>
                    }
                </div>
            </div>

            <div className="mt-6 lg:mt-8">
                <div className="p-4 pb-2 lg:pb-8 lg:p-8 bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl ">
                    {data?.totalCourses ?
                        <FavoriteCoursesForTeacher name={data.engName} totalCourses={data.totalCourses}>
                            <h3 className={clsx(title({ color: 'blue' }), "text-lg md:text-xl lg:text-2xl xl:text-3xl")}>محبوب‌ترین دوره‌های {data.engName}</h3>
                        </FavoriteCoursesForTeacher>
                        :
                        <div className="py-10 text-center flex flex-col items-center gap-6">
                            <PiMaskSad className="text-secondary-400 text-6xl md:text-7xl" />
                            <p className="text-lg font-semibold">در‌حال حاضر دوره‌ای برای ({data.engName}) اضافه نشده است.</p>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default TeacherInfo;
