'use client'
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { TeacherCard } from "../Shared/TeacherCard";
import { TiPencil } from "react-icons/ti";
import { Input } from "@nextui-org/input";
import Fuse from 'fuse.js';
import { Select, SelectItem } from "@nextui-org/select";


type Props = {
    list: [any]
};

function getUniqueAcademyNames(data: any[]) {
    const uniqueNames = new Set();

    data.forEach(item => {
        item.academyNames.forEach((name: string) => {
            uniqueNames.add(name);
        });
    });

    return Array.from(uniqueNames).map((item, index) => { return { key: `${index + 2}`, label: item } });
}

const TeachersList = ({ list }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = usePathname();
    const [searchText, setSearchText] = useState('');
    const [filteredTeachers, setFilteredTeachers] = useState(list);
    const [inputDirection, setInputDirection] = useState('rtl');
    const [selectedOption, setSelectedOption] = useState('1');

    // گرفتن لیست آکادمی‌ها و مقدار پیش‌فرض برای select box
    const [selectedAcademy, setSelectedAcademy] = useState("1");

    const academyOptions = [{ key: '1', label: 'همه' }, ...getUniqueAcademyNames(list)];
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
        setFilteredTeachers(result.length ? result as any : list);
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

        setFilteredTeachers(sortedList as any);
    };

    const handleAcademyChange = (value: string) => {
        const academy = academyOptions.find(item => item.key === value)
        setSelectedAcademy(value)

        if (!academy) return;
        if (value === '1') {
            router.push(path!)
            return;
        }

        router.push(path + `?academy=${academy.label}`);
    }

    useEffect(() => {
        handleSort(selectedOption, filteredTeachers);
    }, [selectedOption, filteredTeachers]);

    useEffect(() => {
        handleSort('1', list);
    }, [list]);

    useEffect(() => {
        const academyName = searchParams!.get('academy');
        const academy = academyOptions.find(item => item.label === academyName)

        if (!academy || academy.key === "1") {
            setSelectedAcademy('1')
            setFilteredTeachers(list)
        } else {
            setSelectedAcademy(academy.key)
            setFilteredTeachers(filteredTeachers.filter((item: any) => item.academyNames.includes(academy.label)) as any)
        }


    }, [searchParams])

    return (
        <section className="w-full pb-10 flex flex-col ">
            <div>
                <div className="flex items-center flex-wrap md:flex-nowrap gap-4 py-6 px-4 shadow-medium dark: rounded-lg 
                bg-[#ffffffbf] backdrop-blur-[10px] dark:bg-[#131d35] ">

                    <Input onChange={(e) => handleSearchChange(e.target.value)} value={searchText} dir={inputDirection}
                        placeholder="نام مدرس را وارد کنید" size="lg" radius="sm" variant="bordered" color="secondary" />

                    <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                        <Select size="lg" radius="sm" color="secondary" variant="bordered" disableSelectorIconRotation className="text-base"
                            onChange={(e) => setSelectedOption(e.target.value)}
                            selectedKeys={selectedOption}>
                            {selectOptions.map((option) => (
                                <SelectItem key={option.key} variant="bordered" color="secondary">
                                    {option.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    {/* سلکت باکس آکادمی */}
                    <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                        <Select size="lg" radius="sm" color="secondary" variant="bordered" disableSelectorIconRotation className="text-base"
                            onChange={(e) => handleAcademyChange(e.target.value)}
                            selectedKeys={selectedAcademy}>
                            {academyOptions.map((academy: any, index) => (
                                <SelectItem key={academy.key} variant="bordered" color="secondary">
                                    {academy.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                </div>
            </div>

            <div className="mt-2 relative">
                {filteredTeachers.length ?
                    <div className="sticky top-[30vh] pt-16 -ms-10 lg:-ms-24  z-10 w-0 h-0">
                        <TiPencil className=" text-[15rem] md:text-[20rem] xl:text-[25rem] text-secondary-400 dark:text-secondary-700" />
                    </div>
                    : ''
                }

                {filteredTeachers.length ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3 justify-items-center gap-y-8 gap-x-8 relative z-20">
                        {filteredTeachers.map((item: any, index: number) =>
                            <TeacherCard key={index} data={item} />
                        )}
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

export default TeachersList;
