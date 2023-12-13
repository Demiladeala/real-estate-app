import React from 'react'
import SearchListings from './SearchListings'
import PropertiesCard from './PropertiesCard'
import Experts from './Experts'
import ClientsMarquee from './ClientsMarquee'

type Props = {}

const BuyListings = (props: Props) => {
  return (
    <div className='relative mt-20'>
        <SearchListings />

        <div className='w-[95%] lg:w-[98%] mx-auto mt-8'>
            <h2 className='font-semibold text-xl lg:text-2xl'>Property Listings <span className='font-normal'>For Sale</span>:</h2>

            <div className='my-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4'>
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
                <PropertiesCard />
            </div>

            <Experts />
        </div>
        <ClientsMarquee />
    </div>
  )
}

export default BuyListings