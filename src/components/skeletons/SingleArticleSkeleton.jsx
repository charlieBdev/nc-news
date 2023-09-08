import { BounceLoader } from "react-spinners"


const SingleArticleSkeleton = () => {
  return (
    <div className="flex items-center justify-center h-full w-full mt-48">
      <BounceLoader color="#22c55e" size={100} loading={true} />
    </div>
  )
}

export default SingleArticleSkeleton