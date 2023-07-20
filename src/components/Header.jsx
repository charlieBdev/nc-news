const Header = (props) => {
    const { user } = props
    return (
        <header>
            <img className="nc-logo" src="src/assets/primary-logo.jpeg"/>
            <h1>NC News</h1>
            <p>Hi, {user}</p>
        </header>
    )
}

export default Header