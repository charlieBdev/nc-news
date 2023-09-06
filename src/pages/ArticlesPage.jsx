import { useEffect, useState } from "react"
import { ArticlesList, SortOptions } from "../components"
import { getArticles } from "../utils/api"
import { useParams, useSearchParams } from "react-router-dom"

export const ArticlesPage = () => {

  const { topic } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const sortByQuery = searchParams.get("sort_by") || "created_at"
  const orderQuery = searchParams.get("order") || "desc"

  const [articles, setArticles] = useState([])
  const [isLoadingArticles, setIsLoadingArticles] = useState(true)
  const [isErrorLoadingArticles, setIsErrorLoadingArticles] = useState(false)


  useEffect(() => {
    getArticles(topic, sortByQuery, orderQuery)
      .then((articles) => {
        setArticles(articles)
        setIsLoadingArticles(false)
      })
      .catch((err) => {
        setIsLoadingArticles(false)
        setIsErrorLoadingArticles(err)
        // setIsErrorLoadingArticles(true)
      })
  }, [topic, sortByQuery, orderQuery])

  const updateSortOptions = (newSortBy, newOrder) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('sort_by', newSortBy)
    newParams.set('order', newOrder)
    setSearchParams(newParams)
  }

  return (
    <section>
      <ArticlesList
        articles={articles}
        isLoadingArticles={isLoadingArticles}
        isErrorLoadingArticles={isErrorLoadingArticles}
      />
    </section>
  )
}
