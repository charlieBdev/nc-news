import { Link } from "react-router-dom"
import { getTopics } from "../utils/api"
import { useEffect, useState } from "react"


const Navbar = () => {
    
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
            <>
                <nav className="navbar">
                    <Link to="/articles">all</Link>
                    {isLoading && <Link>...loading topics...</Link>}
                    {topics.map((topic) => {
                        // onClick={(e) => setTopic(e.target.value)}
                        return <Link to={`/articles/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                    })}
                </nav>
            </>
        )
    }
}

export default Navbar