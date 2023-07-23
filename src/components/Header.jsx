import { Link, NavLink } from "react-router-dom"
import logo from '../../public/images/primary-logo.jpeg'

const Header = (props) => {
    const { user } = props
    return (
        <header>
            
            <Link to="/"><img className="nc-logo" src={logo}/></Link>
            <NavLink to="/"><h1>NC News</h1></NavLink>
            
            <p>Hi, {user}</p>
        </header>
    )
}

export default Header