"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import listingImage1 from "../../../public/property-image-1.jpg"
import listingImage2 from "../../../public/listing-image1.jpg"
import listingImage3 from "../../../public/listing-image2.jpg"
import listingImage4 from "../../../public/listing-image3.jpg"
import listingImage5 from "../../../public/listing-image4.jpg"

type Props = {}

const ListingDetails = (props: Props) => {
  return (
    <div className='w-full lg:w-[90%] mx-auto h-full mt-[7rem] mb-[2rem]'>
      <div className='lg:flex lg:items-center lg:gap-10'>
        <Swiper 
          modules={[ Pagination, Navigation, Autoplay ]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay:6000 }}
          className='border w-full h-[20rem] md:h-[25rem] lg:basis-[70%]'>
            <SwiperSlide>
              <div className='w-full h-full'>
                <Image
                alt='listing'
                src={listingImage1} 
                className='w-full h-full bg-center bg-cover bg-no-repeat'
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='w-full h-full'>
              <Image
              alt='listing'
              src={listingImage2} 
              className='w-full h-full bg-center bg-cover bg-no-repeat'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full h-full'>
              <Image
              alt='listing'
              src={listingImage3} 
              className='w-full h-full bg-center bg-cover bg-no-repeat'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full h-full'>
              <Image
              alt='listing'
              src={listingImage4} 
              className='w-full h-full bg-center bg-cover bg-no-repeat'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full h-full'>
              <Image
              alt='listing'
              src={listingImage5} 
              className='w-full h-full bg-center bg-cover bg-no-repeat'
              />
            </div>
          </SwiperSlide>


        </Swiper>

        <div className='w-full hidden lg:block border border-orange-600 py-10 lg:basis-[30%]'>

        </div>
      </div> 
    </div>
  )
}

export default ListingDetails