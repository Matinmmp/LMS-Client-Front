'use client'
import { useSelector } from "react-redux";
import { Input } from "@nextui-org/input";
import { Skeleton } from "@nextui-org/skeleton";
import { Button } from "@nextui-org/button";
import * as Yup from 'yup'
import { GoDotFill } from "react-icons/go";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserInfo, setUserPassword, updateUserPassword } from "@/src/lib/apis/userApis";
import { showToast } from "@/src/utils/toast";
import { Spinner } from "@nextui-org/spinner";
import { useFormik } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";


const schema = Yup.object().shape({
    oldPassword: Yup.string()
        .required('لطفا رمز عبور فعلی خود را وارد کنید')
        .min(6, 'رمزعبور باید حداقل ۶ کاراکتر باشد'),
    newPassword: Yup.string()
        .required('لطفا رمزعبور جدید را وارد کنید')
        .min(6, 'رمزعبور باید حداقل ۶ کاراکتر باشد'),
    checkNewPassword: Yup.string()
        .required('لطفا رمز عبور جدید را دوباره وارد کنید')
        .min(6, 'رمزعبور باید حداقل ۶ کاراکتر باشد')
        .oneOf([Yup.ref('newPassword')], 'رمز عبور جدید مطابقت ندارد'),
});


const schema2 = Yup.object().shape({
    password: Yup.string()
        .required('لطفا رمزعبور را وارد کنید')
        .min(6, 'رمزعبور باید حداقل ۶ کاراکتر باشد'),
    checkPassword: Yup.string()
        .required('لطفا رمز عبور را دوباره وارد کنید')
        .min(6, 'رمزعبور باید حداقل ۶ کاراکتر باشد')
        .oneOf([Yup.ref('password')], 'رمز عبور جدید مطابقت ندارد'),
});


