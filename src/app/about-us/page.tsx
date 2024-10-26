import { Description1, Description2, Description3 } from "@/src/components/AboutUs/Descriptions";
import Hero from "@/src/components/AboutUs/Hero";
import FAQ from "@/src/components/HomePage/FAQ";
 


export default function AboutPage() {
    return (
        <section className=" flex flex-col items-center justify-center  " >

            <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                 dark:bg-gradient-to-b dark:from-primary-50 dark:to-transparent backdrop-blur-md">

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-24 lg:mt-10 flex flex-col items-center justify-center ">
                    <Hero />

                    <div className="mt-10  lg:mt-0">
                        <Description1 />
                    </div>

                    <div className="mt-24 lg:mt-48   ">
                        <Description2 />
                    </div>

                    <div className="mt-24 lg:mt-40   ">
                        <Description3 />
                    </div>

                    <div className="mt-24 lg:mt-40   ">
                        <FAQ/>
                    </div>
                </div>

            </div>


        </section>
    );
}
