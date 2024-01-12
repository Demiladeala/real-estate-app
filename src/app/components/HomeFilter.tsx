"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useFilter } from '../context/SearchContext';

type PropertyType = {
    id: number;
    propertyType?: string;
    address?:string;
}

type Props = {
  classname?: string;
}


const HomeFilter = ({ classname } : Props) => {
  const router = useRouter();
  const { data } = useQuery({
      queryKey: ["userProperties"],
      queryFn: async () => {
        const { data } = await axios.get("/api/properties")
        return data
      },
    })
  const { searchInput, selectedCategory, updateSearchInput, 
    updateSelectedCategory, updateDropdown, searchDropdown, searchNavigation} = useFilter();
  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const uniqueCategories:string[] = Array.from(new Set(data?.map((category: PropertyType) => category.propertyType)));

  const filteredAddressesSet = new Set<string>();

  const filteredAddresses = data?.filter((property: PropertyType) => {
  const address = property.address?.toLowerCase();
  const includesSearchInput = address?.includes(searchInput.toLowerCase());

  if (includesSearchInput && !filteredAddressesSet.has(address!)) {
    filteredAddressesSet.add(address!);
    return true;
  }

  return false;
}) || [];

  const isSearchDisabled = !selectedCategory || !searchInput || !isAddressSelected;

  const handleAddressClick = useCallback(
    (address: string) => {
      updateSearchInput(address);
      updateDropdown(false);
      setIsAddressSelected(true);
    },
    [updateSearchInput, updateDropdown]
  );
  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const category = e.target.value;
      updateSelectedCategory(category);
    },
    [updateSelectedCategory]
  );
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateSearchInput(e.target.value);
      updateDropdown(true);
    },
    [updateSearchInput, updateDropdown]
  );

  return (
    <div className={`${classname} w-[90%] z-10 absolute max-[350px]:left-[1rem] max-[400px]:left-[1.2rem] left-[1.5rem] md:left-[2rem] lg:left-[6rem] bottom-[3.5rem] max-[400px]:bottom-[2.5rem] md:bottom-[10rem] mt-4 md:mt-8 md:w-[80%] py-5 px-2 rounded bg-white/70 flex flex-col md:flex-row-reverse gap-5`}>

      <div className="relative w-full basis-[100%] md:basis-[50%] flex">
          <input
          className={`relative w-[90%] outline-none text-sm md:text-base py-3 px-3 rounded-bl rounded-tl placeholder:text-gray-700`}
          type="search" 
          placeholder="Search for Address in available locations"
          onChange={handleInputChange}
          value={searchInput} />

          <div className="w-[10%] bg-white py-2 rounded-tr rounded-br">
            <button 
            onClick={searchNavigation}
            disabled={isSearchDisabled}
            className={` absolute right-[2px] top-[8px] bg-[#222] text-white w-7 h-7 flex items-center justify-center rounded-full 
            ${isSearchDisabled ? 'cursor-not-allowed opacity-50' : ''
            }`}>
                <FiSearch />
            </button>
          </div>

          {(searchDropdown && searchInput!=="") && (
            <div className={`absolute z-[11] top-[2.5rem] w-[90%] ${filteredAddresses.length > 1 ? "h-[6rem] md:h-[8rem]" : "h-full"} mt-1 bg-[#fefefedc] rounded-b shadow-md overflow-y-scroll`}>
              {filteredAddresses.length > 0 ? (
                <ul>
                  {filteredAddresses.map((property: PropertyType, index: number) => (
                    <li key={index} 
                    className="w-full py-2 px-3 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleAddressClick(property.address || '')}>
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
          <select className="w-full bg-white py-3 outline-none rounded placeholder:text-xs"
          onChange={handleCategoryChange}
          >
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