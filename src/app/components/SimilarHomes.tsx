"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PropertiesCard from "./PropertiesCard"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

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

type Property = {
  price: number;
}

const SimilarHomes = ({ price }: Property) => {
  const percentageRange = 20;
  const {data, isPending, isError, error } = useQuery({
    queryKey: ["userProperties"],
    queryFn: async () => {
      const { data } = await axios.get("/api/properties")
      return data
    },
  })
  const filteredProperties = (data || []).filter(
    (property: Props) =>
      property.price >= price * (1 - percentageRange / 100) &&
      property.price <= price * (1 + percentageRange / 100)
  );

  return (
    <div className="relative my-3">
        <div
          className="z-10 absolute top-[40%] left-[-1rem] bg-white border border-[#222] rounded-full w-12 h-12 shadow-xl flex justify-center items-center cursor-pointer"
        >
          <ChevronLeft />
        </div>

        <div
          className="z-10 absolute top-[40%] right-[-1.3rem] bg-white border border-[#222] rounded-full w-12 h-12 shadow-xl flex justify-center items-center cursor-pointer"
        >
          <ChevronRight />
        </div>

        <div className="relative mt-8 flex items-center gap-5 overflow-x-scroll scroll-none">
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
              <div key={property.id} className='w-[20rem] h-[23rem] border rounded-xl shadow-md hover:shadow-2xl cursor-pointer flex-shrink-0'>
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
    </div>
  )
}

export default SimilarHomes