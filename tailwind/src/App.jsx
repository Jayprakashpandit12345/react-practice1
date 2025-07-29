import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className="bg-blue-300 text-black-300 w-full p-5 m-6 font-bold rounded-4xl text-center mb-30">hello</h1>
      <Card username="Cobra Back - Trivesh" Body="56"/>
      <Card username="katil serve - Trivesh" Body= "96"/>
      
    </div>
  )
}
export default App
