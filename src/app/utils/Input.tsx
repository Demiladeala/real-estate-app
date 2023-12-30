import React from 'react'

type Props = {
    type: string;
    placeholder?: string;
    className?: string;
}

const Input = ({ type, placeholder, className }: Props) => {
  return (
    <>
        <input 
        type={type}
        placeholder={placeholder}
        className={`mt-2 w-full p-2 rounded-lg border border-gray-400 placeholder:text-[#666] ${className} outline-none`} 
        />
    </>
  )
}

export default Input