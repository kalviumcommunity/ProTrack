import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import AllRoutes from './Components/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    <AllRoutes/>

    </>
  )
}

export default App
