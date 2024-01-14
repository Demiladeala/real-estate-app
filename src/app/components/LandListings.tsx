"use client"
import React from 'react'
import SearchListings from './SearchListings'
import Experts from './Experts'
import ClientsMarquee from './ClientsMarquee'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import LoadingSkeleton from '../utils/LoadingSkeleton'
import PropertiesCard from './PropertiesCard'

type Props = {
  id: number;
  images: string[];
  name: string;
  description: string;
  address: string;
  price: number;
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

const LandListings = () => {
  const {data, isPending, isError, error } = useQuery({
    queryKey: ["userProperties"],
    queryFn: async () => {
      const { data } = await axios.get("/api/properties")
      return data
    },
  })

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  
  return (
    <div className='relative mt-20'>
        <SearchListings />

        <div className='w-[95%] lg:w-[98%] mx-auto mt-8'>
            <h2 className='font-semibold text-xl lg:text-2xl'>Lands <span className='font-normal'>For Sale</span>:</h2>

            <div className='my-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4'>
            {
            isPending ? 
            <>
            {Array.from({ length: 12 }, (_, index) => (
                <LoadingSkeleton key={index} />
              ))}
            </> : 
            <>
            {data
              .filter((property: Props) => property.type === 'land')
              .map((property:Props) => (
                <PropertiesCard key={property.id} {...property} />
            ))}
            </>
            }
            </div>

            <Experts />
        </div>
        <ClientsMarquee />
    </div>
  )
}

export default LandListings