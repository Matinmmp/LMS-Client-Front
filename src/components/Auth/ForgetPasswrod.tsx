import { activation, forgetPassword, registration } from '@/src/lib/apis/authApis';
import { convertToEnglishNumbers } from '@/src/utils/functions';
import { showToast } from '@/src/utils/toast';
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input';
import { ModalBody, ModalHeader } from '@nextui-org/modal'
import { Spinner } from '@nextui-org/spinner'
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import React, { FC, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

type Props = {
    setRoute: (route: string) => void
    setOpen: (opne: boolean) => void
}

const schema = Yup.object().shape({
    email: Yup.string().email('ایمیل نامعتبر').required('لطفا ایمیل را وارد کنید'),
})


const ForgetPassword: FC<Props> = ({ setRoute, setOpen }) => {

    const forgetPasswrodMutation = useMutation({
        mutationFn: (email: string) => forgetPassword(email),
        onSuccess: (e: any) => {
            showToast({ type: 'success', message: e.message });
        },
        onError: (e) => {
            showToast({ type: 'error', message: e.message });
        }
    })

    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: schema,
        onSubmit: async ({ email }) => {
            console.log(email)
            await forgetPasswrodMutation.mutate(email)
        }
    })

    const { errors, touched, handleChange, handleSubmit, values } = formik;


    return (
        <div className="h-max max-h-[50rem] flex flex-col ">
            <ModalHeader className="flex flex-col relative">
                <p className={`p-2 mt-4 text-center font-semibold text-3xl text-primary-400`}>
                    فراموشی رمزعبور
                </p>

            </ModalHeader>

            <ModalBody className='gap-1 pt-2'>
                <p className="text-secondary-500 text-sm font-medium">ایمیلی که رمزعبور آن را فراموش کرده اید را وارد کنید.</p>
                <p className="text-secondary-500 text-sm font-medium">ایمیلی با رمز عبور جدید برای شما ارسال میشود از رمزعبور جدید برای ورود استفاده کنید.</p>
                <p className="text-secondary-500 text-sm font-medium">بلافاصله پس از ورود رمز خود را از قسمت تغییر رمزعبور در پروفایل خود تغییر دهید.</p>
               
                <form onSubmit={handleSubmit} className='pt-6'>


                    <Input onChange={handleChange} placeholder="you@example.com" dir='ltr' id='email' name="email" labelPlacement="outside" type="email" label="ایمیل" size="lg" radius="sm"
                        variant="bordered" color="primary" classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }}
                        isInvalid={!!errors.email && !!touched.email}
                        errorMessage={errors.email} value={values.email} />


                    <div className='mt-6'>
                        <Button type="submit" color="primary" variant="shadow" elementType={'button'} radius="md" className="w-full max-w-full text-lg" size="lg">
                            ارسال رمزعبور
                        </Button>

                    </div>
                </form>


                <h5 className='mt-6 text-center font-semibold '>
                    وارد شدن ؟
                    <span className='text-[#2190ff] pl-1 cursor-pointer ps-1 ' onClick={() => setRoute('Login')}>
                        ورور
                    </span>
                </h5>


                <div className=" flex items-center justify-center gap-1 font-semibold">
                    <p>عضو نیستی ؟</p>
                    <span className="text-secondary cursor-pointer" onClick={() => setRoute('Sign-Up')}>عضویت</span>
                </div>

            </ModalBody>
        </div>
    )
}

export default ForgetPassword