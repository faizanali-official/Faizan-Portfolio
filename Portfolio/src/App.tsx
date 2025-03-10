import React from 'react'
import './App.css'
import { Button } from 'flowbite-react'

  const App:React.FC = () => {

  return (
    <>
      <h1 className='text-[green] text-center font-bold py-2'>Portfolio</h1>
      <Button color="success" pill>Click me</Button>
    </>
  )
}

export default App
