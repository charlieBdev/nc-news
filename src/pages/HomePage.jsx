import { Link, NavLink } from "react-router-dom"
import { GiCardRandom } from "react-icons/gi"

export const HomePage = () => {

	const randomArticle = () => {
		return Math.floor(Math.random() * 37 + 1)
	}

	return (
		<section className="text-center flex flex-col justify-start h-full space-y-12">
			<h2 className="text-3xl font-bold text-green-500">Welcome to NC News</h2>
			<NavLink className="font-bold animate-pulse" to={`/articles/all?sort_by=created_at&order=desc`}>ENTER</NavLink>
			<h3>Proudly unregulated by Ofcom since 2023.</h3>
			<Link className="" to={`/article/${randomArticle()}`}><GiCardRandom className="w-12 h-12 text-green-500 mx-auto animate-pulse rounded-full hover:shadow hover:cursor-pointer" /></Link>
		</section>
	)
}

// {`/articles/all?sort_by=created_at&order=desc`}