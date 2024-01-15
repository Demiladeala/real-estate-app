"use client"
import { useModalStore } from '../Store/ModalStore'
import { X } from 'lucide-react'
import InquireForm from './InquireForm';
const InquireModal = () => {
  const { closeModal, openModal } = useModalStore((state) => state);
  return (
    <>
    <div className='z-[100] fixed top-0 w-full h-screen bg-black/40 flex justify-center items-center'>
      <div className='relative w-[95%] md:w-[40%] lg:w-[30%] bg-white px-4 py-5  shadow-md rounded-2xl'>
          <X onClick={closeModal} className='absolute top-2 right-2 cursor-pointer' />
          <h3 className='py-4 text-2xl text-center font-semibold'>Make Inquiry</h3>
          <InquireForm />
      </div>
    </div>
    </>
  )
}

export default InquireModal