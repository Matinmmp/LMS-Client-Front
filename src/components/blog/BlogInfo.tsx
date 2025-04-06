import Image from "next/image";
import { CategoriesSidebar } from "./home/Components";
import { formatJalaliDate, secondsToMinutes, secondsToTimeString2, toPersianNumber } from "@/src/utils/functions";

export default async function BlogInfo({ data }: { data: any }) {

    return (
        <div className="w-full max-w-[1400px] px-4 md:px-8 2xl:px-2 flex items-center justify-center ">
            <div className="w-full flex flex-col gap-2 ">
                <div className="w-full">
                    <Image className="w-full rounded-2xl lg:rounded-3xl shadow-medium"
                        width={1000} height={700} alt="" src={data?.thumbnail?.imageUrl} />
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-6 py-10">
                    <div className="w-full lg:w-[75%] rounded-xl shadow-large backdrop-blur-3xl bg-white dark:bg-transparent">
                        <div className="p-4 md:p-6 lg:p-8">
                            <div className="flex itmes-center gap-6 text-[#3E4247] dark:text-white text-xs">
                                <span>{`${toPersianNumber(formatJalaliDate(data?.createdAt))}`}</span>
                                <span>{`زمان مطالعه ${toPersianNumber(secondsToMinutes(`60`))} دقیقه`}</span>

                            </div>

                            <h1 className="mt-10 text-xl md:text-2xl lg:text-3xl font-semibold text-[#3E4247] dark:text-white">
                                {data?.title}
                            </h1>

                            <div className="mt-10">
                                {
                                    data?.longDescription
                                }
                            </div>
                           
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