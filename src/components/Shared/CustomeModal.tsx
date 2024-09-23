import React, { FC, useEffect } from "react";
import { Modal, ModalContent } from "@nextui-org/modal";
import { IoIosCloseCircleOutline } from "react-icons/io";


type Props = {
    open: boolean,
    setOpen: (open: boolean) => void,
    component: any,
    setRoute?: (route: string) => void,
}


const CustomeModal: FC<Props> = ({ open, setOpen, component: Component, setRoute }) => {

    useEffect(() => {
        const html = document.getElementById('html');

        if (html)
            if (open) html.style.overflowY = 'hidden';
            else html.style.overflowY = 'auto';

    }, [open])

    return (
        <>
            <Modal backdrop={'blur'} radius="md" isOpen={open} isDismissable={false} onClose={() => setOpen(false)} style={{ overflow: 'initial' }}
                placement="center"
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/30 backdrop-opacity-40",
                    base: "bg-[#ffffff] dark:bg-[#19191e]  backdrop-blur w-full max-w-[90%] md:max-w-[25rem]",
                    closeButton: "hidden",
                }}>

                <ModalContent className="relative">
                    <span className="absolute top-2 right-2 z-50">
                        <IoIosCloseCircleOutline size={35} className="text-primary cursor-pointer" onClick={() => setOpen(false)} />
                    </span>
                    <Component setOpen={setOpen} setRoute={setRoute} />
                </ModalContent>
            </Modal>
        </>
    );
}
export default CustomeModal
