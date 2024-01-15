"use client"
import { useModalStore } from '../Store/ModalStore'
import { X } from 'lucide-react'
import Input from '../utils/Input';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const InquireModal = () => {
  const { closeModal, openModal } = useModalStore((state) => state);
  const[name, setName ] = useState('');
  const[email, setEmail ] = useState('');
  const[phoneNumber, setPhoneNumber ] = useState('');
  const[message, setMesage] = useState('');
  const [loading, setLoading] = useState(false);
  const success = () => toast.success('Message sent successfully');
  const issue = () => {
    toast.error('Error sending message. Please try again later.');
  } 
  const openSuccessModal = () => {
    closeModal();
    openModal(4);
  }

  const isdisabled = name === '' || email === '' || phoneNumber === '' || message === '';

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_serviceId;
    const templateId = process.env.NEXT_PUBLIC_templateId;
    const publicKey = process.env.NEXT_PUBLIC_publicKey;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params:{
        from_name: name,
        from_email: email,
        to_name: 'Elite Homes',
        message: message,
        to_phone: phoneNumber, 
      }
    }

    try {
      setLoading(true);
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      if(res.status === 200){
      setLoading(false);
      setName('');
      setEmail('');
      setMesage('');
      setPhoneNumber('');
      success();
      setTimeout(() => {
        openSuccessModal();
      },1000);
      }
    } catch (error) {
      setLoading(false);
      issue();
    }
  }

  return (
    <>
    <Toaster />
    <div className='z-[100] fixed top-0 w-full h-screen bg-black/40 flex justify-center items-center'>
      <div className='relative w-[95%] md:w-[40%] lg:w-[30%] bg-white px-4 py-5  shadow-md rounded-2xl'>
          <X onClick={closeModal} className='absolute top-2 right-2 cursor-pointer' />
          <h3 className='py-4 text-2xl text-center font-semibold'>Make Inquiry</h3>
          <form onSubmit={handleSubmit}>
            <Input 
            type='text' required={true} placeholder='Full name' className='mb-2' value={name}
            onChange={(e) => setName(e.target.value)}/>
            <Input type='email' required={true} placeholder='Email' className='mb-2' value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <Input type='number' required={true} placeholder='Phone No.' className='mb-2' value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}/>
            <Input type='text' required={true} placeholder='How can an agent help?' className='text-sm pb-12' value={message}
            onChange={(e) => setMesage(e.target.value)}/>
          <div className='mt-3 w-full flex items-center justify-center'>
            <button
            disabled={isdisabled} 
            className={`${isdisabled ? "bg-opacity-80 cursor-not-allowed" : ""} bg-[#222] w-full text-white py-3 rounded-2xl hover:opacity-95 flex items-center justify-center`}>
              {loading ? "Loading..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default InquireModal