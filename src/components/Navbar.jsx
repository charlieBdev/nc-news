import { NavLink } from "react-router-dom"


export const Navbar = () => {

  return (
    <nav className="">
      <NavLink to={`/articles/all?sort_by=created_at&order=desc`}>Articles</NavLink>
    </nav>
  )
}
