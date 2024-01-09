"use client"
import React from 'react'
import PropertiesCard from './PropertiesCard'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

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
  createdAt: string;
  updatedAt: string;
}

type Property = {
  price: number;
}

const formatPrice = (price: number) => {
  return `₦${price.toLocaleString()}`;
};

const LoadingSkeleton = () => (
  <div className="border rounded-xl shadow-md hover:shadow-2xl cursor-pointer animate-pulse">
      <div className="w-full h-[13rem] rounded-xl bg-gray-300"></div>
      <div className="p-3 pb-18">
        <div className="font-medium bg-gray-300 py-4 h-5 w-3/4 mb-4"></div>
      </div>
  </div>
);

const SimilarProperties = ({ price }: Property) => {
  const percentageRange = 10;
  const {data, isPending, isError, error } = useQuery({
    queryKey: ["userProperties"],
    queryFn: async () => {
      const { data } = await axios.get("/api/properties")
      return data
    },
  })
  const filteredProperties = (data || []).filter(
    (property: Props) =>
      property.type === 'property' &&
      property.price >= price * (1 - percentageRange / 100) &&
      property.price <= price * (1 + percentageRange / 100)
  );

  return (
    <>
        <div className='text-lg font-semibold'>Homes Around {formatPrice(price)}</div>
        <div className='mt-5 flex flex-col gap-5'>
        {
          (isPending && isError) ? 
          <>
          {Array.from({ length: 2 }, (_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </> : 
           <>
           {filteredProperties.length > 0 ? (
             filteredProperties.map((property: Props) => (
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
                        <div className='font-semibold'>{property.bedrooms}</div>
                        <p>Bed</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='font-semibold'>{property.bathrooms}</div>
                        <p>Bath</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='font-semibold'>{property.sqft}</div>
                        <p>Sqft</p>
                    </div>
                </div>

                <div className='mt-2 flex justify-between items-center gap-2'>
                  <p className='text-sm'>{property.address}</p>
                  <div>
                      <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold text-sm'>Commit</button>
                  </div>
                </div>
              </div>
            </div>
             ))
           ) : (
             <p>No properties found around the specified price range.</p>
           )}
         </>
        }
        </div>
    </>
  )
}

export default SimilarProperties