"use client"
import { useQuery } from "@tanstack/react-query";
import { useFilter } from "../context/SearchContext";
import axios from "axios";
import { useEffect } from "react";
import HomeFilter from "./HomeFilter";
import Experts from "./Experts";
import ClientsMarquee from "./ClientsMarquee";
import LoadingSkeleton from "../utils/LoadingSkeleton";
import PropertiesCard from "./PropertiesCard";

type Props = {
    id: number;
    images: string[];
    name: string;
    description: string;
    address: string;
    price: number;
    bedrooms?: number;
    bathrooms?: number;
    sqft: number;
    features: string[];
    propertyType: string;
    type: string;
    status: string;
    monthlyPayment?: number | null;
    nearbySchools: string[];
    communicationInfo: string;
    acre?: number;
    createdAt: string;
    updatedAt: string;
  }

const Search = () => {
    const { searchInput, selectedCategory, updateDropdown, searchButtonPressed } = useFilter();
    const {data, isPending, isError, error } = useQuery({
      queryKey: ["userProperties"],
      queryFn: async () => {
        const { data } = await axios.get("/api/properties")
        return data
      },
    })
    
    const filteredProperties = data?.filter((property: Props) => {
      const isCategoryMatch = !selectedCategory || property.propertyType === selectedCategory;
      const isAddressMatch =
        !searchInput || property.address.toLowerCase().includes(searchInput.toLowerCase());
  
      return searchButtonPressed && isCategoryMatch && isAddressMatch;
    });

    useEffect(() => {
      updateDropdown(false);
    }, []);
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }

  return (
    <div className='relative mt-20'>
         <HomeFilter editClass="relative top-0" changeBg={true}/>

        <div className='w-[95%] lg:w-[98%] mx-auto mt-8'>
            <h2 className='font-semibold text-xl lg:text-2xl'>Search <span className='font-normal'>For Property</span>:</h2>

            <div className='my-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4'>
            {
            isPending ? (
            <>
            {Array.from({ length: 12 }, (_, index) => (
                <LoadingSkeleton key={index} />
              ))}
            </> ) : 
            filteredProperties.length === 0 ? (
            <div className="w-full absolute  text-center text-gray-600 my-8">
              No properties match the selected criteria.
            </div>
          ) : (
            <>
            {filteredProperties.map((property:Props) => (
              <PropertiesCard key={property.id} {...property} />
            ))}
            </>
            )}
            </div>

            <Experts />
        </div>
        <ClientsMarquee />
    </div>
  )
}

export default Search