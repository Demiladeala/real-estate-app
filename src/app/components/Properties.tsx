import Link from "next/link"
import PropertiesCard from "./PropertiesCard"


type Props = {}

const Properties = (props: Props) => {
  return (
    <>
    <div className='mt-20 md:mt-24'></div>
    <div className='w-[95%] mx-auto'>
      <h2 className='text-2xl md:text-3xl text-[#222]'>Featured <strong>Properties</strong></h2>
      <p>Browse homes around ₦500,000 in Abuja, Nigeria</p>

      <div className='my-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4'>
        {/* LISTINGS */}

        <PropertiesCard />
        <PropertiesCard />
        <PropertiesCard />
        <PropertiesCard />
        <PropertiesCard />
        <PropertiesCard />
        <PropertiesCard />
        <PropertiesCard />

      {/* END LISTINGS */}
      </div>

      <div className='my-8 w-full flex justify-center items-center'>
        <Link href="/BuyListings"><button className='px-3 py-2 bg-[#222] text-white rounded-lg hover:opacity-90'>Browse More Properties</button></Link>
      </div>

    </div>
    </>
  )
}

export default Properties