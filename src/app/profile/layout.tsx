
import Navbar from "@/src/components/ProfilePages/Navbar";

export default function ProfileLayout({ children, }: { children: React.ReactNode }) {

    return (
        <div className="-mt-32 pt-36 lg:pt-48 pb-12 lg:pb-20 w-full flex items-center justify-center 
                 dark:bg-gradient-to-b dark:from-primary-50 dark:to-transparent dark:bg-opacity-10 backdrop-blur-md">

            <section className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 mt-28 lg:mt-20  flex gap-4">
                <Navbar />

                <div className="w-full bg-white dark:bg-slate-900/ dark:bg-[#131d35] dark:opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl relative">
                    <div className="min-h-[70vh] lg:min-h-[50vh] h-full px-4 py-4">
                        {children}
                    </div>
                </div>
            </section>

        </div>
    );
}
