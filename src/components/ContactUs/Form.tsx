'use client';
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import * as Yup from "yup";
import { useFormik } from "formik";
 

const schema = Yup.object().shape({
    name: Yup.string().required("لطفا نام خود را وارد کنید"),
    email: Yup.string().email("ایمیل نامعتبر").required("لطفا ایمیل را وارد کنید"),
    desc: Yup.string().required("لطفا پیام خود را بنویسید"),
    subject: Yup.string().required("لطفا موضوع را انتخاب کنید"),
});

const ContactUsForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            desc: "",
            name: "",
            subject: "",
        },
        validationSchema: schema,
        onSubmit: async ({ email, desc, name, subject }) => {
            console.log("Form Data:", { email, desc, name, subject });
        },
    });

    const { errors, touched, handleChange, handleSubmit, values, setFieldValue } = formik;

    return (
        <div className="w-full flex justify-center">
            <form className="w-full px-4 py-8 max-w-[28rem] lg:max-w-[35rem] dark:bg-primary-50 flex flex-col gap-6 rounded-2xl border-primary-400 border-2 shadow-medium" onSubmit={handleSubmit}>
                
                <h2 className="text-2xl lg:text-4xl font-bold text-[#475466] dark:text-white text-center">فرم تماس باما</h2>

                <Input 
                    radius="md"
                    size="lg"
                    color="primary"
                    variant="bordered"
                    isRequired
                    label="نام"
                    labelPlacement="outside"
                    name="name"
                    placeholder="نام"
                    errorMessage={touched.name && errors.name ? errors.name : ""}
                    value={values.name}
                    onChange={handleChange}
                />

               
                <Input
                    radius="md"
                    size="lg"
                    color="primary"
                    variant="bordered"
                    isRequired
                    label="ایمیل"
                    labelPlacement="outside"
                    name="email"
                    type="email"
                    placeholder="ایمیل"
                    errorMessage={touched.email && errors.email ? errors.email : ""}
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
                    isRequired
                    label="موضوع"
                    labelPlacement="outside"
                    name="subject"
                    placeholder="انتخاب موضوع"
                    errorMessage={touched.subject && errors.subject ? errors.subject : ""}
                    onChange={(value) => setFieldValue("subject", value)}
                >
                    <SelectItem key="ar" value="مشکل در خرید">
                        مشکل در خرید
                    </SelectItem>
                    <SelectItem key="us" value="مشکل در دانلود">
                        مشکل در دانلود
                    </SelectItem>
                    <SelectItem key="ca" value="درخواست دوره">
                        درخواست دوره
                    </SelectItem>
                    <SelectItem key="au" value="سایر">
                        سایر
                    </SelectItem>
                </Select>


                <Textarea
                    radius="md"
                    size="lg"
                    color="primary"
                    variant="bordered"
                    isRequired
                    label="پیام"
                    labelPlacement="outside"
                    name="desc"
                    placeholder="پیام خود را بنویسید"
                    errorMessage={touched.desc && errors.desc ? errors.desc : ""}
                    value={values.desc}
                    onChange={handleChange}
                    rows={10}
                />

           
                <Button type="submit" className="mt-4" size="lg" variant="shadow" color="primary" radius="md" fullWidth>
                    ارسال پیام
                </Button>
            </form>
        </div>
    );
};

export { ContactUsForm };
