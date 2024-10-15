'use client'
import React, { useState } from "react";
import { TeacherCard } from "../Shared/TeacherCard";

import { TiPencil } from "react-icons/ti";
import { Input } from "@nextui-org/input";
import Fuse from 'fuse.js';

type Props = {
    list: [any]
};

const TeachersList = ({ list }: Props) => {
    const [searchText, setSearchText] = useState('');
    const [filteredTeachers, setFilteredTeachers] = useState(list);
    const [inputDirection, setInputDirection] = useState('ltr');

    const fuse = new Fuse(list, {
        keys: ['faName', 'engName'], // فیلدهای مورد نظر برای جستجو
        threshold: 0.3, // مقدار مشابهت (کمتر یعنی سختگیرانه‌تر)
    });

    const handleSearchChange = (text: string) => {
        setSearchText(text);

        // بررسی اینکه آیا متن فارسی است یا انگلیسی
        if (/[\u0600-\u06FF]/.test(text)) {
            setInputDirection('rtl'); // راست‌چین برای فارسی
        } else {
            setInputDirection('ltr'); // چپ‌چین برای انگلیسی
        }

        // فیلتر کردن داده‌ها با fuse.js
        const result = fuse.search(text).map(result => result.item);
        setFilteredTeachers(result as any);
        if (!result.length && !text)
            setFilteredTeachers(list);

    };

    return (
        <section className="w-full pb-10 flex flex-col ">

            <div>
                <Input
                    onChange={(e) => handleSearchChange(e.target.value)}
                    value={searchText}
                    dir={inputDirection} // دایرکشن بر اساس زبان
                    placeholder="Jonas Schmedtmann"
                    size="lg"
                    radius="sm"
                    variant="bordered"
                    color="secondary"
                />
            </div>
            <div className="mt-2 relative">

                <div className="sticky top-[30vh] mt-20 -ms-10 lg:-ms-24  z-10 w-0 h-0">
                    <TiPencil className=" text-[15rem] md:text-[20rem]  xl:text-[25rem] text-secondary-400 dark:text-secondary-700" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg2:grid-cols-3    justify-items-center gap-y-8 gap-x-8 relative z-20">

                    {filteredTeachers.length ? filteredTeachers.map((item: any, index: number) => <TeacherCard key={index} data={item} />) : ''}


                </div>

            </div>

        </section>
    );
};

export default TeachersList