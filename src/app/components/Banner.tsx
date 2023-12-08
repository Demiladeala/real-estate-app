import React from 'react'
import Image from 'next/image'
import { CgArrowLongRight } from "react-icons/cg";
import banner from '../../../public/banner-image.png'


type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='relative w-[95%] mx-auto my-20 px-4 py-4 md:py-20 md:mt-24 mb-8 bg-white box-shadow rounded-2xl'>
        <div className='relative md:top-[0rem] md:absolute right-4'>
            <Image 
            alt='banner'
            src={banner}
            />
        </div>

        <div>
            <h3 className='font-semibold text-2xl md:text-3xl'>Are you actively looking?</h3>
            <p className='mt-3 text-lg md:text-xl'>Contact us, we have the best options for you.</p>
            <button className='relative text-white mt-4 px-4 py-3 rounded-xl flex gap-4 items-center font-semibold bg-[#222] hover:opacity-95'>
                <p>Get A Quote</p>
                <CgArrowLongRight size={25}/>
            </button>
        </div>
    </div>
  )
}

export default Banner