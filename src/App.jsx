import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Header, Error, SortOptions, ArticlesList } from './components'
import { getTopics } from './utils/api'
import { HomePage, ArticlePage, UsersPage } from './pages'


function App() {

  const [user, setUser] = useState('tickle122')

  const [topics, setTopics] = useState([])
  const [articles, setArticles] = useState([])

  const [isLoadingArticles, setIsLoadingArticles] = useState(true)
  const [isError, setIsError] = useState(false)
  // const [isError, setIsError] = useState(null)

  useEffect(() => {
    getTopics()
      .then((topics) => {
        const topicsAndAll = [{ slug: 'all' }, ...topics]
        setTopics(topicsAndAll)
        // setIsLoading(false)
      })
      .catch((err) => {
        // setIsError(true)
      })
  }, [])

  const error = {
    errorStatus: 404,
    errorMessage: 'Not found'
  }

  return (
    <div className="font-sans">
      <Header user={user} />

      <main className="p-3 h-[calc(100vh - 20)]">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/articles/all" element={<ArticlesPage topic={topic} setTopic={setTopic} sortBy={sortBy} order={order} />}></Route> */}
          <Route
            path="/articles/:topic"
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
            }>
          </Route>
          {/* <Route path="/articles/:topic?" element={<Articles />}></Route> */}
          <Route path="/article/:article_id" element={<ArticlePage user={user} />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
          <Route path="*" element={<Error errorStatus={error.errorStatus} errorMessage={error.errorMessage} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
