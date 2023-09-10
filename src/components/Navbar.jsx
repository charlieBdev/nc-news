import { NavLink } from "react-router-dom"
import { BsNewspaper } from "react-icons/bs"
import { FaUsersRectangle } from "react-icons/fa6"

export const Navbar = () => {

  return (
    <nav className="flex space-x-3 items-center">
      <NavLink to={'/articles/all'} className="text-xl"><BsNewspaper /></NavLink>
      <NavLink to={'/articles/all'} className="hidden sm:block">Articles</NavLink>
      <NavLink to={'/users'} className="text-xl"><FaUsersRectangle /></NavLink>
      <NavLink to={'/users'} className="hidden sm:block">Users</NavLink>
    </nav>
  )
}
