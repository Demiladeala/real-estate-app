import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import listingImage1 from "../../../public/property-image-1.jpg"
import listingImage2 from "../../../public/listing-image1.jpg"

type Props = {}

const ListingDetailsImage = (props: Props) => {
  return (
    <>
        <SwiperSlide>
            <div className='w-full h-full'>
            <Image
            alt='listing'
            src={listingImage1} 
            className='w-full h-full bg-center bg-cover bg-no-repeat'
            />
            </div>
        </SwiperSlide>
    </>
  )
}

export default ListingDetailsImage