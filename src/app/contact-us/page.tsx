import { ContactUsForm } from "@/src/components/ContactUs/Form";
import Hero from "@/src/components/ContactUs/Hero";
 



export default function AboutPage() {
    return (
        <section className=" flex flex-col items-center justify-center  " >

            <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                 dark:bg-gradient-to-b dark:from-primary-50 dark:to-transparent dark:bg-opacity-10 backdrop-blur-md">

                <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 lg:mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-4 justify-center ">
                    <Hero />
                   
                    <div className="w-full mt-24  lg:mt-0">
                        <ContactUsForm />

                    </div>
                </div>



            </div>


        </section>
    );
}
