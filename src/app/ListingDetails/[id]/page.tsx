import ContactAgent from "@/app/components/ContactAgent"
import Footer from "@/app/components/Footer"
import ListingImage from "@/app/components/ListingImage"
import Navbar from "@/app/components/Navbar"
import PropertyDetails from "@/app/components/PropertyDetails"
import SimilarHomes from "@/app/components/SimilarHomes"
import SimilarProperties from "@/app/components/SimilarProperties"
import { notFound } from "next/navigation"

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
  acre: number;
  features: string[];
  propertyType: string;
  type: string;
  status: string;
  availability: string;
  propertyUsage: string;
  monthlyPayment?: number | null;
  nearbySchools: string[];
  communicationInfo: string;
  createdAt: string;
  updatedAt: string;
}

export const dynamicParams = true

export async function generateStaticParams() {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_SITE_URL}/api/properties`)

  const properties = await res.json()
 
  return properties.map((property:Props) => ({
    id: String(property.id)
  }))
}

async function getProperty(id:number) {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_SITE_URL}/api/properties/${id}`, {
      next: {
        revalidate:30
      }
    });
    if (!res.ok) {
      notFound();
    }
  
    return res.json();
  }

export default async function ListingDetails ({params}: { params: { id: number } }) {
  const property = await getProperty(params.id);

  return (
    <div>
        <section id='navbarHeader'>
          <Navbar />
        </section>

        <section id="listing-details">
          <div className='w-full lg:w-[90%] mx-auto h-full mt-[5.8rem] mb-[2rem]'>
        
            <div className='my-2 max-lg:px-5'>
              <h2 className='font-medium text-lg'>{property.name}</h2>
              <div className='flex items-center gap-2'>
              <li className='text-gray-500 list-none'>For {property.status}</li>
              <li className='text-gray-500 list-disc'>{property.propertyType}</li>
              </div>
            </div>

            <div className='lg:flex lg:items-start lg:gap-10'>
              <ListingImage images={property.images}/>

              <div className='w-full hidden lg:block border border-gray-200 py-3 px-3 rounded-xl lg:basis-[30%]'>
                <ContactAgent />
              </div>

            </div> 

            <div className='w-[90%] mx-auto mt-8 lg:w-full h-full flex flex-col lg:flex-row lg:items-start gap-10'>
              <div className='lg:basis-[70%]'>
                <PropertyDetails 
                beds={property.bedrooms} 
                baths={property.bathrooms} 
                sqft={property.sqft} 
                acre={property.acre} 
                desc={property.description}
                price={property.price}
                usage={property.propertyUsage}
                status={property.availability}
                monthlyPayment={property.monthlyPayment}
                communicationInfo={property.communicationInfo}
                nearbySchools={property.nearbySchools}/>
              </div>

              <div className='lg:basis-[30%] max-h-[40rem] overflow-y-scroll similarProperties'>
                <SimilarProperties price={property.price} />
              </div>
            </div>

            <div className='w-[90%] mx-auto lg:w-full mt-10'>
            <h2 className='font-semibold text-lg'>Similar homes</h2>

              <SimilarHomes />
            </div>

        </div>
        </section>


        <section>
          <Footer />
        </section>
    </div>
  )
}

