'use client'
import { Edu } from '@/src/config/fonts'
import React, { useState, useRef, useEffect } from 'react'
import { Navbar } from '../Shared/navbar'
import { FaRegEye } from "react-icons/fa6";

type Props = {}

const HomeNavbar = (props: Props) => {

    const [open, setOpen] = useState(false);
    const searchRef = useRef<any>();

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);
    return (
        <>
            <div className='mt-2 flex justify-center px-4'>

                <div className='w-full flex flex-col items-center'>
                    <div className='w-full h-24 max-w-3xl rounded-t-[2rem] data-[menu-open=true]:border-none inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70' >
                        <div className='w-full h-full flex items-center justify-center'>
                            <p className={`${Edu.className} font-bold text-5xl md:text-[4rem] text-primary-400 neon-text-3d`}>
                                Virtual Learn
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full flex justify-center sticky top-0.5 z-50'>
                <Navbar />
            </div>

            <div className='flex justify-center px-4 sticky top-[4.6rem]  z-50'>

                <div className=' w-full max-w-3xl flex justify-center transition-all '>

                    <div ref={searchRef} onClick={() => setOpen(true)}
                        className={`h-14 ${open ? 'w-full px-4' : 'w-14 rounded-b-full '} rounded-b-[2rem] flex items-center justify-center
                         cursor-pointer transition-all data-[menu-open=true]:border-none inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70`}>

                        <div className={`h-11 ${open ? 'w-full ps-4 dark:border-primary-400' : 'w-11 dark:border-white'} 
                             t p-[2px] border-[3px] rounded-[5rem] transition-all  relative border-primary-400 dark:border-white`}>

                            <input className={`${open ? 'w-11/12' : 'w-0'} h-8 mt-[1px] bg-transparent absolute right-3`} />

                            <div className={`min-w-9 min-h-9 flex items-center justify-center
                                ${open ? ' left-[2px] dark:border-primary-400' : 'dark:border-white'} border-[3px] rounded-full
                                absolute left-[0.1rem] bottom-[0.08rem] border-primary-400 `}>

                                <FaRegEye size={16} className={open ? 'text-primary-400' : 'text-primary-400 dark:text-white'} />


                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default HomeNavbar