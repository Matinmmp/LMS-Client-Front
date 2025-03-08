

export default function ProfileLayout({ children, }: { children: React.ReactNode }) {

    return (

        <>
           <title>دوره‌های خریداری شده‌ی من</title>
           <meta name="robots" content="noindex, nofollow" />
         {children}
         </>

    )
}
