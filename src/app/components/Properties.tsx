import Image from 'next/image'
import image1 from '../../../public/property-image-1.jpg'
import { IoLocationOutline } from "react-icons/io5";

type Props = {}

const Properties = (props: Props) => {
  return (
    <>
    <div className='mt-20 md:mt-24'></div>
    <div className='w-[95%] mx-auto'>
      <h2 className='text-2xl md:text-3xl text-[#222]'>Featured <strong>Properties</strong></h2>
      <p>Browse homes around ₦500,000 in Abuja, Nigeria</p>

      <div className='my-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* LISTINGS */}

        <div className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
          <div className='w-full h-[17rem] rounded-xl'>
            <Image 
            className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
            alt="property"
            src={image1}
            />
          </div>

          <div className='p-3'>
            <h3 className='text-xl font-semibold'>Glass Residence</h3>
            <p className="max-md:hidden text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum.</p>
            <div className="w-full h-px bg-[#eee] my-2"></div>
            <h3 className='font-semibold'>₦2,000,000</h3>
            <div className='mt-1 flex items-center gap-2'>
              <p><strong>3</strong> Bed</p>
              <p><strong>2</strong> Bath</p>
              <p><strong>2,690</strong> sqft</p>
              <p><strong>1.2</strong> acre lot</p>
            </div>

            <div className='mt-2 flex justify-between items-center gap-2'>
              <div className='flex items-center gap-1'>
                <IoLocationOutline />
                <p className='text-sm'>Ibrahim Crescent - <span>Abuja</span></p>
              </div>
              <div>
                <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold'>Commit</button>
              </div>
            </div>
          </div>

        </div>

        <div className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
          <div className='w-full h-[17rem] rounded-xl'>
            <Image 
            className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
            alt="property"
            src={image1}
            />
          </div>

          <div className='p-3'>
            <h3 className='text-xl font-semibold'>Glass Residence</h3>
            <p className="max-md:hidden text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum.</p>
            <div className="w-full h-px bg-[#eee] my-2"></div>
            <h3 className='font-semibold'>₦2,000,000</h3>
            <div className='mt-1 flex items-center gap-2'>
              <p><strong>3</strong> Bed</p>
              <p><strong>2</strong> Bath</p>
              <p><strong>2,690</strong> sqft</p>
              <p><strong>1.2</strong> acre lot</p>
            </div>

            <div className='mt-2 flex justify-between items-center gap-2'>
              <div className='flex items-center gap-1'>
                <IoLocationOutline />
                <p className='text-sm'>Ibrahim Crescent - <span>Abuja</span></p>
              </div>
              <div>
                <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold'>Commit</button>
              </div>
            </div>
          </div>

        </div>

        <div className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
          <div className='w-full h-[17rem] rounded-xl'>
            <Image 
            className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
            alt="property"
            src={image1}
            />
          </div>

          <div className='p-3'>
            <h3 className='text-xl font-semibold'>Glass Residence</h3>
            <p className="max-md:hidden text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum.</p>
            <div className="w-full h-px bg-[#eee] my-2"></div>
            <h3 className='font-semibold'>₦2,000,000</h3>
            <div className='mt-1 flex items-center gap-2'>
              <p><strong>3</strong> Bed</p>
              <p><strong>2</strong> Bath</p>
              <p><strong>2,690</strong> sqft</p>
              <p><strong>1.2</strong> acre lot</p>
            </div>

            <div className='mt-2 flex justify-between items-center gap-2'>
              <div className='flex items-center gap-1'>
                <IoLocationOutline />
                <p className='text-sm'>Ibrahim Crescent - <span>Abuja</span></p>
              </div>
              <div>
                <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold'>Commit</button>
              </div>
            </div>
          </div>

        </div>

        <div className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
          <div className='w-full h-[17rem] rounded-xl'>
            <Image 
            className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
            alt="property"
            src={image1}
            />
          </div>

          <div className='p-3'>
            <h3 className='text-xl font-semibold'>Glass Residence</h3>
            <p className="max-md:hidden text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum.</p>
            <div className="w-full h-px bg-[#eee] my-2"></div>
            <h3 className='font-semibold'>₦2,000,000</h3>
            <div className='mt-1 flex items-center gap-2'>
              <p><strong>3</strong> Bed</p>
              <p><strong>2</strong> Bath</p>
              <p><strong>2,690</strong> sqft</p>
              <p><strong>1.2</strong> acre lot</p>
            </div>

            <div className='mt-2 flex justify-between items-center gap-2'>
              <div className='flex items-center gap-1'>
                <IoLocationOutline />
                <p className='text-sm'>Ibrahim Crescent - <span>Abuja</span></p>
              </div>
              <div>
                <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold'>Commit</button>
              </div>
            </div>
          </div>

        </div>

        <div className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
          <div className='w-full h-[17rem] rounded-xl'>
            <Image 
            className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
            alt="property"
            src={image1}
            />
          </div>

          <div className='p-3'>
            <h3 className='text-xl font-semibold'>Glass Residence</h3>
            <p className="max-md:hidden text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum.</p>
            <div className="w-full h-px bg-[#eee] my-2"></div>
            <h3 className='font-semibold'>₦2,000,000</h3>
            <div className='mt-1 flex items-center gap-2'>
              <p><strong>3</strong> Bed</p>
              <p><strong>2</strong> Bath</p>
              <p><strong>2,690</strong> sqft</p>
              <p><strong>1.2</strong> acre lot</p>
            </div>

            <div className='mt-2 flex justify-between items-center gap-2'>
              <div className='flex items-center gap-1'>
                <IoLocationOutline />
                <p className='text-sm'>Ibrahim Crescent - <span>Abuja</span></p>
              </div>
              <div>
                <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold'>Commit</button>
              </div>
            </div>
          </div>

        </div>

        <div className='border rounded-xl shadow-md hover:shadow-2xl cursor-pointer'>
          <div className='w-full h-[17rem] rounded-xl'>
            <Image 
            className='w-full h-full bg-center bg-no-repeat object-cover rounded-tl-xl rounded-tr-xl'
            alt="property"
            src={image1}
            />
          </div>

          <div className='p-3'>
            <h3 className='text-xl font-semibold'>Glass Residence</h3>
            <p className="max-md:hidden text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum.</p>
            <div className="w-full h-px bg-[#eee] my-2"></div>
            <h3 className='font-semibold'>₦2,000,000</h3>
            <div className='mt-1 flex items-center gap-2'>
              <p><strong>3</strong> Bed</p>
              <p><strong>2</strong> Bath</p>
              <p><strong>2,690</strong> sqft</p>
              <p><strong>1.2</strong> acre lot</p>
            </div>

            <div className='mt-2 flex justify-between items-center gap-2'>
              <div className='flex items-center gap-1'>
                <IoLocationOutline />
                <p className='text-sm'>Ibrahim Crescent - <span>Abuja</span></p>
              </div>
              <div>
                <button className='px-3 py-1 border border-[#222] rounded-3xl font-semibold'>Commit</button>
              </div>
            </div>
          </div>

        </div>

      {/* END LISTINGS */}
      </div>

      <div className='my-8 w-full flex justify-center items-center'>
        <button className='px-3 py-2 bg-[#222] text-white rounded-lg hover:opacity-90'>Browse More Properties</button>
      </div>

    </div>
    </>
  )
}

export default Properties