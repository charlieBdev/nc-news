import { Link } from "react-router-dom"
import Home from "../pages/Home"

const Navbar = (props) => {
    const { topics } = props

    // const handleChangeTopic = (event) => {
    //     event.preventDefault()
    //     console.log(event.target.value, '<<< event')
    //     setTopic(event.target.value)
    //     console.log(topic, '<<< topic')
    // }

    return (
        <nav className="navbar">
                <Link to="/">Home</Link>
                {topics.map((topic) => {
                    return <Link to={`/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                })}
        </nav>
    )
}

export default Navbar