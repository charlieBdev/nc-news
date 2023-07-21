import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ArticlePage from './pages/ArticlePage'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState('tickle122')

  return (
    <>
      <Header user={user}/>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/articles" element={<Home />}></Route>
        <Route path="/articles?topic=:topic" element={<Home />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage user={user}/>}></Route>
      </Routes>
    </>
  )
}

export default App
