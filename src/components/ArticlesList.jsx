import { ArticleCard } from "../components"
import { Error } from "../components"

export const ArticlesList = ({ articles, isLoading, isError }) => {

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
        {isLoading ? (
          <p className="text-center animate-pulse">...loading...</p>
        ) : (
          <>
            {/* <p className="text-center p-3 text-neutral-500">{articles.length} articles found</p> */}
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {articles.map((article) => {
                return (
                  <li key={article.article_id} className="">
                    <ArticleCard article={article} isLoading={isLoading} />
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
