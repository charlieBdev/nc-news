import { NavLink } from 'react-router-dom';
import { BsNewspaper } from 'react-icons/bs';
import { FaUsersRectangle } from 'react-icons/fa6';

export const Navbar = () => {
	return (
		<nav className="flex space-x-2 items-center">
			<div className="flex space-x-1 items-center">
				<NavLink to={'/articles/all'} className="text-2xl">
					<BsNewspaper />
				</NavLink>
				<NavLink to={'/articles/all'} className="hidden sm:block">
					Articles
				</NavLink>
			</div>
			<div className="flex space-x-1 items-center">
				<NavLink to={'/users'} className="text-2xl">
					<FaUsersRectangle />
				</NavLink>
				<NavLink to={'/users'} className="hidden sm:block">
					Users
				</NavLink>
			</div>
		</nav>
	);
};
