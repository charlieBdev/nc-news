import { Link } from "react-router-dom"

const Navbar = (props) => {

    const { user } = props
    return (
        <nav className="navbar">
                <Link to="/">Home</Link>
                <p>Logged in as: {user}</p>
        </nav>
    )
}

export default Navbar