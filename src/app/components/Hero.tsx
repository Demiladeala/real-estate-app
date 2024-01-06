"use client"
import Image from "next/image"
import hero from "../../../public/hero.jpg"
import hero2 from '../../../public/hero-2.jpg'
import hero3 from '../../../public/hero-3.jpg'
import hero4 from '../../../public/hero-4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiSearch } from "react-icons/fi";
import InsetBg from "../utils/InsetBg"

type Props = {}

const Hero = (props: Props) => {



  return (
    <Swiper 
    modules={[ Pagination ]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className='relative mt-24 w-[95%] h-[20rem] md:h-[34rem] md:w-[96%] lg:w-[98%] mx-auto'>
          <InsetBg />
            <Image 
            alt="hero"
            src={hero}
            className="rounded-xl w-full h-full bg-cover object-cover bg-center"
            />
            <div className="z-40 w-full absolute top-[2rem] md:top-[4rem] left-0 px-4 md:ml-16">
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold md:mt-28 ">
                Buy or Rent Properties <br /> with no commission
              </h2>

              <div className="mt-4 md:mt-8 w-[80%] py-5 px-2 rounded bg-white/70 flex flex-col md:flex-row-reverse gap-5">
                
                <div className="relative w-full basis-[100%] md:basis-[50%] flex">
                  <input
                  className="relative w-[90%] outline-none text-sm md:text-base py-2 px-3 rounded-bl rounded-tl"
                  type="search" 
                  placeholder="Address, School, City or Neighborhood" />
                  <div className="w-[10%] bg-white py-2 rounded-tr rounded-br">
                    <button className="absolute right-[2px] top-[5px] bg-[#222] text-white w-7 h-7 flex items-center justify-center rounded-full">
                      <FiSearch />
                    </button>
                  </div>
                </div>
                
                
                <div className="w-full basis-[100%] md:basis-[50%] flex items-center gap-5">
                  <div className="basis-[50%]">
                    <select className="w-full bg-white py-2 outline-none rounded placeholder:text-xs" name="" id="">
                      <option value="">Category</option>
                      <option value="">Flat/Apartment</option>
                      <option value="">Condominium</option>
                      <option value="">Detached Bungalow</option>
                      <option value="">Detached Duplex</option>
                      <option value="">Land</option>
                      <option value="">Commercial Properties</option>
                    </select>
                  </div>

                  <div className="basis-[50%]">
                    <select className="w-full bg-white py-2 outline-none rounded placeholder:text-xs" name="" id="">
                      <option value="">Bedroom</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6+</option>
                    </select>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='relative mt-24 w-[95%] h-[20rem] md:h-[34rem] md:w-[96%] lg:w-[98%] mx-auto'>
            <InsetBg />
            <Image 
            alt="hero"
            src={hero2}
            className="rounded-xl w-full h-full object-cover bg-center"
            />
            <div className="z-40 w-full absolute top-[2rem] md:top-[4rem] left-0 px-4 md:ml-16">
              
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold md:mt-28 ">
                Unlock Your Dream Home
              </h2>

              <div className="mt-4 md:mt-8 w-[80%] py-5 px-2 rounded bg-white/70 flex flex-col md:flex-row-reverse gap-5">
                
                <div className="relative w-full basis-[100%] md:basis-[50%] flex">
                  <input
                  className="relative w-[90%] outline-none text-sm md:text-base py-2 px-3 rounded-bl rounded-tl"
                  type="search" 
                  placeholder="Address, School, City or Neighborhood" />
                  <div className="w-[10%] bg-white py-2 rounded-tr rounded-br">
                    <button className="absolute right-[2px] top-[5px] bg-[#222] text-white w-7 h-7 flex items-center justify-center rounded-full">
                      <FiSearch />
                    </button>
                  </div>
                </div>
                
                
                <div className="w-full basis-[100%] md:basis-[50%] flex items-center gap-5">
                  <div className="basis-[50%]">
                    <select className="w-full bg-white py-2 outline-none rounded placeholder:text-xs" name="" id="">
                      <option value="">Category</option>
                      <option value="">Flat/Apartment</option>
                      <option value="">Condominium</option>
                      <option value="">Detached Bungalow</option>
                      <option value="">Detached Duplex</option>
                      <option value="">Land</option>
                      <option value="">Commercial Properties</option>
                    </select>
                  </div>

                  <div className="basis-[50%]">
                    <select className="w-full bg-white py-2 outline-none rounded placeholder:text-xs" name="" id="">
                      <option value="">Bedroom</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6+</option>
                    </select>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='relative mt-24 w-[95%] h-[20rem] md:h-[34rem] md:w-[96%] lg:w-[98%] mx-auto'>
            <InsetBg />
            <Image 
            alt="hero"
            src={hero3}
            className="rounded-xl w-full h-full object-cover bg-center"
            />
            <div className="z-40 w-full absolute top-[2rem] md:top-[4rem] left-0 px-4 md:ml-16">
              
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold md:mt-28 ">
                Discover Your Ideal <br />Living Space
              </h2>

              <div className="mt-4 md:mt-8 w-[80%] py-5 px-2 rounded bg-white/70 flex flex-col md:flex-row-reverse gap-5">
                
                <div className="relative w-full basis-[100%] md:basis-[50%] flex">
                  <input
                  className="relative w-[90%] outline-none text-sm md:text-base py-2 px-3 rounded-bl rounded-tl"
                  type="search" 
                  placeholder="Address, School, City or Neighborhood" />
                  <div className="w-[10%] bg-white py-2 rounded-tr rounded-br">
                    <button className="absolute right-[2px] top-[5px] bg-[#222] text-white w-7 h-7 flex items-center justify-center rounded-full">
                      <FiSearch />
                    </button>
                  </div>
                </div>
                
                
                <div className="w-full basis-[100%] md:basis-[50%] flex items-center gap-5">
                  <div className="basis-[50%]">
                    <select className="w-full bg-white py-2 text-sm outline-none rounded" name="" id="">
                      <option value="" className="text-sm">Category</option>
                      <option value="" className="text-sm">Apartment</option>
                    </select>
                  </div>

                  <div className="basis-[50%]">
                    <select className="w-full bg-white py-2 text-sm outline-none rounded" name="" id="">
                      <option value="" className="text-sm">Type</option>
                      <option value="" className="text-sm">Akure</option>
                    </select>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='relative mt-24 w-[95%] h-[20rem] md:h-[34rem] md:w-[96%] lg:w-[98%] mx-auto'>
            <InsetBg />
            <Image 
            alt="hero"
            src={hero4}
            className="rounded-xl w-full h-full object-cover bg-center"
            />
            <div className="z-40 w-full absolute top-[2rem] md:top-[4rem] left-0 px-4 md:ml-16">
              
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold md:mt-28 ">
                Desirable Features: A Home <br />Beyond the Basics
              </h2>

              <div className="mt-4 md:mt-8 w-[80%] py-5 px-2 rounded bg-white/70 flex flex-col md:flex-row-reverse gap-5">
                
                <div className="relative w-full basis-[100%] md:basis-[50%] flex">
                  <input
                  className="relative w-[90%] outline-none text-sm md:text-base py-2 px-3 rounded-bl rounded-tl"
                  type="search" 
                  placeholder="Address, School, City or Neighborhood" />
                  <div className="w-[10%] bg-white py-2 rounded-tr rounded-br">
                    <button className="absolute right-[2px] top-[5px] bg-[#222] text-white w-7 h-7 flex items-center justify-center rounded-full">
                      <FiSearch />
                    </button>
                  </div>
                </div>
                
                
                <div className="w-full basis-[100%] md:basis-[50%] flex items-center gap-5">
                  <div className="basis-[50%]">
                    <select className="w-full bg-white py-2 outline-none rounded placeholder:text-xs" name="" id="">
                      <option value="">Category</option>
                      <option value="">Flat/Apartment</option>
                      <option value="">Condominium</option>
                      <option value="">Detached Bungalow</option>
                      <option value="">Detached Duplex</option>
                      <option value="">Land</option>
                      <option value="">Commercial Properties</option>
                    </select>
                  </div>

                  <div className="basis-[50%]">
                    <select className="w-full bg-white py-2 outline-none rounded placeholder:text-xs" name="" id="">
                      <option value="">Bedroom</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6+</option>
                    </select>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
    </SwiperSlide>

    </Swiper>
  )
}

export default Hero