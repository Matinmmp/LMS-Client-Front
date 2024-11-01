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
import { IoSearch } from "react-icons/io5";
import { CourseCard } from "../Shared/CourseCard";
import { Pagination } from "@nextui-org/pagination";

type Props = {
    list: [any]
    currentPage: number,
    totalPage: number
};

const categories = buildCategoryTree(navObject.categoryObject.categoryList, null);
const academiesObject = navObject.academyObject;
const teacherObject = navObject.teacherObject;

const CoursesList = ({ list, totalPage, currentPage }: Props) => {
    const teachersList = teacherObject.teacherList.map(item=> {return{engName:item.engName}} );
    const academiesList = academiesObject.academyList.map(item=> {return{engName:item.engName}} );
    
    console.log(academiesList);

    const searchParams = useSearchParams();
    const path = usePathname();
    const router = useRouter();

    const queryParams = new URLSearchParams(Array.from(searchParams.entries()))

    let priceT = searchParams.get('price') || '1';
    if (!["1", "2", "3", "4"].includes(priceT)) priceT = "1";

    let order = searchParams.get('order') || '1'
    if (!["1", "2", "3", "4", "5", "6"].includes(order)) order = "1";

    // const [page, setPage] = useState<number>(currentPage);
    const [selectedPrice, setSelectedPrice] = useState<string>(priceT);
    const [selectedAcadmies, setSelectedAcadmies] = useState<string[]>(searchParams.getAll('academy') || []);
    const [selectedTeachers, setSelectedTeachers] = useState<string[]>(searchParams.getAll('teacher') || []);
    const [selectedCategories, setSelectedCategories] = useState<string[]>(searchParams.getAll('category') || []);




    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(true);


    const [searchText, setSearchText] = useState(searchParams.get('searchText') || '');
    const [selectedOption, setSelectedOption] = useState(order);

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

    const handleTeacherSelect = (teacherName: string) => {
        const teacher: any = teachersList.find((item: any) => item.engName === teacherName);

        if (!selectedTeachers.includes(teacher.engName))
            setSelectedTeachers((selectedTeachers) => [...selectedTeachers, teacherName])
        else
            setSelectedTeachers((selectedTeachers) => selectedTeachers.filter((item: any) => item !== teacherName));

    }

    const handlePriceSelect = (priceType: string) => {
        setSelectedPrice(priceType)
        queryParams.delete('price')
        queryParams.delete('page');
        queryParams.append('price', priceType)
        router.push(`${path}?${queryParams.toString()}`);
    }

    const handleCategorySelect = (categoryName: string) => {
        const category: any = navObject.categoryObject.categoryList.find((item: any) => item.name === categoryName);

        if (!selectedCategories.includes(category.name))
            setSelectedCategories((selectedCategories) => [...selectedCategories, categoryName])

        else
            setSelectedCategories((selectedCategories) => selectedCategories.filter((item: any) => item !== categoryName));
    }

    const handleOptionSelect = (optionKey: string) => {
        setSelectedOption(optionKey)
        queryParams.set('order', optionKey)
        queryParams.delete('page');
        router.push(`${path}?${queryParams.toString()}`);
    }

    const handleSearch = () => {
        if (searchText.trim() === '') {
            queryParams.delete('searchText')
            queryParams.delete('page');
            router.push(`${path}?${queryParams.toString()}`);

            return
        }
        queryParams.delete('searchText')
        queryParams.delete('page');
        queryParams.append('searchText', searchText)
        router.push(`${path}?${queryParams.toString()}`);
    }

    const handlePageChange = (page: number) => {
        queryParams.delete('page');
        queryParams.append('page', page.toString())
        router.push(`${path}?${queryParams.toString()}`);
    }

    useEffect(() => {
        queryParams.delete('academy')
        queryParams.delete('page');
        selectedAcadmies.map((name) => queryParams.append('academy', name))
        router.push(`${path}?${queryParams.toString()}`);
    }, [selectedAcadmies])

    useEffect(() => {
        queryParams.delete('teacher')
        queryParams.delete('page');
        selectedTeachers.map((name) => queryParams.append('teacher', name))
        router.push(`${path}?${queryParams.toString()}`);
    }, [selectedTeachers])

    useEffect(() => {
        queryParams.delete('category')
        queryParams.delete('page');
        selectedCategories.map((name) => queryParams.append('category', name))
        router.push(`${path}?${queryParams.toString()}`);
    }, [selectedCategories])



    return (
        <section className="w-full pb-10 flex flex-col ">

            <div className="flex items-center flex-wrap md:flex-nowrap gap-4 py-6 px-4 shadow-medium rounded-lg 
                bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] ">

                <Input placeholder="نام دوره را وارد کنید" size="lg" radius="sm" variant="bordered" color="primary" className="px-4"
                    endContent={<IoSearch size={24} className="cursor-pointer" onClick={handleSearch} />}
                    onChange={(e) => setSearchText(e.target.value)} value={searchText} dir={'rtl'}
                />

                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">

                    <Select size="lg" radius="sm" color="primary" variant="bordered" selectedKeys={selectedOption}
                        disableSelectorIconRotation className="text-base" onChange={(e) => handleOptionSelect(e.target.value)} >
                        {selectOptions.map((option) => (
                            <SelectItem key={option.key} variant="bordered" color="primary">
                                {option.label}
                            </SelectItem>
                        ))}
                    </Select>

                </div>
            </div>

            <div className="mt-8 flex flex-col lg:flex-row gap-4">

                <div className="w-full flex flex-col gap-5 lg:w-4/12 xl:w-3/12">

                    <div className="w-full bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] shadow-medium rounded-lg">

                        <Acordian open={open1} title="فیلتر قیمت" setOpen={setOpen1} initialHeight={'auto'}>

                            <div className="w-full flex items-center">
                                <Button className="w-full rounded-md " onClick={() => handlePriceSelect("1")}
                                    variant="solid" color={selectedPrice === "1" ? 'secondary' : 'info'}>همه</Button>
                                <Button className="w-full rounded-md " onClick={() => handlePriceSelect("3")}
                                    variant="solid" color={selectedPrice === "3" ? 'secondary' : 'info'}>فقط نقدی</Button>
                            </div>
                            <div className="w-full flex items-center">
                                <Button className="w-full rounded-md " onClick={() => handlePriceSelect("2")}
                                    variant="solid" color={selectedPrice === "2" ? 'secondary' : 'info'}>رایگان</Button>

                                <Button className="w-full rounded-md " onClick={() => handlePriceSelect("4")}
                                    variant="solid" color={selectedPrice === "4" ? 'secondary' : 'info'}>تخفیف‌دار</Button>
                            </div>

                        </Acordian>

                    </div>

                    <div className="w-full bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] shadow-medium rounded-lg">

                        <Acordian open={open2} title="فیلتر آکادمی" setOpen={setOpen2} initialHeight={0}>
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
                                {teachersList.map((item: any, index) =>
                                    <Checkbox isSelected={selectedTeachers.includes(item.engName)} onClick={() => handleTeacherSelect(item.engName)}
                                        key={index} defaultSelected radius="sm" size="lg">
                                        {item.engName}
                                    </Checkbox>)}
                            </div>
                        </Acordian>
                    </div>

                    <div className="w-full bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] shadow-medium rounded-lg">
                        <Acordian open={open4} title="فیلتر دسته بندی" setOpen={setOpen4} initialHeight={'auto'}>
                            <div className="w-full flex flex-col gap-3">
                                {renderCategories(
                                    { categories: categories[0].subCategories, selectedCategories: selectedCategories, level: 0, handleCategorySelect: handleCategorySelect }
                                )}
                            </div>
                        </Acordian>
                    </div>
                </div>

                <div className="w-full lg:w-8/12 xl:w-9/12 relative">

                    {list.length ? <div className="sticky top-[20vh] right-[70%] -ms-10 lg:-ms-24 z-10 w-0 h-0">
                        <ImBooks className=" text-[12rem] md:text-[16rem] xl:text-[20rem] text-primary-400 dark:text-primary-400" />
                    </div> : ''}

                    {list.length ?
                        <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 justify-items-center gap-4 relative z-20">
                            {list.map((course, index) => <CourseCard key={index} data={course} />)}
                        </div>
                        :
                        <div className='w-full mt-20'>
                            <p className="text-2xl font-semibold text-center">دوره‌ای پیدا نشد</p>
                        </div>
                    }

                    {
                        totalPage > 1 ?
                            <div className="mt-20 flex justify-center relative z-50">
                                <Pagination variant="bordered" color="primary" dotsJump={10}
                                    //  classNames={{chevronNext:'text-2xl transform -rotate-270',prev:'text-2xl transform rotate-180'}}
                                    classNames={{ chevronNext: 'text-2xl', prev: 'text-2xl' }}
                                    onChange={handlePageChange}
                                    showControls total={totalPage} initialPage={1} page={currentPage} size="lg" dir="ltr" />
                            </div> : ''
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

type Props2 = {
    categories: any,
    selectedCategories: string[],
    handleCategorySelect: (category: string) => void,
    level: number
};

const renderCategories = ({ categories, selectedCategories, handleCategorySelect, level }: Props2) => {

    return categories.map((category: any) => (

        <div key={category._id} style={{ paddingRight: `${level * 20}px` }}>
            <Checkbox isSelected={selectedCategories.includes(category.name)} onClick={() => handleCategorySelect(category.name)}
                defaultSelected radius="sm" size="lg" >
                {category.name}
            </Checkbox>
            {category.subCategories.length > 0 && renderCategories({ categories: category.subCategories, selectedCategories, handleCategorySelect, level: level + 1 })}
        </div>
    ));
};

