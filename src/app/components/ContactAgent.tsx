import React from 'react'
import Input from '../utils/Input'

type Props = {}

const ContactAgent = (props: Props) => {
  return (
    <div>
        <h2 className='font-medium text-lg text-center'>More about this property</h2>

        <Input type='text' placeholder='Full Name'/>
        <Input type='email' placeholder='Email'/>
        <Input type='tel' placeholder='Phone No.'/>
        <Input type='text' placeholder='How can an agent help?' className='text-sm pb-12' />

        <div className='mt-3 w-full flex items-center justify-center'>
            <button className='bg-[#222] w-full text-white py-3 rounded-2xl hover:opacity-95'>Commit</button>
        </div>
    </div>
  )
}

export default ContactAgent