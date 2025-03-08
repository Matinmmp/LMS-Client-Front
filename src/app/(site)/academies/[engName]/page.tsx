import AcademyInfo from "@/src/components/Academies/AcademyInfo";
import { getAcademyByName, getAllAcademyNames } from "@/src/lib/apis/academyApis";
import { decodeTitle, encodeTitle } from "@/src/utils/functions";
import { notFound } from "next/navigation";
import Script from "next/script";


type Props = {
    params: { engName: string }
};

// export async function generateStaticParams() {

//     const academyNames: any = await getAllAcademyNames();


//     return academyNames?.academiesName?.map((academy: { engName: string }) => ({
//         engName: encodeURIComponent(encodeTitle(academy.engName)),
//     })) || [];
// }



export default async function Academy({ params: { engName } }: Props) {
    const name = await decodeURIComponent(engName);
    const data: any = await getAcademyByName(decodeTitle(name));


    if (data && data?.message === 'Academy not found')
        notFound();

    if (data && data.success) {
        const schema:any = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": data?.academy?.seoMeta?.title,
            "url": `https://www.vc-virtual-learn.com/academies/${name}`,
            "description": data?.academy?.seoMeta?.description,
            "image": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}academy19.png`,//بعدا بذار
            "logo": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png`,//بعدا بذار
            "inLanguage": "fa",
            "isPartOf": {
                "@type": "WebSite",
                "name": "ویرچوال لرن",
                "url": "https://www.vc-virtual-learn.com"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Virtual Learn",
                "url": "https://www.vc-virtual-learn.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}logo-main.png`, //پرش کن
                    "width": 512,
                    "height": 512
                }
            },
        }

        if (data?.academy?.rating || data?.academy?.ratingNumber) {
            schema.aggregateRating = {
                "@type": "AggregateRating",
                "ratingValue": `${data?.academy?.rating}`,
                "reviewCount": `${data?.academy?.ratingNumber}`,
                "bestRating": "5",
            };
        }
 
        return (
            <section className=" flex flex-col items-center justify-center  " >

                <title>{data?.academy?.seoMeta?.title}</title>
                <meta name="description" content={data?.academy?.seoMeta?.description} />
                <meta name="keywords" content={data?.academy?.seoMeta?.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="5 days" />

                <meta property="og:title" content={data?.academy?.seoMeta?.title} />
                <meta property="og:description" content={data?.academy?.seoMeta?.description} />
                <meta property="og:url" content={`https://www.vc-virtual-learn.com/academies/${name}`} />
                {/* بعدا عکسو بذار */}
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}academy19.png`} />

                <meta name="twitter:title" content={data?.academy?.seoMeta?.title} />
                <meta name="twitter:description" content={data?.academy?.seoMeta?.description} />

                {/* بعدا عکسو بذار */}
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}academy19.png`} />

                <link rel="canonical" href={`https://www.vc-virtual-learn.com/academies/${name}`} />


                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-24 flex items-center justify-center ">
                    <div className="w-full mt-24 lg:mt-32">
                        <AcademyInfo data={data.academy} />
                    </div>
                </div>
                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            </section>
        );
    }
}
