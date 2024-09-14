import React, { FC, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";


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
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/30 backdrop-opacity-40",
                    base: "bg-[#ffffff] dark:bg-[#19191e]  backdrop-blur ",

                    closeButton: "hidden",
                }}>
                <ModalContent>
                    {Component}

                </ModalContent>
            </Modal>
        </>
    );
}
export default CustomeModal
