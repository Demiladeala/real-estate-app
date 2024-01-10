import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

type PropertyType = {
    id: number;
    propertyType?: string;
    address?:string;
}

const HomeFilter = () => {
    const { data } = useQuery({
        queryKey: ["userProperties"],
        queryFn: async () => {
          const { data } = await axios.get("/api/properties")
          return data
        },
      })
      const [searchInput, setSearchInput] = useState('')
      const uniqueCategories:string[] = Array.from(new Set(data?.map((category: PropertyType) => category.propertyType)));

      const filteredAddresses = data?.filter((property:PropertyType) => property.address?.toLowerCase().includes(searchInput.toLowerCase())
      ) || [];

  return (
    <div className="w-[90%] z-10 absolute max-[350px]:left-[1rem] max-[400px]:left-[1.2rem] left-[1.5rem] md:left-[2rem] lg:left-[6rem] bottom-[3.5rem] max-[400px]:bottom-[2.5rem] md:bottom-[10rem] mt-4 md:mt-8 md:w-[80%] py-5 px-2 rounded bg-white/70 flex flex-col md:flex-row-reverse gap-5">

        <div className="relative w-full basis-[100%] md:basis-[50%] flex">
            <input
            className="relative w-[90%] outline-none text-sm md:text-base py-3 px-3 rounded-bl rounded-tl"
            type="search" 
            placeholder="Address, School, City or Neighborhood"
            onChange={(e) => setSearchInput(e.target.value)} />
            <div className="w-[10%] bg-white py-2 rounded-tr rounded-br">
            <button className="absolute right-[2px] top-[5px] bg-[#222] text-white w-7 h-7 flex items-center justify-center rounded-full">
                <FiSearch />
            </button>
            </div>
            {(searchInput !== "") && (
          <div className={`absolute z-[11] top-[2.5rem] w-[90%] ${filteredAddresses.length > 1 ? "h-[6rem] md:h-[8rem]" : "h-full"} mt-1 bg-[#fefefedc] rounded-b shadow-md overflow-y-scroll`}>
            {filteredAddresses.length > 0 ? (
              <ul>
                {filteredAddresses.map((property: PropertyType, index: number) => (
                  <li key={index} className="w-full py-2 px-3 cursor-pointer hover:bg-gray-200">
                    {property.address}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-600">
                No addresses found.
              </div>
            )}
          </div>
        )}
        </div>

        <div className="w-full basis-[100%] md:basis-[50%] flex items-center gap-5">
            <div className="basis-[100%]">
            <select className="w-full bg-white py-3 outline-none rounded placeholder:text-xs" name="" id="">
                <option value="">Category</option>
                {uniqueCategories &&
                uniqueCategories.map((categoryName: string, index: number):React.ReactNode => (
                <option key={index} value={categoryName}>
                  {categoryName}
                </option>
              ))}
            </select>
            </div>
        </div>
    
    </div>
  )
}

export default HomeFilter