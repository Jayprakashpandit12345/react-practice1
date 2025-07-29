import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(10)
  
  // let counter = 10

  const addValue = () =>{
    
    // counter = counter+1
    if(counter>=20){
      alert("max value")
      //setCounter(0)
    }
    else{
      setCounter(counter+1)
    }
    
    // console.log("Clicked", counter);
  }

  const removeValue = () =>{
    // console.log("Clicked", counter);
    //counter =counter-1
    if(counter==0){
      alert("Min value")
    }
    else{
      setCounter(counter-1)
    }
    
  }

  return (
    <>
    <h1>Jay padhega react</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
