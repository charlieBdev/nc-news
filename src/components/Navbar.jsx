import { Link } from "react-router-dom"
import Home from "../pages/Home"

const Navbar = (props) => {
    console.log(props, '<<< props')
    const { topics, topic, setTopic } = props
    console.log(topics, '<<< topics')

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
                    return <Link to="/articles/?topic=slug" key={topic.slug} element={<Home topic={topic.slug} />} value={topic.slug}>{topic.slug}</Link>
                })}
        </nav>
    )
}

export default Navbar