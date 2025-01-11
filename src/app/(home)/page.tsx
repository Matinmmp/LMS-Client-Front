const cash = 'no-store'
import Hero from "@/src/components/HomePage/Hero";

import Comments from "@/src/components/HomePage/Comments";
import FAQ from "@/src/components/HomePage/FAQ";
import clsx from "clsx";
import { title } from "@/src/components/primitives";
import { Suspense } from "react";


import { LastCoursesLoading } from "@/src/components/HomePage/LastCourses";
import { FavoritAcademiesLoading } from "@/src/components/HomePage/FavoritAcademies";
import { FavoritTeachersLoading } from "@/src/components/HomePage/FavoritTeachers";
import { FavoriteCoursesLoading } from "@/src/components/HomePage/FavoriteCourses";

import LastCourses from "@/src/components/HomePage/LastCourses";
import FavoritAcademies from "@/src/components/HomePage/FavoritAcademies";
import FavoritTeachers from "@/src/components/HomePage/FavoritTeachers";
import FavoriteCourses from "@/src/components/HomePage/FavoriteCourses";
import DiscountCourses from "@/src/components/HomePage/DiscountCourses";


export default async function Home() {

    return (
        <section className=" flex flex-col items-center justify-center  " >

            <div className="w-full max-w-7xl px-4 md:px-8 2xl:px-2 flex flex-col items-center justify-center ">

                <div className="mt-36 ">
                    <div className="background z-[-1] !absolute">
                        <span className=" dark:bg-[#1582ff37] " />

                    </div>
                    <Hero />
                </div>

                <div className="w-full mt-24">

                    <Suspense fallback={
                        <LastCoursesLoading>
                            <h3 className={clsx(title({ color: 'blue' }), "pt-1 text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>آخرین دوره‌ها</h3>
                        </LastCoursesLoading>}
                    >

                        <LastCourses>
                            <h3 className={clsx(title({ color: 'blue' }), "pt-1 text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>آخرین دوره‌ها</h3>
                        </LastCourses>
                    </Suspense>

                </div>

                <div className="w-full mt-24">
                    <DiscountCourses>
                        <h3 className={clsx(title({ color: 'blue' }), "text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>تخفیف‌دار‌ها</h3>
                    </DiscountCourses>

                </div>

                <div className="w-full mt-24">

                    <Suspense fallback={
                        <FavoriteCoursesLoading>
                            <h3 className={clsx(title({ color: 'blue' }), "text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>محبوب‌ترین دوره‌ها</h3>
                        </FavoriteCoursesLoading>}
                    >
                        <FavoriteCourses>
                            <h3 className={clsx(title({ color: 'blue' }), "text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>محبوب‌ترین دوره‌ها</h3>
                        </FavoriteCourses>
                    </Suspense>

                </div>

                <div className="w-full mt-24 ">
                    <Suspense fallback={
                        <FavoritAcademiesLoading>
                            <h3 className={clsx(title({ color: 'green' }), "text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>محبوب‌ترین آکادمی‌ها</h3>
                        </FavoritAcademiesLoading>}>
                        <FavoritAcademies >
                            <h3 className={clsx(title({ color: 'green' }), "text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>محبوب‌ترین آکادمی‌ها</h3>
                        </FavoritAcademies>
                    </Suspense>

                </div>


                <div className="w-full mt-24 ">
                    <Suspense fallback={
                        <FavoritTeachersLoading>
                            <h3 className={clsx(title({ color: 'secondary' }), "text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>محبوب‌ترین مدرس‌ها</h3>
                        </FavoritTeachersLoading>}>
                        <FavoritTeachers >
                            <h3 className={clsx(title({ color: 'secondary' }), "text-xl md:text-2xl lg:text-3xl xl:text-4xl")}>محبوب‌ترین مدرس‌ها</h3>
                        </FavoritTeachers>
                    </Suspense>

                </div>

                <div className="w-full mt-28 md:mt-52 ">
                    <Comments />
                </div>

                <div className="mt-8 md:mt-16 w-full">
                    <FAQ />
                </div>

            </div>

        </section>
    );
}
