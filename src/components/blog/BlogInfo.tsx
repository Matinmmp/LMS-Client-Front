import Image from "next/image";

import { formatJalaliDate, secondsToMinutes, toPersianNumber } from "@/src/utils/functions";
import { CategoriesSidebar } from "./home/ServerComponents";

export default async function BlogInfo({ data }: { data: any }) {

    return (
        <div className="w-full max-w-[1400px] md:px-8 2xl:px-2 flex items-center justify-center ">
            <div className="w-full flex flex-col gap-2 ">
                <div className="w-full px-2 md:px-0">
                    <Image className="w-full rounded-2xl lg:rounded-3xl shadow-medium"
                        width={1000} height={700} alt={data?.name} src={data?.thumbnail?.imageUrl} />
                </div>
                <div className="w-full px-2 md:px-0 flex flex-col lg:flex-row gap-6 py-10">
                    <div className="w-full lg:w-[75%] rounded-xl shadow-large backdrop-blur-3xl bg-white dark:bg-transparent">
                        <div className="p-4 px-3 md:p-6 lg:p-8">
                            <div className="flex itmes-center gap-6 text-[#3E4247] dark:text-white text-xs">
                                <span>{`${toPersianNumber(formatJalaliDate(data?.createdAt))}`}</span>
                                <span>{`زمان مطالعه ${toPersianNumber(secondsToMinutes(data?.readingTime))} دقیقه`}</span>

                            </div>
                            <div className="mt-10 " dangerouslySetInnerHTML={{ __html: data?.longDescription }}></div>
                           
                        </div>
                    </div>
                    <div className="w-full lg:w-[25%] ">
                        <CategoriesSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
} 