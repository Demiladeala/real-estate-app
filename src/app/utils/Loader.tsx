import {ThreeDots} from 'react-loader-spinner'

type Props = {
  width?: string;
}

const Loader = ({ width }: Props) => {
  return (
    <ThreeDots
    visible={true}
    height="30"
    width={width}
    color="#ddd"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  )
}

export default Loader