const ArticleCardSkeleton = () => {
  return (
    <article className="rounded-lg shadow hover:shadow-lg h-full grid grid-cols-2 gap-1">
      <div className="flex flex-col justify-between">
        {/* image */}
        <div className="w-full h-24 bg-gray-300 rounded animate-pulse"></div>
        {/* created_at */}
        <div className="m-1 w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="space-y-1 p-1">

          {/* title */}
          <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-2/4 h-4 bg-gray-300 rounded animate-pulse"></div>
          {/* icon and by */}
          <div className="flex space-x-1 items-center">
            <div className="w-4 h-4 bg-green-300 rounded-full animate-pulse"></div>
            <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
        {/* bottom right */}
        <div className="flex space-x-1 justify-end items-center p-1">
          <div className="w-6 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-6 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-6 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-6 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </article>
  )
}

export default ArticleCardSkeleton