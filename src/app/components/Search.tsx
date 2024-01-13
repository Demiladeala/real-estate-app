"use client"
import { useQuery } from "@tanstack/react-query";
import { useFilter } from "../context/SearchContext";
import axios from "axios";
import { useEffect } from "react";
import HomeFilter from "./HomeFilter";
import Link from "next/link";
import Image from "next/image";
import Experts from "./Experts";
import ClientsMarquee from "./ClientsMarquee";

type Props = {
    id: number;
    images: string[];
    name: string;
    description: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    features: string[];
    propertyType: string;
    type: string;
    status: string;
    monthlyPayment?: number | null;
    nearbySchools: string[];
    communicationInfo: string;
    acre: number;
    createdAt: string;
    updatedAt: string;
  }
  
  const LoadingSkeleton = () => (
    <div className="border rounded-xl shadow-md hover:shadow-2xl cursor-pointer animate-pulse">
        <div className="w-full h-[13rem] rounded-xl bg-gray-300"></div>
        <div className="p-3 pb-18">
          <div className="font-medium bg-gray-300 py-4 h-5 w-3/4 mb-4"></div>
        </div>
    </div>
  );

const Search = () => {
    const { searchInput, selectedCategory, updateDropdown, searchButtonPressed } = useFilter();
    const {data, isPending, isError, error } = useQuery({
      queryKey: ["userProperties"],
      queryFn: async () => {
        const { data } = await axios.get("/api/properties")
        return data
      },
    })
    const formatPrice = (price: number) => {
      return `₦${price.toLocaleString()}`;
    };   
    
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
            </> ): 
            filteredProperties.length === 0 ? (
            <div className="w-full absolute  text-center text-gray-600 my-8">
              No properties match the selected criteria.
            </div>
          ) : (
            <>
            {filteredProperties.map((property:Props) => (
              <div key={property.id} className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
                <div className='w-full h-[13rem] rounded-xl'>
                  <Link href={`/ListingDetails/${property.id}`}>
                      <Image 
                      className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
                      alt="property"
                      src={property.images[0]}
                      width={500}
                      height={500}
                      />
                  </Link>
                </div>

                <div className='p-3'>
                  <h3 className='font-medium'>{property.name}</h3>
                  {/* <div className="w-full h-px bg-[#eee] my-2"></div> */}
                  <h3 className='font-semibold text-lg'>{formatPrice(property.price)}</h3>
                  <div className='mt-1 flex items-center gap-2 text-sm'>
                      <div className='flex items-center gap-1'>
                          <div className='font-semibold'>{property.acre}</div>
                          <p>acre</p>
                      </div>
                      <div className='flex items-center gap-1'>
                          <div className='font-semibold'>{property.sqft}</div>
                          <p>Sqft</p>
                      </div>
                  </div>

                  <div className='mt-2 flex justify-between items-center gap-2'>
                    <p className='text-sm'>{property.address}</p>
                    <div>
                        <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold text-sm'>Inquire</button>
                    </div>
                  </div>
                </div>
              </div>
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