import React from 'react'

type Props = {
    type: string;
    placeholder?: string;
    className?: string;
    value?: string | number | readonly string[] | undefined;
    name?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    required?: boolean;
}

const Input = ({ type, placeholder, className, value, name, onChange, required }: Props) => {
  return (
    <>
        <input 
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        className={`mt-2 w-full p-2 rounded-lg border border-gray-400 placeholder:text-[#666] ${className} outline-none`} 
        />
    </>
  )
}

export default Input