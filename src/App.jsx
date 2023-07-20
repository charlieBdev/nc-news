import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ArticlePage from './pages/ArticlePage'
import { useEffect, useState } from 'react'
import { getTopics } from './utils/api'

function App() {

  const [topics, setTopics] = useState([])
  const [user, setUser] = useState('tickle122')

  useEffect(() => {
    getTopics()
    .then((topics) => {
        setTopics(topics)
    })
  }, [])
  
  return (
    <>
      <Header user={user}/>
      <Navbar topics={topics}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:topic" element={<Home />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage user={user}/>}></Route>
      </Routes>
    </>
  )
}

export default App
