import React from 'react'
import PropertiesCard from './PropertiesCard'

type Props = {}

const SimilarProperties = (props: Props) => {
  return (
    <>
        <div className='text-lg font-semibold'>Homes Around ₦500,000</div>
        <div className='mt-5'>
            <div>
                <PropertiesCard />
            </div>
            <div className='mt-5'>
                <PropertiesCard />
            </div>
        </div>
    </>
  )
}

export default SimilarProperties