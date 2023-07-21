import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState('tickle122')

  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles?topic=:topic" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage user={user}/>}></Route>
      </Routes>
    </>
  )
}

export default App
