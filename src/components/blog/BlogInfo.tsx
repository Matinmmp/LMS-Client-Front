import Image from "next/image";
import { CategoriesSidebar } from "./home/Components";

export default async function BlogInfo({ blogName }: { blogName: string }) {

    return (
        <div className="w-full max-w-[1400px] px-4 md:px-8 2xl:px-2 flex items-center justify-center ">
            <div className="w-full flex flex-col gap-8">
                <div className="w-full">
                    <Image className="w-full rounded-2xl lg:rounded-3xl shadow-medium"
                        width={1000} height={700} alt="" src={'https://buckettest.storage.c2.liara.space/images/academy19.png'} />
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-[75%] rounded-xl shadow-large backdrop-blur-3xl bg-white dark:bg-transparent">
                        <div className="p-4 md:p-6 lg:p-8">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#3E4247] dark:text-white">آموزش تغییر فونت اینستاگرام</h1>
                             
                             {
                                `# Welcome to StackEdit!

                                Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.
                                
                                
                                # Files`
                             }
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