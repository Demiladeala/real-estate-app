import Image from 'next/image'
import React from 'react'
import expert1 from '../../../public/expert-1.jpg'
import expert2 from '../../../public/expert-2.jpg'
import expert3 from '../../../public/expert-3.jpg'
import { PaintBucket, UserRoundCog, Lightbulb } from 'lucide-react'
import { Fade } from 'react-awesome-reveal'

type Props = {}

const Experts = (props: Props) => {
  return (
    <>
    <Fade triggerOnce>
    <div className='mt-20 md:mt-28 w-[90%] md:w-[95%] mx-auto'>
        <h2 className='text-xl md:text-3xl text-[#222]'>Our expert will help you <br /> make <strong> the renovation</strong></h2>
        
        <div className='w-full py-3 flex flex-col max-lg:gap-16 lg:flex-row'>

            <div className='md:basis-[50%] w-full'>
                <div className='w-full mt-8'>
                    <div className='w-full flex items-start gap-3'>
                    <Lightbulb size={44} color="#222" strokeWidth={0.75} />
                        <div className='basis-[75%]'>
                            <h2 className='text-lg md:text-xl font-semibold'>Find Inspiration</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus explicabo necessitatibus voluptate laudantium facere</p>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-6'>
                    <div className='w-full flex items-start gap-3'>
                    <UserRoundCog size={44} color="#222" strokeWidth={0.75} />
                        <div className='basis-[75%]'>
                            <h2 className='text-lg md:text-xl font-semibold'>Find Architect/Designer</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus explicabo necessitatibus voluptate laudantium facere</p>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-6'>
                    <div className='w-full flex items-start gap-3'>
                        <PaintBucket size={44} color="#222" strokeWidth={0.75} />
                        <div className='basis-[75%]'>
                            <h2 className='text-lg md:text-xl font-semibold'>Begin Renovation</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus explicabo necessitatibus voluptate laudantium facere</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full relative flex gap-3 items-center lg:items-start h-[20rem] md:h-[30rem] lg:basis-[50%] lg:top-[-4rem]'>
                <div className='basis-[50%] w-full h-[80%] m-auto rounded-xl border'>
                    <Image
                    src={expert1}
                    alt='expert'
                    className='w-full h-full object-cover bg-center bg-no-repeat rounded-xl' />
                </div>

                <div className='basis-[50%] w-full h-full flex flex-col gap-3 items-start'>
                    <div className='basis-[50%] w-full h-full m-auto rounded-xl'>
                        <Image
                        src={expert2}
                        alt='expert'
                        className='w-full h-full object-cover bg-center bg-no-repeat rounded-xl' />
                    </div>
                    <div className='basis-[50%] w-full h-full m-auto rounded-xl'>
                        <Image
                        src={expert3}
                        alt='expert'
                        className='w-full h-full object-cover bg-center bg-no-repeat rounded-xl' />
                    </div>
                </div>
            </div>

        </div>
    </div>
    </Fade>
    </>
  )
}

export default Experts