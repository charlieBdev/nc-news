import './App.css'
import './css/Articles.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Header, Navbar, Error } from './components'
import { Home, Articles, ArticlePage } from './pages'


function App() {

  const [user, setUser] = useState('tickle122')

  const error = {
    errorStatus: 404,
    errorMessage: 'Not found'
  }

  return (
    <div className="flex flex-col">
      <Header user={user} />
      <Navbar />
      <main className="p-3 h-screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles/:topic" element={<Articles />}></Route>
          <Route path="/article/:article_id" element={<ArticlePage user={user} />}></Route>
          <Route path="*" element={<Error errorStatus={error.errorStatus} errorMessage={error.errorMessage} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
