"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PropertiesCard from "./PropertiesCard"

type Props = {}

const SimilarHomes = (props: Props) => {

    const properties = [
        <PropertiesCard key={1} />,
        <PropertiesCard key={2} />,
        <PropertiesCard key={3} />,
        <PropertiesCard key={4} />,
        <PropertiesCard key={5} />,
        <PropertiesCard key={6} />,
        <PropertiesCard key={7} />,
        <PropertiesCard key={8} />,
        <PropertiesCard key={9} />,
      ];

  return (
    <div className="relative my-3">
        <div
          className="z-10 absolute top-[40%] left-[-1rem] bg-white border border-[#222] rounded-full w-12 h-12 shadow-xl flex justify-center items-center cursor-pointer"
        >
          <ChevronLeft />
        </div>

        <div
          className="z-10 absolute top-[40%] right-[-1.3rem] bg-white border border-[#222] rounded-full w-12 h-12 shadow-xl flex justify-center items-center cursor-pointer"
        >
          <ChevronRight />
        </div>

        <div className="relative mt-8 flex items-center gap-5 overflow-x-scroll scroll-none">
        {properties.map((property, index) => (
          <div key={index} className="flex-shrink-0">
            {property}
          </div>
        ))}
        </div>
    </div>
  )
}

export default SimilarHomes