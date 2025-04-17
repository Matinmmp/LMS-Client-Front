import BlogInfo from "@/src/components/blog/BlogInfo";
import { getAllBlogSlugs, getBlogBySlug, recordBlogView } from "@/src/lib/apis/blogApis";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateStaticParams() {

    const list: any = await getAllBlogSlugs()

    return list?.blogs?.map((blog: any) => ({
        blogName: blog?.slug,
    })) || [];

}

type Props = {
    params: { blogName: string }
};

export default async function BlogDetail({ params: { blogName } }: Props) {

    const data: any = await getBlogBySlug(blogName)


    if (data && data?.message === "بلاگ مورد نظر یافت نشد")
        notFound();

    if (data && data.success) {
        const blog = data?.blog;
        recordBlogView(data?.blog?._id)

        const schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.vc-virtual-learn.com/blog/blogs/${blogName}`
            },
            "name": `${blog?.seoMeta?.title ? blog?.seoMeta?.title : blog?.name}`,
            "headline": `${blog?.seoMeta?.title ? blog?.seoMeta?.title : blog?.name}`,
            "description": `${data?.courseData?.course?.seoMeta?.description}`,
            "image": blog?.thumbnail?.imageUrl,
            "author": {
                "@type": "Organization",
                "name": "Virtual Learn",
                "url": "https://www.vc-virtual-learn.com"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Virtual Learn",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png`,
                    "width": 512,
                    "height": 512
                }
            },
            "datePublished": `${blog?.createdAt}`,
            "inLanguage": "fa"
        }


        return (
            <>
                <section className=" flex flex-col items-center justify-center" >

                    <title>{blog?.seoMeta?.title ? blog?.seoMeta?.title : blog?.name}</title>
                    <meta name="description" content={blog?.seoMeta?.description} />
                    <meta name="keywords" content={blog?.seoMeta?.keywords} />
                    <meta name="robots" content="index, follow" />
                    <meta name="revisit-after" content="5 days" />

                    <meta property="og:title" content={blog?.seoMeta?.title ? blog?.seoMeta?.title : blog?.name} />
                    <meta property="og:description" content={blog?.seoMeta?.description} />
                    <meta property="og:url" content={`https://www.vc-virtual-learn.com/courses/${blogName}`} />
                    <meta property="og:image" content={blog?.thumbnail?.imageUrl} />


                    <meta name="twitter:title" content={blog?.seoMeta?.title ? blog?.seoMeta?.title : data?.blog?.name} />
                    <meta name="twitter:description" content={blog?.seoMeta?.description} />
                    <meta name="twitter:image" content={blog?.thumbnail?.imageUrl} />

                    <link rel="canonical" href={`https://www.vc-virtual-learn.com/courses/${blogName}`} />



                    <BlogInfo data={blog} />

                    <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

                </section>
                <div className="gap-10 relative"><span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" /></div>
            </>
        );

    }
}
