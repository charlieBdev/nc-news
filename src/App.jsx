import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  const [user, setUser] = useState('tickle122')

  return (
    <>
      <Header user={user}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles?topic=:topic" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage user={user}/>}></Route>
      </Routes>
    </>
  )
}

export default App
