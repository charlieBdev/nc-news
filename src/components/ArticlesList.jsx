import { ArticleCard } from "../components"
import { Error } from "../components"
import ArticleCardSkeleton from "./skeletons/ArticleCardSkeleton"

export const ArticlesList = ({ articles, isLoadingArticles, isError }) => {
  if (isError) {
    return (
      <Error
        errorStatus={isError.status}
        errorMessage={isError.data.message}
      />
    )
  } else {
    return (
      <div>
        {isLoadingArticles ? (
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 16 }).map((_, index) => (
              <li key={index} className="">
                <ArticleCardSkeleton />
              </li>
            ))}
          </ul>
        ) : (
          <>
            {/* <p className="text-center p-3 text-neutral-500">{articles.length} articles found</p> */}
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {articles.map((article) => {
                return (
                  <li key={article.article_id} className="">
                    <ArticleCard article={article} />
                  </li>
                )
              })}
            </ul>
          </>
        )}
      </div>
    )
  }
}
