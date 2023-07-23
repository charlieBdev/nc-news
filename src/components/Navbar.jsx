import { Link, NavLink } from "react-router-dom"
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
                    <NavLink to="/articles" className={({isActive}) => { isActive ? 'active' : ""}}>all</NavLink>
                    {isLoading && <Link>...loading topics...</Link>}
                    {topics.map((topic) => {
                        return <NavLink to={`/articles/${topic.slug}`} key={topic.slug}>{topic.slug}</NavLink>
                    })}
                </nav>
            </>
        )
    }
}

export default Navbar