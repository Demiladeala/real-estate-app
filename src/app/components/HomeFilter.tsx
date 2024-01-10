import React from 'react'
import { FiSearch } from 'react-icons/fi'


const HomeFilter = () => {
  return (
    <div className="w-[90%] z-10 absolute max-[350px]:left-[1rem] max-[400px]:left-[1.2rem] left-[1.5rem] md:left-[2rem] lg:left-[6rem] bottom-[3.5rem] md:bottom-[10rem] mt-4 md:mt-8 md:w-[80%] py-5 px-2 rounded bg-white/70 flex flex-col md:flex-row-reverse gap-5">

        <div className="relative w-full basis-[100%] md:basis-[50%] flex">
            <input
            className="relative w-[90%] outline-none text-sm md:text-base py-2 px-3 rounded-bl rounded-tl"
            type="search" 
            placeholder="Address, School, City or Neighborhood" />
            <div className="w-[10%] bg-white py-2 rounded-tr rounded-br">
            <button className="absolute right-[2px] top-[5px] bg-[#222] text-white w-7 h-7 flex items-center justify-center rounded-full">
                <FiSearch />
            </button>
            </div>
        </div>

        <div className="w-full basis-[100%] md:basis-[50%] flex items-center gap-5">
            <div className="basis-[100%]">
            <select className="w-full bg-white py-2 outline-none rounded placeholder:text-xs" name="" id="">
                <option value="">Category</option>
                <option value="">Flat/Apartment</option>
                <option value="">Condominium</option>
                <option value="">Detached Bungalow</option>
                <option value="">Detached Duplex</option>
                <option value="">Land</option>
                <option value="">Commercial Properties</option>
            </select>
            </div>
        </div>
    
    </div>
  )
}

export default HomeFilter