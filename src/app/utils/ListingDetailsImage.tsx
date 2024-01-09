import Image, { StaticImageData } from "next/image"

type Props = {
    src: StaticImageData | string;
}

const ListingDetailsImage = ({ src }: Props) => {
  return (
    <div className='w-full h-full'>
        <Image
        alt='listing'
        src={src} 
        className='w-full h-full bg-center bg-cover object-cover bg-no-repeat lg:rounded-xl'
        width={500}
        height={500}
        />
    </div>
  )
}

export default ListingDetailsImage