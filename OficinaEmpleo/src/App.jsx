import { useState } from 'react'
import NavBar from "./layout/navbar/NavBar"
import Home from './pages/home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home/>
    </>
  )
}

export default App
