import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link'

export default function NotFound() {
    return (
        <section className=" flex flex-col items-center justify-center " >

            <title>خطای 404 | ویرچوال لرن</title>
            <meta name="robots" content="noindex, nofollow" />

            <div className="w-full max-w-lg sm2:max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">


          
                    <div className='mt-14 lg:mt-0 w-full flex flex-col items-center'>
                        <Image className="w-full md:max-w-[25rem] lg:max-w-[30rem] xl:max-w-[35rem]" alt="" width={800} height={800} src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + 'oops-404-error-with-a-broken-robot-animate.svg'} />
                        <p className="-mt-4 mb-5 md:mb-6 text-lg md:text-xl lg:text-2xl font-bold text-center">متاسفانه صفحه مورد نظر شما پیدا نشد.</p>
                        <Button className="lg:mt-6 min-w-60" size="lg" color="primary" variant="shadow" radius="sm" as={Link} href="/">بازگشت به صفحه‌ی اصلی</Button>
                    </div>
     

            </div>
        </section>
    );
}