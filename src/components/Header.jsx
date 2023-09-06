import { Link, NavLink } from "react-router-dom"
import logo from '../images/primary-logo.jpeg'
import { Navbar } from "./Navbar"

export const Header = ({ user }) => {
    return (
        <header className="p-3 flex items-center shadow sticky bg-white top-0 left-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="flex items-center space-x-3">
                <Link to="/"><img className="w-12 h-12 rounded" src={logo} /></Link>
                <NavLink to="/"><h1 className="text-xl font-bold">NC News</h1></NavLink>
            </div>
            <div className="flex ml-auto space-x-6">
                {/* <Navbar /> */}
                <p className="text-neutral-500">Hi, {user}</p>
            </div>
        </header>
    )
}
