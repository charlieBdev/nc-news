import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom"
import { TbSortAscending, TbSortDescending } from "react-icons/tb"
import { getArticles } from "../utils/api"
import ArticlesFoundSkeleton from "./skeletons/ArticlesFoundSkeleton"

export const SortOptions = ({
  topics,
  articles,
  setArticles,
  isLoadingArticles,
  setIsLoadingArticles,
  setIsError
}) => {

  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [topic, setTopic] = useState("all")
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by") || "created_at")
  const [order, setOrder] = useState(searchParams.get("order") || "desc")

  useEffect(() => {
    setIsError(false)
    setIsLoadingArticles(true)
    getArticles(topic, sortBy, order)
      .then((newArticles) => {
        setArticles(newArticles)
        setIsLoadingArticles(false)
      })
      .catch((err) => {
        setIsError(err.response)
      })
  }, [topic, sortBy, order])


  return (
    <div className="pb-3 flex flex-col items-center">
      <ul className="flex space-x-3 lg:space-x-6">
        {topics.map(({ slug }) => (
          <li key={slug} >
            <NavLink
              to={`/articles/${slug}?sort_by=${sortBy}&order=${order}`}
              onClick={() => setTopic(slug)}
            >
              {slug}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-2 items-end space-y-2">
        {isLoadingArticles ? (
          <ArticlesFoundSkeleton />
        ) : (
          <p className="text-right text-neutral-500">{articles.length} articles found</p>
        )}
        <div className="flex space-x-3">
          <select
            onChange={(e) => {
              const newSortBy = e.target.value
              setSortBy(newSortBy)
              navigate(`/articles/${topic}?sort_by=${newSortBy}&order=${order}`)
            }}
            className="border hover:shadow rounded"
            name="sort-select"
            >
            <option value="created_at">Date</option>
            <option value="author">Author</option>
            <option value="comment_count">Comments</option>
            <option value="title">Title</option>
            <option value="votes">Votes</option>
          </select>
          <button
            onClick={(e) => {
              const newOrder = order === "desc" ? "asc" : "desc"
              setOrder(newOrder)
              navigate(`/articles/${topic}?sort_by=${sortBy}&order=${newOrder}`)
            }}
            id="order"
            value={order}
            className="text-2xl hover:shadow"
            >
            {order === 'asc' ? <TbSortAscending /> : <TbSortDescending />}
          </button>
        </div>
      </div>
    </div>
  )
}
