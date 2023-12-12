"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import listingImage1 from "../../../public/property-image-1.jpg"
import listingImage2 from "../../../public/listing-image1.jpg"
import listingImage3 from "../../../public/listing-image2.jpg"
import listingImage4 from "../../../public/listing-image3.jpg"
import listingImage5 from "../../../public/listing-image4.jpg"
import ContactAgent from './ContactAgent';
import ListingDetailsImage from '../utils/ListingDetailsImage';
import PropertyDetails from './PropertyDetails';
import SimilarProperties from './SimilarProperties';
import InsetBg from '../utils/InsetBg';
import SimilarHomes from './SimilarHomes';

type Props = {}

const ListingDetails = (props: Props) => {
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
        <Swiper 
          modules={[ Pagination, Navigation, Autoplay ]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay:4000 }}
          className='w-full h-[15rem] md:h-[25rem] lg:basis-[70%]'>
            <SwiperSlide>
              <InsetBg opacity='opacity-20' />
              <ListingDetailsImage src={listingImage1}/>
            </SwiperSlide>

            <SwiperSlide>
              <InsetBg opacity='opacity-20' />
              <ListingDetailsImage src={listingImage2} />
            </SwiperSlide>

          <SwiperSlide>
            <InsetBg opacity='opacity-20' />
            <ListingDetailsImage src={listingImage3} />
          </SwiperSlide>

          <SwiperSlide>
            <InsetBg opacity='opacity-20' />
            <ListingDetailsImage src={listingImage4} />
          </SwiperSlide>

          <SwiperSlide>
            <InsetBg opacity='opacity-20' />
            <ListingDetailsImage src={listingImage5} />
          </SwiperSlide>


        </Swiper>

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