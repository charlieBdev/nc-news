import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
                <Link to="/">Home</Link>
                <p>Username</p>
        </nav>
    )
}

export default Navbar