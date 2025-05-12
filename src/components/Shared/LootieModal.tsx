'use client'
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Cookies from "js-cookie";
import Image from "next/image";
import { numberSeparator, toPersianNumber } from "@/src/utils/functions";
import Link from "next/link";


const LootieModal = () => {
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        const canShowBox = Cookies.get('canShowAdd');
        if (canShowBox !== undefined) {
            if (canShowBox === 'true') {
                setShowBox(true)
            }
            else {
                setShowBox(false)
            }
        }

        else {

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate());
            Cookies.set('canShowAdd', 'true', { expires: tomorrow, path: '/' });
            setShowBox(true)
        }

    }, [])

    const handleClose = () => {
        setShowBox(false)
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        Cookies.set('canShowAdd', 'false', { expires: tomorrow, path: '/' });
    }

    useEffect(() => {
        const html = document.getElementById('html');

        if (html)
            if (showBox) html.style.overflowY = 'hidden';
            else html.style.overflowY = 'auto';

    }, [showBox])


    return (

        <Modal backdrop={'blur'} radius="md" isOpen={showBox} isDismissable={false} style={{ overflow: 'initial' }}
            placement="center"
            classNames={{
                body: "py-6",
                backdrop: "bg-[#292f46]/30 backdrop-opacity-40",
                base: "bg-[#ffffff] dark:bg-[#19191e]  backdrop-blur w-full max-w-[95%] md:max-w-[30rem]",
                closeButton: "hidden",
            }}>

            <ModalContent className="relative">
                <span className="absolute top-2 right-2 z-50">
                    <IoIosCloseCircleOutline size={35} className="text-primary-400 cursor-pointer" onClick={handleClose} />
                </span>

                <ModalHeader className="flex flex-col relative">
                    <p className={`p-2 text-center font-semibold text-2xl text-primary-400`}>
                        شرکت در قرعه کشی
                    </p>

                </ModalHeader>

                <ModalBody className="pt-2">
                    <Image className="rounded-xl shadow-medium" src={'https://images.vc-virtual-learn.com/images/lottie1.webp'} width={1000} height={800} alt="lottie" />
                    <div className="mt-2">
                        <p className="text-sm font-light">
                            با ثبت نام در سایت Virtual Learn و گشتن سایت به مدت یک دقیقه در قرعه کشی سایت ما شرکت کنی.
                        </p>
                        <p className="mt-1 text-sm font-light">مبلغ جایزه صعودی هست. مبلغ پایه یک میلیون تومان هست اما به ازای هر کاربر جدیدی که ثبت نام میکند و یک دقیقه در سایت وقت میگذراند {toPersianNumber(numberSeparator('50000'))} هزار تومان به مبلغ پایه اضافه میشود.</p>
                        <p className="mt-2 text-sm font-light">مراحل شرکت در قرعه کشی:</p>
                        <ul className="mt-1 list-disc text-sm  ps-4">
                            <li>جمله‌ی <strong>آموزش برنامه نویسی با ویرچوال لرن</strong> را در گوگل سرچ کنید.</li>
                            <li>در سایت ثبت نام کنید.</li>
                            <li>به مدت یک دقیقه صفحات سایت را بگردید</li>
                        </ul>

                        <p className="mt-2 text-sm font-light">برای اطلاع از مبلغ جایزه که درحال افزایش هست و نتایج قرعه کشی به کانال تلگرام ما مراجعه کنید.</p>
                        <Link className="block mt-2 text-secondary-400 font-semibold" dir="ltr"  href={''} target="_blank" rel="noopener noreferrer">
                        @VC_Virtual_Learn
                        </Link>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>

    );
}
export default LootieModal
