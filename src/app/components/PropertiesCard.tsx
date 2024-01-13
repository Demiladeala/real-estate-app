import Image from 'next/image'
import image1 from '../../../public/property-image-1.jpg'
import Link from 'next/link'


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
    createdAt: string;
    updatedAt: string;
    acre?: number;
}
  

const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

const PropertiesCard = (props: Props) => {
  return (
    <div className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
    <div className='w-full h-[13rem] rounded-xl'>
      <Link href={`/ListingDetails/${props.id}`}>
          <Image 
          className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
          alt="property"
          src={props.images[0]}
          width={500}
          height={500}
          />
      </Link>
    </div>

    <div className='p-3'>
      <h3 className='font-medium'>{props.name}</h3>
      {/* <div className="w-full h-px bg-[#eee] my-2"></div> */}
      <h3 className='font-semibold text-lg'>{formatPrice(props.price)}</h3>
      <div className='mt-1 flex items-center gap-2 text-sm'>
          <div className='flex items-center gap-1'>
              <div className='font-semibold'>{props.type === 'land' ? props.acre : props.bedrooms}</div>
              <p>{props.type === 'land' ? 'acre' : 'Bed'}</p>
          </div>
          {props.type === 'property' && (
            <>
          <div className='flex items-center gap-1'>
              <div className='font-semibold'>{props.bathrooms}</div>
              <p>Bath</p>
          </div>
          </> )}
          <div className='flex items-center gap-1'>
              <div className='font-semibold'>{props.sqft}</div>
              <p>Sqft</p>
          </div>
      </div>

      <div className='mt-2 flex justify-between items-center gap-2'>
        <p className='text-sm'>{props.address}</p>
        <div>
            <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold text-sm'>Inquire</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PropertiesCard