export default function ProfilePage() {
    const queryClient = useQueryClient();
    const { user, loading, error } = useSelector((state: any) => state.auth)

    const [oldPasswordVisibile, setOldPasswordVisibile] = useState(false);
    const [newPasswordVisibile, setNewPasswordVisibile] = useState(false);
    const [checkNewPasswordVisibile, setCheckNewPasswordVisibile] = useState(false);

    const [passwordVisibile, setPasswordVisibile] = useState(false);
    const [checkPasswordVisibile, setCheckPasswordVisibile] = useState(false);




    const updateUserPasswordMutation = useMutation({
        mutationFn: ({ oldPassword, newPassword }: { oldPassword: string, newPassword: string }) => updateUserPassword({ oldPassword, newPassword }),
        onSuccess: () => {
            showToast({ type: 'success', message: 'رمز عبور با موفقیت تغییر کرد' })
            queryClient.invalidateQueries({ queryKey: ['getUserQuery'] });
        },
        onError: (e: any) => {
            showToast({ type: 'error', message: e?.message })
            console.log(e)
        }
    })

    const setUserPasswordMutation = useMutation({
        mutationFn: (password: string) => setUserPassword(password),
        onSuccess: () => {
            showToast({ type: 'success', message: 'رمز عبور با موفقیت تنظیم شد.' })
            queryClient.invalidateQueries({ queryKey: ['getUserQuery'] });
        },
        onError: (e: any) => {
            showToast({ type: 'error', message: e?.message })
            console.log(e)
        }
    })

    const formik = useFormik({
        initialValues: { oldPassword: '', newPassword: '', checkNewPassword: '' },
        validationSchema: schema,
        onSubmit: async ({ oldPassword, newPassword, checkNewPassword }) => {
            updateUserPasswordMutation.mutate({ oldPassword, newPassword });
        }
    })
    const { errors, touched, handleChange, handleSubmit, values } = formik;


    const formik2 = useFormik({
        initialValues: { password: '', checkPassword: '' },
        validationSchema: schema2,
        onSubmit: async ({ password }) => {
            setUserPasswordMutation.mutate(password);
        }
    })
    const { errors: errors2, touched: touched2, handleChange: handleChange2, handleSubmit: handleSubmit2, values: values2 } = formik2;


    return (
        <div className="h-full w-full flex flex-col">
            {
                error ?
                    <div className="h-full w-full flex items-center justify-center">
                        <p className="text-center text-xl font-semibold text-red-500">مشکلی پیش آمده است, بعدا دوباره تلاش کنید.</p>
                    </div>
                    :
                    <>
                        <div className="mt-2">
                            <h1 className="text-lg font-semibold">تغییر رمز عبور</h1>
                        </div>

                        {!loading ? user && !user?.password &&
                            <div className="w-full my-8 ">
                                <div className="p-4 flex flex-col gap-1 bg-warning-300 text-warning-800 rounded-md ">
                                    <div className="flex gap-0.5">
                                        <GoDotFill size={14} className="mt-1 text-warning-800" />
                                        <p className="font-medium">شما با حساب جیمیل خود این اکانت را ساخته‌اید و در حال حاضر رمز عبوری ندارید. برای ورود به سایت می‌توانید از گزینه «ورود با جیمیل» استفاده کنید. با تنظیم رمز عبور، حساب کاربری شما به طور کامل فعال خواهد شد.</p>
                                    </div>

                                </div>
                            </div> : ''}

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
                                <>
                                    {user && user?.password ?
                                        <form className="h-full w-full flex flex-col" onSubmit={handleSubmit}>

                                            <div className="w-full mt-6">
                                                <div className="w-full">

                                                    <Input onChange={handleChange} placeholder="رمز عبور فعلی" dir='ltr' name="oldPassword" id="oldPassword" labelPlacement="outside" type={oldPasswordVisibile ? "text" : "password"}
                                                        startContent={
                                                            <button className="focus:outline-none" type="button" onClick={() => setOldPasswordVisibile(!oldPasswordVisibile)} aria-label="toggle password visibility">
                                                                {oldPasswordVisibile ? (
                                                                    <FiEye className="text-xl text-default-400 pointer-events-none" />
                                                                ) : (
                                                                    <FiEyeOff className="text-xl text-default-400 pointer-events-none" />
                                                                )}
                                                            </button>
                                                        }
                                                        label="رمز عبور فعلی" size="lg" radius="sm" variant="bordered" color="secondary"
                                                        classNames={{ label: 'font-medium' }}
                                                        isInvalid={!!errors.oldPassword && !!touched.oldPassword}
                                                        errorMessage={errors.oldPassword} value={values.oldPassword} />

                                                    <div className="my-8 lg:my-6 items-center grid lg:grid-cols-2 gap-x-4 gap-y-8 lg:gap-6">
                                                        <Input onChange={handleChange} placeholder="رمز عبور جدید" dir='ltr' name="newPassword" id="newPassword" labelPlacement="outside" type={newPasswordVisibile ? "text" : "password"}
                                                            startContent={
                                                                <button className="focus:outline-none" type="button" onClick={() => setNewPasswordVisibile(!newPasswordVisibile)} aria-label="toggle password visibility">
                                                                    {newPasswordVisibile ? (
                                                                        <FiEye className="text-xl text-default-400 pointer-events-none" />
                                                                    ) : (
                                                                        <FiEyeOff className="text-xl text-default-400 pointer-events-none" />
                                                                    )}
                                                                </button>
                                                            }
                                                            label="رمز عبور جدید" size="lg" radius="sm" variant="bordered" color="secondary"
                                                            classNames={{ label: 'font-medium' }}
                                                            isInvalid={!!errors.newPassword && !!touched.newPassword}
                                                            errorMessage={errors.newPassword} value={values.newPassword} />

                                                        <Input onChange={handleChange} placeholder="تکرار رمز عبور جدید" dir='ltr' name="checkNewPassword" id="checkNewPassword" labelPlacement="outside" type={checkNewPasswordVisibile ? "text" : "password"}
                                                            startContent={
                                                                <button className="focus:outline-none" type="button" onClick={() => setCheckNewPasswordVisibile(!checkNewPasswordVisibile)} aria-label="toggle password visibility">
                                                                    {checkNewPasswordVisibile ? (
                                                                        <FiEye className="text-xl text-default-400 pointer-events-none" />
                                                                    ) : (
                                                                        <FiEyeOff className="text-xl text-default-400 pointer-events-none" />
                                                                    )}
                                                                </button>
                                                            }
                                                            label="تکرار رمز عبور جدید" size="lg" radius="sm" variant="bordered" color="secondary"
                                                            classNames={{ label: 'font-medium' }}
                                                            isInvalid={!!errors.checkNewPassword && !!touched.checkNewPassword}
                                                            errorMessage={errors.checkNewPassword} value={values.checkNewPassword} />
                                                    </div>

                                                </div>
                                            </div>


                                            {!loading && !error &&
                                                <div className="w-full mt-auto flex justify-end" onClick={() => handleSubmit()}>
                                                    <Button disabled={updateUserPasswordMutation.isPending} type="submit" color="secondary" radius="sm" variant="shadow" className="w-full mt-8 lg:w-max text-base text-white font-medium">
                                                        {updateUserPasswordMutation.isPending ? <Spinner className="text-white" /> : 'تغییر رمز عبور'}
                                                    </Button>
                                                </div>}
                                        </form>
                                        :
                                        <form className="h-full w-full flex flex-col" onSubmit={handleSubmit2}>

                                            <div className="w-full mt-6">
                                                <div className="w-full">

                                                    <div className="my-8 lg:my-6 items-center grid lg:grid-cols-2 gap-x-4 gap-y-8 lg:gap-6">

                                                        <Input onChange={handleChange2} placeholder="رمز عبور" dir='ltr' name="password" id="password" labelPlacement="outside" type={passwordVisibile ? "text" : "password"}
                                                            startContent={
                                                                <button className="focus:outline-none" type="button" onClick={() => setPasswordVisibile(!passwordVisibile)} aria-label="toggle password visibility">
                                                                    {passwordVisibile ?
                                                                        <FiEye className="text-xl text-default-400 pointer-events-none" />
                                                                        :
                                                                        <FiEyeOff className="text-xl text-default-400 pointer-events-none" />
                                                                    }
                                                                </button>
                                                            }
                                                            label="رمز عبور" size="lg" radius="sm" variant="bordered" color="secondary"
                                                            classNames={{ label: 'font-medium' }}
                                                            isInvalid={!!errors2.password && !!touched2.password}
                                                            errorMessage={errors2.password} value={values2.password} />

                                                        <Input onChange={handleChange2} placeholder="تکرار رمز عبور " dir='ltr' name="checkPassword" id="checkPassword" labelPlacement="outside" type={checkPasswordVisibile ? "text" : "password"}
                                                            startContent={
                                                                <button className="focus:outline-none" type="button" onClick={() => setCheckPasswordVisibile(!checkPasswordVisibile)} aria-label="toggle password visibility">
                                                                    {checkPasswordVisibile ?
                                                                        <FiEye className="text-xl text-default-400 pointer-events-none" />
                                                                        :
                                                                        <FiEyeOff className="text-xl text-default-400 pointer-events-none" />
                                                                    }
                                                                </button>
                                                            }
                                                            label="تکرار رمز عبور " size="lg" radius="sm" variant="bordered" color="secondary"
                                                            classNames={{ label: 'font-medium' }}
                                                            isInvalid={!!errors2.checkPassword && !!touched2.checkPassword}
                                                            errorMessage={errors2.checkPassword} value={values2.checkPassword} />
                                                    </div>

                                                </div>
                                            </div>

                                            {!loading && !error &&
                                                <div className="w-full mt-auto flex justify-end">
                                                    <Button disabled={setUserPasswordMutation.isPending} type="submit" color="secondary" radius="sm" variant="shadow" className="w-full mt-8 lg:w-max text-base text-white font-medium">
                                                        {setUserPasswordMutation.isPending ? <Spinner className="text-white" /> : 'تنظیم رمز عبور'}
                                                    </Button>
                                                </div>}
                                        </form>
                                    }
                                </>
                        }
                    </>}
        </div >
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
