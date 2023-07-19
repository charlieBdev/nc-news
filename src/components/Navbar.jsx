import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
                <Link to="/">Home</Link>
                <p>Logged in as: Username</p>
        </nav>
    )
}

export default Navbar