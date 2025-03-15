'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function MainSlider() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} 
                className="mySwiper w-full px-2 h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] rounded-2xl lg:rounded-3xl">
                <SwiperSlide className='w-full overflow-hidden relative rounded-2xl lg:rounded-3xl'>
                    <Image src={'https://buckettest.storage.c2.liara.space/images/academy19.png'} className='w-full h-full shadow-large' alt='aa' width={1000} height={600} />
                    <div className='z-50 absolute bottom-0 p-4 w-full flex items-center justify-start backdrop-blur-[1px] bg-[#ffffffb7]/ dark:bg-[#2020204d]'>
                        <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white ps-1 md:ps-4 pb-4 lg:pb-6'>برنامه‌نویسی چیست و از کجا شروع کنیم؟</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full overflow-hidden relative rounded-2xl lg:rounded-3xl'>
                    <Image src={'https://buckettest.storage.c2.liara.space/images/academy19.png'} className='w-full h-full shadow-large' alt='aa' width={1000} height={600} />
                    <div className='z-50 absolute bottom-0 p-4 w-full flex items-center justify-start backdrop-blur-[1px] bg-[#ffffffb7]/ dark:bg-[#2020204d]'>
                        <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white ps-1 md:ps-4 pb-4 lg:pb-6'>برنامه‌نویسی چیست و از کجا شروع کنیم؟</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
