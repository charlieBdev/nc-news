import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import { Error, SingleArticle } from '../components';
import { CommentsList, CommentForm } from '../components';
import { UserContext } from '../context/userContext';

export const ArticlePage = ({ user }) => {
	const { article_id } = useParams();
	const [article, setArticle] = useState([]);
	const [isLoadingArticle, setIsLoadingArticle] = useState(true);
	const [error, setError] = useState(null);
	const [comments, setComments] = useState([]);
	const {
		user: { username, avatar_url },
	} = useContext(UserContext);

	useEffect(() => {
		getArticleById(article_id)
			.then((articleFromApi) => {
				setArticle(articleFromApi);
				setIsLoadingArticle(false);
			})
			.catch((err) => {
				setIsLoadingArticle(false);
				setError(err);
			});
	}, [article_id]);

	if (error) {
		return (
			<Error
				errorStatus={error.response.status}
				errorMessage={error.response.data.msg}
			/>
		);
	} else {
		return (
			<div className='flex flex-col space-y-0 items-center lg:items-start lg:flex-row gap-2'>
				<SingleArticle article={article} isLoadingArticle={isLoadingArticle} />

				<div className='lg:w-1/4 lg:h-screen lg:overflow-y-auto w-full'>
					{!isLoadingArticle && (
						<div className=' bg-white'>
							<CommentForm username={username} setComments={setComments} />
						</div>
					)}

					<div className=''>
						<CommentsList
							username={username}
							article_id={article_id}
							comments={comments}
							setComments={setComments}
						/>
					</div>
				</div>
			</div>
		);
	}
};
