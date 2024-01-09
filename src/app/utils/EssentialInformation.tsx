import React from 'react'
import Line from './Line'

type Props = {
    information:string;
    value:string | number;
    className?: string;
}

const EssentialInformation = ({ information, value, className }: Props) => {
  return (
    <>
        <div className='mt-4 w-full flex justify-between items-center font-medium'>
            <h2>{information}</h2>
            <h3>{value}</h3>
        </div>
        <Line className={className} />
    </>
  )
}

export default EssentialInformation