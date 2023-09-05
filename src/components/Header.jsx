import { Link, NavLink } from "react-router-dom"
import logo from '../images/primary-logo.jpeg'

export const Header = (props) => {
    const { user } = props
    return (
        <header className="p-3 flex items-center justify-between border shadow">
            <div className="flex items-center space-x-3">
                <Link to="/"><img className="w-12 h-12" src={logo} /></Link>
                <NavLink to="/"><h1 className="text-xl font-bold">NC News</h1></NavLink>
            </div>
            <p className="text-neutral-500">Hi, {user}</p>
        </header>
    )
}
