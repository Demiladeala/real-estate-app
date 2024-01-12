import React from 'react'

type Props = {}

const SearchListings = (props: Props) => {
  return (
    <>
        <div className='w-full flex flex-wrap gap-5 py-2 mb-8 px-3'>
            <div className="w-[90%] md:w-[60%] lg:w-[30%]">
                  <input
                  className="relative w-full bg-transparent outline-none text-sm md:text-base p-2 border border-[#222] rounded-lg placeholder:text-[#222]"
                  type="search" 
                  placeholder="Address, School, City or Neighborhood" />
            </div>

            <div className=''>
                <select 
                className='outline-none border border-[#222] py-2 px-5 rounded-lg'>
                    <option value="">Category</option>
                </select>
            </div>

            <div className=''>
                <select 
                className='outline-none border border-[#222] py-2 px-5 rounded-lg'>
                    <option value="">Min Price</option> 
                </select>
            </div>

            <div className=''>
                <select 
                className='outline-none border border-[#222] py-2 px-5 rounded-lg'>
                    <option value="">Max Price</option> 
                </select>
            </div>
            
            <div className=''>
                <select 
                className='outline-none border border-[#222] py-2 px-5 rounded-lg'>
                    <option value="">Bedroom</option>
                </select>
            </div>

            <div className=''>
                <select 
                className='outline-none border border-[#222] py-2 px-5 rounded-lg'>
                    <option value="">Bathroom</option>
                </select>
            </div>

            <div className=''>
                <select 
                className='outline-none border border-[#222] py-2 px-5 rounded-lg'>
                    <option value="">Features</option>
                </select>
            </div>

            <div className=''>
                <select 
                className='outline-none border border-[#222] py-2 px-5 rounded-lg'>
                    <option value="">Newest</option>
                </select>
            </div>

            <div className='max-lg:w-full block lg:flex'>
                <button className='max-lg:w-full py-2 px-8 bg-[#222] text-white rounded-lg hover:opacity-90'>Search</button>
            </div>
        </div>
    </>
  )
}

export default SearchListings