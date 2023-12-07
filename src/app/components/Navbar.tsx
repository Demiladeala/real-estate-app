"use client"
import Image from "next/image"
import logo from '../../../public/logo.png'
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";

type Props = {}

const Navbar = (props: Props) => {
    const [nav, setNav ] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }

  return (
    <>
    <div className='z-50 fixed top-0 left-0 p-4 bg-white  w-full flex justify-between items-center'>
        <div>
            <Image
            alt="logo" 
            src={logo}/>
        </div>

        <div className="hidden md:flex items-center gap-6 font-medium">
            <h4 className="cursor-pointer">BUY</h4>
            <h4 className="cursor-pointer">RENT</h4>
            <h4 className="cursor-pointer">SELL</h4>
        </div>

        <div className="hidden md:flex items-center gap-4">
            <button className="bg-[#222] text-white py-2 px-4 rounded-lg border hover:border-[#222] hover:bg-transparent hover:text-[#222]">LOGIN</button>
            <button className="py-2 px-4 rounded-lg shadow-xl border hover:bg-[#fbfbfb]">SIGNUP</button>
        </div>

        <div className="md:hidden pr-3">
            <RiMenu4Fill onClick={toggleNav} className="cursor-pointer" size={25}/>
        </div>
    </div>

    { nav && 
    (   <div className="w-full absolute bg-white shadow-xl px-5 py-3 pt-20 space-y-2 top-0 left-0 md:hidden z-10 list-none">
            <li>BUY</li>
            <div className="w-full h-px bg-[#eee]"></div>
            <li>RENT</li>
            <div className="w-full h-px bg-[#eee]"></div>
            <li>SELL</li>
            <div className="w-full h-px bg-[#eee]"></div>
            <li>LOGIN</li>
            <div className="w-full h-px bg-[#eee]"></div>
            <li>SIGNUP</li>
        </div>
    )}
</>
  )
}

export default Navbar