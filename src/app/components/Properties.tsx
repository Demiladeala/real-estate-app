import Link from "next/link"
import Image from 'next/image'
import image1 from '../../../public/property-image-1.jpg'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


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

const LoadingSkeleton = () => (
  <div className="border rounded-xl shadow-md hover:shadow-2xl cursor-pointer animate-pulse">
      <div className="w-full h-[13rem] rounded-xl bg-gray-300"></div>
      <div className="p-3 pb-18">
        <div className="font-medium bg-gray-300 py-4 h-5 w-3/4 mb-4"></div>
      </div>
  </div>
);

const Properties = (props: Props) => {
  const {data, isPending, isError, error } = useQuery({
    queryKey: ["userProperties"],
    queryFn: async () => {
      const { data } = await axios.get("/api/properties")
      console.log(data)
      return data
    },
  })


  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <>
    <div className='mt-20 md:mt-24'></div>
    <div className='w-[95%] mx-auto'>
      <h2 className='text-2xl md:text-3xl text-[#222]'>Featured <strong>Properties</strong></h2>
      <p>Browse homes around ₦10,000,000 in Abuja, Nigeria</p>

      <div className='my-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4'>
        {/* LISTINGS */}
        {
          isPending ? 
          <>
          {Array.from({ length: 8 }, (_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </> : 
          <>
          {data
          .filter((property: Props) => property.type === 'property' && property.price <= 10000000)
          .map((property:Props) => (
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
          ))}
          </>
        }

      {/* END LISTINGS */}
      </div>

      <div className='my-8 w-full flex justify-center items-center'>
        <Link href="/BuyListings"><button className='px-5 py-3 bg-[#222] text-white rounded-lg hover:opacity-90'>Browse More Properties</button></Link>
      </div>

    </div>
    </>
  )
}

export default Properties