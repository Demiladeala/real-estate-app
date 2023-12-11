import Image from 'next/image'
import image1 from '../../../public/property-image-1.jpg'
import Link from 'next/link'

type Props = {}

const PropertiesDetails = (props: Props) => {
  return (
    <Link href={`/ListingDetails/1`}>
        <div className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
            <div className='w-full h-[13rem] rounded-xl'>
                <Image 
                className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
                alt="property"
                src={image1}
                />
            </div>

            <div className='p-3'>
                <h3 className='font-medium'>Glass Residence</h3>
                <p className="hidden text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum.</p>
                {/* <div className="w-full h-px bg-[#eee] my-2"></div> */}
                <h3 className='font-semibold text-lg'>₦400,000</h3>
                <div className='mt-1 flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <strong>3</strong>
                        <p>Bed</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <strong>2</strong>
                        <p>Bath</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <strong>2,690</strong>
                        <p>Sqft</p>
                    </div>
                </div>

                <div className='mt-2 flex justify-between items-center gap-2'>
                    <p className='text-sm'>Ibrahim Crescent - <span>Abuja</span></p>
                <div>
                    <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold text-sm'>Commit</button>
                </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default PropertiesDetails