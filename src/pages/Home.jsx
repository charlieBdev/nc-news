import { Link } from "react-router-dom"

export const Home = () => {

	const randomArticle = () => {
		return Math.floor(Math.random() * 37 + 1)
	}

	return (
		<section className="text-center flex flex-col justify-start h-full space-y-12">
			<h2 className="text-lg font-bold">Welcome to NC News</h2>
			<h3>Choose a topic above or...</h3>
			<Link className="underline" to={`/article/${randomArticle()}`}>Read a random article</Link>
		</section>
	)
}
