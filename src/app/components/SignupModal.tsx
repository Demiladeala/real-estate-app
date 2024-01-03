import { X } from 'lucide-react'
import React from 'react'
import { useModalStore } from '../Store/ModalStore'

type Props = {}

const SignupModal = (props: Props) => {
    const { closeModal } = useModalStore((state) => state)
  return (
    <div className='z-[100] fixed top-0 w-full h-screen bg-black/40 flex justify-center items-center'>
        <div className='relative bg-white shadow-md p-20 rounded-lg'>
            <X onClick={closeModal} className='absolute top-2 right-2 cursor-pointer' />
            SignUp
        </div>
    </div>
  )
}

export default SignupModal