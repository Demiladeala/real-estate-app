"use client"
import React,{ ReactNode } from 'react'
import { useModalStore } from '../Store/ModalStore';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';

type Props = {
    children: ReactNode;
}

const ModalLayout = ({children}: Props) => {
    const { openModal, currentModal, closeModal } = useModalStore((state) => state)
    return (
        <div>
            {currentModal === 1 && <LoginModal />}
            {currentModal === 2 && <SignupModal />}
            {children}
        </div>
    )
}

export default ModalLayout