import { useModalStore } from '../Store/ModalStore'
import { X } from 'lucide-react'

const InquireModal = () => {
  const { closeModal } = useModalStore((state) => state)
  return (
    <div className='z-[100] fixed top-0 w-full h-screen bg-black/40 flex justify-center items-center'>
      <div className='relative bg-white shadow-md p-20 rounded-lg'>
          <X onClick={closeModal} className='absolute top-2 right-2 cursor-pointer' />
          Inquire
      </div>
    </div>
  )
}

export default InquireModal