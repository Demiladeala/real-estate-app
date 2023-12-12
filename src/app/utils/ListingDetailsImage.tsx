import Image, { StaticImageData } from "next/image"

type Props = {
    src: StaticImageData
}

const ListingDetailsImage = ({ src }: Props) => {
  return (
    <div className='w-full h-full'>
        <Image
        alt='listing'
        src={src} 
        className='w-full h-full bg-center bg-cover bg-no-repeat lg:rounded-xl'
        />
    </div>
  )
}

export default ListingDetailsImage