import { Link } from "react-router-dom"


const Header = (props) => {
    const { user } = props
    return (
        <header>
            
            <Link to="/"><img className="nc-logo" src="src/assets/primary-logo.jpeg"/></Link>
            <Link to="/"><h1>NC News</h1></Link>
            
            <p>Hi, {user}</p>
        </header>
    )
}

export default Header