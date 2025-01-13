import AcademyInfo from "@/src/components/Academies/AcademyInfo";
import { getAcademyByName, getAllAcademyNames } from "@/src/lib/apis/academyApis";
import { decodeTitle, encodeTitle } from "@/src/utils/functions";
import Script from "next/script";


type Props = {
    params: { engName: string }
};

export async function generateStaticParams() {

    const academyNames: any = await getAllAcademyNames();


    return academyNames?.academiesName?.map((academy: { engName: string }) => ({
        engName: encodeURIComponent(encodeTitle(academy.engName)),
    })) || [];
}



export default async function Academy({ params: { engName } }: Props) {
    const name = await decodeURIComponent(engName);
    const data: any = await getAcademyByName(decodeTitle(name));

 
    if (data && data.success) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": data?.academy?.seoMeta?.title,
            "url": `https://www.vc-virtual-learn.com/academies/${name}`,
            "description": data?.academy?.seoMeta?.description,
            "image": "https://www.vc-virtual-learn.com/assets/academy-1-banner.png",//بعدا بذار
            "logo": "https://www.vc-virtual-learn.com/assets/academy-logo.png",//بعدا بذار
            "inLanguage": "fa",
            "isPartOf": {
                "@type": "WebSite",
                "name": "ویرچوال لرن",
                "url": "https://www.vc-virtual-learn.com"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": data?.academy?.rating,
                "reviewCount": data?.academy?.ratingNumber,
                "bestRating": "5",
            },
            "publisher": {
                "@type": "Organization",
                "name": "Virtual Learn",
                "url": "https://www.vc-virtual-learn.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.vc-virtual-learn.com/assets/logo.png", //پرش کن
                    "width": 512,
                    "height": 512
                }
            },

        }

        return (
            <section className=" flex flex-col items-center justify-center  " >

                <title>{data?.academy?.seoMeta?.title}</title>
                <meta name="description" content={data?.academy?.seoMeta?.description} />
                <meta name="keywords" content={data?.academy?.seoMeta?.keywords?.join(' ,')} />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="5 days" />

                <meta property="og:title" content={data?.academy?.seoMeta?.title} />
                <meta property="og:description" content={data?.academy?.seoMeta?.description} />
                <meta property="og:url" content={`https://www.vc-virtual-learn.com/academies/${name}`} />
                {/* بعدا عکسو بذار */}
                <meta property="og:image" content="https://www.vc-virtual-learn.com/assets/academies-banner.png" />

                <meta name="twitter:title" content={data?.academy?.seoMeta?.title} />
                <meta name="twitter:description" content={data?.academy?.seoMeta?.description} />

                {/* بعدا عکسو بذار */}
                <meta name="twitter:image" content="https://www.vc-virtual-learn.com/assets/academies-banner.png" />

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
