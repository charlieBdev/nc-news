const CommentCardSkeleton = () => {
  return (
    <div className="w-full space-y-1 shadow rounded p-1 hover:shadow-lg bg-white animate-pulse">
      <div className="flex justify-between bg-neutral-300">
        <div className="w-2/5 h-5 rounded"></div>
        <div className="w-1/5 h-5 rounded"></div>
      </div>

      <div className="w-full h-24 rounded mt-2"></div>

      <div className="flex justify-end items-center">
        <button
          disabled
          className="bg-green-300 rounded-full hover:shadow hover:cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full"></div>
        </button>
      </div>
    </div>
  )
}

export default CommentCardSkeleton