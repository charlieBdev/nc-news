import { Link, NavLink } from 'react-router-dom';
import { GiCardRandom } from 'react-icons/gi';

export const HomePage = () => {
	const amountOfArticles = 37;

	let randomArticle = () => {
		return Math.floor(Math.random() * amountOfArticles) + 1;
	};

	return (
		<section className='h-full text-center flex flex-col justify-center items-center gap-10'>
			<div className='space-y-3'>
				<h2 className='text-3xl font-bold text-green-500'>
					Welcome to NC News
				</h2>
				<h3 className='italic text-neutral-500'>
					Proudly unregulated since 2008.
				</h3>
			</div>
			<NavLink
				className='font-bold animate-pulse'
				to={`/articles/all?sort_by=created_at&order=desc`}
			>
				ENTER
			</NavLink>
			<Link className='' to={`/article/${randomArticle()}`}>
				<GiCardRandom className='w-12 h-12 text-green-500 mx-auto animate-pulse rounded-full hover:shadow hover:cursor-pointer' />
			</Link>
		</section>
	);
};
