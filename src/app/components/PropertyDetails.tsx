"use client"
import React, { useState } from 'react'
import Line from '../utils/Line'
import EssentialInformation from '../utils/EssentialInformation'
import { ChevronDown, ChevronUp } from 'lucide-react'

type Props = {
    beds?: number;
    baths?:number;
    sqft?: number;
    acre: number;
    desc?: string;
    price: number;
    usage: string;
    status: string;
    monthlyPayment?: number
    nearbySchools?: String[]
    communicationInfo?: String
}

const PropertyDetails = ({beds, baths, sqft, acre, desc, price, usage, status, monthlyPayment, nearbySchools, communicationInfo}: Props) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showMonthlyPayment, setShowMonthlyPayment] = useState(false);
    const [showCommunityInfo, setShowCommunityInfo] = useState(false);
    const [showSchoolInfo, setShowSchoolInfo] = useState(false);
    const description = desc;

    const isTruncated = description && description.length > 200;
    const truncatedDescription = isTruncated? 
    showFullDescription ? description
        : 
    `${description!.slice(0, 200)}...`: description;

    const formatPrice = (price: number) => {
        return `₦${price.toLocaleString()}`;
    };

  return (
    <>
        <div className='text-lg font-semibold'>Property details</div>

        <div className='mt-4 font-medium flex flex-wrap items-center gap-3 marker:text-[#666]'>
            <li className='list-none'>{beds} beds</li>
            <li>{baths} baths</li>
            <li>{sqft} sqft</li>
            <li>{acre} {acre > 0 && `acre`}</li>
        </div>

        <div className='mt-5'>
            <p className='font-medium'>
            {truncatedDescription && (
            <>
              {truncatedDescription}
              {isTruncated && (
                <span
                  className='text-[#222] underline cursor-pointer'
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? ' Show Less' : ' Show More'}
                </span>
              )}
            </>
            )}
            </p>
        </div>

        <div className='mt-8 text-lg font-semibold'>Essential Information</div>

        <div>
           <EssentialInformation information='Price' value={formatPrice(price)} />
           <EssentialInformation information='Type' value={usage} />
           <EssentialInformation information='Status' value={status} />
        </div>

        <div className='flex items-center gap-4'>
            <button className='py-2 px-7 bg-[#222] text-white rounded-3xl hover:opacity-95'>Commit</button>
            <button className='py-2 px-7 bg-none border border-[#222] rounded-3xl hover:bg-[#f4f4f4]'>Share</button>
        </div>

        <div className='mt-8 text-lg font-semibold'>Area Highlights</div>

        <div>
            <Line />
            <div className='flex justify-between items-center'>
                <h2 className='font-medium'>Monthly Payment</h2>
                    {showMonthlyPayment ? (
                        <ChevronUp className="cursor-pointer" onClick={() => setShowMonthlyPayment(false)} />
                            ) : (
                        <ChevronDown className="cursor-pointer" onClick={() => setShowMonthlyPayment(true)} />
                    )}
            </div>
            {(showMonthlyPayment && monthlyPayment) && (
                <>
                    <div className='mt-2 flex items-center justify-between'>
                    <p>Price</p>
                    <p>{formatPrice(price)}</p>
                    </div>

                    <div className='mt-2 flex items-center justify-between'>
                    <p>Monthly payment</p>
                    <p>{formatPrice(monthlyPayment)}</p>
                    </div>
                </>
            )}
            <Line />

            <Line />
            <div className='flex justify-between items-center'>
                <h2 className='font-medium'>Community Information</h2>
                {showCommunityInfo ? (
                    <ChevronUp className="cursor-pointer" onClick={() => setShowCommunityInfo(false)} />
                        ) : (
                    <ChevronDown className="cursor-pointer" onClick={() => setShowCommunityInfo(true)} />
                )}
            </div>
            {(showCommunityInfo && communicationInfo) && (
                <>
                    <div className='mt-2 flex items-center justify-between'>
                    <p>{communicationInfo}</p>
                    </div>
                </>
            )}
            <Line />

            <Line />
            <div className='flex justify-between items-center'>
                <h2 className='font-medium'>School Information</h2>
                {showSchoolInfo ? (
                    <ChevronUp className="cursor-pointer" onClick={() => setShowSchoolInfo(false)} />
                        ) : (
                    <ChevronDown className="cursor-pointer" onClick={() => setShowSchoolInfo(true)} />
                )}
            </div>
            {(showSchoolInfo && nearbySchools) && (
                <>
                    <div className='mt-2 flex flex-col md:flex-row md:items-center justify-between'>
                    <p>Nearby Schools in the Area</p>
                    <p className='font-semibold'>{nearbySchools}</p>
                    </div>
                </>
            )}
            <Line />
        </div>
    </>
  )
}

export default PropertyDetails