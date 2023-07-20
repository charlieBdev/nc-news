import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ArticlePage from './pages/ArticlePage'
import { useEffect, useState } from 'react'
import { getTopics } from './utils/api'

function App() {

  const [user] = useState('grumpy19')
  const [topics, setTopics] = useState([])
  const [topic, setTopic] = useState('')

  useEffect(() => {
    getTopics()
    .then((topics) => {
        setTopics(topics)
    })
  }, [])
  
  return (
    <>
      <Header user={user}/>
      <Navbar topics={topics} topic={topic} setTopic={setTopic}/>
      <Routes>
        <Route path="/" element={<Home topics={topics} setTopics={setTopics}/>}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
      </Routes>
    </>
  )
}

export default App
