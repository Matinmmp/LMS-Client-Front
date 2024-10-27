'use client'
import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { ImBooks } from "react-icons/im";
import { Button } from "@nextui-org/button";
import { motion } from 'framer-motion';
import { IoIosArrowBack } from "react-icons/io";
import { navObject } from "@/src/config/site";
import { buildCategoryTree } from "@/src/utils/categorySorter";
import { Checkbox } from "@nextui-org/checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
    list: [any]
    academiesList: [string],
    teacherNames: [string]
};

const categories = buildCategoryTree(navObject.categoryObject.categoryList, null);
const academiesObject = navObject.academyObject;
const teacherObject = navObject.teacherObject;

const CoursesList = ({ list, academiesList, teacherNames }: Props) => {
    const searchParams = useSearchParams();
    const path = usePathname();
    const router = useRouter();


    const [selectedAcadmies, setSelectedAcadmies] = useState<string[]>( searchParams.getAll('academy')|| []);





    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(true);



    const [searchText, setSearchText] = useState('');
    const [inputDirection, setInputDirection] = useState('rtl');
    const [selectedOption, setSelectedOption] = useState('1');

    const selectOptions = [
        { key: '1', label: 'جدید‌ترین' },
        { key: '2', label: 'قدیمی‌ترین' },
        { key: '3', label: 'تمام شده' },
        { key: '4', label: 'درحال برگزاری' },
        { key: '5', label: 'محبوبترین' },
        { key: '6', label: 'پرفروش ترین' },
    ];

    const handleAcademySelect = (academyName: string) => {
        const academy: any = academiesList.find((item: any) => item.engName === academyName);

        if (!selectedAcadmies.includes(academy.engName))
            setSelectedAcadmies((selectedAcadmies) => [...selectedAcadmies, academyName])
        else
            setSelectedAcadmies((selectedAcadmies) => selectedAcadmies.filter((item: any) => item !== academyName));


    }

    useEffect(() => {
        const queryParams = new URLSearchParams(Array.from(searchParams.entries()))
        queryParams.delete('academy')
        selectedAcadmies.map((name) => queryParams.append('academy', name))
        router.push(`${path}?${queryParams.toString()}`);
    }, [selectedAcadmies])

 

    return (
        <section className="w-full pb-10 flex flex-col ">

            <div className="flex items-center flex-wrap md:flex-nowrap gap-4 py-6 px-4 shadow-medium rounded-lg 
                bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] ">
                <Input
                    // onChange={(e) => handleSearchChange(e.target.value)}
                    value={searchText} dir={inputDirection}
                    placeholder="نام دوره را وارد کنید" size="lg" radius="sm" variant="bordered" color="primary"
                />
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                    <Select size="lg" radius="sm" color="primary" variant="bordered" selectedKeys={selectedOption}
                        disableSelectorIconRotation className="text-base" onChange={(e) => setSelectedOption(e.target.value)} >
                        {selectOptions.map((option) => (
                            <SelectItem key={option.key} variant="bordered" color="primary">
                                {option.label}
                            </SelectItem>
                        ))}
                    </Select>

                </div>
            </div>

            <div className="mt-8 flex flex-col lg:flex-row">

                <div className="w-full flex flex-col gap-5 lg:w-4/12 xl:w-3/12">

                    <div className="w-full bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] shadow-medium rounded-lg">

                        <Acordian open={open1} title="فیلتر قیمت" setOpen={setOpen1} initialHeight={'auto'}>

                            <div className="w-full flex items-center">
                                <Button className="w-full rounded-md " variant="solid" color="secondary">همه</Button>
                                <Button className="w-full rounded-md " variant="solid" color="info">فقط نقدی</Button>
                            </div>
                            <div className="w-full flex items-center">
                                <Button className="w-full rounded-md " variant="solid" color="info">رایگان</Button>
                                <Button className="w-full rounded-md " variant="solid" color="info">تخفیف‌دار</Button>
                            </div>

                        </Acordian>

                    </div>

                    <div className="w-full bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] shadow-medium rounded-lg">

                        <Acordian open={open2} title="فیلتر آکادمی" setOpen={setOpen2} initialHeight={'auto'}>
                            <div className="w-full flex flex-col gap-3">
                                {academiesList.map((item: any, index) =>
                                    <Checkbox isSelected={selectedAcadmies.includes(item.engName)} onClick={() => handleAcademySelect(item.engName)}
                                        key={index} defaultSelected radius="sm" size="lg">
                                        {item.engName}
                                    </Checkbox>)}
                            </div>
                        </Acordian>

                    </div>

                    <div className="w-full bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] shadow-medium rounded-lg">
                        <Acordian open={open3} title="فیلتر مدرس" setOpen={setOpen3} initialHeight={0}>
                            <div className="w-full flex flex-col gap-3">
                                {teacherNames.map((item: any, index) => <Checkbox key={index} defaultSelected radius="sm" size="lg">{item.engName}</Checkbox>)}
                            </div>
                        </Acordian>
                    </div>

                    <div className="w-full bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] shadow-medium rounded-lg">
                        <Acordian open={open4} title="فیلتر دسته بندی" setOpen={setOpen4} initialHeight={'auto'}>
                            <div className="w-full flex flex-col gap-3">
                                {renderCategories(categories[0].subCategories,)}
                            </div>
                        </Acordian>
                    </div>
                </div>

                <div className="w-full lg:w-8/12 xl:w-9/12 mt-2 relative">

                    {list.length ? <div className="sticky top-[20vh] right-[70%] pt-16 -ms-10 lg:-ms-24 z-10 w-0 h-0">
                        <ImBooks className=" text-[12rem] md:text-[16rem] xl:text-[20rem] text-primary-400 dark:text-primary-400" />
                    </div> : ''}

                    {list.length ?
                        <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 justify-items-center gap-y-8 gap-x-8 relative z-20">

                        </div>
                        :

                        <div className='w-full mt-20'>
                            <p className="text-2xl font-semibold text-center">دوره‌ای پیدا نشد</p>
                        </div>

                    }

                </div>

            </div>


        </section >
    );
};

export default CoursesList



type Props1 = {
    open: boolean,
    children: React.ReactNode,
    setOpen: (open: boolean) => void,
    title: string,
    initialHeight: 0 | 'auto'
};

const Acordian = ({ open, children, title, initialHeight, setOpen }: Props1) => {
    return (
        <div className=" flex flex-col justify-center">

            <div onClick={() => setOpen(!open)}
                className={`flex items-center justify-between p-4 ${open ? "border-b-1 border-b-primary-50" : ""}  cursor-pointer`}>
                <p className="font-semibold">{title}</p>
                <IoIosArrowBack size={16} className={`${open ? '-rotate-90' : 'rotate-90'} transition-transform`} />
            </div>

            <motion.div
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ height: initialHeight }}
                animate={{ height: open ? 'auto' : 0 }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }} >
                <div className="mt-2 p-4">
                    {children}
                </div>
            </motion.div>

        </div>
    )
}

const renderCategories = (categories: any, level = 0) => {
    return categories.map((category: any) => (
        <div key={category._id} style={{ paddingRight: `${level * 20}px` }}>
            <Checkbox defaultSelected radius="sm" size="lg">
                {category.name}
            </Checkbox>
            {category.subCategories.length > 0 && renderCategories(category.subCategories, level + 1)}
        </div>
    ));
};

