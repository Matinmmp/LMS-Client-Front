
import { login } from "@/src/lib/apis/authApis"
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
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { getUserInfo } from "@/src/lib/apis/userApis"

type Props = {
    setRoute: (route: string) => void
    setOpen: (opne: boolean) => void
}

const schema = Yup.object().shape({
    email: Yup.string().email('ایمیل نامعتبر').required('لطفا ایمیل را وارد کنید'),
    password: Yup.string().required('لطفا رمز عبور را وارد کنید').min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
})

interface LoginInfo {
    email: string;
    password: string;
}

const Login: FC<Props> = ({ setRoute, setOpen }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(!!localStorage.getItem('loginInfo'));
    const toggleVisibility = () => setIsVisible(!isVisible);
    const { data } = useSession();



    let loginInfoString = localStorage.getItem('loginInfo');
    let loginInfo: LoginInfo | null = null;

    if (loginInfoString) {
        loginInfo = JSON.parse(loginInfoString);
    }

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



    const loginMutation = useMutation({
        mutationFn: (data: { email: string, password: string }) => login(data),
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

        onSettled: () => {
            if (searchParams?.get('openLogin')) {
                router.replace('/');
            }
        }
    })


    const formik = useFormik({
        initialValues: { email: loginInfo?.email || "", password: loginInfo?.password || "" },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            if (rememberMe)
                localStorage.setItem('loginInfo', JSON.stringify({ password, email }))
            else
                localStorage.removeItem('loginInfo');
            await loginMutation.mutate({ email, password })
        }
    })

    const { errors, touched, handleChange, handleSubmit, values } = formik;



    return (
        <div className="h-max max-h-[35rem] flex flex-col ">
            <ModalHeader className="flex flex-col relative">
                <p className={`p-2 mt-4 text-center font-semibold text-3xl text-primary-400`}>
                    ورود به سایت
                </p>

            </ModalHeader>

            <ModalBody className="pt-2">
                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-5">

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

                        <div className="flex px-1 justify-between">
                            <Checkbox classNames={{ label: "text-small" }} isSelected={rememberMe} onValueChange={setRememberMe}>
                                منو یادت باشه
                            </Checkbox>
                            <p className="text-small text-secondary cursor-pointer" onClick={() => setRoute('FotgetPassword')}>رمزتو فراموش کردی ؟</p>
                        </div>

                        <div className="w-full flex gap-2 items-center justify-center cursor-pointer" onClick={() => signIn('google')}>
                            <p className="text-sm font-semibold mt-1">ورود با گوگل</p>
                            <FcGoogle size={24} />
                        </div>
                    </div>

                    <div className="mt-7">

                        <Button type="submit" disabled={loginMutation.isPending} color="primary" variant="shadow" elementType={'button'} radius="md" className="w-full max-w-full text-lg" size="lg">
                            {loginMutation.isPending ? <Spinner color="secondary" /> : 'ورود'}
                        </Button>

                    </div>

                </form>

                <div className="">
                    <div className="mt-2 flex items-center justify-center gap-1 font-semibold">
                        <p>عضو نیستی ؟</p>
                        <span className="text-secondary cursor-pointer" onClick={() => setRoute('Sign-Up')}>عضویت</span>
                    </div>
                </div>

            </ModalBody>
        </div>
    )
}

export default Login