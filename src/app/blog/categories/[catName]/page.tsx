
import { CourseSlider } from '@/src/components/blog/home/MainSlider';
import { BlogPost, CategoriesSidebar } from '@/src/components/blog/home/ServerComponents';
import {getBlogsByCategory } from '@/src/lib/apis/blogApis';
import { getHomeLastCourses } from '@/src/lib/apis/homeApis';
import Script from 'next/script';






export default async function CategoriesPage(s: any) {


    let data1: any
    let data2: any

    [data1, data2] = await Promise.allSettled([
        getHomeLastCourses(),
        getBlogsByCategory({ slug: s?.params?.catName }),
    ]);

    let schema: any
    if (data2?.value) {
        schema = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `مقالات ${data2.value.name} | بلاگ Virtual Learn`,
            "url": `https://vc-virtual-learn.com/blog/categories/${s?.params?.catName}`,
            "description": `جدیدترین مقالات ${data2.value.name} در بلاگ Virtual Learn. بهترین مقالات آموزشی درباره ${data2.value.name}، معرفی تکنولوژی‌ها و بررسی تخصصی موضوعات مرتبط.`,
            "keywords": `${data2.value.name}, مقالات ${data2.value.name}, بلاگ ${data2.value.name}, آموزش ${data2.value.name}`,
            "inLanguage": "fa",
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "بلاگ",
                        "item": "https://vc-virtual-learn.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": data2.value.name,
                        "item": `https://vc-virtual-learn.com/blog/categories/${s?.params?.catName}`
                    }
                ]
            },
            "hasPart": {
                "@type": "ItemList",
                "name": `مقالات مرتبط با ${data2.value.name}`,
                "itemListElement": data2.value.blogs?.map((blog: any) => {
                    return {
                        "@type": "ListItem",
                        "position": 1, // You should increment this for each item
                        "name": blog.name,
                        "item": `https://vc-virtual-learn.com/blog/${blog.slug}` // Replace with actual slug property
                    }
                }) || []
            }
        };
    }

 
    if (data2?.value?.success)
        return (

            <section className="w-full flex flex-col items-center justify-center  " >
        
                <title>{`مقالات ${data2.value.name} | بلاگ Virtual Learn`}</title>
                <meta name="description" content={`جدیدترین مقالات ${data2.value.name} در بلاگ Virtual Learn. بهترین مقالات آموزشی درباره ${data2.value.name}، معرفی تکنولوژی‌ها و بررسی تخصصی موضوعات مرتبط.`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={`${data2.value.name}, مقالات ${data2.value.name}, بلاگ ${data2.value.name}, آموزش ${data2.value.name}`} />

                <meta property="og:title" content={`مقالات ${data2.value.name} | بلاگ Virtual Learn`} />
                <meta property="og:description" content={`جدیدترین مقالات ${data2.value.name}، بررسی تخصصی و آموزش‌های مفید در بلاگ Virtual Learn.`} />
                <meta property="og:url" content={`https://vc-virtual-learn.com/blog/categories/${s?.params?.catName}`} />
                <meta property="og:image" content={`https://vc-virtual-learn.com/images/${''}`} />

                <meta name="twitter:title" content="مقالات {categoryName} | بلاگ Virtual Learn" />
                <meta name="twitter:description" content="جدیدترین مقالات {categoryName}، بررسی تخصصی و آموزش‌های مفید در بلاگ Virtual Learn." />
                <meta name="twitter:image" content="https://vc-virtual-learn.com/images/blog-category-{categorySlug}.png" />

    

                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

                <div className=' w-full max-w-[1400px] px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center'>
                    <div className='mt-8 w-full max-w-[1380px] px-4 md:px-8 2xl:px-2 items-center justify-center '>
                        {data1?.value?.courses && <CourseSlider courses={data1?.value?.courses} />}
                    </div>
                    <div className="mt-36 w-full flex flex-col lg:flex-row gap-4">
                        <div className='w-full lg:w-[70%] border-1 border-secondary-500 bg-white dark:bg-black/5 backdrop-blur-sm rounded-2xl shadow-medium'>

                            <div className='p-4 lg:p-8'>
                                {data2?.value?.name ? <h1 className='text-xl lg:text-2xl xl:text-3xl font-medium'>{data2?.value?.name}</h1> : ''}

                                <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
                                    {
                                        data2?.value?.blogs?.map((blog: any, index: number) => <BlogPost blog={blog} key={index} />)
                                    }


                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[30%]'>
                            <CategoriesSidebar />
                        </div>


                    </div>
                </div>

                <div className="gap-10 relative"><span className=" dark:bg-[rgba(21,130,255,0.10)] absolute  right-1 w-10 h-10 background -z-30" /></div>

            </section>

        )

}