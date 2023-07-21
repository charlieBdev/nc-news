import { Link, useSearchParams } from "react-router-dom"
import { getTopics } from "../utils/api"
import { useEffect, useState } from "react"


const Navbar = () => {
    
    const [topics, setTopics] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

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
    }, [searchParams])
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