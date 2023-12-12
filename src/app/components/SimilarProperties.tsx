import React from 'react'
import PropertiesDetails from './PropertiesDetails'

type Props = {}

const SimilarProperties = (props: Props) => {
  return (
    <>
        <div className='text-lg font-semibold'>Homes Around ₦500,000</div>
        <div className='mt-5'>
            <div>
                <PropertiesDetails />
            </div>
            <div className='mt-5'>
                <PropertiesDetails />
            </div>
        </div>
    </>
  )
}

export default SimilarProperties