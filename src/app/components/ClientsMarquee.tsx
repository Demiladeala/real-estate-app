import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import logo1 from '../../../public/logo1.png'
import logo2 from '../../../public/logo2.png'
import logo3 from '../../../public/logo3.png'
import logo4 from '../../../public/logo4.png'
import logo5 from '../../../public/logo5.png'
import logo6 from '../../../public/logo6.png'

type Props = {}

const ClientsMarquee = (props: Props) => {
  return (
    <div className='mt-28 lg:mt-20 w-full py-5 bg-gray-300'>
        <Marquee pauseOnHover>
            <div>
                <Image 
                alt='clients'
                src={logo1}
                className='mr-24'
                />
            </div>
            <div>
                <Image 
                alt='clients'
                src={logo2}
                className='mr-24'
                />
            </div>
            <div>
                <Image 
                alt='clients'
                src={logo3}
                className='mr-24'
                />
            </div>
            <div>
                <Image 
                alt='clients'
                src={logo4}
                className='mr-24'
                />
            </div>
            <div>
                <Image 
                alt='clients'
                src={logo5}
                className='mr-24'
                />
            </div>
            <div>
                <Image 
                alt='clients'
                src={logo6}
                className='mr-24'
                />
            </div>
            <div>
                <Image 
                alt='clients'
                src={logo3}
                className='mr-24'
                />
            </div>
        </Marquee>
    </div>
  )
}

export default ClientsMarquee