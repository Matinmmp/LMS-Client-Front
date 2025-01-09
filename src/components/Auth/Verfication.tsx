import { activation } from '@/src/lib/apis/authApis';
import { showToast } from '@/src/utils/toast';
import { Button } from '@nextui-org/button'
import { ModalBody, ModalHeader } from '@nextui-org/modal'
import { Spinner } from '@nextui-org/spinner'
import { useMutation } from '@tanstack/react-query';
import React, { FC, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { convertToEnglishNumbers } from '@/src/utils/functions';

type Props = {
    setRoute: (route: string) => void
    setOpen: (opne: boolean) => void

}

type VerifyNumber = {
    "0": string,
    "1": string,
    "2": string,
    "3": string,
}

const Verification: FC<Props> = ({ setRoute,setOpen }) => {
    const { token } = useSelector((state: any) => state.auth)

    const activationMutation = useMutation({
        mutationFn: (data: { activation_token: string, activation_code: string }) => activation(data),
        onSuccess: (e: any) => {
            setRoute('Login')
 
            showToast({ type: 'success', message: 'ثبت نام با موفقیت انجام شد' });
        },
        onError: (e) => {
            showToast({ type: 'error', message: e.message });
        }
    })

    const [invalidError, setInvalidError] = useState<boolean>(false);
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ]


    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        "0": "",
        "1": "",
        "2": "",
        "3": "",
    })

    const verificationHandler = async () => {
        const verificationNumber = Object.values(verifyNumber).join("");
        if (verificationNumber.length !== 4) {
            setInvalidError(true);
            return;
        }
        await activationMutation.mutate({
            activation_token: token,
            activation_code: convertToEnglishNumbers(verificationNumber)
        })
    }

    const handleInputChange = (index: number, value: string) => {
        setInvalidError(false);
        const newVerifyNumber = { ...verifyNumber, [index]: value }
        setVerifyNumber(newVerifyNumber);

        if (value === "" && index > 0)
            inputRefs[index - 1].current?.focus();
        else if (value.length === 1 && index < 3)
            inputRefs[index + 1].current?.focus();
    }

    return (
        <div className="h-max max-h-[25rem] flex flex-col ">
            <ModalHeader className="flex flex-col relative">
                <p className={`p-2 mt-4 text-center font-semibold text-3xl text-primary-400`}>
                    فعال سازی حساب
                </p>

                {/* <div className='w-full mt-4 flex items-center justify-center'>
                    <MdOutlineVpnKey size={70} className='text-primary' />
                </div> */}
            </ModalHeader>

            <ModalBody className='gap-1'>



                <div className='m-auto flex items-center gap-3 justify-around' dir='ltr'>
                    {
                        Object.keys(verifyNumber).map((key, index) =>
                            <input type="text" key={index} ref={inputRefs[index]} placeholder={''} maxLength={1}
                                value={verifyNumber[key as keyof VerifyNumber]}
                                onChange={((e) => handleInputChange(index, e.target.value))}
                                className={`w-[60px] h-[60px] bg-transparent border-[3px] rounded-[10px] flex items-center justify-center text-black dark:text-white text-xl outline-none text-center
                                ${invalidError ? "shake border-red-500" : "dark:border-white border-[#0000004a]"}`} />
                        )
                    }
                </div>

                <div className='my-2'>
                    <div className='bg-danger-200 rounded-lg p-2'>
                        <p className='text-danger-600 text-[0.85rem] font-semibold'>لطفا ایمیل خود را چک کنید .در صورت نبود ایمیل فعال سازی پوشه ی اسپم را هم چک کنید.</p>

                    </div>
                </div>


                <div className='mt-6'>
                    <Button onClick={verificationHandler}
                        disabled={activationMutation.isPending}
                        color="primary" variant="shadow" elementType={'button'} radius="md" className="w-full max-w-full text-lg" size="lg">
                        {activationMutation.isPending ? <Spinner color="secondary"/> : 'تایید رمز'}
                        
                    </Button>

                </div>


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

export default Verification