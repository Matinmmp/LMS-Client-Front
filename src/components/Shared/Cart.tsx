'use client'
import { addCourse, hydrateCart } from "@/src/redux/cart/cartSlice";
import { toPersianNumber } from "@/src/utils/functions";
import { useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";



export const Cart = () => {
    const dispatch = useDispatch();
    const { courseIds } = useSelector((state: any) => state.cart);
    useEffect(() => {
        dispatch(hydrateCart()); // بارگذاری داده‌ها از localStorage
    }, [dispatch]);

    return (
        <div className="relative cursor-pointer">
            <div className="min-w-11 min-h-11 max-h-11 max-w-11 flex items-center justify-center rounded-full bg-secondary-500 shadow-[0_0_7px_0_#42C0F4]">
                <IoMdCart size={26} className="text-white" />
            </div>
            {courseIds?.length ?
                <span className="-top-[5px] -right-[5px] w-5 h-5 text-xs font-light flex items-center justify-center rounded-full bg-primary-500 absolute text-white shadow-medium">{toPersianNumber(courseIds?.length)}</span> : ''}
        </div>
    )
}