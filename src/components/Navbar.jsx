import { Link } from "react-router-dom"
import { getTopics } from "../utils/api"
import { useEffect, useState } from "react"

const Navbar = (props) => {
    const { setTopic } = props
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics()
        .then((topics) => {
            setTopics(topics)
        })
    }, [])

    return (
        <>
            <nav className="navbar">
                {topics.map((topic) => {
                    return <Link to={`/articles?topic=${topic.slug}`} key={topic.slug} onClick={(e) => setTopic(e.target.value)}>{topic.slug}</Link>
                })}
            </nav>
        </>
    )
}

export default Navbar