import { NavLink } from "react-router-dom"
import { getTopics } from "../utils/api"
import { useEffect, useState } from "react"


export const Navbar = () => {

  const [topics, setTopics] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopics(topics)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(true)
      })
  }, [])

  if (isError) {
    return <p>Error!</p>
  } else {
    return (
      <nav className="p-3 text-center space-x-6 border shadow">
        {isLoading ? (
          <p>...loading topics...</p>
        ) : (
          <>
            <NavLink to="/articles" activeClassName="active-link">all</NavLink>
            {topics.map((topic) => (
              <NavLink
                to={`/articles/${topic.slug}`}
                key={topic.slug}
                activeClassName="active-link"
              >
                {topic.slug}
              </NavLink>
            ))}
          </>
        )}
      </nav>
    )
  }
}
