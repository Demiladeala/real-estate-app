"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PropertiesCard from "./PropertiesCard"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSkeleton from "../utils/LoadingSkeleton";

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
  id: number;
  price: number;
  propertyType: string;
}

const SimilarHomes = ({ id, price, propertyType }: Property) => {
  const percentageRange = 20;
  const {data, isPending, isError } = useQuery({
    queryKey: ["userProperties"],
    queryFn: async () => {
      const { data } = await axios.get("/api/properties")
      return data
    },
  })
  let filteredProperties = (data || []).filter(
    (property: Props) =>
      property.id !== id &&
      property.propertyType === propertyType &&
      property.price >= price * (1 - percentageRange / 100) &&
      property.price <= price * (1 + percentageRange / 100)
  );

  if (filteredProperties.length === 0) {
    filteredProperties = (data || []).filter(
      (property: Props) =>
        property.id !== id &&
        property.price >= price * (1 - percentageRange / 100) &&
        property.price <= price * (1 + percentageRange / 100)
    );
  }

  return (
    <div className="relative my-3">
        {/* <div
          className="z-10 absolute top-[40%] left-[-1rem] bg-white border border-[#222] rounded-full w-12 h-12 shadow-xl flex justify-center items-center cursor-pointer"
        >
          <ChevronLeft />
        </div>

        <div
          className="z-10 absolute top-[40%] right-[-1.3rem] bg-white border border-[#222] rounded-full w-12 h-12 shadow-xl flex justify-center items-center cursor-pointer"
        >
          <ChevronRight />
        </div> */}

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
              <PropertiesCard similar={true} key={property.id} {...property} />
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