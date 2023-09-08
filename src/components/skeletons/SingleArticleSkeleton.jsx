const SingleArticleSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 items-center lg:grid lg:grid-cols-2 lg:items-start gap-2">
      <article className="space-y-3">
        <div className="flex justify-between space-x-1">
          <div className="w-64 h-8 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        <div className="w-full h-64 bg-gray-300 rounded animate-pulse"></div>
        <div className="flex justify-between">
          <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="w-full h-32 bg-gray-300 rounded animate-pulse"></div>
        <div className="flex space-x-1 items-center justify-end">
          <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </article>
      <div className="">
        {/* You can add a skeleton for the CommentForm here if needed */}
        {/* <CommentFormSkeleton /> */}
        {/* Add a skeleton for CommentsList */}
        {/* <CommentsListSkeleton /> */}
      </div>
    </div>
  )
}
