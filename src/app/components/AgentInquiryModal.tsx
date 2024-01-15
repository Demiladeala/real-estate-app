import React from 'react'
import { useModalStore } from '../Store/ModalStore'
import { X } from 'lucide-react'

type Props = {}

const AgentInquiryModal = (props: Props) => {
    const { closeModal } = useModalStore((state) => state)
  return (
    <div className='z-[100] fixed top-0 w-full h-screen bg-black/40 flex justify-center items-start'>
        <div className='relative w-[95%] md:w-[40%] lg:w-[30%] mt-8 bg-white shadow-md px-4 py-5 rounded-2xl'>
            <X onClick={closeModal} className='absolute top-2 right-2 cursor-pointer' />
            <h3 className='py-4 text-xl text-center font-semibold'>Thank you for Interest</h3>
            <p className='w-[95%] mx-auto text-center'>An agent will follow up soon! Please check your email for more details</p>
        </div>
    </div>
  )
}

export default AgentInquiryModal