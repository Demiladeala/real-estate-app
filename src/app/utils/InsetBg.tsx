import React from 'react'

type Props = {
  opacity?: string
}

const InsetBg = ({ opacity }: Props) => {
  return (
    <>
    <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-30 ${opacity} rounded-xl`}></div>
    </>
  )
}

export default InsetBg