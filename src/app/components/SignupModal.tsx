import { X } from 'lucide-react'
import React, { useEffect } from 'react'
import { useModalStore } from '../Store/ModalStore'
import Image from 'next/image'
import google from "../../../public/google.png"
import { signIn, useSession  } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {}

const SignupModal = (props: Props) => {
  const { data: session} = useSession();
  const router = useRouter();
  const { closeModal, openModal } = useModalStore((state) => state)
  const openLoginModal = () => {
    closeModal();
    openModal(1);
  }
  const handleSignUp = () => {
    router.push('/');
   signIn('google');
  };

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <div className='z-[100] fixed top-0 w-full h-screen bg-black/40 flex justify-center items-center'>
      <div className='relative w-[95%] md:w-[40%] lg:w-[30%] bg-white px-4 py-8  shadow-md rounded-2xl'>
        <X onClick={closeModal} className='absolute top-2 right-2 cursor-pointer' />
        <h3 className='py-4 text-xl text-center font-semibold'>Login or Create an account</h3>
        <button onClick={handleSignUp} className='flex items-center justify-center gap-4 mt-2 w-full px-2 py-3 rounded-xl border border-gray-400 placeholder:text-[#666]'>
          <Image src={google} alt="google" width={30} height={30}/>
          <h4>Sign Up with google</h4>
        </button>
        <p className='mt-2 text-sm w-full text-center'>Have an account already? <span onClick={openLoginModal} className='underline cursor-pointer'>Sign In</span></p>
      </div>
    </div>
  )
}

export default SignupModal