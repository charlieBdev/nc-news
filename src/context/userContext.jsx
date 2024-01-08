import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = (props) => {
	const [user, setUser] = useState({
		username: 'tickle122',
		avatar_url:
			'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953',
	});
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{props.children}
		</UserContext.Provider>
	);
};
