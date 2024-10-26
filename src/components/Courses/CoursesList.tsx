'use client'
import React, { useEffect, useState } from "react";
import { SiHtmlacademy } from "react-icons/si";
import { Input } from "@nextui-org/input";
import Fuse from 'fuse.js';
import { Select, SelectItem } from "@nextui-org/select";
import { AcadmyCard } from "../Shared/AcadmyCard";


type Props = {
    list: [any]
};

const CoursesList = ({ list }: Props) => {

    const [searchText, setSearchText] = useState('');
    const [filteredAcademies, setFilteredAcademies] = useState(list);
    const [inputDirection, setInputDirection] = useState('rtl');
    const [selectedOption, setSelectedOption] = useState('1');

    const selectOptions = [
        { key: '1', label: 'براساس محبوبیت' },
        { key: '2', label: 'براساس بیشترین دانشجو' },
        { key: '3', label: 'براساس بیشترین دوره' },
        { key: '4', label: 'براساس امتیاز' },
    ];
 
    const fuse = new Fuse(list, {
        keys: ['faName', 'engName'],
        threshold: 0.3,
    });

    const handleSearchChange = (text: string) => {
        setSearchText(text);
        if (/[\u0600-\u06FF]/.test(text)) setInputDirection('rtl');
        else setInputDirection('ltr');

        const result = fuse.search(text).map(result => result.item);
        setFilteredAcademies(result.length ? result as any : list);
    };

   
    const handleSort = (option: string, data: any[]) => {
        let sortedList = [...data];

        switch (option) {
            case '1': // براساس محبوبیت (Popularity)
                sortedList = data.sort((a, b) =>
                    (b.totalStudents + b.totalCourses + b.rates) -
                    (a.totalStudents + a.totalCourses + a.rates)
                );
                break;
            case '2': // براساس بیشترین دانشجو (Most Students)
                sortedList = data.sort((a, b) => b.totalStudents - a.totalStudents);
                break;
            case '3': // براساس بیشترین دوره (Most Courses)
                sortedList = data.sort((a, b) => b.totalCourses - a.totalCourses);
                break;
            case '4': // براساس امتیاز (Rating)
                sortedList = data.sort((a, b) => b.rates - a.rates);
                break;
            default:
                break;
        }

        setFilteredAcademies(sortedList as any);
    };

 
    useEffect(() => {
        handleSort(selectedOption, filteredAcademies);
    }, [selectedOption, filteredAcademies]);

  
    useEffect(() => {
        handleSort('1', list); 
    }, [list]);

    return (
        <section className="w-full pb-10 flex flex-col ">

            <div >
                <div className="flex items-center flex-wrap md:flex-nowrap gap-4 py-6 px-4 shadow-medium rounded-lg 
                bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#2020204d] ">
                    <Input
                        onChange={(e) => handleSearchChange(e.target.value)}
                        value={searchText} dir={inputDirection}
                        placeholder="نام آکادمی را وارد کنید" size="lg" radius="sm" variant="bordered" color="success"
                    />
                    <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                        <Select
                            size="lg"
                            radius="sm"
                            color="success"
                            variant="bordered"
                            disableSelectorIconRotation
                            className="text-base"
                            onChange={(e) => setSelectedOption(e.target.value)}
                            selectedKeys={selectedOption}
                        >
                            {selectOptions.map((option) => (
                                <SelectItem key={option.key} variant="bordered" color="success">
                                    {option.label}
                                </SelectItem>
                            ))}
                        </Select>

                    </div>
                </div>
            </div>
            
            <div className="mt-2 relative">

                {filteredAcademies.length ? <div className="sticky top-[20vh] right-[70%] pt-16 -ms-10 lg:-ms-24 z-10 w-0 h-0">
                    <SiHtmlacademy className=" text-[12rem] md:text-[16rem] xl:text-[20rem] text-success-400 dark:text-success-700" />
                </div> : ''}

                {filteredAcademies.length ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 justify-items-center gap-y-8 gap-x-8 relative z-20">
                        {filteredAcademies.map((item: any, index: number) => <AcadmyCard key={index} data={item} />)}
                    </div>
                    :

                    <div className='w-full mt-20'>
                        <p className="text-2xl font-semibold text-center">مدرسی با این نام پیدا نشد</p>
                    </div>

                }

            </div>

        </section >
    );
};

export default CoursesList