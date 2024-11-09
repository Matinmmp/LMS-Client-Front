'use client'
import { Avatar } from "@nextui-org/avatar";
import { useSelector } from "react-redux";
import { Input } from "@nextui-org/input";
import { formatDate } from "@/src/utils/functions";


export default function ProfilePage() {
    const { user, loading } = useSelector((state: any) => state.auth)
    let date = '';


    if (user?.registrationDate)
        date = formatDate(user?.registrationDate)

    return (
        <div className="w-full">

            <div className="h-28 w-28 md:h-32 md:w-32 xl:w-40 xl:h-40 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer ">
                <Avatar className="h-full w-full shadow-[0_0_15px_0_#42C0F4]" size="lg" radius="full"
                    isBordered color="secondary" src={user?.avatar?.imageUrl} showFallback />
            </div>

            <div className="mt-16 lg:mt-28">
                <div className="items-center grid lg:grid-cols-2 gap-x-4 gap-y-8 lg:gap-6">
                    <Input size="lg" color="secondary" variant="bordered" type="text" label="نام" labelPlacement={'outside'} value={user?.name} radius="sm"
                        disabled classNames={{ label: 'text-base font-semibold text-secondary-400' }} />

                    <Input size="lg" color="secondary" variant="bordered" type="text" label="ایمیل" labelPlacement={'outside'} value={user?.email} radius="sm"
                        disabled classNames={{ label: 'text-base font-semibold text-secondary-400' }} />

                    <Input size="lg" color={user?.phone ? 'secondary' :'warning'} variant="bordered" type='tel' label="َشماره تلفن" labelPlacement={'outside'} placeholder={!user?.phone && !loading ? 'وارد نشده' : ''} value={user?.phone} radius="sm" dir="rtl"
                        disabled classNames={{ label: 'text-base font-semibold ' }} />

                    <Input size="lg" color="secondary" variant="bordered" type='text' label="تاریخ عضویت" labelPlacement={'outside'} value={date} radius="sm" dir="ltr"
                        disabled classNames={{ label: 'text-base font-semibold text-secondary-400' }} />
                </div>
            </div>

            <div className="mt-20">

            </div>


        </div>
    );
}
