import { getUserInfo, login } from "@/src/lib/authApis"
import { userLoggedIn } from "@/src/redux/auth/authSlice"
import { showToast } from "@/src/utils/toast"
import { Button } from "@nextui-org/button"
import { Checkbox } from "@nextui-org/checkbox"
import { Input } from "@nextui-org/input"
import { ModalBody, ModalHeader } from "@nextui-org/modal"
import { Spinner } from "@nextui-org/spinner"
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
    email: Yup.string().email('ایمیل نامعتبر').required('لطفا ایمیل را وارد کنید'),
    password: Yup.string().required('لطفا پسور را وارد کنید').min(6, 'پسورد باید حداقل ۶ کاراکتر باشد')
})

const Login: FC<Props> = ({ setRoute, setOpen }) => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const getUserMutation = useMutation({
        mutationFn: () => getUserInfo(),
        onSuccess: (e) => {
            console.log(e)
            dispatch(userLoggedIn(e))
        }
    })

    const loginMutation = useMutation({
        mutationFn: (data: { email: string, password: string }) => login(data),
        onSuccess: (e) => {
            dispatch(userLoggedIn(e))
            setOpen(false);
            showToast({ type: 'success', message: 'با موفقیت وارد شدید' });
        },
        onError: () => {
            showToast({ type: 'error', message: 'ایمیل یا رمز عبور اشتباه است' });
        }
    })



    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {

            await loginMutation.mutate({ email, password })
        }
    })

    const { errors, touched, handleChange, handleSubmit } = formik;


    return (
        <div className="h-max max-h-[30rem] flex flex-col ">
            <ModalHeader className="flex flex-col relative">
                <p className={`p-2 mt-4 text-center font-semibold text-3xl text-primary-400`}>
                    ورود به سایت
                </p>

                {/* <div className="-mt-14 p-4 flex justify-center rounded-full bg-[#ffffff] dark:bg-[#19191e] backdrop-blur absolute -top-4 left-1/2 transform -translate-x-1/2 z-[100] ">
                    <Image priority alt="logo" className="w-20 h-20 md:w-24 md:h-24" height={200} width={200} src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "logo-main.png"} />
                </div> */}
            </ModalHeader>

            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5">
                        {/* <Input placeholder="رضا رضایی" labelPlacement="outside" type="text" label="نام" size="lg" radius="sm"
                            variant="bordered" color="primary" classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }} /> */}

                        <Input onChange={handleChange} placeholder="you@example.com" dir='ltr' id='email' name="email" labelPlacement="outside" type="email" label="ایمیل" size="lg" radius="sm"
                            variant="bordered" color="primary" classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }}
                            isInvalid={!!errors.email && !!touched.email}
                            errorMessage={errors.email} />

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
                            label="پسور" size="lg" radius="sm" variant="bordered" color="primary"
                            classNames={{ label: 'font-semibold text-base dark:text-white top-7 -ms-2' }}
                            isInvalid={!!errors.password && !!touched.password}
                            errorMessage={errors.password} />

                        <div className="flex px-1 justify-between">
                            <Checkbox classNames={{ label: "text-small" }} >
                                منو یادت باشه
                            </Checkbox>
                            <p className="text-small text-secondary cursor-pointer" onClick={() => setRoute('FotgetPassword')}>رمزتو فراموش کردی ؟</p>

                        </div>
                    </div>


                    <div className="mt-5">
                        <button className="w-full">
                            <Button disabled={loginMutation.isPending} color="primary" variant="shadow" elementType={'button'} radius="md" className="w-full max-w-full text-lg" size="lg">
                                {loginMutation.isPending ? <Spinner color="primary" /> : 'ورود'}
                            </Button>
                        </button>
                    </div>

                </form>

                <div className="mt-2">
                    <div className="mt-2 flex items-center justify-center gap-1 font-semibold">
                        <p>عضو نیستی ؟</p>
                        <span className="text-secondary cursor-pointer" onClick={() => setRoute('SignUp')}>عضویت</span>
                    </div>
                </div>
            </ModalBody>
        </div>
    )
}

export default Login