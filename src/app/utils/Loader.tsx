import {ThreeDots} from 'react-loader-spinner'

type Props = {}

const Loader = (props: Props) => {
  return (
    <ThreeDots
    visible={true}
    height="60"
    width="60"
    color="#ddd"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  )
}

export default Loader