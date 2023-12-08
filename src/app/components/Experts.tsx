import React from 'react'

type Props = {}

const Experts = (props: Props) => {
  return (
    <>
    <div className='mt-20 md:mt-24 w-[90%] md:w-[95%] mx-auto'>
        <h2 className='text-xl md:text-3xl text-[#222]'>Our expert will help you <br /> make <strong> the renovation</strong></h2>
        
        <div className='w-full py-3 flex flex-col md:flex-row'>

            <div className='md:basis-[50%]'>
                <div>
                    <div className='flex items-center gap-3'>
                        {/*  */}
                        <div>
                            <h2>Find Inspiration</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center gap-3'>
                        {/*  */}
                        <div>
                            <h2>Find Inspiration</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center gap-3'>
                        {/*  */}
                        <div>
                            <h2>Find Inspiration</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:basis-[50%] flex gap-3 items-center'>
                <div className=''>

                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Experts