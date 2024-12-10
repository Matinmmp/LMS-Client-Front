'use client'

import { encodeToShortCode } from "@/src/utils/functions"
import { FaRegCopy } from "react-icons/fa6"
import { motion } from 'framer-motion';
import React, {useState } from "react";
import { TbFileDescription } from "react-icons/tb";
import { Button } from "@nextui-org/button";
import { SlEye } from "react-icons/sl";
import { IoIosSchool } from "react-icons/io";

export function ShortLink({ name }: { name: string }) {
    const copy = () => navigator.clipboard.writeText(`virtual-learn.com/?r=${encodeToShortCode(name)}`);

    return (
        <div className="w-full bg-white dark:bg-[#131d35] dark:bg-opacity-85 dark:backdrop-blur-md shadow-medium rounded-2xl">
            <div className="w-full px-4 py-6 flex flex-col items-center">
                <p className="text-lg font-semibold text-center">لینک کوتاه آموزش</p>


                <div className="mt-4 flex flex-grow flex-row w-full py-3 px-4 gap-x-1 rounded-medium items-start bg-primary-500/20">
                    <div onClick={copy}
                        className="flex justify-center items-center w-9 h-9 rounded-full bg-primary-500 shadow-small cursor-pointer">
                        <FaRegCopy className="text-white" />
                    </div>
                    <div className="h-full flex-grow min-h-10 ms-2 flex flex-col box-border items-start text-inherit justify-center">
                        <div dir="ltr" className=" w-full font-medium block text-inherit leading-5">
                            {`virtual-learn.com/?r=${encodeToShortCode(name)}`}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export function Description({ desc }: { desc: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300, duration: 600 }}
                initial={{ height: 1400 }}
                animate={{ height: open ? 'auto' : 1400 }}
                className="p-6 overflow-hidden"
                exit={{ height: 1400 }}
                style={{ overflow: 'hidden' }}
            >
                <div className="flex items-center gap-2 text-primary-400 dark:text-white">
                    <TbFileDescription size={40} />
                    <p className="text-2xl font-bold">توضیحات دوره</p>
                </div>

                <div className="mt-6 pb-20" dangerouslySetInnerHTML={{ __html: desc }}></div>
            </motion.div>

            {!open && (
                <div
                    className="w-full h-44 flex justify-center items-end bg-gradient-to-b
                        from-transparent from-10% to-55% to-white dark:to-[#131E34] backdrop-blur-[1px] absolute bottom-0 rounded-b-2xl"
                >
                    <Button
                        onClick={() => setOpen(!open)}
                        endContent={<SlEye size={22} />}
                        variant="ghost"
                        color="secondary"
                        size="lg"
                        className="mb-5 font-semibold"
                    >
                        ادامه مطلب
                    </Button>
                </div>
            )}
        </div>
    );
}

