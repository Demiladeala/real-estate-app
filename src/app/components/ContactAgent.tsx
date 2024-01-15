import React from 'react'
import Input from '../utils/Input'
import InquireForm from './InquireForm'

type Props = {}

const ContactAgent = (props: Props) => {
  return (
    <div>
        <h2 className='font-medium text-lg text-center'>More about this property</h2>
        <InquireForm />
    </div>
  )
}

export default ContactAgent