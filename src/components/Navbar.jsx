import { Link } from "react-router-dom"
import { getTopics } from "../utils/api"
import { useEffect, useState } from "react"


const Navbar = () => {
    
    const [topics, setTopics] = useState([])
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getTopics()
        .then((topics) => {
            setTopics(topics)
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