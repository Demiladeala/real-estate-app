"use client"
import Image from "next/image"
import logo from '../../../public/logo-2.png'
import { RiMenu4Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useModalStore } from "../Store/ModalStore";
import { signOut, useSession } from 'next-auth/react'

type Props = {}

const Navbar = (props: Props) => {
    const { data: session } = useSession();
    const [nav, setNav ] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const { openModal } = useModalStore((state) => state)
    const toggleNav = () => {
      setNav(!nav);
    }
    const openMobileModal = (modalNumber:number) => {
      openModal(modalNumber);
      setNav(false);
    }

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setHasShadow(isScrolled);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <>
    <div className={`z-50 fixed top-0 left-0 p-4 w-full flex justify-between items-center ${
          (hasShadow && !nav) ? "bg-white shadow-xl" : "bg-white border-b border-gray-200"
        }`}>
        <div className="w-[12rem]">
            <Link href='/'>
                <Image
                alt="logo" 
                src={logo}
                className="h-full bg-center bg-cover object-cover"/>
            </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 font-medium">
            <Link href='/BuyListings'><h4 className="cursor-pointer">BUY</h4></Link>
            <Link href='/RentListings'><h4 className="cursor-pointer">RENT</h4></Link>
            <Link href='/LandListings'><h4 className="cursor-pointer">LAND</h4></Link>
        </div>

        {session && session.user ?
        <>
        <div className='flex gap-4'>
              <p className='text-blue-600'>{session.user.name}</p>
              <button onClick={() =>signOut()}>
                Sign Out
              </button>
          </div>
        </>:
        <>
        <div className="hidden md:flex items-center gap-4">
            <button
            onClick={()=> openModal(1)} 
            className="bg-[#222] text-white py-[6px] px-4 rounded-lg border hover:opacity-90">
              LOGIN
            </button>
            <button 
            onClick={()=> openModal(2)} 
            className="py-[6px] px-4 rounded-lg shadow-xl border hover:bg-[#fbfbfb]">
              SIGNUP
            </button>
        </div>
        </>}

        <div className="md:hidden pr-3">
            <RiMenu4Fill onClick={toggleNav} className="cursor-pointer" size={25}/>
        </div>
    </div>

    { nav && 
    (   <div className="z-[12] w-full fixed bg-white shadow-xl px-5 py-3 pt-20 space-y-2 top-0 left-0 md:hidden list-none">
            <Link href='/BuyListings'><li>BUY</li></Link>
            <div className="w-full h-px bg-[#eee]"></div>
            <Link href='/RentListings'><li>RENT</li></Link>
            <div className="w-full h-px bg-[#eee]"></div>
            <Link href='/LandListings'><li>LAND</li></Link>
            <div className="w-full h-px bg-[#eee]"></div>
            <li onClick={()=> openMobileModal(1)} >LOGIN</li>
            <div className="w-full h-px bg-[#eee]"></div>
            <li onClick={()=> openMobileModal(2)} >SIGNUP</li>
        </div>
    )}
</>
  )
}

export default Navbar