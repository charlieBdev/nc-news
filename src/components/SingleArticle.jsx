import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/utils';
import { useState } from 'react';
import { patchArticleVotes } from '../utils/api';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { TiArrowBackOutline } from 'react-icons/ti';
import SingleArticleSkeleton from './skeletons/SingleArticleSkeleton';

export const SingleArticle = (props) => {
	const navigate = useNavigate();

	const { isLoadingArticle } = props;
	const {
		article_id,
		title,
		author,
		body,
		created_at,
		votes,
		article_img_url,
	} = props.article;

	const [userVotes, setUserVotes] = useState(0);
	const [isClicked, setIsClicked] = useState(false);

	const handleLike = (event) => {
		event.preventDefault();
		setUserVotes((currVotes) => {
			if (!isClicked) {
				return currVotes + 1;
			} else {
				return currVotes - 1;
			}
		});
		if (!isClicked) {
			patchArticleVotes(article_id, 1)
				.then(() => {
					setIsClicked(true);
				})
				.catch(() => {
					setUserVotes((currentUserVotes) => {
						return currentUserVotes - 1;
					});
					setIsClicked(false);
				});
		} else {
			patchArticleVotes(article_id, -1)
				.then(() => {
					setIsClicked(false);
				})
				.catch(() => {
					setUserVotes((currentUserVotes) => {
						return currentUserVotes + 1;
					});
					setIsClicked(true);
				});
		}
	};

	if (isLoadingArticle) {
		return <SingleArticleSkeleton />;
	} else {
		return (
			<article className='lg:text-lg lg:w-3/4'>
				<div className='lg:w-3/4 lg:mx-auto space-y-3 lg:space-y-6'>
					<div className='flex justify-between space-x-1'>
						<h1 className='font-semibold text-lg'>{title}</h1>
						<TiArrowBackOutline
							className='w-8 h-8 min-w-8 min-h-8 text-green-500 rounded-full hover:shadow hover:cursor-pointer'
							onClick={() => navigate('/articles/all')}
						/>
					</div>
					<img
						className='rounded mx-auto lg:w-2/4'
						src={article_img_url}
						alt={title}
					/>
					<div className='flex justify-between'>
						<h2 className=''>
							<span className='text-neutral-500 '>By</span>{' '}
							<span className=''>{author}</span>
						</h2>
						<p className='text-neutral-500'>{formatDate(created_at)}</p>
					</div>
					<p className=''>{body}</p>
					<div className='flex space-x-1 items-center justify-end'>
						<p className='text-neutral-500 text-sm'>{votes + userVotes}</p>
						<button
							className='text-green-500 rounded-full hover:shadow hover:cursor-pointer'
							onClick={handleLike}
						>
							{isClicked ? (
								<AiFillLike className='w-8 h-8' />
							) : (
								<AiOutlineLike className='w-8 h-8' />
							)}
						</button>
					</div>
				</div>
			</article>
		);
	}
};
