import { Link } from "react-router-dom"

const Navbar = (props) => {
    const { topics } = props

    return (
        <nav className="navbar">
                {topics.map((topic) => {
                    return <Link to={`/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                })}
        </nav>
    )
}

export default Navbar