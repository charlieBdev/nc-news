import { BounceLoader } from "react-spinners"


const SingleArticleSkeleton = () => {
  return (
    <div className="mt-20 mb-20 flex items-center justify-center h-full w-full">
      <BounceLoader color="#22c55e" size={100} loading={true} />
    </div>
  )
}

export default SingleArticleSkeleton