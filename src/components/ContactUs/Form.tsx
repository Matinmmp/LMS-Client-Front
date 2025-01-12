'use client';
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { sendFormEmail } from "@/src/lib/apis/fromApis";
import { showToast } from "@/src/utils/toast";
import { Spinner } from "@nextui-org/spinner";


const schema = Yup.object().shape({
    name: Yup.string().required("لطفا نام خود را وارد کنید"),
    email: Yup.string().email("ایمیل نامعتبر").required("لطفا ایمیل را وارد کنید"),
    desc: Yup.string().required("لطفا پیام خود را بنویسید"),
    subject: Yup.string().required("لطفا موضوع را انتخاب کنید"),
});

const list = ["مشکل در خرید", "مشکل در دانلود", "درخواست دوره", "سایر"]

const ContactUsForm = () => {
    const formik = useFormik({
        initialValues: { email: "", desc: "", name: "", subject: "" },
        validationSchema: schema,
        onSubmit: async ({ email, desc, name, subject }) => {
            postFormMutation.mutate({ email, message: desc, name, subject: list[+subject] })
            console.log("Form Data:", { email, desc, name, subject: list[+subject] });
        },
    });

    const { errors, touched, handleChange, handleSubmit, values, setFieldValue,resetForm } = formik;

    const postFormMutation = useMutation({
        mutationFn: ({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) =>
            sendFormEmail({ name, email, subject, message }),
        onSuccess: () => {
            showToast({ type: 'success', message: 'پیام با موفقیت ارسال شد.' });
            resetForm();
        },
        onError: () => showToast({ type: 'error', message: 'خطایی پیش آمده است.' })
    })


    return (
        <div className="w-full flex justify-center">
            <form onSubmit={handleSubmit} className="w-full px-4 py-8 max-w-[28rem] lg:max-w-[35rem] dark:bg-primary-50 flex flex-col gap-6 rounded-2xl border-primary-400 border-2 shadow-medium">

                <h2 className="text-2xl lg:text-4xl font-bold text-[#475466] dark:text-white text-center">فرم تماس باما</h2>

                <Input
                    radius="md"
                    size="lg"
                    color="primary"
                    variant="bordered"
                    label="نام"
                    labelPlacement="outside"
                    name="name"
                    placeholder="نام"
                    isInvalid={!!errors.name && !!touched.name}
                    errorMessage={errors.name}
                    value={values.name}
                    onChange={handleChange}
                />


                <Input
                    radius="md"
                    size="lg"
                    color="primary"
                    variant="bordered"
                    label="ایمیل"
                    labelPlacement="outside"
                    name="email"
                    type="email"
                    placeholder="ایمیل"
                    isInvalid={!!errors.email && !!touched.email}
                    errorMessage={errors.email}
                    value={values.email}
                    onChange={handleChange}
                />


                <Select
                    value={values.subject}
                    radius="md"
                    size="lg"
                    color="primary"
                    variant="bordered"
                    className="w-full"
                    label="موضوع"
                    labelPlacement="outside"
                    name="subject"
                    placeholder="انتخاب موضوع"
                    isInvalid={!!errors.subject && !!touched.subject}
                    errorMessage={errors.subject}
                    onChange={(value) => setFieldValue("subject", value?.target?.value)}
                >
                    {
                        list.map((item, index: number) =>
                            <SelectItem key={index} value={item}>
                                {item}
                            </SelectItem>)
                    }


                </Select>


                <Textarea
                    radius="md"
                    size="lg"
                    color="primary"
                    variant="bordered"
                    label="پیام"
                    labelPlacement="outside"
                    name="desc"
                    placeholder="پیام خود را بنویسید"
                    isInvalid={!!errors.desc && !!touched.desc}
                    errorMessage={errors.desc}
                    value={values.desc}
                    onChange={handleChange}
                    classNames={{ input: 'min-h-40' }}
                />


                <Button disabled={postFormMutation.isPending} type="submit" className="mt-4" size="lg" variant="shadow" color="primary" radius="md" fullWidth>
                    {postFormMutation.isPending ? <Spinner color="secondary" /> : ' ارسال پیام'}
                </Button>
            </form>
        </div>
    );
};

export { ContactUsForm };
