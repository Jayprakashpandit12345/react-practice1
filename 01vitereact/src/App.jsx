import { useState } from 'react'
// import './App.css'
import Chai from './chai'
import Cobra from './cobra'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chai/>
    <Cobra/>
    </>
    
  )
}

export default App
