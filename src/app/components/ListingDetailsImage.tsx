import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
    src: StaticImageData;
}

const ListingDetailsImage = ({ src }: Props) => {
  return (
    <>
        <SwiperSlide>
            <div className='w-full h-full'>
            <Image
            alt='listing'
            src={src} 
            className='w-full h-full bg-center bg-cover bg-no-repeat'
            />
            </div>
        </SwiperSlide>
    </>
  )
}

export default ListingDetailsImage