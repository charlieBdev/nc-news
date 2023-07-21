import { Link } from "react-router-dom"
import { getTopics } from "../utils/api"
import { useEffect, useState } from "react"

const Navbar = (props) => {
    // const { setTopic } = props
    const [topics, setTopics] = useState([])

    const setTopic = (topic) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('topic', topic)
        setSearchParams(newParams)
    }

    useEffect(() => {
        getTopics()
        .then((topics) => {
            setTopics(topics)
        })
    }, [])
    return (
        <>
            <nav className="navbar">
                <Link to="/articles">all</Link>
                {topics.map((topic) => {
                    return <Link to={`/articles?topic=${topic.slug}`} key={topic.slug} onClick={(e) => setTopic(e.target.value)}>{topic.slug}</Link>
                })}
            </nav>
        </>
    )
}

export default Navbar