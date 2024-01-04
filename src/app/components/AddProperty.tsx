"use client"
import Line from '../utils/Line'
import Input from '../utils/Input'
import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFormState } from '../utils/hooks'
import { AlignJustify } from 'lucide-react'
import { ChangeEvent, useCallback, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Loader from '../utils/Loader'

type Props = {}

const AddProperty = (props: Props) => {
  const queryClient = useQueryClient()
  const notify = () => toast.success('Property added successfully');
  
  const initialPropertyState = {
    name: "",
    type: "",
    status:"Sale",
    bed: 1,
    bath: 1,
    sqft: 0,
    monthlyPayment: 0,
    communityInformation: "",
    schools: [],
    description: "",
    image: [],
    address: "",
    price: 0,
    features: [],
  }
  const [state, setProperty] = useFormState(initialPropertyState);

    const [files, setFiles] = useState<FileList | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFiles(e.target.files);
      }
    };

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => 
      {
          setProperty(event?.target.name, event?.target?.value);
      }, [setProperty]);

    const [propertyStatus, setPropertyStatus] = useState('Sale');
    const [beds, setBeds] = useState('1');
    const [baths, setBaths] = useState('1');

    const handlePropertyStatusChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setPropertyStatus(event.target.value);
    }, []);

    const handleBedsStatusChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setBeds(event.target.value);
    }, []);

    const handleBathsStatusChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setBaths(event.target.value);
    }, []);

    const {mutate:submitProperty, isPending } = useMutation({
      mutationFn: async() => await axios.post('/api/properties', {
        images: files,
        name: state.name,
        description: state.description,
        address: state.address,
        price: state.price,
        bedrooms: beds,    
        bathrooms: baths,
        sqft: state.sqft,
        features: state.features,
        propertyType: state.type,
        type: "property",
        status: propertyStatus,
        monthlyPayment: state.monthlyPayment,
        nearbySchools: state.schools,
        communicationInfo: state.communityInformation,
      }),
      onSuccess: () => {
        notify()
        setFiles(null)
        setBeds("1")
        setBaths("1")
      },
      onError: () => {
        toast.error('Something went wrong, please try again')
      }
    })

  return (
    <section className='w-full py-3'>
      <Toaster />
              <div className='w-[90%] md:w-[95%] mx-auto'>
                <AlignJustify
                size={20}
                className='cursor-pointer text-sm text-slate-600'/>

                <div className='mt-8'>
                  <h2 className='w-full bg-white p-2 rounded-lg shadow'>Property / Add New Property</h2>

                  <main className='mt-7 mb-8 w-full bg-white p-2 rounded-lg shadow lg:px-4'>
                    <div className="mt-5 flex items-center gap-3">
                      <div className='relative cursor-pointer'>
                        <h2 className='text-dark-800 font-semibold'>Add Property</h2>
                        <Line className='absolute top-3 bg-orange-600'/>
                      </div>

                      <div className='relative cursor-pointer'>
                        <h2>Add Land </h2>
                      </div>
                    </div>

                    <div className='w-full h-px bg-gray-100 mt-5'></div>

                    <div className='w-full mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5'>
                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Property Name</h4>
                         <Input
                         onChange={handleInputChange}
                         name='name'
                         value={state.name} 
                         type='text' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                        
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Property Type</h4>
                        <Input 
                        onChange={handleInputChange}
                        name='type'
                        value={state.type} 
                        type='text' placeholder='office,villa,apartment' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Property Status</h4>
                        <select
                        value={propertyStatus}
                        onChange={handlePropertyStatusChange}
                        className='mt-2 w-full text-sm text-[#6e6e6e] p-2 rounded-lg border border-gray-400 outline-none placeholder:text-sm placeholder:text-[#6e6e6e]'>
                          <option value="Sale">For Sale</option>
                          <option value="Rent">For Rent</option>
                        </select>
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Beds</h4>
                        <select 
                        value={beds}
                        onChange={handleBedsStatusChange}
                        className='mt-2 w-full text-sm text-[#6e6e6e] p-2 rounded-lg border border-gray-400 outline-none placeholder:text-sm placeholder:text-[#6e6e6e]'>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Baths</h4>
                        <select 
                        value={baths}
                        onChange={handleBathsStatusChange}
                        className='mt-2 w-full text-sm text-[#6e6e6e] p-2 rounded-lg border border-gray-400 outline-none placeholder:text-sm placeholder:text-[#6e6e6e]'>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Sqft</h4>
                        <Input 
                         onChange={handleInputChange}
                         name='sqft'
                         value={state.sqft} 
                        type='number' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Monthly Payment(Optional)</h4>
                        <Input 
                         onChange={handleInputChange}
                         name='monthlyPayment'
                         value={state.monthlyPayment} 
                        type='number' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Community Information</h4>
                        <Input 
                         onChange={handleInputChange}
                         name='communityInformation'
                         value={state.communityInformation} 
                        type='text' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Nearby Schools</h4>
                        <Input 
                         onChange={handleInputChange}
                         name='schools'
                         value={state.schools} 
                        type='text' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                    </div>

                    <div className='my-5'>
                        <h4 className='text-[#3d4465] font-medium'>Description</h4>
                        <input
                         onChange={handleInputChange}
                         name='description'
                         value={state.description} 
                         className='w-full mt-2 text-sm pb-12 text-[#6e6e6e] p-2 rounded-lg border border-gray-400 outline-none placeholder:text-sm placeholder:text-[#6e6e6e] resize-none'
                        />
                    </div>

                    <div>
                    <input
                      onChange={handleFileChange}
                      type="file"
                      accept="image/*"
                      multiple
                    />
                    </div>

                    <div className='w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-5'>
                      
                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Address</h4>
                        <Input 
                        onChange={handleInputChange}
                        name='address'
                        value={state.address} 
                        type='text' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                      <div>
                        <h4 className='text-[#3d4465] font-medium'>Property Price</h4>
                        <Input 
                        onChange={handleInputChange}
                        name='price'
                        value={state.price} 
                        type='number' className='placeholder:text-sm placeholder:text-[#6e6e6e]' />
                      </div>

                    </div>

                    <div className='my-5'>
                        <h4 className='text-[#3d4465] font-medium'>Additional Features</h4>
                        <Input 
                        onChange={handleInputChange}
                        name='features'
                        value={state.features} 
                        type='text' className='text-sm text-[#6e6e6e]' />
                    </div>

                    <div className='mb-3 flex items-center gap-3'>
                      
                      <button 
                      onClick={() => submitProperty()}
                      type='submit' className='py-[5px] px-5 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-800'>
                        {isPending ?
                        (<Loader />) :
                        <> Submit </> 
                        }
                      </button>
                      <button className='py-[5px] px-5 rounded-lg bg-[#ffe5df] text-[#FF6746] hover:bg-[#FF6746] hover:text-[#ffe5df]'>Cancel</button>
                    </div>

                  </main>
                </div>
              </div>
            </section>
  )
}

export default AddProperty