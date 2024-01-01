"use client"
import { Layers3, LayoutDashboard, Settings } from 'lucide-react'
import AddProperty from '../components/AddProperty'

type Props = {}

const page = (props: Props) => {

  return (
    <div className='w-full'>
        <div className='w-full flex'>
            {/* SIDE NAV */}
            <div className='hidden px-2 py-8 bg-slate-800 lg:flex flex-col gap-4 items-center  text-white'>
              <div className='w-full text-sm flex flex-col items-center gap-1'>
              <LayoutDashboard />
              <h2 className=''>Dashboard</h2>
              </div>

              <div className='w-full text-sm flex flex-col items-center gap-1'>
              <Layers3 />
                <h2 className=''>Properties</h2>
              </div>

              <div className='w-full text-sm flex flex-col items-center gap-1'>
              <Settings />
              <h2 className=''>Settings</h2>
              </div>

            </div>

            {/* MAIN SECTION */}
            <AddProperty />
        </div>
    </div>
  )
}

export default page