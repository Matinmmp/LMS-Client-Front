'use client'
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const MotionComponent = dynamic(() =>
    import("framer-motion").then((mod) => mod.motion.div)
);

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const Drawer = ({ children, isOpen, setIsOpen }: Props) => {

    useEffect(() => {
        const html = document.getElementById('html');

        if (html)
            if (isOpen) html.style.overflowY = 'hidden';
            else html.style.overflowY = 'auto';

    }, [isOpen])

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <MotionComponent
                        className="z-[52] backdrop-blur-sm backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={() => setIsOpen(false)}>

                    </MotionComponent>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <MotionComponent
                        className="flex flex-col z-[60] h-full bg-content1q w-[19rem] shadow-small overflow-y-hidden fixed right-0 top-0 bottom-0
                        backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/90 dark:bg-[#131d35eb]"
                        initial={{ x: "100%" }}  // Starts off-screen on the right
                        animate={{ x: "0%" }}     // Animates into view
                        exit={{ x: "100%" }}      // Exits to the right
                        transition={{ duration: 0.2, ease: "easeIn" }}
                    >
                        {children}
                    </MotionComponent>
                )}
            </AnimatePresence>

        </>
    );
};

export default Drawer;
