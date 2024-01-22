import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const UserCard = ({ username, avatar_url }) => {
	const { setUser } = useContext(UserContext);

	const handleClick = () => {
		setUser({
			username,
			avatar_url,
		});
	};

	return (
		<div
			className='w-full flex justify-between items-center p-3 rounded-lg shadow hover:shadow-lg hover:cursor-pointer'
			onClick={handleClick}
		>
			<p>{username}</p>
			<img src={avatar_url} className='rounded-full w-12 h-12' />
		</div>
	);
};
