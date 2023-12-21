"use client"
import React, { useState } from 'react'
import Line from '../utils/Line'
import EssentialInformation from '../utils/EssentialInformation'
import { ChevronDown, ChevronUp } from 'lucide-react'

type Props = {}

const PropertyDetails = (props: Props) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const description =
    'This beautiful home is sure to impress! It features a natural color palette throughout, which is calming and serene. The kitchen is complete with a nice backsplash and plenty of counter space. Other rooms provide flexible living space, perfect for a home office or playroom. The primary bathroom boasts good under sink storage and a shower/tub combo. Step outside to the fenced in backyard and you\'ll find a sitting area, perfect for enjoying your morning coffee or an evening glass of wine. With all these great features, this home is sure to go quickly! Don\'t miss out, come see it today!';

  const truncatedDescription = showFullDescription
    ? description
    : `${description.slice(0, 200)}...`;

  return (
    <>
        <div className='text-lg font-semibold'>Property details</div>

        <div className='mt-4 font-medium flex flex-wrap items-center gap-3 marker:text-[#666]'>
            <li className='list-none'>3 beds</li>
            <li>2 baths</li>
            <li>2,690 sqf</li>
            <li>2.33 acre lot</li>
        </div>

        <div className='mt-5'>
            <p className='font-medium'>
                {truncatedDescription}
                <span
                    className='text-[#222] underline cursor-pointer'
                    onClick={() => setShowFullDescription(!showFullDescription)}
                >
                    {showFullDescription ? ' Show Less' : ' Show More'}
                </span>
            </p>
        </div>

        <div className='mt-8 text-lg font-semibold'>Essential Information</div>

        <div>
           <EssentialInformation information='Price' value='₦500,000' />
           <EssentialInformation information='Type' value='Residential' />
           <EssentialInformation information='Status' value='Active' />
        </div>

        <div className='flex items-center gap-4'>
            <button className='py-2 px-7 bg-[#222] text-white rounded-3xl hover:opacity-95'>Commit</button>
            <button className='py-2 px-7 bg-none border border-[#222] rounded-3xl hover:bg-[#f4f4f4]'>Share</button>
        </div>

        <div className='mt-8 text-lg font-semibold'>Area Highlights</div>

        <div>
            <Line />
            <div className='flex justify-between items-center'>
                <h2>Monthly Payment</h2>
                <ChevronDown />
            </div>
            <Line />

            <Line />
            <div className='flex justify-between items-center'>
                <h2>Community Information</h2>
                <ChevronDown />
            </div>
            <Line />

            <Line />
            <div className='flex justify-between items-center'>
                <h2>School Information</h2>
                <ChevronDown />
            </div>
            <Line />
        </div>
    </>
  )
}

export default PropertyDetails