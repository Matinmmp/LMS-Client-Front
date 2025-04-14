'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { encodeTitle } from '@/src/utils/functions';

export default function MainSlider({ blogs }: { blogs: any }) {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]}
                className="mySwiper w-full px-2 h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] rounded-2xl lg:rounded-3xl">
                {
                    blogs?.length && blogs.map((blog: any, index: number) =>
                        <SwiperSlide key={index} className='w-full overflow-hidden relative rounded-2xl lg:rounded-3xl'>
                            <Link href={`blog/blogs/${blog?.slug}`}>
                                <Image src={blog?.thumbnail?.imageUrl} className='w-full h-full shadow-large' alt='aa' width={1000} height={600} />
                                <div className='z-50 absolute bottom-0 p-4 w-full flex items-center justify-start backdrop-blur-[1px] bg-[#ffffffb7]/ dark:bg-[#2020204d]'>
                                    <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white ps-1 md:ps-4 pb-4 lg:pb-6'>{blog?.title}</p>
                                </div>
                            </Link>
                        </SwiperSlide>

                    )
                }

            </Swiper>
        </>
    );
}

export function CourseSlider({ courses }: { courses: any }) {

    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 ">


            <Swiper pagination={true} modules={[Pagination]}
                className="mySwiper w-full lg:w-2/3 px-2 h-[20rem] md:h-[20rem] lg:h-[25rem] rounded-2xl  shadow-medium">
                {
                    courses?.map((course: any, index: number) => {
                        const link = encodeTitle(course?.urlName);

                        return (
                            <SwiperSlide key={index} className='w-full overflow-hidden relative rounded-2xl '>
                                <Link  href={`/courses/${link}`}>
                                    <Image
                                        alt={`${course?.teacher?.teacherEngName}، مدرس دوره ${course?.name} در ویرچوال لرن`} src={course?.thumbnail?.imageUrl}
                                        className='w-full h-full shadow-large' width={1000} height={600} />
                                    <div className='z-50 absolute bottom-0 p-4 w-full flex items-center justify-start backdrop-blur-[1px] bg-[#ffffffb7]/ dark:bg-[#2020204d]'>
                                        <h6  className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white ps-1 md:ps-4 pb-4 lg:pb-6'>{course?.faName}</h6>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    }

                    )
                }

            </Swiper>

            <div className="w-full h-full max-h-[25rem] overflow-auto lg:w-1/3 rounded-2xl shadow-medium bg-white dark:bg-black/20">
                <div className="h-full p-3 flex flex-col gap-1">
                    {
                        courses?.map((course: any, index: number) => {
                            const link = encodeTitle(course?.urlName);

                            return (
                                <Link key={index} href={`/courses/${link}`} className="p-3 flex items-center gap-4 hover:shadow-medium cursor-pointer rounded-xl transition-all">
                                    <Image className="w-28 aspect-video rounded-md shadow-small" width={200} height={140}
                                        alt={''} src={course?.thumbnail?.imageUrl} />
                                    <h6 className="text-lg font-medium" >{course?.faName}</h6>
                                </Link>
                            )
                        }

                        )
                    }


                </div>
            </div>
        </div>
    );
}