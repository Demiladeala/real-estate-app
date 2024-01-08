import ContactAgent from './ContactAgent';
import PropertyDetails from './PropertyDetails';
import SimilarProperties from './SimilarProperties';
import SimilarHomes from './SimilarHomes';
import ListingImage from './ListingImage';
import { notFound } from 'next/navigation';

export const dynamicParams = true

export async function generateStaticParams() {
  const res = await fetch('api/properties')

  const properties = await res.json()
 
  return properties.map((property:any) => ({
    id: property.id
  }))
}

async function getProperty(id:number) {
  const res = await fetch(`api/properties/${id}`, {
    next: {
      revalidate:30
    }
  });
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const ListingDetails = () => {
  return (
    <div className='w-full lg:w-[90%] mx-auto h-full mt-[5.8rem] mb-[2rem]'>
      
      <div className='my-2 max-lg:px-5'>
        <h2 className='font-medium text-lg'>Glass Residence</h2>
        <div className='flex items-center gap-2'>
        <li className='text-gray-500 list-none'>For Rent</li>
        <li className='text-gray-500 list-disc'>Residential</li>
        </div>
      </div>

      <div className='lg:flex lg:items-start lg:gap-10'>
       <ListingImage />

        <div className='w-full hidden lg:block border border-gray-200 py-3 px-3 rounded-xl lg:basis-[30%]'>
          <ContactAgent />
        </div>

      </div> 

      <div className='w-[90%] mx-auto mt-8 lg:w-full h-full flex flex-col lg:flex-row lg:items-start gap-10'>
        <div className='lg:basis-[70%]'>
          <PropertyDetails />
        </div>

        <div className='lg:basis-[30%]'>
          <SimilarProperties />
        </div>
      </div>

      <div className='w-[90%] mx-auto lg:w-full mt-10'>
      <h2 className='font-semibold text-lg'>Similar homes</h2>

        <SimilarHomes />
      </div>

    </div>
  )
}

export default ListingDetails