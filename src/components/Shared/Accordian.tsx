import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";

const Accordion = ({ title = '', description = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full px-4   shadow-medium rounded-medium bg-white dark:bg-[#18181B]/ dark:bg-primary-50">
            <div className='w-full rounded-[0.625rem] '>
                <label onClick={() => setIsOpen(!isOpen)}
                    className={`transition-all py-4 flex min-h-[3.5625rem] w-full h-full items-center gap-[0.6rem] rounded-[0.625rem] cursor-pointer`}>

                    <IoIosArrowBack size={20} className={`${isOpen ? '-rotate-90' : 'rotate-0'} transition-transform`}/>

                    <h5 className='text-xl font-medium'>{title}</h5>
                </label>

                <motion.div
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    exit={{ height: 0 }}
                    style={{ overflow: 'hidden' }} >

                    <p className='p-4 pb-7 txt-lg font-medium text-start'>{description}</p>
                </motion.div>

            </div>

        </div >
    );
};

export const AccordionList = ({ accordions }: { accordions: { title: string, description: string }[] }) => {

    return (

        <div className='flex flex-col gap-2 mt-6'>
            {accordions.map((item, index) => <Accordion key={index} title={item?.title} description={item.description} />)}
        </div>

    )
}