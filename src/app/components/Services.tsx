import React from 'react'
import { Building, FileText, UserRoundCheck, KeyRound } from "lucide-react"

type Props = {}

const Services = (props: Props) => {
  return (
    <>
        <div className='mt-20 md:mt-24 w-[95%] mx-auto'>
            <h2 className='mb-12 text-2xl md:text-3xl text-[#222] max-md:hidden'>Find a <strong>perfect home</strong></h2>


            <div className='flex flex-col md:flex-row items-center gap-3 text-gray-500'>
                <div>
                    <div className='max-md:w-[70%] mx-auto'>
                        <div className='flex items-center justify-center md:items-end md:justify-start'>
                            <Building className='relative top-4' size={45} height={70} color='#222' strokeWidth={0.75}/>
                        </div>
                        <h3 className='mt-3 text-gray-800 font-semibold max-md:text-center'>Find real estate</h3>
                        <p className='max-md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque!</p>
                    </div>
                </div>
                <div className="w-px h-32 bg-gray-200 max-md:hidden"></div>

                <div className='mt-8'>
                    <div className='max-md:w-[70%] mx-auto'>
                        <div className='flex items-center justify-center md:items-start md:justify-start'>
                        <UserRoundCheck size={45} color="#222" strokeWidth={0.75} />
                        </div>
                        <h3 className='mt-2 text-gray-800 font-semibold max-md:text-center'>Meet Realtor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque!</p>
                    </div>
                </div>
                <div className="w-px h-32 bg-gray-200 max-md:hidden"></div>
                
                <div className='mt-8'>
                    <div className='max-md:w-[70%] mx-auto'>
                        <div className='flex items-center justify-center md:items-start md:justify-start'>
                        <FileText size={45} color='#222' strokeWidth={0.75} />
                        </div>
                        <h3 className='mt-2 text-gray-800 font-semibold max-md:text-center'>Documents</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque!</p>
                    </div>
                </div>
                <div className="w-px h-32 bg-gray-200 max-md:hidden"></div>

                <div className='mt-8'>
                    <div className='max-md:w-[70%] mx-auto'>
                        <div className='flex items-center justify-center md:items-start md:justify-start'>
                        <KeyRound size={45} color="#222" strokeWidth={0.75} />
                        </div>
                        <h3 className='mt-2 text-gray-800 font-semibold max-md:text-center'>Take the Keys</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque!</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Services