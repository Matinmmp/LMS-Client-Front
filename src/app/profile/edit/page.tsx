'use client'
import { Avatar } from "@nextui-org/avatar";
import { useSelector } from "react-redux";
import { Input } from "@nextui-org/input";
import { formatDate } from "@/src/utils/functions";
import { Skeleton } from "@nextui-org/skeleton";
import { Button } from "@nextui-org/button";
import * as Yup from 'yup'
import { GoDotFill } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserInfo, uploadAvatar } from "@/src/lib/apis/userApis";
import { showToast } from "@/src/utils/toast";
import { Spinner } from "@nextui-org/spinner";
import { useFormik } from "formik";


const schema = Yup.object().shape({
    name: Yup.string().required('لطفا نام خود را وارد کنید'),
    phone: Yup.string()
        .matches(/^09\d{9}$/, 'شماره موبایل باید با 09 شروع شود و ۱۱ رقم باشد')
        .required('لطفا شماره موبایل را وارد کنید'),
})

export default function ProfilePage() {
    const queryClient = useQueryClient();
    const { user: u, loading, error } = useSelector((state: any) => state.auth)
    const [user, setUser] = useState<any>();
    const imageRef = useRef<any>();

    const uploadAvatarMutataion = useMutation({
        mutationFn: (avatar: string | ArrayBuffer | null) => uploadAvatar(avatar),
        onSuccess: () => {
            showToast({ type: 'success', message: 'عکس با موفقیت بارگزاری شد.' })
            queryClient.invalidateQueries({ queryKey: ['getUserQuery'] });
        },
        onError: () => showToast({ type: 'error', message: 'عملیات ناموفق' })
    })

    const editUserInfoMutation = useMutation({
        mutationFn: ({ name, phone }: { name: string, phone: string }) => editUserInfo({ name, phone }),
        onSuccess: () => {
            showToast({ type: 'success', message: 'اطلاعات با موفقیت ویرایش شد.' })
            queryClient.invalidateQueries({ queryKey: ['getUserQuery'] });
        },
        onError: () => showToast({ type: 'error', message: 'عملیات ناموفق' })
    })

    const imageHandler = async (e: any) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setUser({ ...user, image: e.target.files[0] })
            if (fileReader.readyState === 2)
                uploadAvatarMutataion.mutate(fileReader.result)
        }
        if (file)
            fileReader.readAsDataURL(e.target.files[0])
    }

    const formik = useFormik({
        initialValues: { name: u?.name || "", phone: u?.phone || "" },
        validationSchema: schema,
        onSubmit: async ({ name, phone }) => {
            editUserInfoMutation.mutate({ name, phone });
        }
    })
    const { errors, touched, handleChange, handleSubmit, values, setValues } = formik;
    useEffect(() => { if (!loading && !error) setValues({ name: u?.name, phone: u.phone }) }, [loading])


    let imageUrl = '';
    if (u?.imageUrl)
        imageUrl = u?.imageUrl
    if (u?.image)
        imageUrl = URL.createObjectURL(u?.image)

    let date = '';
    if (u?.registrationDate)
        date = formatDate(u?.registrationDate)



    return (
        <div className="h-full w-full flex flex-col">

            {
                error ?
                    <div className="h-full w-full flex items-center justify-center">
                        <p className="text-center text-xl font-semibold text-red-500">مشکلی پیش آمده است, بعدا دوباره تلاش کنید.</p>
                    </div>

                    :
                    <>
                        <div className="h-28 w-28 md:h-32 md:w-32 xl:w-40 xl:h-40 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            {loading ?
                                <Skeleton className="h-full w-full rounded-full" />
                                :
                                <>
                                    {uploadAvatarMutataion.isPending &&
                                        <div className="h-full w-full rounded-full bg-white/50 absolute z-30 flex items-center justify-center">
                                            <Spinner color="secondary" size="lg" />
                                        </div>}
                                    <Avatar className="h-full w-full shadow-[0_0_15px_0_#42C0F4] object-cover object-center cursor-pointer z-10" size="lg" radius="full"
                                        isBordered color="secondary" src={imageUrl} showFallback onClick={() => imageRef.current.click()} />
                                    <span className="flex items-center justify-center absolute bottom-0 left-0 lg:left-4 bg-primary-500 rounded-full z-20">
                                        <IoAddCircle size={30} className="text-white  " />
                                    </span>
                                    <input className="hidden" ref={imageRef} type='file' name='' id='avatar' onChange={imageHandler} accept='image/png,image/jpg,image/jpeg,image/webp' />
                                </>
                            }
                        </div>

                        {!loading && <div className="w-full mt-16 lg:mt-28">
                            <div className="p-4 flex flex-col gap-1 bg-warning-300 text-warning-800 rounded-md ">
                                {!user?.phone ? <div className="flex items-center gap-0.5">
                                    <GoDotFill size={10} className="text-warning-800" />
                                    <p className="font-medium">برای تکمیل پروفایل شماره موبایل را وارد کنید.</p>
                                </div> : ''}

                                <div className="flex items-center gap-0.5">
                                    <GoDotFill size={10} className="text-warning-800" />
                                    <p className="font-medium">ایمیل غیرقابل تغییر هست.</p>
                                </div>

                            </div>
                        </div>}


                        <form className="h-full w-full flex flex-col" onSubmit={handleSubmit}>
                            {loading ?
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

                                        <Input onChange={handleChange} name="name" size="lg" color="secondary" variant="bordered" type="text" label="نام" labelPlacement={'outside'} radius="sm"
                                            classNames={{ label: 'text-base font-semibold text-secondary-400' }}
                                            isInvalid={!!errors.name && !!touched.name}
                                            errorMessage={typeof errors.name === 'string' ? errors.name : undefined}
                                            value={values?.name} />

                                        <Input onChange={handleChange} size="lg" color="secondary" variant="bordered" type="email" label="ایمیل" labelPlacement={'outside'} value={u?.email} radius="sm"
                                            classNames={{ label: 'text-base font-semibold text-secondary-400' }} />

                                        <Input onChange={handleChange} name="phone" size="lg" color={user?.phone ? 'secondary' : 'warning'} variant="bordered" type='tel' label="َشماره تلفن" labelPlacement={'outside'} placeholder={!user?.phone && !loading ? 'وارد نشده' : ''} radius="sm" dir="rtl"
                                            classNames={{ label: 'text-base font-semibold ' }}
                                            isInvalid={!!errors.phone && !!touched.phone}
                                            errorMessage={typeof errors.phone === 'string' ? errors.phone : undefined}
                                            value={values?.phone}
                                        />

                                    </div>
                                </div>}


                            {!loading && !error &&
                                <div className="w-full mt-auto flex justify-end" onClick={() => handleSubmit()}>
                                    <Button disabled={editUserInfoMutation.isPending} type="submit" color="secondary" radius="sm" variant="shadow" className="w-full mt-8 lg:w-max text-base text-white font-medium">
                                        {editUserInfoMutation.isPending ? <Spinner className="text-white" /> : 'ویرایش'}
                                    </Button>
                                </div>}
                        </form>
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
