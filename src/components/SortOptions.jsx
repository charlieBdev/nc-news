import { useEffect, useState } from "react"
import { NavLink, useNavigate, useSearchParams } from "react-router-dom"
import { TbSortAscending } from "react-icons/tb"
import { TbSortDescending } from "react-icons/tb"
import { getArticles } from "../utils/api"

export const SortOptions = ({
  topics,
  articles,
  setArticles,
  isLoading,
  setIsLoading,
  setIsError }) => {

  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [topic, setTopic] = useState("all")
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by"))
  const [order, setOrder] = useState(searchParams.get("order"))

  useEffect(() => {
    setIsLoading(true)
    getArticles(topic, sortBy, order)
      .then((newArticles) => {
        setArticles(newArticles)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(err.response)
      })
  }, [topic, sortBy, order])

  return (
    <div className="pb-3 flex flex-col justify-center items-center">
      <div className="space-x-3">
        {topics.map((topic) => {
          return (
            <NavLink
              to={`/articles/${topic.slug}?sort_by=${sortBy}&order=${order}`}
              key={topic.slug}
              value={topic.slug}
              onClick={(e) => {
                setTopic(topic.slug)
              }}
              className={location.pathname === `/articles/${topic.slug}` ? "active" : ""}
            >
              {topic.slug}
            </NavLink>
          )
        })}
      </div>
      <div className="flex space-x-3 items-center">
        {isLoading ? (
          <p className="text-center p-3 text-neutral-500 animate-pulse">...loading articles...</p>
        ) : (
          <p className="text-center p-3 text-neutral-500">{articles.length} articles found</p>
        )}
        <select
          onChange={(e) => {
            setSortBy(e.target.value)
            navigate(`/articles/${topic}?sort_by=${e.target.value}&order=${order}`)
          }}
          className="border hover:shadow"
          name="sort-select"
          id="sort-select"
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <button
          onClick={(e) => {
            order === "desc" ? setOrder("asc") : setOrder("desc")
            navigate(`/articles/${topic}?sort_by=${sortBy}&order=${order === 'asc' ? 'desc' : 'asc'}`)
          }}
          id="order"
          value={order}
          className="text-2xl hover:shadow"
        >
          {order === 'asc' ? <TbSortAscending /> : <TbSortDescending />}
        </button>
      </div>
    </div>
  )
}
