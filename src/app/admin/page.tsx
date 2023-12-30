"use client"
import { AlignJustify, Home, Layers3, LayoutDashboard, Settings } from 'lucide-react'
import React, { useState } from 'react'
import Line from '../utils/Line'
import { useModalStore } from '../Store/ModalStore'
import Input from '../utils/Input'

type Props = {}

const page = (props: Props) => {
  const { openModal, currentModal, closeModal } = useModalStore((state) => state)
  const [nav, setNav] = useState(true);

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full'>
        <div className='w-full flex'>
            {/* SIDE NAV */}
            <div className='hidden px-2 py-8 bg-slate-800 lg:flex flex-col gap-4 items-center  text-white'>
              <div className='w-full text-sm flex flex-col items-center gap-1'>
              <LayoutDashboard />
              <h2 className=''>Dashboard</h2>
              </div>

              <div className='w-full text-sm flex flex-col items-center gap-1'>
              <Layers3 />
                <h2 className=''>Properties</h2>
              </div>

              <div className='w-full text-sm flex flex-col items-center gap-1'>
              <Settings />
              <h2 className=''>Settings</h2>
              </div>

            </div>

            {/* MAIN SECTION */}
            <section className='w-full py-3'>
              <div className='w-[90%] md:w-[95%] mx-auto'>
                <AlignJustify 
                size={20}
                onClick={toggleNav} 
                className='cursor-pointer text-sm text-slate-600'/>

                <div className='mt-8'>
                  <h2 className='w-full bg-white p-2 rounded-lg shadow'>Property / Add New Property</h2>

                  <main className='mt-7 w-full bg-white p-2 rounded-lg shadow lg:px-4'>
                    <div className="mt-5 flex items-center gap-3">
                      <div className='relative cursor-pointer'>
                        <h2 className='text-dark-800 font-semibold'>Add Property</h2>
                        <Line className='absolute top-3 bg-orange-600'/>
                      </div>

                      <div className='relative cursor-pointer'>
                        <h2>Add Land </h2>
                      </div>
                    </div>

                    <div className='w-full h-px bg-gray-100 mt-5'></div>

                    <div className='w-full mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5'>
                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Property Name</h4>
                        <Input type='text' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Property Type</h4>
                        <Input type='text' placeholder='office,villa,apartment' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Property Status</h4>
                        <select className='mt-2 w-full text-sm text-[#6e6e6e] p-2 rounded-lg border border-gray-400 outline-none placeholder:text-sm placeholder:text-[#6e6e6e]'>
                          <option value="1">For Sale</option>
                          <option value="1">For Rent</option>
                        </select>
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Beds</h4>
                        <select className='mt-2 w-full text-sm text-[#6e6e6e] p-2 rounded-lg border border-gray-400 outline-none placeholder:text-sm placeholder:text-[#6e6e6e]'>
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="1">5</option>
                          <option value="1">6</option>
                        </select>
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Baths</h4>
                        <select className='mt-2 w-full text-sm text-[#6e6e6e] p-2 rounded-lg border border-gray-400 outline-none placeholder:text-sm placeholder:text-[#6e6e6e]'>
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="1">5</option>
                          <option value="1">6</option>
                        </select>
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Sqft</h4>
                        <Input type='number' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Monthly Payment(Optional)</h4>
                        <Input type='number' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Other Information</h4>
                        <Input type='number' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Nearby Schools</h4>
                        <Input type='text' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                    </div>

                    <div className='my-5'>
                        <h4 className='text-[#3d4465] font-medium'>Description</h4>
                        <textarea rows={5}  className='mt-2 w-full text-sm text-[#6e6e6e] p-2 rounded-lg border border-gray-400 outline-none placeholder:text-sm placeholder:text-[#6e6e6e] resize-none'>

                        </textarea>
                    </div>

                    <div>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                    />
                    </div>

                    <div className='w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-5'>
                      
                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Address</h4>
                        <Input type='text' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Property Price</h4>
                        <Input type='number' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                    </div>

                  </main>
                </div>
              </div>
            </section>
        </div>
    </div>
  )
}

export default page