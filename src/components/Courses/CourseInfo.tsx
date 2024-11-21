import { clsx } from "clsx";
import { title } from "../primitives";
import Image from "next/image";


type Props = {
    data: any
}

export default function CourseInfo({ data }: Props) {
    const course = data?.course;
    const teacher = data?.teacher;
    const academy = data?.academy

    console.log(course?.thumbnail?.imageUrl)
    return (
        <div className='w-full flex flex-col '>

            <div className="w-full flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col">
                        <h1 className='text-primary-400 font-semibold text-2xl md:text-3xl lg:text-4xl md:leading-[3.2rem]'>
                            {course?.name}
                        </h1>
                        <p className="mt-6 text-lg font-light dark:text-[#d0e0ef] text-gray-800 overflow-hidden text-ellipsis line-clamp-4 tracking-wider">
                            {course?.description}
                        </p>

                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <Image src={course?.thumbnail?.imageUrl} alt={course?.name} priority={true} width={1000} height={1000} className="aspect-video"/>
                </div>
            </div>

            <div className="w-full mt-56 flex flex-col lg:flex-row gap-4 ">


                <div className="w-full lg:w-[70%] flex flex-col gap-4 ">
                    <div className="w-full h-screen bg-white dark:bg-[#131d35] dark:opacity-85/ dark:backdrop-blur-md/ shadow-medium rounded-2xl">

                    </div>
                    <div className="w-full bg-white dark:bg-[#131d35] dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">
                        ffff
                    </div>
                </div>

                <div className="w-full min-w-72 lg:w-[30%] bg-white dark:bg-[#131d35] dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">
                    fff
                </div>

            </div>
        </div>
    )
}