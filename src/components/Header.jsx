import { Link, NavLink } from 'react-router-dom';
import logo from '../images/primary-logo.jpeg';
import { Navbar } from './Navbar';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

// export const Header = ({ currentUser: { username, avatar_url }}) => {
export const Header = () => {
	const {
		currentUser: { username, avatar_url },
		setCurrentUser,
	} = useContext(UserContext);

	return (
		<header className="h-20 p-3 flex items-center shadow sticky bg-white top-0 left-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
			<div className="flex items-center space-x-3">
				<Link to="/">
					<img className="w-12 h-12 rounded" src={logo} />
				</Link>
				<Link to="/">
					<h1 className="text-xl font-semibold">NC News</h1>
				</Link>
			</div>
			<div className="flex ml-auto space-x-6">
				<Navbar />
				<div className="flex space-x-2 items-center">
					<p className="text-neutral-500 hidden sm:block">Hi, {username}</p>
					<img src={avatar_url} className="rounded-full border-2 w-8 h-8" />
				</div>
			</div>
		</header>
	);
};
