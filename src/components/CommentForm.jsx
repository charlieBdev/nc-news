import { useEffect, useState } from 'react';
import { postComment } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

export const CommentForm = ({ username, setComments }) => {
	const { article_id } = useParams();
	const [newComment, setNewComment] = useState('');
	const [error, setError] = useState(null);
	const [btnIsDisabled, setBtnIsDisabled] = useState(false);
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		setBtnIsDisabled(newComment.length === 0 || newComment.length > 160);
	}, [newComment]);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (newComment.length > 0 && newComment.length <= 160) {
			setBtnIsDisabled(true);
			postComment(article_id, username, newComment)
				.then((res) => {
					setBtnIsDisabled(false);
					setComments((currComments) => {
						return [res, ...currComments];
					});
					setNewComment('');
					setError(null);
					enqueueSnackbar('Comment added!', { variant: 'success' });
				})
				.catch(() => {
					// setError('Sorry, something went wrong. Please try again.');
					setBtnIsDisabled(false);
					enqueueSnackbar('Sorry, please try again.', { variant: 'failure' });
				});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col w-full border-t border-b py-3"
		>
			<textarea
				className="border w-full p-1 rounded shadow"
				rows="3"
				type="text"
				placeholder="Add a comment..."
				value={newComment}
				id="comment"
				onChange={(event) => setNewComment(event.target.value)}
			/>
			<p
				className={
					newComment.length > 160
						? 'text-red-500 text-right'
						: 'text-neutral-500 text-right text-sm'
				}
			>
				{160 - newComment.length}
			</p>
			<button
				className={
					btnIsDisabled
						? 'mx-auto border rounded-lg border-neutral-500 text-neutral-500 px-3 py-2'
						: 'mx-auto border-2 rounded-lg border-green-500 text-green-500 font-bold px-3 py-2 hover:shadow'
				}
				disabled={btnIsDisabled}
				type="submit"
				value="submit"
			>
				Comment
			</button>
			{error && <p>{error}</p>}
		</form>
	);
};
