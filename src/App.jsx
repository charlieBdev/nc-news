import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import Home from './pages/Home'
import Error from './components/Error'

function App() {

  const [user, setUser] = useState('tickle122')

  const error = {
    errorStatus: 404,
    errorMessage: 'Not found'
  }

  return (
    <>
      <Header user={user}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:topic" element={<Articles />}></Route>
        <Route path="/article/:article_id" element={<ArticlePage user={user}/>}></Route>
        <Route path="*" element={<Error errorStatus={error.errorStatus} errorMessage={error.errorMessage}/>} />
      </Routes>
    </>
  )
}

export default App
