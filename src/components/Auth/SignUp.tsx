import { loginWithGoogle, registration } from "@/src/lib/apis/authApis"
import { getUserInfo } from "@/src/lib/apis/userApis"
import { userLoggedIn, userRegistration } from "@/src/redux/auth/authSlice"
import { convertToEnglishNumbers } from "@/src/utils/functions"
import { showToast } from "@/src/utils/toast"
import { Button } from "@nextui-org/button"

import { Input } from "@nextui-org/input"
import { ModalBody, ModalHeader } from "@nextui-org/modal"
import { Spinner } from "@nextui-org/spinner"
import { GoogleLogin } from "@react-oauth/google"
import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import { FC, useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux"
import * as Yup from 'yup'


type Props = {
    setRoute: (route: string) => void
    setOpen: (opne: boolean) => void
}

const schema = Yup.object().shape({
    name: Yup.string().required('لطفا نام خود را وارد کنید'),
    // phone: Yup.string()
    //     .matches(/^09\d{9}$/, 'شماره موبایل باید با 09 شروع شود و ۱۱ رقم باشد')
    //     .required('لطفا شماره موبایل را وارد کنید'),
    email: Yup.string().email('ایمیل نامعتبر').required('لطفا ایمیل را وارد کنید'),
    password: Yup.string().required('لطفا رمز عبور را وارد کنید').min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
})

const SignUp: FC<Props> = ({ setRoute, setOpen }) => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const registrationMutation = useMutation({
        mutationFn: (data: { name: string, email: string, password: string }) => registration(data),
        onSuccess: (e: any) => {
            setRoute('Verification')
            dispatch(userRegistration({ token: e.activationToken }))
            showToast({ type: 'success', message: e.message });
        },
        onError: (e) => {
            showToast({ type: 'error', message: e.message });
        }
    })

    const formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ name, email, password }) => {
            await registrationMutation.mutate({ name, email: convertToEnglishNumbers(email), password: convertToEnglishNumbers(password) })
        }
    })

    const { errors, touched, handleChange, handleSubmit, values } = formik;

    const getUserMutation = useMutation({
        mutationFn: () => getUserInfo(),
        onMutate: () => dispatch(userLoggedIn({ loading: true })),
        onSuccess: (e) => dispatch(userLoggedIn(e)),
        onError: (e: any) => {
            e.loading = false;
            dispatch(userLoggedIn(e));
        },
        onSettled: (e: any) => {
            e.loading = false;
            dispatch(userLoggedIn(e));
        }
    })

    const loginMutationWithGoogle = useMutation({
        mutationFn: (token: string) => loginWithGoogle(token),
        onSuccess: (e) => {
            location?.reload();
            dispatch(userLoggedIn(e))
            getUserMutation.mutate();
            setOpen(false);
            showToast({ type: 'success', message: 'با موفقیت وارد شدید' });
        },
        onError: () => {
            showToast({ type: 'error', message: 'ایمیل یا رمز عبور اشتباه است' });
        },
    })

    const handleSuccess = (credentialResponse: any) => {
        loginMutationWithGoogle.mutate(credentialResponse?.credential)
    };

    const handleError = () => {
        console.error('Login Failed');
    };


    return (
        <div className="h-max max-h-[40rem] flex flex-col ">
            <ModalHeader className="flex flex-col relative">
                <p className={`p-2 mt-4 text-center font-semibold text-3xl text-primary-400`}>
                    ثبت نام
                </p>

            </ModalHeader>

            <ModalBody className="pt-2">
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-col gap-3">
                        <Input onChange={handleChange} placeholder="رضا رضایی" id="name" name="name" labelPlacement="outside" type="text" label="نام" size="lg" radius="sm"
                            variant="bordered" color="primary" classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }}
                            isInvalid={!!errors.name && !!touched.name}
                            errorMessage={errors.name} value={values.name} />

                        <Input onChange={handleChange} placeholder="you@example.com" dir='ltr' id='email' name="email" labelPlacement="outside" type="email" label="ایمیل" size="lg" radius="sm"
                            variant="bordered" color="primary" classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }}
                            isInvalid={!!errors.email && !!touched.email}
                            errorMessage={errors.email} value={values.email} />

                        <Input onChange={handleChange} placeholder="password" dir='ltr' name="password" id="password" labelPlacement="outside" type={isVisible ? "text" : "password"}
                            startContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                    {isVisible ? (
                                        <FiEye className="text-xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <FiEyeOff className="text-xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            label="رمز عبور" size="lg" radius="sm" variant="bordered" color="primary"
                            classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }}
                            isInvalid={!!errors.password && !!touched.password}
                            errorMessage={errors.password} value={values.password} />

                        <div className="mt-4">
                        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                        </div>


                    </div>


                    <div className="mt-4">

                        <Button fullWidth type="submit" disabled={registrationMutation.isPending} color="primary" variant="shadow" elementType={'button'} radius="md" size="lg">
                            {registrationMutation.isPending ? <Spinner color="secondary" /> : 'ثبت نام'}
                        </Button>

                    </div>

                </form>

                <div className="mt-2">
                    <Button fullWidth onPress={() => setRoute('Login')} color="secondary" variant="bordered" radius="md" size="lg">ورود</Button>
                </div>
            </ModalBody>
        </div>
    )
}

export default SignUp