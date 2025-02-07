'use client'
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { FaRightToBracket } from "react-icons/fa6";
import { IoKeyOutline, IoReceiptOutline } from "react-icons/io5";
import { LiaUser } from "react-icons/lia";
import { MdAttachMoney, MdLogout, MdOutlinePersonAddAlt } from "react-icons/md";
import { useSelector } from "react-redux";
import { logoutUser } from "../lib/apis/userApis";
import { showToast } from "../utils/toast";
import cookies from 'js-cookie'


type DropDownProps = {
    setOpen: (open: boolean) => void,
    setRoute: (route: string) => void

};

const UserDropDown = ({ setOpen,setRoute }: DropDownProps) => {
    const { user, loading } = useSelector((state: any) => state.auth)

    const logoutMutation = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            location?.reload();
            cookies.remove('access_token');
            cookies.remove('refresh_token');
        },
        onError: () => showToast({ type: 'error', message: 'خطایی پیش آمده است.' })
    })

    return (
        <>
            <li className="hidden sm:flex">
                {
                    !loading ?
                        user ?
                            <div className="flex items-center gap-4">
                                <Dropdown placement="bottom-end" >
                                    <DropdownTrigger>
                                        <Avatar isBordered showFallback as="button" className="transition-transform shadow-[0_0_15px_0_#42C0F4]" color="secondary" src={user.imageUrl} />
                                    </DropdownTrigger>

                                    <DropdownMenu aria-label="Profile Actions" variant="flat" className="min-w-80">

                                        <DropdownItem color="default" key={'user'}>
                                            <div className="py-4 ps-1">
                                                <User
                                                    as="button"
                                                    avatarProps={{ isBordered: true, src: user?.imageUrl, color: 'secondary' }}
                                                    classNames={{ description: 'text-md font-normal', name: 'text-lg font-normal' }}
                                                    className="transition-transform"
                                                    description={user?.email}
                                                    name={user?.name}
                                                />
                                            </div>
                                        </DropdownItem>

                                        <DropdownItem color="secondary" className="mt-4 " key={'profile'}>
                                            <Link href={'/profile'} className="flex items-center gap-2">
                                                <LiaUser size={24} strokeWidth={0.7} />
                                                <span className="text-base font-medium">پروفایل</span>
                                            </Link>
                                        </DropdownItem>

                                        <DropdownItem color="secondary" key={'password'}>
                                            <Link href={'/profile/password'} className="flex items-center gap-2">
                                                <IoKeyOutline size={22} strokeWidth={1} />
                                                <span className="text-base font-medium">تغییر رمز عبور</span>
                                            </Link>
                                        </DropdownItem>

                                        <DropdownItem color="secondary" key={"rec"}>
                                            <Link href={'/profile/reciepts'} className="flex items-center gap-2">
                                                <IoReceiptOutline size={21} strokeWidth={0.7} />
                                                <span className="text-base font-medium">فاکتور‌ها</span>
                                            </Link>
                                        </DropdownItem>

                                        <DropdownItem key={"myFree"} color="secondary">
                                            <Link href={'/profile/myFreeCourses'} className="flex items-center gap-2">
                                                <MdAttachMoney size={21} />
                                                <span className="text-base font-medium">دوره‌های من</span>
                                            </Link>
                                        </DropdownItem>

                                        <DropdownItem key={'out'} className="mt-4" color="danger" onPress={() => logoutMutation.mutate()}>
                                            <div className="flex items-center gap-2">
                                                <MdLogout size={21} />
                                                <span className="text-base font-medium">خروج</span>
                                            </div>
                                        </DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            :
                            <div className="flex items-center font-medium" >
                                <Button onPress={() => { setOpen(true); setRoute('Login'); }} radius="sm" variant="shadow" color="secondary" className="w-[5.5rem] -me-4 gap-0.5 ps-2 text-white"
                                    endContent={<FaRightToBracket className="ms-1 text-base font-medium" size={20} />} >
                                    ورود
                                </Button>

                                <Button onPress={() => { setOpen(true); setRoute('Sign-Up'); }} className="px-2 w-24" color="primary" radius="sm" variant="shadow">
                                    <span >عضویت</span>
                                    <MdOutlinePersonAddAlt size={24} />
                                </Button>
                            </div>
                        : ''}

            </li>

            <li className="sm:hidden">
                {
                    !loading ?
                        user ?
                            <Link href={'/profile'}>
                                <Avatar className="cursor-pointer" isBordered color="secondary" src={user.imageUrl} />
                            </Link>
                            :
                            <Button radius="sm" variant="shadow" color="secondary" className="!min-w-8 text-white"
                                endContent={<FaRightToBracket className="text-base font-medium" size={20} />} onPress={() => setOpen(true)}>
                            </Button>
                        : ''
                }
            </li>
        </>
    );
};

export default UserDropDown