import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ArticlePage from './pages/ArticlePage'

function App() {
  
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
      </Routes>
    </>
  )
}

export default App
