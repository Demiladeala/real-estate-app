"use client"
import React,{ ReactNode } from 'react'
import { useModalStore } from '../Store/ModalStore';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';
import InquireModal from '../components/InquireModal';

type Props = {
    children: ReactNode;
}

const ModalLayout = ({children}: Props) => {
    const {currentModal} = useModalStore((state) => state)
    return (
        <div>
            {currentModal === 1 && <LoginModal />}
            {currentModal === 2 && <SignupModal />}
            {currentModal === 3 && <InquireModal />}
            {children}
        </div>
    )
}

export default ModalLayout