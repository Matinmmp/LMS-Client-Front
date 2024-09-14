import { Edu } from "@/src/config/fonts"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Link } from "@nextui-org/link"
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi";



const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="h-[30rem] flex flex-col ">
            <ModalHeader className="flex flex-col relative">
                <p className={`p-2 mt-12 text-center font-semibold text-3xl text-primary-400`}>
                    ورود به سایت
                </p>

                <div className="-mt-14 p-4 flex justify-center rounded-full bg-[#ffffff] dark:bg-[#19191e] backdrop-blur absolute -top-4 left-1/2 transform -translate-x-1/2 z-[100] ">
                    <Image priority alt="logo" className="w-24 h-24" height={200} width={200} src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                </div>
            </ModalHeader>

            <ModalBody>
                <div className="flex flex-col gap-5">
                    <Input placeholder="رضا رضایی" labelPlacement="outside" type="text" label="نام" size="lg" radius="sm"
                        variant="bordered" color="primary" classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }} />

                    <Input placeholder="you@example.com" dir='ltr' labelPlacement="outside" type="email" label="ایمیل" size="lg" radius="sm"
                        variant="bordered" color="primary" classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }} />

                    <Input
                        startContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                {isVisible ? (
                                    <FiEye className="text-xl text-default-400 pointer-events-none" />
                                ) : (
                                    <FiEyeOff className="text-xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        placeholder="password" dir='ltr' labelPlacement="outside" type={isVisible ? "text" : "password"}
                        label="پسور" size="lg" radius="sm" variant="bordered" color="primary"
                        classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }} />
                </div>


            </ModalBody>

            <ModalFooter>

            </ModalFooter>

        </div>

    )
}

export default Login