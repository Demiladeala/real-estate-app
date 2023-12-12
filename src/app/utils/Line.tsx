import React from 'react'

type Props = {
  className?:string;
}

const Line = ({ className }: Props) => {
  return (
    <div className={`w-full h-px bg-gray-200 my-3 ${className}`}></div>
  )
}

export default Line