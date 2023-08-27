'use client';

import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children: ReactNode;
    modalHeader?: string;
}

export default function Modal(props: ModalProps) {
    const {
        isOpen,
        setIsOpen,
        modalHeader,
        children,
    } = props;

    return (
        <>
            {
                createPortal((
                    <div
                        className={`${!isOpen && "hidden"} fixed inset-0 bg-[rgba(0,0,0,0.5)] ${isOpen && "flex justify-center items-center"} z-50 `}
                        onClick={() => setIsOpen(false)}
                    >
                        <div
                            className="w-5/6 md:4/5 p-3 lg:p-6 modal-content bg-white rounded-lg transition-colors duration-300 "
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex w-full justify-end my-3">
                                <CloseIcon
                                    onClick={() => setIsOpen(false)}
                                    fontSize="large"
                                    className="cursor-pointer"
                                />
                            </div>
                            {
                                modalHeader && <h3 className="text-2xl lg:text-3xl my-3 text-center">{modalHeader}</h3>
                            }
                            <Divider variant="middle" />
                            <div className="w-full h-4/5 p-5 flex flex-col gap-3 my-3 overflow-y-auto overscroll-y-auto">
                                {children}
                            </div>
                        </div>
                    </div>
                ), document.body)
            }
        </>
    );
}