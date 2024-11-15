'use client'
import { useSelector } from "react-redux";
import { Skeleton } from "@nextui-org/skeleton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/src/utils/toast";
import { getFactor } from "@/src/lib/apis/userApis";
import { motion } from 'framer-motion';
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ProfilePage() {
    const { user, loading, error } = useSelector((state: any) => state.auth)
    const getFactorQuery: any = useQuery({ queryKey: ['getFactorQuery'], queryFn: getFactor });

    console.log(getFactorQuery?.data?.invoices);

    return (
        <div className="h-full w-full flex flex-col">
            {
                error ?
                    <div className="h-full w-full flex items-center justify-center">
                        <p className="text-center text-xl font-semibold text-red-500">مشکلی پیش آمده است, بعدا دوباره تلاش کنید.</p>
                    </div>
                    :
                    <>
                        <div className="mt-2">
                            <h1 className="text-lg font-semibold">فاکتور‌ها</h1>
                        </div>

                        {
                            !getFactorQuery.isLoading && getFactorQuery?.data && Array.isArray(getFactorQuery?.data?.invoices) &&


                            <div className="w-full mt-16 lg:mt-28">

                                <div className="w-full shadow-small rounded-lg">
                                <div className="py-2 px-2 border-b-1 border-b-primary-50"><p>dd</p> </div>

                                    <AccordionList accordions={[...getFactorQuery?.data?.invoices,...getFactorQuery?.data?.invoices,...getFactorQuery?.data?.invoices,...getFactorQuery?.data?.invoices]} />
                                </div>
                            </div>
                        }
                    </>
            }
        </div >
    );
}


const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    return (
        <div className="w-full px-4">
            <div className='w-full rounded-[0.625rem] '>
                <label onClick={() => setIsOpen(!isOpen)}
                    className={`transition-all py-4 flex min-h-[3.5625rem] w-full h-full items-center gap-[0.6rem]  rounded-[0.625rem] cursor-pointer`}>

                    <IoIosArrowBack size={20} className={`${isOpen ? '-rotate-90' : 'rotate-0'} transition-transform`} />

                    <h5 className='text-lg md:text-xl font-semibold text-right'>lhiluil</h5>

                </label>

                <motion.div
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    exit={{ height: 0 }}
                    style={{ overflow: 'hidden' }} >

                    <p className='p-2 pb-7 txt-lg font-medium text-start leading-7 tracking-[0.03rem]'>asdfadf</p>
                </motion.div>

            </div>

        </div >
    );
};

const AccordionList = ({ accordions }: { accordions: any[] }) => {
    return (

        <div className='flex flex-col gap-2 mt-6'>
            {accordions.map((item, index) => <Accordion key={index} />)}
        </div>

    )
}

const ItemSkeleton = () => {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-20 h-6 rounded-sm" />
            <Skeleton className="w-full h-10 rounded-md" />
        </div>
    )
}
