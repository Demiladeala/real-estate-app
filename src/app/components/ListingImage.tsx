"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ListingDetailsImage from '../utils/ListingDetailsImage';
import listingImage1 from "../../../public/property-image-1.jpg"
import listingImage2 from "../../../public/listing-image1.jpg"
import listingImage3 from "../../../public/listing-image2.jpg"
import listingImage4 from "../../../public/listing-image3.jpg"
import listingImage5 from "../../../public/listing-image4.jpg"
import InsetBg from '../utils/InsetBg';

type Props = {
  images:string[];
}

const ListingImage = ({ images }: Props) => {
  return (
    <Swiper 
    modules={[ Pagination, Navigation, Autoplay ]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
    autoplay={{ delay:4000 }}
    className='w-full h-[15rem] md:h-[25rem] lg:basis-[70%]'>
      
    {
      images.map((image, index) => (
        <SwiperSlide key={index}>
          <InsetBg opacity='opacity-20' />
          <ListingDetailsImage src={image}/>
        </SwiperSlide>
      ))
    }


  </Swiper>
  )
}

export default ListingImage