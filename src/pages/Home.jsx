import { Link } from "react-router-dom"

const Home = () => {

    const randomArticle = () => {
        return Math.floor(Math.random() * 37 + 1)
    }

    return (
        <main className="home-main">
            <h2>Welcome to NC News</h2>
            <h3>Choose a topic above or...</h3>
            <Link to={`/article/${randomArticle()}`}>Read a random article</Link>
        </main>
    )
}

export default Home