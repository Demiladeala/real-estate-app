"use client"
import React from 'react'
import PropertiesCard from './PropertiesCard'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import LoadingSkeleton from '../utils/LoadingSkeleton';

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
              <PropertiesCard key={property.id} {...property} />
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