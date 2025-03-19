import { BlogPost, CategoriesSidebar } from '@/src/components/blog/home/Components';

export default function CategoriesPage(s: any) {
    console.log(s?.params?.catName);
    return (
        <section className="w-full flex flex-col items-center justify-center  " >

            <div className='mt-36 w-full max-w-[1400px] px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center'>
                <div className="w-full flex flex-col lg:flex-row gap-4">
                    <div className='w-full lg:w-[70%] border-1 border-secondary-500 bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl shadow-medium'>

                        <div className='p-4 lg:p-8'>
                            <h1 className='text-xl lg:text-2xl xl:text-3xl font-medium'>برنامه نویسی</h1>

                            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
                                <BlogPost/>
                                <BlogPost/>
                                <BlogPost/>
                                <BlogPost/>
                                <BlogPost/>

                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[30%]'>
                        <CategoriesSidebar />
                    </div>


                </div>
            </div>


        </section>
    )

}