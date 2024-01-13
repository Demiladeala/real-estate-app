type Props = {}

const LoadingSkeleton = (props: Props) => {
  return (
    <div className="border rounded-xl shadow-md hover:shadow-2xl cursor-pointer animate-pulse">
        <div className="w-full h-[13rem] rounded-xl bg-gray-300"></div>
        <div className="p-3 pb-18">
        <div className="font-medium bg-gray-300 py-4 h-5 w-3/4 mb-4"></div>
        </div>
    </div>
  )
}

export default LoadingSkeleton