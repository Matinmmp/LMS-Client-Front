import { MdOutlineArticle } from "react-icons/md";
import { CoursePagination } from "./Blogs";
import { Problem } from "../Shared/Problem";
import { searchBlogs } from "@/src/lib/apis/blogApis";
import { BlogPost } from "./home/ServerComponents";
 

type Props = {
    object: any,
};

const BlogsList = async ({ object }: Props) => {
    const data: any = await searchBlogs(object);
   
    return (
        <>
            {data?.blogs?.length ?
                <div className="sticky top-[20vh] right-[70%] -ms-10 lg:-ms-24 z-10 w-0 h-0">
                    <MdOutlineArticle className=" text-[12rem] md:text-[16rem] xl:text-[20rem] text-primary-400 dark:text-primary-400" />
                </div> : ''}

            {
                data?.success ?
                    (data?.blogs?.length ?
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 relative z-20">
                            {data.blogs.map((blog: any, index: number) => <BlogPost key={index} blog={blog} />)}
                        </div>
                        :
                        <div className='w-full mt-20'>
                            <p className="text-xl md:text-2xl font-semibold text-center">بلاگ مورد نظر شما یافت نشد !</p>
                        </div>) :
                    <div className="mt-20">
                        <Problem />
                    </div>
            }
            {data?.success && <CoursePagination currentPage={data.currentPage} totalPage={data.totalPage} />}
        </>
    )
}

export default BlogsList;