"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

type Props = {}

const ListingDetails = (props: Props) => {
  return (
    <div className='w-full lg:w-[90%] mx-auto h-full mt-[5rem] mb-[2rem]'>
      <div className='lg:flex lg:items-center lg:gap-10'>
        <Swiper 
          modules={[ Pagination ]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          className='border w-full h-[20rem] md:h-[25rem] lg:basis-[70%]'>
        </Swiper>

        <div className='w-full hidden lg:block border border-orange-600 py-10 lg:basis-[30%]'>

        </div>
      </div> 
    </div>
  )
}

export default ListingDetails