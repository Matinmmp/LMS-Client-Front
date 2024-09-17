import React, { FC, useEffect } from "react";
import { Modal, ModalContent} from "@nextui-org/modal";


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
            <Modal backdrop={'blur'} radius="md" isOpen={open} onClose={() => setOpen(false)} style={{ overflow: 'initial' }}
                placement="center"
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/30 backdrop-opacity-40",
                    base: "bg-[#ffffff] dark:bg-[#19191e]  backdrop-blur w-full max-w-[90%] md:max-w-[25rem]",
                    closeButton: "hidden",
                }}>
                <ModalContent>
                    <Component setOpen={setOpen} setRoute={setRoute} />
                </ModalContent>
            </Modal>
        </>
    );
}
export default CustomeModal
