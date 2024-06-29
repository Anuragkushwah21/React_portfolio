import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
