import { useState } from 'react'
// import './App.css'
import Chai from './chai'
import Cobra from './cobra'
import { Child } from './component/Child'
import UsercontextProvider from './context/UsercontextProvider'

function App() {
  const [user, setUser] = useState({name: "JAy", age:30})
  return (
    <UsercontextProvider>
   <Child />
    </UsercontextProvider>
    
  )
}

export default App
