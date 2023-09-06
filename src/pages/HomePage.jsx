import { Link, NavLink } from "react-router-dom"

export const HomePage = () => {

	const randomArticle = () => {
		return Math.floor(Math.random() * 37 + 1)
	}

	return (
		<section className="text-center flex flex-col justify-start h-full space-y-12">
			<h2 className="text-3xl font-bold text-green-500">Welcome to NC News</h2>
			<NavLink className="underline" to={`/articles/all?sort_by=created_at&order=desc`}>Enter</NavLink>
			<h3>Proudly unregulated by Ofcom since 2023.</h3>
			<Link className="underline" to={`/article/${randomArticle()}`}>Read a random article, punk!</Link>
		</section>
	)
}

// {`/articles/all?sort_by=created_at&order=desc`}