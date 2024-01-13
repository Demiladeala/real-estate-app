"use client"
import Image from "next/image"
import hero from "../../../public/hero.jpg"
import hero2 from '../../../public/hero-2.jpg'
import hero3 from '../../../public/hero-3.jpg'
import hero4 from '../../../public/hero-4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FiSearch } from "react-icons/fi";
import InsetBg from "../utils/InsetBg"
import HomeFilter from "./HomeFilter"

const images = [
  { src: hero, title: "Buy or Rent Properties with no commission"},
  { src: hero2, title: "Unlock Your Dream Home and Features"},
  { src: hero3, title: "Discover Your Ideal Living Space"},
  { src: hero4, title: "Desirable Features: A Home Beyond the Basics"},
];
const truncateTitle = (title:string) => {
  const words = title.split(' ');
  const truncatedWords = words.slice(0, 4);
  return [
    <span key={1}>{truncatedWords.join(' ')}</span>,
    words.length > 4 && <br key={2} />,
    words.slice(4).join(' ')
  ];
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
    <Swiper 
    modules={[ Pagination,Autoplay ]}
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{ delay:5000 }}
    pagination={{ clickable: true }}
    className="relative"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
        <div className='relative mt-24 w-[95%] h-[20rem] md:h-[34rem] md:w-[96%] lg:w-[98%] mx-auto'>
          <InsetBg />
            <Image 
            alt="hero"
            src={image.src}
            className="rounded-xl w-full h-full bg-cover object-cover bg-center"
            />
            <div className="z-40 w-full absolute top-[2rem] md:top-[4rem] left-0 px-4 lg:ml-16 overflow-hidden">
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold md:mt-28 ">
                {truncateTitle(image.title)}
              </h2>
            </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
    <HomeFilter changeBg={false} />
    </div>
  )
}

export default Hero