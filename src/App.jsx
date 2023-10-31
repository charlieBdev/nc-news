import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header, Error, SortOptions, ArticlesList } from './components';
import { getTopics } from './utils/api';
import { HomePage, ArticlePage, UsersPage } from './pages';

function App() {
	const [topics, setTopics] = useState([]);
	const [articles, setArticles] = useState([]);

	const [isLoadingArticles, setIsLoadingArticles] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		getTopics()
			.then((topics) => {
				const topicsAndAll = [{ slug: 'all' }, ...topics];
				setTopics(topicsAndAll);
				// setIsLoading(false)
			})
			.catch((err) => {
				// setIsError(true)
			});
	}, []);

	const error = {
		errorStatus: 404,
		errorMessage: 'Not found',
	};

	return (
		<div className='font-sans'>
			<Header />

			<main className='p-3 h-[calc(100dvh-5rem)]'>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route
						path='/articles/:topic'
						element={
							<>
								<SortOptions
									topics={topics}
									articles={articles}
									setArticles={setArticles}
									isLoadingArticles={isLoadingArticles}
									setIsLoadingArticles={setIsLoadingArticles}
									setIsError={setIsError}
								/>
								<ArticlesList
									articles={articles}
									// setArticles={setArticles}
									isLoadingArticles={isLoadingArticles}
									isError={isError}
								/>
							</>
						}
					></Route>
					<Route path='/article/:article_id' element={<ArticlePage />}></Route>
					<Route path='/users' element={<UsersPage />}></Route>
					<Route
						path='*'
						element={
							<Error
								errorStatus={error.errorStatus}
								errorMessage={error.errorMessage}
							/>
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
