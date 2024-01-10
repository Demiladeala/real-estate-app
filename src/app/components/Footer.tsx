import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo-footer.png'

type Props = {}

const Footer = (props: Props) => {
  const year = new Date();
  const currentYear =  year.getFullYear();

  return (
    <footer className='w-full h-full py-8 md:pt-12 px-5 md:px-6 footer-bg'>
        <div className='flex flex-col gap-5 md:pb-6 md:flex-row md:justify-between md:items-start'>
          <div className='w-full md:pl-6'>
            <Image 
            alt='footer-logo'
            src={logo}
            />
            <div className='mt-2'>
              <p>A Fullstack website designed specifically for real estate and property showcase websites</p>
            </div>
            <div className='flex items-center gap-2'>

            </div>
          </div>

          <div className='w-full md:pl-6'>
            <h2 className='font-semibold'>Contact us</h2>
            <div className='mt-2 space-y-1'>
              <h3>Abuja, Nigeria</h3>
              <h4>07013071320</h4>
              <h4>07063634353</h4>
              <h4>demiladeala@gmail.com</h4>
            </div>
          </div>

          <div className='w-full md:pl-6'>
            <h2 className='font-semibold'>Categories</h2>
            <div className='mt-2 space-y-1'>
              <h3>Recent property</h3>
              <h4>To Sell</h4>
              <h4>To Buy</h4>
              <h4>To Rent</h4>
            </div>
          </div>

          <div className='w-full md:pl-6'>
            <h2 className='font-semibold'>Links</h2>
            <div className='mt-2 space-y-1'>
              <h3>Latest News</h3>
              <h4>About us</h4>
              <h4>FAQ Page</h4>
              <h4>Contact us</h4>
            </div>
          </div>
        </div>

        <div className='w-full mx-auto my-6 h-px bg-gray-300'></div>

        <div>
          <h3 className='max-md:text-sm text-center'>Ala Oluwademilade <strong>@{currentYear}. </strong>all rights reserved</h3>
        </div>
    </footer>
  )
}

export default Footer