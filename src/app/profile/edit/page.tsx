'use client'
import { Avatar } from "@nextui-org/avatar";
import { useSelector } from "react-redux";
import { Input } from "@nextui-org/input";
import { formatDate } from "@/src/utils/functions";
import { Skeleton } from "@nextui-org/skeleton";
import { Button } from "@nextui-org/button";
import * as Yup from 'yup'
import { GoDotFill } from "react-icons/go";



const schema = Yup.object().shape({
    name: Yup.string().required('لطفا نام خود را وارد کنید'),
    phone: Yup.string()
        .matches(/^09\d{9}$/, 'شماره موبایل باید با 09 شروع شود و ۱۱ رقم باشد')
        .required('لطفا شماره موبایل را وارد کنید'),
})

export default function ProfilePage() {
    const { user, loading, error } = useSelector((state: any) => state.auth)
    let date = '';


    if (user?.registrationDate)
        date = formatDate(user?.registrationDate)

    return (
        <div className="h-full w-full flex flex-col">

            {
                error ?
                    <div className="h-full w-full flex items-center justify-center">
                        <p className="text-center text-xl font-semibold text-red-500">مشکلی پیش آمده است, بعدا دوباره تلاش کنید.</p>
                    </div>

                    :
                    <>
                        <div className="h-28 w-28 md:h-32 md:w-32 xl:w-40 xl:h-40 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer ">
                            {loading ?
                                <Skeleton className="h-full w-full rounded-full" />
                                :
                                <Avatar className="h-full w-full shadow-[0_0_15px_0_#42C0F4]" size="lg" radius="full"
                                    isBordered color="secondary" src={user?.avatar?.imageUrl} showFallback />}
                        </div>

                        {!loading && <div className="w-full mt-16 lg:mt-28">
                            <div className="p-4 flex flex-col gap-1 bg-warning-300 text-warning-800 rounded-md ">
                                {!user?.phone ? <div className="flex items-center gap-0.5">
                                    <GoDotFill size={10} className="text-warning-800" />
                                    <p className="font-medium">برای تکمیل پروفایل شماره موبایل را وارد کنید.</p>
                                </div> : ''}

                                <div className="flex items-center gap-0.5">
                                    <GoDotFill size={10} className="text-warning-800" />
                                    <p className="font-medium">فقط شماره و نام قابل تغییر هست.</p>
                                </div>

                            </div>
                        </div>}

                        {
                            loading ?
                                <div className="w-full mt-16 lg:mt-28">
                                    <div className="items-center grid lg:grid-cols-2 gap-x-4 gap-y-8 lg:gap-6">
                                        <InputSkeleton />
                                        <InputSkeleton />
                                        <InputSkeleton />

                                    </div>
                                </div>
                                :

                                <div className="w-full mt-6">
                                    <div className="items-center grid lg:grid-cols-2 gap-x-4 gap-y-8 lg:gap-6">

                                        <Input size="lg" color="secondary" variant="bordered" type="text" label="نام" labelPlacement={'outside'} value={user?.name} radius="sm"
                                            classNames={{ label: 'text-base font-semibold text-secondary-400' }} />

                                        <Input size="lg" color="secondary" variant="bordered" type="text" label="ایمیل" labelPlacement={'outside'} value={user?.email} radius="sm"
                                            classNames={{ label: 'text-base font-semibold text-secondary-400' }} />

                                        <Input size="lg" color={user?.phone ? 'secondary' : 'warning'} variant="bordered" type='tel' label="َشماره تلفن" labelPlacement={'outside'} placeholder={!user?.phone && !loading ? 'وارد نشده' : ''} value={user?.phone} radius="sm" dir="rtl"
                                            classNames={{ label: 'text-base font-semibold ' }} />

                                    </div>
                                </div>
                        }

                        {!loading && !error &&
                            <div className="w-full mt-auto flex justify-end">
                                <Button color="secondary" radius="sm" variant="shadow" className="w-full mt-8 lg:w-max text-base text-white font-medium">ویرایش</Button>
                            </div>}
                    </>}

        </div>
    );
}


const InputSkeleton = () => {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="w-20 h-6 rounded-sm" />
            <Skeleton className="w-full h-10 rounded-md" />
        </div>
    )
}
