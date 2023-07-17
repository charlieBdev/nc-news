import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <select name="topics" id="topic-select">
                    <option value="topic-0">Choose a topic</option>
                    <option value="topic-1">Topic 1</option>
                    <option value="topic-1">Topic 2</option>
                    <option value="topic-1">Topic 3</option>
                </select>
                <li>Username</li>
            </ul>
        </nav>
    )
}

export default Navbar